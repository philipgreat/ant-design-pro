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
    const { ContractEditTable } = GlobalComponents
    const { ServiceCompanyAuthenticationInfoEditTable } = GlobalComponents
    const { VehicleInspectionPlateNumberPatternEditTable } = GlobalComponents
    const { FileInspectionPlateNumberPatternEditTable } = GlobalComponents
    const { VehicleServiceCompanyBusinessScopeEditTable } = GlobalComponents
    const { CompanyQrcodePromotionRecordEditTable } = GlobalComponents
    const { VehicleServiceCompanyDispatcherEditTable } = GlobalComponents
    const { CompanyDiscountEditTable } = GlobalComponents
    const { VehicleServiceCompanyEmployeeEditTable } = GlobalComponents
    const { VehicleInspectionOrderEditTable } = GlobalComponents
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
    const { ServiceCompanyAccountEditTable } = GlobalComponents
    const { RepairingCompanyAccountEditTable } = GlobalComponents
    const { InsuranceServiceAccountEditTable } = GlobalComponents
    const { InspectionStationAccountEditTable } = GlobalComponents

    // eslint-disable-next-line max-len
    const {
      id,
      contractCount,
      serviceCompanyAuthenticationInfoCount,
      vehicleInspectionPlateNumberPatternCount,
      fileInspectionPlateNumberPatternCount,
      vehicleServiceCompanyBusinessScopeCount,
      companyQrcodePromotionRecordCount,
      vehicleServiceCompanyDispatcherCount,
      companyDiscountCount,
      vehicleServiceCompanyEmployeeCount,
      vehicleInspectionOrderCount,
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
      serviceCompanyAccountCount,
      repairingCompanyAccountCount,
      insuranceServiceAccountCount,
      inspectionStationAccountCount,
    } = this.props.vehicleServiceCompany
    const {
      contractList,
      serviceCompanyAuthenticationInfoList,
      vehicleInspectionPlateNumberPatternList,
      fileInspectionPlateNumberPatternList,
      vehicleServiceCompanyBusinessScopeList,
      companyQrcodePromotionRecordList,
      vehicleServiceCompanyDispatcherList,
      companyDiscountList,
      vehicleServiceCompanyEmployeeList,
      vehicleInspectionOrderList,
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
      serviceCompanyAccountList,
      repairingCompanyAccountList,
      insuranceServiceAccountList,
      inspectionStationAccountList,
    } = this.props.vehicleServiceCompany

    const owner = { type: '_vehicleServiceCompany', id }
    return (
      <PageHeaderLayout
        title="商户总览"
        content="商户总览"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="合同列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <ContractEditTable
              data={contractList}
              owner={owner}
              {...this.props}
            />
          </Form>
        </Card>

        <Card title="商户认证信息列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <ServiceCompanyAuthenticationInfoEditTable
              data={serviceCompanyAuthenticationInfoList}
              owner={owner}
              {...this.props}
            />
          </Form>
        </Card>

        <Card
          title="上线检测支持的车牌号码类别列表"
          className={styles.card}
          bordered={false}
        >
          <Form layout="vertical" hideRequiredMark>
            <VehicleInspectionPlateNumberPatternEditTable
              data={vehicleInspectionPlateNumberPatternList}
              owner={owner}
              {...this.props}
            />
          </Form>
        </Card>

        <Card
          title="6年免检检测支持的车牌号码类别列表"
          className={styles.card}
          bordered={false}
        >
          <Form layout="vertical" hideRequiredMark>
            <FileInspectionPlateNumberPatternEditTable
              data={fileInspectionPlateNumberPatternList}
              owner={owner}
              {...this.props}
            />
          </Form>
        </Card>

        <Card title="商户服务范围列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <VehicleServiceCompanyBusinessScopeEditTable
              data={vehicleServiceCompanyBusinessScopeList}
              owner={owner}
              {...this.props}
            />
          </Form>
        </Card>

        <Card
          title="公司二维码推广记录列表"
          className={styles.card}
          bordered={false}
        >
          <Form layout="vertical" hideRequiredMark>
            <CompanyQrcodePromotionRecordEditTable
              data={companyQrcodePromotionRecordList}
              owner={owner}
              {...this.props}
            />
          </Form>
        </Card>

        <Card title="商户派单列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <VehicleServiceCompanyDispatcherEditTable
              data={vehicleServiceCompanyDispatcherList}
              owner={owner}
              {...this.props}
            />
          </Form>
        </Card>

        <Card title="公司折扣列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <CompanyDiscountEditTable
              data={companyDiscountList}
              owner={owner}
              {...this.props}
            />
          </Form>
        </Card>

        <Card title="商户员工列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <VehicleServiceCompanyEmployeeEditTable
              data={vehicleServiceCompanyEmployeeList}
              owner={owner}
              {...this.props}
            />
          </Form>
        </Card>

        <Card title="年检订单列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <VehicleInspectionOrderEditTable
              data={vehicleInspectionOrderList}
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

        <Card
          title="服务商户对账单列表"
          className={styles.card}
          bordered={false}
        >
          <Form layout="vertical" hideRequiredMark>
            <ServiceCompanyAccountEditTable
              data={serviceCompanyAccountList}
              owner={owner}
              {...this.props}
            />
          </Form>
        </Card>

        <Card title="修理厂对账单列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <RepairingCompanyAccountEditTable
              data={repairingCompanyAccountList}
              owner={owner}
              {...this.props}
            />
          </Form>
        </Card>

        <Card
          title="保险服务对账单列表"
          className={styles.card}
          bordered={false}
        >
          <Form layout="vertical" hideRequiredMark>
            <InsuranceServiceAccountEditTable
              data={insuranceServiceAccountList}
              owner={owner}
              {...this.props}
            />
          </Form>
        </Card>

        <Card title="检测站对账单列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <InspectionStationAccountEditTable
              data={inspectionStationAccountList}
              owner={owner}
              {...this.props}
            />
          </Form>
        </Card>
      </PageHeaderLayout>
    )
  }
}
