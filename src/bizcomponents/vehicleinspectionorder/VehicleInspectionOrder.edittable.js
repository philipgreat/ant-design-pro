

import React, { PureComponent } from 'react'
import moment from 'moment'
import {Form,Button, Table, Alert, Badge,Input,Divider,Popconfirm } from 'antd'
import styles from './VehicleInspectionOrder.edittable.less'
import ImagePreview from '../../components/ImagePreview'






const getRowById = (data,id) => {
  return data.filter(item => item.id === id)[0];
}

const toggleEdit = (e,data,id) =>{
  const row =  data.filter(item => item.id === id)[0];
  row[editable] = true
}




class VehicleInspectionOrderEditTable extends PureComponent {

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
			const serviceCompanyId = record.serviceCompany.id
			const contactAddressCityId = record.contactAddressCity.id
			const customerId = record.customer.id
			const platformId = record.platform.id

      //const communityId = record.community.id;
      return {serviceCompanyId,contactAddressCityId,customerId,platformId,};
    }
    const deleteRecord = (e,record) =>{
      const {dispatch, owner} = this.props
      const {data} = this.state
      const vehicleInspectionOrderIds = [record.id];
      const parameters = { vehicleInspectionOrderIds }
      dispatch({
        type: `${owner.type}/removeVehicleInspectionOrderList`,
        payload: { id: owner.id, type: 'vehicleInspectionOrder', parameters },
      })
    }


    const addRecord = (e,record) =>{
      const {dispatch, owner} = this.props
      const {data} = this.state
      const communityId = record.community.id;
      const parameters = { ...record, ...remapReference(record)}
      const newData = [...data];
      

      dispatch({
        type: `${owner.type}/addVehicleInspectionOrder`,
        payload: {
          id: owner.id,
          type: 'vehicleInspectionOrder',
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
      const {vehicleInspectionOrderId} = record.id
      const parameters = { ...record, vehicleInspectionOrderId }
      const newData = [...data];
      const row =  newData.filter(item => item.id === record.id)[0];
      row.editable = !row.editable 

      dispatch({
        type: `${owner.type}/updateVehicleInspectionOrder`,
        payload: {
          id: owner.id,
          type: 'vehicleInspectionOrder',
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
  { title: '订单状态', debugtype: 'string', dataIndex: 'orderStatus', width: '7', render: (text, record) => renderStringEdit('orderStatus',text, record)  },
  { title: '车牌号码', debugtype: 'string', dataIndex: 'vehicleLicensePlateNumber', width: '11', render: (text, record) => renderStringEdit('vehicleLicensePlateNumber',text, record)  },
  { title: '创建时间', dataIndex: 'createTime', render: (text, record) => moment(record.createTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '联系人姓名', debugtype: 'string', dataIndex: 'contactName', width: '7', render: (text, record) => renderStringEdit('contactName',text, record)  },
  { title: '联系人手机', debugtype: 'string_china_mobile_phone', dataIndex: 'contactMobileNumber', width: '15', render: (text, record) => renderStringEdit('contactMobileNumber',text, record)  },
  { title: '产品类型', debugtype: 'string', dataIndex: 'productType', width: '8', render: (text, record) => renderStringEdit('productType',text, record)  },
  { title: '6年免检', dataIndex: 'hasSixYearExemption', render: (text, record) => (record.hasSixYearExemption ? '是' : '否') },
  { title: '上线检测', dataIndex: 'hasInspection', render: (text, record) => (record.hasInspection ? '是' : '否') },
  { title: '二级维护', dataIndex: 'hasSecondLevelMaintenance', render: (text, record) => (record.hasSecondLevelMaintenance ? '是' : '否') },
  { title: '等级评定', dataIndex: 'hasGradeEstimation', render: (text, record) => (record.hasGradeEstimation ? '是' : '否') },
  { title: '商户优惠', dataIndex: 'merchantDiscount', render: (text, record) => (record.merchantDiscount ? '是' : '否') },
  { title: '最后更新时间', dataIndex: 'lastUpdateTime', render: (text, record) => moment(record.lastUpdateTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '商户', dataIndex: 'serviceCompany', render: (text, record) => (record.serviceCompany ? record.serviceCompany.displayName : '暂无') },
  { title: '服务公司信息', debugtype: 'string_longtext', dataIndex: 'serviceCompanyInfo', width: '10', render: (text, record) => renderStringEdit('serviceCompanyInfo',text, record)  },
  { title: '地址', debugtype: 'string', dataIndex: 'contactAddressDetail', width: '19', render: (text, record) => renderStringEdit('contactAddressDetail',text, record)  },
  { title: '城市', dataIndex: 'contactAddressCity', render: (text, record) => (record.contactAddressCity ? record.contactAddressCity.displayName : '暂无') },
  { title: '客户', dataIndex: 'customer', render: (text, record) => (record.customer ? record.customer.displayName : '暂无') },
  { title: '计划年检日期', dataIndex: 'planInspectionDate', render: (text, record) => moment(record.planInspectionDate).format('YYYY-MM-DD') },
  { title: '无伤人交通事故', dataIndex: 'trafficAccidentAnnouncement', render: (text, record) => (record.trafficAccidentAnnouncement ? '是' : '否') },
  { title: '提供委托书', dataIndex: 'engagementLetterProvided', render: (text, record) => (record.engagementLetterProvided ? '是' : '否') },
  { title: '上门取车', dataIndex: 'homePickUp', render: (text, record) => (record.homePickUp ? '是' : '否') },
  { title: '车辆类型', debugtype: 'string', dataIndex: 'vehicleType', width: '7', render: (text, record) => renderStringEdit('vehicleType',text, record)  },
  { title: '使用性质', debugtype: 'string', dataIndex: 'vehicleUseCharacter', width: '7', render: (text, record) => renderStringEdit('vehicleUseCharacter',text, record)  },
  { title: '核准座位数', debugtype: 'int', dataIndex: 'vehicleSeatsQuantity', width: '7', render: (text, record) => renderStringEdit('vehicleSeatsQuantity',text, record)  },
  { title: '注册日期', dataIndex: 'vehicleRegistrationDate', render: (text, record) => moment(record.vehicleRegistrationDate).format('YYYY-MM-DD') },
  { title: '检测有效期', dataIndex: 'inspectionValidationDate', render: (text, record) => moment(record.inspectionValidationDate).format('YYYY-MM-DD') },
  { title: '保险有效期', dataIndex: 'insuranceValidationDate', render: (text, record) => moment(record.insuranceValidationDate).format('YYYY-MM-DD') },
  { title: '发动机号', debugtype: 'string', dataIndex: 'engineNumber', width: '11', render: (text, record) => renderStringEdit('engineNumber',text, record)  },
  { title: '车架号', debugtype: 'string', dataIndex: 'vehicleIdentificationNumber', width: '21', render: (text, record) => renderStringEdit('vehicleIdentificationNumber',text, record)  },
  { title: '发证日期', dataIndex: 'vehiclePermitIssueDate', render: (text, record) => moment(record.vehiclePermitIssueDate).format('YYYY-MM-DD') },
  { title: '所有人', debugtype: 'string', dataIndex: 'vehiclePermitHolderName', width: '57', render: (text, record) => renderStringEdit('vehiclePermitHolderName',text, record)  },
  { title: '行驶证图1', dataIndex: 'vehiclePermitImage1', render: (text, record) => <ImagePreview imageLocation={record.vehiclePermitImage1} /> },
  { title: '行驶证图2', dataIndex: 'vehiclePermitImage2', render: (text, record) => <ImagePreview imageLocation={record.vehiclePermitImage2} /> },
  { title: '行驶证图3', dataIndex: 'vehiclePermitImage3', render: (text, record) => <ImagePreview imageLocation={record.vehiclePermitImage3} /> },
  { title: '行驶证图4', dataIndex: 'vehiclePermitImage4', render: (text, record) => <ImagePreview imageLocation={record.vehiclePermitImage4} /> },
  { title: '行驶证图5', dataIndex: 'vehiclePermitImage5', render: (text, record) => <ImagePreview imageLocation={record.vehiclePermitImage5} /> },
  { title: '平台', dataIndex: 'platform', render: (text, record) => (record.platform ? record.platform.displayName : '暂无') },
{ title: '操作',
   render: (text, record) => renderActions(text, record)}]
   
    const newRecord =()=>{
      const newVehicleInspectionOrderToAppend  = {
      	'id':`+1`, 
				'orderStatus':'',
				'vehicleLicensePlateNumber':'',
				'createTime':'',
				'contactName':'',
				'contactMobileNumber':'',
				'productType':'',
				'hasSixYearExemption':'',
				'hasInspection':'',
				'hasSecondLevelMaintenance':'',
				'hasGradeEstimation':'',
				'merchantDiscount':'',
				'lastUpdateTime':'',
				'serviceCompany':'',
				'serviceCompanyInfo':'',
				'contactAddressDetail':'',
				'contactAddressCity':'',
				'customer':'',
				'planInspectionDate':'',
				'trafficAccidentAnnouncement':'',
				'engagementLetterProvided':'',
				'homePickUp':'',
				'vehicleType':'',
				'vehicleUseCharacter':'',
				'vehicleSeatsQuantity':'',
				'vehicleRegistrationDate':'',
				'inspectionValidationDate':'',
				'insuranceValidationDate':'',
				'engineNumber':'',
				'vehicleIdentificationNumber':'',
				'vehiclePermitIssueDate':'',
				'vehiclePermitHolderName':'',
				'vehiclePermitImage1':'',
				'vehiclePermitImage2':'',
				'vehiclePermitImage3':'',
				'vehiclePermitImage4':'',
				'vehiclePermitImage5':'',
				'platform':'',


      };
      const newData = data ? [...data]:[];
      newData.push(newVehicleInspectionOrderToAppend);
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

export default Form.create()(VehicleInspectionOrderEditTable)



