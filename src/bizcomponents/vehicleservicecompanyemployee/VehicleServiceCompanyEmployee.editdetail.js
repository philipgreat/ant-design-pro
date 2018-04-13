

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
    const {ServiceCompanyAccountEditTable} = GlobalComponents;
    const {RepairingCompanyAccountEditTable} = GlobalComponents;
    const {InsuranceServiceAccountEditTable} = GlobalComponents;
    const {InspectionStationAccountEditTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    const { id, serviceOrderFilterCount, employeeDrivingLicenseCount, vehicleInspectionOrderServiceLogCount, serviceVehicleMovementC2mCount, serviceVehicleMovementM2mAsResponsibleWorkerCount, serviceVehicleMovementM2mAsDriverCount, serviceVehicleMovementM2mAsReceiverCount, serviceVehicleMovementM2cCount, serviceFileMovementC2mCount, serviceFileMovementM2mAsResponsibleWorkerCount, serviceFileMovementM2mAsSenderCount, serviceFileMovementM2mAsReceiverCount, serviceFileMovementM2cCount, serviceInsuranceForInspectionCount, serviceVehicleInspectionCount, serviceFileInspectionCount, serviceVehicleRepairingCount, serviceCompanyAccountCount, repairingCompanyAccountCount, insuranceServiceAccountCount, inspectionStationAccountCount } = this.props.vehicleServiceCompanyEmployee
    const { serviceOrderFilterList, employeeDrivingLicenseList, vehicleInspectionOrderServiceLogList, serviceVehicleMovementC2mList, serviceVehicleMovementM2mListAsResponsibleWorker, serviceVehicleMovementM2mListAsDriver, serviceVehicleMovementM2mListAsReceiver, serviceVehicleMovementM2cList, serviceFileMovementC2mList, serviceFileMovementM2mListAsResponsibleWorker, serviceFileMovementM2mListAsSender, serviceFileMovementM2mListAsReceiver, serviceFileMovementM2cList, serviceInsuranceForInspectionList, serviceVehicleInspectionList, serviceFileInspectionList, serviceVehicleRepairingList, serviceCompanyAccountList, repairingCompanyAccountList, insuranceServiceAccountList, inspectionStationAccountList } = this.props.vehicleServiceCompanyEmployee
    
    const owner = { type: '_vehicleServiceCompanyEmployee', id }
    return (

      <PageHeaderLayout
        title="商户员工总览"
        content="商户员工总览"
        wrapperClassName={styles.advancedForm}
      >


		<Card title="服务单状态类型列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <ServiceOrderFilterEditTable data={serviceOrderFilterList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="员工驾驶证列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <EmployeeDrivingLicenseEditTable data={employeeDrivingLicenseList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="年检订单执行日志列表" className={styles.card} bordered={false}>
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

		<Card title="保险服务列表" className={styles.card} bordered={false}>
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

		<Card title="维修服务列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <ServiceVehicleRepairingEditTable data={serviceVehicleRepairingList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="服务商户对账单列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <ServiceCompanyAccountEditTable data={serviceCompanyAccountList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="修理厂对账单列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <RepairingCompanyAccountEditTable data={repairingCompanyAccountList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="保险服务对账单列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <InsuranceServiceAccountEditTable data={insuranceServiceAccountList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="检测站对账单列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <InspectionStationAccountEditTable data={inspectionStationAccountList} owner={owner} {...this.props} />
          </Form>
        </Card>

 
      </PageHeaderLayout>
    )
  }
}



