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
import styles from './ServiceCompanyAccount.editdetail.less'
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
  serviceCompanyAccount: state._serviceCompanyAccount,
}))
export default class ServiceCompanyAccountEditDetail extends Component {
  render() {
    // eslint-disable-next-line max-len
    const { id } = this.props.serviceCompanyAccount
    const {} = this.props.serviceCompanyAccount

    const owner = { type: '_serviceCompanyAccount', id }
    return (
      <PageHeaderLayout
        title="服务公司对账单总览"
        content="服务公司对账单总览"
        wrapperClassName={styles.advancedForm}
      />
    )
  }
}
