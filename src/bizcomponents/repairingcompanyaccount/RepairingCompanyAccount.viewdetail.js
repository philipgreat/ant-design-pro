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
import styles from './RepairingCompanyAccount.viewdetail.less'
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

const summaryOf = repairingCompanyAccount => {
  return (
    <DescriptionList className={styles.headerList} size="small" col="4">
      <Description term="ID">{repairingCompanyAccount.id}</Description>
      <Description term="修理工人的名字">
        {repairingCompanyAccount.repairingWorkerName}
      </Description>
      <Description term="修理公司名称">
        {repairingCompanyAccount.repairingCompanyName}
      </Description>
      <Description term="车牌号码">
        {repairingCompanyAccount.vehicleLicensePlateNumber}
      </Description>
      <Description term="车辆维修订单号">
        {repairingCompanyAccount.vehicleRepairingOrderNumber}
      </Description>
      <Description term="原始金额">
        {repairingCompanyAccount.originalAmount}
      </Description>
      <Description term="补贴费用">
        {repairingCompanyAccount.allowanceAmount}
      </Description>
      <Description term="实际的数量">
        {repairingCompanyAccount.actualAmount}
      </Description>
      <Description term="主要订单Id">
        {repairingCompanyAccount.mainOrderId}
      </Description>
      <Description term="付款日期时间">
        {moment(repairingCompanyAccount.paymentDatetime).format('YYYY-MM-DD')}
      </Description>
      <Description term="微信订单Id">
        {repairingCompanyAccount.wechatOrderId}
      </Description>
      <Description term="微信提前支付Id">
        {repairingCompanyAccount.wechatPrepayId}
      </Description>
    </DescriptionList>
  )
}

@connect(state => ({
  repairingCompanyAccount: state._repairingCompanyAccount,
}))
export default class RepairingCompanyAccountViewDetail extends Component {
  onTabChange = key => {
    this.setState({ tabKey: key })
  }
  render() {
    // eslint-disable-next-line max-len

    const repairingCompanyAccount = this.props.repairingCompanyAccount
    const { id } = repairingCompanyAccount
    const {} = repairingCompanyAccount

    const owner = { type: '_repairingCompanyAccount', id }

    const tabList = []

    const contentList = {}

    return (
      <PageHeaderLayout
        title="修理公司对账单总览"
        content={summaryOf(this.props.repairingCompanyAccount)}
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
