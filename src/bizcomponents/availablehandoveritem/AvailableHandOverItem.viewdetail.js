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
import styles from './AvailableHandOverItem.viewdetail.less'
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

const summaryOf = availableHandOverItem => {
  return (
    <DescriptionList className={styles.headerList} size="small" col="4">
      <Description term="ID">{availableHandOverItem.id}</Description>
      <Description term="检查项目名称">
        {availableHandOverItem.checkItemName}
      </Description>
      <Description term="检查项目描述">
        {availableHandOverItem.checkItemDescription}
      </Description>
    </DescriptionList>
  )
}

@connect(state => ({
  availableHandOverItem: state._availableHandOverItem,
}))
export default class AvailableHandOverItemViewDetail extends Component {
  state = {
    tabKey: `handOverChecklistItemList`,
    stepDirection: 'horizontal',
  }

  onTabChange = key => {
    this.setState({ tabKey: key })
  }
  render() {
    const { HandOverChecklistItemViewTable } = GlobalComponents
    const { HandOverChecklistResultViewTable } = GlobalComponents

    // eslint-disable-next-line max-len

    const availableHandOverItem = this.props.availableHandOverItem
    const {
      id,
      handOverChecklistItemCount,
      handOverChecklistResultCount,
    } = availableHandOverItem
    const {
      handOverChecklistItemList,
      handOverChecklistResultList,
    } = availableHandOverItem

    const owner = { type: '_availableHandOverItem', id }

    const tabList = [
      {
        key: 'handOverChecklistItemList',
        tab: `移交清单项目(${handOverChecklistItemCount})`,
      },
      {
        key: 'handOverChecklistResultList',
        tab: `移交清单结果(${handOverChecklistResultCount})`,
      },
    ]

    const contentList = {
      handOverChecklistItemList: (
        <HandOverChecklistItemViewTable
          data={handOverChecklistItemList}
          owner={owner}
          {...this.props}
        />
      ),

      handOverChecklistResultList: (
        <HandOverChecklistResultViewTable
          data={handOverChecklistResultList}
          owner={owner}
          {...this.props}
        />
      ),
    }

    return (
      <PageHeaderLayout
        title="可用移交项目总览"
        content={summaryOf(this.props.availableHandOverItem)}
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
