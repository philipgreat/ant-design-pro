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
import styles from './City.viewdetail.less'
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

const summaryOf = city => {
  return (
    <DescriptionList className={styles.headerList} size="small" col="4">
      <Description term="ID">{city.id}</Description>
      <Description term="名称">{city.name}</Description>
    </DescriptionList>
  )
}

@connect(state => ({
  city: state._city,
}))
export default class CityViewDetail extends Component {
  state = {
    tabKey: `productPriceList`,
    stepDirection: 'horizontal',
  }

  onTabChange = key => {
    this.setState({ tabKey: key })
  }
  render() {
    const { ProductPriceViewTable } = GlobalComponents
    const { VehicleServiceCompanyViewTable } = GlobalComponents
    const { InspectionStationViewTable } = GlobalComponents
    const { VehicleInspectionOrderViewTable } = GlobalComponents

    // eslint-disable-next-line max-len

    const city = this.props.city
    const {
      id,
      productPriceCount,
      vehicleServiceCompanyCount,
      inspectionStationCount,
      vehicleInspectionOrderCount,
    } = city
    const {
      productPriceList,
      vehicleServiceCompanyList,
      inspectionStationList,
      vehicleInspectionOrderList,
    } = city

    const owner = { type: '_city', id }

    const tabList = [
      { key: 'productPriceList', tab: `产品价格(${productPriceCount})` },
      {
        key: 'vehicleServiceCompanyList',
        tab: `商户(${vehicleServiceCompanyCount})`,
      },
      {
        key: 'inspectionStationList',
        tab: `检测站(${inspectionStationCount})`,
      },
      {
        key: 'vehicleInspectionOrderList',
        tab: `上线检测订单(${vehicleInspectionOrderCount})`,
      },
    ]

    const contentList = {
      productPriceList: (
        <ProductPriceViewTable
          data={productPriceList}
          owner={owner}
          {...this.props}
        />
      ),

      vehicleServiceCompanyList: (
        <VehicleServiceCompanyViewTable
          data={vehicleServiceCompanyList}
          owner={owner}
          {...this.props}
        />
      ),

      inspectionStationList: (
        <InspectionStationViewTable
          data={inspectionStationList}
          owner={owner}
          {...this.props}
        />
      ),

      vehicleInspectionOrderList: (
        <VehicleInspectionOrderViewTable
          data={vehicleInspectionOrderList}
          owner={owner}
          {...this.props}
        />
      ),
    }

    return (
      <PageHeaderLayout
        title="城市总览"
        content={summaryOf(this.props.city)}
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
