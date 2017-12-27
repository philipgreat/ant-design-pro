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
import styles from './ThreadCanceling.editdetail.less'

import ThreadEditTable from '../thread/Thread.edittable'

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
  threadCanceling: state._threadCanceling,
}))
export default class ThreadCancelingEditDetail extends Component {
  render() {
    // eslint-disable-next-line max-len
    const { id, threadCount } = this.props.threadCanceling
    const { threadList } = this.props.threadCanceling

    const owner = { type: '_threadCanceling', id }
    return (
      <PageHeaderLayout
        title="线程取消总览"
        content="线程取消总览"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="主贴列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <ThreadEditTable data={threadList} owner={owner} />
          </Form>
        </Card>
      </PageHeaderLayout>
    )
  }
}
