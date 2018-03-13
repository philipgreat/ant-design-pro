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
import styles from './HomePage.viewdetail.less'
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

const summaryOf = homePage => {
  return (
    <DescriptionList className={styles.headerList} size="small" col="4">
      <Description term="序号">{homePage.id}</Description>
      <Description term="标题">{homePage.title}</Description>
    </DescriptionList>
  )
}

@connect(state => ({
  homePage: state._homePage,
}))
export default class HomePageViewDetail extends Component {
  state = {
    tabKey: `slideList`,
    stepDirection: 'horizontal',
  }

  onTabChange = key => {
    this.setState({ tabKey: key })
  }
  render() {
    const { SlideViewTable } = GlobalComponents
    const { EncyclopediaItemViewTable } = GlobalComponents
    const { TaskFilterViewTable } = GlobalComponents
    const { TaskViewTable } = GlobalComponents
    const { ThreadViewTable } = GlobalComponents

    // eslint-disable-next-line max-len

    const homePage = this.props.homePage
    const {
      id,
      slideCount,
      encyclopediaItemCount,
      taskFilterCount,
      taskCount,
      threadCount,
    } = homePage
    const {
      slideList,
      encyclopediaItemList,
      taskFilterList,
      taskList,
      threadList,
    } = homePage

    const owner = { type: '_homePage', id }

    const tabList = [
      { key: 'slideList', tab: `幻灯片(${slideCount})` },
      {
        key: 'encyclopediaItemList',
        tab: `百科全书条目(${encyclopediaItemCount})`,
      },
      { key: 'taskFilterList', tab: `任务过滤器(${taskFilterCount})` },
      { key: 'taskList', tab: `任务(${taskCount})` },
      { key: 'threadList', tab: `主贴(${threadCount})` },
    ]

    const contentList = {
      slideList: (
        <SlideViewTable data={slideList} owner={owner} {...this.props} />
      ),

      encyclopediaItemList: (
        <EncyclopediaItemViewTable
          data={encyclopediaItemList}
          owner={owner}
          {...this.props}
        />
      ),

      taskFilterList: (
        <TaskFilterViewTable
          data={taskFilterList}
          owner={owner}
          {...this.props}
        />
      ),

      taskList: <TaskViewTable data={taskList} owner={owner} {...this.props} />,

      threadList: (
        <ThreadViewTable data={threadList} owner={owner} {...this.props} />
      ),
    }

    return (
      <PageHeaderLayout
        title="主页总览"
        content={summaryOf(this.props.homePage)}
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
