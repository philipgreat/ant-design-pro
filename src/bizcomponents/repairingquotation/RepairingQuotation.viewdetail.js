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
import styles from './RepairingQuotation.viewdetail.less'
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

const summaryOf = repairingQuotation => {
  return (
    <DescriptionList className={styles.headerList} size="small" col="4">
      <Description term="ID">{repairingQuotation.id}</Description>
      <Description term="维修报价描述">
        {repairingQuotation.repairingQuotationDescription}
      </Description>
      <Description term="维修报价图片1">
        {repairingQuotation.repairingQuotationImage1}
      </Description>
      <Description term="维修报价图2">
        {repairingQuotation.repairingQuotationImage2}
      </Description>
      <Description term="维修报价图片3">
        {repairingQuotation.repairingQuotationImage3}
      </Description>
      <Description term="维修报价图片4">
        {repairingQuotation.repairingQuotationImage4}
      </Description>
      <Description term="维修报价图片5">
        {repairingQuotation.repairingQuotationImage5}
      </Description>
      <Description term="维修报价总金额">
        {repairingQuotation.repairingQuotationTotalAmount}
      </Description>
    </DescriptionList>
  )
}

@connect(state => ({
  repairingQuotation: state._repairingQuotation,
}))
export default class RepairingQuotationViewDetail extends Component {
  onTabChange = key => {
    this.setState({ tabKey: key })
  }
  render() {
    // eslint-disable-next-line max-len

    const repairingQuotation = this.props.repairingQuotation
    const { id } = repairingQuotation
    const {} = repairingQuotation

    const owner = { type: '_repairingQuotation', id }

    const tabList = []

    const contentList = {}

    return (
      <PageHeaderLayout
        title="维修报价总览"
        content={summaryOf(this.props.repairingQuotation)}
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
