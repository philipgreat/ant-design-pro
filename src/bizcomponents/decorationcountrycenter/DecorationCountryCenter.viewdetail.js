

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
import styles from './DecorationCountryCenter.viewdetail.less'
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

const summaryOf = (decorationCountryCenter) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{decorationCountryCenter.id}</Description> 
<Description term="名称">{decorationCountryCenter.name}</Description> 
<Description term="联系电话">{decorationCountryCenter.contactNumber}</Description> 
<Description term="成立">{ moment(decorationCountryCenter.founded).format('YYYY-MM-DD')}</Description> 
<Description term="网站">{decorationCountryCenter.webSite}</Description> 
<Description term="地址">{decorationCountryCenter.address}</Description> 
<Description term="描述">{decorationCountryCenter.description}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  decorationCountryCenter: state._decorationCountryCenter,
}))
export default class DecorationCountryCenterViewDetail extends Component {


  state = {
    tabKey: `levelOneDepartmentList`,
    stepDirection: 'horizontal',
  }
 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
    const {LevelOneDepartmentViewTable} = GlobalComponents;
    const {SkillTypeViewTable} = GlobalComponents;
    const {ResponsibilityTypeViewTable} = GlobalComponents;
    const {TerminationReasonViewTable} = GlobalComponents;
    const {TerminationTypeViewTable} = GlobalComponents;
    const {OccupationTypeViewTable} = GlobalComponents;
    const {LeaveTypeViewTable} = GlobalComponents;
    const {SalaryGradeViewTable} = GlobalComponents;
    const {InterviewTypeViewTable} = GlobalComponents;
    const {TrainingCourseTypeViewTable} = GlobalComponents;
    const {PublicHolidayViewTable} = GlobalComponents;
    const {EmployeeViewTable} = GlobalComponents;
    const {InstructorViewTable} = GlobalComponents;
    const {CompanyTrainingViewTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    
    const decorationCountryCenter = this.props.decorationCountryCenter
    const { id, levelOneDepartmentCount, skillTypeCount, responsibilityTypeCount, terminationReasonCount, terminationTypeCount, occupationTypeCount, leaveTypeCount, salaryGradeCount, interviewTypeCount, trainingCourseTypeCount, publicHolidayCount, employeeCount, instructorCount, companyTrainingCount } = decorationCountryCenter
    const { levelOneDepartmentList, skillTypeList, responsibilityTypeList, terminationReasonList, terminationTypeList, occupationTypeList, leaveTypeList, salaryGradeList, interviewTypeList, trainingCourseTypeList, publicHolidayList, employeeList, instructorList, companyTrainingList } = decorationCountryCenter
    
    const owner = { type: '_decorationCountryCenter', id }
    
    const tabList = [

      {key: 'levelOneDepartmentList',tab: `一级部门(${levelOneDepartmentCount})`}, 
      {key: 'skillTypeList',tab: `技能类型(${skillTypeCount})`}, 
      {key: 'responsibilityTypeList',tab: `责任类型(${responsibilityTypeCount})`}, 
      {key: 'terminationReasonList',tab: `雇佣终止的原因(${terminationReasonCount})`}, 
      {key: 'terminationTypeList',tab: `雇佣终止类型(${terminationTypeCount})`}, 
      {key: 'occupationTypeList',tab: `职位类型(${occupationTypeCount})`}, 
      {key: 'leaveTypeList',tab: `请假类型(${leaveTypeCount})`}, 
      {key: 'salaryGradeList',tab: `工资等级(${salaryGradeCount})`}, 
      {key: 'interviewTypeList',tab: `面试类型(${interviewTypeCount})`}, 
      {key: 'trainingCourseTypeList',tab: `培训课程类型(${trainingCourseTypeCount})`}, 
      {key: 'publicHolidayList',tab: `公共假日(${publicHolidayCount})`}, 
      {key: 'employeeList',tab: `员工(${employeeCount})`}, 
      {key: 'instructorList',tab: `讲师(${instructorCount})`}, 
      {key: 'companyTrainingList',tab: `公司培训(${companyTrainingCount})`}, 
   

   ];
   
   
    const contentList = {
       levelOneDepartmentList:  
        <LevelOneDepartmentViewTable data={levelOneDepartmentList} owner={owner} {...this.props} />,
 
      skillTypeList:  
        <SkillTypeViewTable data={skillTypeList} owner={owner} {...this.props} />,
 
      responsibilityTypeList:  
        <ResponsibilityTypeViewTable data={responsibilityTypeList} owner={owner} {...this.props} />,
 
      terminationReasonList:  
        <TerminationReasonViewTable data={terminationReasonList} owner={owner} {...this.props} />,
 
      terminationTypeList:  
        <TerminationTypeViewTable data={terminationTypeList} owner={owner} {...this.props} />,
 
      occupationTypeList:  
        <OccupationTypeViewTable data={occupationTypeList} owner={owner} {...this.props} />,
 
      leaveTypeList:  
        <LeaveTypeViewTable data={leaveTypeList} owner={owner} {...this.props} />,
 
      salaryGradeList:  
        <SalaryGradeViewTable data={salaryGradeList} owner={owner} {...this.props} />,
 
      interviewTypeList:  
        <InterviewTypeViewTable data={interviewTypeList} owner={owner} {...this.props} />,
 
      trainingCourseTypeList:  
        <TrainingCourseTypeViewTable data={trainingCourseTypeList} owner={owner} {...this.props} />,
 
      publicHolidayList:  
        <PublicHolidayViewTable data={publicHolidayList} owner={owner} {...this.props} />,
 
      employeeList:  
        <EmployeeViewTable data={employeeList} owner={owner} {...this.props} />,
 
      instructorList:  
        <InstructorViewTable data={instructorList} owner={owner} {...this.props} />,
 
      companyTrainingList:  
        <CompanyTrainingViewTable data={companyTrainingList} owner={owner} {...this.props} />,
 
    
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="全国中心总览"
        content={summaryOf(this.props.decorationCountryCenter)}
        wrapperClassName={styles.advancedForm}
      >

      
      
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



