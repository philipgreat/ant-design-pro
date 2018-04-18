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
  Steps,
  Badge,
} from 'antd'
import { Link, Route, Redirect, Switch } from 'dva/router'
import numeral from 'numeral'
import moment from 'moment'
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
import styles from './HandOverChecklistResult.viewdetail.less'
import GlobalComponents from '../../custcomponents'
import DescriptionList from '../../components/DescriptionList'
const { Description } = DescriptionList
const { Step } = Steps

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
export default class HandOverChecklistResultViewDetail extends Component {
  onTabChange = key => {
    this.setState({ tabKey: key })
  }
  render() {
    // eslint-disable-next-line max-len

    const handOverChecklistResult = this.props.handOverChecklistResult
    const { id } = handOverChecklistResult
    const {} = handOverChecklistResult

    const owner = { type: '_handOverChecklistResult', id }

    const tabList = []

    const contentList = {}

    return (
      <PageHeaderLayout
        title="交接检查结果总览"
        content={summaryOf(this.props.handOverChecklistResult)}
        wrapperClassName={styles.advancedForm}
      >
        <Card
          className={styles.card}
          bordered={false}
          tabList={tabList}
          onTabChange={this.onTabChange}
        >
          {contentList[this.state.tabKey]}
        </Card>
      </PageHeaderLayout>
    )
  }
}
