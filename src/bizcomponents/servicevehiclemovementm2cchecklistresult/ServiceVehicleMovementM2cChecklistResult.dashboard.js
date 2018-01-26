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
import styles from './ServiceVehicleMovementM2cChecklistResult.dashboard.less'
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
const summaryOf = serviceVehicleMovementM2cChecklistResult => {
  return (
    <DescriptionList className={styles.headerList} size="small" col="4">
      <Description term="序号">
        {serviceVehicleMovementM2cChecklistResult.id}
      </Description>
      <Description term="检查结果">
        {serviceVehicleMovementM2cChecklistResult.checkResult}
      </Description>
      <Description term="检验结果的评论">
        {serviceVehicleMovementM2cChecklistResult.checkResultComments}
      </Description>
      <Description term="创建时间">
        {moment(serviceVehicleMovementM2cChecklistResult.createTime).format(
          'YYYY-MM-DD'
        )}
      </Description>
      <Description term="图1">
        {serviceVehicleMovementM2cChecklistResult.image1}
      </Description>
      <Description term="图2">
        {serviceVehicleMovementM2cChecklistResult.image2}
      </Description>
      <Description term="图3">
        {serviceVehicleMovementM2cChecklistResult.image3}
      </Description>
      <Description term="图4">
        {serviceVehicleMovementM2cChecklistResult.image4}
      </Description>
      <Description term="图5">
        {serviceVehicleMovementM2cChecklistResult.image5}
      </Description>
    </DescriptionList>
  )
}

@connect(state => ({
  serviceVehicleMovementM2cChecklistResult:
    state._serviceVehicleMovementM2cChecklistResult,
}))
export default class ServiceVehicleMovementM2cChecklistResultDashboard extends Component {
  render() {
    // eslint-disable-next-line max-len
    const { id } = this.props.serviceVehicleMovementM2cChecklistResult

    return (
      <PageHeaderLayout
        title="还车服务检查结果总览"
        content={summaryOf(this.props.serviceVehicleMovementM2cChecklistResult)}
        wrapperClassName={styles.advancedForm}
      >
        <div>
          <Row gutter={24} />
        </div>
      </PageHeaderLayout>
    )
  }
}
