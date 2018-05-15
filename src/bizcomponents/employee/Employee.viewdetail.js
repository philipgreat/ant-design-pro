

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
<Description term="ID">{employee.id}</Description> 
<Description term="名称">{employee.name}</Description> 
<Description term="员工形象">{employee.employeeImage}</Description> 
<Description term="手机号码">{employee.mobileNumber}</Description> 
	
        
      </DescriptionList>
	)

}

class EmployeeViewDetail extends Component {


  state = {
    tabKey: `bookCopyCheckPlanList`,
    stepDirection: 'horizontal',
  }
 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
    const {BookCopyCheckPlanViewTable} = GlobalComponents;
    const {BookCopyCheckRecordViewTable} = GlobalComponents;
    const {BookCopyOperationRecordViewTable} = GlobalComponents;
    const {BookCopySharingApplicationViewTable} = GlobalComponents;
    const {WorkshopViewTable} = GlobalComponents;
    const {EmployeeWorkingStoreViewTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    
    const employee = this.props.employee
    const { id, bookCopyCheckPlanCount, bookCopyCheckRecordCount, bookCopyOperationRecordCount, bookCopySharingApplicationCount, workshopCount, employeeWorkingStoreCount } = employee
    const { bookCopyCheckPlanList, bookCopyCheckRecordList, bookCopyOperationRecordList, bookCopySharingApplicationList, workshopList, employeeWorkingStoreList } = employee
    
    const owner = { type: '_employee', id }
    
    const tabList = [

      {key: 'bookCopyCheckPlanList',tab: `书副本检查计划(${bookCopyCheckPlanCount})`}, 
      {key: 'bookCopyCheckRecordList',tab: `书副本检查记录(${bookCopyCheckRecordCount})`}, 
      {key: 'bookCopyOperationRecordList',tab: `书复制操作记录(${bookCopyOperationRecordCount})`}, 
      {key: 'bookCopySharingApplicationList',tab: `书副本共享应用程序(${bookCopySharingApplicationCount})`}, 
      {key: 'workshopList',tab: `车间(${workshopCount})`}, 
      {key: 'employeeWorkingStoreList',tab: `员工工作的商店(${employeeWorkingStoreCount})`}, 
   

   ];
   
   
    const contentList = {
       bookCopyCheckPlanList:  
        <BookCopyCheckPlanViewTable data={bookCopyCheckPlanList} owner={owner} {...this.props} />,
 
      bookCopyCheckRecordList:  
        <BookCopyCheckRecordViewTable data={bookCopyCheckRecordList} owner={owner} {...this.props} />,
 
      bookCopyOperationRecordList:  
        <BookCopyOperationRecordViewTable data={bookCopyOperationRecordList} owner={owner} {...this.props} />,
 
      bookCopySharingApplicationList:  
        <BookCopySharingApplicationViewTable data={bookCopySharingApplicationList} owner={owner} {...this.props} />,
 
      workshopList:  
        <WorkshopViewTable data={workshopList} owner={owner} {...this.props} />,
 
      employeeWorkingStoreList:  
        <EmployeeWorkingStoreViewTable data={employeeWorkingStoreList} owner={owner} {...this.props} />,
 
    
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="员工总览"
        content={summaryOf(this.props.employee)}
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

export default connect(state => ({
  employee: state._employee,
}))(EmployeeViewDetail)

