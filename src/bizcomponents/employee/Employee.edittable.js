

import React, { PureComponent } from 'react'
import moment from 'moment'
import {Form,Button, Table, Alert, Badge,Input,Divider,Popconfirm } from 'antd'
import styles from './Employee.edittable.less'
import ImagePreview from '../../components/ImagePreview'






const getRowById = (data,id) => {
  return data.filter(item => item.id === id)[0];
}

const toggleEdit = (e,data,id) =>{
  const row =  data.filter(item => item.id === id)[0];
  row[editable] = true
}




class EmployeeEditTable extends PureComponent {

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
			const companyId = record.company.id
			const departmentId = record.department.id
			const occupationId = record.occupation.id
			const responsibleForId = record.responsibleFor.id
			const currentSalaryGradeId = record.currentSalaryGrade.id

      //const communityId = record.community.id;
      return {companyId,departmentId,occupationId,responsibleForId,currentSalaryGradeId,};
    }
    const deleteRecord = (e,record) =>{
      const {dispatch, owner} = this.props
      const {data} = this.state
      const employeeIds = [record.id];
      const parameters = { employeeIds }
      dispatch({
        type: `${owner.type}/removeEmployeeList`,
        payload: { id: owner.id, type: 'employee', parameters },
      })
    }


    const addRecord = (e,record) =>{
      const {dispatch, owner} = this.props
      const {data} = this.state
      const communityId = record.community.id;
      const parameters = { ...record, ...remapReference(record)}
      const newData = [...data];
      

      dispatch({
        type: `${owner.type}/addEmployee`,
        payload: {
          id: owner.id,
          type: 'employee',
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
      const {employeeId} = record.id
      const parameters = { ...record, employeeId }
      const newData = [...data];
      const row =  newData.filter(item => item.id === record.id)[0];
      row.editable = !row.editable 

      dispatch({
        type: `${owner.type}/updateEmployee`,
        payload: {
          id: owner.id,
          type: 'employee',
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
  { title: '公司', dataIndex: 'company', render: (text, record) => (record.company ? record.company.displayName : '暂无') },
  { title: '头衔', debugtype: 'string', dataIndex: 'title', width: '7', render: (text, record) => renderStringEdit('title',text, record)  },
  { title: '部门', dataIndex: 'department', render: (text, record) => (record.department ? record.department.displayName : '暂无') },
  { title: '姓', debugtype: 'string', dataIndex: 'familyName', width: '5', render: (text, record) => renderStringEdit('familyName',text, record)  },
  { title: '名', debugtype: 'string', dataIndex: 'givenName', width: '6', render: (text, record) => renderStringEdit('givenName',text, record)  },
  { title: '电子邮件', debugtype: 'string_email', dataIndex: 'email', width: '17', render: (text, record) => renderStringEdit('email',text, record)  },
  { title: '城市', debugtype: 'string', dataIndex: 'city', width: '6', render: (text, record) => renderStringEdit('city',text, record)  },
  { title: '地址', debugtype: 'string', dataIndex: 'address', width: '11', render: (text, record) => renderStringEdit('address',text, record)  },
  { title: '手机', debugtype: 'string_china_mobile_phone', dataIndex: 'cellPhone', width: '15', render: (text, record) => renderStringEdit('cellPhone',text, record)  },
  { title: '职业', dataIndex: 'occupation', render: (text, record) => (record.occupation ? record.occupation.displayName : '暂无') },
  { title: '负责', dataIndex: 'responsibleFor', render: (text, record) => (record.responsibleFor ? record.responsibleFor.displayName : '暂无') },
  { title: '目前工资等级', dataIndex: 'currentSalaryGrade', render: (text, record) => (record.currentSalaryGrade ? record.currentSalaryGrade.displayName : '暂无') },
  { title: '工资账户', debugtype: 'string', dataIndex: 'salaryAccount', width: '19', render: (text, record) => renderStringEdit('salaryAccount',text, record)  },
  { title: '工作申请', dataIndex: 'jobApplication', render: (text, record) => (record.jobApplication ? record.jobApplication.displayName : '暂无') },
  { title: '专业面试', dataIndex: 'professionInterview', render: (text, record) => (record.professionInterview ? record.professionInterview.displayName : '暂无') },
  { title: '人力资源部面试', dataIndex: 'hrInterview', render: (text, record) => (record.hrInterview ? record.hrInterview.displayName : '暂无') },
  { title: '审批工作要约', dataIndex: 'offerApproval', render: (text, record) => (record.offerApproval ? record.offerApproval.displayName : '暂无') },
  { title: '接受工作要约', dataIndex: 'offerAcceptance', render: (text, record) => (record.offerAcceptance ? record.offerAcceptance.displayName : '暂无') },
  { title: '员工入职', dataIndex: 'employeeBoarding', render: (text, record) => (record.employeeBoarding ? record.employeeBoarding.displayName : '暂无') },
  { title: '雇佣终止', dataIndex: 'termination', render: (text, record) => (record.termination ? record.termination.displayName : '暂无') },
  { title: '当前状态', debugtype: 'string', dataIndex: 'currentStatus', width: '26', render: (text, record) => renderStringEdit('currentStatus',text, record)  },
{ title: '操作',
   render: (text, record) => renderActions(text, record)}]
   
    const newRecord =()=>{
      const newEmployeeToAppend  = {
      	'id':`+1`, 
				'company':'',
				'title':'',
				'department':'',
				'familyName':'',
				'givenName':'',
				'email':'',
				'city':'',
				'address':'',
				'cellPhone':'',
				'occupation':'',
				'responsibleFor':'',
				'currentSalaryGrade':'',
				'salaryAccount':'',
				'jobApplication':'',
				'professionInterview':'',
				'hrInterview':'',
				'offerApproval':'',
				'offerAcceptance':'',
				'employeeBoarding':'',
				'termination':'',
				'currentStatus':'',


      };
      const newData = data ? [...data]:[];
      newData.push(newEmployeeToAppend);
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

export default Form.create()(EmployeeEditTable)



