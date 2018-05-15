

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
import styles from './BorrowingHistory.viewdetail.less'
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

const summaryOf = (borrowingHistory) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{borrowingHistory.id}</Description> 
<Description term="借款人会员级别">{borrowingHistory.borrowerMemberLevel}</Description> 
<Description term="借方成员服务过期日期。">{ moment(borrowingHistory.borrowerMemberServiceExpiredDatetime).format('YYYY-MM-DD')}</Description> 
<Description term="书副本共享类型">{borrowingHistory.bookCopySharingType}</Description> 
<Description term="书的名字">{borrowingHistory.bookName}</Description> 
<Description term="贷款存储类型">{borrowingHistory.lendingStoreType}</Description> 
<Description term="贷款Datetime">{ moment(borrowingHistory.lendingDatetime).format('YYYY-MM-DD')}</Description> 
<Description term="自由借贷天">{borrowingHistory.freeLendingDays}</Description> 
<Description term="免费贷款到期日期时间">{ moment(borrowingHistory.freeLendingExpiredDatetime).format('YYYY-MM-DD')}</Description> 
<Description term="到期贷款利率">{borrowingHistory.expiredLendingRate}</Description> 
<Description term="到期贷款计算频率">{borrowingHistory.expiredLendingComputeFrequency}</Description> 
<Description term="返回日期时间">{ moment(borrowingHistory.returnDatetime).format('YYYY-MM-DD')}</Description> 
<Description term="贷款的日子">{borrowingHistory.lendingDays}</Description> 
<Description term="免费贷款到期">{borrowingHistory.freeLendingExpired?'是':'否'}</Description> 
	
        
      </DescriptionList>
	)

}

class BorrowingHistoryViewDetail extends Component {


  state = {
    tabKey: `borrowingExpiredSkuList`,
    stepDirection: 'horizontal',
  }
 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
    const {BorrowingExpiredSkuViewTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    
    const borrowingHistory = this.props.borrowingHistory
    const { id, borrowingExpiredSkuCount } = borrowingHistory
    const { borrowingExpiredSkuList } = borrowingHistory
    
    const owner = { type: '_borrowingHistory', id }
    
    const tabList = [

      {key: 'borrowingExpiredSkuList',tab: `借款到期Sku(${borrowingExpiredSkuCount})`}, 
   

   ];
   
   
    const contentList = {
       borrowingExpiredSkuList:  
        <BorrowingExpiredSkuViewTable data={borrowingExpiredSkuList} owner={owner} {...this.props} />,
 
    
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="借贷历史总览"
        content={summaryOf(this.props.borrowingHistory)}
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
  borrowingHistory: state._borrowingHistory,
}))(BorrowingHistoryViewDetail)

