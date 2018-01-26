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
import styles from './VehicleServiceCompany.dashboard.less'
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
const summaryOf = vehicleServiceCompany => {
  return (
    <DescriptionList className={styles.headerList} size="small" col="4">
      <Description term="序号">{vehicleServiceCompany.id}</Description>
      <Description term="公司名称">
        {vehicleServiceCompany.companyName}
      </Description>
      <Description term="服务状态">
        {vehicleServiceCompany.operatingStatus}
      </Description>
      <Description term="所在地址">
        {vehicleServiceCompany.addressDetail}
      </Description>
      <Description term="到店服务">
        {vehicleServiceCompany.availableStoreService ? '是' : '否'}
      </Description>
      <Description term="上门服务">
        {vehicleServiceCompany.availableHomeService ? '是' : '否'}
      </Description>
      <Description term="营业时间">
        {vehicleServiceCompany.openingTime}
      </Description>
      <Description term="经度">{vehicleServiceCompany.longitude}</Description>
      <Description term="纬度">{vehicleServiceCompany.latitude}</Description>
    </DescriptionList>
  )
}

@connect(state => ({
  vehicleServiceCompany: state._vehicleServiceCompany,
}))
export default class VehicleServiceCompanyDashboard extends Component {
  render() {
    // eslint-disable-next-line max-len
    const {
      id,
      vehicleServiceCompanyBusinessScopeCount,
      vehicleServiceCompanyDispatcherCount,
      vehicleServiceCompanyEmployeeCount,
      serviceVehicleMovementC2mCount,
      serviceVehicleMovementM2cCount,
      serviceFileMovementC2mCount,
      serviceFileMovementM2cCount,
    } = this.props.vehicleServiceCompany

    return (
      <PageHeaderLayout
        title="商户管理总览"
        content={summaryOf(this.props.vehicleServiceCompany)}
        wrapperClassName={styles.advancedForm}
      >
        <div>
          <Row gutter={24}>
            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="服务提供商服务范围管理"
                action={
                  <Tooltip title="服务提供商服务范围管理">
                    <Icon type="info-circle-o" />
                  </Tooltip>
                }
                total={numeral(vehicleServiceCompanyBusinessScopeCount).format(
                  '0,0'
                )}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link
                  to={`/vehicleServiceCompany/${id}/list/vehicleServiceCompanyBusinessScopeList`}
                >
                  <Icon
                    type="profile"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link
                  to={`/vehicleServiceCompany/${id}/list/vehicleServiceCompanyBusinessScopeCreateForm`}
                >
                  <Icon
                    type="plus-circle-o"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link
                  to={`/vehicleServiceCompany/${id}/list/vehicleServiceCompanyBusinessScopeList`}
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
                title="派单管理"
                action={
                  <Tooltip title="派单管理">
                    <Icon type="info-circle-o" />
                  </Tooltip>
                }
                total={numeral(vehicleServiceCompanyDispatcherCount).format(
                  '0,0'
                )}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link
                  to={`/vehicleServiceCompany/${id}/list/vehicleServiceCompanyDispatcherList`}
                >
                  <Icon
                    type="profile"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link
                  to={`/vehicleServiceCompany/${id}/list/vehicleServiceCompanyDispatcherCreateForm`}
                >
                  <Icon
                    type="plus-circle-o"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link
                  to={`/vehicleServiceCompany/${id}/list/vehicleServiceCompanyDispatcherList`}
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
                title="服务提供商员工管理"
                action={
                  <Tooltip title="服务提供商员工管理">
                    <Icon type="info-circle-o" />
                  </Tooltip>
                }
                total={numeral(vehicleServiceCompanyEmployeeCount).format(
                  '0,0'
                )}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link
                  to={`/vehicleServiceCompany/${id}/list/vehicleServiceCompanyEmployeeList`}
                >
                  <Icon
                    type="profile"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link
                  to={`/vehicleServiceCompany/${id}/list/vehicleServiceCompanyEmployeeCreateForm`}
                >
                  <Icon
                    type="plus-circle-o"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link
                  to={`/vehicleServiceCompany/${id}/list/vehicleServiceCompanyEmployeeList`}
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
                  to={`/vehicleServiceCompany/${id}/list/serviceVehicleMovementC2mList`}
                >
                  <Icon
                    type="profile"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link
                  to={`/vehicleServiceCompany/${id}/list/serviceVehicleMovementC2mCreateForm`}
                >
                  <Icon
                    type="plus-circle-o"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link
                  to={`/vehicleServiceCompany/${id}/list/serviceVehicleMovementC2mList`}
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
                  to={`/vehicleServiceCompany/${id}/list/serviceVehicleMovementM2cList`}
                >
                  <Icon
                    type="profile"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link
                  to={`/vehicleServiceCompany/${id}/list/serviceVehicleMovementM2cCreateForm`}
                >
                  <Icon
                    type="plus-circle-o"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link
                  to={`/vehicleServiceCompany/${id}/list/serviceVehicleMovementM2cList`}
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
                  to={`/vehicleServiceCompany/${id}/list/serviceFileMovementC2mList`}
                >
                  <Icon
                    type="profile"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link
                  to={`/vehicleServiceCompany/${id}/list/serviceFileMovementC2mCreateForm`}
                >
                  <Icon
                    type="plus-circle-o"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link
                  to={`/vehicleServiceCompany/${id}/list/serviceFileMovementC2mList`}
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
                  to={`/vehicleServiceCompany/${id}/list/serviceFileMovementM2cList`}
                >
                  <Icon
                    type="profile"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link
                  to={`/vehicleServiceCompany/${id}/list/serviceFileMovementM2cCreateForm`}
                >
                  <Icon
                    type="plus-circle-o"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link
                  to={`/vehicleServiceCompany/${id}/list/serviceFileMovementM2cList`}
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
