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
import styles from './TaskPage.viewdetail.less'
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

const summaryOf = taskPage => {
  return (
    <DescriptionList className={styles.headerList} size="small" col="4">
      <Description term="序号">{taskPage.id}</Description>
      <Description term="标题">{taskPage.title}</Description>
      <Description term="当前健值">{taskPage.currentKey}</Description>
    </DescriptionList>
  )
}

@connect(state => ({
  taskPage: state._taskPage,
}))
export default class TaskPageViewDetail extends Component {
  state = {
    tabKey: `taskFilterList`,
    stepDirection: 'horizontal',
  }

  onTabChange = key => {
    this.setState({ tabKey: key })
  }
  render() {
    const { TaskFilterViewTable } = GlobalComponents
    const { TaskViewTable } = GlobalComponents

    // eslint-disable-next-line max-len

    const taskPage = this.props.taskPage
    const { id, taskFilterCount, taskCount } = taskPage
    const { taskFilterList, taskList } = taskPage

    const owner = { type: '_taskPage', id }

    const tabList = [
      { key: 'taskFilterList', tab: `任务过滤器(${taskFilterCount})` },
      { key: 'taskList', tab: `任务(${taskCount})` },
    ]

    const contentList = {
      taskFilterList: (
        <TaskFilterViewTable
          data={taskFilterList}
          owner={owner}
          {...this.props}
        />
      ),

      taskList: <TaskViewTable data={taskList} owner={owner} {...this.props} />,
    }

    return (
      <PageHeaderLayout
        title="任务页面总览"
        content={summaryOf(this.props.taskPage)}
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
