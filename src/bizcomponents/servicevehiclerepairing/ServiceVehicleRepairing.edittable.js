

import React, { PureComponent } from 'react'
import moment from 'moment'
import {Form,Button, Table, Alert, Badge,Input,Divider,Popconfirm } from 'antd'
import styles from './ServiceVehicleRepairing.edittable.less'
import ImagePreview from '../../components/ImagePreview'






const getRowById = (data,id) => {
  return data.filter(item => item.id === id)[0];
}

const toggleEdit = (e,data,id) =>{
  const row =  data.filter(item => item.id === id)[0];
  row[editable] = true
}




class ServiceVehicleRepairingEditTable extends PureComponent {

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
			const serviceVehicleInspectionId = record.serviceVehicleInspection.id
			const merchantId = record.merchant.id
			const mainOrderId = record.mainOrder.id

      //const communityId = record.community.id;
      return {responsibleWorkerId,serviceVehicleInspectionId,merchantId,mainOrderId,};
    }
    const deleteRecord = (e,record) =>{
      const {dispatch, owner} = this.props
      const {data} = this.state
      const serviceVehicleRepairingIds = [record.id];
      const parameters = { serviceVehicleRepairingIds }
      dispatch({
        type: `${owner.type}/removeServiceVehicleRepairingList`,
        payload: { id: owner.id, type: 'serviceVehicleRepairing', parameters },
      })
    }


    const addRecord = (e,record) =>{
      const {dispatch, owner} = this.props
      const {data} = this.state
      const communityId = record.community.id;
      const parameters = { ...record, ...remapReference(record)}
      const newData = [...data];
      

      dispatch({
        type: `${owner.type}/addServiceVehicleRepairing`,
        payload: {
          id: owner.id,
          type: 'serviceVehicleRepairing',
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
      const {serviceVehicleRepairingId} = record.id
      const parameters = { ...record, serviceVehicleRepairingId }
      const newData = [...data];
      const row =  newData.filter(item => item.id === record.id)[0];
      row.editable = !row.editable 

      dispatch({
        type: `${owner.type}/updateServiceVehicleRepairing`,
        payload: {
          id: owner.id,
          type: 'serviceVehicleRepairing',
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
  { title: '服务状态', debugtype: 'string', dataIndex: 'serviceStatus', width: '7', render: (text, record) => renderStringEdit('serviceStatus',text, record)  },
  { title: '服务人员', dataIndex: 'responsibleWorker', render: (text, record) => (record.responsibleWorker ? record.responsibleWorker.displayName : '暂无') },
  { title: '服务概述', debugtype: 'string', dataIndex: 'serviceSummary', width: '26', render: (text, record) => renderStringEdit('serviceSummary',text, record)  },
  { title: '开始时间', dataIndex: 'startTime', render: (text, record) => moment(record.startTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '经度', debugtype: 'double', dataIndex: 'longitude', width: '12', render: (text, record) => renderStringEdit('longitude',text, record)  },
  { title: '纬度', debugtype: 'double', dataIndex: 'latitude', width: '11', render: (text, record) => renderStringEdit('latitude',text, record)  },
  { title: '最后更新时间', dataIndex: 'lastUpdateTime', render: (text, record) => moment(record.lastUpdateTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '年检报告1', dataIndex: 'inspectionReportImage1', render: (text, record) => <ImagePreview imageLocation={record.inspectionReportImage1} /> },
  { title: '年检报告2', dataIndex: 'inspectionReportImage2', render: (text, record) => <ImagePreview imageLocation={record.inspectionReportImage2} /> },
  { title: '年检报告3', dataIndex: 'inspectionReportImage3', render: (text, record) => <ImagePreview imageLocation={record.inspectionReportImage3} /> },
  { title: '年检报告4', dataIndex: 'inspectionReportImage4', render: (text, record) => <ImagePreview imageLocation={record.inspectionReportImage4} /> },
  { title: '年检报告5', dataIndex: 'inspectionReportImage5', render: (text, record) => <ImagePreview imageLocation={record.inspectionReportImage5} /> },
  { title: '车辆维修报价单1', dataIndex: 'repairingQuotationImage1', render: (text, record) => <ImagePreview imageLocation={record.repairingQuotationImage1} /> },
  { title: '车辆维修报价单2', dataIndex: 'repairingQuotationImage2', render: (text, record) => <ImagePreview imageLocation={record.repairingQuotationImage2} /> },
  { title: '车辆维修报价单3', dataIndex: 'repairingQuotationImage3', render: (text, record) => <ImagePreview imageLocation={record.repairingQuotationImage3} /> },
  { title: '车辆维修报价单4', dataIndex: 'repairingQuotationImage4', render: (text, record) => <ImagePreview imageLocation={record.repairingQuotationImage4} /> },
  { title: '车辆维修报价单5', dataIndex: 'repairingQuotationImage5', render: (text, record) => <ImagePreview imageLocation={record.repairingQuotationImage5} /> },
  { title: '车辆维修报价总金额', dataIndex: 'repairingQuotationTotalAmount', className:'money', render: (text, record) => ('￥'+text.toFixed(2)) },
  { title: '车辆维修部分图片1', dataIndex: 'repairingPartImg1', render: (text, record) => <ImagePreview imageLocation={record.repairingPartImg1} /> },
  { title: '车辆维修部分图片2', dataIndex: 'repairingPartImg2', render: (text, record) => <ImagePreview imageLocation={record.repairingPartImg2} /> },
  { title: '车辆维修部分图片3', dataIndex: 'repairingPartImg3', render: (text, record) => <ImagePreview imageLocation={record.repairingPartImg3} /> },
  { title: '车辆维修部分图片4', dataIndex: 'repairingPartImg4', render: (text, record) => <ImagePreview imageLocation={record.repairingPartImg4} /> },
  { title: '车辆维修部分图片5', dataIndex: 'repairingPartImg5', render: (text, record) => <ImagePreview imageLocation={record.repairingPartImg5} /> },
  { title: '车辆维修备注', debugtype: 'string', dataIndex: 'repairingPartListComment', width: '219', render: (text, record) => renderStringEdit('repairingPartListComment',text, record)  },
  { title: '维修完成日期时间', dataIndex: 'repairingFinishedDatetime', render: (text, record) => moment(record.repairingFinishedDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '车辆上线检测', dataIndex: 'serviceVehicleInspection', render: (text, record) => (record.serviceVehicleInspection ? record.serviceVehicleInspection.displayName : '暂无') },
  { title: '商户', dataIndex: 'merchant', render: (text, record) => (record.merchant ? record.merchant.displayName : '暂无') },
  { title: '年检订单', dataIndex: 'mainOrder', render: (text, record) => (record.mainOrder ? record.mainOrder.displayName : '暂无') },
{ title: '操作',
   render: (text, record) => renderActions(text, record)}]
   
    const newRecord =()=>{
      const newServiceVehicleRepairingToAppend  = {
      	'id':`+1`, 
				'serviceStatus':'',
				'responsibleWorker':'',
				'serviceSummary':'',
				'startTime':'',
				'longitude':'',
				'latitude':'',
				'lastUpdateTime':'',
				'inspectionReportImage1':'',
				'inspectionReportImage2':'',
				'inspectionReportImage3':'',
				'inspectionReportImage4':'',
				'inspectionReportImage5':'',
				'repairingQuotationImage1':'',
				'repairingQuotationImage2':'',
				'repairingQuotationImage3':'',
				'repairingQuotationImage4':'',
				'repairingQuotationImage5':'',
				'repairingQuotationTotalAmount':'',
				'repairingPartImg1':'',
				'repairingPartImg2':'',
				'repairingPartImg3':'',
				'repairingPartImg4':'',
				'repairingPartImg5':'',
				'repairingPartListComment':'',
				'repairingFinishedDatetime':'',
				'serviceVehicleInspection':'',
				'merchant':'',
				'mainOrder':'',


      };
      const newData = data ? [...data]:[];
      newData.push(newServiceVehicleRepairingToAppend);
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

export default Form.create()(ServiceVehicleRepairingEditTable)



