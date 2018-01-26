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
import styles from './ServiceFileInspection.dashboard.less'
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
const summaryOf = serviceFileInspection => {
  return (
    <DescriptionList className={styles.headerList} size="small" col="4">
      <Description term="序号">{serviceFileInspection.id}</Description>
      <Description term="服务状态">
        {serviceFileInspection.serviceStatus}
      </Description>
      <Description term="检测结果">
        {serviceFileInspection.inspectionResult ? '是' : '否'}
      </Description>
      <Description term="开始时间">
        {moment(serviceFileInspection.startTime).format('YYYY-MM-DD')}
      </Description>
      <Description term="最后的位置">
        {serviceFileInspection.lastLocation}
      </Description>
      <Description term="最后更新时间">
        {moment(serviceFileInspection.lastUpdateTime).format('YYYY-MM-DD')}
      </Description>
      <Description term="检测报告1">
        {serviceFileInspection.reportImage1}
      </Description>
      <Description term="检测报告2">
        {serviceFileInspection.reportImage2}
      </Description>
      <Description term="检测报告3">
        {serviceFileInspection.reportImage3}
      </Description>
      <Description term="检测报告4">
        {serviceFileInspection.reportImage4}
      </Description>
      <Description term="检测报告5">
        {serviceFileInspection.reportImage5}
      </Description>
    </DescriptionList>
  )
}

@connect(state => ({
  serviceFileInspection: state._serviceFileInspection,
}))
export default class ServiceFileInspectionDashboard extends Component {
  render() {
    // eslint-disable-next-line max-len
    const { id } = this.props.serviceFileInspection

    return (
      <PageHeaderLayout
        title="6年免检服务总览"
        content={summaryOf(this.props.serviceFileInspection)}
        wrapperClassName={styles.advancedForm}
      >
        <div>
          <Row gutter={24} />
        </div>
      </PageHeaderLayout>
    )
  }
}
