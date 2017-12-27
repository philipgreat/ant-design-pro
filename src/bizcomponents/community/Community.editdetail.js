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
import styles from './Community.editdetail.less'

import InvitationCodeEditTable from '../invitationcode/InvitationCode.edittable'

import HomePageEditTable from '../homepage/HomePage.edittable'

import EncyclopediaItemEditTable from '../encyclopediaitem/EncyclopediaItem.edittable'

import TaskPageEditTable from '../taskpage/TaskPage.edittable'

import CommunityUserEditTable from '../communityuser/CommunityUser.edittable'

import TaskEditTable from '../task/Task.edittable'

import GroupPageEditTable from '../grouppage/GroupPage.edittable'

import ThreadEditTable from '../thread/Thread.edittable'

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
  community: state._community,
}))
export default class CommunityEditDetail extends Component {
  render() {
    const {
      id,
      invitationCodeCount,
      homePageCount,
      encyclopediaItemCount,
      taskPageCount,
      communityUserCount,
      taskCount,
      groupPageCount,
      threadCount,
    } = this.props.community
    const {
      invitationCodeList,
      homePageList,
      encyclopediaItemList,
      taskPageList,
      communityUserList,
      taskList,
      groupPageList,
      threadList,
    } = this.props.community

    const owner = { type: '_community', id }
    return (
      <PageHeaderLayout
        title="社区总览"
        content="社区总览"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="邀请码列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <InvitationCodeEditTable data={invitationCodeList} owner={owner} />
          </Form>
        </Card>

        <Card title="主页列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <HomePageEditTable data={homePageList} owner={owner} />
          </Form>
        </Card>

        <Card title="百科全书条目列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <EncyclopediaItemEditTable
              data={encyclopediaItemList}
              owner={owner}
            />
          </Form>
        </Card>

        <Card title="任务页面列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <TaskPageEditTable data={taskPageList} owner={owner} />
          </Form>
        </Card>

        <Card title="社区用户列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <CommunityUserEditTable data={communityUserList} owner={owner} />
          </Form>
        </Card>

        <Card title="任务列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <TaskEditTable data={taskList} owner={owner} />
          </Form>
        </Card>

        <Card title="群组页面列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <GroupPageEditTable data={groupPageList} owner={owner} />
          </Form>
        </Card>

        <Card title="主贴列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <ThreadEditTable data={threadList} owner={owner} />
          </Form>
        </Card>
      </PageHeaderLayout>
    )
  }
}
