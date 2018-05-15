

import React, { PureComponent } from 'react'
import moment from 'moment'
import {Form,Button, Table, Alert, Badge,Input,Divider,Popconfirm } from 'antd'
import styles from './BorrowingHistory.edittable.less'
import ImagePreview from '../../components/ImagePreview'






const getRowById = (data,id) => {
  return data.filter(item => item.id === id)[0];
}

const toggleEdit = (e,data,id) =>{
  const row =  data.filter(item => item.id === id)[0];
  row[editable] = true
}




class BorrowingHistoryEditTable extends PureComponent {

  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      data: props.data,
      

    };
  }


  componentWillReceiveProps(nextProps) {

    const {data}=nextProps;
    this.setState({
        data: data,
    });
    
  }


  render() {
    // const { data,count,current, owner } = this.props
    const { data } = this.state
    const {appendInProcess} =  this.state;

    const changeText =(e, fieldName, record)=>{
      const newData = [...this.state.data];
      
      const row = getRowById(newData,record.id);
      console.log("text is changed row", row)
      if(row){
        row[fieldName] = e.target.value
        this.setState({ data: newData });
      }

    }

    const toggleEdit = (e,record) =>{
      const newData = [...this.state.data];
      const row =  newData.filter(item => item.id === record.id)[0];
      row.editable = !row.editable 
      this.setState({ data: newData });
    }
    const removeFromArray = (array, element) => {
      const index = array.indexOf(element);
      console.log("remove from array")
      if (index !== -1) {
        console.log("-------------remove from array")
          array.splice(index, 1);
      }
  }
    const cancelAppend = (e,record) =>{
      const newData = [...this.state.data];
      removeFromArray(newData,record);
      this.setState({ data: newData, appendInProcess:false });
    }
    const remapReference = (record) => {
			const borrowerId = record.borrower.id
			const bookId = record.book.id
			const bookCopyId = record.bookCopy.id
			const lendingStoreId = record.lendingStore.id
			const returnStoreId = record.returnStore.id

      //const communityId = record.community.id;
      return {borrowerId,bookId,bookCopyId,lendingStoreId,returnStoreId,};
    }
    const deleteRecord = (e,record) =>{
      const {dispatch, owner} = this.props
      const {data} = this.state
      const borrowingHistoryIds = [record.id];
      const parameters = { borrowingHistoryIds }
      dispatch({
        type: `${owner.type}/removeBorrowingHistoryList`,
        payload: { id: owner.id, type: 'borrowingHistory', parameters },
      })
    }


    const addRecord = (e,record) =>{
      const {dispatch, owner} = this.props
      const {data} = this.state
      const communityId = record.community.id;
      const parameters = { ...record, ...remapReference(record)}
      const newData = [...data];
      

      dispatch({
        type: `${owner.type}/addBorrowingHistory`,
        payload: {
          id: owner.id,
          type: 'borrowingHistory',
          parameters,
          selectedRows:newData,
          currentUpdateIndex: 0,
          continueNext: true,
        },
      })
      this.setState({ appendInProcess: false });

    }

    const updateRecord = (e,record) =>{
      const {dispatch, owner} = this.props
      const {data} = this.state
      const {borrowingHistoryId} = record.id
      const parameters = { ...record, borrowingHistoryId }
      const newData = [...data];
      const row =  newData.filter(item => item.id === record.id)[0];
      row.editable = !row.editable 

      dispatch({
        type: `${owner.type}/updateBorrowingHistory`,
        payload: {
          id: owner.id,
          type: 'borrowingHistory',
          parameters,
          selectedRows:newData,
          currentUpdateIndex: 0,
          continueNext: true,
        },
      })
     

    }

    const isAppendingRow =(record)=>{

      return appendInProcess&&record.id.indexOf("+")===0;
    }

    const renderStringEdit = (name, text, record)=>{
 
      if(isAppendingRow(record)){
        return (<Input size={"small"} style={{width:'80%'}} value={text} onChange={(e)=>changeText(e, name, record)} placeholder={"NO"}/>) 
      }
      if(record.editable){
        return (<Input size={"small"} style={{width:'80%'}} value={text} onChange={(e)=>changeText(e, name, record)} placeholder={"NO"}/>) 
      }
      return text;
    }

    const renderActions = (text,record)=>{
    
      if(isAppendingRow(record)){
        return (<div><a onClick={(e)=>addRecord(e,record)}>增加</a>
         <Divider type="vertical" />
         <a onClick={(e)=>cancelAppend(e,record)}>取消</a></div>) 
    
      }
      if(record.editable){
        return (<div><a onClick={(e)=>updateRecord(e,record)}>保存</a> 
         <Divider type="vertical" />
        <a onClick={(e)=>toggleEdit(e,record)}>取消</a></div>) 
      }
      return (<div><a onClick={(e)=>toggleEdit(e,record)}>编辑</a> 
        <Divider type="vertical" />
        
        <Popconfirm title="是否要删除此行？" onConfirm={(e)=>deleteRecord(e,record)}>
          <a>删除</a>
        </Popconfirm>  </div>
    
    );

    }
    
    
    
    const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20',  },
  { title: '借款人', dataIndex: 'borrower', render: (text, record) => (record.borrower ? record.borrower.displayName : '暂无') },
  { title: '借款人会员级别', debugtype: 'string', dataIndex: 'borrowerMemberLevel', width: '8', render: (text, record) => renderStringEdit('borrowerMemberLevel',text, record)  },
  { title: '借方成员服务过期日期。', dataIndex: 'borrowerMemberServiceExpiredDatetime', render: (text, record) => moment(record.borrowerMemberServiceExpiredDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '书', dataIndex: 'book', render: (text, record) => (record.book ? record.book.displayName : '暂无') },
  { title: '书副本', dataIndex: 'bookCopy', render: (text, record) => (record.bookCopy ? record.bookCopy.displayName : '暂无') },
  { title: '书副本共享类型', debugtype: 'string', dataIndex: 'bookCopySharingType', width: '6', render: (text, record) => renderStringEdit('bookCopySharingType',text, record)  },
  { title: '书的名字', debugtype: 'string', dataIndex: 'bookName', width: '8', render: (text, record) => renderStringEdit('bookName',text, record)  },
  { title: '贷款商店', dataIndex: 'lendingStore', render: (text, record) => (record.lendingStore ? record.lendingStore.displayName : '暂无') },
  { title: '贷款存储类型', debugtype: 'string', dataIndex: 'lendingStoreType', width: '6', render: (text, record) => renderStringEdit('lendingStoreType',text, record)  },
  { title: '贷款Datetime', dataIndex: 'lendingDatetime', render: (text, record) => moment(record.lendingDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '自由借贷天', debugtype: 'int', dataIndex: 'freeLendingDays', width: '5', render: (text, record) => renderStringEdit('freeLendingDays',text, record)  },
  { title: '免费贷款到期日期时间', dataIndex: 'freeLendingExpiredDatetime', render: (text, record) => moment(record.freeLendingExpiredDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '到期贷款利率', dataIndex: 'expiredLendingRate', className:'money', render: (text, record) => ('￥'+text.toFixed(2)) },
  { title: '到期贷款计算频率', debugtype: 'int', dataIndex: 'expiredLendingComputeFrequency', width: '5', render: (text, record) => renderStringEdit('expiredLendingComputeFrequency',text, record)  },
  { title: '返回日期时间', dataIndex: 'returnDatetime', render: (text, record) => moment(record.returnDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '返回商店', dataIndex: 'returnStore', render: (text, record) => (record.returnStore ? record.returnStore.displayName : '暂无') },
  { title: '贷款的日子', debugtype: 'int', dataIndex: 'lendingDays', width: '6', render: (text, record) => renderStringEdit('lendingDays',text, record)  },
  { title: '免费贷款到期', dataIndex: 'freeLendingExpired', render: (text, record) => (record.freeLendingExpired ? '是' : '否') },
{ title: '操作',
   render: (text, record) => renderActions(text, record)}]
   
    const newRecord =()=>{
      const newBorrowingHistoryToAppend  = {
      	'id':`+1`, 
				'borrower':'',
				'borrowerMemberLevel':'',
				'borrowerMemberServiceExpiredDatetime':'',
				'book':'',
				'bookCopy':'',
				'bookCopySharingType':'',
				'bookName':'',
				'lendingStore':'',
				'lendingStoreType':'',
				'lendingDatetime':'',
				'freeLendingDays':'',
				'freeLendingExpiredDatetime':'',
				'expiredLendingRate':'',
				'expiredLendingComputeFrequency':'',
				'returnDatetime':'',
				'returnStore':'',
				'lendingDays':'',
				'freeLendingExpired':'',


      };
      const newData = data ? [...data]:[];
      newData.push(newBorrowingHistoryToAppend);
      this.setState({ data: newData, appendInProcess: true });


    }
    

   
    
    return (
      <div className={styles.standardTable}>
        
        <Table
          rowKey={record => record.id}
          dataSource={data}
          columns={columns}
          size="small"
          pagination={false}
          scroll={{ x: 800 }}
        />

       {
        !appendInProcess&&(<Button
          style={{ width: '100%', marginTop: 16, marginBottom: 8 }}
          type="dashed"
          onClick={newRecord}
          icon="plus"
        >
          新增
        </Button>)}
      </div>
    )
  }
}

export default Form.create()(BorrowingHistoryEditTable)



