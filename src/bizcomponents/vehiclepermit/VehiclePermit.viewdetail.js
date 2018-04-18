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
import styles from './VehiclePermit.viewdetail.less'
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

const summaryOf = vehiclePermit => {
  return (
    <DescriptionList className={styles.headerList} size="small" col="4">
      <Description term="ID">{vehiclePermit.id}</Description>
      <Description term="姓名">{vehiclePermit.holderName}</Description>
      <Description term="驾驶证号码">{vehiclePermit.licenseNumber}</Description>
      <Description term="有效期至">
        {moment(vehiclePermit.expirationDate).format('YYYY-MM-DD')}
      </Description>
      <Description term="图1">{vehiclePermit.image1}</Description>
      <Description term="图2">{vehiclePermit.image2}</Description>
      <Description term="图3">{vehiclePermit.image3}</Description>
      <Description term="图4">{vehiclePermit.image4}</Description>
      <Description term="图5">{vehiclePermit.image5}</Description>
    </DescriptionList>
  )
}

@connect(state => ({
  vehiclePermit: state._vehiclePermit,
}))
export default class VehiclePermitViewDetail extends Component {
  onTabChange = key => {
    this.setState({ tabKey: key })
  }
  render() {
    // eslint-disable-next-line max-len

    const vehiclePermit = this.props.vehiclePermit
    const { id } = vehiclePermit
    const {} = vehiclePermit

    const owner = { type: '_vehiclePermit', id }

    const tabList = []

    const contentList = {}

    return (
      <PageHeaderLayout
        title="行驶证总览"
        content={summaryOf(this.props.vehiclePermit)}
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
