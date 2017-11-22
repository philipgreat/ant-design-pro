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
import HeaderSearch from '../../components/HeaderSearch';
import NoticeIcon from '../../components/NoticeIcon';
import GlobalFooter from '../../components/GlobalFooter';

import PatientInfoSearch from '../patientinfo/PatientInfo.search'

import UserSkillSearch from '../userskill/UserSkill.search'

import MessageFilterSearch from '../messagefilter/MessageFilter.search'

import UserMessageSearch from '../usermessage/UserMessage.search'

import TaskSearch from '../task/Task.search'

import TaskAssigmentSearch from '../taskassigment/TaskAssigment.search'

import TaskLikeSearch from '../tasklike/TaskLike.search'

import TaskReplySearch from '../taskreply/TaskReply.search'

import TaskReplyLikeSearch from '../taskreplylike/TaskReplyLike.search'

import ThreadSearch from '../thread/Thread.search'

import ThreadReplySearch from '../threadreply/ThreadReply.search'

import ThreadRegistrationSearch from '../threadregistration/ThreadRegistration.search'

import ThreadLikeSearch from '../threadlike/ThreadLike.search'

import ThreadReplyLikeSearch from '../threadreplylike/ThreadReplyLike.search'

import FanSearch from '../fan/Fan.search'

import FollowSearch from '../follow/Follow.search'

import BonusPointSearch from '../bonuspoint/BonusPoint.search'

