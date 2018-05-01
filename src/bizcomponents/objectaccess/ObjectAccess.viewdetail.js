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
import styles from './ObjectAccess.viewdetail.less'
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

const summaryOf = objectAccess => {
  return (
    <DescriptionList className={styles.headerList} size="small" col="4">
      <Description term="ID">{objectAccess.id}</Description>
      <Description term="显示名称">{objectAccess.displayName}</Description>
      <Description term="访问对象类型">{objectAccess.objectType}</Description>
      <Description term="列表1">{objectAccess.list1}</Description>
      <Description term="列表2">{objectAccess.list2}</Description>
      <Description term="列表3">{objectAccess.list3}</Description>
      <Description term="列表4">{objectAccess.list4}</Description>
      <Description term="列表5">{objectAccess.list5}</Description>
      <Description term="列表6">{objectAccess.list6}</Description>
      <Description term="列表7">{objectAccess.list7}</Description>
      <Description term="列表8">{objectAccess.list8}</Description>
      <Description term="列表9">{objectAccess.list9}</Description>
    </DescriptionList>
  )
}

@connect(state => ({
  objectAccess: state._objectAccess,
}))
export default class ObjectAccessViewDetail extends Component {
  onTabChange = key => {
    this.setState({ tabKey: key })
  }
  render() {
    // eslint-disable-next-line max-len

    const objectAccess = this.props.objectAccess
    const { id } = objectAccess
    const {} = objectAccess

    const owner = { type: '_objectAccess', id }

    const tabList = []

    const contentList = {}

    return (
      <PageHeaderLayout
        title="对象访问总览"
        content={summaryOf(this.props.objectAccess)}
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
