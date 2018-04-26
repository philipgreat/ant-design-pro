

import React, { Component } from 'react'
import { connect } from 'dva'
import { Form,Button, Row, Col, Icon, Card, Tabs, Table, Radio, DatePicker, Tooltip, Menu, Dropdown,Steps,Badge } from 'antd'
import { Link, Route, Redirect, Switch } from 'dva/router'
import numeral from 'numeral'
import moment from 'moment'
import {
  ChartCard, yuan, MiniArea, MiniBar, MiniProgress, Field, Bar, Pie, TimelineChart,

} from '../../components/Charts'
import Trend from '../../components/Trend'
import NumberInfo from '../../components/NumberInfo'
import { getTimeDistance } from '../../utils/utils'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import styles from './Employee.viewdetail.less'
import GlobalComponents from '../../custcomponents'
import DescriptionList from '../../components/DescriptionList';
const { Description } = DescriptionList;
const { Step } = Steps

const { TabPane } = Tabs
const { RangePicker } = DatePicker

const topColResponsiveProps = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 6,
  style: { marginBottom: 24 },
}

const summaryOf = (employee) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{employee.id}</Description> 
<Description term="头衔">{employee.title}</Description> 
<Description term="姓">{employee.familyName}</Description> 
<Description term="名">{employee.givenName}</Description> 
<Description term="电子邮件">{employee.email}</Description> 
<Description term="城市">{employee.city}</Description> 
<Description term="地址">{employee.address}</Description> 
<Description term="手机">{employee.cellPhone}</Description> 
<Description term="工资账户">{employee.salaryAccount}</Description> 
<Description term="当前状态">{employee.currentStatus}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  employee: state._employee,
}))
export default class EmployeeViewDetail extends Component {


