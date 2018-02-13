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
import styles from './Account.dashboard.less'
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
const summaryOf = account => {
  return (
    <DescriptionList className={styles.headerList} size="small" col="4">
      <Description term="ID">{account.id}</Description>
      <Description term="描述">{account.description}</Description>
    </DescriptionList>
  )
}

@connect(state => ({
  account: state._account,
}))
export default class AccountDashboard extends Component {
  render() {
    // eslint-disable-next-line max-len
    const {
      id,
      serviceCompanyAccountCount,
      repairingCompanyAccountCount,
      insuranceServiceAccountCount,
      mainOrderAccountCount,
      inspectionStationAccountCount,
    } = this.props.account

    return (
      <PageHeaderLayout
        title="对账单总览"
        content={summaryOf(this.props.account)}
        wrapperClassName={styles.advancedForm}
      >
        <div>
          <Row gutter={24}>
            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="服务公司对账单"
                action={
                  <Tooltip title="服务公司对账单">
                    <Icon type="info-circle-o" />
                  </Tooltip>
                }
                total={numeral(serviceCompanyAccountCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link to={`/account/${id}/list/serviceCompanyAccountList`}>
                  <Icon
                    type="profile"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link
                  to={`/account/${id}/list/serviceCompanyAccountCreateForm`}
                >
                  <Icon
                    type="plus-circle-o"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link to={`/account/${id}/list/serviceCompanyAccountList`}>
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
                title="修理公司对账单"
                action={
                  <Tooltip title="修理公司对账单">
                    <Icon type="info-circle-o" />
                  </Tooltip>
                }
                total={numeral(repairingCompanyAccountCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link to={`/account/${id}/list/repairingCompanyAccountList`}>
                  <Icon
                    type="profile"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link
                  to={`/account/${id}/list/repairingCompanyAccountCreateForm`}
                >
                  <Icon
                    type="plus-circle-o"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link to={`/account/${id}/list/repairingCompanyAccountList`}>
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
                title="保险服务帐户"
                action={
                  <Tooltip title="保险服务帐户">
                    <Icon type="info-circle-o" />
                  </Tooltip>
                }
                total={numeral(insuranceServiceAccountCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link to={`/account/${id}/list/insuranceServiceAccountList`}>
                  <Icon
                    type="profile"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link
                  to={`/account/${id}/list/insuranceServiceAccountCreateForm`}
                >
                  <Icon
                    type="plus-circle-o"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link to={`/account/${id}/list/insuranceServiceAccountList`}>
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
                title="主要以账户"
                action={
                  <Tooltip title="主要以账户">
                    <Icon type="info-circle-o" />
                  </Tooltip>
                }
                total={numeral(mainOrderAccountCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link to={`/account/${id}/list/mainOrderAccountList`}>
                  <Icon
                    type="profile"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link to={`/account/${id}/list/mainOrderAccountCreateForm`}>
                  <Icon
                    type="plus-circle-o"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link to={`/account/${id}/list/mainOrderAccountList`}>
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
                title="检查站对账单"
                action={
                  <Tooltip title="检查站对账单">
                    <Icon type="info-circle-o" />
                  </Tooltip>
                }
                total={numeral(inspectionStationAccountCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link to={`/account/${id}/list/inspectionStationAccountList`}>
                  <Icon
                    type="profile"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link
                  to={`/account/${id}/list/inspectionStationAccountCreateForm`}
                >
                  <Icon
                    type="plus-circle-o"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link to={`/account/${id}/list/inspectionStationAccountList`}>
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
