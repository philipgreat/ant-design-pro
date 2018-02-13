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
import styles from './RepairingAllowanceItem.viewdetail.less'
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

const summaryOf = repairingAllowanceItem => {
  return (
    <DescriptionList className={styles.headerList} size="small" col="4">
      <Description term="ID">{repairingAllowanceItem.id}</Description>
      <Description term="津贴标题">
        {repairingAllowanceItem.allowanceTitle}
      </Description>
      <Description term="补贴代码">
        {repairingAllowanceItem.allowanceCode}
      </Description>
      <Description term="补贴费用">
        {repairingAllowanceItem.allowanceAmount}
      </Description>
    </DescriptionList>
  )
}

@connect(state => ({
  repairingAllowanceItem: state._repairingAllowanceItem,
}))
export default class RepairingAllowanceItemViewDetail extends Component {
  onTabChange = key => {
    this.setState({ tabKey: key })
  }
  render() {
    // eslint-disable-next-line max-len

    const repairingAllowanceItem = this.props.repairingAllowanceItem
    const { id } = repairingAllowanceItem
    const {} = repairingAllowanceItem

    const owner = { type: '_repairingAllowanceItem', id }

    const tabList = []

    const contentList = {}

    return (
      <PageHeaderLayout
        title="修补贴项目总览"
        content={summaryOf(this.props.repairingAllowanceItem)}
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
