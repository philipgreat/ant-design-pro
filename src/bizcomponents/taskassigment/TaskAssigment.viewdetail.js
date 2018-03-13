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
import styles from './TaskAssigment.viewdetail.less'
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

const summaryOf = taskAssigment => {
  return (
    <DescriptionList className={styles.headerList} size="small" col="4">
      <Description term="序号">{taskAssigment.id}</Description>
      <Description term="分配时间">
        {moment(taskAssigment.assignTime).format('YYYY-MM-DD')}
      </Description>
      <Description term="评论">{taskAssigment.comments}</Description>
    </DescriptionList>
  )
}

@connect(state => ({
  taskAssigment: state._taskAssigment,
}))
export default class TaskAssigmentViewDetail extends Component {
  onTabChange = key => {
    this.setState({ tabKey: key })
  }
  render() {
    // eslint-disable-next-line max-len

    const taskAssigment = this.props.taskAssigment
    const { id } = taskAssigment
    const {} = taskAssigment

    const owner = { type: '_taskAssigment', id }

    const tabList = []

    const contentList = {}

    return (
      <PageHeaderLayout
        title="任务分配总览"
        content={summaryOf(this.props.taskAssigment)}
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
