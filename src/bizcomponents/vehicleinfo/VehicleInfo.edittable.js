

import React, { PureComponent } from 'react'
import moment from 'moment'
import {Form,Button, Table, Alert, Badge,Input,Divider,Popconfirm } from 'antd'
import styles from './VehicleInfo.edittable.less'
import ImagePreview from '../../components/ImagePreview'






const getRowById = (data,id) => {
  return data.filter(item => item.id === id)[0];
}

const toggleEdit = (e,data,id) =>{
  const row =  data.filter(item => item.id === id)[0];
  row[editable] = true
}




class VehicleInfoEditTable extends PureComponent {

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
			const customerId = record.customer.id
			const platformId = record.platform.id

      //const communityId = record.community.id;
      return {customerId,platformId,};
    }
    const deleteRecord = (e,record) =>{
      const {dispatch, owner} = this.props
      const {data} = this.state
      const vehicleInfoIds = [record.id];
      const parameters = { vehicleInfoIds }
      dispatch({
        type: `${owner.type}/removeVehicleInfoList`,
        payload: { id: owner.id, type: 'vehicleInfo', parameters },
      })
    }


    const addRecord = (e,record) =>{
      const {dispatch, owner} = this.props
      const {data} = this.state
      const communityId = record.community.id;
      const parameters = { ...record, ...remapReference(record)}
      const newData = [...data];
      

      dispatch({
        type: `${owner.type}/addVehicleInfo`,
        payload: {
          id: owner.id,
          type: 'vehicleInfo',
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
      const {vehicleInfoId} = record.id
      const parameters = { ...record, vehicleInfoId }
      const newData = [...data];
      const row =  newData.filter(item => item.id === record.id)[0];
      row.editable = !row.editable 

      dispatch({
        type: `${owner.type}/updateVehicleInfo`,
        payload: {
          id: owner.id,
          type: 'vehicleInfo',
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
  { title: '车牌号码', debugtype: 'string', dataIndex: 'licensePlateNumber', width: '11', render: (text, record) => renderStringEdit('licensePlateNumber',text, record)  },
  { title: '车辆类型', debugtype: 'string', dataIndex: 'vehicleType', width: '7', render: (text, record) => renderStringEdit('vehicleType',text, record)  },
  { title: '使用性质', debugtype: 'string', dataIndex: 'useCharacter', width: '7', render: (text, record) => renderStringEdit('useCharacter',text, record)  },
  { title: '核准座位数', debugtype: 'int', dataIndex: 'seatsQuantity', width: '5', render: (text, record) => renderStringEdit('seatsQuantity',text, record)  },
  { title: '注册日期', dataIndex: 'registrationDate', render: (text, record) => moment(record.registrationDate).format('YYYY-MM-DD') },
  { title: '检测有效期', dataIndex: 'inspectionValidationDate', render: (text, record) => moment(record.inspectionValidationDate).format('YYYY-MM-DD') },
  { title: '保险有效期', dataIndex: 'insuranceValidationDate', render: (text, record) => moment(record.insuranceValidationDate).format('YYYY-MM-DD') },
  { title: '发动机号', debugtype: 'string', dataIndex: 'engineNumber', width: '11', render: (text, record) => renderStringEdit('engineNumber',text, record)  },
  { title: '车架号', debugtype: 'string', dataIndex: 'vehicleIdentificationNumber', width: '21', render: (text, record) => renderStringEdit('vehicleIdentificationNumber',text, record)  },
  { title: '发证日期', dataIndex: 'vehiclePermitIssueDate', render: (text, record) => moment(record.vehiclePermitIssueDate).format('YYYY-MM-DD') },
  { title: '所有人', debugtype: 'string', dataIndex: 'vehiclePermitHolderName', width: '7', render: (text, record) => renderStringEdit('vehiclePermitHolderName',text, record)  },
  { title: '图1', dataIndex: 'vehiclePermitImage1', render: (text, record) => <ImagePreview imageLocation={record.vehiclePermitImage1} /> },
  { title: '图2', dataIndex: 'vehiclePermitImage2', render: (text, record) => <ImagePreview imageLocation={record.vehiclePermitImage2} /> },
  { title: '图3', dataIndex: 'vehiclePermitImage3', render: (text, record) => <ImagePreview imageLocation={record.vehiclePermitImage3} /> },
  { title: '图4', dataIndex: 'vehiclePermitImage4', render: (text, record) => <ImagePreview imageLocation={record.vehiclePermitImage4} /> },
  { title: '图5', dataIndex: 'vehiclePermitImage5', render: (text, record) => <ImagePreview imageLocation={record.vehiclePermitImage5} /> },
  { title: '客户', dataIndex: 'customer', render: (text, record) => (record.customer ? record.customer.id : '暂无') },
  { title: '平台', dataIndex: 'platform', render: (text, record) => (record.platform ? record.platform.id : '暂无') },
{ title: '操作',
   render: (text, record) => renderActions(text, record)}]
   
    const newRecord =()=>{
      const newVehicleInfoToAppend  = {
      	'id':`+1`, 
				'licensePlateNumber':'',
				'vehicleType':'',
				'useCharacter':'',
				'seatsQuantity':'',
				'registrationDate':'',
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
				'customer':'',
				'platform':'',


      };
      const newData = data ? [...data]:[];
      newData.push(newVehicleInfoToAppend);
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

export default Form.create()(VehicleInfoEditTable)



