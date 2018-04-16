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
import styles from './MainOrderAccount.dashboard.less'
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
const summaryOf = mainOrderAccount => {
  return (
    <DescriptionList className={styles.headerList} size="small" col="4">
      <Description term="ID">{mainOrderAccount.id}</Description>
      <Description term="车牌号码">
        {mainOrderAccount.vehicleLicensePlateNumber}
      </Description>
      <Description term="产品名称">{mainOrderAccount.productName}</Description>
      <Description term="年检费用">
        {mainOrderAccount.inspectionPrice}
      </Description>
      <Description term="代办服务费用">
        {mainOrderAccount.agentServicePrice}
      </Description>
      <Description term="城市">{mainOrderAccount.city}</Description>
      <Description term="车辆类型">{mainOrderAccount.vehicleType}</Description>
      <Description term="订单总金额">
        {mainOrderAccount.orderTotalAmount}
      </Description>
      <Description term="优惠折扣">
        {mainOrderAccount.orderPromotionDiscount}
      </Description>
      <Description term="优惠券折扣">
        {mainOrderAccount.orderCouponDiscount}
      </Description>
      <Description term="保单费用">
        {mainOrderAccount.orderInsuranceAmount}
      </Description>
      <Description term="客户付款总金额">
        {mainOrderAccount.orderCustomerPaymentAmount}
      </Description>
      <Description term="商户服务费总金额">
        {mainOrderAccount.orderServiceAmount}
      </Description>
      <Description term="平台结余总金额">
        {mainOrderAccount.orderPlatformBalance}
      </Description>
      <Description term="下单时间">
        {moment(mainOrderAccount.orderPlacedDatetime).format('YYYY-MM-DD')}
      </Description>
      <Description term="付款时间">
        {moment(mainOrderAccount.orderPaymentDatetime).format('YYYY-MM-DD')}
      </Description>
      <Description term="订单完成时间">
        {moment(mainOrderAccount.orderFinishedDatetime).format('YYYY-MM-DD')}
      </Description>
      <Description term="年检订单ID">
        {mainOrderAccount.mainOrderId}
      </Description>
      <Description term="微信订单ID">
        {mainOrderAccount.wechatOrderId}
      </Description>
      <Description term="微信预付订单ID">
        {mainOrderAccount.wechatPrepayId}
      </Description>
    </DescriptionList>
  )
}

@connect(state => ({
  mainOrderAccount: state._mainOrderAccount,
}))
export default class MainOrderAccountDashboard extends Component {
  render() {
    // eslint-disable-next-line max-len
    const { id } = this.props.mainOrderAccount

    return (
      <PageHeaderLayout
        title="年检订单对账单总览"
        content={summaryOf(this.props.mainOrderAccount)}
        wrapperClassName={styles.advancedForm}
      >
        <div>
          <Row gutter={24} />
        </div>
      </PageHeaderLayout>
    )
  }
}
