

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
    const {ReportVehicleInspectionReportEditTable} = GlobalComponents;
    const {RepairingQuotationEditTable} = GlobalComponents;
    const {RepairingAllowanceItemEditTable} = GlobalComponents;
    const {VehicleRepairingPaymentEditTable} = GlobalComponents;
    const {VehicleRepairingReportEditTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    const { id, reportVehicleInspectionReportCount, repairingQuotationCount, repairingAllowanceItemCount, vehicleRepairingPaymentCount, vehicleRepairingReportCount } = this.props.serviceVehicleRepairing
    const { reportVehicleInspectionReportList, repairingQuotationList, repairingAllowanceItemList, vehicleRepairingPaymentList, vehicleRepairingReportList } = this.props.serviceVehicleRepairing
    
    const owner = { type: '_serviceVehicleRepairing', id }
    return (

      <PageHeaderLayout
        title="修车服务总览"
        content="修车服务总览"
        wrapperClassName={styles.advancedForm}
      >


		<Card title="车辆检验报告列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <ReportVehicleInspectionReportEditTable data={reportVehicleInspectionReportList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="维修报价列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <RepairingQuotationEditTable data={repairingQuotationList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="修补贴项目列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <RepairingAllowanceItemEditTable data={repairingAllowanceItemList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="修理付款列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <VehicleRepairingPaymentEditTable data={vehicleRepairingPaymentList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="车辆维修报告列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <VehicleRepairingReportEditTable data={vehicleRepairingReportList} owner={owner} {...this.props} />
          </Form>
        </Card>

 
      </PageHeaderLayout>
    )
  }
}



