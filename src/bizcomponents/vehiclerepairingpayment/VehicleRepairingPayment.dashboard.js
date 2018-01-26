import React, { Component } from 'react'
import { connect } from 'dva'
import moment from 'moment'
import {
  Row,
  Col,
  Icon,
  Card,
  Tabs,
  Table,
  Radio,
  DatePicker,
  Tooltip,
  Menu,
  Dropdown,
} from 'antd'
import { Link, Route, Redirect, Switch } from 'dva/router'
import numeral from 'numeral'
import {
  ChartCard,
  yuan,
  MiniArea,
  MiniBar,
  MiniProgress,
  Field,
  Bar,
  Pie,
  TimelineChart,
} from '../../components/Charts'
import Trend from '../../components/Trend'
import NumberInfo from '../../components/NumberInfo'
import { getTimeDistance } from '../../utils/utils'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import styles from './VehicleRepairingPayment.dashboard.less'
import DescriptionList from '../../components/DescriptionList'
const { Description } = DescriptionList
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
const summaryOf = vehicleRepairingPayment => {
  return (
    <DescriptionList className={styles.headerList} size="small" col="4">
      <Description term="序号">{vehicleRepairingPayment.id}</Description>
      <Description term="维修订单总金额">
        {vehicleRepairingPayment.repairingOrderTotalAmount}
      </Description>
      <Description term="付款状态">
        {vehicleRepairingPayment.paymentStatus}
      </Description>
      <Description term="支付方式">
        {vehicleRepairingPayment.paymentMethod}
      </Description>
    </DescriptionList>
  )
}

@connect(state => ({
  vehicleRepairingPayment: state._vehicleRepairingPayment,
}))
export default class VehicleRepairingPaymentDashboard extends Component {
  render() {
    // eslint-disable-next-line max-len
    const { id } = this.props.vehicleRepairingPayment

    return (
      <PageHeaderLayout
        title="修理付款总览"
        content={summaryOf(this.props.vehicleRepairingPayment)}
        wrapperClassName={styles.advancedForm}
      >
        <div>
          <Row gutter={24} />
        </div>
      </PageHeaderLayout>
    )
  }
}
