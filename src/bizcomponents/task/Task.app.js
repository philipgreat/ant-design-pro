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
import styles from './Task.app.less'

import HeaderSearch from '../../components/HeaderSearch'
import NoticeIcon from '../../components/NoticeIcon'
import GlobalFooter from '../../components/GlobalFooter'

import GlobalComponents from '../../custcomponents'

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

class TaskBizApp extends React.PureComponent {
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
      return ['/task/']
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
            <span>任务</span>
          </span>
        }
      >
        <Menu.Item>
          <Link to={`/task/${objectId}/list/taskAssigmentList`}>任务分配</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/task/${objectId}/list/taskLikeList`}>任务点赞</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/task/${objectId}/list/taskReplyList`}>回复任务</Link>
        </Menu.Item>
      </SubMenu>
    )
  }

  getTaskAssigmentSearch = () => {
    const { TaskAssigmentSearch } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._task.taskAssigmentList,
      count: state._task.taskAssigmentCount,
      currentPage: state._task.taskAssigmentCurrentPageNumber,
      searchFormParameters: state._task.taskAssigmentSearchFormParameters,
      loading: state._task.loading,
      owner: {
        type: '_task',
        id: state._task.id,
        listName: 'taskAssigmentList',
      }, // this is for model namespace and
    }))(TaskAssigmentSearch)
  }
  getTaskAssigmentCreateForm = () => {
    const { TaskAssigmentCreateForm } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._task.taskAssigmentList,
      count: state._task.taskAssigmentCount,
      currentPage: state._task.taskAssigmentCurrentPageNumber,
      searchFormParameters: state._task.taskAssigmentSearchFormParameters,
      loading: state._task.loading,
      owner: {
        type: '_task',
        id: state._task.id,
        listName: 'taskAssigmentList',
      }, // this is for model namespace and
    }))(TaskAssigmentCreateForm)
  }

  getTaskAssigmentUpdateForm = () => {
    const { TaskAssigmentUpdateForm } = GlobalComponents
    return connect(state => ({
      selectedRows: state._task.selectedRows,
      currentUpdateIndex: state._task.currentUpdateIndex,
      owner: {
        type: '_task',
        id: state._task.id,
        listName: 'taskAssigmentList',
      }, // this is for model namespace and
    }))(TaskAssigmentUpdateForm)
  }

  getTaskLikeSearch = () => {
    const { TaskLikeSearch } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._task.taskLikeList,
      count: state._task.taskLikeCount,
      currentPage: state._task.taskLikeCurrentPageNumber,
      searchFormParameters: state._task.taskLikeSearchFormParameters,
      loading: state._task.loading,
      owner: { type: '_task', id: state._task.id, listName: 'taskLikeList' }, // this is for model namespace and
    }))(TaskLikeSearch)
  }
  getTaskLikeCreateForm = () => {
    const { TaskLikeCreateForm } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._task.taskLikeList,
      count: state._task.taskLikeCount,
      currentPage: state._task.taskLikeCurrentPageNumber,
      searchFormParameters: state._task.taskLikeSearchFormParameters,
      loading: state._task.loading,
      owner: { type: '_task', id: state._task.id, listName: 'taskLikeList' }, // this is for model namespace and
    }))(TaskLikeCreateForm)
  }

  getTaskLikeUpdateForm = () => {
    const { TaskLikeUpdateForm } = GlobalComponents
    return connect(state => ({
      selectedRows: state._task.selectedRows,
      currentUpdateIndex: state._task.currentUpdateIndex,
      owner: { type: '_task', id: state._task.id, listName: 'taskLikeList' }, // this is for model namespace and
    }))(TaskLikeUpdateForm)
  }

  getTaskReplySearch = () => {
    const { TaskReplySearch } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._task.taskReplyList,
      count: state._task.taskReplyCount,
      currentPage: state._task.taskReplyCurrentPageNumber,
      searchFormParameters: state._task.taskReplySearchFormParameters,
      loading: state._task.loading,
      owner: { type: '_task', id: state._task.id, listName: 'taskReplyList' }, // this is for model namespace and
    }))(TaskReplySearch)
  }
  getTaskReplyCreateForm = () => {
    const { TaskReplyCreateForm } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._task.taskReplyList,
      count: state._task.taskReplyCount,
      currentPage: state._task.taskReplyCurrentPageNumber,
      searchFormParameters: state._task.taskReplySearchFormParameters,
      loading: state._task.loading,
      owner: { type: '_task', id: state._task.id, listName: 'taskReplyList' }, // this is for model namespace and
    }))(TaskReplyCreateForm)
  }

  getTaskReplyUpdateForm = () => {
    const { TaskReplyUpdateForm } = GlobalComponents
    return connect(state => ({
      selectedRows: state._task.selectedRows,
      currentUpdateIndex: state._task.currentUpdateIndex,
      owner: { type: '_task', id: state._task.id, listName: 'taskReplyList' }, // this is for model namespace and
    }))(TaskReplyUpdateForm)
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

    const { TaskDashboard } = GlobalComponents
    const { TaskEditDetail } = GlobalComponents
    const { TaskViewDetail } = GlobalComponents

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
          onCollapse={() => this.onCollapse(collapsed)}
          width={256}
          className={styles.sider}
        >
          <div className={styles.logo}>
            <img src="./scm.svg" alt="logo" onClick={this.toggle} />
            <Link to="/home">
              {' '}
              <h1>任务</h1>
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
              <Link to={`/task/${this.props.task.id}/dashboard`}>
                <Icon type="dashboard" />
                <span>仪表板</span>
              </Link>
            </Menu.Item>

            {this.getNavMenuItems(this.props.task.id)}
            <Menu.Item>
              <Link to={'/home'}>
                <Icon type="home" />
                <span>回到主页</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content style={{ margin: '24px 24px 0', height: '100%' }}>
            <Switch>
              <Route path="/task/:id/dashboard" component={TaskDashboard} />

              <Route path="/task/:id/editDetail" component={TaskEditDetail} />
              <Route path="/task/:id/viewDetail" component={TaskViewDetail} />

              <Route
                path="/task/:id/list/taskAssigmentList"
                component={this.getTaskAssigmentSearch()}
              />
              <Route
                path="/task/:id/list/taskAssigmentCreateForm"
                component={this.getTaskAssigmentCreateForm()}
              />
              <Route
                path="/task/:id/list/taskAssigmentUpdateForm"
                component={this.getTaskAssigmentUpdateForm()}
              />

              <Route
                path="/task/:id/list/taskLikeList"
                component={this.getTaskLikeSearch()}
              />
              <Route
                path="/task/:id/list/taskLikeCreateForm"
                component={this.getTaskLikeCreateForm()}
              />
              <Route
                path="/task/:id/list/taskLikeUpdateForm"
                component={this.getTaskLikeUpdateForm()}
              />

              <Route
                path="/task/:id/list/taskReplyList"
                component={this.getTaskReplySearch()}
              />
              <Route
                path="/task/:id/list/taskReplyCreateForm"
                component={this.getTaskReplyCreateForm()}
              />
              <Route
                path="/task/:id/list/taskReplyUpdateForm"
                component={this.getTaskReplyUpdateForm()}
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
  task: state._task,
  ...state,
}))(TaskBizApp)
