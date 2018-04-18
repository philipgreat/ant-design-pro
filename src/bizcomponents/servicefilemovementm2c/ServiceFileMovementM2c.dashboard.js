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
import styles from './ServiceFileMovementM2c.dashboard.less'
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
const summaryOf = serviceFileMovementM2c => {
  return (
    <DescriptionList className={styles.headerList} size="small" col="4">
      <Description term="ID">{serviceFileMovementM2c.id}</Description>
      <Description term="服务状态">
        {serviceFileMovementM2c.serviceStatus}
      </Description>
      <Description term="服务概述">
        {serviceFileMovementM2c.serviceSummary}
      </Description>
      <Description term="开始时间">
        {moment(serviceFileMovementM2c.startTime).format('YYYY-MM-DD')}
      </Description>
      <Description term="经度">{serviceFileMovementM2c.longitude}</Description>
      <Description term="纬度">{serviceFileMovementM2c.latitude}</Description>
      <Description term="最后更新时间">
        {moment(serviceFileMovementM2c.lastUpdateTime).format('YYYY-MM-DD')}
      </Description>
      <Description term="交接检查码">
        {serviceFileMovementM2c.transferVerifyCode}
      </Description>
      <Description term="服务类型">
        {serviceFileMovementM2c.movementPurpose}
      </Description>
      <Description term="联系人姓名">
        {serviceFileMovementM2c.contactName}
      </Description>
      <Description term="联系人手机">
        {serviceFileMovementM2c.contactMobileNumber}
      </Description>
      <Description term="通知日期时间">
        {moment(serviceFileMovementM2c.notifyDatetime).format('YYYY-MM-DD')}
      </Description>
      <Description term="通知地址">
        {serviceFileMovementM2c.notifyAddress}
      </Description>
      <Description term="备注">
        {serviceFileMovementM2c.notifyComment}
      </Description>
      <Description term="交接检查结果">
        {serviceFileMovementM2c.handoverResult}
      </Description>
      <Description term="交接检查备注">
        {serviceFileMovementM2c.handoverResultComment}
      </Description>
    </DescriptionList>
  )
}

@connect(state => ({
  serviceFileMovementM2c: state._serviceFileMovementM2c,
}))
export default class ServiceFileMovementM2cDashboard extends Component {
  render() {
    // eslint-disable-next-line max-len
    const {
      id,
      handOverChecklistResultCount,
    } = this.props.serviceFileMovementM2c

    return (
      <PageHeaderLayout
        title="还件服务总览"
        content={summaryOf(this.props.serviceFileMovementM2c)}
        wrapperClassName={styles.advancedForm}
      >
        <div>
          <Row gutter={24}>
            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="交接检查结果"
                action={
                  <Tooltip title="交接检查结果">
                    <Icon type="info-circle-o" />
                  </Tooltip>
                }
                total={numeral(handOverChecklistResultCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link
                  to={`/serviceFileMovementM2c/${id}/list/handOverChecklistResultList`}
                >
                  <Icon
                    type="profile"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link
                  to={`/serviceFileMovementM2c/${id}/list/handOverChecklistResultCreateForm`}
                >
                  <Icon
                    type="plus-circle-o"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link
                  to={`/serviceFileMovementM2c/${id}/list/handOverChecklistResultList`}
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
