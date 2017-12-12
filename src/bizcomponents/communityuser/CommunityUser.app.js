import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu, Icon, Avatar, Dropdown, Tag, message, Spin } from 'antd';
import DocumentTitle from 'react-document-title';
import { connect } from 'dva';
import { Link, Route, Redirect, Switch } from 'dva/router';
import moment from 'moment';
import groupBy from 'lodash/groupBy';
import { ContainerQuery } from 'react-container-query';
import classNames from 'classnames';
import styles from './CommunityUser.app.less';
import CommunityUserDashboard from './CommunityUser.dashboard';
import HeaderSearch from '../../components/HeaderSearch';
import NoticeIcon from '../../components/NoticeIcon';
import GlobalFooter from '../../components/GlobalFooter';

import PatientInfoSearch from '../patientinfo/PatientInfo.search'
import PatientInfoCreateForm from '../patientinfo/PatientInfo.createform'
import UserSkillSearch from '../userskill/UserSkill.search'
import UserSkillCreateForm from '../userskill/UserSkill.createform'
import MessageFilterSearch from '../messagefilter/MessageFilter.search'
import MessageFilterCreateForm from '../messagefilter/MessageFilter.createform'
import UserMessageSearch from '../usermessage/UserMessage.search'
import UserMessageCreateForm from '../usermessage/UserMessage.createform'
import TaskSearch from '../task/Task.search'
import TaskCreateForm from '../task/Task.createform'
import TaskAssigmentSearch from '../taskassigment/TaskAssigment.search'
import TaskAssigmentCreateForm from '../taskassigment/TaskAssigment.createform'
import TaskLikeSearch from '../tasklike/TaskLike.search'
import TaskLikeCreateForm from '../tasklike/TaskLike.createform'
import TaskReplySearch from '../taskreply/TaskReply.search'
import TaskReplyCreateForm from '../taskreply/TaskReply.createform'
import TaskReplyLikeSearch from '../taskreplylike/TaskReplyLike.search'
import TaskReplyLikeCreateForm from '../taskreplylike/TaskReplyLike.createform'
import ThreadSearch from '../thread/Thread.search'
import ThreadCreateForm from '../thread/Thread.createform'
import ThreadReplySearch from '../threadreply/ThreadReply.search'
import ThreadReplyCreateForm from '../threadreply/ThreadReply.createform'
import ThreadRegistrationSearch from '../threadregistration/ThreadRegistration.search'
import ThreadRegistrationCreateForm from '../threadregistration/ThreadRegistration.createform'
import ThreadLikeSearch from '../threadlike/ThreadLike.search'
import ThreadLikeCreateForm from '../threadlike/ThreadLike.createform'
import ThreadReplyLikeSearch from '../threadreplylike/ThreadReplyLike.search'
import ThreadReplyLikeCreateForm from '../threadreplylike/ThreadReplyLike.createform'
import FanSearch from '../fan/Fan.search'
import FanCreateForm from '../fan/Fan.createform'
import FollowSearch from '../follow/Follow.search'
import FollowCreateForm from '../follow/Follow.createform'
import BonusPointSearch from '../bonuspoint/BonusPoint.search'
import BonusPointCreateForm from '../bonuspoint/BonusPoint.createform'
import ExperiencePointSearch from '../experiencepoint/ExperiencePoint.search'
import ExperiencePointCreateForm from '../experiencepoint/ExperiencePoint.createform'

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;



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
};

class CommunityUserBizApp extends React.PureComponent {
  
 constructor(props) {
    super(props);
    // 把一级 Layout 的 children 作为菜单项
    
    //this.menus = getNavData().reduce((arr, current) => arr.concat(current.children), []);
    this.state = {
      openKeys: this.getDefaultCollapsedSubMenus(props),
    };
  }

  componentDidMount() {
   
  }
  componentWillUnmount() {
    clearTimeout(this.resizeTimeout);
  }
  onCollapse = (collapsed) => {
    this.props.dispatch({
      type: 'global/changeLayoutCollapsed',
      payload: collapsed,
    });
  }

