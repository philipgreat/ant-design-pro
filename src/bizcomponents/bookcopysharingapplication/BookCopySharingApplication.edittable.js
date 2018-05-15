

import React, { PureComponent } from 'react'
import moment from 'moment'
import {Form,Button, Table, Alert, Badge,Input,Divider,Popconfirm } from 'antd'
import styles from './BookCopySharingApplication.edittable.less'
import ImagePreview from '../../components/ImagePreview'






const getRowById = (data,id) => {
  return data.filter(item => item.id === id)[0];
}

const toggleEdit = (e,data,id) =>{
  const row =  data.filter(item => item.id === id)[0];
  row[editable] = true
}




class BookCopySharingApplicationEditTable extends PureComponent {

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
			const destinationStoreId = record.destinationStore.id
			const customerId = record.customer.id
			const employeeId = record.employee.id

      //const communityId = record.community.id;
      return {destinationStoreId,customerId,employeeId,};
    }
    const deleteRecord = (e,record) =>{
      const {dispatch, owner} = this.props
      const {data} = this.state
      const bookCopySharingApplicationIds = [record.id];
      const parameters = { bookCopySharingApplicationIds }
      dispatch({
        type: `${owner.type}/removeBookCopySharingApplicationList`,
        payload: { id: owner.id, type: 'bookCopySharingApplication', parameters },
      })
    }


    const addRecord = (e,record) =>{
      const {dispatch, owner} = this.props
      const {data} = this.state
      const communityId = record.community.id;
      const parameters = { ...record, ...remapReference(record)}
      const newData = [...data];
      

      dispatch({
        type: `${owner.type}/addBookCopySharingApplication`,
        payload: {
          id: owner.id,
          type: 'bookCopySharingApplication',
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
      const {bookCopySharingApplicationId} = record.id
      const parameters = { ...record, bookCopySharingApplicationId }
      const newData = [...data];
      const row =  newData.filter(item => item.id === record.id)[0];
      row.editable = !row.editable 

      dispatch({
        type: `${owner.type}/updateBookCopySharingApplication`,
        payload: {
          id: owner.id,
          type: 'bookCopySharingApplication',
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
  { title: '书副本数量', debugtype: 'string', dataIndex: 'bookCopyQuantity', width: '9', render: (text, record) => renderStringEdit('bookCopyQuantity',text, record)  },
  { title: '书副本Image1', dataIndex: 'bookCopyImage1', render: (text, record) => <ImagePreview imageLocation={record.bookCopyImage1} /> },
  { title: '书副本Image2', dataIndex: 'bookCopyImage2', render: (text, record) => <ImagePreview imageLocation={record.bookCopyImage2} /> },
  { title: '书副本Image3', dataIndex: 'bookCopyImage3', render: (text, record) => <ImagePreview imageLocation={record.bookCopyImage3} /> },
  { title: '书副本Image4', dataIndex: 'bookCopyImage4', render: (text, record) => <ImagePreview imageLocation={record.bookCopyImage4} /> },
  { title: '书副本Image5', dataIndex: 'bookCopyImage5', render: (text, record) => <ImagePreview imageLocation={record.bookCopyImage5} /> },
  { title: '提供的方法', debugtype: 'string', dataIndex: 'deliverMethod', width: '8', render: (text, record) => renderStringEdit('deliverMethod',text, record)  },
  { title: '目的地存储', dataIndex: 'destinationStore', render: (text, record) => (record.destinationStore ? record.destinationStore.displayName : '暂无') },
  { title: '联系地址', debugtype: 'string', dataIndex: 'contactAddress', width: '18', render: (text, record) => renderStringEdit('contactAddress',text, record)  },
  { title: '联系人姓名', debugtype: 'string', dataIndex: 'contactName', width: '6', render: (text, record) => renderStringEdit('contactName',text, record)  },
  { title: '联系手机', debugtype: 'string_china_mobile_phone', dataIndex: 'contactMobile', width: '15', render: (text, record) => renderStringEdit('contactMobile',text, record)  },
  { title: '状态', debugtype: 'string', dataIndex: 'status', width: '7', render: (text, record) => renderStringEdit('status',text, record)  },
  { title: '客户', dataIndex: 'customer', render: (text, record) => (record.customer ? record.customer.displayName : '暂无') },
  { title: '员工', dataIndex: 'employee', render: (text, record) => (record.employee ? record.employee.displayName : '暂无') },
{ title: '操作',
   render: (text, record) => renderActions(text, record)}]
   
    const newRecord =()=>{
      const newBookCopySharingApplicationToAppend  = {
      	'id':`+1`, 
				'bookCopyQuantity':'',
				'bookCopyImage1':'',
				'bookCopyImage2':'',
				'bookCopyImage3':'',
				'bookCopyImage4':'',
				'bookCopyImage5':'',
				'deliverMethod':'',
				'destinationStore':'',
				'contactAddress':'',
				'contactName':'',
				'contactMobile':'',
				'status':'',
				'customer':'',
				'employee':'',


      };
      const newData = data ? [...data]:[];
      newData.push(newBookCopySharingApplicationToAppend);
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

export default Form.create()(BookCopySharingApplicationEditTable)



