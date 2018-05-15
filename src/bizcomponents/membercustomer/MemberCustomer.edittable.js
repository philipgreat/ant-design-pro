

import React, { PureComponent } from 'react'
import moment from 'moment'
import {Form,Button, Table, Alert, Badge,Input,Divider,Popconfirm } from 'antd'
import styles from './MemberCustomer.edittable.less'
import ImagePreview from '../../components/ImagePreview'






const getRowById = (data,id) => {
  return data.filter(item => item.id === id)[0];
}

const toggleEdit = (e,data,id) =>{
  const row =  data.filter(item => item.id === id)[0];
  row[editable] = true
}




class MemberCustomerEditTable extends PureComponent {

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
			const memberServiceProductId = record.memberServiceProduct.id
			const memberServiceSkuId = record.memberServiceSku.id
			const memberServicePeriodId = record.memberServicePeriod.id
			const mainOrderId = record.mainOrder.id
			const customerId = record.customer.id

      //const communityId = record.community.id;
      return {memberServiceProductId,memberServiceSkuId,memberServicePeriodId,mainOrderId,customerId,};
    }
    const deleteRecord = (e,record) =>{
      const {dispatch, owner} = this.props
      const {data} = this.state
      const memberCustomerIds = [record.id];
      const parameters = { memberCustomerIds }
      dispatch({
        type: `${owner.type}/removeMemberCustomerList`,
        payload: { id: owner.id, type: 'memberCustomer', parameters },
      })
    }


    const addRecord = (e,record) =>{
      const {dispatch, owner} = this.props
      const {data} = this.state
      const communityId = record.community.id;
      const parameters = { ...record, ...remapReference(record)}
      const newData = [...data];
      

      dispatch({
        type: `${owner.type}/addMemberCustomer`,
        payload: {
          id: owner.id,
          type: 'memberCustomer',
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
      const {memberCustomerId} = record.id
      const parameters = { ...record, memberCustomerId }
      const newData = [...data];
      const row =  newData.filter(item => item.id === record.id)[0];
      row.editable = !row.editable 

      dispatch({
        type: `${owner.type}/updateMemberCustomer`,
        payload: {
          id: owner.id,
          type: 'memberCustomer',
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
  { title: '会员服务产品', dataIndex: 'memberServiceProduct', render: (text, record) => (record.memberServiceProduct ? record.memberServiceProduct.displayName : '暂无') },
  { title: '产品名称', debugtype: 'string', dataIndex: 'productName', width: '10', render: (text, record) => renderStringEdit('productName',text, record)  },
  { title: '产品描述', debugtype: 'string', dataIndex: 'productDescription', width: '10', render: (text, record) => renderStringEdit('productDescription',text, record)  },
  { title: '参加研讨会', dataIndex: 'joinWorkshop', render: (text, record) => (record.joinWorkshop ? '是' : '否') },
  { title: '制造车间', dataIndex: 'createWorkshop', render: (text, record) => (record.createWorkshop ? '是' : '否') },
  { title: '借的书', dataIndex: 'borrowBook', render: (text, record) => (record.borrowBook ? '是' : '否') },
  { title: '是超级贵宾', dataIndex: 'isSuperVIP', render: (text, record) => (record.isSuperVIP ? '是' : '否') },
  { title: '会员服务Sku', dataIndex: 'memberServiceSku', render: (text, record) => (record.memberServiceSku ? record.memberServiceSku.displayName : '暂无') },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '13', render: (text, record) => renderStringEdit('name',text, record)  },
  { title: '描述', debugtype: 'string', dataIndex: 'description', width: '11', render: (text, record) => renderStringEdit('description',text, record)  },
  { title: '列出的价格', dataIndex: 'listPrice', className:'money', render: (text, record) => ('￥'+text.toFixed(2)) },
  { title: '销售价格', dataIndex: 'salePrice', className:'money', render: (text, record) => ('￥'+text.toFixed(2)) },
  { title: '会员服务时间', dataIndex: 'memberServicePeriod', render: (text, record) => (record.memberServicePeriod ? record.memberServicePeriod.displayName : '暂无') },
  { title: '服务期间名称', debugtype: 'string', dataIndex: 'servicePeriodName', width: '7', render: (text, record) => renderStringEdit('servicePeriodName',text, record)  },
  { title: '服务时间天', debugtype: 'int', dataIndex: 'servicePeriodDays', width: '7', render: (text, record) => renderStringEdit('servicePeriodDays',text, record)  },
  { title: '开始日期Datetime', dataIndex: 'startDateDatetime', render: (text, record) => moment(record.startDateDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '过期日期Datetime', dataIndex: 'expiredDateDatetime', render: (text, record) => moment(record.expiredDateDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '主订单', dataIndex: 'mainOrder', render: (text, record) => (record.mainOrder ? record.mainOrder.displayName : '暂无') },
  { title: '客户', dataIndex: 'customer', render: (text, record) => (record.customer ? record.customer.displayName : '暂无') },
{ title: '操作',
   render: (text, record) => renderActions(text, record)}]
   
    const newRecord =()=>{
      const newMemberCustomerToAppend  = {
      	'id':`+1`, 
				'memberServiceProduct':'',
				'productName':'',
				'productDescription':'',
				'joinWorkshop':'',
				'createWorkshop':'',
				'borrowBook':'',
				'isSuperVIP':'',
				'memberServiceSku':'',
				'name':'',
				'description':'',
				'listPrice':'',
				'salePrice':'',
				'memberServicePeriod':'',
				'servicePeriodName':'',
				'servicePeriodDays':'',
				'startDateDatetime':'',
				'expiredDateDatetime':'',
				'mainOrder':'',
				'customer':'',


      };
      const newData = data ? [...data]:[];
      newData.push(newMemberCustomerToAppend);
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

export default Form.create()(MemberCustomerEditTable)