  getDefaultCollapsedSubMenus(props) {
    const currentMenuSelectedKeys = [...this.getCurrentMenuSelectedKeys(props)];
    currentMenuSelectedKeys.splice(-1, 1);
    if (currentMenuSelectedKeys.length === 0) {
      return ['/communityUser/'];
    }
    return currentMenuSelectedKeys;
  }
  getCurrentMenuSelectedKeys(props) {
    const { location: { pathname } } = props || this.props;
    const keys = pathname.split('/').slice(1);
    if (keys.length === 1 && keys[0] === '') {
      return [this.menus[0].key];
    }
    return keys;
  }
  getNavMenuItems(objectId){

    return (
      <SubMenu title={<span>
        <Icon type='dashboard' />
        <span>社区用户</span>
      </span>} >
      
      
      <Menu.Item >   
        <Link to={"/communityUser/"+objectId+"/list/patientInfoList"}>病人信息</Link>
      </Menu.Item>
  

      <Menu.Item >   
        <Link to={"/communityUser/"+objectId+"/list/userSkillList"}>用户技能</Link>
      </Menu.Item>
  

      <Menu.Item >   
        <Link to={"/communityUser/"+objectId+"/list/messageFilterList"}>消息过滤</Link>
      </Menu.Item>
  

      <Menu.Item >   
        <Link to={"/communityUser/"+objectId+"/list/userMessageList"}>用户消息</Link>
      </Menu.Item>
  

      <Menu.Item >   
        <Link to={"/communityUser/"+objectId+"/list/taskList"}>任务</Link>
      </Menu.Item>
  

      <Menu.Item >   
        <Link to={"/communityUser/"+objectId+"/list/taskAssigmentList"}>任务分配</Link>
      </Menu.Item>
  

      <Menu.Item >   
        <Link to={"/communityUser/"+objectId+"/list/taskLikeList"}>任务点赞</Link>
      </Menu.Item>
  

      <Menu.Item >   
        <Link to={"/communityUser/"+objectId+"/list/taskReplyList"}>回复任务</Link>
      </Menu.Item>
  

      <Menu.Item >   
        <Link to={"/communityUser/"+objectId+"/list/taskReplyLikeList"}>任务回复点赞</Link>
      </Menu.Item>
  

      <Menu.Item >   
        <Link to={"/communityUser/"+objectId+"/list/threadList"}>主贴</Link>
      </Menu.Item>
  

      <Menu.Item >   
        <Link to={"/communityUser/"+objectId+"/list/threadReplyList"}>跟帖回复</Link>
      </Menu.Item>
  

      <Menu.Item >   
        <Link to={"/communityUser/"+objectId+"/list/threadRegistrationList"}>活动注册</Link>
      </Menu.Item>
  

      <Menu.Item >   
        <Link to={"/communityUser/"+objectId+"/list/threadLikeList"}>主贴点赞</Link>
      </Menu.Item>
  

      <Menu.Item >   
        <Link to={"/communityUser/"+objectId+"/list/threadReplyLikeList"}>跟帖回复点赞</Link>
      </Menu.Item>
  

      <Menu.Item >   
        <Link to={"/communityUser/"+objectId+"/list/fanList"}>粉丝</Link>
      </Menu.Item>
  

      <Menu.Item >   
        <Link to={"/communityUser/"+objectId+"/list/followList"}>关注</Link>
      </Menu.Item>
  

      <Menu.Item >   
        <Link to={"/communityUser/"+objectId+"/list/bonusPointList"}>积分</Link>
      </Menu.Item>
  

      <Menu.Item >   
        <Link to={"/communityUser/"+objectId+"/list/experiencePointList"}>成长值</Link>
      </Menu.Item>
  
  
 
      
      </SubMenu>

    );

  }




