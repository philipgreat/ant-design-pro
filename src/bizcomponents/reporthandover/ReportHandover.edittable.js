

import React, { PureComponent } from 'react'
import moment from 'moment'
import {Form,Button, Table, Alert, Badge,Input,Divider,Popconfirm } from 'antd'
import styles from './ReportHandover.edittable.less'
import ImagePreview from '../../components/ImagePreview'






const getRowById = (data,id) => {
  return data.filter(item => item.id === id)[0];
}

const toggleEdit = (e,data,id) =>{
  const row =  data.filter(item => item.id === id)[0];
  row[editable] = true
}




class ReportHandoverEditTable extends PureComponent {

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
			const serviceTypeVehicleC2mId = record.serviceTypeVehicleC2m.id
			const serviceTypeVehicleM2mId = record.serviceTypeVehicleM2m.id
			const serviceTypeVehicleM2cId = record.serviceTypeVehicleM2c.id
			const serviceTypeFileC2mId = record.serviceTypeFileC2m.id
			const serviceTypeFileM2mId = record.serviceTypeFileM2m.id
			const serviceTypeFileM2cId = record.serviceTypeFileM2c.id

      //const communityId = record.community.id;
      return {serviceTypeVehicleC2mId,serviceTypeVehicleM2mId,serviceTypeVehicleM2cId,serviceTypeFileC2mId,serviceTypeFileM2mId,serviceTypeFileM2cId,};
    }
    const deleteRecord = (e,record) =>{
      const {dispatch, owner} = this.props
      const {data} = this.state
      const reportHandoverIds = [record.id];
      const parameters = { reportHandoverIds }
      dispatch({
        type: `${owner.type}/removeReportHandoverList`,
        payload: { id: owner.id, type: 'reportHandover', parameters },
      })
    }


    const addRecord = (e,record) =>{
      const {dispatch, owner} = this.props
      const {data} = this.state
      const communityId = record.community.id;
      const parameters = { ...record, ...remapReference(record)}
      const newData = [...data];
      

      dispatch({
        type: `${owner.type}/addReportHandover`,
        payload: {
          id: owner.id,
          type: 'reportHandover',
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
      const {reportHandoverId} = record.id
      const parameters = { ...record, reportHandoverId }
      const newData = [...data];
      const row =  newData.filter(item => item.id === record.id)[0];
      row.editable = !row.editable 

      dispatch({
        type: `${owner.type}/updateReportHandover`,
        payload: {
          id: owner.id,
          type: 'reportHandover',
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
  { title: '回归结果', debugtype: 'string', dataIndex: 'handoverResult', width: '6', render: (text, record) => renderStringEdit('handoverResult',text, record)  },
  { title: '拒收原因', debugtype: 'string', dataIndex: 'rejectComments', width: '16', render: (text, record) => renderStringEdit('rejectComments',text, record)  },
  { title: '拒收凭证1', dataIndex: 'rejectEvidence1', render: (text, record) => <ImagePreview imageLocation={record.rejectEvidence1} /> },
  { title: '拒收凭证2', dataIndex: 'rejectEvidence2', render: (text, record) => <ImagePreview imageLocation={record.rejectEvidence2} /> },
  { title: '拒收凭证3', dataIndex: 'rejectEvidence3', render: (text, record) => <ImagePreview imageLocation={record.rejectEvidence3} /> },
  { title: '拒收凭证4', dataIndex: 'rejectEvidence4', render: (text, record) => <ImagePreview imageLocation={record.rejectEvidence4} /> },
  { title: '拒收凭证5', dataIndex: 'rejectEvidence5', render: (text, record) => <ImagePreview imageLocation={record.rejectEvidence5} /> },
  { title: '创建时间', dataIndex: 'createTime', render: (text, record) => moment(record.createTime).format('YYYY-MM-DD') },
  { title: '服务类型车辆C2m', dataIndex: 'serviceTypeVehicleC2m', render: (text, record) => (record.serviceTypeVehicleC2m ? record.serviceTypeVehicleC2m.id : '暂无') },
  { title: '服务类型车辆M2m', dataIndex: 'serviceTypeVehicleM2m', render: (text, record) => (record.serviceTypeVehicleM2m ? record.serviceTypeVehicleM2m.id : '暂无') },
  { title: '服务类型车辆M2c', dataIndex: 'serviceTypeVehicleM2c', render: (text, record) => (record.serviceTypeVehicleM2c ? record.serviceTypeVehicleM2c.id : '暂无') },
  { title: '服务类型文件C2m', dataIndex: 'serviceTypeFileC2m', render: (text, record) => (record.serviceTypeFileC2m ? record.serviceTypeFileC2m.id : '暂无') },
  { title: '服务类型文件M2m', dataIndex: 'serviceTypeFileM2m', render: (text, record) => (record.serviceTypeFileM2m ? record.serviceTypeFileM2m.id : '暂无') },
  { title: '服务类型文件M2c', dataIndex: 'serviceTypeFileM2c', render: (text, record) => (record.serviceTypeFileM2c ? record.serviceTypeFileM2c.id : '暂无') },
{ title: '操作',
   render: (text, record) => renderActions(text, record)}]
   
    const newRecord =()=>{
      const newReportHandoverToAppend  = {
      	'id':`+1`, 
				'handoverResult':'',
				'rejectComments':'',
				'rejectEvidence1':'',
				'rejectEvidence2':'',
				'rejectEvidence3':'',
				'rejectEvidence4':'',
				'rejectEvidence5':'',
				'createTime':'',
				'serviceTypeVehicleC2m':'',
				'serviceTypeVehicleM2m':'',
				'serviceTypeVehicleM2c':'',
				'serviceTypeFileC2m':'',
				'serviceTypeFileM2m':'',
				'serviceTypeFileM2c':'',


      };
      const newData = data ? [...data]:[];
      newData.push(newReportHandoverToAppend);
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

export default Form.create()(ReportHandoverEditTable)



