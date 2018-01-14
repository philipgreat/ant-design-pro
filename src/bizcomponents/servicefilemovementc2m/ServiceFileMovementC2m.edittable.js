

import React, { PureComponent } from 'react'
import moment from 'moment'
import {Form,Button, Table, Alert, Badge,Input,Divider,Popconfirm } from 'antd'
import styles from './ServiceFileMovementC2m.edittable.less'
import ImagePreview from '../../components/ImagePreview'






const getRowById = (data,id) => {
  return data.filter(item => item.id === id)[0];
}

const toggleEdit = (e,data,id) =>{
  const row =  data.filter(item => item.id === id)[0];
  row[editable] = true
}




class ServiceFileMovementC2mEditTable extends PureComponent {

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
			const responsibleWorkerId = record.responsibleWorker.id
			const mainOrderId = record.mainOrder.id
			const merchantId = record.merchant.id

      //const communityId = record.community.id;
      return {responsibleWorkerId,mainOrderId,merchantId,};
    }
    const deleteRecord = (e,record) =>{
      const {dispatch, owner} = this.props
      const {data} = this.state
      const serviceFileMovementC2mIds = [record.id];
      const parameters = { serviceFileMovementC2mIds }
      dispatch({
        type: `${owner.type}/removeServiceFileMovementC2mList`,
        payload: { id: owner.id, type: 'serviceFileMovementC2m', parameters },
      })
    }


    const addRecord = (e,record) =>{
      const {dispatch, owner} = this.props
      const {data} = this.state
      const communityId = record.community.id;
      const parameters = { ...record, ...remapReference(record)}
      const newData = [...data];
      

      dispatch({
        type: `${owner.type}/addServiceFileMovementC2m`,
        payload: {
          id: owner.id,
          type: 'serviceFileMovementC2m',
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
      const {serviceFileMovementC2mId} = record.id
      const parameters = { ...record, serviceFileMovementC2mId }
      const newData = [...data];
      const row =  newData.filter(item => item.id === record.id)[0];
      row.editable = !row.editable 

      dispatch({
        type: `${owner.type}/updateServiceFileMovementC2m`,
        payload: {
          id: owner.id,
          type: 'serviceFileMovementC2m',
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
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20',  },
  { title: '服务状态', debugtype: 'string', dataIndex: 'serviceStatus', width: '7', render: (text, record) => renderStringEdit('serviceStatus',text, record)  },
  { title: '服务人员', dataIndex: 'responsibleWorker', render: (text, record) => (record.responsibleWorker ? record.responsibleWorker.id : '暂无') },
  { title: '拒收原因', debugtype: 'string', dataIndex: 'rejectComments', width: '22', render: (text, record) => renderStringEdit('rejectComments',text, record)  },
  { title: '拒收凭证1', dataIndex: 'rejectEvidence1', render: (text, record) => <ImagePreview imageLocation={record.拒收凭证1} /> },
  { title: '拒收凭证2', dataIndex: 'rejectEvidence2', render: (text, record) => <ImagePreview imageLocation={record.拒收凭证2} /> },
  { title: '拒收凭证3', dataIndex: 'rejectEvidence3', render: (text, record) => <ImagePreview imageLocation={record.拒收凭证3} /> },
  { title: '拒收凭证4', dataIndex: 'rejectEvidence4', render: (text, record) => <ImagePreview imageLocation={record.拒收凭证4} /> },
  { title: '拒收凭证5', dataIndex: 'rejectEvidence5', render: (text, record) => <ImagePreview imageLocation={record.拒收凭证5} /> },
  { title: '开始时间', dataIndex: 'startTime', render: (text, record) => moment(record.startTime).format('YYYY-MM-DD') },
  { title: '最后的位置', debugtype: 'string', dataIndex: 'lastLocation', width: '17', render: (text, record) => renderStringEdit('lastLocation',text, record)  },
  { title: '最后更新时间', dataIndex: 'lastUpdateTime', render: (text, record) => moment(record.lastUpdateTime).format('YYYY-MM-DD') },
  { title: '主订单', dataIndex: 'mainOrder', render: (text, record) => (record.mainOrder ? record.mainOrder.id : '暂无') },
  { title: '移动目的', debugtype: 'string', dataIndex: 'movementPurpose', width: '8', render: (text, record) => renderStringEdit('movementPurpose',text, record)  },
  { title: '联系人姓名', debugtype: 'string', dataIndex: 'contactName', width: '7', render: (text, record) => renderStringEdit('contactName',text, record)  },
  { title: '联系手机号码', debugtype: 'string_china_mobile_phone', dataIndex: 'contactMobileNumber', width: '15', render: (text, record) => renderStringEdit('contactMobileNumber',text, record)  },
  { title: '商户', dataIndex: 'merchant', render: (text, record) => (record.merchant ? record.merchant.id : '暂无') },
{ title: '操作',
   render: (text, record) => renderActions(text, record)}]
   
    const newRecord =()=>{
      const newServiceFileMovementC2mToAppend  = {
      	'id':`+1`, 
				'serviceStatus':'',
				'responsibleWorker':'',
				'rejectComments':'',
				'rejectEvidence1':'',
				'rejectEvidence2':'',
				'rejectEvidence3':'',
				'rejectEvidence4':'',
				'rejectEvidence5':'',
				'startTime':'',
				'lastLocation':'',
				'lastUpdateTime':'',
				'mainOrder':'',
				'movementPurpose':'',
				'contactName':'',
				'contactMobileNumber':'',
				'merchant':'',


      };
      const newData = data ? [...data]:[];
      newData.push(newServiceFileMovementC2mToAppend);
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

export default Form.create()(ServiceFileMovementC2mEditTable)



