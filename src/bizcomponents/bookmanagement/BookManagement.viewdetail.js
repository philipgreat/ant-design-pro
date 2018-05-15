

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
import styles from './BookManagement.viewdetail.less'
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

const summaryOf = (bookManagement) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{bookManagement.id}</Description> 
<Description term="书管理的名字">{bookManagement.bookManagementName}</Description> 
	
        
      </DescriptionList>
	)

}

class BookManagementViewDetail extends Component {


  state = {
    tabKey: `bookTagRecordList`,
    stepDirection: 'horizontal',
  }
 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
    const {BookTagRecordViewTable} = GlobalComponents;
    const {BookCopySharingBenefitConfigurationViewTable} = GlobalComponents;
    const {BookCopyDonateBenefitConfigurationViewTable} = GlobalComponents;
    const {BookBorrowConfigurationViewTable} = GlobalComponents;
    const {BookViewTable} = GlobalComponents;
    const {BookCopyStatusViewTable} = GlobalComponents;
    const {BookCopySkuViewTable} = GlobalComponents;
    const {BookCopyCheckPlanViewTable} = GlobalComponents;
    const {BookCopyCheckStatusViewTable} = GlobalComponents;
    const {BookReviewTypeViewTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    
    const bookManagement = this.props.bookManagement
    const { id, bookTagRecordCount, bookCopySharingBenefitConfigurationCount, bookCopyDonateBenefitConfigurationCount, bookBorrowConfigurationCount, bookCount, bookCopyStatusCount, bookCopySkuCount, bookCopyCheckPlanCount, bookCopyCheckStatusCount, bookReviewTypeCount } = bookManagement
    const { bookTagRecordList, bookCopySharingBenefitConfigurationList, bookCopyDonateBenefitConfigurationList, bookBorrowConfigurationList, bookList, bookCopyStatusList, bookCopySkuList, bookCopyCheckPlanList, bookCopyCheckStatusList, bookReviewTypeList } = bookManagement
    
    const owner = { type: '_bookManagement', id }
    
    const tabList = [

      {key: 'bookTagRecordList',tab: `书标签记录(${bookTagRecordCount})`}, 
      {key: 'bookCopySharingBenefitConfigurationList',tab: `图书拷贝共享利益配置。(${bookCopySharingBenefitConfigurationCount})`}, 
      {key: 'bookCopyDonateBenefitConfigurationList',tab: `图书拷贝捐赠利益配置。(${bookCopyDonateBenefitConfigurationCount})`}, 
      {key: 'bookBorrowConfigurationList',tab: `书借配置(${bookBorrowConfigurationCount})`}, 
      {key: 'bookList',tab: `书(${bookCount})`}, 
      {key: 'bookCopyStatusList',tab: `书副本地位(${bookCopyStatusCount})`}, 
      {key: 'bookCopySkuList',tab: `书副本Sku(${bookCopySkuCount})`}, 
      {key: 'bookCopyCheckPlanList',tab: `书副本检查计划(${bookCopyCheckPlanCount})`}, 
      {key: 'bookCopyCheckStatusList',tab: `书副本检查状态(${bookCopyCheckStatusCount})`}, 
      {key: 'bookReviewTypeList',tab: `书评类型(${bookReviewTypeCount})`}, 
   

   ];
   
   
    const contentList = {
       bookTagRecordList:  
        <BookTagRecordViewTable data={bookTagRecordList} owner={owner} {...this.props} />,
 
      bookCopySharingBenefitConfigurationList:  
        <BookCopySharingBenefitConfigurationViewTable data={bookCopySharingBenefitConfigurationList} owner={owner} {...this.props} />,
 
      bookCopyDonateBenefitConfigurationList:  
        <BookCopyDonateBenefitConfigurationViewTable data={bookCopyDonateBenefitConfigurationList} owner={owner} {...this.props} />,
 
      bookBorrowConfigurationList:  
        <BookBorrowConfigurationViewTable data={bookBorrowConfigurationList} owner={owner} {...this.props} />,
 
      bookList:  
        <BookViewTable data={bookList} owner={owner} {...this.props} />,
 
      bookCopyStatusList:  
        <BookCopyStatusViewTable data={bookCopyStatusList} owner={owner} {...this.props} />,
 
      bookCopySkuList:  
        <BookCopySkuViewTable data={bookCopySkuList} owner={owner} {...this.props} />,
 
      bookCopyCheckPlanList:  
        <BookCopyCheckPlanViewTable data={bookCopyCheckPlanList} owner={owner} {...this.props} />,
 
      bookCopyCheckStatusList:  
        <BookCopyCheckStatusViewTable data={bookCopyCheckStatusList} owner={owner} {...this.props} />,
 
      bookReviewTypeList:  
        <BookReviewTypeViewTable data={bookReviewTypeList} owner={owner} {...this.props} />,
 
    
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="图书管理总览"
        content={summaryOf(this.props.bookManagement)}
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
  bookManagement: state._bookManagement,
}))(BookManagementViewDetail)

