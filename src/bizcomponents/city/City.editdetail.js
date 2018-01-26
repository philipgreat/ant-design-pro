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
} from 'antd'
import { Link, Route, Redirect, Switch } from 'dva/router'
import numeral from 'numeral'
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
import styles from './City.editdetail.less'
import GlobalComponents from '../../custcomponents'

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

@connect(state => ({
  city: state._city,
}))
export default class CityEditDetail extends Component {
  render() {
    const { ProductPriceEditTable } = GlobalComponents
    const { VehicleServiceCompanyEditTable } = GlobalComponents
    const { InspectionStationEditTable } = GlobalComponents
    const { VehicleInspectionOrderEditTable } = GlobalComponents

    // eslint-disable-next-line max-len
    const {
      id,
      productPriceCount,
      vehicleServiceCompanyCount,
      inspectionStationCount,
      vehicleInspectionOrderCount,
    } = this.props.city
    const {
      productPriceList,
      vehicleServiceCompanyList,
      inspectionStationList,
      vehicleInspectionOrderList,
    } = this.props.city

    const owner = { type: '_city', id }
    return (
      <PageHeaderLayout
        title="城市总览"
        content="城市总览"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="产品价格列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <ProductPriceEditTable
              data={productPriceList}
              owner={owner}
              {...this.props}
            />
          </Form>
        </Card>

        <Card title="商户管理列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <VehicleServiceCompanyEditTable
              data={vehicleServiceCompanyList}
              owner={owner}
              {...this.props}
            />
          </Form>
        </Card>

        <Card title="检测站列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <InspectionStationEditTable
              data={inspectionStationList}
              owner={owner}
              {...this.props}
            />
          </Form>
        </Card>

        <Card title="上线检测订单列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <VehicleInspectionOrderEditTable
              data={vehicleInspectionOrderList}
              owner={owner}
              {...this.props}
            />
          </Form>
        </Card>
      </PageHeaderLayout>
    )
  }
}
