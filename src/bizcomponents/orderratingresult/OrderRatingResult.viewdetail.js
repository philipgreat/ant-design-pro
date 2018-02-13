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
import styles from './OrderRatingResult.viewdetail.less'
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

const summaryOf = orderRatingResult => {
  return (
    <DescriptionList className={styles.headerList} size="small" col="4">
      <Description term="ID">{orderRatingResult.id}</Description>
      <Description term="评分名称">{orderRatingResult.ratingName}</Description>
      <Description term="评分结果">
        {orderRatingResult.ratingResult}
      </Description>
    </DescriptionList>
  )
}

@connect(state => ({
  orderRatingResult: state._orderRatingResult,
}))
export default class OrderRatingResultViewDetail extends Component {
  onTabChange = key => {
    this.setState({ tabKey: key })
  }
  render() {
    // eslint-disable-next-line max-len

    const orderRatingResult = this.props.orderRatingResult
    const { id } = orderRatingResult
    const {} = orderRatingResult

    const owner = { type: '_orderRatingResult', id }

    const tabList = []

    const contentList = {}

    return (
      <PageHeaderLayout
        title="订单评级结果总览"
        content={summaryOf(this.props.orderRatingResult)}
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
