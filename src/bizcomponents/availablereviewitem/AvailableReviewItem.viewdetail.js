

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
import styles from './AvailableReviewItem.viewdetail.less'
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

const summaryOf = (availableReviewItem) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{availableReviewItem.id}</Description> 
<Description term="评论内容">{availableReviewItem.reviewName}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  availableReviewItem: state._availableReviewItem,
}))
export default class AvailableReviewItemViewDetail extends Component {


  state = {
    tabKey: `orderReviewResultList`,
    stepDirection: 'horizontal',
  }
 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
    const {OrderReviewResultViewTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    
    const availableReviewItem = this.props.availableReviewItem
    const { id, orderReviewResultCount } = availableReviewItem
    const { orderReviewResultList } = availableReviewItem
    
    const owner = { type: '_availableReviewItem', id }
    
    const tabList = [

      {key: 'orderReviewResultList',tab: `订单评论结果(${orderReviewResultCount})`}, 
   

   ];
   
   
    const contentList = {
       orderReviewResultList:  
        <OrderReviewResultViewTable data={orderReviewResultList} owner={owner} {...this.props} />,
 
    
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="评论条目总览"
        content={summaryOf(this.props.availableReviewItem)}
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



