

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
import styles from './VehicleRepairingPayment.dashboard.less'
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
export default class VehicleRepairingPaymentDashboard extends Component {
  render() {
    // eslint-disable-next-line max-len
    const { id,  } = this.props.vehicleRepairingPayment
    
    
    
    return (

      <PageHeaderLayout
        title="支付维修订单总览"
        content={summaryOf(this.props.vehicleRepairingPayment)}
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



