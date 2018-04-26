

import React, { PureComponent } from 'react'
import moment from 'moment'
import {Form,Button, Table, Alert, Badge,Input,Divider,Popconfirm } from 'antd'
import styles from './EmployeeSalarySheet.edittable.less'
import ImagePreview from '../../components/ImagePreview'






const getRowById = (data,id) => {
  return data.filter(item => item.id === id)[0];
}

const toggleEdit = (e,data,id) =>{
  const row =  data.filter(item => item.id === id)[0];
  row[editable] = true
}




class EmployeeSalarySheetEditTable extends PureComponent {

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
			const employeeId = record.employee.id
			const currentSalaryGradeId = record.currentSalaryGrade.id

      //const communityId = record.community.id;
      return {employeeId,currentSalaryGradeId,};
    }
    const deleteRecord = (e,record) =>{
      const {dispatch, owner} = this.props
      const {data} = this.state
      const employeeSalarySheetIds = [record.id];
      const parameters = { employeeSalarySheetIds }
      dispatch({
        type: `${owner.type}/removeEmployeeSalarySheetList`,
        payload: { id: owner.id, type: 'employeeSalarySheet', parameters },
      })
    }


    const addRecord = (e,record) =>{
      const {dispatch, owner} = this.props
      const {data} = this.state
      const communityId = record.community.id;
      const parameters = { ...record, ...remapReference(record)}
      const newData = [...data];
      

      dispatch({
        type: `${owner.type}/addEmployeeSalarySheet`,
        payload: {
          id: owner.id,
          type: 'employeeSalarySheet',
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
      const {employeeSalarySheetId} = record.id
      const parameters = { ...record, employeeSalarySheetId }
      const newData = [...data];
      const row =  newData.filter(item => item.id === record.id)[0];
      row.editable = !row.editable 

      dispatch({
        type: `${owner.type}/updateEmployeeSalarySheet`,
        payload: {
          id: owner.id,
          type: 'employeeSalarySheet',
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
  { title: '员工', dataIndex: 'employee', render: (text, record) => (record.employee ? record.employee.displayName : '暂无') },
  { title: '目前工资等级', dataIndex: 'currentSalaryGrade', render: (text, record) => (record.currentSalaryGrade ? record.currentSalaryGrade.displayName : '暂无') },
  { title: '基本工资', dataIndex: 'baseSalary', className:'money', render: (text, record) => ('￥'+text.toFixed(2)) },
  { title: '奖金', dataIndex: 'bonus', className:'money', render: (text, record) => ('￥'+text.toFixed(2)) },
  { title: '奖励', dataIndex: 'reward', className:'money', render: (text, record) => ('￥'+text.toFixed(2)) },
  { title: '个人所得税', dataIndex: 'personalTax', className:'money', render: (text, record) => ('￥'+text.toFixed(2)) },
  { title: '社会保险', dataIndex: 'socialSecurity', className:'money', render: (text, record) => ('￥'+text.toFixed(2)) },
  { title: '住房公积金', dataIndex: 'housingFound', className:'money', render: (text, record) => ('￥'+text.toFixed(2)) },
  { title: '失业保险', dataIndex: 'jobInsurance', className:'money', render: (text, record) => ('￥'+text.toFixed(2)) },
  { title: '工资支付', dataIndex: 'payingOff', render: (text, record) => (record.payingOff ? record.payingOff.displayName : '暂无') },
  { title: '当前状态', debugtype: 'string', dataIndex: 'currentStatus', width: '12', render: (text, record) => renderStringEdit('currentStatus',text, record)  },
{ title: '操作',
   render: (text, record) => renderActions(text, record)}]
   
    const newRecord =()=>{
      const newEmployeeSalarySheetToAppend  = {
      	'id':`+1`, 
				'employee':'',
				'currentSalaryGrade':'',
				'baseSalary':'',
				'bonus':'',
				'reward':'',
				'personalTax':'',
				'socialSecurity':'',
				'housingFound':'',
				'jobInsurance':'',
				'payingOff':'',
				'currentStatus':'',


      };
      const newData = data ? [...data]:[];
      newData.push(newEmployeeSalarySheetToAppend);
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

export default Form.create()(EmployeeSalarySheetEditTable)



