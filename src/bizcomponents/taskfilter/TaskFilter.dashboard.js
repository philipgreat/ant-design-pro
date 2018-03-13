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
import styles from './TaskFilter.dashboard.less'
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
const summaryOf = taskFilter => {
  return (
    <DescriptionList className={styles.headerList} size="small" col="4">
      <Description term="序号">{taskFilter.id}</Description>
      <Description term="名称">{taskFilter.name}</Description>
      <Description term="过滤器健值">{taskFilter.filterKey}</Description>
      <Description term="链接网址">{taskFilter.linkUrl}</Description>
    </DescriptionList>
  )
}

@connect(state => ({
  taskFilter: state._taskFilter,
}))
export default class TaskFilterDashboard extends Component {
  render() {
    // eslint-disable-next-line max-len
    const { id } = this.props.taskFilter

    return (
      <PageHeaderLayout
        title="任务过滤器总览"
        content={summaryOf(this.props.taskFilter)}
        wrapperClassName={styles.advancedForm}
      >
        <div>
          <Row gutter={24} />
        </div>
      </PageHeaderLayout>
    )
  }
}
