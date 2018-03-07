

import React, { PureComponent } from 'react'
import moment from 'moment'
import {Form,Button, Table, Alert, Badge,Input,Divider,Popconfirm } from 'antd'
import styles from './HandOverChecklistResult.edittable.less'
import ImagePreview from '../../components/ImagePreview'






const getRowById = (data,id) => {
  return data.filter(item => item.id === id)[0];
}

const toggleEdit = (e,data,id) =>{
  const row =  data.filter(item => item.id === id)[0];
  row[editable] = true
}




class HandOverChecklistResultEditTable extends PureComponent {

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
			const availableHandOverItemId = record.availableHandOverItem.id
			const serviceTypeVehicleC2mId = record.serviceTypeVehicleC2m.id
			const serviceTypeVehicleM2mId = record.serviceTypeVehicleM2m.id
			const serviceTypeVehicleM2cId = record.serviceTypeVehicleM2c.id
			const serviceTypeFileC2mId = record.serviceTypeFileC2m.id
			const serviceTypeFileM2mId = record.serviceTypeFileM2m.id
			const serviceTypeFileM2cId = record.serviceTypeFileM2c.id

      //const communityId = record.community.id;
      return {availableHandOverItemId,serviceTypeVehicleC2mId,serviceTypeVehicleM2mId,serviceTypeVehicleM2cId,serviceTypeFileC2mId,serviceTypeFileM2mId,serviceTypeFileM2cId,};
    }
    const deleteRecord = (e,record) =>{
      const {dispatch, owner} = this.props
      const {data} = this.state
      const handOverChecklistResultIds = [record.id];
      const parameters = { handOverChecklistResultIds }
      dispatch({
        type: `${owner.type}/removeHandOverChecklistResultList`,
        payload: { id: owner.id, type: 'handOverChecklistResult', parameters },
      })
    }


    const addRecord = (e,record) =>{
      const {dispatch, owner} = this.props
      const {data} = this.state
      const communityId = record.community.id;
      const parameters = { ...record, ...remapReference(record)}
      const newData = [...data];
      

      dispatch({
        type: `${owner.type}/addHandOverChecklistResult`,
        payload: {
          id: owner.id,
          type: 'handOverChecklistResult',
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
      const {handOverChecklistResultId} = record.id
      const parameters = { ...record, handOverChecklistResultId }
      const newData = [...data];
      const row =  newData.filter(item => item.id === record.id)[0];
      row.editable = !row.editable 

      dispatch({
        type: `${owner.type}/updateHandOverChecklistResult`,
        payload: {
          id: owner.id,
          type: 'handOverChecklistResult',
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
  { title: '检查项名称', debugtype: 'string', dataIndex: 'handOverCheckItemName', width: '11', render: (text, record) => renderStringEdit('handOverCheckItemName',text, record)  },
  { title: '检查项目描述', debugtype: 'string', dataIndex: 'checkItemDescription', width: '37', render: (text, record) => renderStringEdit('checkItemDescription',text, record)  },
  { title: '检车项结果', debugtype: 'string', dataIndex: 'handOverCheckResult', width: '6', render: (text, record) => renderStringEdit('handOverCheckResult',text, record)  },
  { title: '检查项意见', debugtype: 'string', dataIndex: 'handOverCheckComment', width: '10', render: (text, record) => renderStringEdit('handOverCheckComment',text, record)  },
  { title: '凭证图片1', dataIndex: 'handOverCheckEvidenceImage1', render: (text, record) => <ImagePreview imageLocation={record.handOverCheckEvidenceImage1} /> },
  { title: '凭证图片2', dataIndex: 'handOverCheckEvidenceImage2', render: (text, record) => <ImagePreview imageLocation={record.handOverCheckEvidenceImage2} /> },
  { title: '凭证图片3', dataIndex: 'handOverCheckEvidenceImage3', render: (text, record) => <ImagePreview imageLocation={record.handOverCheckEvidenceImage3} /> },
  { title: '凭证图片4', dataIndex: 'handOverCheckEvidenceImage4', render: (text, record) => <ImagePreview imageLocation={record.handOverCheckEvidenceImage4} /> },
  { title: '凭证图片5', dataIndex: 'handOverCheckEvidenceImage5', render: (text, record) => <ImagePreview imageLocation={record.handOverCheckEvidenceImage5} /> },
  { title: '交接检查项', dataIndex: 'availableHandOverItem', render: (text, record) => (record.availableHandOverItem ? record.availableHandOverItem.displayName : '暂无') },
  { title: '收车服务', dataIndex: 'serviceTypeVehicleC2m', render: (text, record) => (record.serviceTypeVehicleC2m ? record.serviceTypeVehicleC2m.displayName : '暂无') },
  { title: '移车服务', dataIndex: 'serviceTypeVehicleM2m', render: (text, record) => (record.serviceTypeVehicleM2m ? record.serviceTypeVehicleM2m.displayName : '暂无') },
  { title: '还车服务', dataIndex: 'serviceTypeVehicleM2c', render: (text, record) => (record.serviceTypeVehicleM2c ? record.serviceTypeVehicleM2c.displayName : '暂无') },
  { title: '收件服务', dataIndex: 'serviceTypeFileC2m', render: (text, record) => (record.serviceTypeFileC2m ? record.serviceTypeFileC2m.displayName : '暂无') },
  { title: '移件服务', dataIndex: 'serviceTypeFileM2m', render: (text, record) => (record.serviceTypeFileM2m ? record.serviceTypeFileM2m.displayName : '暂无') },
  { title: '还件服务', dataIndex: 'serviceTypeFileM2c', render: (text, record) => (record.serviceTypeFileM2c ? record.serviceTypeFileM2c.displayName : '暂无') },
{ title: '操作',
   render: (text, record) => renderActions(text, record)}]
   
    const newRecord =()=>{
      const newHandOverChecklistResultToAppend  = {
      	'id':`+1`, 
				'handOverCheckItemName':'',
				'checkItemDescription':'',
				'handOverCheckResult':'',
				'handOverCheckComment':'',
				'handOverCheckEvidenceImage1':'',
				'handOverCheckEvidenceImage2':'',
				'handOverCheckEvidenceImage3':'',
				'handOverCheckEvidenceImage4':'',
				'handOverCheckEvidenceImage5':'',
				'availableHandOverItem':'',
				'serviceTypeVehicleC2m':'',
				'serviceTypeVehicleM2m':'',
				'serviceTypeVehicleM2c':'',
				'serviceTypeFileC2m':'',
				'serviceTypeFileM2m':'',
				'serviceTypeFileM2c':'',


      };
      const newData = data ? [...data]:[];
      newData.push(newHandOverChecklistResultToAppend);
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

export default Form.create()(HandOverChecklistResultEditTable)



