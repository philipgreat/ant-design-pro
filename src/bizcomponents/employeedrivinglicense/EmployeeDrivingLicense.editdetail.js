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
import styles from './EmployeeDrivingLicense.editdetail.less'
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
  employeeDrivingLicense: state._employeeDrivingLicense,
}))
export default class EmployeeDrivingLicenseEditDetail extends Component {
  render() {
    // eslint-disable-next-line max-len
    const { id } = this.props.employeeDrivingLicense
    const {} = this.props.employeeDrivingLicense

    const owner = { type: '_employeeDrivingLicense', id }
    return (
      <PageHeaderLayout
        title="员工驾驶证总览"
        content="员工驾驶证总览"
        wrapperClassName={styles.advancedForm}
      />
    )
  }
}
