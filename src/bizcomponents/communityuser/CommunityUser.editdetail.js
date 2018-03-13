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
import styles from './CommunityUser.editdetail.less'
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
  communityUser: state._communityUser,
}))
export default class CommunityUserEditDetail extends Component {
  render() {
    const { PatientInfoEditTable } = GlobalComponents
    const { UserSkillEditTable } = GlobalComponents
    const { MessageFilterEditTable } = GlobalComponents
    const { UserMessageEditTable } = GlobalComponents
    const { TaskEditTable } = GlobalComponents
    const { TaskAssigmentEditTable } = GlobalComponents
    const { TaskLikeEditTable } = GlobalComponents
    const { TaskReplyEditTable } = GlobalComponents
    const { TaskReplyLikeEditTable } = GlobalComponents
    const { ThreadEditTable } = GlobalComponents
    const { ThreadReplyEditTable } = GlobalComponents
    const { ThreadRegistrationEditTable } = GlobalComponents
    const { ThreadLikeEditTable } = GlobalComponents
    const { ThreadReplyLikeEditTable } = GlobalComponents
    const { FanEditTable } = GlobalComponents
    const { FollowEditTable } = GlobalComponents
    const { BonusPointEditTable } = GlobalComponents
    const { ExperiencePointEditTable } = GlobalComponents

    // eslint-disable-next-line max-len
    const {
      id,
      patientInfoCount,
      userSkillCount,
      messageFilterCount,
      userMessageCount,
      taskCount,
      taskAssigmentCount,
      taskLikeCount,
      taskReplyCount,
      taskReplyLikeCount,
      threadCount,
      threadReplyCount,
      threadRegistrationCount,
      threadLikeCount,
      threadReplyLikeCount,
      fanCount,
      followCount,
      bonusPointCount,
      experiencePointCount,
    } = this.props.communityUser
    const {
      patientInfoList,
      userSkillList,
      messageFilterList,
      userMessageList,
      taskList,
      taskAssigmentList,
      taskLikeList,
      taskReplyList,
      taskReplyLikeList,
      threadList,
      threadReplyList,
      threadRegistrationList,
      threadLikeList,
      threadReplyLikeList,
      fanList,
      followList,
      bonusPointList,
      experiencePointList,
    } = this.props.communityUser

    const owner = { type: '_communityUser', id }
    return (
      <PageHeaderLayout
        title="社区用户总览"
        content="社区用户总览"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="病人信息列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <PatientInfoEditTable
              data={patientInfoList}
              owner={owner}
              {...this.props}
            />
          </Form>
        </Card>

        <Card title="用户技能列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <UserSkillEditTable
              data={userSkillList}
              owner={owner}
              {...this.props}
            />
          </Form>
        </Card>

        <Card title="消息过滤列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <MessageFilterEditTable
              data={messageFilterList}
              owner={owner}
              {...this.props}
            />
          </Form>
        </Card>

        <Card title="用户消息列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <UserMessageEditTable
              data={userMessageList}
              owner={owner}
              {...this.props}
            />
          </Form>
        </Card>

        <Card title="任务列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <TaskEditTable data={taskList} owner={owner} {...this.props} />
          </Form>
        </Card>

        <Card title="任务分配列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <TaskAssigmentEditTable
              data={taskAssigmentList}
              owner={owner}
              {...this.props}
            />
          </Form>
        </Card>

        <Card title="任务点赞列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <TaskLikeEditTable
              data={taskLikeList}
              owner={owner}
              {...this.props}
            />
          </Form>
        </Card>

        <Card title="回复任务列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <TaskReplyEditTable
              data={taskReplyList}
              owner={owner}
              {...this.props}
            />
          </Form>
        </Card>

        <Card title="任务回复点赞列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <TaskReplyLikeEditTable
              data={taskReplyLikeList}
              owner={owner}
              {...this.props}
            />
          </Form>
        </Card>

        <Card title="主贴列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <ThreadEditTable data={threadList} owner={owner} {...this.props} />
          </Form>
        </Card>

        <Card title="跟帖回复列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <ThreadReplyEditTable
              data={threadReplyList}
              owner={owner}
              {...this.props}
            />
          </Form>
        </Card>

        <Card title="活动注册列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <ThreadRegistrationEditTable
              data={threadRegistrationList}
              owner={owner}
              {...this.props}
            />
          </Form>
        </Card>

        <Card title="主贴点赞列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <ThreadLikeEditTable
              data={threadLikeList}
              owner={owner}
              {...this.props}
            />
          </Form>
        </Card>

        <Card title="跟帖回复点赞列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <ThreadReplyLikeEditTable
              data={threadReplyLikeList}
              owner={owner}
              {...this.props}
            />
          </Form>
        </Card>

        <Card title="粉丝列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <FanEditTable data={fanList} owner={owner} {...this.props} />
          </Form>
        </Card>

        <Card title="关注列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <FollowEditTable data={followList} owner={owner} {...this.props} />
          </Form>
        </Card>

        <Card title="积分列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <BonusPointEditTable
              data={bonusPointList}
              owner={owner}
              {...this.props}
            />
          </Form>
        </Card>

        <Card title="成长值列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <ExperiencePointEditTable
              data={experiencePointList}
              owner={owner}
              {...this.props}
            />
          </Form>
        </Card>
      </PageHeaderLayout>
    )
  }
}
