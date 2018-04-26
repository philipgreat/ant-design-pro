

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
import styles from './SalaryGrade.viewdetail.less'
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

const summaryOf = (salaryGrade) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{salaryGrade.id}</Description> 
<Description term="代码">{salaryGrade.code}</Description> 
<Description term="名称">{salaryGrade.name}</Description> 
<Description term="详细描述">{salaryGrade.detailDescription}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  salaryGrade: state._salaryGrade,
}))
export default class SalaryGradeViewDetail extends Component {


  state = {
    tabKey: `employeeList`,
    stepDirection: 'horizontal',
  }
 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
    const {EmployeeViewTable} = GlobalComponents;
    const {EmployeeSalarySheetViewTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    
    const salaryGrade = this.props.salaryGrade
    const { id, employeeCount, employeeSalarySheetCount } = salaryGrade
    const { employeeList, employeeSalarySheetList } = salaryGrade
    
    const owner = { type: '_salaryGrade', id }
    
    const tabList = [

      {key: 'employeeList',tab: `员工(${employeeCount})`}, 
      {key: 'employeeSalarySheetList',tab: `工资单(${employeeSalarySheetCount})`}, 
   

   ];
   
   
    const contentList = {
       employeeList:  
        <EmployeeViewTable data={employeeList} owner={owner} {...this.props} />,
 
      employeeSalarySheetList:  
        <EmployeeSalarySheetViewTable data={employeeSalarySheetList} owner={owner} {...this.props} />,
 
    
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="工资等级总览"
        content={summaryOf(this.props.salaryGrade)}
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



