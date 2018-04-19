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
import styles from './TaskPage.app.less'

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

class TaskPageBizApp extends React.PureComponent {
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
      return ['/taskPage/']
    }
    return currentMenuSelectedKeys
  }
  getCurrentMenuSelectedKeys = props => {
    const {
      location: { pathname },
    } =
      props || this.props
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
            <span>任务页面</span>
          </span>
        }
      >
        <Menu.Item>
          <Link to={`/taskPage/${objectId}/list/taskFilterList`}>
            任务过滤器
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/taskPage/${objectId}/list/taskList`}>任务</Link>
        </Menu.Item>
      </SubMenu>
    )
  }

  getTaskFilterSearch = () => {
    const { TaskFilterSearch } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._taskPage.taskFilterList,
      count: state._taskPage.taskFilterCount,
      currentPage: state._taskPage.taskFilterCurrentPageNumber,
      searchFormParameters: state._taskPage.taskFilterSearchFormParameters,
      loading: state._taskPage.loading,
      owner: {
        type: '_taskPage',
        id: state._taskPage.id,
        listName: 'taskFilterList',
      }, // this is for model namespace and
    }))(TaskFilterSearch)
  }
  getTaskFilterCreateForm = () => {
    const { TaskFilterCreateForm } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._taskPage.taskFilterList,
      count: state._taskPage.taskFilterCount,
      currentPage: state._taskPage.taskFilterCurrentPageNumber,
      searchFormParameters: state._taskPage.taskFilterSearchFormParameters,
      loading: state._taskPage.loading,
      owner: {
        type: '_taskPage',
        id: state._taskPage.id,
        listName: 'taskFilterList',
      }, // this is for model namespace and
    }))(TaskFilterCreateForm)
  }

  getTaskFilterUpdateForm = () => {
    const { TaskFilterUpdateForm } = GlobalComponents
    return connect(state => ({
      selectedRows: state._taskPage.selectedRows,
      currentUpdateIndex: state._taskPage.currentUpdateIndex,
      owner: {
        type: '_taskPage',
        id: state._taskPage.id,
        listName: 'taskFilterList',
      }, // this is for model namespace and
    }))(TaskFilterUpdateForm)
  }

  getTaskSearch = () => {
    const { TaskSearch } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._taskPage.taskList,
      count: state._taskPage.taskCount,
      currentPage: state._taskPage.taskCurrentPageNumber,
      searchFormParameters: state._taskPage.taskSearchFormParameters,
      loading: state._taskPage.loading,
      owner: {
        type: '_taskPage',
        id: state._taskPage.id,
        listName: 'taskList',
      }, // this is for model namespace and
    }))(TaskSearch)
  }
  getTaskCreateForm = () => {
    const { TaskCreateForm } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._taskPage.taskList,
      count: state._taskPage.taskCount,
      currentPage: state._taskPage.taskCurrentPageNumber,
      searchFormParameters: state._taskPage.taskSearchFormParameters,
      loading: state._taskPage.loading,
      owner: {
        type: '_taskPage',
        id: state._taskPage.id,
        listName: 'taskList',
      }, // this is for model namespace and
    }))(TaskCreateForm)
  }

  getTaskUpdateForm = () => {
    const { TaskUpdateForm } = GlobalComponents
    return connect(state => ({
      selectedRows: state._taskPage.selectedRows,
      currentUpdateIndex: state._taskPage.currentUpdateIndex,
      owner: {
        type: '_taskPage',
        id: state._taskPage.id,
        listName: 'taskList',
      }, // this is for model namespace and
    }))(TaskUpdateForm)
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

    const { TaskPageDashboard } = GlobalComponents
    const { TaskPageEditDetail } = GlobalComponents
    const { TaskPageViewDetail } = GlobalComponents

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
              <h1>任务页面</h1>
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
              <Link to={`/taskPage/${this.props.taskPage.id}/dashboard`}>
                <Icon type="dashboard" />
                <span>仪表板</span>
              </Link>
            </Menu.Item>

            {this.getNavMenuItems(this.props.taskPage.id)}
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
              <Route
                path="/taskPage/:id/dashboard"
                component={TaskPageDashboard}
              />

              <Route
                path="/taskPage/:id/editDetail"
                component={TaskPageEditDetail}
              />
              <Route
                path="/taskPage/:id/viewDetail"
                component={TaskPageViewDetail}
              />

              <Route
                path="/taskPage/:id/list/taskFilterList"
                component={this.getTaskFilterSearch()}
              />
              <Route
                path="/taskPage/:id/list/taskFilterCreateForm"
                component={this.getTaskFilterCreateForm()}
              />
              <Route
                path="/taskPage/:id/list/taskFilterUpdateForm"
                component={this.getTaskFilterUpdateForm()}
              />

              <Route
                path="/taskPage/:id/list/taskList"
                component={this.getTaskSearch()}
              />
              <Route
                path="/taskPage/:id/list/taskCreateForm"
                component={this.getTaskCreateForm()}
              />
              <Route
                path="/taskPage/:id/list/taskUpdateForm"
                component={this.getTaskUpdateForm()}
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
  taskPage: state._taskPage,
  ...state,
}))(TaskPageBizApp)
