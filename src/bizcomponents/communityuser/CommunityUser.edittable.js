

import React, { PureComponent } from 'react'
import moment from 'moment'
import {Form,Button, Table, Alert, Badge,Input,Divider,Popconfirm } from 'antd'
import styles from './CommunityUser.edittable.less'
import ImagePreview from '../../components/ImagePreview'






const getRowById = (data,id) => {
  return data.filter(item => item.id === id)[0];
}

const toggleEdit = (e,data,id) =>{
  const row =  data.filter(item => item.id === id)[0];
  row[editable] = true
}




class CommunityUserEditTable extends PureComponent {

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
			const communityId = record.community.id

      //const communityId = record.community.id;
      return {communityId,};
    }
    const deleteRecord = (e,record) =>{
      const {dispatch, owner} = this.props
      const {data} = this.state
      const communityUserIds = [record.id];
      const parameters = { communityUserIds }
      dispatch({
        type: `${owner.type}/removeCommunityUserList`,
        payload: { id: owner.id, type: 'communityUser', parameters },
      })
    }


    const addRecord = (e,record) =>{
      const {dispatch, owner} = this.props
      const {data} = this.state
      const communityId = record.community.id;
      const parameters = { ...record, ...remapReference(record)}
      const newData = [...data];
      

      dispatch({
        type: `${owner.type}/addCommunityUser`,
        payload: {
          id: owner.id,
          type: 'communityUser',
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
      const {communityUserId} = record.id
      const parameters = { ...record, communityUserId }
      const newData = [...data];
      const row =  newData.filter(item => item.id === record.id)[0];
      row.editable = !row.editable 

      dispatch({
        type: `${owner.type}/updateCommunityUser`,
        payload: {
          id: owner.id,
          type: 'communityUser',
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
  { title: '手机', debugtype: 'string_china_mobile_phone', dataIndex: 'mobile', width: '15', render: (text, record) => renderStringEdit('mobile',text, record)  },
  { title: '昵称', debugtype: 'string', dataIndex: 'nickName', width: '6', render: (text, record) => renderStringEdit('nickName',text, record)  },
  { title: '性别', debugtype: 'string_gender', dataIndex: 'gender', width: '5', render: (text, record) => renderStringEdit('gender',text, record)  },
  { title: '用户类型', debugtype: 'string', dataIndex: 'userType', width: '8', render: (text, record) => renderStringEdit('userType',text, record)  },
  { title: '头像', dataIndex: 'avatar', render: (text, record) => <ImagePreview imageLocation={record.avatar} /> },
  { title: '生日', dataIndex: 'birthday', render: (text, record) => moment(record.birthday).format('YYYY-MM-DD') },
  { title: '成长值', debugtype: 'int', dataIndex: 'experiencePoint', width: '9', render: (text, record) => renderStringEdit('experiencePoint',text, record)  },
  { title: '积分', debugtype: 'int', dataIndex: 'bonusPoint', width: '11', render: (text, record) => renderStringEdit('bonusPoint',text, record)  },
  { title: '城市', debugtype: 'string', dataIndex: 'city', width: '7', render: (text, record) => renderStringEdit('city',text, record)  },
  { title: '状态', debugtype: 'string', dataIndex: 'status', width: '12', render: (text, record) => renderStringEdit('status',text, record)  },
  { title: '隐藏的信息', dataIndex: 'hideInfo', render: (text, record) => (record.hideInfo ? '是' : '否') },
  { title: '管理员', dataIndex: 'administrator', render: (text, record) => (record.administrator ? '是' : '否') },
  { title: '社区', dataIndex: 'community', render: (text, record) => (record.community ? record.community.displayName : '暂无') },
  { title: '点经验限制', debugtype: 'int', dataIndex: 'experiencePointLimit', width: '7', render: (text, record) => renderStringEdit('experiencePointLimit',text, record)  },
  { title: '经验点仍', debugtype: 'int', dataIndex: 'experiencePointRemain', width: '7', render: (text, record) => renderStringEdit('experiencePointRemain',text, record)  },
  { title: '经验点过去的日子', dataIndex: 'experiencePointLastDate', render: (text, record) => moment(record.experiencePointLastDate).format('YYYY-MM-DD') },
{ title: '操作',
   render: (text, record) => renderActions(text, record)}]
   
    const newRecord =()=>{
      const newCommunityUserToAppend  = {
      	'id':`+1`, 
				'mobile':'',
				'nickName':'',
				'gender':'',
				'userType':'',
				'avatar':'',
				'birthday':'',
				'experiencePoint':'',
				'bonusPoint':'',
				'city':'',
				'status':'',
				'hideInfo':'',
				'administrator':'',
				'community':'',
				'experiencePointLimit':'',
				'experiencePointRemain':'',
				'experiencePointLastDate':'',


      };
      const newData = data ? [...data]:[];
      newData.push(newCommunityUserToAppend);
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

export default Form.create()(CommunityUserEditTable)



