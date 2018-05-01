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
import styles from './ProductPrice.viewdetail.less'
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

const summaryOf = productPrice => {
  return (
    <DescriptionList className={styles.headerList} size="small" col="4">
      <Description term="ID">{productPrice.id}</Description>
      <Description term="车辆类型">{productPrice.vehicleType}</Description>
      <Description term="新能源车">
        {productPrice.greenVehicle ? '是' : '否'}
      </Description>
      <Description term="年检费用">{productPrice.inspectionPrice}</Description>
      <Description term="二级维护价格">
        {productPrice.secondLevelMaintenancePrice}
      </Description>
      <Description term="等级评定价格">
        {productPrice.gradeEstimationPrice}
      </Description>
      <Description term="代办服务费用">
        {productPrice.agentServicePrice}
      </Description>
      <Description term="折扣价格代理服务">
        {productPrice.discountAgentServicePrice}
      </Description>
      <Description term="描述">{productPrice.description}</Description>
    </DescriptionList>
  )
}

@connect(state => ({
  productPrice: state._productPrice,
}))
export default class ProductPriceViewDetail extends Component {
  onTabChange = key => {
    this.setState({ tabKey: key })
  }
  render() {
    // eslint-disable-next-line max-len

    const productPrice = this.props.productPrice
    const { id } = productPrice
    const {} = productPrice

    const owner = { type: '_productPrice', id }

    const tabList = []

    const contentList = {}

    return (
      <PageHeaderLayout
        title="产品价格总览"
        content={summaryOf(this.props.productPrice)}
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
