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
import styles from './VehicleRepairingReport.viewdetail.less'
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

const summaryOf = vehicleRepairingReport => {
  return (
    <DescriptionList className={styles.headerList} size="small" col="4">
      <Description term="ID">{vehicleRepairingReport.id}</Description>
      <Description term="修复部分Img 1">
        {vehicleRepairingReport.repairingPartImg1}
      </Description>
      <Description term="修复部分Img 2">
        {vehicleRepairingReport.repairingPartImg2}
      </Description>
      <Description term="修复部分Img 3">
        {vehicleRepairingReport.repairingPartImg3}
      </Description>
      <Description term="修复部分Img 4">
        {vehicleRepairingReport.repairingPartImg4}
      </Description>
      <Description term="修复部分Img 5">
        {vehicleRepairingReport.repairingPartImg5}
      </Description>
      <Description term="修复部分Img 6">
        {vehicleRepairingReport.repairingPartImg6}
      </Description>
      <Description term="修复部分Img 7">
        {vehicleRepairingReport.repairingPartImg7}
      </Description>
      <Description term="修复部分Img 8">
        {vehicleRepairingReport.repairingPartImg8}
      </Description>
      <Description term="修复部分Img 9">
        {vehicleRepairingReport.repairingPartImg9}
      </Description>
      <Description term="修复部分Img 10">
        {vehicleRepairingReport.repairingPartImg10}
      </Description>
      <Description term="修复部分评论列表">
        {vehicleRepairingReport.repairingPartListComment}
      </Description>
      <Description term="修复完成日期时间">
        {moment(vehicleRepairingReport.repairingFinishedDatetime).format(
          'YYYY-MM-DD'
        )}
      </Description>
    </DescriptionList>
  )
}

@connect(state => ({
  vehicleRepairingReport: state._vehicleRepairingReport,
}))
export default class VehicleRepairingReportViewDetail extends Component {
  onTabChange = key => {
    this.setState({ tabKey: key })
  }
  render() {
    // eslint-disable-next-line max-len

    const vehicleRepairingReport = this.props.vehicleRepairingReport
    const { id } = vehicleRepairingReport
    const {} = vehicleRepairingReport

    const owner = { type: '_vehicleRepairingReport', id }

    const tabList = []

    const contentList = {}

    return (
      <PageHeaderLayout
        title="车辆维修报告总览"
        content={summaryOf(this.props.vehicleRepairingReport)}
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
