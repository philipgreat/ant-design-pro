import React from 'react'
import PropTypes from 'prop-types'
import { Layout, Menu, Icon, Avatar, Dropdown, Tag, message, Spin } from 'antd'
import DocumentTitle from 'react-document-title'
import { connect } from 'dva'
import { Link, Route, Redirect, Switch } from 'dva/router'
import moment from 'moment'
import groupBy from 'lodash/groupBy'
import { ContainerQuery } from 'react-container-query'
import classNames from 'classnames'
import styles from './CommunityUser.app.less'
import CommunityUserDashboard from './CommunityUser.dashboard'
import CommunityUserEditDetail from './CommunityUser.editdetail'

import HeaderSearch from '../../components/HeaderSearch'
import NoticeIcon from '../../components/NoticeIcon'
import GlobalFooter from '../../components/GlobalFooter'

import PatientInfoSearch from '../patientinfo/PatientInfo.search'
import PatientInfoCreateForm from '../patientinfo/PatientInfo.createform'
import PatientInfoUpdateForm from '../patientinfo/PatientInfo.updateform'

import UserSkillSearch from '../userskill/UserSkill.search'
import UserSkillCreateForm from '../userskill/UserSkill.createform'
import UserSkillUpdateForm from '../userskill/UserSkill.updateform'

import MessageFilterSearch from '../messagefilter/MessageFilter.search'
import MessageFilterCreateForm from '../messagefilter/MessageFilter.createform'
import MessageFilterUpdateForm from '../messagefilter/MessageFilter.updateform'

import UserMessageSearch from '../usermessage/UserMessage.search'
import UserMessageCreateForm from '../usermessage/UserMessage.createform'
import UserMessageUpdateForm from '../usermessage/UserMessage.updateform'

import TaskSearch from '../task/Task.search'
import TaskCreateForm from '../task/Task.createform'
import TaskUpdateForm from '../task/Task.updateform'

import TaskAssigmentSearch from '../taskassigment/TaskAssigment.search'
import TaskAssigmentCreateForm from '../taskassigment/TaskAssigment.createform'
import TaskAssigmentUpdateForm from '../taskassigment/TaskAssigment.updateform'

import TaskLikeSearch from '../tasklike/TaskLike.search'
import TaskLikeCreateForm from '../tasklike/TaskLike.createform'
import TaskLikeUpdateForm from '../tasklike/TaskLike.updateform'

import TaskReplySearch from '../taskreply/TaskReply.search'
import TaskReplyCreateForm from '../taskreply/TaskReply.createform'
import TaskReplyUpdateForm from '../taskreply/TaskReply.updateform'

import TaskReplyLikeSearch from '../taskreplylike/TaskReplyLike.search'
import TaskReplyLikeCreateForm from '../taskreplylike/TaskReplyLike.createform'
import TaskReplyLikeUpdateForm from '../taskreplylike/TaskReplyLike.updateform'

import ThreadSearch from '../thread/Thread.search'
import ThreadCreateForm from '../thread/Thread.createform'
import ThreadUpdateForm from '../thread/Thread.updateform'

import ThreadReplySearch from '../threadreply/ThreadReply.search'
import ThreadReplyCreateForm from '../threadreply/ThreadReply.createform'
import ThreadReplyUpdateForm from '../threadreply/ThreadReply.updateform'

import ThreadRegistrationSearch from '../threadregistration/ThreadRegistration.search'
import ThreadRegistrationCreateForm from '../threadregistration/ThreadRegistration.createform'
import ThreadRegistrationUpdateForm from '../threadregistration/ThreadRegistration.updateform'

import ThreadLikeSearch from '../threadlike/ThreadLike.search'
import ThreadLikeCreateForm from '../threadlike/ThreadLike.createform'
import ThreadLikeUpdateForm from '../threadlike/ThreadLike.updateform'

import ThreadReplyLikeSearch from '../threadreplylike/ThreadReplyLike.search'
import ThreadReplyLikeCreateForm from '../threadreplylike/ThreadReplyLike.createform'
import ThreadReplyLikeUpdateForm from '../threadreplylike/ThreadReplyLike.updateform'

import FanSearch from '../fan/Fan.search'
import FanCreateForm from '../fan/Fan.createform'
import FanUpdateForm from '../fan/Fan.updateform'

import FollowSearch from '../follow/Follow.search'
import FollowCreateForm from '../follow/Follow.createform'
import FollowUpdateForm from '../follow/Follow.updateform'

import BonusPointSearch from '../bonuspoint/BonusPoint.search'
import BonusPointCreateForm from '../bonuspoint/BonusPoint.createform'
import BonusPointUpdateForm from '../bonuspoint/BonusPoint.updateform'

import ExperiencePointSearch from '../experiencepoint/ExperiencePoint.search'
import ExperiencePointCreateForm from '../experiencepoint/ExperiencePoint.createform'
import ExperiencePointUpdateForm from '../experiencepoint/ExperiencePoint.updateform'

const { Header, Sider, Content } = Layout
const { SubMenu } = Menu

