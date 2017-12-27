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
import styles from './ThreadHiding.app.less'
import ThreadHidingDashboard from './ThreadHiding.dashboard'
import ThreadHidingEditDetail from './ThreadHiding.editdetail'

import HeaderSearch from '../../components/HeaderSearch'
import NoticeIcon from '../../components/NoticeIcon'
import GlobalFooter from '../../components/GlobalFooter'

import ThreadSearch from '../thread/Thread.search'
import ThreadCreateForm from '../thread/Thread.createform'
import ThreadUpdateForm from '../thread/Thread.updateform'

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

class ThreadHidingBizApp extends React.PureComponent {
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
      return ['/threadHiding/']
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
            <span>线程隐藏</span>
          </span>
        }
      >
        <Menu.Item>
          <Link to={`/threadHiding/${objectId}/list/threadList`}>主贴</Link>
        </Menu.Item>
      </SubMenu>
    )
  }

  getThreadSearch = () => {
    return connect(state => ({
      rule: state.rule,
      data: state._threadHiding.threadList,
      count: state._threadHiding.threadCount,
      currentPage: state._threadHiding.threadCurrentPageNumber,
      searchFormParameters: state._threadHiding.threadSearchFormParameters,
      loading: state._threadHiding.loading,
      owner: { type: '_threadHiding', id: state._threadHiding.id }, // this is for model namespace and
    }))(ThreadSearch)
  }
  getThreadCreateForm = () => {
    return connect(state => ({
      rule: state.rule,
      data: state._threadHiding.threadList,
      count: state._threadHiding.threadCount,
      currentPage: state._threadHiding.threadCurrentPageNumber,
      searchFormParameters: state._threadHiding.threadSearchFormParameters,
      loading: state._threadHiding.loading,
      owner: { type: '_threadHiding', id: state._threadHiding.id }, // this is for model namespace and
    }))(ThreadCreateForm)
  }

  getThreadUpdateForm = () => {
    return connect(state => ({
      selectedRows: state._threadHiding.selectedRows,
      currentUpdateIndex: state._threadHiding.currentUpdateIndex,
      owner: { type: '_threadHiding', id: state._threadHiding.id }, // this is for model namespace and
    }))(ThreadUpdateForm)
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
    // Don't show popup menu when it is been collapsed
    const menuProps = collapsed ? {} : { openKeys: this.state.openKeys }
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
            <Link to="/home">
              {' '}
              <h1>线程隐藏</h1>
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
              <Link
                to={`/threadHiding/${this.props.threadHiding.id}/dashboard`}
              >
                <Icon type="dashboard" />
                <span>仪表板</span>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link
                to={`/threadHiding/${this.props.threadHiding.id}/editDetail`}
              >
                <Icon type="edit" />
                <span>详情编辑</span>
              </Link>
            </Menu.Item>
            {this.getNavMenuItems(this.props.threadHiding.id)}
          </Menu>
        </Sider>
        <Layout>
          <Content style={{ margin: '24px 24px 0', height: '100%' }}>
            <Switch>
              <Route
                path="/threadHiding/:id/dashboard"
                component={ThreadHidingDashboard}
              />
              <Route
                path="/threadHiding/:id/editDetail"
                component={ThreadHidingEditDetail}
              />

              <Route
                path="/threadHiding/:id/list/threadList"
                component={this.getThreadSearch()}
              />
              <Route
                path="/threadHiding/:id/list/threadCreateForm"
                component={this.getThreadCreateForm()}
              />
              <Route
                path="/threadHiding/:id/list/threadUpdateForm"
                component={this.getThreadUpdateForm()}
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
  threadHiding: state._threadHiding,
  ...state,
}))(ThreadHidingBizApp)
