

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
import styles from './Customer.viewdetail.less'
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

const summaryOf = (customer) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{customer.id}</Description> 
<Description term="尼克的名字">{customer.nickName}</Description> 
<Description term="标志形象">{customer.logoImage}</Description> 
<Description term="Weixin Openid">{customer.weixinOpenid}</Description> 
<Description term="Weixin Appid">{customer.weixinAppid}</Description> 
<Description term="经度">{customer.longitude}</Description> 
<Description term="纬度">{customer.latitude}</Description> 
	
        
      </DescriptionList>
	)

}

class CustomerViewDetail extends Component {


  state = {
    tabKey: `bookCopyList`,
    stepDirection: 'horizontal',
  }
 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
    const {BookCopyViewTable} = GlobalComponents;
    const {BorrowingHistoryViewTable} = GlobalComponents;
    const {BorrowingExpiredSkuViewTable} = GlobalComponents;
    const {BookReviewViewTable} = GlobalComponents;
    const {BookReviewLikeViewTable} = GlobalComponents;
    const {BookCopySharingApplicationViewTable} = GlobalComponents;
    const {CustomerAccountViewTable} = GlobalComponents;
    const {WorkshopRegisterHistoryViewTable} = GlobalComponents;
    const {WorkshopReviewViewTable} = GlobalComponents;
    const {WorkshopLikeViewTable} = GlobalComponents;
    const {MemberCustomerViewTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    
    const customer = this.props.customer
    const { id, bookCopyCount, borrowingHistoryCount, borrowingExpiredSkuCount, bookReviewCount, bookReviewLikeCount, bookCopySharingApplicationCount, customerAccountCount, workshopRegisterHistoryCount, workshopReviewCount, workshopLikeCount, memberCustomerCount } = customer
    const { bookCopyList, borrowingHistoryList, borrowingExpiredSkuList, bookReviewList, bookReviewLikeList, bookCopySharingApplicationList, customerAccountList, workshopRegisterHistoryList, workshopReviewList, workshopLikeList, memberCustomerList } = customer
    
    const owner = { type: '_customer', id }
    
    const tabList = [

      {key: 'bookCopyList',tab: `书副本(${bookCopyCount})`}, 
      {key: 'borrowingHistoryList',tab: `借贷历史(${borrowingHistoryCount})`}, 
      {key: 'borrowingExpiredSkuList',tab: `借款到期Sku(${borrowingExpiredSkuCount})`}, 
      {key: 'bookReviewList',tab: `书评(${bookReviewCount})`}, 
      {key: 'bookReviewLikeList',tab: `这样的书评(${bookReviewLikeCount})`}, 
      {key: 'bookCopySharingApplicationList',tab: `书副本共享应用程序(${bookCopySharingApplicationCount})`}, 
      {key: 'customerAccountList',tab: `客户账户(${customerAccountCount})`}, 
      {key: 'workshopRegisterHistoryList',tab: `车间登记历史(${workshopRegisterHistoryCount})`}, 
      {key: 'workshopReviewList',tab: `车间检查(${workshopReviewCount})`}, 
      {key: 'workshopLikeList',tab: `车间等(${workshopLikeCount})`}, 
      {key: 'memberCustomerList',tab: `会员的客户(${memberCustomerCount})`}, 
   

   ];
   
   
    const contentList = {
       bookCopyList:  
        <BookCopyViewTable data={bookCopyList} owner={owner} {...this.props} />,
 
      borrowingHistoryList:  
        <BorrowingHistoryViewTable data={borrowingHistoryList} owner={owner} {...this.props} />,
 
      borrowingExpiredSkuList:  
        <BorrowingExpiredSkuViewTable data={borrowingExpiredSkuList} owner={owner} {...this.props} />,
 
      bookReviewList:  
        <BookReviewViewTable data={bookReviewList} owner={owner} {...this.props} />,
 
      bookReviewLikeList:  
        <BookReviewLikeViewTable data={bookReviewLikeList} owner={owner} {...this.props} />,
 
      bookCopySharingApplicationList:  
        <BookCopySharingApplicationViewTable data={bookCopySharingApplicationList} owner={owner} {...this.props} />,
 
      customerAccountList:  
        <CustomerAccountViewTable data={customerAccountList} owner={owner} {...this.props} />,
 
      workshopRegisterHistoryList:  
        <WorkshopRegisterHistoryViewTable data={workshopRegisterHistoryList} owner={owner} {...this.props} />,
 
      workshopReviewList:  
        <WorkshopReviewViewTable data={workshopReviewList} owner={owner} {...this.props} />,
 
      workshopLikeList:  
        <WorkshopLikeViewTable data={workshopLikeList} owner={owner} {...this.props} />,
 
      memberCustomerList:  
        <MemberCustomerViewTable data={memberCustomerList} owner={owner} {...this.props} />,
 
    
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="客户总览"
        content={summaryOf(this.props.customer)}
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
  customer: state._customer,
}))(CustomerViewDetail)

