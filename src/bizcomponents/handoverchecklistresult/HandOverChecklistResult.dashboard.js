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
import styles from './HandOverChecklistResult.dashboard.less'
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
const summaryOf = handOverChecklistResult => {
  return (
    <DescriptionList className={styles.headerList} size="small" col="4">
      <Description term="ID">{handOverChecklistResult.id}</Description>
      <Description term="检查项名称">
        {handOverChecklistResult.handOverCheckItemName}
      </Description>
      <Description term="检查项目描述">
        {handOverChecklistResult.checkItemDescription}
      </Description>
      <Description term="检车项结果">
        {handOverChecklistResult.handOverCheckResult}
      </Description>
      <Description term="检查项意见">
        {handOverChecklistResult.handOverCheckComment}
      </Description>
      <Description term="凭证图片1">
        {handOverChecklistResult.handOverCheckEvidenceImage1}
      </Description>
      <Description term="凭证图片2">
        {handOverChecklistResult.handOverCheckEvidenceImage2}
      </Description>
      <Description term="凭证图片3">
        {handOverChecklistResult.handOverCheckEvidenceImage3}
      </Description>
      <Description term="凭证图片4">
        {handOverChecklistResult.handOverCheckEvidenceImage4}
      </Description>
      <Description term="凭证图片5">
        {handOverChecklistResult.handOverCheckEvidenceImage5}
      </Description>
    </DescriptionList>
  )
}

@connect(state => ({
  handOverChecklistResult: state._handOverChecklistResult,
}))
export default class HandOverChecklistResultDashboard extends Component {
  render() {
    // eslint-disable-next-line max-len
    const { id } = this.props.handOverChecklistResult

    return (
      <PageHeaderLayout
        title="交接检查结果总览"
        content={summaryOf(this.props.handOverChecklistResult)}
        wrapperClassName={styles.advancedForm}
      >
        <div>
          <Row gutter={24} />
        </div>
      </PageHeaderLayout>
    )
  }
}