const query = {
  'screen-xs': {
    maxWidth: 575,
  },
  'screen-sm': {
    minWidth: 576,
    maxWidth: 767,
  },
  'screen-md': {
    minWidth: 768,
    maxWidth: 991,
  },
  'screen-lg': {
    minWidth: 992,
    maxWidth: 1199,
  },
  'screen-xl': {
    minWidth: 1200,
  },
}

class CommunityUserBizApp extends React.PureComponent {
  constructor(props) {
    super(props)
    // 把一级 Layout 的 children 作为菜单项
    // this.menus = getNavData().reduce((arr, current) => arr.concat(current.children), [])
    this.state = {
      openKeys: this.getDefaultCollapsedSubMenus(props),
    }
  }

  componentDidMount() {}
  componentWillUnmount() {
    clearTimeout(this.resizeTimeout)
  }
  onCollapse = collapsed => {
    this.props.dispatch({
      type: 'global/changeLayoutCollapsed',
      payload: collapsed,
    })
  }

  getDefaultCollapsedSubMenus = props => {
    const currentMenuSelectedKeys = [...this.getCurrentMenuSelectedKeys(props)]
    currentMenuSelectedKeys.splice(-1, 1)
    if (currentMenuSelectedKeys.length === 0) {
      return ['/communityUser/']
    }
    return currentMenuSelectedKeys
  }
  getCurrentMenuSelectedKeys = props => {
    const { location: { pathname } } = props || this.props
    const keys = pathname.split('/').slice(1)
    if (keys.length === 1 && keys[0] === '') {
      return [this.menus[0].key]
    }
    return keys
  }
  getNavMenuItems = objectId => {
    return (
      <SubMenu
        title={
          <span>
            <Icon type="profile" />
            <span>社区用户</span>
          </span>
        }
      >
        <Menu.Item>
          <Link to={`/communityUser/${objectId}/list/patientInfoList`}>
            病人信息
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/communityUser/${objectId}/list/userSkillList`}>
            用户技能
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/communityUser/${objectId}/list/messageFilterList`}>
            消息过滤
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/communityUser/${objectId}/list/userMessageList`}>
            用户消息
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/communityUser/${objectId}/list/taskList`}>任务</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/communityUser/${objectId}/list/taskAssigmentList`}>
            任务分配
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/communityUser/${objectId}/list/taskLikeList`}>
            任务点赞
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/communityUser/${objectId}/list/taskReplyList`}>
            回复任务
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/communityUser/${objectId}/list/taskReplyLikeList`}>
            任务回复点赞
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/communityUser/${objectId}/list/threadList`}>主贴</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/communityUser/${objectId}/list/threadReplyList`}>
            跟帖回复
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/communityUser/${objectId}/list/threadRegistrationList`}>
            活动注册
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/communityUser/${objectId}/list/threadLikeList`}>
            主贴点赞
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/communityUser/${objectId}/list/threadReplyLikeList`}>
            跟帖回复点赞
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/communityUser/${objectId}/list/fanList`}>粉丝</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/communityUser/${objectId}/list/followList`}>关注</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/communityUser/${objectId}/list/bonusPointList`}>
            积分
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/communityUser/${objectId}/list/experiencePointList`}>
            成长值
          </Link>
        </Menu.Item>
      </SubMenu>
    )
  }

  getPatientInfoSearch = () => {
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.patientInfoList,
      count: state._communityUser.patientInfoCount,
      currentPage: state._communityUser.patientInfoCurrentPageNumber,
      searchFormParameters:
        state._communityUser.patientInfoSearchFormParameters,
      loading: state._communityUser.loading,
      owner: { type: '_communityUser', id: state._communityUser.id }, // this is for model namespace and
    }))(PatientInfoSearch)
  }
  getPatientInfoCreateForm = () => {
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.patientInfoList,
      count: state._communityUser.patientInfoCount,
      currentPage: state._communityUser.patientInfoCurrentPageNumber,
      searchFormParameters:
        state._communityUser.patientInfoSearchFormParameters,
      loading: state._communityUser.loading,
      owner: { type: '_communityUser', id: state._communityUser.id }, // this is for model namespace and
    }))(PatientInfoCreateForm)
  }

  getPatientInfoUpdateForm = () => {
    return connect(state => ({
      selectedRows: state._communityUser.selectedRows,
      currentUpdateIndex: state._communityUser.currentUpdateIndex,
      owner: { type: '_communityUser', id: state._communityUser.id }, // this is for model namespace and
    }))(PatientInfoUpdateForm)
  }

  getUserSkillSearch = () => {
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.userSkillList,
      count: state._communityUser.userSkillCount,
      currentPage: state._communityUser.userSkillCurrentPageNumber,
      searchFormParameters: state._communityUser.userSkillSearchFormParameters,
      loading: state._communityUser.loading,
      owner: { type: '_communityUser', id: state._communityUser.id }, // this is for model namespace and
    }))(UserSkillSearch)
  }
  getUserSkillCreateForm = () => {
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.userSkillList,
      count: state._communityUser.userSkillCount,
      currentPage: state._communityUser.userSkillCurrentPageNumber,
      searchFormParameters: state._communityUser.userSkillSearchFormParameters,
      loading: state._communityUser.loading,
      owner: { type: '_communityUser', id: state._communityUser.id }, // this is for model namespace and
    }))(UserSkillCreateForm)
  }

  getUserSkillUpdateForm = () => {
    return connect(state => ({
      selectedRows: state._communityUser.selectedRows,
      currentUpdateIndex: state._communityUser.currentUpdateIndex,
      owner: { type: '_communityUser', id: state._communityUser.id }, // this is for model namespace and
    }))(UserSkillUpdateForm)
  }

  getMessageFilterSearch = () => {
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.messageFilterList,
      count: state._communityUser.messageFilterCount,
      currentPage: state._communityUser.messageFilterCurrentPageNumber,
      searchFormParameters:
        state._communityUser.messageFilterSearchFormParameters,
      loading: state._communityUser.loading,
      owner: { type: '_communityUser', id: state._communityUser.id }, // this is for model namespace and
    }))(MessageFilterSearch)
  }
  getMessageFilterCreateForm = () => {
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.messageFilterList,
      count: state._communityUser.messageFilterCount,
      currentPage: state._communityUser.messageFilterCurrentPageNumber,
      searchFormParameters:
        state._communityUser.messageFilterSearchFormParameters,
      loading: state._communityUser.loading,
      owner: { type: '_communityUser', id: state._communityUser.id }, // this is for model namespace and
    }))(MessageFilterCreateForm)
  }

  getMessageFilterUpdateForm = () => {
    return connect(state => ({
      selectedRows: state._communityUser.selectedRows,
      currentUpdateIndex: state._communityUser.currentUpdateIndex,
      owner: { type: '_communityUser', id: state._communityUser.id }, // this is for model namespace and
    }))(MessageFilterUpdateForm)
  }

  getUserMessageSearch = () => {
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.userMessageList,
      count: state._communityUser.userMessageCount,
      currentPage: state._communityUser.userMessageCurrentPageNumber,
      searchFormParameters:
        state._communityUser.userMessageSearchFormParameters,
      loading: state._communityUser.loading,
      owner: { type: '_communityUser', id: state._communityUser.id }, // this is for model namespace and
    }))(UserMessageSearch)
  }
  getUserMessageCreateForm = () => {
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.userMessageList,
      count: state._communityUser.userMessageCount,
      currentPage: state._communityUser.userMessageCurrentPageNumber,
      searchFormParameters:
        state._communityUser.userMessageSearchFormParameters,
      loading: state._communityUser.loading,
      owner: { type: '_communityUser', id: state._communityUser.id }, // this is for model namespace and
    }))(UserMessageCreateForm)
  }

  getUserMessageUpdateForm = () => {
    return connect(state => ({
      selectedRows: state._communityUser.selectedRows,
      currentUpdateIndex: state._communityUser.currentUpdateIndex,
      owner: { type: '_communityUser', id: state._communityUser.id }, // this is for model namespace and
    }))(UserMessageUpdateForm)
  }

  getTaskSearch = () => {
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.taskList,
      count: state._communityUser.taskCount,
      currentPage: state._communityUser.taskCurrentPageNumber,
      searchFormParameters: state._communityUser.taskSearchFormParameters,
      loading: state._communityUser.loading,
      owner: { type: '_communityUser', id: state._communityUser.id }, // this is for model namespace and
    }))(TaskSearch)
  }
  getTaskCreateForm = () => {
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.taskList,
      count: state._communityUser.taskCount,
      currentPage: state._communityUser.taskCurrentPageNumber,
      searchFormParameters: state._communityUser.taskSearchFormParameters,
      loading: state._communityUser.loading,
      owner: { type: '_communityUser', id: state._communityUser.id }, // this is for model namespace and
    }))(TaskCreateForm)
  }

  getTaskUpdateForm = () => {
    return connect(state => ({
      selectedRows: state._communityUser.selectedRows,
      currentUpdateIndex: state._communityUser.currentUpdateIndex,
      owner: { type: '_communityUser', id: state._communityUser.id }, // this is for model namespace and
    }))(TaskUpdateForm)
  }

  getTaskAssigmentSearch = () => {
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.taskAssigmentList,
      count: state._communityUser.taskAssigmentCount,
      currentPage: state._communityUser.taskAssigmentCurrentPageNumber,
      searchFormParameters:
        state._communityUser.taskAssigmentSearchFormParameters,
      loading: state._communityUser.loading,
      owner: { type: '_communityUser', id: state._communityUser.id }, // this is for model namespace and
    }))(TaskAssigmentSearch)
  }
  getTaskAssigmentCreateForm = () => {
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.taskAssigmentList,
      count: state._communityUser.taskAssigmentCount,
      currentPage: state._communityUser.taskAssigmentCurrentPageNumber,
      searchFormParameters:
        state._communityUser.taskAssigmentSearchFormParameters,
      loading: state._communityUser.loading,
      owner: { type: '_communityUser', id: state._communityUser.id }, // this is for model namespace and
    }))(TaskAssigmentCreateForm)
  }

  getTaskAssigmentUpdateForm = () => {
    return connect(state => ({
      selectedRows: state._communityUser.selectedRows,
      currentUpdateIndex: state._communityUser.currentUpdateIndex,
      owner: { type: '_communityUser', id: state._communityUser.id }, // this is for model namespace and
    }))(TaskAssigmentUpdateForm)
  }

  getTaskLikeSearch = () => {
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.taskLikeList,
      count: state._communityUser.taskLikeCount,
      currentPage: state._communityUser.taskLikeCurrentPageNumber,
      searchFormParameters: state._communityUser.taskLikeSearchFormParameters,
      loading: state._communityUser.loading,
      owner: { type: '_communityUser', id: state._communityUser.id }, // this is for model namespace and
    }))(TaskLikeSearch)
  }
  getTaskLikeCreateForm = () => {
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.taskLikeList,
      count: state._communityUser.taskLikeCount,
      currentPage: state._communityUser.taskLikeCurrentPageNumber,
      searchFormParameters: state._communityUser.taskLikeSearchFormParameters,
      loading: state._communityUser.loading,
      owner: { type: '_communityUser', id: state._communityUser.id }, // this is for model namespace and
    }))(TaskLikeCreateForm)
  }

  getTaskLikeUpdateForm = () => {
    return connect(state => ({
      selectedRows: state._communityUser.selectedRows,
      currentUpdateIndex: state._communityUser.currentUpdateIndex,
      owner: { type: '_communityUser', id: state._communityUser.id }, // this is for model namespace and
    }))(TaskLikeUpdateForm)
  }

  getTaskReplySearch = () => {
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.taskReplyList,
      count: state._communityUser.taskReplyCount,
      currentPage: state._communityUser.taskReplyCurrentPageNumber,
      searchFormParameters: state._communityUser.taskReplySearchFormParameters,
      loading: state._communityUser.loading,
      owner: { type: '_communityUser', id: state._communityUser.id }, // this is for model namespace and
    }))(TaskReplySearch)
  }
  getTaskReplyCreateForm = () => {
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.taskReplyList,
      count: state._communityUser.taskReplyCount,
      currentPage: state._communityUser.taskReplyCurrentPageNumber,
      searchFormParameters: state._communityUser.taskReplySearchFormParameters,
      loading: state._communityUser.loading,
      owner: { type: '_communityUser', id: state._communityUser.id }, // this is for model namespace and
    }))(TaskReplyCreateForm)
  }

  getTaskReplyUpdateForm = () => {
    return connect(state => ({
      selectedRows: state._communityUser.selectedRows,
      currentUpdateIndex: state._communityUser.currentUpdateIndex,
      owner: { type: '_communityUser', id: state._communityUser.id }, // this is for model namespace and
    }))(TaskReplyUpdateForm)
  }

  getTaskReplyLikeSearch = () => {
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.taskReplyLikeList,
      count: state._communityUser.taskReplyLikeCount,
      currentPage: state._communityUser.taskReplyLikeCurrentPageNumber,
      searchFormParameters:
        state._communityUser.taskReplyLikeSearchFormParameters,
      loading: state._communityUser.loading,
      owner: { type: '_communityUser', id: state._communityUser.id }, // this is for model namespace and
    }))(TaskReplyLikeSearch)
  }
  getTaskReplyLikeCreateForm = () => {
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.taskReplyLikeList,
      count: state._communityUser.taskReplyLikeCount,
      currentPage: state._communityUser.taskReplyLikeCurrentPageNumber,
      searchFormParameters:
        state._communityUser.taskReplyLikeSearchFormParameters,
      loading: state._communityUser.loading,
      owner: { type: '_communityUser', id: state._communityUser.id }, // this is for model namespace and
    }))(TaskReplyLikeCreateForm)
  }

  getTaskReplyLikeUpdateForm = () => {
    return connect(state => ({
      selectedRows: state._communityUser.selectedRows,
      currentUpdateIndex: state._communityUser.currentUpdateIndex,
      owner: { type: '_communityUser', id: state._communityUser.id }, // this is for model namespace and
    }))(TaskReplyLikeUpdateForm)
  }

  getThreadSearch = () => {
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.threadList,
      count: state._communityUser.threadCount,
      currentPage: state._communityUser.threadCurrentPageNumber,
      searchFormParameters: state._communityUser.threadSearchFormParameters,
      loading: state._communityUser.loading,
      owner: { type: '_communityUser', id: state._communityUser.id }, // this is for model namespace and
    }))(ThreadSearch)
  }
  getThreadCreateForm = () => {
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.threadList,
      count: state._communityUser.threadCount,
      currentPage: state._communityUser.threadCurrentPageNumber,
      searchFormParameters: state._communityUser.threadSearchFormParameters,
      loading: state._communityUser.loading,
      owner: { type: '_communityUser', id: state._communityUser.id }, // this is for model namespace and
    }))(ThreadCreateForm)
  }

  getThreadUpdateForm = () => {
    return connect(state => ({
      selectedRows: state._communityUser.selectedRows,
      currentUpdateIndex: state._communityUser.currentUpdateIndex,
      owner: { type: '_communityUser', id: state._communityUser.id }, // this is for model namespace and
    }))(ThreadUpdateForm)
  }

  getThreadReplySearch = () => {
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.threadReplyList,
      count: state._communityUser.threadReplyCount,
      currentPage: state._communityUser.threadReplyCurrentPageNumber,
      searchFormParameters:
        state._communityUser.threadReplySearchFormParameters,
      loading: state._communityUser.loading,
      owner: { type: '_communityUser', id: state._communityUser.id }, // this is for model namespace and
    }))(ThreadReplySearch)
  }
  getThreadReplyCreateForm = () => {
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.threadReplyList,
      count: state._communityUser.threadReplyCount,
      currentPage: state._communityUser.threadReplyCurrentPageNumber,
      searchFormParameters:
        state._communityUser.threadReplySearchFormParameters,
      loading: state._communityUser.loading,
      owner: { type: '_communityUser', id: state._communityUser.id }, // this is for model namespace and
    }))(ThreadReplyCreateForm)
  }

  getThreadReplyUpdateForm = () => {
    return connect(state => ({
      selectedRows: state._communityUser.selectedRows,
      currentUpdateIndex: state._communityUser.currentUpdateIndex,
      owner: { type: '_communityUser', id: state._communityUser.id }, // this is for model namespace and
    }))(ThreadReplyUpdateForm)
  }

  getThreadRegistrationSearch = () => {
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.threadRegistrationList,
      count: state._communityUser.threadRegistrationCount,
      currentPage: state._communityUser.threadRegistrationCurrentPageNumber,
      searchFormParameters:
        state._communityUser.threadRegistrationSearchFormParameters,
      loading: state._communityUser.loading,
      owner: { type: '_communityUser', id: state._communityUser.id }, // this is for model namespace and
    }))(ThreadRegistrationSearch)
  }
  getThreadRegistrationCreateForm = () => {
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.threadRegistrationList,
      count: state._communityUser.threadRegistrationCount,
      currentPage: state._communityUser.threadRegistrationCurrentPageNumber,
      searchFormParameters:
        state._communityUser.threadRegistrationSearchFormParameters,
      loading: state._communityUser.loading,
      owner: { type: '_communityUser', id: state._communityUser.id }, // this is for model namespace and
    }))(ThreadRegistrationCreateForm)
  }

  getThreadRegistrationUpdateForm = () => {
    return connect(state => ({
      selectedRows: state._communityUser.selectedRows,
      currentUpdateIndex: state._communityUser.currentUpdateIndex,
      owner: { type: '_communityUser', id: state._communityUser.id }, // this is for model namespace and
    }))(ThreadRegistrationUpdateForm)
  }

  getThreadLikeSearch = () => {
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.threadLikeList,
      count: state._communityUser.threadLikeCount,
      currentPage: state._communityUser.threadLikeCurrentPageNumber,
      searchFormParameters: state._communityUser.threadLikeSearchFormParameters,
      loading: state._communityUser.loading,
      owner: { type: '_communityUser', id: state._communityUser.id }, // this is for model namespace and
    }))(ThreadLikeSearch)
  }
  getThreadLikeCreateForm = () => {
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.threadLikeList,
      count: state._communityUser.threadLikeCount,
      currentPage: state._communityUser.threadLikeCurrentPageNumber,
      searchFormParameters: state._communityUser.threadLikeSearchFormParameters,
      loading: state._communityUser.loading,
      owner: { type: '_communityUser', id: state._communityUser.id }, // this is for model namespace and
    }))(ThreadLikeCreateForm)
  }

  getThreadLikeUpdateForm = () => {
    return connect(state => ({
      selectedRows: state._communityUser.selectedRows,
      currentUpdateIndex: state._communityUser.currentUpdateIndex,
      owner: { type: '_communityUser', id: state._communityUser.id }, // this is for model namespace and
    }))(ThreadLikeUpdateForm)
  }

  getThreadReplyLikeSearch = () => {
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.threadReplyLikeList,
      count: state._communityUser.threadReplyLikeCount,
      currentPage: state._communityUser.threadReplyLikeCurrentPageNumber,
      searchFormParameters:
        state._communityUser.threadReplyLikeSearchFormParameters,
      loading: state._communityUser.loading,
      owner: { type: '_communityUser', id: state._communityUser.id }, // this is for model namespace and
    }))(ThreadReplyLikeSearch)
  }
  getThreadReplyLikeCreateForm = () => {
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.threadReplyLikeList,
      count: state._communityUser.threadReplyLikeCount,
      currentPage: state._communityUser.threadReplyLikeCurrentPageNumber,
      searchFormParameters:
        state._communityUser.threadReplyLikeSearchFormParameters,
      loading: state._communityUser.loading,
      owner: { type: '_communityUser', id: state._communityUser.id }, // this is for model namespace and
    }))(ThreadReplyLikeCreateForm)
  }

  getThreadReplyLikeUpdateForm = () => {
    return connect(state => ({
      selectedRows: state._communityUser.selectedRows,
      currentUpdateIndex: state._communityUser.currentUpdateIndex,
      owner: { type: '_communityUser', id: state._communityUser.id }, // this is for model namespace and
    }))(ThreadReplyLikeUpdateForm)
  }

  getFanSearch = () => {
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.fanList,
      count: state._communityUser.fanCount,
      currentPage: state._communityUser.fanCurrentPageNumber,
      searchFormParameters: state._communityUser.fanSearchFormParameters,
      loading: state._communityUser.loading,
      owner: { type: '_communityUser', id: state._communityUser.id }, // this is for model namespace and
    }))(FanSearch)
  }
  getFanCreateForm = () => {
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.fanList,
      count: state._communityUser.fanCount,
      currentPage: state._communityUser.fanCurrentPageNumber,
      searchFormParameters: state._communityUser.fanSearchFormParameters,
      loading: state._communityUser.loading,
      owner: { type: '_communityUser', id: state._communityUser.id }, // this is for model namespace and
    }))(FanCreateForm)
  }

  getFanUpdateForm = () => {
    return connect(state => ({
      selectedRows: state._communityUser.selectedRows,
      currentUpdateIndex: state._communityUser.currentUpdateIndex,
      owner: { type: '_communityUser', id: state._communityUser.id }, // this is for model namespace and
    }))(FanUpdateForm)
  }

  getFollowSearch = () => {
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.followList,
      count: state._communityUser.followCount,
      currentPage: state._communityUser.followCurrentPageNumber,
      searchFormParameters: state._communityUser.followSearchFormParameters,
      loading: state._communityUser.loading,
      owner: { type: '_communityUser', id: state._communityUser.id }, // this is for model namespace and
    }))(FollowSearch)
  }
  getFollowCreateForm = () => {
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.followList,
      count: state._communityUser.followCount,
      currentPage: state._communityUser.followCurrentPageNumber,
      searchFormParameters: state._communityUser.followSearchFormParameters,
      loading: state._communityUser.loading,
      owner: { type: '_communityUser', id: state._communityUser.id }, // this is for model namespace and
    }))(FollowCreateForm)
  }

  getFollowUpdateForm = () => {
    return connect(state => ({
      selectedRows: state._communityUser.selectedRows,
      currentUpdateIndex: state._communityUser.currentUpdateIndex,
      owner: { type: '_communityUser', id: state._communityUser.id }, // this is for model namespace and
    }))(FollowUpdateForm)
  }

  getBonusPointSearch = () => {
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.bonusPointList,
      count: state._communityUser.bonusPointCount,
      currentPage: state._communityUser.bonusPointCurrentPageNumber,
      searchFormParameters: state._communityUser.bonusPointSearchFormParameters,
      loading: state._communityUser.loading,
      owner: { type: '_communityUser', id: state._communityUser.id }, // this is for model namespace and
    }))(BonusPointSearch)
  }
  getBonusPointCreateForm = () => {
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.bonusPointList,
      count: state._communityUser.bonusPointCount,
      currentPage: state._communityUser.bonusPointCurrentPageNumber,
      searchFormParameters: state._communityUser.bonusPointSearchFormParameters,
      loading: state._communityUser.loading,
      owner: { type: '_communityUser', id: state._communityUser.id }, // this is for model namespace and
    }))(BonusPointCreateForm)
  }

  getBonusPointUpdateForm = () => {
    return connect(state => ({
      selectedRows: state._communityUser.selectedRows,
      currentUpdateIndex: state._communityUser.currentUpdateIndex,
      owner: { type: '_communityUser', id: state._communityUser.id }, // this is for model namespace and
    }))(BonusPointUpdateForm)
  }

  getExperiencePointSearch = () => {
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.experiencePointList,
      count: state._communityUser.experiencePointCount,
      currentPage: state._communityUser.experiencePointCurrentPageNumber,
      searchFormParameters:
        state._communityUser.experiencePointSearchFormParameters,
      loading: state._communityUser.loading,
      owner: { type: '_communityUser', id: state._communityUser.id }, // this is for model namespace and
    }))(ExperiencePointSearch)
  }
  getExperiencePointCreateForm = () => {
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.experiencePointList,
      count: state._communityUser.experiencePointCount,
      currentPage: state._communityUser.experiencePointCurrentPageNumber,
      searchFormParameters:
        state._communityUser.experiencePointSearchFormParameters,
      loading: state._communityUser.loading,
      owner: { type: '_communityUser', id: state._communityUser.id }, // this is for model namespace and
    }))(ExperiencePointCreateForm)
  }

  getExperiencePointUpdateForm = () => {
    return connect(state => ({
      selectedRows: state._communityUser.selectedRows,
      currentUpdateIndex: state._communityUser.currentUpdateIndex,
      owner: { type: '_communityUser', id: state._communityUser.id }, // this is for model namespace and
    }))(ExperiencePointUpdateForm)
  }

  getPageTitle = () => {
    // const { location } = this.props
    // const { pathname } = location
    const title = '帮帮兔社区运营中心'
    return title
  }

  handleOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(
      key => this.state.openKeys.indexOf(key) === -1
    )
    this.setState({
      openKeys: latestOpenKey ? [latestOpenKey] : [],
    })
  }
  toggle = () => {
    const { collapsed } = this.props
    this.props.dispatch({
      type: 'global/changeLayoutCollapsed',
      payload: !collapsed,
    })
  }

  render() {
    // const { collapsed, fetchingNotices,loading } = this.props
    const { collapsed } = this.props
    // Don't show popup menu when it is been collapsed
    const menuProps = collapsed
      ? {}
      : {
          openKeys: this.state.openKeys,
        }
    const layout = (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          breakpoint="md"
          onCollapse={this.onCollapse}
          width={256}
          className={styles.sider}
        >
          <div className={styles.logo}>
            <img src="/scm.svg" alt="logo" onClick={this.toggle} />
            <Link to="/home">
              {' '}
              <h1>社区用户</h1>
            </Link>
          </div>

          <Menu
            theme="dark"
            mode="inline"
            {...menuProps}
            onOpenChange={this.handleOpenChange}
            selectedKeys={this.getCurrentMenuSelectedKeys()}
            style={{ margin: '16px 0', width: '100%' }}
          >
            <Menu.Item>
              <Link
                to={`/communityUser/${this.props.communityUser.id}/dashboard`}
              >
                <Icon type="dashboard" />
                <span>仪表板</span>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link
                to={`/communityUser/${this.props.communityUser.id}/editDetail`}
              >
                <Icon type="edit" />
                <span>详情编辑</span>
              </Link>
            </Menu.Item>
            {this.getNavMenuItems(this.props.communityUser.id)}
          </Menu>
        </Sider>
        <Layout>
          <Content style={{ margin: '24px 24px 0', height: '100%' }}>
            <Switch>
              <Route
                path="/communityUser/:id/dashboard"
                component={CommunityUserDashboard}
              />
              <Route
                path="/communityUser/:id/editDetail"
                component={CommunityUserEditDetail}
              />

              <Route
                path="/communityUser/:id/list/patientInfoList"
                component={this.getPatientInfoSearch()}
              />
              <Route
                path="/communityUser/:id/list/patientInfoCreateForm"
                component={this.getPatientInfoCreateForm()}
              />
              <Route
                path="/communityUser/:id/list/patientInfoUpdateForm"
                component={this.getPatientInfoUpdateForm()}
              />

              <Route
                path="/communityUser/:id/list/userSkillList"
                component={this.getUserSkillSearch()}
              />
              <Route
                path="/communityUser/:id/list/userSkillCreateForm"
                component={this.getUserSkillCreateForm()}
              />
              <Route
                path="/communityUser/:id/list/userSkillUpdateForm"
                component={this.getUserSkillUpdateForm()}
              />

              <Route
                path="/communityUser/:id/list/messageFilterList"
                component={this.getMessageFilterSearch()}
              />
              <Route
                path="/communityUser/:id/list/messageFilterCreateForm"
                component={this.getMessageFilterCreateForm()}
              />
              <Route
                path="/communityUser/:id/list/messageFilterUpdateForm"
                component={this.getMessageFilterUpdateForm()}
              />

              <Route
                path="/communityUser/:id/list/userMessageList"
                component={this.getUserMessageSearch()}
              />
              <Route
                path="/communityUser/:id/list/userMessageCreateForm"
                component={this.getUserMessageCreateForm()}
              />
              <Route
                path="/communityUser/:id/list/userMessageUpdateForm"
                component={this.getUserMessageUpdateForm()}
              />

              <Route
                path="/communityUser/:id/list/taskList"
                component={this.getTaskSearch()}
              />
              <Route
                path="/communityUser/:id/list/taskCreateForm"
                component={this.getTaskCreateForm()}
              />
              <Route
                path="/communityUser/:id/list/taskUpdateForm"
                component={this.getTaskUpdateForm()}
              />

              <Route
                path="/communityUser/:id/list/taskAssigmentList"
                component={this.getTaskAssigmentSearch()}
              />
              <Route
                path="/communityUser/:id/list/taskAssigmentCreateForm"
                component={this.getTaskAssigmentCreateForm()}
              />
              <Route
                path="/communityUser/:id/list/taskAssigmentUpdateForm"
                component={this.getTaskAssigmentUpdateForm()}
              />

              <Route
                path="/communityUser/:id/list/taskLikeList"
                component={this.getTaskLikeSearch()}
              />
              <Route
                path="/communityUser/:id/list/taskLikeCreateForm"
                component={this.getTaskLikeCreateForm()}
              />
              <Route
                path="/communityUser/:id/list/taskLikeUpdateForm"
                component={this.getTaskLikeUpdateForm()}
              />

              <Route
                path="/communityUser/:id/list/taskReplyList"
                component={this.getTaskReplySearch()}
              />
              <Route
                path="/communityUser/:id/list/taskReplyCreateForm"
                component={this.getTaskReplyCreateForm()}
              />
              <Route
                path="/communityUser/:id/list/taskReplyUpdateForm"
                component={this.getTaskReplyUpdateForm()}
              />

              <Route
                path="/communityUser/:id/list/taskReplyLikeList"
                component={this.getTaskReplyLikeSearch()}
              />
              <Route
                path="/communityUser/:id/list/taskReplyLikeCreateForm"
                component={this.getTaskReplyLikeCreateForm()}
              />
              <Route
                path="/communityUser/:id/list/taskReplyLikeUpdateForm"
                component={this.getTaskReplyLikeUpdateForm()}
              />

              <Route
                path="/communityUser/:id/list/threadList"
                component={this.getThreadSearch()}
              />
              <Route
                path="/communityUser/:id/list/threadCreateForm"
                component={this.getThreadCreateForm()}
              />
              <Route
                path="/communityUser/:id/list/threadUpdateForm"
                component={this.getThreadUpdateForm()}
              />

              <Route
                path="/communityUser/:id/list/threadReplyList"
                component={this.getThreadReplySearch()}
              />
              <Route
                path="/communityUser/:id/list/threadReplyCreateForm"
                component={this.getThreadReplyCreateForm()}
              />
              <Route
                path="/communityUser/:id/list/threadReplyUpdateForm"
                component={this.getThreadReplyUpdateForm()}
              />

              <Route
                path="/communityUser/:id/list/threadRegistrationList"
                component={this.getThreadRegistrationSearch()}
              />
              <Route
                path="/communityUser/:id/list/threadRegistrationCreateForm"
                component={this.getThreadRegistrationCreateForm()}
              />
              <Route
                path="/communityUser/:id/list/threadRegistrationUpdateForm"
                component={this.getThreadRegistrationUpdateForm()}
              />

              <Route
                path="/communityUser/:id/list/threadLikeList"
                component={this.getThreadLikeSearch()}
              />
              <Route
                path="/communityUser/:id/list/threadLikeCreateForm"
                component={this.getThreadLikeCreateForm()}
              />
              <Route
                path="/communityUser/:id/list/threadLikeUpdateForm"
                component={this.getThreadLikeUpdateForm()}
              />

              <Route
                path="/communityUser/:id/list/threadReplyLikeList"
                component={this.getThreadReplyLikeSearch()}
              />
              <Route
                path="/communityUser/:id/list/threadReplyLikeCreateForm"
                component={this.getThreadReplyLikeCreateForm()}
              />
              <Route
                path="/communityUser/:id/list/threadReplyLikeUpdateForm"
                component={this.getThreadReplyLikeUpdateForm()}
              />

              <Route
                path="/communityUser/:id/list/fanList"
                component={this.getFanSearch()}
              />
              <Route
                path="/communityUser/:id/list/fanCreateForm"
                component={this.getFanCreateForm()}
              />
              <Route
                path="/communityUser/:id/list/fanUpdateForm"
                component={this.getFanUpdateForm()}
              />

              <Route
                path="/communityUser/:id/list/followList"
                component={this.getFollowSearch()}
              />
              <Route
                path="/communityUser/:id/list/followCreateForm"
                component={this.getFollowCreateForm()}
              />
              <Route
                path="/communityUser/:id/list/followUpdateForm"
                component={this.getFollowUpdateForm()}
              />

              <Route
                path="/communityUser/:id/list/bonusPointList"
                component={this.getBonusPointSearch()}
              />
              <Route
                path="/communityUser/:id/list/bonusPointCreateForm"
                component={this.getBonusPointCreateForm()}
              />
              <Route
                path="/communityUser/:id/list/bonusPointUpdateForm"
                component={this.getBonusPointUpdateForm()}
              />

              <Route
                path="/communityUser/:id/list/experiencePointList"
                component={this.getExperiencePointSearch()}
              />
              <Route
                path="/communityUser/:id/list/experiencePointCreateForm"
                component={this.getExperiencePointCreateForm()}
              />
              <Route
                path="/communityUser/:id/list/experiencePointUpdateForm"
                component={this.getExperiencePointUpdateForm()}
              />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    )
    return (
      <DocumentTitle title={this.getPageTitle()}>
        <ContainerQuery query={query}>
          {params => <div className={classNames(params)}>{layout}</div>}
        </ContainerQuery>
      </DocumentTitle>
    )
  }
}

export default connect(state => ({
  collapsed: state.global.collapsed,
  fetchingNotices: state.global.fetchingNotices,
  notices: state.global.notices,
  communityUser: state._communityUser,
  ...state,
}))(CommunityUserBizApp)
