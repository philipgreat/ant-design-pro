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
import styles from './Task.app.less';
import HeaderSearch from '../../components/HeaderSearch';
import NoticeIcon from '../../components/NoticeIcon';
import GlobalFooter from '../../components/GlobalFooter';

import TaskAssigmentSearch from '../taskassigment/TaskAssigment.search'
import TaskAssigmentCreateForm from '../taskassigment/TaskAssigment.createform'
import TaskLikeSearch from '../tasklike/TaskLike.search'
import TaskLikeCreateForm from '../tasklike/TaskLike.createform'
import TaskReplySearch from '../taskreply/TaskReply.search'
import TaskReplyCreateForm from '../taskreply/TaskReply.createform'

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

class TaskBizApp extends React.PureComponent {
  
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
      return ['/task/'];
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
        <span>任务</span>
      </span>} >
      
      
      <Menu.Item >   
        <Link to={"/task/"+objectId+"/list/taskAssigmentList"}>任务分配</Link>
      </Menu.Item>
  

      <Menu.Item >   
        <Link to={"/task/"+objectId+"/list/taskLikeList"}>任务点赞</Link>
      </Menu.Item>
  

      <Menu.Item >   
        <Link to={"/task/"+objectId+"/list/taskReplyList"}>回复任务</Link>
      </Menu.Item>
  
  
 
      
      </SubMenu>

    );

  }




  getTaskAssigmentSearch() {
 
    return connect(state => ({
      rule: state.rule,
      data: state.task.taskAssigmentList,
      count: state.task.taskAssigmentCount,
      currentPage: state.task.taskAssigmentCurrentPageNumber,
      searchFormParameters: state.task.taskAssigmentSearchFormParameters,
      loading: state.task.loading,
      owner: {type:'task',id:state.task.id}//this is for model namespace and 
    }))(TaskAssigmentSearch);
  }
  getTaskAssigmentCreateForm() {
 
    return connect(state => ({
      rule: state.rule,
      data: state.task.taskAssigmentList,
      count: state.task.taskAssigmentCount,
      currentPage: state.task.taskAssigmentCurrentPageNumber,
      searchFormParameters: state.task.taskAssigmentSearchFormParameters,
      loading: state.task.loading,
      owner: {type:'task',id:state.task.id}//this is for model namespace and 
    }))(TaskAssigmentCreateForm);
  }
  

  getTaskLikeSearch() {
 
    return connect(state => ({
      rule: state.rule,
      data: state.task.taskLikeList,
      count: state.task.taskLikeCount,
      currentPage: state.task.taskLikeCurrentPageNumber,
      searchFormParameters: state.task.taskLikeSearchFormParameters,
      loading: state.task.loading,
      owner: {type:'task',id:state.task.id}//this is for model namespace and 
    }))(TaskLikeSearch);
  }
  getTaskLikeCreateForm() {
 
    return connect(state => ({
      rule: state.rule,
      data: state.task.taskLikeList,
      count: state.task.taskLikeCount,
      currentPage: state.task.taskLikeCurrentPageNumber,
      searchFormParameters: state.task.taskLikeSearchFormParameters,
      loading: state.task.loading,
      owner: {type:'task',id:state.task.id}//this is for model namespace and 
    }))(TaskLikeCreateForm);
  }
  

  getTaskReplySearch() {
 
    return connect(state => ({
      rule: state.rule,
      data: state.task.taskReplyList,
      count: state.task.taskReplyCount,
      currentPage: state.task.taskReplyCurrentPageNumber,
      searchFormParameters: state.task.taskReplySearchFormParameters,
      loading: state.task.loading,
      owner: {type:'task',id:state.task.id}//this is for model namespace and 
    }))(TaskReplySearch);
  }
  getTaskReplyCreateForm() {
 
    return connect(state => ({
      rule: state.rule,
      data: state.task.taskReplyList,
      count: state.task.taskReplyCount,
      currentPage: state.task.taskReplyCurrentPageNumber,
      searchFormParameters: state.task.taskReplySearchFormParameters,
      loading: state.task.loading,
      owner: {type:'task',id:state.task.id}//this is for model namespace and 
    }))(TaskReplyCreateForm);
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
            <Link to="/home"> <h1>任务</h1></Link>
          </div>
          
          <Menu
            theme="dark"
            mode="inline"
            {...menuProps}
            onOpenChange={this.handleOpenChange}
            selectedKeys={this.getCurrentMenuSelectedKeys()}
            style={{ margin: '16px 0', width: '100%' }}
          >
            {this.getNavMenuItems(this.props.task.id)}
          </Menu>
        </Sider>
        <Layout>
        
          <Content style={{ margin: '24px 24px 0', height: '100%' }}>
            <Switch>
    
          <Route path="/task/:id/list/taskAssigmentList" component={this.getTaskAssigmentSearch()} />
          <Route path="/task/:id/list/taskAssigmentCreateForm" component={this.getTaskAssigmentCreateForm()} />
          

          <Route path="/task/:id/list/taskLikeList" component={this.getTaskLikeSearch()} />
          <Route path="/task/:id/list/taskLikeCreateForm" component={this.getTaskLikeCreateForm()} />
          

          <Route path="/task/:id/list/taskReplyList" component={this.getTaskReplySearch()} />
          <Route path="/task/:id/list/taskReplyCreateForm" component={this.getTaskReplyCreateForm()} />
          
              
             
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
}))(TaskBizApp);



