

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
import styles from './VehicleServiceCompany.editdetail.less'
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
  vehicleServiceCompany: state._vehicleServiceCompany,
}))
export default class VehicleServiceCompanyEditDetail extends Component {
  render() {
    const {VehicleServiceCompanyBusinessScopeEditTable} = GlobalComponents;
    const {VehicleServiceCompanyDispatcherEditTable} = GlobalComponents;
    const {VehicleServiceCompanyEmployeeEditTable} = GlobalComponents;
    const {ServiceVehicleMovementC2mEditTable} = GlobalComponents;
    const {ServiceVehicleMovementM2cEditTable} = GlobalComponents;
    const {ServiceFileMovementC2mEditTable} = GlobalComponents;
    const {ServiceFileMovementM2cEditTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    const { id, vehicleServiceCompanyBusinessScopeCount, vehicleServiceCompanyDispatcherCount, vehicleServiceCompanyEmployeeCount, serviceVehicleMovementC2mCount, serviceVehicleMovementM2cCount, serviceFileMovementC2mCount, serviceFileMovementM2cCount } = this.props.vehicleServiceCompany
    const { vehicleServiceCompanyBusinessScopeList, vehicleServiceCompanyDispatcherList, vehicleServiceCompanyEmployeeList, serviceVehicleMovementC2mList, serviceVehicleMovementM2cList, serviceFileMovementC2mList, serviceFileMovementM2cList } = this.props.vehicleServiceCompany
    
    const owner = { type: '_vehicleServiceCompany', id }
    return (

      <PageHeaderLayout
        title="商户管理总览"
        content="商户管理总览"
        wrapperClassName={styles.advancedForm}
      >


		<Card title="服务提供商服务范围管理列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <VehicleServiceCompanyBusinessScopeEditTable data={vehicleServiceCompanyBusinessScopeList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="派单管理列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <VehicleServiceCompanyDispatcherEditTable data={vehicleServiceCompanyDispatcherList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="服务提供商员工管理列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <VehicleServiceCompanyEmployeeEditTable data={vehicleServiceCompanyEmployeeList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="收车服务列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <ServiceVehicleMovementC2mEditTable data={serviceVehicleMovementC2mList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="还车服务列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <ServiceVehicleMovementM2cEditTable data={serviceVehicleMovementM2cList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="收件服务列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <ServiceFileMovementC2mEditTable data={serviceFileMovementC2mList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="还件服务列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <ServiceFileMovementM2cEditTable data={serviceFileMovementM2cList} owner={owner} {...this.props} />
          </Form>
        </Card>

 
      </PageHeaderLayout>
    )
  }
}



