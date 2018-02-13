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
import styles from './ReportFileInspectionReport.viewdetail.less'
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

const summaryOf = reportFileInspectionReport => {
  return (
    <DescriptionList className={styles.headerList} size="small" col="4">
      <Description term="ID">{reportFileInspectionReport.id}</Description>
      <Description term="描述">
        {reportFileInspectionReport.description}
      </Description>
      <Description term="检验报告图1">
        {reportFileInspectionReport.inspectionReportImage1}
      </Description>
      <Description term="检验报告图2">
        {reportFileInspectionReport.inspectionReportImage2}
      </Description>
      <Description term="检验报告图片3">
        {reportFileInspectionReport.inspectionReportImage3}
      </Description>
      <Description term="检验报告图片4">
        {reportFileInspectionReport.inspectionReportImage4}
      </Description>
      <Description term="检验报告图片5">
        {reportFileInspectionReport.inspectionReportImage5}
      </Description>
    </DescriptionList>
  )
}

@connect(state => ({
  reportFileInspectionReport: state._reportFileInspectionReport,
}))
export default class ReportFileInspectionReportViewDetail extends Component {
  onTabChange = key => {
    this.setState({ tabKey: key })
  }
  render() {
    // eslint-disable-next-line max-len

    const reportFileInspectionReport = this.props.reportFileInspectionReport
    const { id } = reportFileInspectionReport
    const {} = reportFileInspectionReport

    const owner = { type: '_reportFileInspectionReport', id }

    const tabList = []

    const contentList = {}

    return (
      <PageHeaderLayout
        title="报告文件检验报告总览"
        content={summaryOf(this.props.reportFileInspectionReport)}
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
