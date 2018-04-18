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
import styles from './AvailableVehicleType.dashboard.less'
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
const summaryOf = availableVehicleType => {
  return (
    <DescriptionList className={styles.headerList} size="small" col="4">
      <Description term="ID">{availableVehicleType.id}</Description>
      <Description term="车辆类型">
        {availableVehicleType.vehicleType}
      </Description>
      <Description term="车辆类型别名">
        {availableVehicleType.vehicleTypeAlias}
      </Description>
      <Description term="可下单">
        {availableVehicleType.canPlaceOrder ? '是' : '否'}
      </Description>
      <Description term="可6年免检">
        {availableVehicleType.canDoExempt ? '是' : '否'}
      </Description>
    </DescriptionList>
  )
}

@connect(state => ({
  availableVehicleType: state._availableVehicleType,
}))
export default class AvailableVehicleTypeDashboard extends Component {
  render() {
    // eslint-disable-next-line max-len
    const { id } = this.props.availableVehicleType

    return (
      <PageHeaderLayout
        title="车辆类型总览"
        content={summaryOf(this.props.availableVehicleType)}
        wrapperClassName={styles.advancedForm}
      >
        <div>
          <Row gutter={24} />
        </div>
      </PageHeaderLayout>
    )
  }
}
