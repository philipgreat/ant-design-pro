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
import styles from './TaskHiding.app.less'

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

class TaskHidingBizApp extends React.PureComponent {
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
      return ['/taskHiding/']
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
            <span>任务屏蔽</span>
          </span>
        }
      >
        <Menu.Item>
          <Link to={`/taskHiding/${objectId}/list/taskList`}>任务</Link>
        </Menu.Item>
      </SubMenu>
    )
  }

  getTaskSearch = () => {
    const { TaskSearch } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._taskHiding.taskList,
      count: state._taskHiding.taskCount,
      currentPage: state._taskHiding.taskCurrentPageNumber,
      searchFormParameters: state._taskHiding.taskSearchFormParameters,
      loading: state._taskHiding.loading,
      owner: {
        type: '_taskHiding',
        id: state._taskHiding.id,
        listName: 'taskList',
      }, // this is for model namespace and
    }))(TaskSearch)
  }
  getTaskCreateForm = () => {
    const { TaskCreateForm } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._taskHiding.taskList,
      count: state._taskHiding.taskCount,
      currentPage: state._taskHiding.taskCurrentPageNumber,
      searchFormParameters: state._taskHiding.taskSearchFormParameters,
      loading: state._taskHiding.loading,
      owner: {
        type: '_taskHiding',
        id: state._taskHiding.id,
        listName: 'taskList',
      }, // this is for model namespace and
    }))(TaskCreateForm)
  }

  getTaskUpdateForm = () => {
    const { TaskUpdateForm } = GlobalComponents
    return connect(state => ({
      selectedRows: state._taskHiding.selectedRows,
      currentUpdateIndex: state._taskHiding.currentUpdateIndex,
      owner: {
        type: '_taskHiding',
        id: state._taskHiding.id,
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

    const { TaskHidingDashboard } = GlobalComponents
    const { TaskHidingEditDetail } = GlobalComponents
    const { TaskHidingViewDetail } = GlobalComponents

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
              <h1>任务屏蔽</h1>
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
              <Link to={`/taskHiding/${this.props.taskHiding.id}/dashboard`}>
                <Icon type="dashboard" />
                <span>仪表板</span>
              </Link>
            </Menu.Item>

            {this.getNavMenuItems(this.props.taskHiding.id)}
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
                path="/taskHiding/:id/dashboard"
                component={TaskHidingDashboard}
              />

              <Route
                path="/taskHiding/:id/editDetail"
                component={TaskHidingEditDetail}
              />
              <Route
                path="/taskHiding/:id/viewDetail"
                component={TaskHidingViewDetail}
              />

              <Route
                path="/taskHiding/:id/list/taskList"
                component={this.getTaskSearch()}
              />
              <Route
                path="/taskHiding/:id/list/taskCreateForm"
                component={this.getTaskCreateForm()}
              />
              <Route
                path="/taskHiding/:id/list/taskUpdateForm"
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
  taskHiding: state._taskHiding,
  ...state,
}))(TaskHidingBizApp)
