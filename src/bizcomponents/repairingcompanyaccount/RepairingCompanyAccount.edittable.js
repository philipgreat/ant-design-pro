

import React, { PureComponent } from 'react'
import moment from 'moment'
import {Form,Button, Table, Alert, Badge,Input,Divider,Popconfirm } from 'antd'
import styles from './RepairingCompanyAccount.edittable.less'
import ImagePreview from '../../components/ImagePreview'






const getRowById = (data,id) => {
  return data.filter(item => item.id === id)[0];
}

const toggleEdit = (e,data,id) =>{
  const row =  data.filter(item => item.id === id)[0];
  row[editable] = true
}




class RepairingCompanyAccountEditTable extends PureComponent {

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
			const merchantId = record.merchant.id
			const responsibleWorkerId = record.responsibleWorker.id
			const accountId = record.account.id

      //const communityId = record.community.id;
      return {merchantId,responsibleWorkerId,accountId,};
    }
    const deleteRecord = (e,record) =>{
      const {dispatch, owner} = this.props
      const {data} = this.state
      const repairingCompanyAccountIds = [record.id];
      const parameters = { repairingCompanyAccountIds }
      dispatch({
        type: `${owner.type}/removeRepairingCompanyAccountList`,
        payload: { id: owner.id, type: 'repairingCompanyAccount', parameters },
      })
    }


    const addRecord = (e,record) =>{
      const {dispatch, owner} = this.props
      const {data} = this.state
      const communityId = record.community.id;
      const parameters = { ...record, ...remapReference(record)}
      const newData = [...data];
      

      dispatch({
        type: `${owner.type}/addRepairingCompanyAccount`,
        payload: {
          id: owner.id,
          type: 'repairingCompanyAccount',
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
      const {repairingCompanyAccountId} = record.id
      const parameters = { ...record, repairingCompanyAccountId }
      const newData = [...data];
      const row =  newData.filter(item => item.id === record.id)[0];
      row.editable = !row.editable 

      dispatch({
        type: `${owner.type}/updateRepairingCompanyAccount`,
        payload: {
          id: owner.id,
          type: 'repairingCompanyAccount',
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
  { title: '修理员', debugtype: 'string', dataIndex: 'repairingWorkerName', width: '36', render: (text, record) => renderStringEdit('repairingWorkerName',text, record)  },
  { title: '修理厂', debugtype: 'string', dataIndex: 'repairingCompanyName', width: '27', render: (text, record) => renderStringEdit('repairingCompanyName',text, record)  },
  { title: '车牌号码', debugtype: 'string', dataIndex: 'vehicleLicensePlateNumber', width: '11', render: (text, record) => renderStringEdit('vehicleLicensePlateNumber',text, record)  },
  { title: '车辆维修服务单号', debugtype: 'string', dataIndex: 'vehicleRepairingOrderNumber', width: '14', render: (text, record) => renderStringEdit('vehicleRepairingOrderNumber',text, record)  },
  { title: '订单合计', dataIndex: 'originalAmount', className:'money', render: (text, record) => ('￥'+text.toFixed(2)) },
  { title: '补贴金额', dataIndex: 'allowanceAmount', className:'money', render: (text, record) => ('￥'+text.toFixed(2)) },
  { title: '应付金额', dataIndex: 'actualAmount', className:'money', render: (text, record) => ('￥'+text.toFixed(2)) },
  { title: '年检订单ID', debugtype: 'string', dataIndex: 'mainOrderId', width: '15', render: (text, record) => renderStringEdit('mainOrderId',text, record)  },
  { title: '付款日期时间', dataIndex: 'paymentDatetime', render: (text, record) => moment(record.paymentDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '微信订单ID', debugtype: 'string', dataIndex: 'wechatOrderId', width: '36', render: (text, record) => renderStringEdit('wechatOrderId',text, record)  },
  { title: '微信预付订单ID', debugtype: 'string', dataIndex: 'wechatPrepayId', width: '25', render: (text, record) => renderStringEdit('wechatPrepayId',text, record)  },
  { title: '商户', dataIndex: 'merchant', render: (text, record) => (record.merchant ? record.merchant.id : '暂无') },
  { title: '服务人员', dataIndex: 'responsibleWorker', render: (text, record) => (record.responsibleWorker ? record.responsibleWorker.id : '暂无') },
  { title: '对账单', dataIndex: 'account', render: (text, record) => (record.account ? record.account.id : '暂无') },
{ title: '操作',
   render: (text, record) => renderActions(text, record)}]
   
    const newRecord =()=>{
      const newRepairingCompanyAccountToAppend  = {
      	'id':`+1`, 
				'repairingWorkerName':'',
				'repairingCompanyName':'',
				'vehicleLicensePlateNumber':'',
				'vehicleRepairingOrderNumber':'',
				'originalAmount':'',
				'allowanceAmount':'',
				'actualAmount':'',
				'mainOrderId':'',
				'paymentDatetime':'',
				'wechatOrderId':'',
				'wechatPrepayId':'',
				'merchant':'',
				'responsibleWorker':'',
				'account':'',


      };
      const newData = data ? [...data]:[];
      newData.push(newRepairingCompanyAccountToAppend);
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

export default Form.create()(RepairingCompanyAccountEditTable)



