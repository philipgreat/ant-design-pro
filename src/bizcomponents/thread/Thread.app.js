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
import styles from './Thread.app.less';
import ThreadDashboard from './Thread.dashboard';
import ThreadEditDetail from './Thread.editdetail';

import HeaderSearch from '../../components/HeaderSearch';
import NoticeIcon from '../../components/NoticeIcon';
import GlobalFooter from '../../components/GlobalFooter';


import GlobalComponents from '../../custcomponents';
/*

const {ThreadReplySearch,ThreadReplyCreateForm,ThreadReplyUpdateForm} = GlobalComponents;

const {ThreadRegistrationSearch,ThreadRegistrationCreateForm,ThreadRegistrationUpdateForm} = GlobalComponents;

const {ThreadLikeSearch,ThreadLikeCreateForm,ThreadLikeUpdateForm} = GlobalComponents;
*/
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

class ThreadBizApp extends React.PureComponent {
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
      return ['/thread/'];
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
          <span>主贴</span>
        </span>}
      >

        <Menu.Item>
          <Link to={`/thread/${objectId}/list/threadReplyList`}>跟帖回复</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/thread/${objectId}/list/threadRegistrationList`}>活动注册</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/thread/${objectId}/list/threadLikeList`}>主贴点赞</Link>
        </Menu.Item>
      </SubMenu>
    );
  }


  getThreadReplySearch = () => {
    const {ThreadReplySearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._thread.threadReplyList,
      count: state._thread.threadReplyCount,
      currentPage: state._thread.threadReplyCurrentPageNumber,
      searchFormParameters: state._thread.threadReplySearchFormParameters,
      loading: state._thread.loading,
      owner: { type: '_thread', id: state._thread.id }, // this is for model namespace and
    }))(ThreadReplySearch);
  }
  getThreadReplyCreateForm = () => {
   	const {ThreadReplyCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._thread.threadReplyList,
      count: state._thread.threadReplyCount,
      currentPage: state._thread.threadReplyCurrentPageNumber,
      searchFormParameters: state._thread.threadReplySearchFormParameters,
      loading: state._thread.loading,
      owner: { type: '_thread', id: state._thread.id }, // this is for model namespace and
    }))(ThreadReplyCreateForm);
  }
  
  getThreadReplyUpdateForm = () => {
  	const {ThreadReplyUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._thread.selectedRows,
      currentUpdateIndex: state._thread.currentUpdateIndex,
      owner: { type: '_thread', id: state._thread.id }, // this is for model namespace and
    }))(ThreadReplyUpdateForm);
  }

  getThreadRegistrationSearch = () => {
    const {ThreadRegistrationSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._thread.threadRegistrationList,
      count: state._thread.threadRegistrationCount,
      currentPage: state._thread.threadRegistrationCurrentPageNumber,
      searchFormParameters: state._thread.threadRegistrationSearchFormParameters,
      loading: state._thread.loading,
      owner: { type: '_thread', id: state._thread.id }, // this is for model namespace and
    }))(ThreadRegistrationSearch);
  }
  getThreadRegistrationCreateForm = () => {
   	const {ThreadRegistrationCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._thread.threadRegistrationList,
      count: state._thread.threadRegistrationCount,
      currentPage: state._thread.threadRegistrationCurrentPageNumber,
      searchFormParameters: state._thread.threadRegistrationSearchFormParameters,
      loading: state._thread.loading,
      owner: { type: '_thread', id: state._thread.id }, // this is for model namespace and
    }))(ThreadRegistrationCreateForm);
  }
  
  getThreadRegistrationUpdateForm = () => {
  	const {ThreadRegistrationUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._thread.selectedRows,
      currentUpdateIndex: state._thread.currentUpdateIndex,
      owner: { type: '_thread', id: state._thread.id }, // this is for model namespace and
    }))(ThreadRegistrationUpdateForm);
  }

  getThreadLikeSearch = () => {
    const {ThreadLikeSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._thread.threadLikeList,
      count: state._thread.threadLikeCount,
      currentPage: state._thread.threadLikeCurrentPageNumber,
      searchFormParameters: state._thread.threadLikeSearchFormParameters,
      loading: state._thread.loading,
      owner: { type: '_thread', id: state._thread.id }, // this is for model namespace and
    }))(ThreadLikeSearch);
  }
  getThreadLikeCreateForm = () => {
   	const {ThreadLikeCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._thread.threadLikeList,
      count: state._thread.threadLikeCount,
      currentPage: state._thread.threadLikeCurrentPageNumber,
      searchFormParameters: state._thread.threadLikeSearchFormParameters,
      loading: state._thread.loading,
      owner: { type: '_thread', id: state._thread.id }, // this is for model namespace and
    }))(ThreadLikeCreateForm);
  }
  
  getThreadLikeUpdateForm = () => {
  	const {ThreadLikeUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._thread.selectedRows,
      currentUpdateIndex: state._thread.currentUpdateIndex,
      owner: { type: '_thread', id: state._thread.id }, // this is for model namespace and
    }))(ThreadLikeUpdateForm);
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
             <Link to="/home"> <h1>主贴</h1></Link>
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
        <Link to={`/thread/${this.props.thread.id}/dashboard`}><Icon type='dashboard' /><span>仪表板</span></Link>
        
      </Menu.Item>
         <Menu.Item >   
        <Link to={`/thread/${this.props.thread.id}/editDetail`}><Icon type='edit' /><span>详情编辑</span></Link>
        
      </Menu.Item>
      
             {this.getNavMenuItems(this.props.thread.id)}
           </Menu>
         </Sider>
         <Layout>
           <Content style={{ margin: '24px 24px 0', height: '100%' }}>
             <Switch>
               <Route path="/thread/:id/dashboard" component={ThreadDashboard} />
               <Route path="/thread/:id/editDetail" component={ThreadEditDetail} />

               <Route path="/thread/:id/list/threadReplyList" component={this.getThreadReplySearch()} />
               <Route path="/thread/:id/list/threadReplyCreateForm" component={this.getThreadReplyCreateForm()} />
               <Route path="/thread/:id/list/threadReplyUpdateForm" component={this.getThreadReplyUpdateForm()} />

               <Route path="/thread/:id/list/threadRegistrationList" component={this.getThreadRegistrationSearch()} />
               <Route path="/thread/:id/list/threadRegistrationCreateForm" component={this.getThreadRegistrationCreateForm()} />
               <Route path="/thread/:id/list/threadRegistrationUpdateForm" component={this.getThreadRegistrationUpdateForm()} />

               <Route path="/thread/:id/list/threadLikeList" component={this.getThreadLikeSearch()} />
               <Route path="/thread/:id/list/threadLikeCreateForm" component={this.getThreadLikeCreateForm()} />
               <Route path="/thread/:id/list/threadLikeUpdateForm" component={this.getThreadLikeUpdateForm()} />
              
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
  thread: state._thread,
  ...state,
}))(ThreadBizApp);



