

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
import styles from './Customer.viewdetail.less'
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

const summaryOf = (customer) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{customer.id}</Description> 
<Description term="客户昵称">{customer.nickName}</Description> 
<Description term="头像">{customer.logoImage}</Description> 
<Description term="微信ID">{customer.weixinOpenid}</Description> 
<Description term="微信APP">{customer.weixinAppid}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  customer: state._customer,
}))
export default class CustomerViewDetail extends Component {


  state = {
    tabKey: `companyQrcodePromotionRecordList`,
    stepDirection: 'horizontal',
  }
 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
    const {CompanyQrcodePromotionRecordViewTable} = GlobalComponents;
    const {VehicleInfoViewTable} = GlobalComponents;
    const {VehicleInspectionOrderViewTable} = GlobalComponents;
    const {OrderDiscountCouponViewTable} = GlobalComponents;
    const {VehicleInspectionOrderCouponViewTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    
    const customer = this.props.customer
    const { id, companyQrcodePromotionRecordCount, vehicleInfoCount, vehicleInspectionOrderCount, orderDiscountCouponCount, vehicleInspectionOrderCouponCount } = customer
    const { companyQrcodePromotionRecordList, vehicleInfoList, vehicleInspectionOrderList, orderDiscountCouponList, vehicleInspectionOrderCouponList } = customer
    
    const owner = { type: '_customer', id }
    
    const tabList = [

      {key: 'companyQrcodePromotionRecordList',tab: `公司二维码推广记录(${companyQrcodePromotionRecordCount})`}, 
      {key: 'vehicleInfoList',tab: `车辆信息(${vehicleInfoCount})`}, 
      {key: 'vehicleInspectionOrderList',tab: `年检订单(${vehicleInspectionOrderCount})`}, 
      {key: 'orderDiscountCouponList',tab: `优惠券(${orderDiscountCouponCount})`}, 
      {key: 'vehicleInspectionOrderCouponList',tab: `优惠券使用记录(${vehicleInspectionOrderCouponCount})`}, 
   

   ];
   
   
    const contentList = {
       companyQrcodePromotionRecordList:  
        <CompanyQrcodePromotionRecordViewTable data={companyQrcodePromotionRecordList} owner={owner} {...this.props} />,
 
      vehicleInfoList:  
        <VehicleInfoViewTable data={vehicleInfoList} owner={owner} {...this.props} />,
 
      vehicleInspectionOrderList:  
        <VehicleInspectionOrderViewTable data={vehicleInspectionOrderList} owner={owner} {...this.props} />,
 
      orderDiscountCouponList:  
        <OrderDiscountCouponViewTable data={orderDiscountCouponList} owner={owner} {...this.props} />,
 
      vehicleInspectionOrderCouponList:  
        <VehicleInspectionOrderCouponViewTable data={vehicleInspectionOrderCouponList} owner={owner} {...this.props} />,
 
    
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="客户总览"
        content={summaryOf(this.props.customer)}
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



