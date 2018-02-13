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
import styles from './AvailableService.editdetail.less'
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
  availableService: state._availableService,
}))
export default class AvailableServiceEditDetail extends Component {
  render() {
    const { ServicePriceEditTable } = GlobalComponents
    const { VehicleRepairingAllowanceEditTable } = GlobalComponents
    const { VehicleServiceCompanyBusinessScopeEditTable } = GlobalComponents
    const { CompanyEmployeeMessageEditTable } = GlobalComponents
    const { VehicleInspectionOrderServiceLogEditTable } = GlobalComponents

    // eslint-disable-next-line max-len
    const {
      id,
      servicePriceCount,
      vehicleRepairingAllowanceCount,
      vehicleServiceCompanyBusinessScopeCount,
      companyEmployeeMessageCount,
      vehicleInspectionOrderServiceLogCount,
    } = this.props.availableService
    const {
      servicePriceList,
      vehicleRepairingAllowanceList,
      vehicleServiceCompanyBusinessScopeList,
      companyEmployeeMessageList,
      vehicleInspectionOrderServiceLogList,
    } = this.props.availableService

    const owner = { type: '_availableService', id }
    return (
      <PageHeaderLayout
        title="服务范围总览"
        content="服务范围总览"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="服务价格列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <ServicePriceEditTable
              data={servicePriceList}
              owner={owner}
              {...this.props}
            />
          </Form>
        </Card>

        <Card
          title="汽车修理平台补贴列表"
          className={styles.card}
          bordered={false}
        >
          <Form layout="vertical" hideRequiredMark>
            <VehicleRepairingAllowanceEditTable
              data={vehicleRepairingAllowanceList}
              owner={owner}
              {...this.props}
            />
          </Form>
        </Card>

        <Card
          title="服务提供商服务范围管理列表"
          className={styles.card}
          bordered={false}
        >
          <Form layout="vertical" hideRequiredMark>
            <VehicleServiceCompanyBusinessScopeEditTable
              data={vehicleServiceCompanyBusinessScopeList}
              owner={owner}
              {...this.props}
            />
          </Form>
        </Card>

        <Card title="消息管理列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <CompanyEmployeeMessageEditTable
              data={companyEmployeeMessageList}
              owner={owner}
              {...this.props}
            />
          </Form>
        </Card>

        <Card
          title="车辆检测服务订单日志列表"
          className={styles.card}
          bordered={false}
        >
          <Form layout="vertical" hideRequiredMark>
            <VehicleInspectionOrderServiceLogEditTable
              data={vehicleInspectionOrderServiceLogList}
              owner={owner}
              {...this.props}
            />
          </Form>
        </Card>
      </PageHeaderLayout>
    )
  }
}
