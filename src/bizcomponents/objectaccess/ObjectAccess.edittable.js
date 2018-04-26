

import React, { PureComponent } from 'react'
import moment from 'moment'
import {Form,Button, Table, Alert, Badge,Input,Divider,Popconfirm } from 'antd'
import styles from './ObjectAccess.edittable.less'
import ImagePreview from '../../components/ImagePreview'






const getRowById = (data,id) => {
  return data.filter(item => item.id === id)[0];
}

const toggleEdit = (e,data,id) =>{
  const row =  data.filter(item => item.id === id)[0];
  row[editable] = true
}




class ObjectAccessEditTable extends PureComponent {

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
			const appId = record.app.id

      //const communityId = record.community.id;
      return {appId,};
    }
    const deleteRecord = (e,record) =>{
      const {dispatch, owner} = this.props
      const {data} = this.state
      const objectAccessIds = [record.id];
      const parameters = { objectAccessIds }
      dispatch({
        type: `${owner.type}/removeObjectAccessList`,
        payload: { id: owner.id, type: 'objectAccess', parameters },
      })
    }


    const addRecord = (e,record) =>{
      const {dispatch, owner} = this.props
      const {data} = this.state
      const communityId = record.community.id;
      const parameters = { ...record, ...remapReference(record)}
      const newData = [...data];
      

      dispatch({
        type: `${owner.type}/addObjectAccess`,
        payload: {
          id: owner.id,
          type: 'objectAccess',
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
      const {objectAccessId} = record.id
      const parameters = { ...record, objectAccessId }
      const newData = [...data];
      const row =  newData.filter(item => item.id === record.id)[0];
      row.editable = !row.editable 

      dispatch({
        type: `${owner.type}/updateObjectAccess`,
        payload: {
          id: owner.id,
          type: 'objectAccess',
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
  { title: '显示名称', debugtype: 'string', dataIndex: 'displayName', width: '11', render: (text, record) => renderStringEdit('displayName',text, record)  },
  { title: '对象类型', debugtype: 'string', dataIndex: 'objectType', width: '32', render: (text, record) => renderStringEdit('objectType',text, record)  },
  { title: '表', debugtype: 'string', dataIndex: 'list1', width: '24', render: (text, record) => renderStringEdit('list1',text, record)  },
  { title: '清单', debugtype: 'string', dataIndex: 'list2', width: '24', render: (text, record) => renderStringEdit('list2',text, record)  },
  { title: '目录3', debugtype: 'string', dataIndex: 'list3', width: '24', render: (text, record) => renderStringEdit('list3',text, record)  },
  { title: '清单', debugtype: 'string', dataIndex: 'list4', width: '24', render: (text, record) => renderStringEdit('list4',text, record)  },
  { title: '列表6', debugtype: 'string', dataIndex: 'list5', width: '24', render: (text, record) => renderStringEdit('list5',text, record)  },
  { title: 'list6', debugtype: 'string', dataIndex: 'list6', width: '24', render: (text, record) => renderStringEdit('list6',text, record)  },
  { title: 'list7', debugtype: 'string', dataIndex: 'list7', width: '24', render: (text, record) => renderStringEdit('list7',text, record)  },
  { title: 'list8', debugtype: 'string', dataIndex: 'list8', width: '24', render: (text, record) => renderStringEdit('list8',text, record)  },
  { title: 'list9', debugtype: 'string', dataIndex: 'list9', width: '24', render: (text, record) => renderStringEdit('list9',text, record)  },
  { title: '应用程序', dataIndex: 'app', render: (text, record) => (record.app ? record.app.displayName : '暂无') },
{ title: '操作',
   render: (text, record) => renderActions(text, record)}]
   
    const newRecord =()=>{
      const newObjectAccessToAppend  = {
      	'id':`+1`, 
				'displayName':'',
				'objectType':'',
				'list1':'',
				'list2':'',
				'list3':'',
				'list4':'',
				'list5':'',
				'list6':'',
				'list7':'',
				'list8':'',
				'list9':'',
				'app':'',


      };
      const newData = data ? [...data]:[];
      newData.push(newObjectAccessToAppend);
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

export default Form.create()(ObjectAccessEditTable)



