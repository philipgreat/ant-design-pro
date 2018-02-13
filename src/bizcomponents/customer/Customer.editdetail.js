

import React, { Component } from 'react'
import { connect } from 'dva'
import { Form,Button, Row, Col, Icon, Card, Tabs, Table, Radio, DatePicker, Tooltip, Menu, Dropdown } from 'antd'
import { Link, Route, Redirect, Switch } from 'dva/router'
import numeral from 'numeral'
import {
  ChartCard, yuan, MiniArea, MiniBar, MiniProgress, Field, Bar, Pie, TimelineChart,

} from '../../components/Charts'
import Trend from '../../components/Trend'
import NumberInfo from '../../components/NumberInfo'
import { getTimeDistance } from '../../utils/utils'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import styles from './Customer.editdetail.less'
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
  customer: state._customer,
}))
export default class CustomerEditDetail extends Component {
  render() {
    const {VehicleInfoEditTable} = GlobalComponents;
    const {VehicleInspectionOrderEditTable} = GlobalComponents;
    const {OrderDiscountCouponEditTable} = GlobalComponents;
    const {VehicleInspectionOrderCouponEditTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    const { id, vehicleInfoCount, vehicleInspectionOrderCount, orderDiscountCouponCount, vehicleInspectionOrderCouponCount } = this.props.customer
    const { vehicleInfoList, vehicleInspectionOrderList, orderDiscountCouponList, vehicleInspectionOrderCouponList } = this.props.customer
    
    const owner = { type: '_customer', id }
    return (

      <PageHeaderLayout
        title="客户总览"
        content="客户总览"
        wrapperClassName={styles.advancedForm}
      >


		<Card title="车辆信息列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <VehicleInfoEditTable data={vehicleInfoList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="上线检测订单列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <VehicleInspectionOrderEditTable data={vehicleInspectionOrderList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="订单的折扣券列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <OrderDiscountCouponEditTable data={orderDiscountCouponList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="优惠券列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <VehicleInspectionOrderCouponEditTable data={vehicleInspectionOrderCouponList} owner={owner} {...this.props} />
          </Form>
        </Card>

 
      </PageHeaderLayout>
    )
  }
}



