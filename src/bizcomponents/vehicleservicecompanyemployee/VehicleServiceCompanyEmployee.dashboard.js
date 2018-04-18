import React, { Component } from 'react'
import { connect } from 'dva'
import moment from 'moment'
import {
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
import styles from './VehicleServiceCompanyEmployee.dashboard.less'
import DescriptionList from '../../components/DescriptionList'
const { Description } = DescriptionList
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
const summaryOf = vehicleServiceCompanyEmployee => {
  return (
    <DescriptionList className={styles.headerList} size="small" col="4">
      <Description term="ID">{vehicleServiceCompanyEmployee.id}</Description>
      <Description term="员工姓名">
        {vehicleServiceCompanyEmployee.employeeName}
      </Description>
      <Description term="证件照片">
        {vehicleServiceCompanyEmployee.profileImage}
      </Description>
      <Description term="商户名称">
        {vehicleServiceCompanyEmployee.companyName}
      </Description>
      <Description term="手机号码">
        {vehicleServiceCompanyEmployee.mobileNumber}
      </Description>
      <Description term="性别">
        {vehicleServiceCompanyEmployee.gender}
      </Description>
      <Description term="工作状态">
        {vehicleServiceCompanyEmployee.availableState}
      </Description>
      <Description term="无犯罪记录证明">
        {vehicleServiceCompanyEmployee.innocentEvidenceImage}
      </Description>
      <Description term="身份证号码">
        {vehicleServiceCompanyEmployee.identityCardNumber}
      </Description>
      <Description term="是否可以移车">
        {vehicleServiceCompanyEmployee.availableMoveCar ? '是' : '否'}
      </Description>
      <Description term="是否可以检车">
        {vehicleServiceCompanyEmployee.availableInspectionCar ? '是' : '否'}
      </Description>
      <Description term="是否可以修车">
        {vehicleServiceCompanyEmployee.availableRepairCar ? '是' : '否'}
      </Description>
      <Description term="当前状态">
        {vehicleServiceCompanyEmployee.currentStatus}
      </Description>
    </DescriptionList>
  )
}

@connect(state => ({
  vehicleServiceCompanyEmployee: state._vehicleServiceCompanyEmployee,
}))
export default class VehicleServiceCompanyEmployeeDashboard extends Component {
  render() {
    // eslint-disable-next-line max-len
    const {
      id,
      serviceOrderFilterCount,
      employeeDrivingLicenseCount,
      vehicleInspectionOrderServiceLogCount,
      serviceVehicleMovementC2mCount,
      serviceVehicleMovementM2mAsResponsibleWorkerCount,
      serviceVehicleMovementM2mAsDriverCount,
      serviceVehicleMovementM2mAsReceiverCount,
      serviceVehicleMovementM2cCount,
      serviceFileMovementC2mCount,
      serviceFileMovementM2mAsResponsibleWorkerCount,
      serviceFileMovementM2mAsSenderCount,
      serviceFileMovementM2mAsReceiverCount,
      serviceFileMovementM2cCount,
      serviceInsuranceForInspectionCount,
      serviceVehicleInspectionCount,
      serviceFileInspectionCount,
      serviceVehicleRepairingCount,
      serviceCompanyAccountCount,
      repairingCompanyAccountCount,
      insuranceServiceAccountCount,
      inspectionStationAccountCount,
    } = this.props.vehicleServiceCompanyEmployee

    return (
      <PageHeaderLayout
        title="商户员工总览"
        content={summaryOf(this.props.vehicleServiceCompanyEmployee)}
        wrapperClassName={styles.advancedForm}
      >
        <div>
          <Row gutter={24}>
            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="服务单状态类型"
                action={
                  <Tooltip title="服务单状态类型">
                    <Icon type="info-circle-o" />
                  </Tooltip>
                }
                total={numeral(serviceOrderFilterCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link
                  to={`/vehicleServiceCompanyEmployee/${id}/list/serviceOrderFilterList`}
                >
                  <Icon
                    type="profile"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link
                  to={`/vehicleServiceCompanyEmployee/${id}/list/serviceOrderFilterCreateForm`}
                >
                  <Icon
                    type="plus-circle-o"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link
                  to={`/vehicleServiceCompanyEmployee/${id}/list/serviceOrderFilterList`}
                >
                  <Icon
                    type="line-chart"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
              </ChartCard>
            </Col>

            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="员工驾驶证"
                action={
                  <Tooltip title="员工驾驶证">
                    <Icon type="info-circle-o" />
                  </Tooltip>
                }
                total={numeral(employeeDrivingLicenseCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link
                  to={`/vehicleServiceCompanyEmployee/${id}/list/employeeDrivingLicenseList`}
                >
                  <Icon
                    type="profile"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link
                  to={`/vehicleServiceCompanyEmployee/${id}/list/employeeDrivingLicenseCreateForm`}
                >
                  <Icon
                    type="plus-circle-o"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link
                  to={`/vehicleServiceCompanyEmployee/${id}/list/employeeDrivingLicenseList`}
                >
                  <Icon
                    type="line-chart"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
              </ChartCard>
            </Col>

            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="年检订单执行日志"
                action={
                  <Tooltip title="年检订单执行日志">
                    <Icon type="info-circle-o" />
                  </Tooltip>
                }
                total={numeral(vehicleInspectionOrderServiceLogCount).format(
                  '0,0'
                )}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link
                  to={`/vehicleServiceCompanyEmployee/${id}/list/vehicleInspectionOrderServiceLogList`}
                >
                  <Icon
                    type="profile"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link
                  to={`/vehicleServiceCompanyEmployee/${id}/list/vehicleInspectionOrderServiceLogCreateForm`}
                >
                  <Icon
                    type="plus-circle-o"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link
                  to={`/vehicleServiceCompanyEmployee/${id}/list/vehicleInspectionOrderServiceLogList`}
                >
                  <Icon
                    type="line-chart"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
              </ChartCard>
            </Col>

            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="收车服务"
                action={
                  <Tooltip title="收车服务">
                    <Icon type="info-circle-o" />
                  </Tooltip>
                }
                total={numeral(serviceVehicleMovementC2mCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link
                  to={`/vehicleServiceCompanyEmployee/${id}/list/serviceVehicleMovementC2mList`}
                >
                  <Icon
                    type="profile"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link
                  to={`/vehicleServiceCompanyEmployee/${id}/list/serviceVehicleMovementC2mCreateForm`}
                >
                  <Icon
                    type="plus-circle-o"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link
                  to={`/vehicleServiceCompanyEmployee/${id}/list/serviceVehicleMovementC2mList`}
                >
                  <Icon
                    type="line-chart"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
              </ChartCard>
            </Col>

            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="移车服务"
                action={
                  <Tooltip title="移车服务">
                    <Icon type="info-circle-o" />
                  </Tooltip>
                }
                total={numeral(
                  serviceVehicleMovementM2mAsResponsibleWorkerCount
                ).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link
                  to={`/vehicleServiceCompanyEmployee/${id}/list/serviceVehicleMovementM2mListAsResponsibleWorker`}
                >
                  <Icon
                    type="profile"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link
                  to={`/vehicleServiceCompanyEmployee/${id}/list/serviceVehicleMovementM2mAsResponsibleWorkerCreateForm`}
                >
                  <Icon
                    type="plus-circle-o"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link
                  to={`/vehicleServiceCompanyEmployee/${id}/list/serviceVehicleMovementM2mListAsResponsibleWorker`}
                >
                  <Icon
                    type="line-chart"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
              </ChartCard>
            </Col>

            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="移车服务"
                action={
                  <Tooltip title="移车服务">
                    <Icon type="info-circle-o" />
                  </Tooltip>
                }
                total={numeral(serviceVehicleMovementM2mAsDriverCount).format(
                  '0,0'
                )}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link
                  to={`/vehicleServiceCompanyEmployee/${id}/list/serviceVehicleMovementM2mListAsDriver`}
                >
                  <Icon
                    type="profile"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link
                  to={`/vehicleServiceCompanyEmployee/${id}/list/serviceVehicleMovementM2mAsDriverCreateForm`}
                >
                  <Icon
                    type="plus-circle-o"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link
                  to={`/vehicleServiceCompanyEmployee/${id}/list/serviceVehicleMovementM2mListAsDriver`}
                >
                  <Icon
                    type="line-chart"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
              </ChartCard>
            </Col>

            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="移车服务"
                action={
                  <Tooltip title="移车服务">
                    <Icon type="info-circle-o" />
                  </Tooltip>
                }
                total={numeral(serviceVehicleMovementM2mAsReceiverCount).format(
                  '0,0'
                )}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link
                  to={`/vehicleServiceCompanyEmployee/${id}/list/serviceVehicleMovementM2mListAsReceiver`}
                >
                  <Icon
                    type="profile"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link
                  to={`/vehicleServiceCompanyEmployee/${id}/list/serviceVehicleMovementM2mAsReceiverCreateForm`}
                >
                  <Icon
                    type="plus-circle-o"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link
                  to={`/vehicleServiceCompanyEmployee/${id}/list/serviceVehicleMovementM2mListAsReceiver`}
                >
                  <Icon
                    type="line-chart"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
              </ChartCard>
            </Col>

            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="还车服务"
                action={
                  <Tooltip title="还车服务">
                    <Icon type="info-circle-o" />
                  </Tooltip>
                }
                total={numeral(serviceVehicleMovementM2cCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link
                  to={`/vehicleServiceCompanyEmployee/${id}/list/serviceVehicleMovementM2cList`}
                >
                  <Icon
                    type="profile"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link
                  to={`/vehicleServiceCompanyEmployee/${id}/list/serviceVehicleMovementM2cCreateForm`}
                >
                  <Icon
                    type="plus-circle-o"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link
                  to={`/vehicleServiceCompanyEmployee/${id}/list/serviceVehicleMovementM2cList`}
                >
                  <Icon
                    type="line-chart"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
              </ChartCard>
            </Col>

            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="收件服务"
                action={
                  <Tooltip title="收件服务">
                    <Icon type="info-circle-o" />
                  </Tooltip>
                }
                total={numeral(serviceFileMovementC2mCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link
                  to={`/vehicleServiceCompanyEmployee/${id}/list/serviceFileMovementC2mList`}
                >
                  <Icon
                    type="profile"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link
                  to={`/vehicleServiceCompanyEmployee/${id}/list/serviceFileMovementC2mCreateForm`}
                >
                  <Icon
                    type="plus-circle-o"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link
                  to={`/vehicleServiceCompanyEmployee/${id}/list/serviceFileMovementC2mList`}
                >
                  <Icon
                    type="line-chart"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
              </ChartCard>
            </Col>

            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="移件服务"
                action={
                  <Tooltip title="移件服务">
                    <Icon type="info-circle-o" />
                  </Tooltip>
                }
                total={numeral(
                  serviceFileMovementM2mAsResponsibleWorkerCount
                ).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link
                  to={`/vehicleServiceCompanyEmployee/${id}/list/serviceFileMovementM2mListAsResponsibleWorker`}
                >
                  <Icon
                    type="profile"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link
                  to={`/vehicleServiceCompanyEmployee/${id}/list/serviceFileMovementM2mAsResponsibleWorkerCreateForm`}
                >
                  <Icon
                    type="plus-circle-o"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link
                  to={`/vehicleServiceCompanyEmployee/${id}/list/serviceFileMovementM2mListAsResponsibleWorker`}
                >
                  <Icon
                    type="line-chart"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
              </ChartCard>
            </Col>

            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="移件服务"
                action={
                  <Tooltip title="移件服务">
                    <Icon type="info-circle-o" />
                  </Tooltip>
                }
                total={numeral(serviceFileMovementM2mAsSenderCount).format(
                  '0,0'
                )}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link
                  to={`/vehicleServiceCompanyEmployee/${id}/list/serviceFileMovementM2mListAsSender`}
                >
                  <Icon
                    type="profile"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link
                  to={`/vehicleServiceCompanyEmployee/${id}/list/serviceFileMovementM2mAsSenderCreateForm`}
                >
                  <Icon
                    type="plus-circle-o"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link
                  to={`/vehicleServiceCompanyEmployee/${id}/list/serviceFileMovementM2mListAsSender`}
                >
                  <Icon
                    type="line-chart"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
              </ChartCard>
            </Col>

            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="移件服务"
                action={
                  <Tooltip title="移件服务">
                    <Icon type="info-circle-o" />
                  </Tooltip>
                }
                total={numeral(serviceFileMovementM2mAsReceiverCount).format(
                  '0,0'
                )}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link
                  to={`/vehicleServiceCompanyEmployee/${id}/list/serviceFileMovementM2mListAsReceiver`}
                >
                  <Icon
                    type="profile"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link
                  to={`/vehicleServiceCompanyEmployee/${id}/list/serviceFileMovementM2mAsReceiverCreateForm`}
                >
                  <Icon
                    type="plus-circle-o"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link
                  to={`/vehicleServiceCompanyEmployee/${id}/list/serviceFileMovementM2mListAsReceiver`}
                >
                  <Icon
                    type="line-chart"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
              </ChartCard>
            </Col>

            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="还件服务"
                action={
                  <Tooltip title="还件服务">
                    <Icon type="info-circle-o" />
                  </Tooltip>
                }
                total={numeral(serviceFileMovementM2cCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link
                  to={`/vehicleServiceCompanyEmployee/${id}/list/serviceFileMovementM2cList`}
                >
                  <Icon
                    type="profile"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link
                  to={`/vehicleServiceCompanyEmployee/${id}/list/serviceFileMovementM2cCreateForm`}
                >
                  <Icon
                    type="plus-circle-o"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link
                  to={`/vehicleServiceCompanyEmployee/${id}/list/serviceFileMovementM2cList`}
                >
                  <Icon
                    type="line-chart"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
              </ChartCard>
            </Col>

            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="保险服务"
                action={
                  <Tooltip title="保险服务">
                    <Icon type="info-circle-o" />
                  </Tooltip>
                }
                total={numeral(serviceInsuranceForInspectionCount).format(
                  '0,0'
                )}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link
                  to={`/vehicleServiceCompanyEmployee/${id}/list/serviceInsuranceForInspectionList`}
                >
                  <Icon
                    type="profile"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link
                  to={`/vehicleServiceCompanyEmployee/${id}/list/serviceInsuranceForInspectionCreateForm`}
                >
                  <Icon
                    type="plus-circle-o"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link
                  to={`/vehicleServiceCompanyEmployee/${id}/list/serviceInsuranceForInspectionList`}
                >
                  <Icon
                    type="line-chart"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
              </ChartCard>
            </Col>

            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="车辆上线检测"
                action={
                  <Tooltip title="车辆上线检测">
                    <Icon type="info-circle-o" />
                  </Tooltip>
                }
                total={numeral(serviceVehicleInspectionCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link
                  to={`/vehicleServiceCompanyEmployee/${id}/list/serviceVehicleInspectionList`}
                >
                  <Icon
                    type="profile"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link
                  to={`/vehicleServiceCompanyEmployee/${id}/list/serviceVehicleInspectionCreateForm`}
                >
                  <Icon
                    type="plus-circle-o"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link
                  to={`/vehicleServiceCompanyEmployee/${id}/list/serviceVehicleInspectionList`}
                >
                  <Icon
                    type="line-chart"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
              </ChartCard>
            </Col>

            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="6年免检服务"
                action={
                  <Tooltip title="6年免检服务">
                    <Icon type="info-circle-o" />
                  </Tooltip>
                }
                total={numeral(serviceFileInspectionCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link
                  to={`/vehicleServiceCompanyEmployee/${id}/list/serviceFileInspectionList`}
                >
                  <Icon
                    type="profile"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link
                  to={`/vehicleServiceCompanyEmployee/${id}/list/serviceFileInspectionCreateForm`}
                >
                  <Icon
                    type="plus-circle-o"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link
                  to={`/vehicleServiceCompanyEmployee/${id}/list/serviceFileInspectionList`}
                >
                  <Icon
                    type="line-chart"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
              </ChartCard>
            </Col>

            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="维修服务"
                action={
                  <Tooltip title="维修服务">
                    <Icon type="info-circle-o" />
                  </Tooltip>
                }
                total={numeral(serviceVehicleRepairingCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link
                  to={`/vehicleServiceCompanyEmployee/${id}/list/serviceVehicleRepairingList`}
                >
                  <Icon
                    type="profile"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link
                  to={`/vehicleServiceCompanyEmployee/${id}/list/serviceVehicleRepairingCreateForm`}
                >
                  <Icon
                    type="plus-circle-o"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link
                  to={`/vehicleServiceCompanyEmployee/${id}/list/serviceVehicleRepairingList`}
                >
                  <Icon
                    type="line-chart"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
              </ChartCard>
            </Col>

            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="服务商户对账单"
                action={
                  <Tooltip title="服务商户对账单">
                    <Icon type="info-circle-o" />
                  </Tooltip>
                }
                total={numeral(serviceCompanyAccountCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link
                  to={`/vehicleServiceCompanyEmployee/${id}/list/serviceCompanyAccountList`}
                >
                  <Icon
                    type="profile"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link
                  to={`/vehicleServiceCompanyEmployee/${id}/list/serviceCompanyAccountCreateForm`}
                >
                  <Icon
                    type="plus-circle-o"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link
                  to={`/vehicleServiceCompanyEmployee/${id}/list/serviceCompanyAccountList`}
                >
                  <Icon
                    type="line-chart"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
              </ChartCard>
            </Col>

            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="修理厂对账单"
                action={
                  <Tooltip title="修理厂对账单">
                    <Icon type="info-circle-o" />
                  </Tooltip>
                }
                total={numeral(repairingCompanyAccountCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link
                  to={`/vehicleServiceCompanyEmployee/${id}/list/repairingCompanyAccountList`}
                >
                  <Icon
                    type="profile"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link
                  to={`/vehicleServiceCompanyEmployee/${id}/list/repairingCompanyAccountCreateForm`}
                >
                  <Icon
                    type="plus-circle-o"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link
                  to={`/vehicleServiceCompanyEmployee/${id}/list/repairingCompanyAccountList`}
                >
                  <Icon
                    type="line-chart"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
              </ChartCard>
            </Col>

            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="保险服务对账单"
                action={
                  <Tooltip title="保险服务对账单">
                    <Icon type="info-circle-o" />
                  </Tooltip>
                }
                total={numeral(insuranceServiceAccountCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link
                  to={`/vehicleServiceCompanyEmployee/${id}/list/insuranceServiceAccountList`}
                >
                  <Icon
                    type="profile"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link
                  to={`/vehicleServiceCompanyEmployee/${id}/list/insuranceServiceAccountCreateForm`}
                >
                  <Icon
                    type="plus-circle-o"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link
                  to={`/vehicleServiceCompanyEmployee/${id}/list/insuranceServiceAccountList`}
                >
                  <Icon
                    type="line-chart"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
              </ChartCard>
            </Col>

            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="检测站对账单"
                action={
                  <Tooltip title="检测站对账单">
                    <Icon type="info-circle-o" />
                  </Tooltip>
                }
                total={numeral(inspectionStationAccountCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link
                  to={`/vehicleServiceCompanyEmployee/${id}/list/inspectionStationAccountList`}
                >
                  <Icon
                    type="profile"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link
                  to={`/vehicleServiceCompanyEmployee/${id}/list/inspectionStationAccountCreateForm`}
                >
                  <Icon
                    type="plus-circle-o"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link
                  to={`/vehicleServiceCompanyEmployee/${id}/list/inspectionStationAccountList`}
                >
                  <Icon
                    type="line-chart"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
              </ChartCard>
            </Col>
          </Row>
        </div>
      </PageHeaderLayout>
    )
  }
}
