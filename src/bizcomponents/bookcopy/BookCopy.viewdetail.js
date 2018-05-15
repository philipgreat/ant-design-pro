

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
import styles from './BookCopy.viewdetail.less'
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

const summaryOf = (bookCopy) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{bookCopy.id}</Description> 
<Description term="Wxa Id">{bookCopy.wxaId}</Description> 
<Description term="书副本共享类型">{bookCopy.bookCopySharingType}</Description> 
<Description term="评估价格">{bookCopy.evaluationPrice}</Description> 
	
        
      </DescriptionList>
	)

}

class BookCopyViewDetail extends Component {


  state = {
    tabKey: `bookTagRecordList`,
    stepDirection: 'horizontal',
  }
 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
    const {BookTagRecordViewTable} = GlobalComponents;
    const {BookCopySkuViewTable} = GlobalComponents;
    const {BookCopyCheckRecordViewTable} = GlobalComponents;
    const {BookCopyOperationRecordViewTable} = GlobalComponents;
    const {BorrowingHistoryViewTable} = GlobalComponents;
    const {BorrowingExpiredSkuViewTable} = GlobalComponents;
    const {BookReviewViewTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    
    const bookCopy = this.props.bookCopy
    const { id, bookTagRecordCount, bookCopySkuCount, bookCopyCheckRecordCount, bookCopyOperationRecordCount, borrowingHistoryCount, borrowingExpiredSkuCount, bookReviewCount } = bookCopy
    const { bookTagRecordList, bookCopySkuList, bookCopyCheckRecordList, bookCopyOperationRecordList, borrowingHistoryList, borrowingExpiredSkuList, bookReviewList } = bookCopy
    
    const owner = { type: '_bookCopy', id }
    
    const tabList = [

      {key: 'bookTagRecordList',tab: `书标签记录(${bookTagRecordCount})`}, 
      {key: 'bookCopySkuList',tab: `书副本Sku(${bookCopySkuCount})`}, 
      {key: 'bookCopyCheckRecordList',tab: `书副本检查记录(${bookCopyCheckRecordCount})`}, 
      {key: 'bookCopyOperationRecordList',tab: `书复制操作记录(${bookCopyOperationRecordCount})`}, 
      {key: 'borrowingHistoryList',tab: `借贷历史(${borrowingHistoryCount})`}, 
      {key: 'borrowingExpiredSkuList',tab: `借款到期Sku(${borrowingExpiredSkuCount})`}, 
      {key: 'bookReviewList',tab: `书评(${bookReviewCount})`}, 
   

   ];
   
   
    const contentList = {
       bookTagRecordList:  
        <BookTagRecordViewTable data={bookTagRecordList} owner={owner} {...this.props} />,
 
      bookCopySkuList:  
        <BookCopySkuViewTable data={bookCopySkuList} owner={owner} {...this.props} />,
 
      bookCopyCheckRecordList:  
        <BookCopyCheckRecordViewTable data={bookCopyCheckRecordList} owner={owner} {...this.props} />,
 
      bookCopyOperationRecordList:  
        <BookCopyOperationRecordViewTable data={bookCopyOperationRecordList} owner={owner} {...this.props} />,
 
      borrowingHistoryList:  
        <BorrowingHistoryViewTable data={borrowingHistoryList} owner={owner} {...this.props} />,
 
      borrowingExpiredSkuList:  
        <BorrowingExpiredSkuViewTable data={borrowingExpiredSkuList} owner={owner} {...this.props} />,
 
      bookReviewList:  
        <BookReviewViewTable data={bookReviewList} owner={owner} {...this.props} />,
 
    
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="书副本总览"
        content={summaryOf(this.props.bookCopy)}
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
  bookCopy: state._bookCopy,
}))(BookCopyViewDetail)

