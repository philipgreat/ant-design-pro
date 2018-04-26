

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
import styles from './EmployeeSalarySheet.viewdetail.less'
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

const summaryOf = (employeeSalarySheet) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{employeeSalarySheet.id}</Description> 
<Description term="基本工资">{employeeSalarySheet.baseSalary}</Description> 
<Description term="奖金">{employeeSalarySheet.bonus}</Description> 
<Description term="奖励">{employeeSalarySheet.reward}</Description> 
<Description term="个人所得税">{employeeSalarySheet.personalTax}</Description> 
<Description term="社会保险">{employeeSalarySheet.socialSecurity}</Description> 
<Description term="住房公积金">{employeeSalarySheet.housingFound}</Description> 
<Description term="失业保险">{employeeSalarySheet.jobInsurance}</Description> 
<Description term="当前状态">{employeeSalarySheet.currentStatus}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  employeeSalarySheet: state._employeeSalarySheet,
}))
export default class EmployeeSalarySheetViewDetail extends Component {

 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
  
    // eslint-disable-next-line max-len
    
    const employeeSalarySheet = this.props.employeeSalarySheet
    const { id,  } = employeeSalarySheet
    const {  } = employeeSalarySheet
    
    const owner = { type: '_employeeSalarySheet', id }
    
    const tabList = [

   

   ];
   
   
    const contentList = {
     
    };
    


    const actionDescForPayingOff = (employeeSalarySheet) =>{
      if(!employeeSalarySheet){
        return (<div>出错</div>)
      }
      const {payingOff} = employeeSalarySheet;
      if(!payingOff){
        return (<div>催一下</div>)
      }
      
      return (

    
      <DescriptionList className={styles.headerList} size="small" col="1">
			<Description term="序号">{payingOff.id}</Description> 
			<Description term="谁">{payingOff.who}</Description> 
			<Description term="支付">{payingOff.paidFor}</Description> 
			<Description term="支付时间">{payingOff.paidTime}</Description> 
			<Description term="金额">{payingOff.amount}</Description> 
			<Description term="版本">{payingOff.version}</Description> 

       
		</DescriptionList>
      )
    }

    
	const steps=(<Steps direction={'horizontal'} current={1}>
			<Step title="工资支付" description={actionDescForPayingOff(employeeSalarySheet)} />
		</Steps>)
    
    
    return (

      <PageHeaderLayout
        title="工资单总览"
        content={summaryOf(this.props.employeeSalarySheet)}
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



