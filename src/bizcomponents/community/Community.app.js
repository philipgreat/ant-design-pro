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
import InvitationCodeCreateForm from '../invitationcode/InvitationCode.createform'
import HomePageSearch from '../homepage/HomePage.search'
import HomePageCreateForm from '../homepage/HomePage.createform'
import EncyclopediaItemSearch from '../encyclopediaitem/EncyclopediaItem.search'
import EncyclopediaItemCreateForm from '../encyclopediaitem/EncyclopediaItem.createform'
import TaskPageSearch from '../taskpage/TaskPage.search'
import TaskPageCreateForm from '../taskpage/TaskPage.createform'
import CommunityUserSearch from '../communityuser/CommunityUser.search'
import CommunityUserCreateForm from '../communityuser/CommunityUser.createform'
import TaskSearch from '../task/Task.search'
import TaskCreateForm from '../task/Task.createform'
import GroupPageSearch from '../grouppage/GroupPage.search'
import GroupPageCreateForm from '../grouppage/GroupPage.createform'
import ThreadSearch from '../thread/Thread.search'
import ThreadCreateForm from '../thread/Thread.createform'

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
      searchFormParameters: state.community.invitationCodeSearchFormParameters,
      loading: state.community.loading,
      owner: {type:'community',id:state.community.id}//this is for model namespace and 
    }))(InvitationCodeSearch);
  }
  getInvitationCodeCreateForm() {
 
    return connect(state => ({
      rule: state.rule,
      data: state.community.invitationCodeList,
      count: state.community.invitationCodeCount,
      currentPage: state.community.invitationCodeCurrentPageNumber,
      searchFormParameters: state.community.invitationCodeSearchFormParameters,
      loading: state.community.loading,
      owner: {type:'community',id:state.community.id}//this is for model namespace and 
    }))(InvitationCodeCreateForm);
  }
  

  getHomePageSearch() {
 
    return connect(state => ({
      rule: state.rule,
      data: state.community.homePageList,
      count: state.community.homePageCount,
      currentPage: state.community.homePageCurrentPageNumber,
      searchFormParameters: state.community.homePageSearchFormParameters,
      loading: state.community.loading,
      owner: {type:'community',id:state.community.id}//this is for model namespace and 
    }))(HomePageSearch);
  }
  getHomePageCreateForm() {
 
    return connect(state => ({
      rule: state.rule,
      data: state.community.homePageList,
      count: state.community.homePageCount,
      currentPage: state.community.homePageCurrentPageNumber,
      searchFormParameters: state.community.homePageSearchFormParameters,
      loading: state.community.loading,
      owner: {type:'community',id:state.community.id}//this is for model namespace and 
    }))(HomePageCreateForm);
  }
  

  getEncyclopediaItemSearch() {
 
    return connect(state => ({
      rule: state.rule,
      data: state.community.encyclopediaItemList,
      count: state.community.encyclopediaItemCount,
      currentPage: state.community.encyclopediaItemCurrentPageNumber,
      searchFormParameters: state.community.encyclopediaItemSearchFormParameters,
      loading: state.community.loading,
      owner: {type:'community',id:state.community.id}//this is for model namespace and 
    }))(EncyclopediaItemSearch);
  }
  getEncyclopediaItemCreateForm() {
 
    return connect(state => ({
      rule: state.rule,
      data: state.community.encyclopediaItemList,
      count: state.community.encyclopediaItemCount,
      currentPage: state.community.encyclopediaItemCurrentPageNumber,
      searchFormParameters: state.community.encyclopediaItemSearchFormParameters,
      loading: state.community.loading,
      owner: {type:'community',id:state.community.id}//this is for model namespace and 
    }))(EncyclopediaItemCreateForm);
  }
  

  getTaskPageSearch() {
 
    return connect(state => ({
      rule: state.rule,
      data: state.community.taskPageList,
      count: state.community.taskPageCount,
      currentPage: state.community.taskPageCurrentPageNumber,
      searchFormParameters: state.community.taskPageSearchFormParameters,
      loading: state.community.loading,
      owner: {type:'community',id:state.community.id}//this is for model namespace and 
    }))(TaskPageSearch);
  }
  getTaskPageCreateForm() {
 
    return connect(state => ({
      rule: state.rule,
      data: state.community.taskPageList,
      count: state.community.taskPageCount,
      currentPage: state.community.taskPageCurrentPageNumber,
      searchFormParameters: state.community.taskPageSearchFormParameters,
      loading: state.community.loading,
      owner: {type:'community',id:state.community.id}//this is for model namespace and 
    }))(TaskPageCreateForm);
  }
  

  getCommunityUserSearch() {
 
    return connect(state => ({
      rule: state.rule,
      data: state.community.communityUserList,
      count: state.community.communityUserCount,
      currentPage: state.community.communityUserCurrentPageNumber,
      searchFormParameters: state.community.communityUserSearchFormParameters,
      loading: state.community.loading,
      owner: {type:'community',id:state.community.id}//this is for model namespace and 
    }))(CommunityUserSearch);
  }
  getCommunityUserCreateForm() {
 
    return connect(state => ({
      rule: state.rule,
      data: state.community.communityUserList,
      count: state.community.communityUserCount,
      currentPage: state.community.communityUserCurrentPageNumber,
      searchFormParameters: state.community.communityUserSearchFormParameters,
      loading: state.community.loading,
      owner: {type:'community',id:state.community.id}//this is for model namespace and 
    }))(CommunityUserCreateForm);
  }
  

  getTaskSearch() {
 
    return connect(state => ({
      rule: state.rule,
      data: state.community.taskList,
      count: state.community.taskCount,
      currentPage: state.community.taskCurrentPageNumber,
      searchFormParameters: state.community.taskSearchFormParameters,
      loading: state.community.loading,
      owner: {type:'community',id:state.community.id}//this is for model namespace and 
    }))(TaskSearch);
  }
  getTaskCreateForm() {
 
    return connect(state => ({
      rule: state.rule,
      data: state.community.taskList,
      count: state.community.taskCount,
      currentPage: state.community.taskCurrentPageNumber,
      searchFormParameters: state.community.taskSearchFormParameters,
      loading: state.community.loading,
      owner: {type:'community',id:state.community.id}//this is for model namespace and 
    }))(TaskCreateForm);
  }
  

  getGroupPageSearch() {
 
    return connect(state => ({
      rule: state.rule,
      data: state.community.groupPageList,
      count: state.community.groupPageCount,
      currentPage: state.community.groupPageCurrentPageNumber,
      searchFormParameters: state.community.groupPageSearchFormParameters,
      loading: state.community.loading,
      owner: {type:'community',id:state.community.id}//this is for model namespace and 
    }))(GroupPageSearch);
  }
  getGroupPageCreateForm() {
 
    return connect(state => ({
      rule: state.rule,
      data: state.community.groupPageList,
      count: state.community.groupPageCount,
      currentPage: state.community.groupPageCurrentPageNumber,
      searchFormParameters: state.community.groupPageSearchFormParameters,
      loading: state.community.loading,
      owner: {type:'community',id:state.community.id}//this is for model namespace and 
    }))(GroupPageCreateForm);
  }
  

  getThreadSearch() {
 
    return connect(state => ({
      rule: state.rule,
      data: state.community.threadList,
      count: state.community.threadCount,
      currentPage: state.community.threadCurrentPageNumber,
      searchFormParameters: state.community.threadSearchFormParameters,
      loading: state.community.loading,
      owner: {type:'community',id:state.community.id}//this is for model namespace and 
    }))(ThreadSearch);
  }
  getThreadCreateForm() {
 
    return connect(state => ({
      rule: state.rule,
      data: state.community.threadList,
      count: state.community.threadCount,
      currentPage: state.community.threadCurrentPageNumber,
      searchFormParameters: state.community.threadSearchFormParameters,
      loading: state.community.loading,
      owner: {type:'community',id:state.community.id}//this is for model namespace and 
    }))(ThreadCreateForm);
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
            <img src="https://gw.alipayobjects.com/zos/rmsportal/iwWyPinUoseUxIAeElSx.svg" alt="logo" onClick={this.toggle}/>          
            <Link to="/home"> <h1>社区</h1></Link>
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
        
          <Content style={{ margin: '24px 24px 0', height: '100%' }}>
            <Switch>
    
          <Route path="/community/:id/list/invitationCodeList" component={this.getInvitationCodeSearch()} />
          <Route path="/community/:id/list/invitationCodeCreateForm" component={this.getInvitationCodeCreateForm()} />
          

          <Route path="/community/:id/list/homePageList" component={this.getHomePageSearch()} />
          <Route path="/community/:id/list/homePageCreateForm" component={this.getHomePageCreateForm()} />
          

          <Route path="/community/:id/list/encyclopediaItemList" component={this.getEncyclopediaItemSearch()} />
          <Route path="/community/:id/list/encyclopediaItemCreateForm" component={this.getEncyclopediaItemCreateForm()} />
          

          <Route path="/community/:id/list/taskPageList" component={this.getTaskPageSearch()} />
          <Route path="/community/:id/list/taskPageCreateForm" component={this.getTaskPageCreateForm()} />
          

          <Route path="/community/:id/list/communityUserList" component={this.getCommunityUserSearch()} />
          <Route path="/community/:id/list/communityUserCreateForm" component={this.getCommunityUserCreateForm()} />
          

          <Route path="/community/:id/list/taskList" component={this.getTaskSearch()} />
          <Route path="/community/:id/list/taskCreateForm" component={this.getTaskCreateForm()} />
          

          <Route path="/community/:id/list/groupPageList" component={this.getGroupPageSearch()} />
          <Route path="/community/:id/list/groupPageCreateForm" component={this.getGroupPageCreateForm()} />
          

          <Route path="/community/:id/list/threadList" component={this.getThreadSearch()} />
          <Route path="/community/:id/list/threadCreateForm" component={this.getThreadCreateForm()} />
          
              
             
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



