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
import styles from './VehicleInspectionOrder.editdetail.less'
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
  vehicleInspectionOrder: state._vehicleInspectionOrder,
}))
export default class VehicleInspectionOrderEditDetail extends Component {
  render() {
    const { VehicleInspectionInsuranceOrderEditTable } = GlobalComponents
    const { VehicleInspectionOrderChargeEditTable } = GlobalComponents
    const { VehicleInspectionOrderServiceLogEditTable } = GlobalComponents
    const { VehicleInspectionOrderPaymentEditTable } = GlobalComponents
    const { HandOverChecklistItemEditTable } = GlobalComponents
    const { ServiceVehicleMovementC2mEditTable } = GlobalComponents
    const { ServiceVehicleMovementM2mEditTable } = GlobalComponents
    const { ServiceVehicleMovementM2cEditTable } = GlobalComponents
    const { ServiceFileMovementC2mEditTable } = GlobalComponents
    const { ServiceFileMovementM2mEditTable } = GlobalComponents
    const { ServiceFileMovementM2cEditTable } = GlobalComponents
    const { ServiceInsuranceForInspectionEditTable } = GlobalComponents
    const { ServiceVehicleInspectionEditTable } = GlobalComponents
    const { ServiceFileInspectionEditTable } = GlobalComponents
    const { ServiceVehicleRepairingEditTable } = GlobalComponents
    const { OrderReviewResultEditTable } = GlobalComponents
    const { OrderRatingResultEditTable } = GlobalComponents
    const { OrderDiscountCouponEditTable } = GlobalComponents
    const { VehicleInspectionOrderCouponEditTable } = GlobalComponents

    // eslint-disable-next-line max-len
    const {
      id,
      vehicleInspectionInsuranceOrderCount,
      vehicleInspectionOrderChargeCount,
      vehicleInspectionOrderServiceLogCount,
      vehicleInspectionOrderPaymentCount,
      handOverChecklistItemCount,
      serviceVehicleMovementC2mCount,
      serviceVehicleMovementM2mCount,
      serviceVehicleMovementM2cCount,
      serviceFileMovementC2mCount,
      serviceFileMovementM2mCount,
      serviceFileMovementM2cCount,
      serviceInsuranceForInspectionCount,
      serviceVehicleInspectionCount,
      serviceFileInspectionCount,
      serviceVehicleRepairingCount,
      orderReviewResultCount,
      orderRatingResultCount,
      orderDiscountCouponCount,
      vehicleInspectionOrderCouponCount,
    } = this.props.vehicleInspectionOrder
    const {
      vehicleInspectionInsuranceOrderList,
      vehicleInspectionOrderChargeList,
      vehicleInspectionOrderServiceLogList,
      vehicleInspectionOrderPaymentList,
      handOverChecklistItemList,
      serviceVehicleMovementC2mList,
      serviceVehicleMovementM2mList,
      serviceVehicleMovementM2cList,
      serviceFileMovementC2mList,
      serviceFileMovementM2mList,
      serviceFileMovementM2cList,
      serviceInsuranceForInspectionList,
      serviceVehicleInspectionList,
      serviceFileInspectionList,
      serviceVehicleRepairingList,
      orderReviewResultList,
      orderRatingResultList,
      orderDiscountCouponList,
      vehicleInspectionOrderCouponList,
    } = this.props.vehicleInspectionOrder

    const owner = { type: '_vehicleInspectionOrder', id }
    return (
      <PageHeaderLayout
        title="年检订单总览"
        content="年检订单总览"
        wrapperClassName={styles.advancedForm}
      >
        <Card
          title="车辆上线检测保险订单列表"
          className={styles.card}
          bordered={false}
        >
          <Form layout="vertical" hideRequiredMark>
            <VehicleInspectionInsuranceOrderEditTable
              data={vehicleInspectionInsuranceOrderList}
              owner={owner}
              {...this.props}
            />
          </Form>
        </Card>

        <Card
          title="车辆检验订单费用列表"
          className={styles.card}
          bordered={false}
        >
          <Form layout="vertical" hideRequiredMark>
            <VehicleInspectionOrderChargeEditTable
              data={vehicleInspectionOrderChargeList}
              owner={owner}
              {...this.props}
            />
          </Form>
        </Card>

        <Card
          title="年检订单执行日志列表"
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

        <Card title="年检订单支付列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <VehicleInspectionOrderPaymentEditTable
              data={vehicleInspectionOrderPaymentList}
              owner={owner}
              {...this.props}
            />
          </Form>
        </Card>

        <Card title="交接检查项列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <HandOverChecklistItemEditTable
              data={handOverChecklistItemList}
              owner={owner}
              {...this.props}
            />
          </Form>
        </Card>

        <Card title="收车服务列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <ServiceVehicleMovementC2mEditTable
              data={serviceVehicleMovementC2mList}
              owner={owner}
              {...this.props}
            />
          </Form>
        </Card>

        <Card title="移车服务列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <ServiceVehicleMovementM2mEditTable
              data={serviceVehicleMovementM2mList}
              owner={owner}
              {...this.props}
            />
          </Form>
        </Card>

        <Card title="还车服务列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <ServiceVehicleMovementM2cEditTable
              data={serviceVehicleMovementM2cList}
              owner={owner}
              {...this.props}
            />
          </Form>
        </Card>

        <Card title="收件服务列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <ServiceFileMovementC2mEditTable
              data={serviceFileMovementC2mList}
              owner={owner}
              {...this.props}
            />
          </Form>
        </Card>

        <Card title="移件服务列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <ServiceFileMovementM2mEditTable
              data={serviceFileMovementM2mList}
              owner={owner}
              {...this.props}
            />
          </Form>
        </Card>

        <Card title="还件服务列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <ServiceFileMovementM2cEditTable
              data={serviceFileMovementM2cList}
              owner={owner}
              {...this.props}
            />
          </Form>
        </Card>

        <Card title="保险服务列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <ServiceInsuranceForInspectionEditTable
              data={serviceInsuranceForInspectionList}
              owner={owner}
              {...this.props}
            />
          </Form>
        </Card>

        <Card title="车辆上线检测列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <ServiceVehicleInspectionEditTable
              data={serviceVehicleInspectionList}
              owner={owner}
              {...this.props}
            />
          </Form>
        </Card>

        <Card title="6年免检服务列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <ServiceFileInspectionEditTable
              data={serviceFileInspectionList}
              owner={owner}
              {...this.props}
            />
          </Form>
        </Card>

        <Card title="维修服务列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <ServiceVehicleRepairingEditTable
              data={serviceVehicleRepairingList}
              owner={owner}
              {...this.props}
            />
          </Form>
        </Card>

        <Card title="订单评论结果列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <OrderReviewResultEditTable
              data={orderReviewResultList}
              owner={owner}
              {...this.props}
            />
          </Form>
        </Card>

        <Card title="订单评分结果列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <OrderRatingResultEditTable
              data={orderRatingResultList}
              owner={owner}
              {...this.props}
            />
          </Form>
        </Card>

        <Card title="优惠券列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <OrderDiscountCouponEditTable
              data={orderDiscountCouponList}
              owner={owner}
              {...this.props}
            />
          </Form>
        </Card>

        <Card
          title="优惠券使用记录列表"
          className={styles.card}
          bordered={false}
        >
          <Form layout="vertical" hideRequiredMark>
            <VehicleInspectionOrderCouponEditTable
              data={vehicleInspectionOrderCouponList}
              owner={owner}
              {...this.props}
            />
          </Form>
        </Card>
      </PageHeaderLayout>
    )
  }
}
