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
import styles from './TaskReplyLike.editdetail.less'

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
  taskReplyLike: state._taskReplyLike,
}))
export default class TaskReplyLikeEditDetail extends Component {
  render() {
    const { id } = this.props.taskReplyLike
    const {} = this.props.taskReplyLike

    const owner = { type: '_taskReplyLike', id }
    return (
      <PageHeaderLayout
        title="任务回复点赞总览"
        content="任务回复点赞总览"
        wrapperClassName={styles.advancedForm}
      />
    )
  }
}
