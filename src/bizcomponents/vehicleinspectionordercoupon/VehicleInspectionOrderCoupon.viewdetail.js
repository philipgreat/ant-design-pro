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
import styles from './VehicleInspectionOrderCoupon.viewdetail.less'
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

const summaryOf = vehicleInspectionOrderCoupon => {
  return (
    <DescriptionList className={styles.headerList} size="small" col="4">
      <Description term="ID">{vehicleInspectionOrderCoupon.id}</Description>
      <Description term="优惠券名称">
        {vehicleInspectionOrderCoupon.couponTitle}
      </Description>
      <Description term="优惠金额">
        {vehicleInspectionOrderCoupon.discountAmount}
      </Description>
      <Description term="结束日期">
        {moment(vehicleInspectionOrderCoupon.endDate).format('YYYY-MM-DD')}
      </Description>
      <Description term="最后更新时间">
        {moment(vehicleInspectionOrderCoupon.lastUpdateTime).format(
          'YYYY-MM-DD'
        )}
      </Description>
      <Description term="使用日期">
        {moment(vehicleInspectionOrderCoupon.appliedDate).format('YYYY-MM-DD')}
      </Description>
      <Description term="优惠券状态">
        {vehicleInspectionOrderCoupon.couponStatus}
      </Description>
    </DescriptionList>
  )
}

@connect(state => ({
  vehicleInspectionOrderCoupon: state._vehicleInspectionOrderCoupon,
}))
export default class VehicleInspectionOrderCouponViewDetail extends Component {
  onTabChange = key => {
    this.setState({ tabKey: key })
  }
  render() {
    // eslint-disable-next-line max-len

    const vehicleInspectionOrderCoupon = this.props.vehicleInspectionOrderCoupon
    const { id } = vehicleInspectionOrderCoupon
    const {} = vehicleInspectionOrderCoupon

    const owner = { type: '_vehicleInspectionOrderCoupon', id }

    const tabList = []

    const contentList = {}

    return (
      <PageHeaderLayout
        title="优惠券使用记录总览"
        content={summaryOf(this.props.vehicleInspectionOrderCoupon)}
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