  getPatientInfoSearch() {
 
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.patientInfoList,
      count: state._communityUser.patientInfoCount,
      currentPage: state._communityUser.patientInfoCurrentPageNumber,
      searchFormParameters: state._communityUser.patientInfoSearchFormParameters,
      loading: state._communityUser.loading,
      owner: {type:'_communityUser',id:state._communityUser.id}//this is for model namespace and 
    }))(PatientInfoSearch);
  }
  getPatientInfoCreateForm() {
 
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.patientInfoList,
      count: state._communityUser.patientInfoCount,
      currentPage: state._communityUser.patientInfoCurrentPageNumber,
      searchFormParameters: state._communityUser.patientInfoSearchFormParameters,
      loading: state._communityUser.loading,
      owner: {type:'_communityUser',id:state._communityUser.id}//this is for model namespace and 
    }))(PatientInfoCreateForm);
  }
  

  getUserSkillSearch() {
 
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.userSkillList,
      count: state._communityUser.userSkillCount,
      currentPage: state._communityUser.userSkillCurrentPageNumber,
      searchFormParameters: state._communityUser.userSkillSearchFormParameters,
      loading: state._communityUser.loading,
      owner: {type:'_communityUser',id:state._communityUser.id}//this is for model namespace and 
    }))(UserSkillSearch);
  }
  getUserSkillCreateForm() {
 
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.userSkillList,
      count: state._communityUser.userSkillCount,
      currentPage: state._communityUser.userSkillCurrentPageNumber,
      searchFormParameters: state._communityUser.userSkillSearchFormParameters,
      loading: state._communityUser.loading,
      owner: {type:'_communityUser',id:state._communityUser.id}//this is for model namespace and 
    }))(UserSkillCreateForm);
  }
  

  getMessageFilterSearch() {
 
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.messageFilterList,
      count: state._communityUser.messageFilterCount,
      currentPage: state._communityUser.messageFilterCurrentPageNumber,
      searchFormParameters: state._communityUser.messageFilterSearchFormParameters,
      loading: state._communityUser.loading,
      owner: {type:'_communityUser',id:state._communityUser.id}//this is for model namespace and 
    }))(MessageFilterSearch);
  }
  getMessageFilterCreateForm() {
 
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.messageFilterList,
      count: state._communityUser.messageFilterCount,
      currentPage: state._communityUser.messageFilterCurrentPageNumber,
      searchFormParameters: state._communityUser.messageFilterSearchFormParameters,
      loading: state._communityUser.loading,
      owner: {type:'_communityUser',id:state._communityUser.id}//this is for model namespace and 
    }))(MessageFilterCreateForm);
  }
  

  getUserMessageSearch() {
 
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.userMessageList,
      count: state._communityUser.userMessageCount,
      currentPage: state._communityUser.userMessageCurrentPageNumber,
      searchFormParameters: state._communityUser.userMessageSearchFormParameters,
      loading: state._communityUser.loading,
      owner: {type:'_communityUser',id:state._communityUser.id}//this is for model namespace and 
    }))(UserMessageSearch);
  }
  getUserMessageCreateForm() {
 
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.userMessageList,
      count: state._communityUser.userMessageCount,
      currentPage: state._communityUser.userMessageCurrentPageNumber,
      searchFormParameters: state._communityUser.userMessageSearchFormParameters,
      loading: state._communityUser.loading,
      owner: {type:'_communityUser',id:state._communityUser.id}//this is for model namespace and 
    }))(UserMessageCreateForm);
  }
  

  getTaskSearch() {
 
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.taskList,
      count: state._communityUser.taskCount,
      currentPage: state._communityUser.taskCurrentPageNumber,
      searchFormParameters: state._communityUser.taskSearchFormParameters,
      loading: state._communityUser.loading,
      owner: {type:'_communityUser',id:state._communityUser.id}//this is for model namespace and 
    }))(TaskSearch);
  }
  getTaskCreateForm() {
 
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.taskList,
      count: state._communityUser.taskCount,
      currentPage: state._communityUser.taskCurrentPageNumber,
      searchFormParameters: state._communityUser.taskSearchFormParameters,
      loading: state._communityUser.loading,
      owner: {type:'_communityUser',id:state._communityUser.id}//this is for model namespace and 
    }))(TaskCreateForm);
  }
  

  getTaskAssigmentSearch() {
 
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.taskAssigmentList,
      count: state._communityUser.taskAssigmentCount,
      currentPage: state._communityUser.taskAssigmentCurrentPageNumber,
      searchFormParameters: state._communityUser.taskAssigmentSearchFormParameters,
      loading: state._communityUser.loading,
      owner: {type:'_communityUser',id:state._communityUser.id}//this is for model namespace and 
    }))(TaskAssigmentSearch);
  }
  getTaskAssigmentCreateForm() {
 
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.taskAssigmentList,
      count: state._communityUser.taskAssigmentCount,
      currentPage: state._communityUser.taskAssigmentCurrentPageNumber,
      searchFormParameters: state._communityUser.taskAssigmentSearchFormParameters,
      loading: state._communityUser.loading,
      owner: {type:'_communityUser',id:state._communityUser.id}//this is for model namespace and 
    }))(TaskAssigmentCreateForm);
  }
  

  getTaskLikeSearch() {
 
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.taskLikeList,
      count: state._communityUser.taskLikeCount,
      currentPage: state._communityUser.taskLikeCurrentPageNumber,
      searchFormParameters: state._communityUser.taskLikeSearchFormParameters,
      loading: state._communityUser.loading,
      owner: {type:'_communityUser',id:state._communityUser.id}//this is for model namespace and 
    }))(TaskLikeSearch);
  }
  getTaskLikeCreateForm() {
 
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.taskLikeList,
      count: state._communityUser.taskLikeCount,
      currentPage: state._communityUser.taskLikeCurrentPageNumber,
      searchFormParameters: state._communityUser.taskLikeSearchFormParameters,
      loading: state._communityUser.loading,
      owner: {type:'_communityUser',id:state._communityUser.id}//this is for model namespace and 
    }))(TaskLikeCreateForm);
  }
  

  getTaskReplySearch() {
 
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.taskReplyList,
      count: state._communityUser.taskReplyCount,
      currentPage: state._communityUser.taskReplyCurrentPageNumber,
      searchFormParameters: state._communityUser.taskReplySearchFormParameters,
      loading: state._communityUser.loading,
      owner: {type:'_communityUser',id:state._communityUser.id}//this is for model namespace and 
    }))(TaskReplySearch);
  }
  getTaskReplyCreateForm() {
 
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.taskReplyList,
      count: state._communityUser.taskReplyCount,
      currentPage: state._communityUser.taskReplyCurrentPageNumber,
      searchFormParameters: state._communityUser.taskReplySearchFormParameters,
      loading: state._communityUser.loading,
      owner: {type:'_communityUser',id:state._communityUser.id}//this is for model namespace and 
    }))(TaskReplyCreateForm);
  }
  

  getTaskReplyLikeSearch() {
 
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.taskReplyLikeList,
      count: state._communityUser.taskReplyLikeCount,
      currentPage: state._communityUser.taskReplyLikeCurrentPageNumber,
      searchFormParameters: state._communityUser.taskReplyLikeSearchFormParameters,
      loading: state._communityUser.loading,
      owner: {type:'_communityUser',id:state._communityUser.id}//this is for model namespace and 
    }))(TaskReplyLikeSearch);
  }
  getTaskReplyLikeCreateForm() {
 
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.taskReplyLikeList,
      count: state._communityUser.taskReplyLikeCount,
      currentPage: state._communityUser.taskReplyLikeCurrentPageNumber,
      searchFormParameters: state._communityUser.taskReplyLikeSearchFormParameters,
      loading: state._communityUser.loading,
      owner: {type:'_communityUser',id:state._communityUser.id}//this is for model namespace and 
    }))(TaskReplyLikeCreateForm);
  }
  

  getThreadSearch() {
 
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.threadList,
      count: state._communityUser.threadCount,
      currentPage: state._communityUser.threadCurrentPageNumber,
      searchFormParameters: state._communityUser.threadSearchFormParameters,
      loading: state._communityUser.loading,
      owner: {type:'_communityUser',id:state._communityUser.id}//this is for model namespace and 
    }))(ThreadSearch);
  }
  getThreadCreateForm() {
 
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.threadList,
      count: state._communityUser.threadCount,
      currentPage: state._communityUser.threadCurrentPageNumber,
      searchFormParameters: state._communityUser.threadSearchFormParameters,
      loading: state._communityUser.loading,
      owner: {type:'_communityUser',id:state._communityUser.id}//this is for model namespace and 
    }))(ThreadCreateForm);
  }
  

  getThreadReplySearch() {
 
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.threadReplyList,
      count: state._communityUser.threadReplyCount,
      currentPage: state._communityUser.threadReplyCurrentPageNumber,
      searchFormParameters: state._communityUser.threadReplySearchFormParameters,
      loading: state._communityUser.loading,
      owner: {type:'_communityUser',id:state._communityUser.id}//this is for model namespace and 
    }))(ThreadReplySearch);
  }
  getThreadReplyCreateForm() {
 
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.threadReplyList,
      count: state._communityUser.threadReplyCount,
      currentPage: state._communityUser.threadReplyCurrentPageNumber,
      searchFormParameters: state._communityUser.threadReplySearchFormParameters,
      loading: state._communityUser.loading,
      owner: {type:'_communityUser',id:state._communityUser.id}//this is for model namespace and 
    }))(ThreadReplyCreateForm);
  }
  

  getThreadRegistrationSearch() {
 
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.threadRegistrationList,
      count: state._communityUser.threadRegistrationCount,
      currentPage: state._communityUser.threadRegistrationCurrentPageNumber,
      searchFormParameters: state._communityUser.threadRegistrationSearchFormParameters,
      loading: state._communityUser.loading,
      owner: {type:'_communityUser',id:state._communityUser.id}//this is for model namespace and 
    }))(ThreadRegistrationSearch);
  }
  getThreadRegistrationCreateForm() {
 
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.threadRegistrationList,
      count: state._communityUser.threadRegistrationCount,
      currentPage: state._communityUser.threadRegistrationCurrentPageNumber,
      searchFormParameters: state._communityUser.threadRegistrationSearchFormParameters,
      loading: state._communityUser.loading,
      owner: {type:'_communityUser',id:state._communityUser.id}//this is for model namespace and 
    }))(ThreadRegistrationCreateForm);
  }
  

  getThreadLikeSearch() {
 
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.threadLikeList,
      count: state._communityUser.threadLikeCount,
      currentPage: state._communityUser.threadLikeCurrentPageNumber,
      searchFormParameters: state._communityUser.threadLikeSearchFormParameters,
      loading: state._communityUser.loading,
      owner: {type:'_communityUser',id:state._communityUser.id}//this is for model namespace and 
    }))(ThreadLikeSearch);
  }
  getThreadLikeCreateForm() {
 
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.threadLikeList,
      count: state._communityUser.threadLikeCount,
      currentPage: state._communityUser.threadLikeCurrentPageNumber,
      searchFormParameters: state._communityUser.threadLikeSearchFormParameters,
      loading: state._communityUser.loading,
      owner: {type:'_communityUser',id:state._communityUser.id}//this is for model namespace and 
    }))(ThreadLikeCreateForm);
  }
  

  getThreadReplyLikeSearch() {
 
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.threadReplyLikeList,
      count: state._communityUser.threadReplyLikeCount,
      currentPage: state._communityUser.threadReplyLikeCurrentPageNumber,
      searchFormParameters: state._communityUser.threadReplyLikeSearchFormParameters,
      loading: state._communityUser.loading,
      owner: {type:'_communityUser',id:state._communityUser.id}//this is for model namespace and 
    }))(ThreadReplyLikeSearch);
  }
  getThreadReplyLikeCreateForm() {
 
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.threadReplyLikeList,
      count: state._communityUser.threadReplyLikeCount,
      currentPage: state._communityUser.threadReplyLikeCurrentPageNumber,
      searchFormParameters: state._communityUser.threadReplyLikeSearchFormParameters,
      loading: state._communityUser.loading,
      owner: {type:'_communityUser',id:state._communityUser.id}//this is for model namespace and 
    }))(ThreadReplyLikeCreateForm);
  }
  

  getFanSearch() {
 
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.fanList,
      count: state._communityUser.fanCount,
      currentPage: state._communityUser.fanCurrentPageNumber,
      searchFormParameters: state._communityUser.fanSearchFormParameters,
      loading: state._communityUser.loading,
      owner: {type:'_communityUser',id:state._communityUser.id}//this is for model namespace and 
    }))(FanSearch);
  }
  getFanCreateForm() {
 
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.fanList,
      count: state._communityUser.fanCount,
      currentPage: state._communityUser.fanCurrentPageNumber,
      searchFormParameters: state._communityUser.fanSearchFormParameters,
      loading: state._communityUser.loading,
      owner: {type:'_communityUser',id:state._communityUser.id}//this is for model namespace and 
    }))(FanCreateForm);
  }
  

  getFollowSearch() {
 
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.followList,
      count: state._communityUser.followCount,
      currentPage: state._communityUser.followCurrentPageNumber,
      searchFormParameters: state._communityUser.followSearchFormParameters,
      loading: state._communityUser.loading,
      owner: {type:'_communityUser',id:state._communityUser.id}//this is for model namespace and 
    }))(FollowSearch);
  }
  getFollowCreateForm() {
 
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.followList,
      count: state._communityUser.followCount,
      currentPage: state._communityUser.followCurrentPageNumber,
      searchFormParameters: state._communityUser.followSearchFormParameters,
      loading: state._communityUser.loading,
      owner: {type:'_communityUser',id:state._communityUser.id}//this is for model namespace and 
    }))(FollowCreateForm);
  }
  

  getBonusPointSearch() {
 
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.bonusPointList,
      count: state._communityUser.bonusPointCount,
      currentPage: state._communityUser.bonusPointCurrentPageNumber,
      searchFormParameters: state._communityUser.bonusPointSearchFormParameters,
      loading: state._communityUser.loading,
      owner: {type:'_communityUser',id:state._communityUser.id}//this is for model namespace and 
    }))(BonusPointSearch);
  }
  getBonusPointCreateForm() {
 
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.bonusPointList,
      count: state._communityUser.bonusPointCount,
      currentPage: state._communityUser.bonusPointCurrentPageNumber,
      searchFormParameters: state._communityUser.bonusPointSearchFormParameters,
      loading: state._communityUser.loading,
      owner: {type:'_communityUser',id:state._communityUser.id}//this is for model namespace and 
    }))(BonusPointCreateForm);
  }
  

  getExperiencePointSearch() {
 
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.experiencePointList,
      count: state._communityUser.experiencePointCount,
      currentPage: state._communityUser.experiencePointCurrentPageNumber,
      searchFormParameters: state._communityUser.experiencePointSearchFormParameters,
      loading: state._communityUser.loading,
      owner: {type:'_communityUser',id:state._communityUser.id}//this is for model namespace and 
    }))(ExperiencePointSearch);
  }
  getExperiencePointCreateForm() {
 
    return connect(state => ({
      rule: state.rule,
      data: state._communityUser.experiencePointList,
      count: state._communityUser.experiencePointCount,
      currentPage: state._communityUser.experiencePointCurrentPageNumber,
      searchFormParameters: state._communityUser.experiencePointSearchFormParameters,
      loading: state._communityUser.loading,
      owner: {type:'_communityUser',id:state._communityUser.id}//this is for model namespace and 
    }))(ExperiencePointCreateForm);
  }
  
  
  
