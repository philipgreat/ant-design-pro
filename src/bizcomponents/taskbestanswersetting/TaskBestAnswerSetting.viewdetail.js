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
import styles from './TaskBestAnswerSetting.viewdetail.less'
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

const summaryOf = taskBestAnswerSetting => {
  return (
    <DescriptionList className={styles.headerList} size="small" col="4">
      <Description term="序号">{taskBestAnswerSetting.id}</Description>
      <Description term="谁">{taskBestAnswerSetting.who}</Description>
      <Description term="设置时间">
        {moment(taskBestAnswerSetting.setTime).format('YYYY-MM-DD')}
      </Description>
      <Description term="评论">{taskBestAnswerSetting.comment}</Description>
    </DescriptionList>
  )
}

@connect(state => ({
  taskBestAnswerSetting: state._taskBestAnswerSetting,
}))
export default class TaskBestAnswerSettingViewDetail extends Component {
  state = {
    tabKey: `taskReplyList`,
    stepDirection: 'horizontal',
  }

  onTabChange = key => {
    this.setState({ tabKey: key })
  }
  render() {
    const { TaskReplyViewTable } = GlobalComponents

    // eslint-disable-next-line max-len

    const taskBestAnswerSetting = this.props.taskBestAnswerSetting
    const { id, taskReplyCount } = taskBestAnswerSetting
    const { taskReplyList } = taskBestAnswerSetting

    const owner = { type: '_taskBestAnswerSetting', id }

    const tabList = [
      { key: 'taskReplyList', tab: `回复任务(${taskReplyCount})` },
    ]

    const contentList = {
      taskReplyList: (
        <TaskReplyViewTable
          data={taskReplyList}
          owner={owner}
          {...this.props}
        />
      ),
    }

    return (
      <PageHeaderLayout
        title="任务最佳答案设置总览"
        content={summaryOf(this.props.taskBestAnswerSetting)}
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
