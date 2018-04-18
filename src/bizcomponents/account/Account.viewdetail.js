

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
import styles from './Account.viewdetail.less'
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

const summaryOf = (account) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{account.id}</Description> 
<Description term="描述">{account.description}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  account: state._account,
}))
export default class AccountViewDetail extends Component {


  state = {
    tabKey: `serviceCompanyAccountList`,
    stepDirection: 'horizontal',
  }
 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
    const {ServiceCompanyAccountViewTable} = GlobalComponents;
    const {RepairingCompanyAccountViewTable} = GlobalComponents;
    const {InsuranceServiceAccountViewTable} = GlobalComponents;
    const {MainOrderAccountViewTable} = GlobalComponents;
    const {InspectionStationAccountViewTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    
    const account = this.props.account
    const { id, serviceCompanyAccountCount, repairingCompanyAccountCount, insuranceServiceAccountCount, mainOrderAccountCount, inspectionStationAccountCount } = account
    const { serviceCompanyAccountList, repairingCompanyAccountList, insuranceServiceAccountList, mainOrderAccountList, inspectionStationAccountList } = account
    
    const owner = { type: '_account', id }
    
    const tabList = [

      {key: 'serviceCompanyAccountList',tab: `服务商户对账单(${serviceCompanyAccountCount})`}, 
      {key: 'repairingCompanyAccountList',tab: `修理厂对账单(${repairingCompanyAccountCount})`}, 
      {key: 'insuranceServiceAccountList',tab: `保险服务对账单(${insuranceServiceAccountCount})`}, 
      {key: 'mainOrderAccountList',tab: `年检订单对账单(${mainOrderAccountCount})`}, 
      {key: 'inspectionStationAccountList',tab: `检测站对账单(${inspectionStationAccountCount})`}, 
   

   ];
   
   
    const contentList = {
       serviceCompanyAccountList:  
        <ServiceCompanyAccountViewTable data={serviceCompanyAccountList} owner={owner} {...this.props} />,
 
      repairingCompanyAccountList:  
        <RepairingCompanyAccountViewTable data={repairingCompanyAccountList} owner={owner} {...this.props} />,
 
      insuranceServiceAccountList:  
        <InsuranceServiceAccountViewTable data={insuranceServiceAccountList} owner={owner} {...this.props} />,
 
      mainOrderAccountList:  
        <MainOrderAccountViewTable data={mainOrderAccountList} owner={owner} {...this.props} />,
 
      inspectionStationAccountList:  
        <InspectionStationAccountViewTable data={inspectionStationAccountList} owner={owner} {...this.props} />,
 
    
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="对账单总览"
        content={summaryOf(this.props.account)}
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



