

import React, { PureComponent } from 'react'
import moment from 'moment'
import {Form,Button, Table, Alert, Badge,Input,Divider,Popconfirm } from 'antd'
import styles from './Workshop.edittable.less'
import ImagePreview from '../../components/ImagePreview'






const getRowById = (data,id) => {
  return data.filter(item => item.id === id)[0];
}

const toggleEdit = (e,data,id) =>{
  const row =  data.filter(item => item.id === id)[0];
  row[editable] = true
}




class WorkshopEditTable extends PureComponent {

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
			const publishStoreId = record.publishStore.id
			const publishEmployeeId = record.publishEmployee.id

      //const communityId = record.community.id;
      return {publishStoreId,publishEmployeeId,};
    }
    const deleteRecord = (e,record) =>{
      const {dispatch, owner} = this.props
      const {data} = this.state
      const workshopIds = [record.id];
      const parameters = { workshopIds }
      dispatch({
        type: `${owner.type}/removeWorkshopList`,
        payload: { id: owner.id, type: 'workshop', parameters },
      })
    }


    const addRecord = (e,record) =>{
      const {dispatch, owner} = this.props
      const {data} = this.state
      const communityId = record.community.id;
      const parameters = { ...record, ...remapReference(record)}
      const newData = [...data];
      

      dispatch({
        type: `${owner.type}/addWorkshop`,
        payload: {
          id: owner.id,
          type: 'workshop',
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
      const {workshopId} = record.id
      const parameters = { ...record, workshopId }
      const newData = [...data];
      const row =  newData.filter(item => item.id === record.id)[0];
      row.editable = !row.editable 

      dispatch({
        type: `${owner.type}/updateWorkshop`,
        payload: {
          id: owner.id,
          type: 'workshop',
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
  { title: '工厂的名字', debugtype: 'string', dataIndex: 'workshopName', width: '13', render: (text, record) => renderStringEdit('workshopName',text, record)  },
  { title: '研讨会内容', debugtype: 'string', dataIndex: 'workshopContent', width: '27', render: (text, record) => renderStringEdit('workshopContent',text, record)  },
  { title: '车间图片', dataIndex: 'workshopImage', render: (text, record) => <ImagePreview imageLocation={record.workshopImage} /> },
  { title: '车间的地位', debugtype: 'string', dataIndex: 'workshopStatus', width: '7', render: (text, record) => renderStringEdit('workshopStatus',text, record)  },
  { title: '车间活动日期时间', dataIndex: 'workshopEventDatetime', render: (text, record) => moment(record.workshopEventDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '可用的寄存器Datetime', dataIndex: 'availableRegisterDatetime', render: (text, record) => moment(record.availableRegisterDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '可用的寄存器数量', debugtype: 'int', dataIndex: 'availableRegisterQuantity', width: '6', render: (text, record) => renderStringEdit('availableRegisterQuantity',text, record)  },
  { title: '发布日期时间', dataIndex: 'publishDatetime', render: (text, record) => moment(record.publishDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '发布商店', dataIndex: 'publishStore', render: (text, record) => (record.publishStore ? record.publishStore.displayName : '暂无') },
  { title: '发布员工', dataIndex: 'publishEmployee', render: (text, record) => (record.publishEmployee ? record.publishEmployee.displayName : '暂无') },
{ title: '操作',
   render: (text, record) => renderActions(text, record)}]
   
    const newRecord =()=>{
      const newWorkshopToAppend  = {
      	'id':`+1`, 
				'workshopName':'',
				'workshopContent':'',
				'workshopImage':'',
				'workshopStatus':'',
				'workshopEventDatetime':'',
				'availableRegisterDatetime':'',
				'availableRegisterQuantity':'',
				'publishDatetime':'',
				'publishStore':'',
				'publishEmployee':'',


      };
      const newData = data ? [...data]:[];
      newData.push(newWorkshopToAppend);
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

export default Form.create()(WorkshopEditTable)



