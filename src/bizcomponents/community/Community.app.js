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
import styles from './Community.app.less';
import HeaderSearch from '../../components/HeaderSearch';
import NoticeIcon from '../../components/NoticeIcon';
import GlobalFooter from '../../components/GlobalFooter';

import InvitationCodeSearch from '../invitationcode/InvitationCode.search'

import HomePageSearch from '../homepage/HomePage.search'

import EncyclopediaItemSearch from '../encyclopediaitem/EncyclopediaItem.search'

import TaskPageSearch from '../taskpage/TaskPage.search'

import CommunityUserSearch from '../communityuser/CommunityUser.search'

import TaskSearch from '../task/Task.search'

import GroupPageSearch from '../grouppage/GroupPage.search'

import ThreadSearch from '../thread/Thread.search'


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

class CommunityBizApp extends React.PureComponent {
  
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
      return ['/community/'];
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
        <span>社区</span>
      </span>} >
      
      
      <Menu.Item >   
        <Link to={"/community/"+objectId+"/list/invitationCodeList"}>邀请码</Link>
      </Menu.Item>
  

      <Menu.Item >   
        <Link to={"/community/"+objectId+"/list/homePageList"}>主页</Link>
      </Menu.Item>
  

      <Menu.Item >   
        <Link to={"/community/"+objectId+"/list/encyclopediaItemList"}>百科全书条目</Link>
      </Menu.Item>
  

      <Menu.Item >   
        <Link to={"/community/"+objectId+"/list/taskPageList"}>任务页面</Link>
      </Menu.Item>
  

      <Menu.Item >   
        <Link to={"/community/"+objectId+"/list/communityUserList"}>社区用户</Link>
      </Menu.Item>
  

      <Menu.Item >   
        <Link to={"/community/"+objectId+"/list/taskList"}>任务</Link>
      </Menu.Item>
  

      <Menu.Item >   
        <Link to={"/community/"+objectId+"/list/groupPageList"}>群组页面</Link>
      </Menu.Item>
  

      <Menu.Item >   
        <Link to={"/community/"+objectId+"/list/threadList"}>主贴</Link>
      </Menu.Item>
  
  
 
      
      </SubMenu>

    );

  }




  getInvitationCodeSearch() {
 
    return connect(state => ({
      rule: state.rule,
      data: state.community.invitationCodeList,
      count: state.community.invitationCodeCount,
      currentPage: state.community.invitationCodeCurrentPageNumber,
      loading: state.community.loading,
      owner: {type:'community',id:state.community.id}//this is for model namespace and 
    }))(InvitationCodeSearch);
  }
  

  getHomePageSearch() {
 
    return connect(state => ({
      rule: state.rule,
      data: state.community.homePageList,
      count: state.community.homePageCount,
      currentPage: state.community.homePageCurrentPageNumber,
      loading: state.community.loading,
      owner: {type:'community',id:state.community.id}//this is for model namespace and 
    }))(HomePageSearch);
  }
  

  getEncyclopediaItemSearch() {
 
    return connect(state => ({
      rule: state.rule,
      data: state.community.encyclopediaItemList,
      count: state.community.encyclopediaItemCount,
      currentPage: state.community.encyclopediaItemCurrentPageNumber,
      loading: state.community.loading,
      owner: {type:'community',id:state.community.id}//this is for model namespace and 
    }))(EncyclopediaItemSearch);
  }
  

  getTaskPageSearch() {
 
    return connect(state => ({
      rule: state.rule,
      data: state.community.taskPageList,
      count: state.community.taskPageCount,
      currentPage: state.community.taskPageCurrentPageNumber,
      loading: state.community.loading,
      owner: {type:'community',id:state.community.id}//this is for model namespace and 
    }))(TaskPageSearch);
  }
  

  getCommunityUserSearch() {
 
    return connect(state => ({
      rule: state.rule,
      data: state.community.communityUserList,
      count: state.community.communityUserCount,
      currentPage: state.community.communityUserCurrentPageNumber,
      loading: state.community.loading,
      owner: {type:'community',id:state.community.id}//this is for model namespace and 
    }))(CommunityUserSearch);
  }
  

  getTaskSearch() {
 
    return connect(state => ({
      rule: state.rule,
      data: state.community.taskList,
      count: state.community.taskCount,
      currentPage: state.community.taskCurrentPageNumber,
      loading: state.community.loading,
      owner: {type:'community',id:state.community.id}//this is for model namespace and 
    }))(TaskSearch);
  }
  

  getGroupPageSearch() {
 
    return connect(state => ({
      rule: state.rule,
      data: state.community.groupPageList,
      count: state.community.groupPageCount,
      currentPage: state.community.groupPageCurrentPageNumber,
      loading: state.community.loading,
      owner: {type:'community',id:state.community.id}//this is for model namespace and 
    }))(GroupPageSearch);
  }
  

  getThreadSearch() {
 
    return connect(state => ({
      rule: state.rule,
      data: state.community.threadList,
      count: state.community.threadCount,
      currentPage: state.community.threadCurrentPageNumber,
      loading: state.community.loading,
      owner: {type:'community',id:state.community.id}//this is for model namespace and 
    }))(ThreadSearch);
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
              <h1>社区</h1>
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
            {this.getNavMenuItems(this.props.community.id)}
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
    
          <Route path="/community/:id/list/invitationCodeList" component={this.getInvitationCodeSearch()} />

          <Route path="/community/:id/list/homePageList" component={this.getHomePageSearch()} />

          <Route path="/community/:id/list/encyclopediaItemList" component={this.getEncyclopediaItemSearch()} />

          <Route path="/community/:id/list/taskPageList" component={this.getTaskPageSearch()} />

          <Route path="/community/:id/list/communityUserList" component={this.getCommunityUserSearch()} />

          <Route path="/community/:id/list/taskList" component={this.getTaskSearch()} />

          <Route path="/community/:id/list/groupPageList" component={this.getGroupPageSearch()} />

          <Route path="/community/:id/list/threadList" component={this.getThreadSearch()} />
              
             
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
}))(CommunityBizApp);



