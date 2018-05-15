

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
import styles from './BookReview.viewdetail.less'
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

const summaryOf = (bookReview) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{bookReview.id}</Description> 
<Description term="评论发布日期时间">{ moment(bookReview.reviewPublishDatetime).format('YYYY-MM-DD')}</Description> 
<Description term="审查内容">{bookReview.reviewContent}</Description> 
<Description term="回顾Image1">{bookReview.reviewImage1}</Description> 
<Description term="回顾Image2">{bookReview.reviewImage2}</Description> 
<Description term="回顾Image3">{bookReview.reviewImage3}</Description> 
<Description term="回顾Image4">{bookReview.reviewImage4}</Description> 
<Description term="回顾Image5">{bookReview.reviewImage5}</Description> 
	
        
      </DescriptionList>
	)

}

class BookReviewViewDetail extends Component {


  state = {
    tabKey: `bookReviewLikeList`,
    stepDirection: 'horizontal',
  }
 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
    const {BookReviewLikeViewTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    
    const bookReview = this.props.bookReview
    const { id, bookReviewLikeCount } = bookReview
    const { bookReviewLikeList } = bookReview
    
    const owner = { type: '_bookReview', id }
    
    const tabList = [

      {key: 'bookReviewLikeList',tab: `这样的书评(${bookReviewLikeCount})`}, 
   

   ];
   
   
    const contentList = {
       bookReviewLikeList:  
        <BookReviewLikeViewTable data={bookReviewLikeList} owner={owner} {...this.props} />,
 
    
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="书评总览"
        content={summaryOf(this.props.bookReview)}
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
  bookReview: state._bookReview,
}))(BookReviewViewDetail)

