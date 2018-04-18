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
import styles from './EmployeeDrivingLicense.dashboard.less'
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
const summaryOf = employeeDrivingLicense => {
  return (
    <DescriptionList className={styles.headerList} size="small" col="4">
      <Description term="ID">{employeeDrivingLicense.id}</Description>
      <Description term="姓名">{employeeDrivingLicense.holderName}</Description>
      <Description term="准驾车型">
        {employeeDrivingLicense.licenseType}
      </Description>
      <Description term="驾驶证号码">
        {employeeDrivingLicense.licenseNumber}
      </Description>
      <Description term="有效期至">
        {moment(employeeDrivingLicense.expirationDate).format('YYYY-MM-DD')}
      </Description>
      <Description term="图1">{employeeDrivingLicense.image1}</Description>
      <Description term="图2">{employeeDrivingLicense.image2}</Description>
      <Description term="图3">{employeeDrivingLicense.image3}</Description>
      <Description term="图4">{employeeDrivingLicense.image4}</Description>
      <Description term="图5">{employeeDrivingLicense.image5}</Description>
    </DescriptionList>
  )
}

@connect(state => ({
  employeeDrivingLicense: state._employeeDrivingLicense,
}))
export default class EmployeeDrivingLicenseDashboard extends Component {
  render() {
    // eslint-disable-next-line max-len
    const { id } = this.props.employeeDrivingLicense

    return (
      <PageHeaderLayout
        title="员工驾驶证总览"
        content={summaryOf(this.props.employeeDrivingLicense)}
        wrapperClassName={styles.advancedForm}
      >
        <div>
          <Row gutter={24} />
        </div>
      </PageHeaderLayout>
    )
  }
}
