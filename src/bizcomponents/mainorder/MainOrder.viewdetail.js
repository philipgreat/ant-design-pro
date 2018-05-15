

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
import styles from './MainOrder.viewdetail.less'
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

const summaryOf = (mainOrder) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{mainOrder.id}</Description> 
<Description term="主要订单状态">{mainOrder.mainOrderStatus}</Description> 
	
        
      </DescriptionList>
	)

}

class MainOrderViewDetail extends Component {


  state = {
    tabKey: `lineItemList`,
    stepDirection: 'horizontal',
  }
 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
    const {LineItemViewTable} = GlobalComponents;
    const {MainOrderPaymentViewTable} = GlobalComponents;
    const {PlatformAccountDetailsViewTable} = GlobalComponents;
    const {FundationAccountDetailsViewTable} = GlobalComponents;
    const {StoreAccountDetailsViewTable} = GlobalComponents;
    const {CustomerAccountDetailsViewTable} = GlobalComponents;
    const {MemberCustomerViewTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    
    const mainOrder = this.props.mainOrder
    const { id, lineItemCount, mainOrderPaymentCount, platformAccountDetailsCount, fundationAccountDetailsCount, storeAccountDetailsCount, customerAccountDetailsCount, memberCustomerCount } = mainOrder
    const { lineItemList, mainOrderPaymentList, platformAccountDetailsList, fundationAccountDetailsList, storeAccountDetailsList, customerAccountDetailsList, memberCustomerList } = mainOrder
    
    const owner = { type: '_mainOrder', id }
    
    const tabList = [

      {key: 'lineItemList',tab: `行项目(${lineItemCount})`}, 
      {key: 'mainOrderPaymentList',tab: `主要订单付款(${mainOrderPaymentCount})`}, 
      {key: 'platformAccountDetailsList',tab: `平台账户信息(${platformAccountDetailsCount})`}, 
      {key: 'fundationAccountDetailsList',tab: `基金账户信息(${fundationAccountDetailsCount})`}, 
      {key: 'storeAccountDetailsList',tab: `存储帐户详细信息(${storeAccountDetailsCount})`}, 
      {key: 'customerAccountDetailsList',tab: `客户账户信息(${customerAccountDetailsCount})`}, 
      {key: 'memberCustomerList',tab: `会员的客户(${memberCustomerCount})`}, 
   

   ];
   
   
    const contentList = {
       lineItemList:  
        <LineItemViewTable data={lineItemList} owner={owner} {...this.props} />,
 
      mainOrderPaymentList:  
        <MainOrderPaymentViewTable data={mainOrderPaymentList} owner={owner} {...this.props} />,
 
      platformAccountDetailsList:  
        <PlatformAccountDetailsViewTable data={platformAccountDetailsList} owner={owner} {...this.props} />,
 
      fundationAccountDetailsList:  
        <FundationAccountDetailsViewTable data={fundationAccountDetailsList} owner={owner} {...this.props} />,
 
      storeAccountDetailsList:  
        <StoreAccountDetailsViewTable data={storeAccountDetailsList} owner={owner} {...this.props} />,
 
      customerAccountDetailsList:  
        <CustomerAccountDetailsViewTable data={customerAccountDetailsList} owner={owner} {...this.props} />,
 
      memberCustomerList:  
        <MemberCustomerViewTable data={memberCustomerList} owner={owner} {...this.props} />,
 
    
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="主订单总览"
        content={summaryOf(this.props.mainOrder)}
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
  mainOrder: state._mainOrder,
}))(MainOrderViewDetail)

