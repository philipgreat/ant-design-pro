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
import styles from './ServiceCompanyAccount.viewdetail.less'
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

const summaryOf = serviceCompanyAccount => {
  return (
    <DescriptionList className={styles.headerList} size="small" col="4">
      <Description term="ID">{serviceCompanyAccount.id}</Description>
      <Description term="服务单号">
        {serviceCompanyAccount.serviceOrderNumber}
      </Description>
      <Description term="服务单代码">
        {serviceCompanyAccount.serviceOrderCode}
      </Description>
      <Description term="服务单名称">
        {serviceCompanyAccount.serviceOrderName}
      </Description>
      <Description term="服务完成时间">
        {moment(serviceCompanyAccount.serviceFulfilledDatetime).format(
          'YYYY-MM-DD'
        )}
      </Description>
      <Description term="合同编号">
        {serviceCompanyAccount.contractId}
      </Description>
      <Description term="服务价格">
        {serviceCompanyAccount.contractPriceValue}
      </Description>
      <Description term="服务类型">
        {serviceCompanyAccount.contractPriceType}
      </Description>
      <Description term="服务人员">
        {serviceCompanyAccount.serviceWorkerName}
      </Description>
      <Description term="商户名称">
        {serviceCompanyAccount.serviceCompanyName}
      </Description>
      <Description term="年检订单ID">
        {serviceCompanyAccount.mainOrderId}
      </Description>
    </DescriptionList>
  )
}

@connect(state => ({
  serviceCompanyAccount: state._serviceCompanyAccount,
}))
export default class ServiceCompanyAccountViewDetail extends Component {
  onTabChange = key => {
    this.setState({ tabKey: key })
  }
  render() {
    // eslint-disable-next-line max-len

    const serviceCompanyAccount = this.props.serviceCompanyAccount
    const { id } = serviceCompanyAccount
    const {} = serviceCompanyAccount

    const owner = { type: '_serviceCompanyAccount', id }

    const tabList = []

    const contentList = {}

    return (
      <PageHeaderLayout
        title="服务商户对账单总览"
        content={summaryOf(this.props.serviceCompanyAccount)}
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
