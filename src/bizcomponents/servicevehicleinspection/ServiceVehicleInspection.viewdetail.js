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
import styles from './ServiceVehicleInspection.viewdetail.less'
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

const summaryOf = serviceVehicleInspection => {
  return (
    <DescriptionList className={styles.headerList} size="small" col="4">
      <Description term="序号">{serviceVehicleInspection.id}</Description>
      <Description term="服务状态">
        {serviceVehicleInspection.serviceStatus}
      </Description>
      <Description term="检测结果">
        {serviceVehicleInspection.inspectionResult ? '是' : '否'}
      </Description>
      <Description term="开始时间">
        {moment(serviceVehicleInspection.startTime).format('YYYY-MM-DD')}
      </Description>
      <Description term="最后的位置">
        {serviceVehicleInspection.lastLocation}
      </Description>
      <Description term="最后更新时间">
        {moment(serviceVehicleInspection.lastUpdateTime).format('YYYY-MM-DD')}
      </Description>
      <Description term="检测报告1">
        {serviceVehicleInspection.reportImage1}
      </Description>
      <Description term="检测报告2">
        {serviceVehicleInspection.reportImage2}
      </Description>
      <Description term="检测报告3">
        {serviceVehicleInspection.reportImage3}
      </Description>
      <Description term="检测报告4">
        {serviceVehicleInspection.reportImage4}
      </Description>
      <Description term="检测报告5">
        {serviceVehicleInspection.reportImage5}
      </Description>
    </DescriptionList>
  )
}

@connect(state => ({
  serviceVehicleInspection: state._serviceVehicleInspection,
}))
export default class ServiceVehicleInspectionViewDetail extends Component {
  onTabChange = key => {
    this.setState({ tabKey: key })
  }
  render() {
    // eslint-disable-next-line max-len

    const serviceVehicleInspection = this.props.serviceVehicleInspection
    const { id } = serviceVehicleInspection
    const {} = serviceVehicleInspection

    const owner = { type: '_serviceVehicleInspection', id }

    const tabList = []

    const contentList = {}

    return (
      <PageHeaderLayout
        title="车辆上线检测结果总览"
        content={summaryOf(this.props.serviceVehicleInspection)}
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
