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
import styles from './EncyclopediaItem.dashboard.less'
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
const summaryOf = encyclopediaItem => {
  return (
    <DescriptionList className={styles.headerList} size="small" col="4">
      <Description term="序号">{encyclopediaItem.id}</Description>
      <Description term="标题">{encyclopediaItem.title}</Description>
      <Description term="发布时间">
        {moment(encyclopediaItem.publishTime).format('YYYY-MM-DD')}
      </Description>
      <Description term="内容">{encyclopediaItem.content}</Description>
    </DescriptionList>
  )
}

@connect(state => ({
  encyclopediaItem: state._encyclopediaItem,
}))
export default class EncyclopediaItemDashboard extends Component {
  render() {
    // eslint-disable-next-line max-len
    const { id } = this.props.encyclopediaItem

    return (
      <PageHeaderLayout
        title="百科全书条目总览"
        content={summaryOf(this.props.encyclopediaItem)}
        wrapperClassName={styles.advancedForm}
      >
        <div>
          <Row gutter={24} />
        </div>
      </PageHeaderLayout>
    )
  }
}
