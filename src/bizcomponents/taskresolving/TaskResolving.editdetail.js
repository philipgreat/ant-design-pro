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
import styles from './TaskResolving.editdetail.less'

import TaskEditTable from '../task/Task.edittable'

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
  taskResolving: state._taskResolving,
}))
export default class TaskResolvingEditDetail extends Component {
  render() {
    const { id, taskCount } = this.props.taskResolving
    const { taskList } = this.props.taskResolving

    const owner = { type: '_taskResolving', id }
    return (
      <PageHeaderLayout
        title="任务分解总览"
        content="任务分解总览"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="任务列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <TaskEditTable data={taskList} owner={owner} />
          </Form>
        </Card>
      </PageHeaderLayout>
    )
  }
}
