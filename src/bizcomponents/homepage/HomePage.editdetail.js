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
import styles from './HomePage.editdetail.less'
import GlobalComponents from '../../custcomponents'

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

@connect(state => ({
  homePage: state._homePage,
}))
export default class HomePageEditDetail extends Component {
  render() {
    const { SlideEditTable } = GlobalComponents
    const { EncyclopediaItemEditTable } = GlobalComponents
    const { TaskFilterEditTable } = GlobalComponents
    const { TaskEditTable } = GlobalComponents
    const { ThreadEditTable } = GlobalComponents

    // eslint-disable-next-line max-len
    const {
      id,
      slideCount,
      encyclopediaItemCount,
      taskFilterCount,
      taskCount,
      threadCount,
    } = this.props.homePage
    const {
      slideList,
      encyclopediaItemList,
      taskFilterList,
      taskList,
      threadList,
    } = this.props.homePage

    const owner = { type: '_homePage', id }
    return (
      <PageHeaderLayout
        title="主页总览"
        content="主页总览"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="幻灯片列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <SlideEditTable data={slideList} owner={owner} {...this.props} />
          </Form>
        </Card>

        <Card title="百科全书条目列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <EncyclopediaItemEditTable
              data={encyclopediaItemList}
              owner={owner}
              {...this.props}
            />
          </Form>
        </Card>

        <Card title="任务过滤器列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <TaskFilterEditTable
              data={taskFilterList}
              owner={owner}
              {...this.props}
            />
          </Form>
        </Card>

        <Card title="任务列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <TaskEditTable data={taskList} owner={owner} {...this.props} />
          </Form>
        </Card>

        <Card title="主贴列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <ThreadEditTable data={threadList} owner={owner} {...this.props} />
          </Form>
        </Card>
      </PageHeaderLayout>
    )
  }
}
