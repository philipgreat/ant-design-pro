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
import styles from './OrderDiscountCoupon.dashboard.less'
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
const summaryOf = orderDiscountCoupon => {
  return (
    <DescriptionList className={styles.headerList} size="small" col="4">
      <Description term="ID">{orderDiscountCoupon.id}</Description>
      <Description term="优惠券名称">
        {orderDiscountCoupon.couponTitle}
      </Description>
      <Description term="折扣金额">
        {orderDiscountCoupon.discountAmount}
      </Description>
      <Description term="结束日期">
        {moment(orderDiscountCoupon.endDate).format('YYYY-MM-DD')}
      </Description>
      <Description term="最后更新时间">
        {moment(orderDiscountCoupon.lastUpdateTime).format('YYYY-MM-DD')}
      </Description>
      <Description term="息状态">
        {orderDiscountCoupon.couponStatus}
      </Description>
      <Description term="共享代码">{orderDiscountCoupon.shareCode}</Description>
    </DescriptionList>
  )
}

@connect(state => ({
  orderDiscountCoupon: state._orderDiscountCoupon,
}))
export default class OrderDiscountCouponDashboard extends Component {
  render() {
    // eslint-disable-next-line max-len
    const { id } = this.props.orderDiscountCoupon

    return (
      <PageHeaderLayout
        title="订单的折扣券总览"
        content={summaryOf(this.props.orderDiscountCoupon)}
        wrapperClassName={styles.advancedForm}
      >
        <div>
          <Row gutter={24} />
        </div>
      </PageHeaderLayout>
    )
  }
}
