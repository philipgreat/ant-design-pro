

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
import styles from './AvailableInsurance.editdetail.less'
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
  availableInsurance: state._availableInsurance,
}))
export default class AvailableInsuranceEditDetail extends Component {
  render() {
    const {VehicleInspectionInsuranceOrderEditTable} = GlobalComponents;
    const {ServiceInsuranceForInspectionEditTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    const { id, vehicleInspectionInsuranceOrderCount, serviceInsuranceForInspectionCount } = this.props.availableInsurance
    const { vehicleInspectionInsuranceOrderList, serviceInsuranceForInspectionList } = this.props.availableInsurance
    
    const owner = { type: '_availableInsurance', id }
    return (

      <PageHeaderLayout
        title="保险增值服务总览"
        content="保险增值服务总览"
        wrapperClassName={styles.advancedForm}
      >


		<Card title="车辆检测保险服务订单列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <VehicleInspectionInsuranceOrderEditTable data={vehicleInspectionInsuranceOrderList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="保险增值服务列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <ServiceInsuranceForInspectionEditTable data={serviceInsuranceForInspectionList} owner={owner} {...this.props} />
          </Form>
        </Card>

 
      </PageHeaderLayout>
    )
  }
}



