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
import styles from './SecUserBlocking.viewdetail.less'
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

const summaryOf = secUserBlocking => {
  return (
    <DescriptionList className={styles.headerList} size="small" col="4">
      <Description term="序号">{secUserBlocking.id}</Description>
      <Description term="谁">{secUserBlocking.who}</Description>
      <Description term="屏蔽时间">
        {moment(secUserBlocking.blockTime).format('YYYY-MM-DD')}
      </Description>
      <Description term="评论">{secUserBlocking.comments}</Description>
    </DescriptionList>
  )
}

@connect(state => ({
  secUserBlocking: state._secUserBlocking,
}))
export default class SecUserBlockingViewDetail extends Component {
  state = {
    tabKey: `secUserList`,
    stepDirection: 'horizontal',
  }

  onTabChange = key => {
    this.setState({ tabKey: key })
  }
  render() {
    const { SecUserViewTable } = GlobalComponents

    // eslint-disable-next-line max-len

    const secUserBlocking = this.props.secUserBlocking
    const { id, secUserCount } = secUserBlocking
    const { secUserList } = secUserBlocking

    const owner = { type: '_secUserBlocking', id }

    const tabList = [{ key: 'secUserList', tab: `SEC的用户(${secUserCount})` }]

    const contentList = {
      secUserList: (
        <SecUserViewTable data={secUserList} owner={owner} {...this.props} />
      ),
    }

    return (
      <PageHeaderLayout
        title="SEC用户阻塞总览"
        content={summaryOf(this.props.secUserBlocking)}
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