import ExperiencePointSearch from '../experiencepoint/ExperiencePoint.search'


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
    this.props.dispatch({
      type: 'user/fetchCurrent',
    });
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
      data: state.communityUser.patientInfoList,
      count: state.communityUser.patientInfoCount,
      loading: state.communityUser.loading
    }))(PatientInfoSearch);
  }
  

  getUserSkillSearch() {
 
    return connect(state => ({
      rule: state.rule,
      data: state.communityUser.userSkillList,
      count: state.communityUser.userSkillCount,
      loading: state.communityUser.loading
    }))(UserSkillSearch);
  }
  

  getMessageFilterSearch() {
 
    return connect(state => ({
      rule: state.rule,
      data: state.communityUser.messageFilterList,
      count: state.communityUser.messageFilterCount,
      loading: state.communityUser.loading
    }))(MessageFilterSearch);
  }
  

  getUserMessageSearch() {
 
    return connect(state => ({
      rule: state.rule,
      data: state.communityUser.userMessageList,
      count: state.communityUser.userMessageCount,
      loading: state.communityUser.loading
    }))(UserMessageSearch);
  }
  

  getTaskSearch() {
 
    return connect(state => ({
      rule: state.rule,
      data: state.communityUser.taskList,
      count: state.communityUser.taskCount,
      loading: state.communityUser.loading
    }))(TaskSearch);
  }
  

  getTaskAssigmentSearch() {
 
    return connect(state => ({
      rule: state.rule,
      data: state.communityUser.taskAssigmentList,
      count: state.communityUser.taskAssigmentCount,
      loading: state.communityUser.loading
    }))(TaskAssigmentSearch);
  }
  

  getTaskLikeSearch() {
 
    return connect(state => ({
      rule: state.rule,
      data: state.communityUser.taskLikeList,
      count: state.communityUser.taskLikeCount,
      loading: state.communityUser.loading
    }))(TaskLikeSearch);
  }
  

  getTaskReplySearch() {
 
    return connect(state => ({
      rule: state.rule,
      data: state.communityUser.taskReplyList,
      count: state.communityUser.taskReplyCount,
      loading: state.communityUser.loading
    }))(TaskReplySearch);
  }
  

  getTaskReplyLikeSearch() {
 
    return connect(state => ({
      rule: state.rule,
      data: state.communityUser.taskReplyLikeList,
      count: state.communityUser.taskReplyLikeCount,
      loading: state.communityUser.loading
    }))(TaskReplyLikeSearch);
  }
  

  getThreadSearch() {
 
    return connect(state => ({
      rule: state.rule,
      data: state.communityUser.threadList,
      count: state.communityUser.threadCount,
      loading: state.communityUser.loading
    }))(ThreadSearch);
  }
  

  getThreadReplySearch() {
 
    return connect(state => ({
      rule: state.rule,
      data: state.communityUser.threadReplyList,
      count: state.communityUser.threadReplyCount,
      loading: state.communityUser.loading
    }))(ThreadReplySearch);
  }
  

  getThreadRegistrationSearch() {
 
    return connect(state => ({
      rule: state.rule,
      data: state.communityUser.threadRegistrationList,
      count: state.communityUser.threadRegistrationCount,
      loading: state.communityUser.loading
    }))(ThreadRegistrationSearch);
  }
  

  getThreadLikeSearch() {
 
    return connect(state => ({
      rule: state.rule,
      data: state.communityUser.threadLikeList,
      count: state.communityUser.threadLikeCount,
      loading: state.communityUser.loading
    }))(ThreadLikeSearch);
  }
  

  getThreadReplyLikeSearch() {
 
    return connect(state => ({
      rule: state.rule,
      data: state.communityUser.threadReplyLikeList,
      count: state.communityUser.threadReplyLikeCount,
      loading: state.communityUser.loading
    }))(ThreadReplyLikeSearch);
  }
  

  getFanSearch() {
 
    return connect(state => ({
      rule: state.rule,
      data: state.communityUser.fanList,
      count: state.communityUser.fanCount,
      loading: state.communityUser.loading
    }))(FanSearch);
  }
  

  getFollowSearch() {
 
    return connect(state => ({
      rule: state.rule,
      data: state.communityUser.followList,
      count: state.communityUser.followCount,
      loading: state.communityUser.loading
    }))(FollowSearch);
  }
  

  getBonusPointSearch() {
 
    return connect(state => ({
      rule: state.rule,
      data: state.communityUser.bonusPointList,
      count: state.communityUser.bonusPointCount,
      loading: state.communityUser.loading
    }))(BonusPointSearch);
  }
  

  getExperiencePointSearch() {
 
    return connect(state => ({
      rule: state.rule,
      data: state.communityUser.experiencePointList,
      count: state.communityUser.experiencePointCount,
      loading: state.communityUser.loading
    }))(ExperiencePointSearch);
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
    const { currentUser, collapsed, fetchingNotices,loading } = this.props;
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
            <Link to="/">
              <img src="https://gw.alipayobjects.com/zos/rmsportal/iwWyPinUoseUxIAeElSx.svg" alt="logo" />
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
            {this.getNavMenuItems(this.props.communityUser.id)}
          </Menu>
        </Sider>
        <Layout>
        <Header className={styles.header}>
            <Icon
              className={styles.trigger}
              type={collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            /></Header>
          <Content style={{ margin: '24px 24px 0', height: '100%' }}>
            <Switch>
    
          <Route path="/communityUser/:id/list/patientInfoList" component={this.getPatientInfoSearch()} />

          <Route path="/communityUser/:id/list/userSkillList" component={this.getUserSkillSearch()} />

          <Route path="/communityUser/:id/list/messageFilterList" component={this.getMessageFilterSearch()} />

          <Route path="/communityUser/:id/list/userMessageList" component={this.getUserMessageSearch()} />

          <Route path="/communityUser/:id/list/taskList" component={this.getTaskSearch()} />

          <Route path="/communityUser/:id/list/taskAssigmentList" component={this.getTaskAssigmentSearch()} />

          <Route path="/communityUser/:id/list/taskLikeList" component={this.getTaskLikeSearch()} />

          <Route path="/communityUser/:id/list/taskReplyList" component={this.getTaskReplySearch()} />

          <Route path="/communityUser/:id/list/taskReplyLikeList" component={this.getTaskReplyLikeSearch()} />

          <Route path="/communityUser/:id/list/threadList" component={this.getThreadSearch()} />

          <Route path="/communityUser/:id/list/threadReplyList" component={this.getThreadReplySearch()} />

          <Route path="/communityUser/:id/list/threadRegistrationList" component={this.getThreadRegistrationSearch()} />

          <Route path="/communityUser/:id/list/threadLikeList" component={this.getThreadLikeSearch()} />

          <Route path="/communityUser/:id/list/threadReplyLikeList" component={this.getThreadReplyLikeSearch()} />

          <Route path="/communityUser/:id/list/fanList" component={this.getFanSearch()} />

          <Route path="/communityUser/:id/list/followList" component={this.getFollowSearch()} />

          <Route path="/communityUser/:id/list/bonusPointList" component={this.getBonusPointSearch()} />

          <Route path="/communityUser/:id/list/experiencePointList" component={this.getExperiencePointSearch()} />
              
             
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
  currentUser: state.user.currentUser,
  collapsed: state.global.collapsed,
  fetchingNotices: state.global.fetchingNotices,
  notices: state.global.notices,
  ...state
}))(CommunityUserBizApp);



