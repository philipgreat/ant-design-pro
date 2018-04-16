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
import styles from './Account.editdetail.less'
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
  account: state._account,
}))
export default class AccountEditDetail extends Component {
  render() {
    const { ServiceCompanyAccountEditTable } = GlobalComponents
    const { RepairingCompanyAccountEditTable } = GlobalComponents
    const { InsuranceServiceAccountEditTable } = GlobalComponents
    const { MainOrderAccountEditTable } = GlobalComponents
    const { InspectionStationAccountEditTable } = GlobalComponents

    // eslint-disable-next-line max-len
    const {
      id,
      serviceCompanyAccountCount,
      repairingCompanyAccountCount,
      insuranceServiceAccountCount,
      mainOrderAccountCount,
      inspectionStationAccountCount,
    } = this.props.account
    const {
      serviceCompanyAccountList,
      repairingCompanyAccountList,
      insuranceServiceAccountList,
      mainOrderAccountList,
      inspectionStationAccountList,
    } = this.props.account

    const owner = { type: '_account', id }
    return (
      <PageHeaderLayout
        title="对账单总览"
        content="对账单总览"
        wrapperClassName={styles.advancedForm}
      >
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

        <Card
          title="年检订单对账单列表"
          className={styles.card}
          bordered={false}
        >
          <Form layout="vertical" hideRequiredMark>
            <MainOrderAccountEditTable
              data={mainOrderAccountList}
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
