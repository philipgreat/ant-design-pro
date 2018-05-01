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
import styles from './CompanyDiscount.viewdetail.less'
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

const summaryOf = companyDiscount => {
  return (
    <DescriptionList className={styles.headerList} size="small" col="4">
      <Description term="ID">{companyDiscount.id}</Description>
      <Description term="代理费全免">
        {companyDiscount.allFreeDiscount ? '是' : '否'}
      </Description>
      <Description term="优惠金额">
        {companyDiscount.directDiscountValue}
      </Description>
      <Description term="创建时间">
        {moment(companyDiscount.createTime).format('YYYY-MM-DD')}
      </Description>
    </DescriptionList>
  )
}

@connect(state => ({
  companyDiscount: state._companyDiscount,
}))
export default class CompanyDiscountViewDetail extends Component {
  onTabChange = key => {
    this.setState({ tabKey: key })
  }
  render() {
    // eslint-disable-next-line max-len

    const companyDiscount = this.props.companyDiscount
    const { id } = companyDiscount
    const {} = companyDiscount

    const owner = { type: '_companyDiscount', id }

    const tabList = []

    const contentList = {}

    return (
      <PageHeaderLayout
        title="公司折扣总览"
        content={summaryOf(this.props.companyDiscount)}
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
