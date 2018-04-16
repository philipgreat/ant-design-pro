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
import styles from './ServiceVehicleRepairing.editdetail.less'
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
  serviceVehicleRepairing: state._serviceVehicleRepairing,
}))
export default class ServiceVehicleRepairingEditDetail extends Component {
  render() {
    const { RepairingAllowanceItemEditTable } = GlobalComponents
    const { VehicleRepairingPaymentEditTable } = GlobalComponents

    // eslint-disable-next-line max-len
    const {
      id,
      repairingAllowanceItemCount,
      vehicleRepairingPaymentCount,
    } = this.props.serviceVehicleRepairing
    const {
      repairingAllowanceItemList,
      vehicleRepairingPaymentList,
    } = this.props.serviceVehicleRepairing

    const owner = { type: '_serviceVehicleRepairing', id }
    return (
      <PageHeaderLayout
        title="维修服务总览"
        content="维修服务总览"
        wrapperClassName={styles.advancedForm}
      >
        <Card
          title="车辆维修补贴项列表"
          className={styles.card}
          bordered={false}
        >
          <Form layout="vertical" hideRequiredMark>
            <RepairingAllowanceItemEditTable
              data={repairingAllowanceItemList}
              owner={owner}
              {...this.props}
            />
          </Form>
        </Card>

        <Card title="支付维修订单列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <VehicleRepairingPaymentEditTable
              data={vehicleRepairingPaymentList}
              owner={owner}
              {...this.props}
            />
          </Form>
        </Card>
      </PageHeaderLayout>
    )
  }
}
