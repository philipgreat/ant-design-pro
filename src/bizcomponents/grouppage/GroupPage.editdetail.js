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
import styles from './GroupPage.editdetail.less'

import GroupFilterEditTable from '../groupfilter/GroupFilter.edittable'

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
  groupPage: state._groupPage,
}))
export default class GroupPageEditDetail extends Component {
  render() {
    const { id, groupFilterCount, threadCount } = this.props.groupPage
    const { groupFilterList, threadList } = this.props.groupPage

    const owner = { type: '_groupPage', id }
    return (
      <PageHeaderLayout
        title="群组页面总览"
        content="群组页面总览"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="群组过滤器列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <GroupFilterEditTable data={groupFilterList} owner={owner} />
          </Form>
        </Card>

        <Card title="主贴列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <ThreadEditTable data={threadList} owner={owner} />
          </Form>
        </Card>
      </PageHeaderLayout>
    )
  }
}