  state = {
    tabKey: `employeeCompanyTrainingList`,
    stepDirection: 'horizontal',
  }
 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
    const {EmployeeCompanyTrainingViewTable} = GlobalComponents;
    const {EmployeeSkillViewTable} = GlobalComponents;
    const {EmployeePerformanceViewTable} = GlobalComponents;
    const {EmployeeWorkExperienceViewTable} = GlobalComponents;
    const {EmployeeLeaveViewTable} = GlobalComponents;
    const {EmployeeInterviewViewTable} = GlobalComponents;
    const {EmployeeAttendanceViewTable} = GlobalComponents;
    const {EmployeeQualifierViewTable} = GlobalComponents;
    const {EmployeeEducationViewTable} = GlobalComponents;
    const {EmployeeAwardViewTable} = GlobalComponents;
    const {EmployeeSalarySheetViewTable} = GlobalComponents;
    const {PayingOffViewTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    
    const employee = this.props.employee
    const { id, employeeCompanyTrainingCount, employeeSkillCount, employeePerformanceCount, employeeWorkExperienceCount, employeeLeaveCount, employeeInterviewCount, employeeAttendanceCount, employeeQualifierCount, employeeEducationCount, employeeAwardCount, employeeSalarySheetCount, payingOffCount } = employee
    const { employeeCompanyTrainingList, employeeSkillList, employeePerformanceList, employeeWorkExperienceList, employeeLeaveList, employeeInterviewList, employeeAttendanceList, employeeQualifierList, employeeEducationList, employeeAwardList, employeeSalarySheetList, payingOffList } = employee
    
    const owner = { type: '_employee', id }
    
    const tabList = [

      {key: 'employeeCompanyTrainingList',tab: `员工参与的公司培训(${employeeCompanyTrainingCount})`}, 
      {key: 'employeeSkillList',tab: `员工技能(${employeeSkillCount})`}, 
      {key: 'employeePerformanceList',tab: `员工绩效(${employeePerformanceCount})`}, 
      {key: 'employeeWorkExperienceList',tab: `员工工作经验(${employeeWorkExperienceCount})`}, 
      {key: 'employeeLeaveList',tab: `请假记录(${employeeLeaveCount})`}, 
      {key: 'employeeInterviewList',tab: `员工面试(${employeeInterviewCount})`}, 
      {key: 'employeeAttendanceList',tab: `员工考勤(${employeeAttendanceCount})`}, 
      {key: 'employeeQualifierList',tab: `员工资质(${employeeQualifierCount})`}, 
      {key: 'employeeEducationList',tab: `员工教育(${employeeEducationCount})`}, 
      {key: 'employeeAwardList',tab: `员工嘉奖(${employeeAwardCount})`}, 
      {key: 'employeeSalarySheetList',tab: `工资单(${employeeSalarySheetCount})`}, 
      {key: 'payingOffList',tab: `工资支付(${payingOffCount})`}, 
   

   ];
   
   
    const contentList = {
       employeeCompanyTrainingList:  
        <EmployeeCompanyTrainingViewTable data={employeeCompanyTrainingList} owner={owner} {...this.props} />,
 
      employeeSkillList:  
        <EmployeeSkillViewTable data={employeeSkillList} owner={owner} {...this.props} />,
 
      employeePerformanceList:  
        <EmployeePerformanceViewTable data={employeePerformanceList} owner={owner} {...this.props} />,
 
      employeeWorkExperienceList:  
        <EmployeeWorkExperienceViewTable data={employeeWorkExperienceList} owner={owner} {...this.props} />,
 
      employeeLeaveList:  
        <EmployeeLeaveViewTable data={employeeLeaveList} owner={owner} {...this.props} />,
 
      employeeInterviewList:  
        <EmployeeInterviewViewTable data={employeeInterviewList} owner={owner} {...this.props} />,
 
      employeeAttendanceList:  
        <EmployeeAttendanceViewTable data={employeeAttendanceList} owner={owner} {...this.props} />,
 
      employeeQualifierList:  
        <EmployeeQualifierViewTable data={employeeQualifierList} owner={owner} {...this.props} />,
 
      employeeEducationList:  
        <EmployeeEducationViewTable data={employeeEducationList} owner={owner} {...this.props} />,
 
      employeeAwardList:  
        <EmployeeAwardViewTable data={employeeAwardList} owner={owner} {...this.props} />,
 
      employeeSalarySheetList:  
        <EmployeeSalarySheetViewTable data={employeeSalarySheetList} owner={owner} {...this.props} />,
 
      payingOffList:  
        <PayingOffViewTable data={payingOffList} owner={owner} {...this.props} />,
 
    
    };
    


    const actionDescForJobApplication = (employee) =>{
      if(!employee){
        return (<div>出错</div>)
      }
      const {jobApplication} = employee;
      if(!jobApplication){
        return (<div>催一下</div>)
      }
      
      return (

    
      <DescriptionList className={styles.headerList} size="small" col="1">
			<Description term="序号">{jobApplication.id}</Description> 
			<Description term="申请时间">{jobApplication.applicationTime}</Description> 
			<Description term="谁">{jobApplication.who}</Description> 
			<Description term="评论">{jobApplication.comments}</Description> 
			<Description term="版本">{jobApplication.version}</Description> 

       
		</DescriptionList>
      )
    }

    const actionDescForProfessionInterview = (employee) =>{
      if(!employee){
        return (<div>出错</div>)
      }
      const {professionInterview} = employee;
      if(!professionInterview){
        return (<div>催一下</div>)
      }
      
      return (

    
      <DescriptionList className={styles.headerList} size="small" col="1">
			<Description term="序号">{professionInterview.id}</Description> 
			<Description term="谁">{professionInterview.who}</Description> 
			<Description term="面试时间">{professionInterview.interviewTime}</Description> 
			<Description term="评论">{professionInterview.comments}</Description> 
			<Description term="版本">{professionInterview.version}</Description> 

       
		</DescriptionList>
      )
    }

    const actionDescForHrInterview = (employee) =>{
      if(!employee){
        return (<div>出错</div>)
      }
      const {hrInterview} = employee;
      if(!hrInterview){
        return (<div>催一下</div>)
      }
      
      return (

    
      <DescriptionList className={styles.headerList} size="small" col="1">
			<Description term="序号">{hrInterview.id}</Description> 
			<Description term="谁">{hrInterview.who}</Description> 
			<Description term="面试时间">{hrInterview.interviewTime}</Description> 
			<Description term="评论">{hrInterview.comments}</Description> 
			<Description term="版本">{hrInterview.version}</Description> 

       
		</DescriptionList>
      )
    }

    const actionDescForOfferApproval = (employee) =>{
      if(!employee){
        return (<div>出错</div>)
      }
      const {offerApproval} = employee;
      if(!offerApproval){
        return (<div>催一下</div>)
      }
      
      return (

    
      <DescriptionList className={styles.headerList} size="small" col="1">
			<Description term="序号">{offerApproval.id}</Description> 
			<Description term="谁">{offerApproval.who}</Description> 
			<Description term="批准时间">{offerApproval.approveTime}</Description> 
			<Description term="评论">{offerApproval.comments}</Description> 
			<Description term="版本">{offerApproval.version}</Description> 

       
		</DescriptionList>
      )
    }

    const actionDescForOfferAcceptance = (employee) =>{
      if(!employee){
        return (<div>出错</div>)
      }
      const {offerAcceptance} = employee;
      if(!offerAcceptance){
        return (<div>催一下</div>)
      }
      
      return (

    
      <DescriptionList className={styles.headerList} size="small" col="1">
			<Description term="序号">{offerAcceptance.id}</Description> 
			<Description term="谁">{offerAcceptance.who}</Description> 
			<Description term="接受时间">{offerAcceptance.acceptTime}</Description> 
			<Description term="评论">{offerAcceptance.comments}</Description> 
			<Description term="版本">{offerAcceptance.version}</Description> 

       
		</DescriptionList>
      )
    }

    const actionDescForEmployeeBoarding = (employee) =>{
      if(!employee){
        return (<div>出错</div>)
      }
      const {employeeBoarding} = employee;
      if(!employeeBoarding){
        return (<div>催一下</div>)
      }
      
      return (

    
      <DescriptionList className={styles.headerList} size="small" col="1">
			<Description term="序号">{employeeBoarding.id}</Description> 
			<Description term="谁">{employeeBoarding.who}</Description> 
			<Description term="使用时间">{employeeBoarding.employTime}</Description> 
			<Description term="评论">{employeeBoarding.comments}</Description> 
			<Description term="版本">{employeeBoarding.version}</Description> 

       
		</DescriptionList>
      )
    }

    const actionDescForTermination = (employee) =>{
      if(!employee){
        return (<div>出错</div>)
      }
      const {termination} = employee;
      if(!termination){
        return (<div>催一下</div>)
      }
      
      return (

    
      <DescriptionList className={styles.headerList} size="small" col="1">
			<Description term="序号">{termination.id}</Description> 
			<Description term="原因">{termination.reason}</Description> 
			<Description term="类型">{termination.type}</Description> 
			<Description term="评论">{termination.comment}</Description> 
			<Description term="版本">{termination.version}</Description> 

       
		</DescriptionList>
      )
    }

    
	const steps=(<Steps direction={'horizontal'} current={1}>
			<Step title="工作申请" description={actionDescForJobApplication(employee)} />
			<Step title="专业面试" description={actionDescForProfessionInterview(employee)} />
			<Step title="人力资源部面试" description={actionDescForHrInterview(employee)} />
			<Step title="审批工作要约" description={actionDescForOfferApproval(employee)} />
			<Step title="接受工作要约" description={actionDescForOfferAcceptance(employee)} />
			<Step title="员工入职" description={actionDescForEmployeeBoarding(employee)} />
			<Step title="雇佣终止" description={actionDescForTermination(employee)} />
		</Steps>)
    
    
    return (

      <PageHeaderLayout
        title="员工总览"
        content={summaryOf(this.props.employee)}
        wrapperClassName={styles.advancedForm}
      >
	<Card title="流程进度" style={{ marginBottom: 24 }} bordered={false}>{steps}
		</Card>

      
      
	<Card 
  		className={styles.card} 
  		bordered={false}
  		tabList={tabList}
  		onTabChange={this.onTabChange}>
            {contentList[this.state.tabKey]}
        </Card>

 
      </PageHeaderLayout>
    )
  }
}



