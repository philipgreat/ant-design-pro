

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
import styles from './InsuranceServiceAccount.viewdetail.less'
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

const summaryOf = (insuranceServiceAccount) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{insuranceServiceAccount.id}</Description> 
<Description term="车牌号码">{insuranceServiceAccount.vehicleLicensePlateNumber}</Description> 
<Description term="保险服务单号">{insuranceServiceAccount.insuranceOrderNumber}</Description> 
<Description term="员工姓名">{insuranceServiceAccount.employeeName}</Description> 
<Description term="保险名称">{insuranceServiceAccount.insuranceName}</Description> 
<Description term="承保方">{insuranceServiceAccount.insuranceVendor}</Description> 
<Description term="保费">{insuranceServiceAccount.insurancePrice}</Description> 
<Description term="保单号码">{insuranceServiceAccount.insuranceNumber}</Description> 
<Description term="保险购买日期">{ moment(insuranceServiceAccount.insuranceOrderDatetime).format('YYYY-MM-DD')}</Description> 
<Description term="年检订单ID">{insuranceServiceAccount.mainOrderId}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  insuranceServiceAccount: state._insuranceServiceAccount,
}))
export default class InsuranceServiceAccountViewDetail extends Component {

 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
  
    // eslint-disable-next-line max-len
    
    const insuranceServiceAccount = this.props.insuranceServiceAccount
    const { id,  } = insuranceServiceAccount
    const {  } = insuranceServiceAccount
    
    const owner = { type: '_insuranceServiceAccount', id }
    
    const tabList = [

   

   ];
   
   
    const contentList = {
     
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="保险服务对账单总览"
        content={summaryOf(this.props.insuranceServiceAccount)}
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


