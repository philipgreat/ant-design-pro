

import React, { PureComponent } from 'react'
import moment from 'moment'
import {Form,Button, Table, Alert, Badge,Input,Divider,Popconfirm } from 'antd'
import styles from './Task.edittable.less'
import ImagePreview from '../../components/ImagePreview'






const getRowById = (data,id) => {
  return data.filter(item => item.id === id)[0];
}

const toggleEdit = (e,data,id) =>{
  const row =  data.filter(item => item.id === id)[0];
  row[editable] = true
}




class TaskEditTable extends PureComponent {

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
			const creatorId = record.creator.id
			const communityId = record.community.id
			const homePageId = record.homePage.id
			const taskPageId = record.taskPage.id

      //const communityId = record.community.id;
      return {creatorId,communityId,homePageId,taskPageId,};
    }
    const deleteRecord = (e,record) =>{
      const {dispatch, owner} = this.props
      const {data} = this.state
      const taskIds = [record.id];
      const parameters = { taskIds }
      dispatch({
        type: `${owner.type}/removeTaskList`,
        payload: { id: owner.id, type: 'task', parameters },
      })
    }


    const addRecord = (e,record) =>{
      const {dispatch, owner} = this.props
      const {data} = this.state
      const communityId = record.community.id;
      const parameters = { ...record, ...remapReference(record)}
      const newData = [...data];
      

      dispatch({
        type: `${owner.type}/addTask`,
        payload: {
          id: owner.id,
          type: 'task',
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
      const {taskId} = record.id
      const parameters = { ...record, taskId }
      const newData = [...data];
      const row =  newData.filter(item => item.id === record.id)[0];
      row.editable = !row.editable 

      dispatch({
        type: `${owner.type}/updateTask`,
        payload: {
          id: owner.id,
          type: 'task',
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
  { title: '标题', debugtype: 'string', dataIndex: 'title', width: '15', render: (text, record) => renderStringEdit('title',text, record)  },
  { title: '选定的任务', debugtype: 'string', dataIndex: 'selectedTask', width: '5', render: (text, record) => renderStringEdit('selectedTask',text, record)  },
  { title: '创建时间', dataIndex: 'createTime', render: (text, record) => moment(record.createTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '内容', debugtype: 'string', dataIndex: 'content', width: '107', render: (text, record) => renderStringEdit('content',text, record)  },
  { title: '创建者', dataIndex: 'creator', render: (text, record) => (record.creator ? record.creator.displayName : '暂无') },
  { title: '社区', dataIndex: 'community', render: (text, record) => (record.community ? record.community.displayName : '暂无') },
  { title: '主页', dataIndex: 'homePage', render: (text, record) => (record.homePage ? record.homePage.displayName : '暂无') },
  { title: '任务页面', dataIndex: 'taskPage', render: (text, record) => (record.taskPage ? record.taskPage.displayName : '暂无') },
  { title: '视频网址', debugtype: 'string_url', dataIndex: 'videoUrl', width: '50', render: (text, record) => renderStringEdit('videoUrl',text, record)  },
  { title: '封面图像路径1', dataIndex: 'coverImagePath1', render: (text, record) => <ImagePreview imageLocation={record.coverImagePath1} /> },
  { title: '封面图像路径2', dataIndex: 'coverImagePath2', render: (text, record) => <ImagePreview imageLocation={record.coverImagePath2} /> },
  { title: '封面图像路径3', dataIndex: 'coverImagePath3', render: (text, record) => <ImagePreview imageLocation={record.coverImagePath3} /> },
  { title: '图1', dataIndex: 'imagePath1', render: (text, record) => <ImagePreview imageLocation={record.imagePath1} /> },
  { title: '图2', dataIndex: 'imagePath2', render: (text, record) => <ImagePreview imageLocation={record.imagePath2} /> },
  { title: '图3', dataIndex: 'imagePath3', render: (text, record) => <ImagePreview imageLocation={record.imagePath3} /> },
  { title: '图4', dataIndex: 'imagePath4', render: (text, record) => <ImagePreview imageLocation={record.imagePath4} /> },
  { title: '图5', dataIndex: 'imagePath5', render: (text, record) => <ImagePreview imageLocation={record.imagePath5} /> },
  { title: '发布人的奖金', debugtype: 'int', dataIndex: 'creatorBonus', width: '7', render: (text, record) => renderStringEdit('creatorBonus',text, record)  },
  { title: '额外的奖金', debugtype: 'int', dataIndex: 'additionalBonus', width: '7', render: (text, record) => renderStringEdit('additionalBonus',text, record)  },
  { title: '躲藏', dataIndex: 'hiding', render: (text, record) => (record.hiding ? record.hiding.displayName : '暂无') },
  { title: '解决', dataIndex: 'resolving', render: (text, record) => (record.resolving ? record.resolving.displayName : '暂无') },
  { title: '悬赏', dataIndex: 'reward', render: (text, record) => (record.reward ? record.reward.displayName : '暂无') },
  { title: '当前用户已点赞', dataIndex: 'likeByCurrentUser', render: (text, record) => (record.likeByCurrentUser ? '是' : '否') },
  { title: '当前用户已回复', dataIndex: 'repliedByCurrentUser', render: (text, record) => (record.repliedByCurrentUser ? '是' : '否') },
  { title: '当前状态', debugtype: 'string', dataIndex: 'currentStatus', width: '12', render: (text, record) => renderStringEdit('currentStatus',text, record)  },
{ title: '操作',
   render: (text, record) => renderActions(text, record)}]
   
    const newRecord =()=>{
      const newTaskToAppend  = {
      	'id':`+1`, 
				'title':'',
				'selectedTask':'',
				'createTime':'',
				'content':'',
				'creator':'',
				'community':'',
				'homePage':'',
				'taskPage':'',
				'videoUrl':'',
				'coverImagePath1':'',
				'coverImagePath2':'',
				'coverImagePath3':'',
				'imagePath1':'',
				'imagePath2':'',
				'imagePath3':'',
				'imagePath4':'',
				'imagePath5':'',
				'creatorBonus':'',
				'additionalBonus':'',
				'hiding':'',
				'resolving':'',
				'reward':'',
				'likeByCurrentUser':'',
				'repliedByCurrentUser':'',
				'currentStatus':'',


      };
      const newData = data ? [...data]:[];
      newData.push(newTaskToAppend);
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

export default Form.create()(TaskEditTable)



