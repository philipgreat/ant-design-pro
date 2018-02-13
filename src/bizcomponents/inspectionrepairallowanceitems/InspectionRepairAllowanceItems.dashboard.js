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
import styles from './InspectionRepairAllowanceItems.dashboard.less'
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
const summaryOf = inspectionRepairAllowanceItems => {
  return (
    <DescriptionList className={styles.headerList} size="small" col="4">
      <Description term="ID">{inspectionRepairAllowanceItems.id}</Description>
      <Description term="津贴标题">
        {inspectionRepairAllowanceItems.allowanceTitle}
      </Description>
      <Description term="补贴代码">
        {inspectionRepairAllowanceItems.allowanceCode}
      </Description>
      <Description term="补贴费用">
        {inspectionRepairAllowanceItems.allowanceAmount}
      </Description>
    </DescriptionList>
  )
}

@connect(state => ({
  inspectionRepairAllowanceItems: state._inspectionRepairAllowanceItems,
}))
export default class InspectionRepairAllowanceItemsDashboard extends Component {
  render() {
    // eslint-disable-next-line max-len
    const { id } = this.props.inspectionRepairAllowanceItems

    return (
      <PageHeaderLayout
        title="检测修理建议项总览"
        content={summaryOf(this.props.inspectionRepairAllowanceItems)}
        wrapperClassName={styles.advancedForm}
      >
        <div>
          <Row gutter={24} />
        </div>
      </PageHeaderLayout>
    )
  }
}
