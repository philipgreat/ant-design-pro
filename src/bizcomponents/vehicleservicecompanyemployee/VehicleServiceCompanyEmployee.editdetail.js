

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
import styles from './VehicleServiceCompanyEmployee.editdetail.less'
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
  vehicleServiceCompanyEmployee: state._vehicleServiceCompanyEmployee,
}))
export default class VehicleServiceCompanyEmployeeEditDetail extends Component {
  render() {
    const {ServiceOrderFilterEditTable} = GlobalComponents;
    const {EmployeeDrivingLicenseEditTable} = GlobalComponents;
    const {CompanyEmployeeMessageEditTable} = GlobalComponents;
    const {VehicleInspectionOrderServiceLogEditTable} = GlobalComponents;
    const {ServiceVehicleMovementC2mEditTable} = GlobalComponents;
    const {ServiceVehicleMovementM2mEditTable} = GlobalComponents;
    const {ServiceVehicleMovementM2cEditTable} = GlobalComponents;
    const {ServiceFileMovementC2mEditTable} = GlobalComponents;
    const {ServiceFileMovementM2mEditTable} = GlobalComponents;
    const {ServiceFileMovementM2cEditTable} = GlobalComponents;
    const {ServiceInsuranceForInspectionEditTable} = GlobalComponents;
    const {ServiceVehicleInspectionEditTable} = GlobalComponents;
    const {ServiceFileInspectionEditTable} = GlobalComponents;
    const {ServiceVehicleRepairingEditTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    const { id, serviceOrderFilterCount, employeeDrivingLicenseCount, companyEmployeeMessageAsSenderCount, companyEmployeeMessageAsReceiverCount, vehicleInspectionOrderServiceLogCount, serviceVehicleMovementC2mCount, serviceVehicleMovementM2mAsResponsibleWorkerCount, serviceVehicleMovementM2mAsDriverCount, serviceVehicleMovementM2mAsReceiverCount, serviceVehicleMovementM2cCount, serviceFileMovementC2mCount, serviceFileMovementM2mAsResponsibleWorkerCount, serviceFileMovementM2mAsSenderCount, serviceFileMovementM2mAsReceiverCount, serviceFileMovementM2cCount, serviceInsuranceForInspectionCount, serviceVehicleInspectionCount, serviceFileInspectionCount, serviceVehicleRepairingCount } = this.props.vehicleServiceCompanyEmployee
    const { serviceOrderFilterList, employeeDrivingLicenseList, companyEmployeeMessageListAsSender, companyEmployeeMessageListAsReceiver, vehicleInspectionOrderServiceLogList, serviceVehicleMovementC2mList, serviceVehicleMovementM2mListAsResponsibleWorker, serviceVehicleMovementM2mListAsDriver, serviceVehicleMovementM2mListAsReceiver, serviceVehicleMovementM2cList, serviceFileMovementC2mList, serviceFileMovementM2mListAsResponsibleWorker, serviceFileMovementM2mListAsSender, serviceFileMovementM2mListAsReceiver, serviceFileMovementM2cList, serviceInsuranceForInspectionList, serviceVehicleInspectionList, serviceFileInspectionList, serviceVehicleRepairingList } = this.props.vehicleServiceCompanyEmployee
    
    const owner = { type: '_vehicleServiceCompanyEmployee', id }
    return (

      <PageHeaderLayout
        title="服务提供商员工管理总览"
        content="服务提供商员工管理总览"
        wrapperClassName={styles.advancedForm}
      >


		<Card title="服务订单过滤器列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <ServiceOrderFilterEditTable data={serviceOrderFilterList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="员工驾驶证列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <EmployeeDrivingLicenseEditTable data={employeeDrivingLicenseList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="消息管理列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <CompanyEmployeeMessageEditTable data={companyEmployeeMessageListAsSender} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="车辆检测服务订单日志列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <VehicleInspectionOrderServiceLogEditTable data={vehicleInspectionOrderServiceLogList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="收车服务列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <ServiceVehicleMovementC2mEditTable data={serviceVehicleMovementC2mList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="移车服务列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <ServiceVehicleMovementM2mEditTable data={serviceVehicleMovementM2mListAsResponsibleWorker} owner={owner} {...this.props} />
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

		<Card title="移件服务列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <ServiceFileMovementM2mEditTable data={serviceFileMovementM2mListAsResponsibleWorker} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="还件服务列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <ServiceFileMovementM2cEditTable data={serviceFileMovementM2cList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="保险增值服务列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <ServiceInsuranceForInspectionEditTable data={serviceInsuranceForInspectionList} owner={owner} {...this.props} />
          </Form>
        </Card>

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

		<Card title="修车服务列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <ServiceVehicleRepairingEditTable data={serviceVehicleRepairingList} owner={owner} {...this.props} />
          </Form>
        </Card>

 
      </PageHeaderLayout>
    )
  }
}



