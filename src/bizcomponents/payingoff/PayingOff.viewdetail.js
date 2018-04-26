

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
import styles from './PayingOff.viewdetail.less'
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

const summaryOf = (payingOff) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{payingOff.id}</Description> 
<Description term="谁">{payingOff.who}</Description> 
<Description term="支付时间">{ moment(payingOff.paidTime).format('YYYY-MM-DD')}</Description> 
<Description term="金额">{payingOff.amount}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  payingOff: state._payingOff,
}))
export default class PayingOffViewDetail extends Component {


  state = {
    tabKey: `employeeSalarySheetList`,
    stepDirection: 'horizontal',
  }
 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
    const {EmployeeSalarySheetViewTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    
    const payingOff = this.props.payingOff
    const { id, employeeSalarySheetCount } = payingOff
    const { employeeSalarySheetList } = payingOff
    
    const owner = { type: '_payingOff', id }
    
    const tabList = [

      {key: 'employeeSalarySheetList',tab: `工资单(${employeeSalarySheetCount})`}, 
   

   ];
   
   
    const contentList = {
       employeeSalarySheetList:  
        <EmployeeSalarySheetViewTable data={employeeSalarySheetList} owner={owner} {...this.props} />,
 
    
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="工资支付总览"
        content={summaryOf(this.props.payingOff)}
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



