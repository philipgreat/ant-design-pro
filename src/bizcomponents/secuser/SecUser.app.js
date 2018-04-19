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
import styles from './SecUser.app.less'

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

class SecUserBizApp extends React.PureComponent {
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
      return ['/secUser/']
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
            <span>SEC的用户</span>
          </span>
        }
      >
        <Menu.Item>
          <Link to={`/secUser/${objectId}/list/userAppList`}>用户应用程序</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/secUser/${objectId}/list/loginHistoryList`}>
            登录历史
          </Link>
        </Menu.Item>
      </SubMenu>
    )
  }

  getUserAppSearch = () => {
    const { UserAppSearch } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._secUser.userAppList,
      count: state._secUser.userAppCount,
      currentPage: state._secUser.userAppCurrentPageNumber,
      searchFormParameters: state._secUser.userAppSearchFormParameters,
      loading: state._secUser.loading,
      owner: {
        type: '_secUser',
        id: state._secUser.id,
        listName: 'userAppList',
      }, // this is for model namespace and
    }))(UserAppSearch)
  }
  getUserAppCreateForm = () => {
    const { UserAppCreateForm } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._secUser.userAppList,
      count: state._secUser.userAppCount,
      currentPage: state._secUser.userAppCurrentPageNumber,
      searchFormParameters: state._secUser.userAppSearchFormParameters,
      loading: state._secUser.loading,
      owner: {
        type: '_secUser',
        id: state._secUser.id,
        listName: 'userAppList',
      }, // this is for model namespace and
    }))(UserAppCreateForm)
  }

  getUserAppUpdateForm = () => {
    const { UserAppUpdateForm } = GlobalComponents
    return connect(state => ({
      selectedRows: state._secUser.selectedRows,
      currentUpdateIndex: state._secUser.currentUpdateIndex,
      owner: {
        type: '_secUser',
        id: state._secUser.id,
        listName: 'userAppList',
      }, // this is for model namespace and
    }))(UserAppUpdateForm)
  }

  getLoginHistorySearch = () => {
    const { LoginHistorySearch } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._secUser.loginHistoryList,
      count: state._secUser.loginHistoryCount,
      currentPage: state._secUser.loginHistoryCurrentPageNumber,
      searchFormParameters: state._secUser.loginHistorySearchFormParameters,
      loading: state._secUser.loading,
      owner: {
        type: '_secUser',
        id: state._secUser.id,
        listName: 'loginHistoryList',
      }, // this is for model namespace and
    }))(LoginHistorySearch)
  }
  getLoginHistoryCreateForm = () => {
    const { LoginHistoryCreateForm } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._secUser.loginHistoryList,
      count: state._secUser.loginHistoryCount,
      currentPage: state._secUser.loginHistoryCurrentPageNumber,
      searchFormParameters: state._secUser.loginHistorySearchFormParameters,
      loading: state._secUser.loading,
      owner: {
        type: '_secUser',
        id: state._secUser.id,
        listName: 'loginHistoryList',
      }, // this is for model namespace and
    }))(LoginHistoryCreateForm)
  }

  getLoginHistoryUpdateForm = () => {
    const { LoginHistoryUpdateForm } = GlobalComponents
    return connect(state => ({
      selectedRows: state._secUser.selectedRows,
      currentUpdateIndex: state._secUser.currentUpdateIndex,
      owner: {
        type: '_secUser',
        id: state._secUser.id,
        listName: 'loginHistoryList',
      }, // this is for model namespace and
    }))(LoginHistoryUpdateForm)
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

    const { SecUserDashboard } = GlobalComponents
    const { SecUserEditDetail } = GlobalComponents
    const { SecUserViewDetail } = GlobalComponents

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
              <h1>SEC的用户</h1>
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
              <Link to={`/secUser/${this.props.secUser.id}/dashboard`}>
                <Icon type="dashboard" />
                <span>仪表板</span>
              </Link>
            </Menu.Item>

            {this.getNavMenuItems(this.props.secUser.id)}
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
                path="/secUser/:id/dashboard"
                component={SecUserDashboard}
              />

              <Route
                path="/secUser/:id/editDetail"
                component={SecUserEditDetail}
              />
              <Route
                path="/secUser/:id/viewDetail"
                component={SecUserViewDetail}
              />

              <Route
                path="/secUser/:id/list/userAppList"
                component={this.getUserAppSearch()}
              />
              <Route
                path="/secUser/:id/list/userAppCreateForm"
                component={this.getUserAppCreateForm()}
              />
              <Route
                path="/secUser/:id/list/userAppUpdateForm"
                component={this.getUserAppUpdateForm()}
              />

              <Route
                path="/secUser/:id/list/loginHistoryList"
                component={this.getLoginHistorySearch()}
              />
              <Route
                path="/secUser/:id/list/loginHistoryCreateForm"
                component={this.getLoginHistoryCreateForm()}
              />
              <Route
                path="/secUser/:id/list/loginHistoryUpdateForm"
                component={this.getLoginHistoryUpdateForm()}
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
  secUser: state._secUser,
  ...state,
}))(SecUserBizApp)
