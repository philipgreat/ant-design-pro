

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
import styles from './BookReviewLike.viewdetail.less'
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

const summaryOf = (bookReviewLike) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{bookReviewLike.id}</Description> 
<Description term="如发布日期时间">{ moment(bookReviewLike.likePublishDatetime).format('YYYY-MM-DD')}</Description> 
<Description term="喜欢的类型">{bookReviewLike.likeType}</Description> 
<Description term="当前状态">{bookReviewLike.currentStatus}</Description> 
	
        
      </DescriptionList>
	)

}

class BookReviewLikeViewDetail extends Component {

 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
  
    // eslint-disable-next-line max-len
    
    const bookReviewLike = this.props.bookReviewLike
    const { id,  } = bookReviewLike
    const {  } = bookReviewLike
    
    const owner = { type: '_bookReviewLike', id }
    
    const tabList = [

   

   ];
   
   
    const contentList = {
     
    };
    


    const actionDescForBookReview = (bookReviewLike) =>{
      if(!bookReviewLike){
        return (<div>出错</div>)
      }
      const {bookReview} = bookReviewLike;
      if(!bookReview){
        return (<div>催一下</div>)
      }
      
      return (

    
      <DescriptionList className={styles.headerList} size="small" col="1">
			<Description term="ID">{bookReview.id}</Description> 
			<Description term="书的信息">{bookReview.bookInfo}</Description> 
			<Description term="书副本">{bookReview.bookCopy}</Description> 
			<Description term="书评类型">{bookReview.bookReviewType}</Description> 
			<Description term="评论家">{bookReview.reviewer}</Description> 
			<Description term="评论发布日期时间">{bookReview.reviewPublishDatetime}</Description> 
			<Description term="审查内容">{bookReview.reviewContent}</Description> 
			<Description term="回顾Image1">{bookReview.reviewImage1}</Description> 
			<Description term="回顾Image2">{bookReview.reviewImage2}</Description> 
			<Description term="回顾Image3">{bookReview.reviewImage3}</Description> 
			<Description term="回顾Image4">{bookReview.reviewImage4}</Description> 
			<Description term="回顾Image5">{bookReview.reviewImage5}</Description> 
			<Description term="版本">{bookReview.version}</Description> 

       
		</DescriptionList>
      )
    }

    
	const steps=(<Steps direction={'horizontal'} current={1}>
			<Step title="书评" description={actionDescForBookReview(bookReviewLike)} />
		</Steps>)
    
    
    return (

      <PageHeaderLayout
        title="这样的书评总览"
        content={summaryOf(this.props.bookReviewLike)}
        wrapperClassName={styles.advancedForm}
      >
	<Card title="流程进度" style={{ marginBottom: 24 }} bordered={false}>{steps}
		</Card>

      
      
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
  bookReviewLike: state._bookReviewLike,
}))(BookReviewLikeViewDetail)

