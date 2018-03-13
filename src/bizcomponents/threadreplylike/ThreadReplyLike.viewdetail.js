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
import styles from './ThreadReplyLike.viewdetail.less'
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

const summaryOf = threadReplyLike => {
  return (
    <DescriptionList className={styles.headerList} size="small" col="4">
      <Description term="序号">{threadReplyLike.id}</Description>
      <Description term="点赞时间">
        {moment(threadReplyLike.likeTime).format('YYYY-MM-DD')}
      </Description>
    </DescriptionList>
  )
}

@connect(state => ({
  threadReplyLike: state._threadReplyLike,
}))
export default class ThreadReplyLikeViewDetail extends Component {
  onTabChange = key => {
    this.setState({ tabKey: key })
  }
  render() {
    // eslint-disable-next-line max-len

    const threadReplyLike = this.props.threadReplyLike
    const { id } = threadReplyLike
    const {} = threadReplyLike

    const owner = { type: '_threadReplyLike', id }

    const tabList = []

    const contentList = {}

    return (
      <PageHeaderLayout
        title="跟帖回复点赞总览"
        content={summaryOf(this.props.threadReplyLike)}
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
