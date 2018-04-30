

import React, { PureComponent } from 'react'
import moment from 'moment'
import {Form,Button, Table, Alert, Badge,Input,Divider,Popconfirm } from 'antd'
import styles from './ServiceCompanyAccount.edittable.less'
import ImagePreview from '../../components/ImagePreview'






const getRowById = (data,id) => {
  return data.filter(item => item.id === id)[0];
}

const toggleEdit = (e,data,id) =>{
  const row =  data.filter(item => item.id === id)[0];
  row[editable] = true
}




class ServiceCompanyAccountEditTable extends PureComponent {

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
      const serviceCompanyAccountIds = [record.id];
      const parameters = { serviceCompanyAccountIds }
      dispatch({
        type: `${owner.type}/removeServiceCompanyAccountList`,
        payload: { id: owner.id, type: 'serviceCompanyAccount', parameters },
      })
    }


    const addRecord = (e,record) =>{
      const {dispatch, owner} = this.props
      const {data} = this.state
      const communityId = record.community.id;
      const parameters = { ...record, ...remapReference(record)}
      const newData = [...data];
      

      dispatch({
        type: `${owner.type}/addServiceCompanyAccount`,
        payload: {
          id: owner.id,
          type: 'serviceCompanyAccount',
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
      const {serviceCompanyAccountId} = record.id
      const parameters = { ...record, serviceCompanyAccountId }
      const newData = [...data];
      const row =  newData.filter(item => item.id === record.id)[0];
      row.editable = !row.editable 

      dispatch({
        type: `${owner.type}/updateServiceCompanyAccount`,
        payload: {
          id: owner.id,
          type: 'serviceCompanyAccount',
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
  { title: '服务单号', debugtype: 'string', dataIndex: 'serviceOrderNumber', width: '14', render: (text, record) => renderStringEdit('serviceOrderNumber',text, record)  },
  { title: '服务单代码', debugtype: 'string', dataIndex: 'serviceOrderCode', width: '35', render: (text, record) => renderStringEdit('serviceOrderCode',text, record)  },
  { title: '服务单名称', debugtype: 'string', dataIndex: 'serviceOrderName', width: '8', render: (text, record) => renderStringEdit('serviceOrderName',text, record)  },
  { title: '服务完成时间', dataIndex: 'serviceFulfilledDatetime', render: (text, record) => moment(record.serviceFulfilledDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '合同编号', debugtype: 'string', dataIndex: 'contractId', width: '13', render: (text, record) => renderStringEdit('contractId',text, record)  },
  { title: '服务价格', dataIndex: 'contractPriceValue', className:'money', render: (text, record) => ('￥'+text.toFixed(2)) },
  { title: '服务类型', debugtype: 'string', dataIndex: 'contractPriceType', width: '8', render: (text, record) => renderStringEdit('contractPriceType',text, record)  },
  { title: '服务人员', debugtype: 'string', dataIndex: 'serviceWorkerName', width: '7', render: (text, record) => renderStringEdit('serviceWorkerName',text, record)  },
  { title: '商户名称', debugtype: 'string', dataIndex: 'serviceCompanyName', width: '27', render: (text, record) => renderStringEdit('serviceCompanyName',text, record)  },
  { title: '年检订单ID', debugtype: 'string', dataIndex: 'mainOrderId', width: '28', render: (text, record) => renderStringEdit('mainOrderId',text, record)  },
  { title: '商户优惠', dataIndex: 'merchantDiscount', className:'money', render: (text, record) => ('￥'+text.toFixed(2)) },
  { title: '商户', dataIndex: 'merchant', render: (text, record) => (record.merchant ? record.merchant.displayName : '暂无') },
  { title: '服务人员', dataIndex: 'responsibleWorker', render: (text, record) => (record.responsibleWorker ? record.responsibleWorker.displayName : '暂无') },
  { title: '对账单', dataIndex: 'account', render: (text, record) => (record.account ? record.account.displayName : '暂无') },
{ title: '操作',
   render: (text, record) => renderActions(text, record)}]
   
    const newRecord =()=>{
      const newServiceCompanyAccountToAppend  = {
      	'id':`+1`, 
				'serviceOrderNumber':'',
				'serviceOrderCode':'',
				'serviceOrderName':'',
				'serviceFulfilledDatetime':'',
				'contractId':'',
				'contractPriceValue':'',
				'contractPriceType':'',
				'serviceWorkerName':'',
				'serviceCompanyName':'',
				'mainOrderId':'',
				'merchantDiscount':'',
				'merchant':'',
				'responsibleWorker':'',
				'account':'',


      };
      const newData = data ? [...data]:[];
      newData.push(newServiceCompanyAccountToAppend);
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

export default Form.create()(ServiceCompanyAccountEditTable)



