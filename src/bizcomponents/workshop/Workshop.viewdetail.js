

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
import styles from './Workshop.viewdetail.less'
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

const summaryOf = (workshop) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{workshop.id}</Description> 
<Description term="工厂的名字">{workshop.workshopName}</Description> 
<Description term="研讨会内容">{workshop.workshopContent}</Description> 
<Description term="车间图片">{workshop.workshopImage}</Description> 
<Description term="车间的地位">{workshop.workshopStatus}</Description> 
<Description term="车间活动日期时间">{ moment(workshop.workshopEventDatetime).format('YYYY-MM-DD')}</Description> 
<Description term="可用的寄存器Datetime">{ moment(workshop.availableRegisterDatetime).format('YYYY-MM-DD')}</Description> 
<Description term="可用的寄存器数量">{workshop.availableRegisterQuantity}</Description> 
<Description term="发布日期时间">{ moment(workshop.publishDatetime).format('YYYY-MM-DD')}</Description> 
	
        
      </DescriptionList>
	)

}

class WorkshopViewDetail extends Component {


  state = {
    tabKey: `workshopRegisterHistoryList`,
    stepDirection: 'horizontal',
  }
 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
    const {WorkshopRegisterHistoryViewTable} = GlobalComponents;
    const {WorkshopReviewViewTable} = GlobalComponents;
    const {WorkshopLikeViewTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    
    const workshop = this.props.workshop
    const { id, workshopRegisterHistoryCount, workshopReviewCount, workshopLikeCount } = workshop
    const { workshopRegisterHistoryList, workshopReviewList, workshopLikeList } = workshop
    
    const owner = { type: '_workshop', id }
    
    const tabList = [

      {key: 'workshopRegisterHistoryList',tab: `车间登记历史(${workshopRegisterHistoryCount})`}, 
      {key: 'workshopReviewList',tab: `车间检查(${workshopReviewCount})`}, 
      {key: 'workshopLikeList',tab: `车间等(${workshopLikeCount})`}, 
   

   ];
   
   
    const contentList = {
       workshopRegisterHistoryList:  
        <WorkshopRegisterHistoryViewTable data={workshopRegisterHistoryList} owner={owner} {...this.props} />,
 
      workshopReviewList:  
        <WorkshopReviewViewTable data={workshopReviewList} owner={owner} {...this.props} />,
 
      workshopLikeList:  
        <WorkshopLikeViewTable data={workshopLikeList} owner={owner} {...this.props} />,
 
    
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="车间总览"
        content={summaryOf(this.props.workshop)}
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
  workshop: state._workshop,
}))(WorkshopViewDetail)

