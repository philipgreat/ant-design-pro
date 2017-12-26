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
import styles from './TaskResolving.app.less';
import TaskResolvingDashboard from './TaskResolving.dashboard';
import TaskResolvingEditDetail from './TaskResolving.editdetail';

import HeaderSearch from '../../components/HeaderSearch';
import NoticeIcon from '../../components/NoticeIcon';
import GlobalFooter from '../../components/GlobalFooter';

import TaskSearch from '../task/Task.search';
import TaskCreateForm from '../task/Task.createform';
import TaskUpdateForm from '../task/Task.updateform';

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

class TaskResolvingBizApp extends React.PureComponent {
  constructor(props) {
    super(props);
    // 把一级 Layout 的 children 作为菜单项
    // this.menus = getNavData().reduce((arr, current) => arr.concat(current.children), []);
    this.state = {
      openKeys: this.getDefaultCollapsedSubMenus(props),
    };
  }

  componentDidMount() {}
  componentWillUnmount() {
    clearTimeout(this.resizeTimeout);
  }
  onCollapse = (collapsed) => {
    this.props.dispatch({
      type: 'global/changeLayoutCollapsed',
      payload: collapsed,
    });
  }

  getDefaultCollapsedSubMenus = (props) => {
    const currentMenuSelectedKeys = [...this.getCurrentMenuSelectedKeys(props)];
    currentMenuSelectedKeys.splice(-1, 1);
    if (currentMenuSelectedKeys.length === 0) {
      return ['/taskResolving/'];
    }
    return currentMenuSelectedKeys;
  }
  getCurrentMenuSelectedKeys = (props) => {
    const { location: { pathname } } = props || this.props;
    const keys = pathname.split('/').slice(1);
    if (keys.length === 1 && keys[0] === '') {
      return [this.menus[0].key];
    }
    return keys;
  }
  getNavMenuItems = (objectId) => {
    return (
      <SubMenu title={
        <span>
          <Icon type="profile" />
          <span>任务分解</span>
        </span>}
      >

        <Menu.Item>
          <Link to={`/taskResolving/${objectId}/list/taskList`}>任务</Link>
        </Menu.Item>
      </SubMenu>
    );
  }


  getTaskSearch = () => {
    return connect(state => ({
      rule: state.rule,
      data: state._taskResolving.taskList,
      count: state._taskResolving.taskCount,
      currentPage: state._taskResolving.taskCurrentPageNumber,
      searchFormParameters: state._taskResolving.taskSearchFormParameters,
      loading: state._taskResolving.loading,
      owner: { type: '_taskResolving', id: state._taskResolving.id }, // this is for model namespace and
    }))(TaskSearch);
  }
  getTaskCreateForm = () => {
    return connect(state => ({
      rule: state.rule,
      data: state._taskResolving.taskList,
      count: state._taskResolving.taskCount,
      currentPage: state._taskResolving.taskCurrentPageNumber,
      searchFormParameters: state._taskResolving.taskSearchFormParameters,
      loading: state._taskResolving.loading,
      owner: { type: '_taskResolving', id: state._taskResolving.id }, // this is for model namespace and
    }))(TaskCreateForm);
  }
  
  getTaskUpdateForm = () => {
    return connect(state => ({
      selectedRows: state._taskResolving.selectedRows,
      currentUpdateIndex: state._taskResolving.currentUpdateIndex,
      owner: { type: '_taskResolving', id: state._taskResolving.id }, // this is for model namespace and
    }))(TaskUpdateForm);
  }

  getPageTitle = () => {
    // const { location } = this.props;
    // const { pathname } = location;
    const title = '帮帮兔社区运营中心';
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
     // const { collapsed, fetchingNotices,loading } = this.props;
     const { collapsed } = this.props;
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
             <img src="/scm.svg" alt="logo" onClick={this.toggle} />
             <Link to="/home"> <h1>任务分解</h1></Link>
           </div>

           <Menu
             theme="dark"
             mode="inline"
             {...menuProps}
             onOpenChange={this.handleOpenChange}
             selectedKeys={this.getCurrentMenuSelectedKeys()}
             style={{ margin: '16px 0', width: '100%' }}
           >
           
                 <Menu.Item >   
        <Link to={"/taskResolving/"+this.props.taskResolving.id+"/dashboard"}><Icon type='dashboard' /><span>仪表板</span></Link>
        
      </Menu.Item>
      <Menu.Item >   
        <Link to={"/taskResolving/"+this.props.taskResolving.id+"/editDetail"}><Icon type='edit' /><span>详情编辑</span></Link>
        
      </Menu.Item>
             {this.getNavMenuItems(this.props.taskResolving.id)}
           </Menu>
         </Sider>
         <Layout>
           <Content style={{ margin: '24px 24px 0', height: '100%' }}>
             <Switch>
               <Route path="/taskResolving/:id/dashboard" component={TaskResolvingDashboard} />
               <Route path="/taskResolving/:id/editDetail" component={TaskResolvingEditDetail} />

               <Route path="/taskResolving/:id/list/taskList" component={this.getTaskSearch()} />
               <Route path="/taskResolving/:id/list/taskCreateForm" component={this.getTaskCreateForm()} />
               <Route path="/taskResolving/:id/list/taskUpdateForm" component={this.getTaskUpdateForm()} />
              
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
  taskResolving: state._taskResolving,
  ...state,
}))(TaskResolvingBizApp);



