

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
import styles from './Book.viewdetail.less'
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

const summaryOf = (book) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{book.id}</Description> 
<Description term="书的名字">{book.bookName}</Description> 
<Description term="书的封面">{book.bookCover}</Description> 
<Description term="书的作者">{book.bookAuthor}</Description> 
<Description term="图书出版者">{book.bookPublisher}</Description> 
<Description term="书的作用">{ moment(book.bookPubdate).format('YYYY-MM-DD')}</Description> 
<Description term="列出的价格">{book.listPrice}</Description> 
<Description term="书Isbn13">{book.bookIsbn13}</Description> 
<Description term="书Isbn10">{book.bookIsbn10}</Description> 
	
        
      </DescriptionList>
	)

}

class BookViewDetail extends Component {


  state = {
    tabKey: `bookTagRecordList`,
    stepDirection: 'horizontal',
  }
 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
    const {BookTagRecordViewTable} = GlobalComponents;
    const {BookCopyViewTable} = GlobalComponents;
    const {BookCopySkuViewTable} = GlobalComponents;
    const {BorrowingHistoryViewTable} = GlobalComponents;
    const {BorrowingExpiredSkuViewTable} = GlobalComponents;
    const {BookReviewViewTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    
    const book = this.props.book
    const { id, bookTagRecordCount, bookCopyCount, bookCopySkuCount, borrowingHistoryCount, borrowingExpiredSkuCount, bookReviewCount } = book
    const { bookTagRecordList, bookCopyList, bookCopySkuList, borrowingHistoryList, borrowingExpiredSkuList, bookReviewList } = book
    
    const owner = { type: '_book', id }
    
    const tabList = [

      {key: 'bookTagRecordList',tab: `书标签记录(${bookTagRecordCount})`}, 
      {key: 'bookCopyList',tab: `书副本(${bookCopyCount})`}, 
      {key: 'bookCopySkuList',tab: `书副本Sku(${bookCopySkuCount})`}, 
      {key: 'borrowingHistoryList',tab: `借贷历史(${borrowingHistoryCount})`}, 
      {key: 'borrowingExpiredSkuList',tab: `借款到期Sku(${borrowingExpiredSkuCount})`}, 
      {key: 'bookReviewList',tab: `书评(${bookReviewCount})`}, 
   

   ];
   
   
    const contentList = {
       bookTagRecordList:  
        <BookTagRecordViewTable data={bookTagRecordList} owner={owner} {...this.props} />,
 
      bookCopyList:  
        <BookCopyViewTable data={bookCopyList} owner={owner} {...this.props} />,
 
      bookCopySkuList:  
        <BookCopySkuViewTable data={bookCopySkuList} owner={owner} {...this.props} />,
 
      borrowingHistoryList:  
        <BorrowingHistoryViewTable data={borrowingHistoryList} owner={owner} {...this.props} />,
 
      borrowingExpiredSkuList:  
        <BorrowingExpiredSkuViewTable data={borrowingExpiredSkuList} owner={owner} {...this.props} />,
 
      bookReviewList:  
        <BookReviewViewTable data={bookReviewList} owner={owner} {...this.props} />,
 
    
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="书总览"
        content={summaryOf(this.props.book)}
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
  book: state._book,
}))(BookViewDetail)

