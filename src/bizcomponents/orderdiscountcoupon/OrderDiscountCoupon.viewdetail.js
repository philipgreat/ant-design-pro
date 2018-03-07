

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
import styles from './OrderDiscountCoupon.viewdetail.less'
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

const summaryOf = (orderDiscountCoupon) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{orderDiscountCoupon.id}</Description> 
<Description term="优惠券名称">{orderDiscountCoupon.couponTitle}</Description> 
<Description term="优惠金额">{orderDiscountCoupon.discountAmount}</Description> 
<Description term="结束日期">{ moment(orderDiscountCoupon.endDate).format('YYYY-MM-DD')}</Description> 
<Description term="最后更新时间">{ moment(orderDiscountCoupon.lastUpdateTime).format('YYYY-MM-DD')}</Description> 
<Description term="优惠券状态">{orderDiscountCoupon.couponStatus}</Description> 
<Description term="优惠券分享随机码">{orderDiscountCoupon.shareCode}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  orderDiscountCoupon: state._orderDiscountCoupon,
}))
export default class OrderDiscountCouponViewDetail extends Component {

 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
  
    // eslint-disable-next-line max-len
    
    const orderDiscountCoupon = this.props.orderDiscountCoupon
    const { id,  } = orderDiscountCoupon
    const {  } = orderDiscountCoupon
    
    const owner = { type: '_orderDiscountCoupon', id }
    
    const tabList = [

   

   ];
   
   
    const contentList = {
     
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="优惠券总览"
        content={summaryOf(this.props.orderDiscountCoupon)}
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


