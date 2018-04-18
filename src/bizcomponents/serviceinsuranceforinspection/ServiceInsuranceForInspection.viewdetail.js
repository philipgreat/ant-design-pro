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
import styles from './ServiceInsuranceForInspection.viewdetail.less'
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

const summaryOf = serviceInsuranceForInspection => {
  return (
    <DescriptionList className={styles.headerList} size="small" col="4">
      <Description term="ID">{serviceInsuranceForInspection.id}</Description>
      <Description term="服务状态">
        {serviceInsuranceForInspection.serviceStatus}
      </Description>
      <Description term="服务概述">
        {serviceInsuranceForInspection.serviceSummary}
      </Description>
      <Description term="服务的评论">
        {serviceInsuranceForInspection.serviceComments}
      </Description>
      <Description term="开始时间">
        {moment(serviceInsuranceForInspection.startTime).format('YYYY-MM-DD')}
      </Description>
      <Description term="最后更新时间">
        {moment(serviceInsuranceForInspection.lastUpdateTime).format(
          'YYYY-MM-DD'
        )}
      </Description>
      <Description term="保险名称">
        {serviceInsuranceForInspection.insuranceName}
      </Description>
      <Description term="承保方">
        {serviceInsuranceForInspection.insuranceVendor}
      </Description>
      <Description term="保费">
        {serviceInsuranceForInspection.insurancePrice}
      </Description>
      <Description term="摘要">
        {serviceInsuranceForInspection.summary}
      </Description>
      <Description term="保单号码">
        {serviceInsuranceForInspection.insuranceNumber}
      </Description>
      <Description term="保单凭证1">
        {serviceInsuranceForInspection.insuranceImage1}
      </Description>
      <Description term="保单凭证2">
        {serviceInsuranceForInspection.insuranceImage2}
      </Description>
      <Description term="保单凭证3">
        {serviceInsuranceForInspection.insuranceImage3}
      </Description>
      <Description term="保单凭证4">
        {serviceInsuranceForInspection.insuranceImage4}
      </Description>
      <Description term="保单凭证5">
        {serviceInsuranceForInspection.insuranceImage5}
      </Description>
    </DescriptionList>
  )
}

@connect(state => ({
  serviceInsuranceForInspection: state._serviceInsuranceForInspection,
}))
export default class ServiceInsuranceForInspectionViewDetail extends Component {
  onTabChange = key => {
    this.setState({ tabKey: key })
  }
  render() {
    // eslint-disable-next-line max-len

    const serviceInsuranceForInspection = this.props
      .serviceInsuranceForInspection
    const { id } = serviceInsuranceForInspection
    const {} = serviceInsuranceForInspection

    const owner = { type: '_serviceInsuranceForInspection', id }

    const tabList = []

    const contentList = {}

    return (
      <PageHeaderLayout
        title="保险服务总览"
        content={summaryOf(this.props.serviceInsuranceForInspection)}
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
