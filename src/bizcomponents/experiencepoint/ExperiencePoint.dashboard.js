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
import styles from './ExperiencePoint.dashboard.less'
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
const summaryOf = experiencePoint => {
  return (
    <DescriptionList className={styles.headerList} size="small" col="4">
      <Description term="序号">{experiencePoint.id}</Description>
      <Description term="名称">{experiencePoint.name}</Description>
      <Description term="获得时间">
        {moment(experiencePoint.obtainTime).format('YYYY-MM-DD')}
      </Description>
      <Description term="点">{experiencePoint.points}</Description>
    </DescriptionList>
  )
}

@connect(state => ({
  experiencePoint: state._experiencePoint,
}))
export default class ExperiencePointDashboard extends Component {
  render() {
    // eslint-disable-next-line max-len
    const { id } = this.props.experiencePoint

    return (
      <PageHeaderLayout
        title="成长值总览"
        content={summaryOf(this.props.experiencePoint)}
        wrapperClassName={styles.advancedForm}
      >
        <div>
          <Row gutter={24} />
        </div>
      </PageHeaderLayout>
    )
  }
}
