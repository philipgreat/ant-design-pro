

import React, { PureComponent } from 'react'
import moment from 'moment'
import {Form,Button, Table, Alert, Badge,Input,Divider,Popconfirm } from 'antd'
import styles from './BookCopy.edittable.less'
import ImagePreview from '../../components/ImagePreview'






const getRowById = (data,id) => {
  return data.filter(item => item.id === id)[0];
}

const toggleEdit = (e,data,id) =>{
  const row =  data.filter(item => item.id === id)[0];
  row[editable] = true
}




class BookCopyEditTable extends PureComponent {

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
			const bookCopyVendorId = record.bookCopyVendor.id
			const locationStoreId = record.locationStore.id
			const bookCopyStatusId = record.bookCopyStatus.id
			const bookInfoId = record.bookInfo.id

      //const communityId = record.community.id;
      return {bookCopyVendorId,locationStoreId,bookCopyStatusId,bookInfoId,};
    }
    const deleteRecord = (e,record) =>{
      const {dispatch, owner} = this.props
      const {data} = this.state
      const bookCopyIds = [record.id];
      const parameters = { bookCopyIds }
      dispatch({
        type: `${owner.type}/removeBookCopyList`,
        payload: { id: owner.id, type: 'bookCopy', parameters },
      })
    }


    const addRecord = (e,record) =>{
      const {dispatch, owner} = this.props
      const {data} = this.state
      const communityId = record.community.id;
      const parameters = { ...record, ...remapReference(record)}
      const newData = [...data];
      

      dispatch({
        type: `${owner.type}/addBookCopy`,
        payload: {
          id: owner.id,
          type: 'bookCopy',
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
      const {bookCopyId} = record.id
      const parameters = { ...record, bookCopyId }
      const newData = [...data];
      const row =  newData.filter(item => item.id === record.id)[0];
      row.editable = !row.editable 

      dispatch({
        type: `${owner.type}/updateBookCopy`,
        payload: {
          id: owner.id,
          type: 'bookCopy',
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
  { title: 'Wxa Id', debugtype: 'string', dataIndex: 'wxaId', width: '44', render: (text, record) => renderStringEdit('wxaId',text, record)  },
  { title: '书副本供应商', dataIndex: 'bookCopyVendor', render: (text, record) => (record.bookCopyVendor ? record.bookCopyVendor.displayName : '暂无') },
  { title: '书副本共享类型', debugtype: 'string', dataIndex: 'bookCopySharingType', width: '6', render: (text, record) => renderStringEdit('bookCopySharingType',text, record)  },
  { title: '存储位置', dataIndex: 'locationStore', render: (text, record) => (record.locationStore ? record.locationStore.displayName : '暂无') },
  { title: '评估价格', dataIndex: 'evaluationPrice', className:'money', render: (text, record) => ('￥'+text.toFixed(2)) },
  { title: '书副本地位', dataIndex: 'bookCopyStatus', render: (text, record) => (record.bookCopyStatus ? record.bookCopyStatus.displayName : '暂无') },
  { title: '书的信息', dataIndex: 'bookInfo', render: (text, record) => (record.bookInfo ? record.bookInfo.displayName : '暂无') },
{ title: '操作',
   render: (text, record) => renderActions(text, record)}]
   
    const newRecord =()=>{
      const newBookCopyToAppend  = {
      	'id':`+1`, 
				'wxaId':'',
				'bookCopyVendor':'',
				'bookCopySharingType':'',
				'locationStore':'',
				'evaluationPrice':'',
				'bookCopyStatus':'',
				'bookInfo':'',


      };
      const newData = data ? [...data]:[];
      newData.push(newBookCopyToAppend);
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

export default Form.create()(BookCopyEditTable)



