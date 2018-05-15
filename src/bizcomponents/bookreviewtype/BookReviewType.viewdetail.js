

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
import styles from './BookReviewType.viewdetail.less'
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

const summaryOf = (bookReviewType) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{bookReviewType.id}</Description> 
<Description term="书评类型名称">{bookReviewType.bookReviewTypeTitle}</Description> 
<Description term="书评类型描述">{bookReviewType.bookReviewTypeDescription}</Description> 
	
        
      </DescriptionList>
	)

}

class BookReviewTypeViewDetail extends Component {


  state = {
    tabKey: `bookReviewList`,
    stepDirection: 'horizontal',
  }
 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
    const {BookReviewViewTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    
    const bookReviewType = this.props.bookReviewType
    const { id, bookReviewCount } = bookReviewType
    const { bookReviewList } = bookReviewType
    
    const owner = { type: '_bookReviewType', id }
    
    const tabList = [

      {key: 'bookReviewList',tab: `书评(${bookReviewCount})`}, 
   

   ];
   
   
    const contentList = {
       bookReviewList:  
        <BookReviewViewTable data={bookReviewList} owner={owner} {...this.props} />,
 
    
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="书评类型总览"
        content={summaryOf(this.props.bookReviewType)}
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
  bookReviewType: state._bookReviewType,
}))(BookReviewTypeViewDetail)

