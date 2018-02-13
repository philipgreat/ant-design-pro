

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
import styles from './MainOrderAccount.viewdetail.less'
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

const summaryOf = (mainOrderAccount) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{mainOrderAccount.id}</Description> 
<Description term="车牌号码">{mainOrderAccount.vehicleLicensePlateNumber}</Description> 
<Description term="产品名称">{mainOrderAccount.productName}</Description> 
<Description term="检查价格">{mainOrderAccount.inspectionPrice}</Description> 
<Description term="代理服务价格">{mainOrderAccount.agentServicePrice}</Description> 
<Description term="城市">{mainOrderAccount.city}</Description> 
<Description term="车辆类型">{mainOrderAccount.vehicleType}</Description> 
<Description term="订单总金额">{mainOrderAccount.orderTotalAmount}</Description> 
<Description term="为了促销折扣">{mainOrderAccount.orderPromotionDiscount}</Description> 
<Description term="订单优惠折扣">{mainOrderAccount.orderCouponDiscount}</Description> 
<Description term="以保险金额">{mainOrderAccount.orderInsuranceAmount}</Description> 
<Description term="订单客户付款额">{mainOrderAccount.orderCustomerPaymentAmount}</Description> 
<Description term="订单服务数量">{mainOrderAccount.orderServiceAmount}</Description> 
<Description term="订单平台平衡">{mainOrderAccount.orderPlatformBalance}</Description> 
<Description term="下订单日期时间">{ moment(mainOrderAccount.orderPlacedDatetime).format('YYYY-MM-DD')}</Description> 
<Description term="订单付款日期时间">{ moment(mainOrderAccount.orderPaymentDatetime).format('YYYY-MM-DD')}</Description> 
<Description term="订单完成日期时间">{ moment(mainOrderAccount.orderFinishedDatetime).format('YYYY-MM-DD')}</Description> 
<Description term="主要订单Id">{mainOrderAccount.mainOrderId}</Description> 
<Description term="微信订单Id">{mainOrderAccount.wechatOrderId}</Description> 
<Description term="微信提前支付Id">{mainOrderAccount.wechatPrepayId}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  mainOrderAccount: state._mainOrderAccount,
}))
export default class MainOrderAccountViewDetail extends Component {

 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
  
    // eslint-disable-next-line max-len
    
    const mainOrderAccount = this.props.mainOrderAccount
    const { id,  } = mainOrderAccount
    const {  } = mainOrderAccount
    
    const owner = { type: '_mainOrderAccount', id }
    
    const tabList = [

   

   ];
   
   
    const contentList = {
     
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="主要以账户总览"
        content={summaryOf(this.props.mainOrderAccount)}
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



