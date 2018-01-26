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
import styles from './ServiceFileMovementM2cChecklistResult.editdetail.less'
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
  serviceFileMovementM2cChecklistResult:
    state._serviceFileMovementM2cChecklistResult,
}))
export default class ServiceFileMovementM2cChecklistResultEditDetail extends Component {
  render() {
    // eslint-disable-next-line max-len
    const { id } = this.props.serviceFileMovementM2cChecklistResult
    const {} = this.props.serviceFileMovementM2cChecklistResult

    const owner = { type: '_serviceFileMovementM2cChecklistResult', id }
    return (
      <PageHeaderLayout
        title="还件服务检查结果总览"
        content="还件服务检查结果总览"
        wrapperClassName={styles.advancedForm}
      />
    )
  }
}
