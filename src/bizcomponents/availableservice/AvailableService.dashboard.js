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
import styles from './AvailableService.dashboard.less'
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
const summaryOf = availableService => {
  return (
    <DescriptionList className={styles.headerList} size="small" col="4">
      <Description term="序号">{availableService.id}</Description>
      <Description term="服务名称">{availableService.serviceName}</Description>
      <Description term="服务代码">{availableService.serviceKey}</Description>
      <Description term="服务描述">
        {availableService.serviceDescription}
      </Description>
    </DescriptionList>
  )
}

@connect(state => ({
  availableService: state._availableService,
}))
export default class AvailableServiceDashboard extends Component {
  render() {
    // eslint-disable-next-line max-len
    const {
      id,
      vehicleRepairingAllowanceCount,
      vehicleServiceCompanyBusinessScopeCount,
      companyEmployeeMessageCount,
      vehicleInspectionOrderServiceLogCount,
    } = this.props.availableService

    return (
      <PageHeaderLayout
        title="服务范围总览"
        content={summaryOf(this.props.availableService)}
        wrapperClassName={styles.advancedForm}
      >
        <div>
          <Row gutter={24}>
            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="汽车修理平台补贴"
                action={
                  <Tooltip title="汽车修理平台补贴">
                    <Icon type="info-circle-o" />
                  </Tooltip>
                }
                total={numeral(vehicleRepairingAllowanceCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link
                  to={`/availableService/${id}/list/vehicleRepairingAllowanceList`}
                >
                  <Icon
                    type="profile"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link
                  to={`/availableService/${id}/list/vehicleRepairingAllowanceCreateForm`}
                >
                  <Icon
                    type="plus-circle-o"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link
                  to={`/availableService/${id}/list/vehicleRepairingAllowanceList`}
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
                  to={`/availableService/${id}/list/vehicleServiceCompanyBusinessScopeList`}
                >
                  <Icon
                    type="profile"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link
                  to={`/availableService/${id}/list/vehicleServiceCompanyBusinessScopeCreateForm`}
                >
                  <Icon
                    type="plus-circle-o"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link
                  to={`/availableService/${id}/list/vehicleServiceCompanyBusinessScopeList`}
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
                title="消息管理"
                action={
                  <Tooltip title="消息管理">
                    <Icon type="info-circle-o" />
                  </Tooltip>
                }
                total={numeral(companyEmployeeMessageCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link
                  to={`/availableService/${id}/list/companyEmployeeMessageList`}
                >
                  <Icon
                    type="profile"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link
                  to={`/availableService/${id}/list/companyEmployeeMessageCreateForm`}
                >
                  <Icon
                    type="plus-circle-o"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link
                  to={`/availableService/${id}/list/companyEmployeeMessageList`}
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
                title="车辆检测服务订单日志"
                action={
                  <Tooltip title="车辆检测服务订单日志">
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
                  to={`/availableService/${id}/list/vehicleInspectionOrderServiceLogList`}
                >
                  <Icon
                    type="profile"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link
                  to={`/availableService/${id}/list/vehicleInspectionOrderServiceLogCreateForm`}
                >
                  <Icon
                    type="plus-circle-o"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link
                  to={`/availableService/${id}/list/vehicleInspectionOrderServiceLogList`}
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
