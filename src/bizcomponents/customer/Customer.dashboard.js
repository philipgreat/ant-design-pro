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
import styles from './Customer.dashboard.less'
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
const summaryOf = customer => {
  return (
    <DescriptionList className={styles.headerList} size="small" col="4">
      <Description term="序号">{customer.id}</Description>
      <Description term="客户昵称">{customer.nickName}</Description>
      <Description term="头像">{customer.logoImage}</Description>
      <Description term="WeixinOpenid">{customer.weixinOpenid}</Description>
      <Description term="WeixinAppid">{customer.weixinAppid}</Description>
    </DescriptionList>
  )
}

@connect(state => ({
  customer: state._customer,
}))
export default class CustomerDashboard extends Component {
  render() {
    // eslint-disable-next-line max-len
    const {
      id,
      vehicleInfoCount,
      vehicleInspectionOrderCount,
    } = this.props.customer

    return (
      <PageHeaderLayout
        title="客户总览"
        content={summaryOf(this.props.customer)}
        wrapperClassName={styles.advancedForm}
      >
        <div>
          <Row gutter={24}>
            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="车辆信息"
                action={
                  <Tooltip title="车辆信息">
                    <Icon type="info-circle-o" />
                  </Tooltip>
                }
                total={numeral(vehicleInfoCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link to={`/customer/${id}/list/vehicleInfoList`}>
                  <Icon
                    type="profile"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link to={`/customer/${id}/list/vehicleInfoCreateForm`}>
                  <Icon
                    type="plus-circle-o"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link to={`/customer/${id}/list/vehicleInfoList`}>
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
                title="上线检测订单"
                action={
                  <Tooltip title="上线检测订单">
                    <Icon type="info-circle-o" />
                  </Tooltip>
                }
                total={numeral(vehicleInspectionOrderCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link to={`/customer/${id}/list/vehicleInspectionOrderList`}>
                  <Icon
                    type="profile"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link
                  to={`/customer/${id}/list/vehicleInspectionOrderCreateForm`}
                >
                  <Icon
                    type="plus-circle-o"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link to={`/customer/${id}/list/vehicleInspectionOrderList`}>
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
