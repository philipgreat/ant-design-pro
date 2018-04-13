

import React, { Component } from 'react'
import { connect } from 'dva'
import moment from 'moment'
import { Row, Col, Icon, Card, Tabs, Table, Radio, DatePicker, Tooltip, Menu, Dropdown } from 'antd'
import { Link, Route, Redirect, Switch } from 'dva/router'
import numeral from 'numeral'
import {
  ChartCard, yuan, MiniArea, MiniBar, MiniProgress, Field, Bar, Pie, TimelineChart,
} from '../../components/Charts'
import Trend from '../../components/Trend'
import NumberInfo from '../../components/NumberInfo'
import { getTimeDistance } from '../../utils/utils'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import styles from './VehicleInspectionOrderPayment.dashboard.less'
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
const summaryOf = (vehicleInspectionOrderPayment) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{vehicleInspectionOrderPayment.id}</Description> 
<Description term="支付方式">{vehicleInspectionOrderPayment.paymentMethod}</Description> 
<Description term="订单合计">{vehicleInspectionOrderPayment.originalAmount}</Description> 
<Description term="应付金额">{vehicleInspectionOrderPayment.actualAmount}</Description> 
<Description term="状态">{vehicleInspectionOrderPayment.status}</Description> 
<Description term="微信订单ID">{vehicleInspectionOrderPayment.wechatOrderId}</Description> 
<Description term="微信预付订单ID">{vehicleInspectionOrderPayment.wechatPrepayId}</Description> 
<Description term="创建时间">{ moment(vehicleInspectionOrderPayment.createTime).format('YYYY-MM-DD')}</Description> 
<Description term="最后更新时间">{ moment(vehicleInspectionOrderPayment.lastUpdateTime).format('YYYY-MM-DD')}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  vehicleInspectionOrderPayment: state._vehicleInspectionOrderPayment,
}))
export default class VehicleInspectionOrderPaymentDashboard extends Component {
  render() {
    // eslint-disable-next-line max-len
    const { id,  } = this.props.vehicleInspectionOrderPayment
    
    
    
    return (

      <PageHeaderLayout
        title="年检订单支付总览"
        content={summaryOf(this.props.vehicleInspectionOrderPayment)}
        wrapperClassName={styles.advancedForm}
      >
        <div>
          <Row gutter={24}>

          </Row>
        </div>
      </PageHeaderLayout>
    )
  }
}



