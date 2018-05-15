

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
import styles from './BookCopyCheckPlan.viewdetail.less'
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

const summaryOf = (bookCopyCheckPlan) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{bookCopyCheckPlan.id}</Description> 
<Description term="检查计划的名字">{bookCopyCheckPlan.checkPlanName}</Description> 
<Description term="计划日期时间">{ moment(bookCopyCheckPlan.planDatetime).format('YYYY-MM-DD')}</Description> 
<Description term="计划更新日期时间">{ moment(bookCopyCheckPlan.planUpdateDatetime).format('YYYY-MM-DD')}</Description> 
<Description term="检查计划状态">{bookCopyCheckPlan.checkPlanStatus}</Description> 
	
        
      </DescriptionList>
	)

}

class BookCopyCheckPlanViewDetail extends Component {


  state = {
    tabKey: `bookCopyCheckRecordList`,
    stepDirection: 'horizontal',
  }
 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
    const {BookCopyCheckRecordViewTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    
    const bookCopyCheckPlan = this.props.bookCopyCheckPlan
    const { id, bookCopyCheckRecordCount } = bookCopyCheckPlan
    const { bookCopyCheckRecordList } = bookCopyCheckPlan
    
    const owner = { type: '_bookCopyCheckPlan', id }
    
    const tabList = [

      {key: 'bookCopyCheckRecordList',tab: `书副本检查记录(${bookCopyCheckRecordCount})`}, 
   

   ];
   
   
    const contentList = {
       bookCopyCheckRecordList:  
        <BookCopyCheckRecordViewTable data={bookCopyCheckRecordList} owner={owner} {...this.props} />,
 
    
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="书副本检查计划总览"
        content={summaryOf(this.props.bookCopyCheckPlan)}
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
  bookCopyCheckPlan: state._bookCopyCheckPlan,
}))(BookCopyCheckPlanViewDetail)

