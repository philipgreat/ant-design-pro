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
import styles from './ServiceVehicleMovementM2c.dashboard.less'
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
const summaryOf = serviceVehicleMovementM2c => {
  return (
    <DescriptionList className={styles.headerList} size="small" col="4">
      <Description term="序号">{serviceVehicleMovementM2c.id}</Description>
      <Description term="服务状态">
        {serviceVehicleMovementM2c.serviceStatus}
      </Description>
      <Description term="拒收原因">
        {serviceVehicleMovementM2c.rejectComments}
      </Description>
      <Description term="拒收凭证1">
        {serviceVehicleMovementM2c.rejectEvidence1}
      </Description>
      <Description term="拒收凭证2">
        {serviceVehicleMovementM2c.rejectEvidence2}
      </Description>
      <Description term="拒收凭证3">
        {serviceVehicleMovementM2c.rejectEvidence3}
      </Description>
      <Description term="拒收凭证4">
        {serviceVehicleMovementM2c.rejectEvidence4}
      </Description>
      <Description term="拒收凭证5">
        {serviceVehicleMovementM2c.rejectEvidence5}
      </Description>
      <Description term="开始时间">
        {moment(serviceVehicleMovementM2c.startTime).format('YYYY-MM-DD')}
      </Description>
      <Description term="最后的位置">
        {serviceVehicleMovementM2c.lastLocation}
      </Description>
      <Description term="最后更新时间">
        {moment(serviceVehicleMovementM2c.lastUpdateTime).format('YYYY-MM-DD')}
      </Description>
      <Description term="移动目的">
        {serviceVehicleMovementM2c.movementPurpose}
      </Description>
      <Description term="联系人姓名">
        {serviceVehicleMovementM2c.contactName}
      </Description>
      <Description term="联系手机号码">
        {serviceVehicleMovementM2c.contactMobileNumber}
      </Description>
    </DescriptionList>
  )
}

@connect(state => ({
  serviceVehicleMovementM2c: state._serviceVehicleMovementM2c,
}))
export default class ServiceVehicleMovementM2cDashboard extends Component {
  render() {
    // eslint-disable-next-line max-len
    const {
      id,
      serviceVehicleMovementM2cChecklistResultCount,
    } = this.props.serviceVehicleMovementM2c

    return (
      <PageHeaderLayout
        title="还车服务总览"
        content={summaryOf(this.props.serviceVehicleMovementM2c)}
        wrapperClassName={styles.advancedForm}
      >
        <div>
          <Row gutter={24}>
            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="还车服务检查结果"
                action={
                  <Tooltip title="还车服务检查结果">
                    <Icon type="info-circle-o" />
                  </Tooltip>
                }
                total={numeral(
                  serviceVehicleMovementM2cChecklistResultCount
                ).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link
                  to={`/serviceVehicleMovementM2c/${id}/list/serviceVehicleMovementM2cChecklistResultList`}
                >
                  <Icon
                    type="profile"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link
                  to={`/serviceVehicleMovementM2c/${id}/list/serviceVehicleMovementM2cChecklistResultCreateForm`}
                >
                  <Icon
                    type="plus-circle-o"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link
                  to={`/serviceVehicleMovementM2c/${id}/list/serviceVehicleMovementM2cChecklistResultList`}
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
