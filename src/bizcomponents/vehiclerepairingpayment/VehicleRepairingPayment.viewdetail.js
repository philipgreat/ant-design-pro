

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
import styles from './VehicleRepairingPayment.viewdetail.less'
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

const summaryOf = (vehicleRepairingPayment) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{vehicleRepairingPayment.id}</Description> 
<Description term="订单合计">{vehicleRepairingPayment.originalAmount}</Description> 
<Description term="应付金额">{vehicleRepairingPayment.actualAmount}</Description> 
<Description term="状态">{vehicleRepairingPayment.status}</Description> 
<Description term="微信订单ID">{vehicleRepairingPayment.wechatOrderId}</Description> 
<Description term="微信预付订单ID">{vehicleRepairingPayment.wechatPrepayId}</Description> 
<Description term="创建时间">{ moment(vehicleRepairingPayment.createTime).format('YYYY-MM-DD')}</Description> 
<Description term="最后更新时间">{ moment(vehicleRepairingPayment.lastUpdateTime).format('YYYY-MM-DD')}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  vehicleRepairingPayment: state._vehicleRepairingPayment,
}))
export default class VehicleRepairingPaymentViewDetail extends Component {

 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
  
    // eslint-disable-next-line max-len
    
    const vehicleRepairingPayment = this.props.vehicleRepairingPayment
    const { id,  } = vehicleRepairingPayment
    const {  } = vehicleRepairingPayment
    
    const owner = { type: '_vehicleRepairingPayment', id }
    
    const tabList = [

   

   ];
   
   
    const contentList = {
     
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="支付维修订单总览"
        content={summaryOf(this.props.vehicleRepairingPayment)}
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



