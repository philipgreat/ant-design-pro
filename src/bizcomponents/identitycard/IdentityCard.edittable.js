

import React, { PureComponent } from 'react'
import moment from 'moment'
import {Form,Button, Table, Alert, Badge,Input,Divider,Popconfirm } from 'antd'
import styles from './IdentityCard.edittable.less'
import ImagePreview from '../../components/ImagePreview'






const getRowById = (data,id) => {
  return data.filter(item => item.id === id)[0];
}

const toggleEdit = (e,data,id) =>{
  const row =  data.filter(item => item.id === id)[0];
  row[editable] = true
}




class IdentityCardEditTable extends PureComponent {

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

      //const communityId = record.community.id;
      return {};
    }
    const deleteRecord = (e,record) =>{
      const {dispatch, owner} = this.props
      const {data} = this.state
      const identityCardIds = [record.id];
      const parameters = { identityCardIds }
      dispatch({
        type: `${owner.type}/removeIdentityCardList`,
        payload: { id: owner.id, type: 'identityCard', parameters },
      })
    }


    const addRecord = (e,record) =>{
      const {dispatch, owner} = this.props
      const {data} = this.state
      const communityId = record.community.id;
      const parameters = { ...record, ...remapReference(record)}
      const newData = [...data];
      

      dispatch({
        type: `${owner.type}/addIdentityCard`,
        payload: {
          id: owner.id,
          type: 'identityCard',
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
      const {identityCardId} = record.id
      const parameters = { ...record, identityCardId }
      const newData = [...data];
      const row =  newData.filter(item => item.id === record.id)[0];
      row.editable = !row.editable 

      dispatch({
        type: `${owner.type}/updateIdentityCard`,
        payload: {
          id: owner.id,
          type: 'identityCard',
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
  { title: '姓名', debugtype: 'string', dataIndex: 'holderName', width: '7', render: (text, record) => renderStringEdit('holderName',text, record)  },
  { title: '身份证号码', debugtype: 'string', dataIndex: 'cardNumber', width: '22', render: (text, record) => renderStringEdit('cardNumber',text, record)  },
  { title: '身份证正面照片', dataIndex: 'frontImage', render: (text, record) => <ImagePreview imageLocation={record.身份证正面照片} /> },
  { title: '身份证背面照片', dataIndex: 'backImage', render: (text, record) => <ImagePreview imageLocation={record.身份证背面照片} /> },
  { title: '失效日期', dataIndex: 'expirationDate', render: (text, record) => moment(record.expirationDate).format('YYYY-MM-DD') },
{ title: '操作',
   render: (text, record) => renderActions(text, record)}]
   
    const newRecord =()=>{
      const newIdentityCardToAppend  = {
      	'id':`+1`, 
				'holderName':'',
				'cardNumber':'',
				'frontImage':'',
				'backImage':'',
				'expirationDate':'',


      };
      const newData = data ? [...data]:[];
      newData.push(newIdentityCardToAppend);
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

export default Form.create()(IdentityCardEditTable)


