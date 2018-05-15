import React from 'react'
import PropTypes from 'prop-types'
import {
  Layout,
  Menu,
  Icon,
  Avatar,
  Dropdown,
  Tag,
  message,
  Spin,
  Breadcrumb,
  AutoComplete,
  Input,
} from 'antd'
import DocumentTitle from 'react-document-title'
import { connect } from 'dva'
import { Link, Route, Redirect, Switch } from 'dva/router'
import moment from 'moment'
import groupBy from 'lodash/groupBy'
import { ContainerQuery } from 'react-container-query'
import classNames from 'classnames'
import styles from './CommunityUser.app.less'
import {sessionObject} from '../../utils/utils'

import HeaderSearch from '../../components/HeaderSearch';
import NoticeIcon from '../../components/NoticeIcon';
import GlobalFooter from '../../components/GlobalFooter';


import GlobalComponents from '../../custcomponents';

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


  
const menuData = {menuName:"社区用户", menuFor: "communityUser",
  		subItems: [
  {name: 'patientInfoList', displayName:'病人信息'},
  {name: 'userSkillList', displayName:'用户技能'},
  {name: 'messageFilterList', displayName:'消息过滤'},
  {name: 'userMessageList', displayName:'用户消息'},
  {name: 'taskList', displayName:'任务'},
  {name: 'taskAssigmentList', displayName:'任务分配'},
  {name: 'taskLikeList', displayName:'任务点赞'},
  {name: 'taskReplyList', displayName:'回复任务'},
  {name: 'taskReplyLikeList', displayName:'任务回复点赞'},
  {name: 'threadList', displayName:'主贴'},
  {name: 'threadReplyList', displayName:'跟帖回复'},
  {name: 'threadRegistrationList', displayName:'活动注册'},
  {name: 'threadLikeList', displayName:'主贴点赞'},
  {name: 'threadReplyLikeList', displayName:'跟帖回复点赞'},
  {name: 'fanList', displayName:'粉丝'},
  {name: 'followList', displayName:'关注'},
  {name: 'bonusPointList', displayName:'积分'},
  {name: 'experiencePointList', displayName:'成长值'},
  		
  		
  		],
};

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
  onCollapse = (collapsed) => {
    this.props.dispatch({
      type: 'global/changeLayoutCollapsed',
      payload: collapsed,
    })
  }

  getDefaultCollapsedSubMenus = (props) => {
    const currentMenuSelectedKeys = [...this.getCurrentMenuSelectedKeys(props)]
    currentMenuSelectedKeys.splice(-1, 1)
    if (currentMenuSelectedKeys.length === 0) {
      return ['/communityUser/']
    }
    return currentMenuSelectedKeys
  }
  getCurrentMenuSelectedKeys = (props) => {
    const { location: { pathname } } = props || this.props
    const keys = pathname.split('/').slice(1)
    if (keys.length === 1 && keys[0] === '') {
      return [this.menus[0].key]
    }
    return keys
  }
  
  getNavMenuItems = () => {
  

    const menuData = sessionObject('menuData')
    const targetApp = sessionObject('targetApp')
	const {objectId}=targetApp;
  
    return (
      <SubMenu key="firstOne" title={
        <span>
          <Icon type="profile" />
          <span>{menuData.menuName}</span>
        </span>}
      >
        {menuData.subItems.map((item)=>(<Menu.Item key={item.name}>
          <Link to={`/${menuData.menuFor}/${objectId}/list/${item.name}/${item.displayName}列表`}>{item.displayName}</Link>
        </Menu.Item>))}
       
      </SubMenu>
    )
  }
  
  getNavMenuItems2 = (objectId) => {
  
    const {menuData,targetApp} = this.props.breadcrumb;

  
    return (
      <SubMenu key="firstOne" title={
        <span>
          <Icon type="profile" />
          <span>{menuData.menuName}</span>
        </span>}
      >
        {menuData.subItems.map((item)=>(<Menu.Item>
          <Link to={`/${menuData.menuFor}/${objectId}/list/${item.name}`}>{item.displayName}</Link>
        </Menu.Item>))}
       
      </SubMenu>
    )
  }


  getPatientInfoSearch = () => {
    const {PatientInfoSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.patientInfoList,
      count: state._communityUser.patientInfoCount,
      currentPage: state._communityUser.patientInfoCurrentPageNumber,
      searchFormParameters: state._communityUser.patientInfoSearchFormParameters,
      loading: state._communityUser.loading,
      partialList: state._communityUser.partialList,
      owner: { type: '_communityUser', id: state._communityUser.id, referenceName: 'user', listName: 'patientInfoList', ref:state._communityUser, listDisplayName: '病人信息列表' }, // this is for model namespace and
    }))(PatientInfoSearch)
  }
  getPatientInfoCreateForm = () => {
   	const {PatientInfoCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.patientInfoList,
      count: state._communityUser.patientInfoCount,
      currentPage: state._communityUser.patientInfoCurrentPageNumber,
      searchFormParameters: state._communityUser.patientInfoSearchFormParameters,
      loading: state._communityUser.loading,
      owner: { type: '_communityUser', id: state._communityUser.id, referenceName: 'user', listName: 'patientInfoList', ref:state._communityUser, listDisplayName: '病人信息列表'}, // this is for model namespace and
    }))(PatientInfoCreateForm)
  }
  
  getPatientInfoUpdateForm = () => {
  	const {PatientInfoUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._communityUser.selectedRows,
      currentUpdateIndex: state._communityUser.currentUpdateIndex,
      owner: { type: '_communityUser', id: state._communityUser.id, listName: 'patientInfoList', ref:state._communityUser, listDisplayName: '病人信息列表' }, // this is for model namespace and
    }))(PatientInfoUpdateForm)
  }

  getUserSkillSearch = () => {
    const {UserSkillSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.userSkillList,
      count: state._communityUser.userSkillCount,
      currentPage: state._communityUser.userSkillCurrentPageNumber,
      searchFormParameters: state._communityUser.userSkillSearchFormParameters,
      loading: state._communityUser.loading,
      partialList: state._communityUser.partialList,
      owner: { type: '_communityUser', id: state._communityUser.id, referenceName: 'user', listName: 'userSkillList', ref:state._communityUser, listDisplayName: '用户技能列表' }, // this is for model namespace and
    }))(UserSkillSearch)
  }
  getUserSkillCreateForm = () => {
   	const {UserSkillCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.userSkillList,
      count: state._communityUser.userSkillCount,
      currentPage: state._communityUser.userSkillCurrentPageNumber,
      searchFormParameters: state._communityUser.userSkillSearchFormParameters,
      loading: state._communityUser.loading,
      owner: { type: '_communityUser', id: state._communityUser.id, referenceName: 'user', listName: 'userSkillList', ref:state._communityUser, listDisplayName: '用户技能列表'}, // this is for model namespace and
    }))(UserSkillCreateForm)
  }
  
  getUserSkillUpdateForm = () => {
  	const {UserSkillUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._communityUser.selectedRows,
      currentUpdateIndex: state._communityUser.currentUpdateIndex,
      owner: { type: '_communityUser', id: state._communityUser.id, listName: 'userSkillList', ref:state._communityUser, listDisplayName: '用户技能列表' }, // this is for model namespace and
    }))(UserSkillUpdateForm)
  }

  getMessageFilterSearch = () => {
    const {MessageFilterSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.messageFilterList,
      count: state._communityUser.messageFilterCount,
      currentPage: state._communityUser.messageFilterCurrentPageNumber,
      searchFormParameters: state._communityUser.messageFilterSearchFormParameters,
      loading: state._communityUser.loading,
      partialList: state._communityUser.partialList,
      owner: { type: '_communityUser', id: state._communityUser.id, referenceName: 'user', listName: 'messageFilterList', ref:state._communityUser, listDisplayName: '消息过滤列表' }, // this is for model namespace and
    }))(MessageFilterSearch)
  }
  getMessageFilterCreateForm = () => {
   	const {MessageFilterCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.messageFilterList,
      count: state._communityUser.messageFilterCount,
      currentPage: state._communityUser.messageFilterCurrentPageNumber,
      searchFormParameters: state._communityUser.messageFilterSearchFormParameters,
      loading: state._communityUser.loading,
      owner: { type: '_communityUser', id: state._communityUser.id, referenceName: 'user', listName: 'messageFilterList', ref:state._communityUser, listDisplayName: '消息过滤列表'}, // this is for model namespace and
    }))(MessageFilterCreateForm)
  }
  
  getMessageFilterUpdateForm = () => {
  	const {MessageFilterUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._communityUser.selectedRows,
      currentUpdateIndex: state._communityUser.currentUpdateIndex,
      owner: { type: '_communityUser', id: state._communityUser.id, listName: 'messageFilterList', ref:state._communityUser, listDisplayName: '消息过滤列表' }, // this is for model namespace and
    }))(MessageFilterUpdateForm)
  }

  getUserMessageSearch = () => {
    const {UserMessageSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.userMessageList,
      count: state._communityUser.userMessageCount,
      currentPage: state._communityUser.userMessageCurrentPageNumber,
      searchFormParameters: state._communityUser.userMessageSearchFormParameters,
      loading: state._communityUser.loading,
      partialList: state._communityUser.partialList,
      owner: { type: '_communityUser', id: state._communityUser.id, referenceName: 'receiver', listName: 'userMessageList', ref:state._communityUser, listDisplayName: '用户消息列表' }, // this is for model namespace and
    }))(UserMessageSearch)
  }
  getUserMessageCreateForm = () => {
   	const {UserMessageCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.userMessageList,
      count: state._communityUser.userMessageCount,
      currentPage: state._communityUser.userMessageCurrentPageNumber,
      searchFormParameters: state._communityUser.userMessageSearchFormParameters,
      loading: state._communityUser.loading,
      owner: { type: '_communityUser', id: state._communityUser.id, referenceName: 'receiver', listName: 'userMessageList', ref:state._communityUser, listDisplayName: '用户消息列表'}, // this is for model namespace and
    }))(UserMessageCreateForm)
  }
  
  getUserMessageUpdateForm = () => {
  	const {UserMessageUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._communityUser.selectedRows,
      currentUpdateIndex: state._communityUser.currentUpdateIndex,
      owner: { type: '_communityUser', id: state._communityUser.id, listName: 'userMessageList', ref:state._communityUser, listDisplayName: '用户消息列表' }, // this is for model namespace and
    }))(UserMessageUpdateForm)
  }

  getTaskSearch = () => {
    const {TaskSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.taskList,
      count: state._communityUser.taskCount,
      currentPage: state._communityUser.taskCurrentPageNumber,
      searchFormParameters: state._communityUser.taskSearchFormParameters,
      loading: state._communityUser.loading,
      partialList: state._communityUser.partialList,
      owner: { type: '_communityUser', id: state._communityUser.id, referenceName: 'creator', listName: 'taskList', ref:state._communityUser, listDisplayName: '任务列表' }, // this is for model namespace and
    }))(TaskSearch)
  }
  getTaskCreateForm = () => {
   	const {TaskCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.taskList,
      count: state._communityUser.taskCount,
      currentPage: state._communityUser.taskCurrentPageNumber,
      searchFormParameters: state._communityUser.taskSearchFormParameters,
      loading: state._communityUser.loading,
      owner: { type: '_communityUser', id: state._communityUser.id, referenceName: 'creator', listName: 'taskList', ref:state._communityUser, listDisplayName: '任务列表'}, // this is for model namespace and
    }))(TaskCreateForm)
  }
  
  getTaskUpdateForm = () => {
  	const {TaskUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._communityUser.selectedRows,
      currentUpdateIndex: state._communityUser.currentUpdateIndex,
      owner: { type: '_communityUser', id: state._communityUser.id, listName: 'taskList', ref:state._communityUser, listDisplayName: '任务列表' }, // this is for model namespace and
    }))(TaskUpdateForm)
  }

  getTaskAssigmentSearch = () => {
    const {TaskAssigmentSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.taskAssigmentList,
      count: state._communityUser.taskAssigmentCount,
      currentPage: state._communityUser.taskAssigmentCurrentPageNumber,
      searchFormParameters: state._communityUser.taskAssigmentSearchFormParameters,
      loading: state._communityUser.loading,
      partialList: state._communityUser.partialList,
      owner: { type: '_communityUser', id: state._communityUser.id, referenceName: 'assignee', listName: 'taskAssigmentList', ref:state._communityUser, listDisplayName: '任务分配列表' }, // this is for model namespace and
    }))(TaskAssigmentSearch)
  }
  getTaskAssigmentCreateForm = () => {
   	const {TaskAssigmentCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.taskAssigmentList,
      count: state._communityUser.taskAssigmentCount,
      currentPage: state._communityUser.taskAssigmentCurrentPageNumber,
      searchFormParameters: state._communityUser.taskAssigmentSearchFormParameters,
      loading: state._communityUser.loading,
      owner: { type: '_communityUser', id: state._communityUser.id, referenceName: 'assignee', listName: 'taskAssigmentList', ref:state._communityUser, listDisplayName: '任务分配列表'}, // this is for model namespace and
    }))(TaskAssigmentCreateForm)
  }
  
  getTaskAssigmentUpdateForm = () => {
  	const {TaskAssigmentUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._communityUser.selectedRows,
      currentUpdateIndex: state._communityUser.currentUpdateIndex,
      owner: { type: '_communityUser', id: state._communityUser.id, listName: 'taskAssigmentList', ref:state._communityUser, listDisplayName: '任务分配列表' }, // this is for model namespace and
    }))(TaskAssigmentUpdateForm)
  }

  getTaskLikeSearch = () => {
    const {TaskLikeSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.taskLikeList,
      count: state._communityUser.taskLikeCount,
      currentPage: state._communityUser.taskLikeCurrentPageNumber,
      searchFormParameters: state._communityUser.taskLikeSearchFormParameters,
      loading: state._communityUser.loading,
      partialList: state._communityUser.partialList,
      owner: { type: '_communityUser', id: state._communityUser.id, referenceName: 'replier', listName: 'taskLikeList', ref:state._communityUser, listDisplayName: '任务点赞列表' }, // this is for model namespace and
    }))(TaskLikeSearch)
  }
  getTaskLikeCreateForm = () => {
   	const {TaskLikeCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.taskLikeList,
      count: state._communityUser.taskLikeCount,
      currentPage: state._communityUser.taskLikeCurrentPageNumber,
      searchFormParameters: state._communityUser.taskLikeSearchFormParameters,
      loading: state._communityUser.loading,
      owner: { type: '_communityUser', id: state._communityUser.id, referenceName: 'replier', listName: 'taskLikeList', ref:state._communityUser, listDisplayName: '任务点赞列表'}, // this is for model namespace and
    }))(TaskLikeCreateForm)
  }
  
  getTaskLikeUpdateForm = () => {
  	const {TaskLikeUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._communityUser.selectedRows,
      currentUpdateIndex: state._communityUser.currentUpdateIndex,
      owner: { type: '_communityUser', id: state._communityUser.id, listName: 'taskLikeList', ref:state._communityUser, listDisplayName: '任务点赞列表' }, // this is for model namespace and
    }))(TaskLikeUpdateForm)
  }

  getTaskReplySearch = () => {
    const {TaskReplySearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.taskReplyList,
      count: state._communityUser.taskReplyCount,
      currentPage: state._communityUser.taskReplyCurrentPageNumber,
      searchFormParameters: state._communityUser.taskReplySearchFormParameters,
      loading: state._communityUser.loading,
      partialList: state._communityUser.partialList,
      owner: { type: '_communityUser', id: state._communityUser.id, referenceName: 'replier', listName: 'taskReplyList', ref:state._communityUser, listDisplayName: '回复任务列表' }, // this is for model namespace and
    }))(TaskReplySearch)
  }
  getTaskReplyCreateForm = () => {
   	const {TaskReplyCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.taskReplyList,
      count: state._communityUser.taskReplyCount,
      currentPage: state._communityUser.taskReplyCurrentPageNumber,
      searchFormParameters: state._communityUser.taskReplySearchFormParameters,
      loading: state._communityUser.loading,
      owner: { type: '_communityUser', id: state._communityUser.id, referenceName: 'replier', listName: 'taskReplyList', ref:state._communityUser, listDisplayName: '回复任务列表'}, // this is for model namespace and
    }))(TaskReplyCreateForm)
  }
  
  getTaskReplyUpdateForm = () => {
  	const {TaskReplyUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._communityUser.selectedRows,
      currentUpdateIndex: state._communityUser.currentUpdateIndex,
      owner: { type: '_communityUser', id: state._communityUser.id, listName: 'taskReplyList', ref:state._communityUser, listDisplayName: '回复任务列表' }, // this is for model namespace and
    }))(TaskReplyUpdateForm)
  }

  getTaskReplyLikeSearch = () => {
    const {TaskReplyLikeSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.taskReplyLikeList,
      count: state._communityUser.taskReplyLikeCount,
      currentPage: state._communityUser.taskReplyLikeCurrentPageNumber,
      searchFormParameters: state._communityUser.taskReplyLikeSearchFormParameters,
      loading: state._communityUser.loading,
      partialList: state._communityUser.partialList,
      owner: { type: '_communityUser', id: state._communityUser.id, referenceName: 'replier', listName: 'taskReplyLikeList', ref:state._communityUser, listDisplayName: '任务回复点赞列表' }, // this is for model namespace and
    }))(TaskReplyLikeSearch)
  }
  getTaskReplyLikeCreateForm = () => {
   	const {TaskReplyLikeCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.taskReplyLikeList,
      count: state._communityUser.taskReplyLikeCount,
      currentPage: state._communityUser.taskReplyLikeCurrentPageNumber,
      searchFormParameters: state._communityUser.taskReplyLikeSearchFormParameters,
      loading: state._communityUser.loading,
      owner: { type: '_communityUser', id: state._communityUser.id, referenceName: 'replier', listName: 'taskReplyLikeList', ref:state._communityUser, listDisplayName: '任务回复点赞列表'}, // this is for model namespace and
    }))(TaskReplyLikeCreateForm)
  }
  
  getTaskReplyLikeUpdateForm = () => {
  	const {TaskReplyLikeUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._communityUser.selectedRows,
      currentUpdateIndex: state._communityUser.currentUpdateIndex,
      owner: { type: '_communityUser', id: state._communityUser.id, listName: 'taskReplyLikeList', ref:state._communityUser, listDisplayName: '任务回复点赞列表' }, // this is for model namespace and
    }))(TaskReplyLikeUpdateForm)
  }

  getThreadSearch = () => {
    const {ThreadSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.threadList,
      count: state._communityUser.threadCount,
      currentPage: state._communityUser.threadCurrentPageNumber,
      searchFormParameters: state._communityUser.threadSearchFormParameters,
      loading: state._communityUser.loading,
      partialList: state._communityUser.partialList,
      owner: { type: '_communityUser', id: state._communityUser.id, referenceName: 'creator', listName: 'threadList', ref:state._communityUser, listDisplayName: '主贴列表' }, // this is for model namespace and
    }))(ThreadSearch)
  }
  getThreadCreateForm = () => {
   	const {ThreadCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.threadList,
      count: state._communityUser.threadCount,
      currentPage: state._communityUser.threadCurrentPageNumber,
      searchFormParameters: state._communityUser.threadSearchFormParameters,
      loading: state._communityUser.loading,
      owner: { type: '_communityUser', id: state._communityUser.id, referenceName: 'creator', listName: 'threadList', ref:state._communityUser, listDisplayName: '主贴列表'}, // this is for model namespace and
    }))(ThreadCreateForm)
  }
  
  getThreadUpdateForm = () => {
  	const {ThreadUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._communityUser.selectedRows,
      currentUpdateIndex: state._communityUser.currentUpdateIndex,
      owner: { type: '_communityUser', id: state._communityUser.id, listName: 'threadList', ref:state._communityUser, listDisplayName: '主贴列表' }, // this is for model namespace and
    }))(ThreadUpdateForm)
  }

  getThreadReplySearch = () => {
    const {ThreadReplySearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.threadReplyList,
      count: state._communityUser.threadReplyCount,
      currentPage: state._communityUser.threadReplyCurrentPageNumber,
      searchFormParameters: state._communityUser.threadReplySearchFormParameters,
      loading: state._communityUser.loading,
      partialList: state._communityUser.partialList,
      owner: { type: '_communityUser', id: state._communityUser.id, referenceName: 'replier', listName: 'threadReplyList', ref:state._communityUser, listDisplayName: '跟帖回复列表' }, // this is for model namespace and
    }))(ThreadReplySearch)
  }
  getThreadReplyCreateForm = () => {
   	const {ThreadReplyCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.threadReplyList,
      count: state._communityUser.threadReplyCount,
      currentPage: state._communityUser.threadReplyCurrentPageNumber,
      searchFormParameters: state._communityUser.threadReplySearchFormParameters,
      loading: state._communityUser.loading,
      owner: { type: '_communityUser', id: state._communityUser.id, referenceName: 'replier', listName: 'threadReplyList', ref:state._communityUser, listDisplayName: '跟帖回复列表'}, // this is for model namespace and
    }))(ThreadReplyCreateForm)
  }
  
  getThreadReplyUpdateForm = () => {
  	const {ThreadReplyUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._communityUser.selectedRows,
      currentUpdateIndex: state._communityUser.currentUpdateIndex,
      owner: { type: '_communityUser', id: state._communityUser.id, listName: 'threadReplyList', ref:state._communityUser, listDisplayName: '跟帖回复列表' }, // this is for model namespace and
    }))(ThreadReplyUpdateForm)
  }

  getThreadRegistrationSearch = () => {
    const {ThreadRegistrationSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.threadRegistrationList,
      count: state._communityUser.threadRegistrationCount,
      currentPage: state._communityUser.threadRegistrationCurrentPageNumber,
      searchFormParameters: state._communityUser.threadRegistrationSearchFormParameters,
      loading: state._communityUser.loading,
      partialList: state._communityUser.partialList,
      owner: { type: '_communityUser', id: state._communityUser.id, referenceName: 'participant', listName: 'threadRegistrationList', ref:state._communityUser, listDisplayName: '活动注册列表' }, // this is for model namespace and
    }))(ThreadRegistrationSearch)
  }
  getThreadRegistrationCreateForm = () => {
   	const {ThreadRegistrationCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.threadRegistrationList,
      count: state._communityUser.threadRegistrationCount,
      currentPage: state._communityUser.threadRegistrationCurrentPageNumber,
      searchFormParameters: state._communityUser.threadRegistrationSearchFormParameters,
      loading: state._communityUser.loading,
      owner: { type: '_communityUser', id: state._communityUser.id, referenceName: 'participant', listName: 'threadRegistrationList', ref:state._communityUser, listDisplayName: '活动注册列表'}, // this is for model namespace and
    }))(ThreadRegistrationCreateForm)
  }
  
  getThreadRegistrationUpdateForm = () => {
  	const {ThreadRegistrationUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._communityUser.selectedRows,
      currentUpdateIndex: state._communityUser.currentUpdateIndex,
      owner: { type: '_communityUser', id: state._communityUser.id, listName: 'threadRegistrationList', ref:state._communityUser, listDisplayName: '活动注册列表' }, // this is for model namespace and
    }))(ThreadRegistrationUpdateForm)
  }

  getThreadLikeSearch = () => {
    const {ThreadLikeSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.threadLikeList,
      count: state._communityUser.threadLikeCount,
      currentPage: state._communityUser.threadLikeCurrentPageNumber,
      searchFormParameters: state._communityUser.threadLikeSearchFormParameters,
      loading: state._communityUser.loading,
      partialList: state._communityUser.partialList,
      owner: { type: '_communityUser', id: state._communityUser.id, referenceName: 'replier', listName: 'threadLikeList', ref:state._communityUser, listDisplayName: '主贴点赞列表' }, // this is for model namespace and
    }))(ThreadLikeSearch)
  }
  getThreadLikeCreateForm = () => {
   	const {ThreadLikeCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.threadLikeList,
      count: state._communityUser.threadLikeCount,
      currentPage: state._communityUser.threadLikeCurrentPageNumber,
      searchFormParameters: state._communityUser.threadLikeSearchFormParameters,
      loading: state._communityUser.loading,
      owner: { type: '_communityUser', id: state._communityUser.id, referenceName: 'replier', listName: 'threadLikeList', ref:state._communityUser, listDisplayName: '主贴点赞列表'}, // this is for model namespace and
    }))(ThreadLikeCreateForm)
  }
  
  getThreadLikeUpdateForm = () => {
  	const {ThreadLikeUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._communityUser.selectedRows,
      currentUpdateIndex: state._communityUser.currentUpdateIndex,
      owner: { type: '_communityUser', id: state._communityUser.id, listName: 'threadLikeList', ref:state._communityUser, listDisplayName: '主贴点赞列表' }, // this is for model namespace and
    }))(ThreadLikeUpdateForm)
  }

  getThreadReplyLikeSearch = () => {
    const {ThreadReplyLikeSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.threadReplyLikeList,
      count: state._communityUser.threadReplyLikeCount,
      currentPage: state._communityUser.threadReplyLikeCurrentPageNumber,
      searchFormParameters: state._communityUser.threadReplyLikeSearchFormParameters,
      loading: state._communityUser.loading,
      partialList: state._communityUser.partialList,
      owner: { type: '_communityUser', id: state._communityUser.id, referenceName: 'replier', listName: 'threadReplyLikeList', ref:state._communityUser, listDisplayName: '跟帖回复点赞列表' }, // this is for model namespace and
    }))(ThreadReplyLikeSearch)
  }
  getThreadReplyLikeCreateForm = () => {
   	const {ThreadReplyLikeCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.threadReplyLikeList,
      count: state._communityUser.threadReplyLikeCount,
      currentPage: state._communityUser.threadReplyLikeCurrentPageNumber,
      searchFormParameters: state._communityUser.threadReplyLikeSearchFormParameters,
      loading: state._communityUser.loading,
      owner: { type: '_communityUser', id: state._communityUser.id, referenceName: 'replier', listName: 'threadReplyLikeList', ref:state._communityUser, listDisplayName: '跟帖回复点赞列表'}, // this is for model namespace and
    }))(ThreadReplyLikeCreateForm)
  }
  
  getThreadReplyLikeUpdateForm = () => {
  	const {ThreadReplyLikeUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._communityUser.selectedRows,
      currentUpdateIndex: state._communityUser.currentUpdateIndex,
      owner: { type: '_communityUser', id: state._communityUser.id, listName: 'threadReplyLikeList', ref:state._communityUser, listDisplayName: '跟帖回复点赞列表' }, // this is for model namespace and
    }))(ThreadReplyLikeUpdateForm)
  }

  getFanSearch = () => {
    const {FanSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.fanList,
      count: state._communityUser.fanCount,
      currentPage: state._communityUser.fanCurrentPageNumber,
      searchFormParameters: state._communityUser.fanSearchFormParameters,
      loading: state._communityUser.loading,
      partialList: state._communityUser.partialList,
      owner: { type: '_communityUser', id: state._communityUser.id, referenceName: 'user', listName: 'fanList', ref:state._communityUser, listDisplayName: '粉丝列表' }, // this is for model namespace and
    }))(FanSearch)
  }
  getFanCreateForm = () => {
   	const {FanCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.fanList,
      count: state._communityUser.fanCount,
      currentPage: state._communityUser.fanCurrentPageNumber,
      searchFormParameters: state._communityUser.fanSearchFormParameters,
      loading: state._communityUser.loading,
      owner: { type: '_communityUser', id: state._communityUser.id, referenceName: 'user', listName: 'fanList', ref:state._communityUser, listDisplayName: '粉丝列表'}, // this is for model namespace and
    }))(FanCreateForm)
  }
  
  getFanUpdateForm = () => {
  	const {FanUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._communityUser.selectedRows,
      currentUpdateIndex: state._communityUser.currentUpdateIndex,
      owner: { type: '_communityUser', id: state._communityUser.id, listName: 'fanList', ref:state._communityUser, listDisplayName: '粉丝列表' }, // this is for model namespace and
    }))(FanUpdateForm)
  }

  getFollowSearch = () => {
    const {FollowSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.followList,
      count: state._communityUser.followCount,
      currentPage: state._communityUser.followCurrentPageNumber,
      searchFormParameters: state._communityUser.followSearchFormParameters,
      loading: state._communityUser.loading,
      partialList: state._communityUser.partialList,
      owner: { type: '_communityUser', id: state._communityUser.id, referenceName: 'user', listName: 'followList', ref:state._communityUser, listDisplayName: '关注列表' }, // this is for model namespace and
    }))(FollowSearch)
  }
  getFollowCreateForm = () => {
   	const {FollowCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.followList,
      count: state._communityUser.followCount,
      currentPage: state._communityUser.followCurrentPageNumber,
      searchFormParameters: state._communityUser.followSearchFormParameters,
      loading: state._communityUser.loading,
      owner: { type: '_communityUser', id: state._communityUser.id, referenceName: 'user', listName: 'followList', ref:state._communityUser, listDisplayName: '关注列表'}, // this is for model namespace and
    }))(FollowCreateForm)
  }
  
  getFollowUpdateForm = () => {
  	const {FollowUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._communityUser.selectedRows,
      currentUpdateIndex: state._communityUser.currentUpdateIndex,
      owner: { type: '_communityUser', id: state._communityUser.id, listName: 'followList', ref:state._communityUser, listDisplayName: '关注列表' }, // this is for model namespace and
    }))(FollowUpdateForm)
  }

  getBonusPointSearch = () => {
    const {BonusPointSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.bonusPointList,
      count: state._communityUser.bonusPointCount,
      currentPage: state._communityUser.bonusPointCurrentPageNumber,
      searchFormParameters: state._communityUser.bonusPointSearchFormParameters,
      loading: state._communityUser.loading,
      partialList: state._communityUser.partialList,
      owner: { type: '_communityUser', id: state._communityUser.id, referenceName: 'user', listName: 'bonusPointList', ref:state._communityUser, listDisplayName: '积分列表' }, // this is for model namespace and
    }))(BonusPointSearch)
  }
  getBonusPointCreateForm = () => {
   	const {BonusPointCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.bonusPointList,
      count: state._communityUser.bonusPointCount,
      currentPage: state._communityUser.bonusPointCurrentPageNumber,
      searchFormParameters: state._communityUser.bonusPointSearchFormParameters,
      loading: state._communityUser.loading,
      owner: { type: '_communityUser', id: state._communityUser.id, referenceName: 'user', listName: 'bonusPointList', ref:state._communityUser, listDisplayName: '积分列表'}, // this is for model namespace and
    }))(BonusPointCreateForm)
  }
  
  getBonusPointUpdateForm = () => {
  	const {BonusPointUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._communityUser.selectedRows,
      currentUpdateIndex: state._communityUser.currentUpdateIndex,
      owner: { type: '_communityUser', id: state._communityUser.id, listName: 'bonusPointList', ref:state._communityUser, listDisplayName: '积分列表' }, // this is for model namespace and
    }))(BonusPointUpdateForm)
  }

  getExperiencePointSearch = () => {
    const {ExperiencePointSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.experiencePointList,
      count: state._communityUser.experiencePointCount,
      currentPage: state._communityUser.experiencePointCurrentPageNumber,
      searchFormParameters: state._communityUser.experiencePointSearchFormParameters,
      loading: state._communityUser.loading,
      partialList: state._communityUser.partialList,
      owner: { type: '_communityUser', id: state._communityUser.id, referenceName: 'user', listName: 'experiencePointList', ref:state._communityUser, listDisplayName: '成长值列表' }, // this is for model namespace and
    }))(ExperiencePointSearch)
  }
  getExperiencePointCreateForm = () => {
   	const {ExperiencePointCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.experiencePointList,
      count: state._communityUser.experiencePointCount,
      currentPage: state._communityUser.experiencePointCurrentPageNumber,
      searchFormParameters: state._communityUser.experiencePointSearchFormParameters,
      loading: state._communityUser.loading,
      owner: { type: '_communityUser', id: state._communityUser.id, referenceName: 'user', listName: 'experiencePointList', ref:state._communityUser, listDisplayName: '成长值列表'}, // this is for model namespace and
    }))(ExperiencePointCreateForm)
  }
  
  getExperiencePointUpdateForm = () => {
  	const {ExperiencePointUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._communityUser.selectedRows,
      currentUpdateIndex: state._communityUser.currentUpdateIndex,
      owner: { type: '_communityUser', id: state._communityUser.id, listName: 'experiencePointList', ref:state._communityUser, listDisplayName: '成长值列表' }, // this is for model namespace and
    }))(ExperiencePointUpdateForm)
  }

  getPageTitle = () => {
    // const { location } = this.props
    // const { pathname } = location
    const title = '帮帮兔社区运营中心'
    return title
  }
 
  handleOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1)
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
     const { breadcrumb }  = this.props
     const {CommunityUserDashboard} = GlobalComponents
     const {CommunityUserEditDetail} = GlobalComponents
     const {CommunityUserViewDetail} = GlobalComponents
     
     
     const targetApp = sessionObject('targetApp')
     const currentBreadcrumb =sessionObject(targetApp.id)
     
     
     // Don't show popup menu when it is been collapsed
     const menuProps = collapsed ? {} : {
       openKeys: this.state.openKeys,
     }
     const layout = (
     <Layout>
        <Header>
          
          <div className={styles.left}>
          <img
            src="./scm.svg"
            alt="logo"
            onClick={this.toggle}
            className={styles.logo}
          />
          {currentBreadcrumb.map((item)=>{
            return (<Link  key={item.link} to={`${item.link}`} className={styles.breadcrumbLink}> &gt;{item.name}</Link>)

          })}
         </div>
          <div className={styles.right}>
          
          <AutoComplete
            className="certain-category-search"
            placeholder="请输入名称"
            optionLabelProp="value"
            
          >
            <Input
              suffix={<Icon type="search" className="certain-category-icon" />}
            />
          </AutoComplete> </div>
        </Header>
       <Layout>
         <Sider
           trigger={null}
           collapsible
           collapsed={collapsed}
           breakpoint="md"
           onCollapse={()=>this.onCollapse(collapsed)}
           collapsedWidth={56}
           className={styles.sider}
         >
           

           <Menu
             theme="dark"
             mode="inline"
            
             
             onOpenChange={this.handleOpenChange}
            
             defaultOpenKeys={['firstOne']}
             style={{ margin: '16px 0', width: '100%' }}
           >
           

             <Menu.Item key="dashboard">
               <Link to={`/communityUser/${this.props.communityUser.id}/dashboard`}><Icon type="dashboard" /><span>仪表板</span></Link>
             </Menu.Item>


             {this.getNavMenuItems(this.props.communityUser.id)}
             <Menu.Item key="homepage">
               <Link to={"/home"}><Icon type="home" /><span>回到主页</span></Link>
             </Menu.Item>
           </Menu>
         </Sider>
         <Layout>
           <Content style={{ margin: '24px 24px 0', height: '100%' }}>
             <Switch>
             
               <Route path="/communityUser/:id/dashboard" component={CommunityUserDashboard} />
               
               <Route path="/communityUser/:id/editDetail" component={CommunityUserEditDetail} />
               <Route path="/communityUser/:id/viewDetail" component={CommunityUserViewDetail} /> 
               

               <Route path="/communityUser/:id/list/patientInfoList" component={this.getPatientInfoSearch()} />
               <Route path="/communityUser/:id/list/patientInfoCreateForm" component={this.getPatientInfoCreateForm()} />
               <Route path="/communityUser/:id/list/patientInfoUpdateForm" component={this.getPatientInfoUpdateForm()} />

               <Route path="/communityUser/:id/list/userSkillList" component={this.getUserSkillSearch()} />
               <Route path="/communityUser/:id/list/userSkillCreateForm" component={this.getUserSkillCreateForm()} />
               <Route path="/communityUser/:id/list/userSkillUpdateForm" component={this.getUserSkillUpdateForm()} />

               <Route path="/communityUser/:id/list/messageFilterList" component={this.getMessageFilterSearch()} />
               <Route path="/communityUser/:id/list/messageFilterCreateForm" component={this.getMessageFilterCreateForm()} />
               <Route path="/communityUser/:id/list/messageFilterUpdateForm" component={this.getMessageFilterUpdateForm()} />

               <Route path="/communityUser/:id/list/userMessageList" component={this.getUserMessageSearch()} />
               <Route path="/communityUser/:id/list/userMessageCreateForm" component={this.getUserMessageCreateForm()} />
               <Route path="/communityUser/:id/list/userMessageUpdateForm" component={this.getUserMessageUpdateForm()} />

               <Route path="/communityUser/:id/list/taskList" component={this.getTaskSearch()} />
               <Route path="/communityUser/:id/list/taskCreateForm" component={this.getTaskCreateForm()} />
               <Route path="/communityUser/:id/list/taskUpdateForm" component={this.getTaskUpdateForm()} />

               <Route path="/communityUser/:id/list/taskAssigmentList" component={this.getTaskAssigmentSearch()} />
               <Route path="/communityUser/:id/list/taskAssigmentCreateForm" component={this.getTaskAssigmentCreateForm()} />
               <Route path="/communityUser/:id/list/taskAssigmentUpdateForm" component={this.getTaskAssigmentUpdateForm()} />

               <Route path="/communityUser/:id/list/taskLikeList" component={this.getTaskLikeSearch()} />
               <Route path="/communityUser/:id/list/taskLikeCreateForm" component={this.getTaskLikeCreateForm()} />
               <Route path="/communityUser/:id/list/taskLikeUpdateForm" component={this.getTaskLikeUpdateForm()} />

               <Route path="/communityUser/:id/list/taskReplyList" component={this.getTaskReplySearch()} />
               <Route path="/communityUser/:id/list/taskReplyCreateForm" component={this.getTaskReplyCreateForm()} />
               <Route path="/communityUser/:id/list/taskReplyUpdateForm" component={this.getTaskReplyUpdateForm()} />

               <Route path="/communityUser/:id/list/taskReplyLikeList" component={this.getTaskReplyLikeSearch()} />
               <Route path="/communityUser/:id/list/taskReplyLikeCreateForm" component={this.getTaskReplyLikeCreateForm()} />
               <Route path="/communityUser/:id/list/taskReplyLikeUpdateForm" component={this.getTaskReplyLikeUpdateForm()} />

               <Route path="/communityUser/:id/list/threadList" component={this.getThreadSearch()} />
               <Route path="/communityUser/:id/list/threadCreateForm" component={this.getThreadCreateForm()} />
               <Route path="/communityUser/:id/list/threadUpdateForm" component={this.getThreadUpdateForm()} />

               <Route path="/communityUser/:id/list/threadReplyList" component={this.getThreadReplySearch()} />
               <Route path="/communityUser/:id/list/threadReplyCreateForm" component={this.getThreadReplyCreateForm()} />
               <Route path="/communityUser/:id/list/threadReplyUpdateForm" component={this.getThreadReplyUpdateForm()} />

               <Route path="/communityUser/:id/list/threadRegistrationList" component={this.getThreadRegistrationSearch()} />
               <Route path="/communityUser/:id/list/threadRegistrationCreateForm" component={this.getThreadRegistrationCreateForm()} />
               <Route path="/communityUser/:id/list/threadRegistrationUpdateForm" component={this.getThreadRegistrationUpdateForm()} />

               <Route path="/communityUser/:id/list/threadLikeList" component={this.getThreadLikeSearch()} />
               <Route path="/communityUser/:id/list/threadLikeCreateForm" component={this.getThreadLikeCreateForm()} />
               <Route path="/communityUser/:id/list/threadLikeUpdateForm" component={this.getThreadLikeUpdateForm()} />

               <Route path="/communityUser/:id/list/threadReplyLikeList" component={this.getThreadReplyLikeSearch()} />
               <Route path="/communityUser/:id/list/threadReplyLikeCreateForm" component={this.getThreadReplyLikeCreateForm()} />
               <Route path="/communityUser/:id/list/threadReplyLikeUpdateForm" component={this.getThreadReplyLikeUpdateForm()} />

               <Route path="/communityUser/:id/list/fanList" component={this.getFanSearch()} />
               <Route path="/communityUser/:id/list/fanCreateForm" component={this.getFanCreateForm()} />
               <Route path="/communityUser/:id/list/fanUpdateForm" component={this.getFanUpdateForm()} />

               <Route path="/communityUser/:id/list/followList" component={this.getFollowSearch()} />
               <Route path="/communityUser/:id/list/followCreateForm" component={this.getFollowCreateForm()} />
               <Route path="/communityUser/:id/list/followUpdateForm" component={this.getFollowUpdateForm()} />

               <Route path="/communityUser/:id/list/bonusPointList" component={this.getBonusPointSearch()} />
               <Route path="/communityUser/:id/list/bonusPointCreateForm" component={this.getBonusPointCreateForm()} />
               <Route path="/communityUser/:id/list/bonusPointUpdateForm" component={this.getBonusPointUpdateForm()} />

               <Route path="/communityUser/:id/list/experiencePointList" component={this.getExperiencePointSearch()} />
               <Route path="/communityUser/:id/list/experiencePointCreateForm" component={this.getExperiencePointCreateForm()} />
               <Route path="/communityUser/:id/list/experiencePointUpdateForm" component={this.getExperiencePointUpdateForm()} />
              
             </Switch>
           </Content>
          </Layout>
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



