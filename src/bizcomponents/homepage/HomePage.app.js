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
import styles from './HomePage.app.less'

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

class HomePageBizApp extends React.PureComponent {
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
      return ['/homePage/']
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
            <span>主页</span>
          </span>
        }
      >
        <Menu.Item>
          <Link to={`/homePage/${objectId}/list/slideList`}>幻灯片</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/homePage/${objectId}/list/encyclopediaItemList`}>
            百科全书条目
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/homePage/${objectId}/list/taskFilterList`}>
            任务过滤器
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/homePage/${objectId}/list/taskList`}>任务</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/homePage/${objectId}/list/threadList`}>主贴</Link>
        </Menu.Item>
      </SubMenu>
    )
  }

  getSlideSearch = () => {
    const { SlideSearch } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._homePage.slideList,
      count: state._homePage.slideCount,
      currentPage: state._homePage.slideCurrentPageNumber,
      searchFormParameters: state._homePage.slideSearchFormParameters,
      loading: state._homePage.loading,
      owner: {
        type: '_homePage',
        id: state._homePage.id,
        listName: 'slideList',
      }, // this is for model namespace and
    }))(SlideSearch)
  }
  getSlideCreateForm = () => {
    const { SlideCreateForm } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._homePage.slideList,
      count: state._homePage.slideCount,
      currentPage: state._homePage.slideCurrentPageNumber,
      searchFormParameters: state._homePage.slideSearchFormParameters,
      loading: state._homePage.loading,
      owner: {
        type: '_homePage',
        id: state._homePage.id,
        listName: 'slideList',
      }, // this is for model namespace and
    }))(SlideCreateForm)
  }

  getSlideUpdateForm = () => {
    const { SlideUpdateForm } = GlobalComponents
    return connect(state => ({
      selectedRows: state._homePage.selectedRows,
      currentUpdateIndex: state._homePage.currentUpdateIndex,
      owner: {
        type: '_homePage',
        id: state._homePage.id,
        listName: 'slideList',
      }, // this is for model namespace and
    }))(SlideUpdateForm)
  }

  getEncyclopediaItemSearch = () => {
    const { EncyclopediaItemSearch } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._homePage.encyclopediaItemList,
      count: state._homePage.encyclopediaItemCount,
      currentPage: state._homePage.encyclopediaItemCurrentPageNumber,
      searchFormParameters:
        state._homePage.encyclopediaItemSearchFormParameters,
      loading: state._homePage.loading,
      owner: {
        type: '_homePage',
        id: state._homePage.id,
        listName: 'encyclopediaItemList',
      }, // this is for model namespace and
    }))(EncyclopediaItemSearch)
  }
  getEncyclopediaItemCreateForm = () => {
    const { EncyclopediaItemCreateForm } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._homePage.encyclopediaItemList,
      count: state._homePage.encyclopediaItemCount,
      currentPage: state._homePage.encyclopediaItemCurrentPageNumber,
      searchFormParameters:
        state._homePage.encyclopediaItemSearchFormParameters,
      loading: state._homePage.loading,
      owner: {
        type: '_homePage',
        id: state._homePage.id,
        listName: 'encyclopediaItemList',
      }, // this is for model namespace and
    }))(EncyclopediaItemCreateForm)
  }

  getEncyclopediaItemUpdateForm = () => {
    const { EncyclopediaItemUpdateForm } = GlobalComponents
    return connect(state => ({
      selectedRows: state._homePage.selectedRows,
      currentUpdateIndex: state._homePage.currentUpdateIndex,
      owner: {
        type: '_homePage',
        id: state._homePage.id,
        listName: 'encyclopediaItemList',
      }, // this is for model namespace and
    }))(EncyclopediaItemUpdateForm)
  }

  getTaskFilterSearch = () => {
    const { TaskFilterSearch } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._homePage.taskFilterList,
      count: state._homePage.taskFilterCount,
      currentPage: state._homePage.taskFilterCurrentPageNumber,
      searchFormParameters: state._homePage.taskFilterSearchFormParameters,
      loading: state._homePage.loading,
      owner: {
        type: '_homePage',
        id: state._homePage.id,
        listName: 'taskFilterList',
      }, // this is for model namespace and
    }))(TaskFilterSearch)
  }
  getTaskFilterCreateForm = () => {
    const { TaskFilterCreateForm } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._homePage.taskFilterList,
      count: state._homePage.taskFilterCount,
      currentPage: state._homePage.taskFilterCurrentPageNumber,
      searchFormParameters: state._homePage.taskFilterSearchFormParameters,
      loading: state._homePage.loading,
      owner: {
        type: '_homePage',
        id: state._homePage.id,
        listName: 'taskFilterList',
      }, // this is for model namespace and
    }))(TaskFilterCreateForm)
  }

  getTaskFilterUpdateForm = () => {
    const { TaskFilterUpdateForm } = GlobalComponents
    return connect(state => ({
      selectedRows: state._homePage.selectedRows,
      currentUpdateIndex: state._homePage.currentUpdateIndex,
      owner: {
        type: '_homePage',
        id: state._homePage.id,
        listName: 'taskFilterList',
      }, // this is for model namespace and
    }))(TaskFilterUpdateForm)
  }

  getTaskSearch = () => {
    const { TaskSearch } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._homePage.taskList,
      count: state._homePage.taskCount,
      currentPage: state._homePage.taskCurrentPageNumber,
      searchFormParameters: state._homePage.taskSearchFormParameters,
      loading: state._homePage.loading,
      owner: {
        type: '_homePage',
        id: state._homePage.id,
        listName: 'taskList',
      }, // this is for model namespace and
    }))(TaskSearch)
  }
  getTaskCreateForm = () => {
    const { TaskCreateForm } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._homePage.taskList,
      count: state._homePage.taskCount,
      currentPage: state._homePage.taskCurrentPageNumber,
      searchFormParameters: state._homePage.taskSearchFormParameters,
      loading: state._homePage.loading,
      owner: {
        type: '_homePage',
        id: state._homePage.id,
        listName: 'taskList',
      }, // this is for model namespace and
    }))(TaskCreateForm)
  }

  getTaskUpdateForm = () => {
    const { TaskUpdateForm } = GlobalComponents
    return connect(state => ({
      selectedRows: state._homePage.selectedRows,
      currentUpdateIndex: state._homePage.currentUpdateIndex,
      owner: {
        type: '_homePage',
        id: state._homePage.id,
        listName: 'taskList',
      }, // this is for model namespace and
    }))(TaskUpdateForm)
  }

  getThreadSearch = () => {
    const { ThreadSearch } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._homePage.threadList,
      count: state._homePage.threadCount,
      currentPage: state._homePage.threadCurrentPageNumber,
      searchFormParameters: state._homePage.threadSearchFormParameters,
      loading: state._homePage.loading,
      owner: {
        type: '_homePage',
        id: state._homePage.id,
        listName: 'threadList',
      }, // this is for model namespace and
    }))(ThreadSearch)
  }
  getThreadCreateForm = () => {
    const { ThreadCreateForm } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._homePage.threadList,
      count: state._homePage.threadCount,
      currentPage: state._homePage.threadCurrentPageNumber,
      searchFormParameters: state._homePage.threadSearchFormParameters,
      loading: state._homePage.loading,
      owner: {
        type: '_homePage',
        id: state._homePage.id,
        listName: 'threadList',
      }, // this is for model namespace and
    }))(ThreadCreateForm)
  }

  getThreadUpdateForm = () => {
    const { ThreadUpdateForm } = GlobalComponents
    return connect(state => ({
      selectedRows: state._homePage.selectedRows,
      currentUpdateIndex: state._homePage.currentUpdateIndex,
      owner: {
        type: '_homePage',
        id: state._homePage.id,
        listName: 'threadList',
      }, // this is for model namespace and
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

    const { HomePageDashboard } = GlobalComponents
    const { HomePageEditDetail } = GlobalComponents
    const { HomePageViewDetail } = GlobalComponents

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
              <h1>主页</h1>
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
              <Link to={`/homePage/${this.props.homePage.id}/dashboard`}>
                <Icon type="dashboard" />
                <span>仪表板</span>
              </Link>
            </Menu.Item>

            {this.getNavMenuItems(this.props.homePage.id)}
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
                path="/homePage/:id/dashboard"
                component={HomePageDashboard}
              />

              <Route
                path="/homePage/:id/editDetail"
                component={HomePageEditDetail}
              />
              <Route
                path="/homePage/:id/viewDetail"
                component={HomePageViewDetail}
              />

              <Route
                path="/homePage/:id/list/slideList"
                component={this.getSlideSearch()}
              />
              <Route
                path="/homePage/:id/list/slideCreateForm"
                component={this.getSlideCreateForm()}
              />
              <Route
                path="/homePage/:id/list/slideUpdateForm"
                component={this.getSlideUpdateForm()}
              />

              <Route
                path="/homePage/:id/list/encyclopediaItemList"
                component={this.getEncyclopediaItemSearch()}
              />
              <Route
                path="/homePage/:id/list/encyclopediaItemCreateForm"
                component={this.getEncyclopediaItemCreateForm()}
              />
              <Route
                path="/homePage/:id/list/encyclopediaItemUpdateForm"
                component={this.getEncyclopediaItemUpdateForm()}
              />

              <Route
                path="/homePage/:id/list/taskFilterList"
                component={this.getTaskFilterSearch()}
              />
              <Route
                path="/homePage/:id/list/taskFilterCreateForm"
                component={this.getTaskFilterCreateForm()}
              />
              <Route
                path="/homePage/:id/list/taskFilterUpdateForm"
                component={this.getTaskFilterUpdateForm()}
              />

              <Route
                path="/homePage/:id/list/taskList"
                component={this.getTaskSearch()}
              />
              <Route
                path="/homePage/:id/list/taskCreateForm"
                component={this.getTaskCreateForm()}
              />
              <Route
                path="/homePage/:id/list/taskUpdateForm"
                component={this.getTaskUpdateForm()}
              />

              <Route
                path="/homePage/:id/list/threadList"
                component={this.getThreadSearch()}
              />
              <Route
                path="/homePage/:id/list/threadCreateForm"
                component={this.getThreadCreateForm()}
              />
              <Route
                path="/homePage/:id/list/threadUpdateForm"
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
  homePage: state._homePage,
  ...state,
}))(HomePageBizApp)
