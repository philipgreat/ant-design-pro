

import React, { PureComponent } from 'react'
import moment from 'moment'
import {Form,Button, Table, Alert, Badge,Input,Divider,Popconfirm } from 'antd'
import styles from './ServiceFileMovementM2cChecklistResult.edittable.less'
import ImagePreview from '../../components/ImagePreview'






const getRowById = (data,id) => {
  return data.filter(item => item.id === id)[0];
}

const toggleEdit = (e,data,id) =>{
  const row =  data.filter(item => item.id === id)[0];
  row[editable] = true
}




class ServiceFileMovementM2cChecklistResultEditTable extends PureComponent {

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
			const serviceId = record.service.id

      //const communityId = record.community.id;
      return {serviceId,};
    }
    const deleteRecord = (e,record) =>{
      const {dispatch, owner} = this.props
      const {data} = this.state
      const serviceFileMovementM2cChecklistResultIds = [record.id];
      const parameters = { serviceFileMovementM2cChecklistResultIds }
      dispatch({
        type: `${owner.type}/removeServiceFileMovementM2cChecklistResultList`,
        payload: { id: owner.id, type: 'serviceFileMovementM2cChecklistResult', parameters },
      })
    }


    const addRecord = (e,record) =>{
      const {dispatch, owner} = this.props
      const {data} = this.state
      const communityId = record.community.id;
      const parameters = { ...record, ...remapReference(record)}
      const newData = [...data];
      

      dispatch({
        type: `${owner.type}/addServiceFileMovementM2cChecklistResult`,
        payload: {
          id: owner.id,
          type: 'serviceFileMovementM2cChecklistResult',
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
      const {serviceFileMovementM2cChecklistResultId} = record.id
      const parameters = { ...record, serviceFileMovementM2cChecklistResultId }
      const newData = [...data];
      const row =  newData.filter(item => item.id === record.id)[0];
      row.editable = !row.editable 

      dispatch({
        type: `${owner.type}/updateServiceFileMovementM2cChecklistResult`,
        payload: {
          id: owner.id,
          type: 'serviceFileMovementM2cChecklistResult',
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
  { title: '服务', dataIndex: 'service', render: (text, record) => (record.service ? record.service.id : '暂无') },
  { title: '检查结果', debugtype: 'string', dataIndex: 'checkResult', width: '6', render: (text, record) => renderStringEdit('checkResult',text, record)  },
  { title: '检验结果的评论', debugtype: 'string', dataIndex: 'checkResultComments', width: '30', render: (text, record) => renderStringEdit('checkResultComments',text, record)  },
  { title: '创建时间', dataIndex: 'createTime', render: (text, record) => moment(record.createTime).format('YYYY-MM-DD') },
  { title: '图1', dataIndex: 'image1', render: (text, record) => <ImagePreview imageLocation={record.图1} /> },
  { title: '图2', dataIndex: 'image2', render: (text, record) => <ImagePreview imageLocation={record.图2} /> },
  { title: '图3', dataIndex: 'image3', render: (text, record) => <ImagePreview imageLocation={record.图3} /> },
  { title: '图4', dataIndex: 'image4', render: (text, record) => <ImagePreview imageLocation={record.图4} /> },
  { title: '图5', dataIndex: 'image5', render: (text, record) => <ImagePreview imageLocation={record.图5} /> },
{ title: '操作',
   render: (text, record) => renderActions(text, record)}]
   
    const newRecord =()=>{
      const newServiceFileMovementM2cChecklistResultToAppend  = {
      	'id':`+1`, 
				'service':'',
				'checkResult':'',
				'checkResultComments':'',
				'createTime':'',
				'image1':'',
				'image2':'',
				'image3':'',
				'image4':'',
				'image5':'',


      };
      const newData = data ? [...data]:[];
      newData.push(newServiceFileMovementM2cChecklistResultToAppend);
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

export default Form.create()(ServiceFileMovementM2cChecklistResultEditTable)


