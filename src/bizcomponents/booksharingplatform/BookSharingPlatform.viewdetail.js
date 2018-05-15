

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
import styles from './BookSharingPlatform.viewdetail.less'
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

const summaryOf = (bookSharingPlatform) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{bookSharingPlatform.id}</Description> 
<Description term="名称">{bookSharingPlatform.name}</Description> 
<Description term="显示名称">{bookSharingPlatform.displayName}</Description> 
<Description term="描述">{bookSharingPlatform.description}</Description> 
<Description term="desc">{bookSharingPlatform.desc}</Description> 
	
        
      </DescriptionList>
	)

}

class BookSharingPlatformViewDetail extends Component {


  state = {
    tabKey: `accountManagementList`,
    stepDirection: 'horizontal',
  }
 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
    const {AccountManagementViewTable} = GlobalComponents;
    const {ProvinceViewTable} = GlobalComponents;
    const {BookManagementViewTable} = GlobalComponents;
    const {MemberServiceManagementViewTable} = GlobalComponents;
    const {MainOrderViewTable} = GlobalComponents;
    const {BookViewTable} = GlobalComponents;
    const {PlatformAccountViewTable} = GlobalComponents;
    const {FundationAccountViewTable} = GlobalComponents;
    const {StoreViewTable} = GlobalComponents;
    const {CustomerViewTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    
    const bookSharingPlatform = this.props.bookSharingPlatform
    const { id, accountManagementCount, provinceCount, bookManagementCount, memberServiceManagementCount, mainOrderCount, bookCount, platformAccountCount, fundationAccountCount, storeCount, customerCount } = bookSharingPlatform
    const { accountManagementList, provinceList, bookManagementList, memberServiceManagementList, mainOrderList, bookList, platformAccountList, fundationAccountList, storeList, customerList } = bookSharingPlatform
    
    const owner = { type: '_bookSharingPlatform', id }
    
    const tabList = [

      {key: 'accountManagementList',tab: `账户管理(${accountManagementCount})`}, 
      {key: 'provinceList',tab: `省(${provinceCount})`}, 
      {key: 'bookManagementList',tab: `图书管理(${bookManagementCount})`}, 
      {key: 'memberServiceManagementList',tab: `会员服务管理(${memberServiceManagementCount})`}, 
      {key: 'mainOrderList',tab: `主订单(${mainOrderCount})`}, 
      {key: 'bookList',tab: `书(${bookCount})`}, 
      {key: 'platformAccountList',tab: `平台账户(${platformAccountCount})`}, 
      {key: 'fundationAccountList',tab: `基金账户(${fundationAccountCount})`}, 
      {key: 'storeList',tab: `商店(${storeCount})`}, 
      {key: 'customerList',tab: `客户(${customerCount})`}, 
   

   ];
   
   
    const contentList = {
       accountManagementList:  
        <AccountManagementViewTable data={accountManagementList} owner={owner} {...this.props} />,
 
      provinceList:  
        <ProvinceViewTable data={provinceList} owner={owner} {...this.props} />,
 
      bookManagementList:  
        <BookManagementViewTable data={bookManagementList} owner={owner} {...this.props} />,
 
      memberServiceManagementList:  
        <MemberServiceManagementViewTable data={memberServiceManagementList} owner={owner} {...this.props} />,
 
      mainOrderList:  
        <MainOrderViewTable data={mainOrderList} owner={owner} {...this.props} />,
 
      bookList:  
        <BookViewTable data={bookList} owner={owner} {...this.props} />,
 
      platformAccountList:  
        <PlatformAccountViewTable data={platformAccountList} owner={owner} {...this.props} />,
 
      fundationAccountList:  
        <FundationAccountViewTable data={fundationAccountList} owner={owner} {...this.props} />,
 
      storeList:  
        <StoreViewTable data={storeList} owner={owner} {...this.props} />,
 
      customerList:  
        <CustomerViewTable data={customerList} owner={owner} {...this.props} />,
 
    
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="书共享平台总览"
        content={summaryOf(this.props.bookSharingPlatform)}
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
  bookSharingPlatform: state._bookSharingPlatform,
}))(BookSharingPlatformViewDetail)

