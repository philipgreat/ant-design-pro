

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
import styles from './AccountManagement.viewdetail.less'
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

const summaryOf = (accountManagement) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{accountManagement.id}</Description> 
<Description term="总结">{accountManagement.summary}</Description> 
	
        
      </DescriptionList>
	)

}

class AccountManagementViewDetail extends Component {


  state = {
    tabKey: `memberAccountRechargeProductList`,
    stepDirection: 'horizontal',
  }
 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
    const {MemberAccountRechargeProductViewTable} = GlobalComponents;
    const {PlatformAccountViewTable} = GlobalComponents;
    const {FundationAccountViewTable} = GlobalComponents;
    const {StoreAccountViewTable} = GlobalComponents;
    const {CustomerAccountViewTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    
    const accountManagement = this.props.accountManagement
    const { id, memberAccountRechargeProductCount, platformAccountCount, fundationAccountCount, storeAccountCount, customerAccountCount } = accountManagement
    const { memberAccountRechargeProductList, platformAccountList, fundationAccountList, storeAccountList, customerAccountList } = accountManagement
    
    const owner = { type: '_accountManagement', id }
    
    const tabList = [

      {key: 'memberAccountRechargeProductList',tab: `会员帐户充电产品(${memberAccountRechargeProductCount})`}, 
      {key: 'platformAccountList',tab: `平台账户(${platformAccountCount})`}, 
      {key: 'fundationAccountList',tab: `基金账户(${fundationAccountCount})`}, 
      {key: 'storeAccountList',tab: `存储账户(${storeAccountCount})`}, 
      {key: 'customerAccountList',tab: `客户账户(${customerAccountCount})`}, 
   

   ];
   
   
    const contentList = {
       memberAccountRechargeProductList:  
        <MemberAccountRechargeProductViewTable data={memberAccountRechargeProductList} owner={owner} {...this.props} />,
 
      platformAccountList:  
        <PlatformAccountViewTable data={platformAccountList} owner={owner} {...this.props} />,
 
      fundationAccountList:  
        <FundationAccountViewTable data={fundationAccountList} owner={owner} {...this.props} />,
 
      storeAccountList:  
        <StoreAccountViewTable data={storeAccountList} owner={owner} {...this.props} />,
 
      customerAccountList:  
        <CustomerAccountViewTable data={customerAccountList} owner={owner} {...this.props} />,
 
    
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="账户管理总览"
        content={summaryOf(this.props.accountManagement)}
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
  accountManagement: state._accountManagement,
}))(AccountManagementViewDetail)

