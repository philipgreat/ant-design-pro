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
import styles from './RepairingCompanyAccount.dashboard.less'
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
const summaryOf = repairingCompanyAccount => {
  return (
    <DescriptionList className={styles.headerList} size="small" col="4">
      <Description term="ID">{repairingCompanyAccount.id}</Description>
      <Description term="修理员">
        {repairingCompanyAccount.repairingWorkerName}
      </Description>
      <Description term="修理厂">
        {repairingCompanyAccount.repairingCompanyName}
      </Description>
      <Description term="车牌号码">
        {repairingCompanyAccount.vehicleLicensePlateNumber}
      </Description>
      <Description term="车辆维修服务单号">
        {repairingCompanyAccount.vehicleRepairingOrderNumber}
      </Description>
      <Description term="订单合计">
        {repairingCompanyAccount.originalAmount}
      </Description>
      <Description term="补贴金额">
        {repairingCompanyAccount.allowanceAmount}
      </Description>
      <Description term="应付金额">
        {repairingCompanyAccount.actualAmount}
      </Description>
      <Description term="年检订单ID">
        {repairingCompanyAccount.mainOrderId}
      </Description>
      <Description term="付款日期时间">
        {moment(repairingCompanyAccount.paymentDatetime).format('YYYY-MM-DD')}
      </Description>
      <Description term="微信订单ID">
        {repairingCompanyAccount.wechatOrderId}
      </Description>
      <Description term="微信预付订单ID">
        {repairingCompanyAccount.wechatPrepayId}
      </Description>
    </DescriptionList>
  )
}

@connect(state => ({
  repairingCompanyAccount: state._repairingCompanyAccount,
}))
export default class RepairingCompanyAccountDashboard extends Component {
  render() {
    // eslint-disable-next-line max-len
    const { id } = this.props.repairingCompanyAccount

    return (
      <PageHeaderLayout
        title="修理厂对账单总览"
        content={summaryOf(this.props.repairingCompanyAccount)}
        wrapperClassName={styles.advancedForm}
      >
        <div>
          <Row gutter={24} />
        </div>
      </PageHeaderLayout>
    )
  }
}
