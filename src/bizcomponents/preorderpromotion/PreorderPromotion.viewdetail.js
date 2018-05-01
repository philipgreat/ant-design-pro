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
import styles from './PreorderPromotion.viewdetail.less'
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

const summaryOf = preorderPromotion => {
  return (
    <DescriptionList className={styles.headerList} size="small" col="4">
      <Description term="ID">{preorderPromotion.id}</Description>
      <Description term="优惠信息">
        {preorderPromotion.promotionMessage}
      </Description>
      <Description term="提前天数">
        {preorderPromotion.preorderDays}
      </Description>
      <Description term="优惠金额">
        {preorderPromotion.discountAmount}
      </Description>
      <Description term="开始日期">
        {moment(preorderPromotion.startDate).format('YYYY-MM-DD')}
      </Description>
      <Description term="结束日期">
        {moment(preorderPromotion.endDate).format('YYYY-MM-DD')}
      </Description>
    </DescriptionList>
  )
}

@connect(state => ({
  preorderPromotion: state._preorderPromotion,
}))
export default class PreorderPromotionViewDetail extends Component {
  onTabChange = key => {
    this.setState({ tabKey: key })
  }
  render() {
    // eslint-disable-next-line max-len

    const preorderPromotion = this.props.preorderPromotion
    const { id } = preorderPromotion
    const {} = preorderPromotion

    const owner = { type: '_preorderPromotion', id }

    const tabList = []

    const contentList = {}

    return (
      <PageHeaderLayout
        title="提前下单优惠总览"
        content={summaryOf(this.props.preorderPromotion)}
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
