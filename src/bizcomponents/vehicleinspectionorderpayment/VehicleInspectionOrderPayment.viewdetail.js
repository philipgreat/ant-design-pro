import React, { Component } from 'react'
import { connect } from 'dva'
import {
  Form,
  Button,
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
  Steps,
  Badge,
} from 'antd'
import { Link, Route, Redirect, Switch } from 'dva/router'
import numeral from 'numeral'
import moment from 'moment'
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
import styles from './VehicleInspectionOrderPayment.viewdetail.less'
import GlobalComponents from '../../custcomponents'
import DescriptionList from '../../components/DescriptionList'
const { Description } = DescriptionList
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

const summaryOf = vehicleInspectionOrderPayment => {
  return (
    <DescriptionList className={styles.headerList} size="small" col="4">
      <Description term="ID">{vehicleInspectionOrderPayment.id}</Description>
      <Description term="支付方式">
        {vehicleInspectionOrderPayment.paymentMethod}
      </Description>
      <Description term="原始金额">
        {vehicleInspectionOrderPayment.originalAmount}
      </Description>
      <Description term="实际的数量">
        {vehicleInspectionOrderPayment.actualAmount}
      </Description>
      <Description term="状态">
        {vehicleInspectionOrderPayment.status}
      </Description>
      <Description term="微信订单Id">
        {vehicleInspectionOrderPayment.wechatOrderId}
      </Description>
      <Description term="微信提前支付Id">
        {vehicleInspectionOrderPayment.wechatPrepayId}
      </Description>
      <Description term="创建时间">
        {moment(vehicleInspectionOrderPayment.createTime).format('YYYY-MM-DD')}
      </Description>
      <Description term="最后更新时间">
        {moment(vehicleInspectionOrderPayment.lastUpdateTime).format(
          'YYYY-MM-DD'
        )}
      </Description>
    </DescriptionList>
  )
}

@connect(state => ({
  vehicleInspectionOrderPayment: state._vehicleInspectionOrderPayment,
}))
export default class VehicleInspectionOrderPaymentViewDetail extends Component {
  onTabChange = key => {
    this.setState({ tabKey: key })
  }
  render() {
    // eslint-disable-next-line max-len

    const vehicleInspectionOrderPayment = this.props
      .vehicleInspectionOrderPayment
    const { id } = vehicleInspectionOrderPayment
    const {} = vehicleInspectionOrderPayment

    const owner = { type: '_vehicleInspectionOrderPayment', id }

    const tabList = []

    const contentList = {}

    return (
      <PageHeaderLayout
        title="订单支付管理总览"
        content={summaryOf(this.props.vehicleInspectionOrderPayment)}
        wrapperClassName={styles.advancedForm}
      >
        <Card
          className={styles.card}
          bordered={false}
          tabList={tabList}
          onTabChange={this.onTabChange}
        >
          {contentList[this.state.tabKey]}
        </Card>
      </PageHeaderLayout>
    )
  }
}
