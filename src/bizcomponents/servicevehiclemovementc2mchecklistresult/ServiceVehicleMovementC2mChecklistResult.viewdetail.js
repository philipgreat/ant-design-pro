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
import styles from './ServiceVehicleMovementC2mChecklistResult.viewdetail.less'
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

const summaryOf = serviceVehicleMovementC2mChecklistResult => {
  return (
    <DescriptionList className={styles.headerList} size="small" col="4">
      <Description term="序号">
        {serviceVehicleMovementC2mChecklistResult.id}
      </Description>
      <Description term="检查结果">
        {serviceVehicleMovementC2mChecklistResult.checkResult}
      </Description>
      <Description term="检验结果的评论">
        {serviceVehicleMovementC2mChecklistResult.checkResultComments}
      </Description>
      <Description term="创建时间">
        {moment(serviceVehicleMovementC2mChecklistResult.createTime).format(
          'YYYY-MM-DD'
        )}
      </Description>
      <Description term="图1">
        {serviceVehicleMovementC2mChecklistResult.image1}
      </Description>
      <Description term="图2">
        {serviceVehicleMovementC2mChecklistResult.image2}
      </Description>
      <Description term="图3">
        {serviceVehicleMovementC2mChecklistResult.image3}
      </Description>
      <Description term="图4">
        {serviceVehicleMovementC2mChecklistResult.image4}
      </Description>
      <Description term="图5">
        {serviceVehicleMovementC2mChecklistResult.image5}
      </Description>
    </DescriptionList>
  )
}

@connect(state => ({
  serviceVehicleMovementC2mChecklistResult:
    state._serviceVehicleMovementC2mChecklistResult,
}))
export default class ServiceVehicleMovementC2mChecklistResultViewDetail extends Component {
  onTabChange = key => {
    this.setState({ tabKey: key })
  }
  render() {
    // eslint-disable-next-line max-len

    const serviceVehicleMovementC2mChecklistResult = this.props
      .serviceVehicleMovementC2mChecklistResult
    const { id } = serviceVehicleMovementC2mChecklistResult
    const {} = serviceVehicleMovementC2mChecklistResult

    const owner = { type: '_serviceVehicleMovementC2mChecklistResult', id }

    const tabList = []

    const contentList = {}

    return (
      <PageHeaderLayout
        title="收车检车结果总览"
        content={summaryOf(this.props.serviceVehicleMovementC2mChecklistResult)}
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