getPageTitle() {
    const { location } = this.props;
    const { pathname } = location;
    let title = '供应链系统';
    
    return title;
  }
 
  handleOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    this.setState({
      openKeys: latestOpenKey ? [latestOpenKey] : [],
    });
  }
   toggle = () => {
    const { collapsed } = this.props;
    this.props.dispatch({
      type: 'global/changeLayoutCollapsed',
      payload: !collapsed,
    });
  }

  render() {
    const {  collapsed, fetchingNotices,loading } = this.props;
    console.log("test value",this.props)
    // Don't show popup menu when it is been collapsed
    const menuProps = collapsed ? {} : {
      openKeys: this.state.openKeys,
    };

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
            <img src="/scm.svg" alt="logo" onClick={this.toggle}/>          
            <Link to="/home"> <h1>社区用户</h1></Link>
          </div>
          
          <Menu
            theme="dark"
            mode="inline"
            {...menuProps}
            onOpenChange={this.handleOpenChange}
            selectedKeys={this.getCurrentMenuSelectedKeys()}
            style={{ margin: '16px 0', width: '100%' }}
          >
            {this.getNavMenuItems(this.props.communityUser.id)}
          </Menu>
        </Sider>
        <Layout>
        
          <Content style={{ margin: '24px 24px 0', height: '100%' }}>
            <Switch>
            <Route path="/communityUser/:id/dashboard" component={CommunityUserDashboard} />
          
            
    
          <Route path="/communityUser/:id/list/patientInfoList" component={this.getPatientInfoSearch()} />
          <Route path="/communityUser/:id/list/patientInfoCreateForm" component={this.getPatientInfoCreateForm()} />
          

          <Route path="/communityUser/:id/list/userSkillList" component={this.getUserSkillSearch()} />
          <Route path="/communityUser/:id/list/userSkillCreateForm" component={this.getUserSkillCreateForm()} />
          

          <Route path="/communityUser/:id/list/messageFilterList" component={this.getMessageFilterSearch()} />
          <Route path="/communityUser/:id/list/messageFilterCreateForm" component={this.getMessageFilterCreateForm()} />
          

          <Route path="/communityUser/:id/list/userMessageList" component={this.getUserMessageSearch()} />
          <Route path="/communityUser/:id/list/userMessageCreateForm" component={this.getUserMessageCreateForm()} />
          

          <Route path="/communityUser/:id/list/taskList" component={this.getTaskSearch()} />
          <Route path="/communityUser/:id/list/taskCreateForm" component={this.getTaskCreateForm()} />
          

          <Route path="/communityUser/:id/list/taskAssigmentList" component={this.getTaskAssigmentSearch()} />
          <Route path="/communityUser/:id/list/taskAssigmentCreateForm" component={this.getTaskAssigmentCreateForm()} />
          

          <Route path="/communityUser/:id/list/taskLikeList" component={this.getTaskLikeSearch()} />
          <Route path="/communityUser/:id/list/taskLikeCreateForm" component={this.getTaskLikeCreateForm()} />
          

          <Route path="/communityUser/:id/list/taskReplyList" component={this.getTaskReplySearch()} />
          <Route path="/communityUser/:id/list/taskReplyCreateForm" component={this.getTaskReplyCreateForm()} />
          

          <Route path="/communityUser/:id/list/taskReplyLikeList" component={this.getTaskReplyLikeSearch()} />
          <Route path="/communityUser/:id/list/taskReplyLikeCreateForm" component={this.getTaskReplyLikeCreateForm()} />
          

          <Route path="/communityUser/:id/list/threadList" component={this.getThreadSearch()} />
          <Route path="/communityUser/:id/list/threadCreateForm" component={this.getThreadCreateForm()} />
          

          <Route path="/communityUser/:id/list/threadReplyList" component={this.getThreadReplySearch()} />
          <Route path="/communityUser/:id/list/threadReplyCreateForm" component={this.getThreadReplyCreateForm()} />
          

          <Route path="/communityUser/:id/list/threadRegistrationList" component={this.getThreadRegistrationSearch()} />
          <Route path="/communityUser/:id/list/threadRegistrationCreateForm" component={this.getThreadRegistrationCreateForm()} />
          

          <Route path="/communityUser/:id/list/threadLikeList" component={this.getThreadLikeSearch()} />
          <Route path="/communityUser/:id/list/threadLikeCreateForm" component={this.getThreadLikeCreateForm()} />
          

          <Route path="/communityUser/:id/list/threadReplyLikeList" component={this.getThreadReplyLikeSearch()} />
          <Route path="/communityUser/:id/list/threadReplyLikeCreateForm" component={this.getThreadReplyLikeCreateForm()} />
          

          <Route path="/communityUser/:id/list/fanList" component={this.getFanSearch()} />
          <Route path="/communityUser/:id/list/fanCreateForm" component={this.getFanCreateForm()} />
          

          <Route path="/communityUser/:id/list/followList" component={this.getFollowSearch()} />
          <Route path="/communityUser/:id/list/followCreateForm" component={this.getFollowCreateForm()} />
          

          <Route path="/communityUser/:id/list/bonusPointList" component={this.getBonusPointSearch()} />
          <Route path="/communityUser/:id/list/bonusPointCreateForm" component={this.getBonusPointCreateForm()} />
          

          <Route path="/communityUser/:id/list/experiencePointList" component={this.getExperiencePointSearch()} />
          <Route path="/communityUser/:id/list/experiencePointCreateForm" component={this.getExperiencePointCreateForm()} />
          
              
             
</Switch>
           
          </Content>
        </Layout>
      </Layout>
    );

    return (
      <DocumentTitle title={this.getPageTitle()}>
        <ContainerQuery query={query}>
          {params => <div className={classNames(params)}>{layout}</div>}
        </ContainerQuery>
      </DocumentTitle>
    );
  }
}

export default connect(state => ({
  collapsed: state.global.collapsed,
  fetchingNotices: state.global.fetchingNotices,
  notices: state.global.notices,
  communityUser: state._communityUser,
  ...state
}))(CommunityUserBizApp);



