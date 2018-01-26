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
import styles from './ServiceFileMovementM2mChecklistResult.dashboard.less'
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
const summaryOf = serviceFileMovementM2mChecklistResult => {
  return (
    <DescriptionList className={styles.headerList} size="small" col="4">
      <Description term="序号">
        {serviceFileMovementM2mChecklistResult.id}
      </Description>
      <Description term="检查结果">
        {serviceFileMovementM2mChecklistResult.checkResult}
      </Description>
      <Description term="检验结果的评论">
        {serviceFileMovementM2mChecklistResult.checkResultComments}
      </Description>
      <Description term="创建时间">
        {moment(serviceFileMovementM2mChecklistResult.createTime).format(
          'YYYY-MM-DD'
        )}
      </Description>
      <Description term="图1">
        {serviceFileMovementM2mChecklistResult.image1}
      </Description>
      <Description term="图2">
        {serviceFileMovementM2mChecklistResult.image2}
      </Description>
      <Description term="图3">
        {serviceFileMovementM2mChecklistResult.image3}
      </Description>
      <Description term="图4">
        {serviceFileMovementM2mChecklistResult.image4}
      </Description>
      <Description term="图5">
        {serviceFileMovementM2mChecklistResult.image5}
      </Description>
    </DescriptionList>
  )
}

@connect(state => ({
  serviceFileMovementM2mChecklistResult:
    state._serviceFileMovementM2mChecklistResult,
}))
export default class ServiceFileMovementM2mChecklistResultDashboard extends Component {
  render() {
    // eslint-disable-next-line max-len
    const { id } = this.props.serviceFileMovementM2mChecklistResult

    return (
      <PageHeaderLayout
        title="移件服务检查结果总览"
        content={summaryOf(this.props.serviceFileMovementM2mChecklistResult)}
        wrapperClassName={styles.advancedForm}
      >
        <div>
          <Row gutter={24} />
        </div>
      </PageHeaderLayout>
    )
  }
}
