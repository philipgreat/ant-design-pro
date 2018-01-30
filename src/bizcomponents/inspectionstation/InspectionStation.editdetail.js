

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
import styles from './InspectionStation.editdetail.less'
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
  inspectionStation: state._inspectionStation,
}))
export default class InspectionStationEditDetail extends Component {
  render() {
    const {ServiceVehicleInspectionEditTable} = GlobalComponents;
    const {ServiceFileInspectionEditTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    const { id, serviceVehicleInspectionCount, serviceFileInspectionCount } = this.props.inspectionStation
    const { serviceVehicleInspectionList, serviceFileInspectionList } = this.props.inspectionStation
    
    const owner = { type: '_inspectionStation', id }
    return (

      <PageHeaderLayout
        title="检测站总览"
        content="检测站总览"
        wrapperClassName={styles.advancedForm}
      >


		<Card title="车辆上线检测列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <ServiceVehicleInspectionEditTable data={serviceVehicleInspectionList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="6年免检服务列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <ServiceFileInspectionEditTable data={serviceFileInspectionList} owner={owner} {...this.props} />
          </Form>
        </Card>

 
      </PageHeaderLayout>
    )
  }
}



