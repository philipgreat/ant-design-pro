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
import styles from './Contract.viewdetail.less'
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

const summaryOf = contract => {
  return (
    <DescriptionList className={styles.headerList} size="small" col="4">
      <Description term="ID">{contract.id}</Description>
      <Description term="开始日期">
        {moment(contract.startDate).format('YYYY-MM-DD')}
      </Description>
      <Description term="结束日期">
        {moment(contract.endDate).format('YYYY-MM-DD')}
      </Description>
    </DescriptionList>
  )
}

@connect(state => ({
  contract: state._contract,
}))
export default class ContractViewDetail extends Component {
  state = {
    tabKey: `servicePriceList`,
    stepDirection: 'horizontal',
  }

  onTabChange = key => {
    this.setState({ tabKey: key })
  }
  render() {
    const { ServicePriceViewTable } = GlobalComponents

    // eslint-disable-next-line max-len

    const contract = this.props.contract
    const { id, servicePriceCount } = contract
    const { servicePriceList } = contract

    const owner = { type: '_contract', id }

    const tabList = [
      { key: 'servicePriceList', tab: `合同价格(${servicePriceCount})` },
    ]

    const contentList = {
      servicePriceList: (
        <ServicePriceViewTable
          data={servicePriceList}
          owner={owner}
          {...this.props}
        />
      ),
    }

    return (
      <PageHeaderLayout
        title="合同总览"
        content={summaryOf(this.props.contract)}
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
