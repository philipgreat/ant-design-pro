

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
import styles from './ServiceVehicleInspection.editdetail.less'
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
  serviceVehicleInspection: state._serviceVehicleInspection,
}))
export default class ServiceVehicleInspectionEditDetail extends Component {
  render() {
    const {ReportVehicleInspectionReportEditTable} = GlobalComponents;
    const {InspectionRepairAllowanceItemsEditTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    const { id, reportVehicleInspectionReportCount, inspectionRepairAllowanceItemsCount } = this.props.serviceVehicleInspection
    const { reportVehicleInspectionReportList, inspectionRepairAllowanceItemsList } = this.props.serviceVehicleInspection
    
    const owner = { type: '_serviceVehicleInspection', id }
    return (

      <PageHeaderLayout
        title="车辆上线检测总览"
        content="车辆上线检测总览"
        wrapperClassName={styles.advancedForm}
      >


		<Card title="车辆检验报告列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <ReportVehicleInspectionReportEditTable data={reportVehicleInspectionReportList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="检测修理建议项列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <InspectionRepairAllowanceItemsEditTable data={inspectionRepairAllowanceItemsList} owner={owner} {...this.props} />
          </Form>
        </Card>

 
      </PageHeaderLayout>
    )
  }
}



