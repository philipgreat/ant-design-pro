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
import styles from './ServiceVehicleInspection.app.less'

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

class ServiceVehicleInspectionBizApp extends React.PureComponent {
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
      return ['/serviceVehicleInspection/']
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
            <span>车辆上线检测</span>
          </span>
        }
      >
        <Menu.Item>
          <Link
            to={`/serviceVehicleInspection/${objectId}/list/serviceVehicleRepairingList`}
          >
            维修服务
          </Link>
        </Menu.Item>
      </SubMenu>
    )
  }

  getServiceVehicleRepairingSearch = () => {
    const { ServiceVehicleRepairingSearch } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._serviceVehicleInspection.serviceVehicleRepairingList,
      count: state._serviceVehicleInspection.serviceVehicleRepairingCount,
      currentPage:
        state._serviceVehicleInspection
          .serviceVehicleRepairingCurrentPageNumber,
      searchFormParameters:
        state._serviceVehicleInspection
          .serviceVehicleRepairingSearchFormParameters,
      loading: state._serviceVehicleInspection.loading,
      owner: {
        type: '_serviceVehicleInspection',
        id: state._serviceVehicleInspection.id,
        listName: 'serviceVehicleRepairingList',
      }, // this is for model namespace and
    }))(ServiceVehicleRepairingSearch)
  }
  getServiceVehicleRepairingCreateForm = () => {
    const { ServiceVehicleRepairingCreateForm } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._serviceVehicleInspection.serviceVehicleRepairingList,
      count: state._serviceVehicleInspection.serviceVehicleRepairingCount,
      currentPage:
        state._serviceVehicleInspection
          .serviceVehicleRepairingCurrentPageNumber,
      searchFormParameters:
        state._serviceVehicleInspection
          .serviceVehicleRepairingSearchFormParameters,
      loading: state._serviceVehicleInspection.loading,
      owner: {
        type: '_serviceVehicleInspection',
        id: state._serviceVehicleInspection.id,
        listName: 'serviceVehicleRepairingList',
      }, // this is for model namespace and
    }))(ServiceVehicleRepairingCreateForm)
  }

  getServiceVehicleRepairingUpdateForm = () => {
    const { ServiceVehicleRepairingUpdateForm } = GlobalComponents
    return connect(state => ({
      selectedRows: state._serviceVehicleInspection.selectedRows,
      currentUpdateIndex: state._serviceVehicleInspection.currentUpdateIndex,
      owner: {
        type: '_serviceVehicleInspection',
        id: state._serviceVehicleInspection.id,
        listName: 'serviceVehicleRepairingList',
      }, // this is for model namespace and
    }))(ServiceVehicleRepairingUpdateForm)
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

    const { ServiceVehicleInspectionDashboard } = GlobalComponents
    const { ServiceVehicleInspectionEditDetail } = GlobalComponents
    const { ServiceVehicleInspectionViewDetail } = GlobalComponents

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
              <h1>车辆上线检测</h1>
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
                to={`/serviceVehicleInspection/${
                  this.props.serviceVehicleInspection.id
                }/dashboard`}
              >
                <Icon type="dashboard" />
                <span>仪表板</span>
              </Link>
            </Menu.Item>

            {this.getNavMenuItems(this.props.serviceVehicleInspection.id)}
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
                path="/serviceVehicleInspection/:id/dashboard"
                component={ServiceVehicleInspectionDashboard}
              />

              <Route
                path="/serviceVehicleInspection/:id/editDetail"
                component={ServiceVehicleInspectionEditDetail}
              />
              <Route
                path="/serviceVehicleInspection/:id/viewDetail"
                component={ServiceVehicleInspectionViewDetail}
              />

              <Route
                path="/serviceVehicleInspection/:id/list/serviceVehicleRepairingList"
                component={this.getServiceVehicleRepairingSearch()}
              />
              <Route
                path="/serviceVehicleInspection/:id/list/serviceVehicleRepairingCreateForm"
                component={this.getServiceVehicleRepairingCreateForm()}
              />
              <Route
                path="/serviceVehicleInspection/:id/list/serviceVehicleRepairingUpdateForm"
                component={this.getServiceVehicleRepairingUpdateForm()}
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
  serviceVehicleInspection: state._serviceVehicleInspection,
  ...state,
}))(ServiceVehicleInspectionBizApp)
