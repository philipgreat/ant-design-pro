import React from 'react'
import PropTypes from 'prop-types'
import {
  Layout,
  Menu,
  Icon,
  Avatar,
  Dropdown,
  Tag,
  message,
  Spin,
  Breadcrumb,
  AutoComplete,
  Input,
} from 'antd'
import DocumentTitle from 'react-document-title'
import { connect } from 'dva'
import { Link, Route, Redirect, Switch } from 'dva/router'
import moment from 'moment'
import groupBy from 'lodash/groupBy'
import { ContainerQuery } from 'react-container-query'
import classNames from 'classnames'
import styles from './UserApp.app.less'

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

const menuData = {
  menuName: '用户应用程序',
  menuFor: 'userApp',
  subItems: [{ name: 'objectAccessList', displayName: '对象访问' }],
}

class UserAppBizApp extends React.PureComponent {
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
      return ['/userApp/']
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
    const { menuData, targetApp } = this.props.breadcrumb

    const { appId } = targetApp

    return (
      <SubMenu
        key="firstOne"
        title={
          <span>
            <Icon type="profile" />
            <span>{menuData.menuName}</span>
          </span>
        }
      >
        {menuData.subItems.map(item => (
          <Menu.Item key={item.name}>
            <Link to={`/${menuData.menuFor}/${appId}/list/${item.name}`}>
              {item.displayName}
            </Link>
          </Menu.Item>
        ))}
      </SubMenu>
    )
  }

  getNavMenuItems2 = objectId => {
    const { menuData, targetApp } = this.props.breadcrumb

    return (
      <SubMenu
        key="firstOne"
        title={
          <span>
            <Icon type="profile" />
            <span>{menuData.menuName}</span>
          </span>
        }
      >
        {menuData.subItems.map(item => (
          <Menu.Item>
            <Link to={`/${menuData.menuFor}/${objectId}/list/${item.name}`}>
              {item.displayName}
            </Link>
          </Menu.Item>
        ))}
      </SubMenu>
    )
  }

  getObjectAccessSearch = () => {
    const { ObjectAccessSearch } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._userApp.objectAccessList,
      count: state._userApp.objectAccessCount,
      currentPage: state._userApp.objectAccessCurrentPageNumber,
      searchFormParameters: state._userApp.objectAccessSearchFormParameters,
      loading: state._userApp.loading,
      owner: {
        type: '_userApp',
        id: state._userApp.id,
        listName: 'objectAccessList',
        ref: state._userApp,
        listDisplayName: '对象访问列表',
      }, // this is for model namespace and
    }))(ObjectAccessSearch)
  }
  getObjectAccessCreateForm = () => {
    const { ObjectAccessCreateForm } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._userApp.objectAccessList,
      count: state._userApp.objectAccessCount,
      currentPage: state._userApp.objectAccessCurrentPageNumber,
      searchFormParameters: state._userApp.objectAccessSearchFormParameters,
      loading: state._userApp.loading,
      owner: {
        type: '_userApp',
        id: state._userApp.id,
        listName: 'objectAccessList',
        ref: state._userApp,
        listDisplayName: '对象访问列表',
      }, // this is for model namespace and
    }))(ObjectAccessCreateForm)
  }

  getObjectAccessUpdateForm = () => {
    const { ObjectAccessUpdateForm } = GlobalComponents
    return connect(state => ({
      selectedRows: state._userApp.selectedRows,
      currentUpdateIndex: state._userApp.currentUpdateIndex,
      owner: {
        type: '_userApp',
        id: state._userApp.id,
        listName: 'objectAccessList',
        ref: state._userApp,
        listDisplayName: '对象访问列表',
      }, // this is for model namespace and
    }))(ObjectAccessUpdateForm)
  }

  getPageTitle = () => {
    // const { location } = this.props
    // const { pathname } = location
    const title = '代审车服务平台'
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
    const { breadcrumb } = this.props
    const { UserAppDashboard } = GlobalComponents
    const { UserAppEditDetail } = GlobalComponents
    const { UserAppViewDetail } = GlobalComponents

    const currentBreadcrumb = breadcrumb[breadcrumb.currentApp]

    // Don't show popup menu when it is been collapsed
    const menuProps = collapsed
      ? {}
      : {
          openKeys: this.state.openKeys,
        }
    const layout = (
      <Layout>
        <Header>
          <div className={styles.left}>
            <img
              src="./scm.svg"
              alt="logo"
              onClick={this.toggle}
              className={styles.logo}
            />
            {currentBreadcrumb.map(item => {
              return (
                <Link
                  key={item.link}
                  to={`${item.link}`}
                  className={styles.breadcrumbLink}
                >
                  {' '}
                  &gt;{item.name}
                </Link>
              )
            })}
          </div>
          <div className={styles.right}>
            <AutoComplete
              className="certain-category-search"
              placeholder="请输入名称"
              optionLabelProp="value"
            >
              <Input
                suffix={
                  <Icon type="search" className="certain-category-icon" />
                }
              />
            </AutoComplete>{' '}
          </div>
        </Header>
        <Layout>
          <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            breakpoint="md"
            onCollapse={() => this.onCollapse(collapsed)}
            collapsedWidth={56}
            className={styles.sider}
          >
            <Menu
              theme="dark"
              mode="inline"
              onOpenChange={this.handleOpenChange}
              defaultOpenKeys={['firstOne']}
              style={{ margin: '16px 0', width: '100%' }}
            >
              <Menu.Item key="dashboard">
                <Link to={`/userApp/${this.props.userApp.id}/dashboard`}>
                  <Icon type="dashboard" />
                  <span>仪表板</span>
                </Link>
              </Menu.Item>

              {this.getNavMenuItems(this.props.userApp.id)}
              <Menu.Item key="homepage">
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
                  path="/userApp/:id/dashboard"
                  component={UserAppDashboard}
                />

                <Route
                  path="/userApp/:id/editDetail"
                  component={UserAppEditDetail}
                />
                <Route
                  path="/userApp/:id/viewDetail"
                  component={UserAppViewDetail}
                />

                <Route
                  path="/userApp/:id/list/objectAccessList"
                  component={this.getObjectAccessSearch()}
                />
                <Route
                  path="/userApp/:id/list/objectAccessCreateForm"
                  component={this.getObjectAccessCreateForm()}
                />
                <Route
                  path="/userApp/:id/list/objectAccessUpdateForm"
                  component={this.getObjectAccessUpdateForm()}
                />
              </Switch>
            </Content>
          </Layout>
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
  userApp: state._userApp,
  ...state,
}))(UserAppBizApp)
