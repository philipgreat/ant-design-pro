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
import styles from './ServiceInsuranceForInspection.dashboard.less'
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
const summaryOf = serviceInsuranceForInspection => {
  return (
    <DescriptionList className={styles.headerList} size="small" col="4">
      <Description term="序号">{serviceInsuranceForInspection.id}</Description>
      <Description term="服务状态">
        {serviceInsuranceForInspection.serviceStatus}
      </Description>
      <Description term="服务的评论">
        {serviceInsuranceForInspection.serviceComments}
      </Description>
      <Description term="开始时间">
        {moment(serviceInsuranceForInspection.startTime).format('YYYY-MM-DD')}
      </Description>
      <Description term="最后更新时间">
        {moment(serviceInsuranceForInspection.lastUpdateTime).format(
          'YYYY-MM-DD'
        )}
      </Description>
      <Description term="保单号码">
        {serviceInsuranceForInspection.insuranceNumber}
      </Description>
      <Description term="保险图1">
        {serviceInsuranceForInspection.insuranceImage1}
      </Description>
      <Description term="保险图2">
        {serviceInsuranceForInspection.insuranceImage2}
      </Description>
      <Description term="保险图片3">
        {serviceInsuranceForInspection.insuranceImage3}
      </Description>
      <Description term="保险形象4">
        {serviceInsuranceForInspection.insuranceImage4}
      </Description>
      <Description term="保险图片5">
        {serviceInsuranceForInspection.insuranceImage5}
      </Description>
    </DescriptionList>
  )
}

@connect(state => ({
  serviceInsuranceForInspection: state._serviceInsuranceForInspection,
}))
export default class ServiceInsuranceForInspectionDashboard extends Component {
  render() {
    // eslint-disable-next-line max-len
    const { id } = this.props.serviceInsuranceForInspection

    return (
      <PageHeaderLayout
        title="保险增值服务总览"
        content={summaryOf(this.props.serviceInsuranceForInspection)}
        wrapperClassName={styles.advancedForm}
      >
        <div>
          <Row gutter={24} />
        </div>
      </PageHeaderLayout>
    )
  }
}
