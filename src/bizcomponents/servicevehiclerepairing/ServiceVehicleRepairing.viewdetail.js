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
import styles from './ServiceVehicleRepairing.viewdetail.less'
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

const summaryOf = serviceVehicleRepairing => {
  return (
    <DescriptionList className={styles.headerList} size="small" col="4">
      <Description term="序号">{serviceVehicleRepairing.id}</Description>
      <Description term="服务状态">
        {serviceVehicleRepairing.serviceStatus}
      </Description>
      <Description term="拒收原因">
        {serviceVehicleRepairing.rejectComments}
      </Description>
      <Description term="开始时间">
        {moment(serviceVehicleRepairing.startTime).format('YYYY-MM-DD')}
      </Description>
      <Description term="最后的位置">
        {serviceVehicleRepairing.lastLocation}
      </Description>
      <Description term="最后更新时间">
        {moment(serviceVehicleRepairing.lastUpdateTime).format('YYYY-MM-DD')}
      </Description>
    </DescriptionList>
  )
}

@connect(state => ({
  serviceVehicleRepairing: state._serviceVehicleRepairing,
}))
export default class ServiceVehicleRepairingViewDetail extends Component {
  state = {
    tabKey: `repairingQuotationList`,
    stepDirection: 'horizontal',
  }

  onTabChange = key => {
    this.setState({ tabKey: key })
  }
  render() {
    const { RepairingQuotationViewTable } = GlobalComponents

    // eslint-disable-next-line max-len

    const serviceVehicleRepairing = this.props.serviceVehicleRepairing
    const { id, repairingQuotationCount } = serviceVehicleRepairing
    const { repairingQuotationList } = serviceVehicleRepairing

    const owner = { type: '_serviceVehicleRepairing', id }

    const tabList = [
      {
        key: 'repairingQuotationList',
        tab: `维修报价(${repairingQuotationCount})`,
      },
    ]

    const contentList = {
      repairingQuotationList: (
        <RepairingQuotationViewTable
          data={repairingQuotationList}
          owner={owner}
          {...this.props}
        />
      ),
    }

    return (
      <PageHeaderLayout
        title="修车服务总览"
        content={summaryOf(this.props.serviceVehicleRepairing)}
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
