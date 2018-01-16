

import React, { Component } from 'react'
import { connect } from 'dva'
import { Form,Button, Row, Col, Icon, Card, Tabs, Table, Radio, DatePicker, Tooltip, Menu, Dropdown } from 'antd'
import { Link, Route, Redirect, Switch } from 'dva/router'
import numeral from 'numeral'
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
<Description term="序号">{vehicleRepairingPayment.id}</Description> 
<Description term="维修订单总金额">{vehicleRepairingPayment.repairingOrderTotalAmount}</Description> 
<Description term="付款状态">{vehicleRepairingPayment.paymentStatus}</Description> 
<Description term="支付方式">{vehicleRepairingPayment.paymentMethod}</Description> 
	
        
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
    const { id,  } = this.props.vehicleRepairingPayment
    const {  } = this.props.vehicleRepairingPayment
    
    const owner = { type: '_vehicleRepairingPayment', id }
 
    
    const tabList = [

   

   ];
   
   
    const contentList = {
     
    };
    
    
    return (

      <PageHeaderLayout
        title="修理付款总览"
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



