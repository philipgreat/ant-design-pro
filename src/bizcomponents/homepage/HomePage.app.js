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
import styles from './HomePage.app.less';
import HomePageDashboard from './HomePage.dashboard';
import HeaderSearch from '../../components/HeaderSearch';
import NoticeIcon from '../../components/NoticeIcon';
import GlobalFooter from '../../components/GlobalFooter';

import SlideSearch from '../slide/Slide.search'
import SlideCreateForm from '../slide/Slide.createform'
import EncyclopediaItemSearch from '../encyclopediaitem/EncyclopediaItem.search'
import EncyclopediaItemCreateForm from '../encyclopediaitem/EncyclopediaItem.createform'
import TaskFilterSearch from '../taskfilter/TaskFilter.search'
import TaskFilterCreateForm from '../taskfilter/TaskFilter.createform'
import TaskSearch from '../task/Task.search'
import TaskCreateForm from '../task/Task.createform'
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

class HomePageBizApp extends React.PureComponent {
  
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
      return ['/homePage/'];
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
        <span>主页</span>
      </span>} >
      
      
      <Menu.Item >   
        <Link to={"/homePage/"+objectId+"/list/slideList"}>幻灯片</Link>
      </Menu.Item>
  

      <Menu.Item >   
        <Link to={"/homePage/"+objectId+"/list/encyclopediaItemList"}>百科全书条目</Link>
      </Menu.Item>
  

      <Menu.Item >   
        <Link to={"/homePage/"+objectId+"/list/taskFilterList"}>任务过滤器</Link>
      </Menu.Item>
  

      <Menu.Item >   
        <Link to={"/homePage/"+objectId+"/list/taskList"}>任务</Link>
      </Menu.Item>
  

      <Menu.Item >   
        <Link to={"/homePage/"+objectId+"/list/threadList"}>主贴</Link>
      </Menu.Item>
  
  
 
      
      </SubMenu>

    );

  }




  getSlideSearch() {
 
    return connect(state => ({
      rule: state.rule,
      data: state.homePage.slideList,
      count: state.homePage.slideCount,
      currentPage: state.homePage.slideCurrentPageNumber,
      searchFormParameters: state.homePage.slideSearchFormParameters,
      loading: state.homePage.loading,
      owner: {type:'homePage',id:state.homePage.id}//this is for model namespace and 
    }))(SlideSearch);
  }
  getSlideCreateForm() {
 
    return connect(state => ({
      rule: state.rule,
      data: state.homePage.slideList,
      count: state.homePage.slideCount,
      currentPage: state.homePage.slideCurrentPageNumber,
      searchFormParameters: state.homePage.slideSearchFormParameters,
      loading: state.homePage.loading,
      owner: {type:'homePage',id:state.homePage.id}//this is for model namespace and 
    }))(SlideCreateForm);
  }
  

  getEncyclopediaItemSearch() {
 
    return connect(state => ({
      rule: state.rule,
      data: state.homePage.encyclopediaItemList,
      count: state.homePage.encyclopediaItemCount,
      currentPage: state.homePage.encyclopediaItemCurrentPageNumber,
      searchFormParameters: state.homePage.encyclopediaItemSearchFormParameters,
      loading: state.homePage.loading,
      owner: {type:'homePage',id:state.homePage.id}//this is for model namespace and 
    }))(EncyclopediaItemSearch);
  }
  getEncyclopediaItemCreateForm() {
 
    return connect(state => ({
      rule: state.rule,
      data: state.homePage.encyclopediaItemList,
      count: state.homePage.encyclopediaItemCount,
      currentPage: state.homePage.encyclopediaItemCurrentPageNumber,
      searchFormParameters: state.homePage.encyclopediaItemSearchFormParameters,
      loading: state.homePage.loading,
      owner: {type:'homePage',id:state.homePage.id}//this is for model namespace and 
    }))(EncyclopediaItemCreateForm);
  }
  

  getTaskFilterSearch() {
 
    return connect(state => ({
      rule: state.rule,
      data: state.homePage.taskFilterList,
      count: state.homePage.taskFilterCount,
      currentPage: state.homePage.taskFilterCurrentPageNumber,
      searchFormParameters: state.homePage.taskFilterSearchFormParameters,
      loading: state.homePage.loading,
      owner: {type:'homePage',id:state.homePage.id}//this is for model namespace and 
    }))(TaskFilterSearch);
  }
  getTaskFilterCreateForm() {
 
    return connect(state => ({
      rule: state.rule,
      data: state.homePage.taskFilterList,
      count: state.homePage.taskFilterCount,
      currentPage: state.homePage.taskFilterCurrentPageNumber,
      searchFormParameters: state.homePage.taskFilterSearchFormParameters,
      loading: state.homePage.loading,
      owner: {type:'homePage',id:state.homePage.id}//this is for model namespace and 
    }))(TaskFilterCreateForm);
  }
  

  getTaskSearch() {
 
    return connect(state => ({
      rule: state.rule,
      data: state.homePage.taskList,
      count: state.homePage.taskCount,
      currentPage: state.homePage.taskCurrentPageNumber,
      searchFormParameters: state.homePage.taskSearchFormParameters,
      loading: state.homePage.loading,
      owner: {type:'homePage',id:state.homePage.id}//this is for model namespace and 
    }))(TaskSearch);
  }
  getTaskCreateForm() {
 
    return connect(state => ({
      rule: state.rule,
      data: state.homePage.taskList,
      count: state.homePage.taskCount,
      currentPage: state.homePage.taskCurrentPageNumber,
      searchFormParameters: state.homePage.taskSearchFormParameters,
      loading: state.homePage.loading,
      owner: {type:'homePage',id:state.homePage.id}//this is for model namespace and 
    }))(TaskCreateForm);
  }
  

  getThreadSearch() {
 
    return connect(state => ({
      rule: state.rule,
      data: state.homePage.threadList,
      count: state.homePage.threadCount,
      currentPage: state.homePage.threadCurrentPageNumber,
      searchFormParameters: state.homePage.threadSearchFormParameters,
      loading: state.homePage.loading,
      owner: {type:'homePage',id:state.homePage.id}//this is for model namespace and 
    }))(ThreadSearch);
  }
  getThreadCreateForm() {
 
    return connect(state => ({
      rule: state.rule,
      data: state.homePage.threadList,
      count: state.homePage.threadCount,
      currentPage: state.homePage.threadCurrentPageNumber,
      searchFormParameters: state.homePage.threadSearchFormParameters,
      loading: state.homePage.loading,
      owner: {type:'homePage',id:state.homePage.id}//this is for model namespace and 
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
            <img src="/scm.svg" alt="logo" onClick={this.toggle}/>          
            <Link to="/home"> <h1>主页</h1></Link>
          </div>
          
          <Menu
            theme="dark"
            mode="inline"
            {...menuProps}
            onOpenChange={this.handleOpenChange}
            selectedKeys={this.getCurrentMenuSelectedKeys()}
            style={{ margin: '16px 0', width: '100%' }}
          >
            {this.getNavMenuItems(this.props.homePage.id)}
          </Menu>
        </Sider>
        <Layout>
        
          <Content style={{ margin: '24px 24px 0', height: '100%' }}>
            <Switch>
            <Route path="/homePage/:id/dashboard" component={HomePageDashboard} />
          
            
    
          <Route path="/homePage/:id/list/slideList" component={this.getSlideSearch()} />
          <Route path="/homePage/:id/list/slideCreateForm" component={this.getSlideCreateForm()} />
          

          <Route path="/homePage/:id/list/encyclopediaItemList" component={this.getEncyclopediaItemSearch()} />
          <Route path="/homePage/:id/list/encyclopediaItemCreateForm" component={this.getEncyclopediaItemCreateForm()} />
          

          <Route path="/homePage/:id/list/taskFilterList" component={this.getTaskFilterSearch()} />
          <Route path="/homePage/:id/list/taskFilterCreateForm" component={this.getTaskFilterCreateForm()} />
          

          <Route path="/homePage/:id/list/taskList" component={this.getTaskSearch()} />
          <Route path="/homePage/:id/list/taskCreateForm" component={this.getTaskCreateForm()} />
          

          <Route path="/homePage/:id/list/threadList" component={this.getThreadSearch()} />
          <Route path="/homePage/:id/list/threadCreateForm" component={this.getThreadCreateForm()} />
          
              
             
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
}))(HomePageBizApp);



