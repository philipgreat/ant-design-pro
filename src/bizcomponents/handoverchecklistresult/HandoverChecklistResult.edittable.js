

import React, { PureComponent } from 'react'
import moment from 'moment'
import {Form,Button, Table, Alert, Badge,Input,Divider,Popconfirm } from 'antd'
import styles from './HandoverChecklistResult.edittable.less'
import ImagePreview from '../../components/ImagePreview'






const getRowById = (data,id) => {
  return data.filter(item => item.id === id)[0];
}

const toggleEdit = (e,data,id) =>{
  const row =  data.filter(item => item.id === id)[0];
  row[editable] = true
}




class HandoverChecklistResultEditTable extends PureComponent {

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
			const reportHandoverId = record.reportHandover.id

      //const communityId = record.community.id;
      return {availableHandOverItemId,reportHandoverId,};
    }
    const deleteRecord = (e,record) =>{
      const {dispatch, owner} = this.props
      const {data} = this.state
      const handoverChecklistResultIds = [record.id];
      const parameters = { handoverChecklistResultIds }
      dispatch({
        type: `${owner.type}/removeHandoverChecklistResultList`,
        payload: { id: owner.id, type: 'handoverChecklistResult', parameters },
      })
    }


    const addRecord = (e,record) =>{
      const {dispatch, owner} = this.props
      const {data} = this.state
      const communityId = record.community.id;
      const parameters = { ...record, ...remapReference(record)}
      const newData = [...data];
      

      dispatch({
        type: `${owner.type}/addHandoverChecklistResult`,
        payload: {
          id: owner.id,
          type: 'handoverChecklistResult',
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
      const {handoverChecklistResultId} = record.id
      const parameters = { ...record, handoverChecklistResultId }
      const newData = [...data];
      const row =  newData.filter(item => item.id === record.id)[0];
      row.editable = !row.editable 

      dispatch({
        type: `${owner.type}/updateHandoverChecklistResult`,
        payload: {
          id: owner.id,
          type: 'handoverChecklistResult',
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
  { title: '回归检验结果', debugtype: 'string', dataIndex: 'handoverCheckResult', width: '6', render: (text, record) => renderStringEdit('handoverCheckResult',text, record)  },
  { title: '交接检查评论', debugtype: 'string', dataIndex: 'handoverCheckComment', width: '10', render: (text, record) => renderStringEdit('handoverCheckComment',text, record)  },
  { title: '切换检查证据图片1', dataIndex: 'handoverCheckEvidenceImage1', render: (text, record) => <ImagePreview imageLocation={record.handoverCheckEvidenceImage1} /> },
  { title: '切换检查证据图片2', dataIndex: 'handoverCheckEvidenceImage2', render: (text, record) => <ImagePreview imageLocation={record.handoverCheckEvidenceImage2} /> },
  { title: '切换检查证据图片3', dataIndex: 'handoverCheckEvidenceImage3', render: (text, record) => <ImagePreview imageLocation={record.handoverCheckEvidenceImage3} /> },
  { title: '切换检查证据图片4', dataIndex: 'handoverCheckEvidenceImage4', render: (text, record) => <ImagePreview imageLocation={record.handoverCheckEvidenceImage4} /> },
  { title: '切换检查证据图片5', dataIndex: 'handoverCheckEvidenceImage5', render: (text, record) => <ImagePreview imageLocation={record.handoverCheckEvidenceImage5} /> },
  { title: '交接检查清单', dataIndex: 'availableHandOverItem', render: (text, record) => (record.availableHandOverItem ? record.availableHandOverItem.id : '暂无') },
  { title: '交接报告', dataIndex: 'reportHandover', render: (text, record) => (record.reportHandover ? record.reportHandover.id : '暂无') },
{ title: '操作',
   render: (text, record) => renderActions(text, record)}]
   
    const newRecord =()=>{
      const newHandoverChecklistResultToAppend  = {
      	'id':`+1`, 
				'handoverCheckResult':'',
				'handoverCheckComment':'',
				'handoverCheckEvidenceImage1':'',
				'handoverCheckEvidenceImage2':'',
				'handoverCheckEvidenceImage3':'',
				'handoverCheckEvidenceImage4':'',
				'handoverCheckEvidenceImage5':'',
				'availableHandOverItem':'',
				'reportHandover':'',


      };
      const newData = data ? [...data]:[];
      newData.push(newHandoverChecklistResultToAppend);
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

export default Form.create()(HandoverChecklistResultEditTable)



