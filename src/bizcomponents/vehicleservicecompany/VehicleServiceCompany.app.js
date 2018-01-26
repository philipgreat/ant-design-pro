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
import styles from './VehicleServiceCompany.app.less'

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

class VehicleServiceCompanyBizApp extends React.PureComponent {
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
      return ['/vehicleServiceCompany/']
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
            <span>商户管理</span>
          </span>
        }
      >
        <Menu.Item>
          <Link
            to={`/vehicleServiceCompany/${objectId}/list/vehicleServiceCompanyBusinessScopeList`}
          >
            服务提供商服务范围管理
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link
            to={`/vehicleServiceCompany/${objectId}/list/vehicleServiceCompanyDispatcherList`}
          >
            派单管理
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link
            to={`/vehicleServiceCompany/${objectId}/list/vehicleServiceCompanyEmployeeList`}
          >
            服务提供商员工管理
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link
            to={`/vehicleServiceCompany/${objectId}/list/serviceVehicleMovementC2mList`}
          >
            收车服务
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link
            to={`/vehicleServiceCompany/${objectId}/list/serviceVehicleMovementM2cList`}
          >
            还车服务
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link
            to={`/vehicleServiceCompany/${objectId}/list/serviceFileMovementC2mList`}
          >
            收件服务
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link
            to={`/vehicleServiceCompany/${objectId}/list/serviceFileMovementM2cList`}
          >
            还件服务
          </Link>
        </Menu.Item>
      </SubMenu>
    )
  }

  getVehicleServiceCompanyBusinessScopeSearch = () => {
    const { VehicleServiceCompanyBusinessScopeSearch } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.vehicleServiceCompanyBusinessScopeList,
      count:
        state._vehicleServiceCompany.vehicleServiceCompanyBusinessScopeCount,
      currentPage:
        state._vehicleServiceCompany
          .vehicleServiceCompanyBusinessScopeCurrentPageNumber,
      searchFormParameters:
        state._vehicleServiceCompany
          .vehicleServiceCompanyBusinessScopeSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'vehicleServiceCompanyBusinessScopeList',
      }, // this is for model namespace and
    }))(VehicleServiceCompanyBusinessScopeSearch)
  }
  getVehicleServiceCompanyBusinessScopeCreateForm = () => {
    const { VehicleServiceCompanyBusinessScopeCreateForm } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.vehicleServiceCompanyBusinessScopeList,
      count:
        state._vehicleServiceCompany.vehicleServiceCompanyBusinessScopeCount,
      currentPage:
        state._vehicleServiceCompany
          .vehicleServiceCompanyBusinessScopeCurrentPageNumber,
      searchFormParameters:
        state._vehicleServiceCompany
          .vehicleServiceCompanyBusinessScopeSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'vehicleServiceCompanyBusinessScopeList',
      }, // this is for model namespace and
    }))(VehicleServiceCompanyBusinessScopeCreateForm)
  }

  getVehicleServiceCompanyBusinessScopeUpdateForm = () => {
    const { VehicleServiceCompanyBusinessScopeUpdateForm } = GlobalComponents
    return connect(state => ({
      selectedRows: state._vehicleServiceCompany.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompany.currentUpdateIndex,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'vehicleServiceCompanyBusinessScopeList',
      }, // this is for model namespace and
    }))(VehicleServiceCompanyBusinessScopeUpdateForm)
  }

  getVehicleServiceCompanyDispatcherSearch = () => {
    const { VehicleServiceCompanyDispatcherSearch } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.vehicleServiceCompanyDispatcherList,
      count: state._vehicleServiceCompany.vehicleServiceCompanyDispatcherCount,
      currentPage:
        state._vehicleServiceCompany
          .vehicleServiceCompanyDispatcherCurrentPageNumber,
      searchFormParameters:
        state._vehicleServiceCompany
          .vehicleServiceCompanyDispatcherSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'vehicleServiceCompanyDispatcherList',
      }, // this is for model namespace and
    }))(VehicleServiceCompanyDispatcherSearch)
  }
  getVehicleServiceCompanyDispatcherCreateForm = () => {
    const { VehicleServiceCompanyDispatcherCreateForm } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.vehicleServiceCompanyDispatcherList,
      count: state._vehicleServiceCompany.vehicleServiceCompanyDispatcherCount,
      currentPage:
        state._vehicleServiceCompany
          .vehicleServiceCompanyDispatcherCurrentPageNumber,
      searchFormParameters:
        state._vehicleServiceCompany
          .vehicleServiceCompanyDispatcherSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'vehicleServiceCompanyDispatcherList',
      }, // this is for model namespace and
    }))(VehicleServiceCompanyDispatcherCreateForm)
  }

  getVehicleServiceCompanyDispatcherUpdateForm = () => {
    const { VehicleServiceCompanyDispatcherUpdateForm } = GlobalComponents
    return connect(state => ({
      selectedRows: state._vehicleServiceCompany.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompany.currentUpdateIndex,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'vehicleServiceCompanyDispatcherList',
      }, // this is for model namespace and
    }))(VehicleServiceCompanyDispatcherUpdateForm)
  }

  getVehicleServiceCompanyEmployeeSearch = () => {
    const { VehicleServiceCompanyEmployeeSearch } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.vehicleServiceCompanyEmployeeList,
      count: state._vehicleServiceCompany.vehicleServiceCompanyEmployeeCount,
      currentPage:
        state._vehicleServiceCompany
          .vehicleServiceCompanyEmployeeCurrentPageNumber,
      searchFormParameters:
        state._vehicleServiceCompany
          .vehicleServiceCompanyEmployeeSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'vehicleServiceCompanyEmployeeList',
      }, // this is for model namespace and
    }))(VehicleServiceCompanyEmployeeSearch)
  }
  getVehicleServiceCompanyEmployeeCreateForm = () => {
    const { VehicleServiceCompanyEmployeeCreateForm } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.vehicleServiceCompanyEmployeeList,
      count: state._vehicleServiceCompany.vehicleServiceCompanyEmployeeCount,
      currentPage:
        state._vehicleServiceCompany
          .vehicleServiceCompanyEmployeeCurrentPageNumber,
      searchFormParameters:
        state._vehicleServiceCompany
          .vehicleServiceCompanyEmployeeSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'vehicleServiceCompanyEmployeeList',
      }, // this is for model namespace and
    }))(VehicleServiceCompanyEmployeeCreateForm)
  }

  getVehicleServiceCompanyEmployeeUpdateForm = () => {
    const { VehicleServiceCompanyEmployeeUpdateForm } = GlobalComponents
    return connect(state => ({
      selectedRows: state._vehicleServiceCompany.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompany.currentUpdateIndex,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'vehicleServiceCompanyEmployeeList',
      }, // this is for model namespace and
    }))(VehicleServiceCompanyEmployeeUpdateForm)
  }

  getServiceVehicleMovementC2mSearch = () => {
    const { ServiceVehicleMovementC2mSearch } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.serviceVehicleMovementC2mList,
      count: state._vehicleServiceCompany.serviceVehicleMovementC2mCount,
      currentPage:
        state._vehicleServiceCompany.serviceVehicleMovementC2mCurrentPageNumber,
      searchFormParameters:
        state._vehicleServiceCompany
          .serviceVehicleMovementC2mSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'serviceVehicleMovementC2mList',
      }, // this is for model namespace and
    }))(ServiceVehicleMovementC2mSearch)
  }
  getServiceVehicleMovementC2mCreateForm = () => {
    const { ServiceVehicleMovementC2mCreateForm } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.serviceVehicleMovementC2mList,
      count: state._vehicleServiceCompany.serviceVehicleMovementC2mCount,
      currentPage:
        state._vehicleServiceCompany.serviceVehicleMovementC2mCurrentPageNumber,
      searchFormParameters:
        state._vehicleServiceCompany
          .serviceVehicleMovementC2mSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'serviceVehicleMovementC2mList',
      }, // this is for model namespace and
    }))(ServiceVehicleMovementC2mCreateForm)
  }

  getServiceVehicleMovementC2mUpdateForm = () => {
    const { ServiceVehicleMovementC2mUpdateForm } = GlobalComponents
    return connect(state => ({
      selectedRows: state._vehicleServiceCompany.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompany.currentUpdateIndex,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'serviceVehicleMovementC2mList',
      }, // this is for model namespace and
    }))(ServiceVehicleMovementC2mUpdateForm)
  }

  getServiceVehicleMovementM2cSearch = () => {
    const { ServiceVehicleMovementM2cSearch } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.serviceVehicleMovementM2cList,
      count: state._vehicleServiceCompany.serviceVehicleMovementM2cCount,
      currentPage:
        state._vehicleServiceCompany.serviceVehicleMovementM2cCurrentPageNumber,
      searchFormParameters:
        state._vehicleServiceCompany
          .serviceVehicleMovementM2cSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'serviceVehicleMovementM2cList',
      }, // this is for model namespace and
    }))(ServiceVehicleMovementM2cSearch)
  }
  getServiceVehicleMovementM2cCreateForm = () => {
    const { ServiceVehicleMovementM2cCreateForm } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.serviceVehicleMovementM2cList,
      count: state._vehicleServiceCompany.serviceVehicleMovementM2cCount,
      currentPage:
        state._vehicleServiceCompany.serviceVehicleMovementM2cCurrentPageNumber,
      searchFormParameters:
        state._vehicleServiceCompany
          .serviceVehicleMovementM2cSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'serviceVehicleMovementM2cList',
      }, // this is for model namespace and
    }))(ServiceVehicleMovementM2cCreateForm)
  }

  getServiceVehicleMovementM2cUpdateForm = () => {
    const { ServiceVehicleMovementM2cUpdateForm } = GlobalComponents
    return connect(state => ({
      selectedRows: state._vehicleServiceCompany.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompany.currentUpdateIndex,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'serviceVehicleMovementM2cList',
      }, // this is for model namespace and
    }))(ServiceVehicleMovementM2cUpdateForm)
  }

  getServiceFileMovementC2mSearch = () => {
    const { ServiceFileMovementC2mSearch } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.serviceFileMovementC2mList,
      count: state._vehicleServiceCompany.serviceFileMovementC2mCount,
      currentPage:
        state._vehicleServiceCompany.serviceFileMovementC2mCurrentPageNumber,
      searchFormParameters:
        state._vehicleServiceCompany.serviceFileMovementC2mSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'serviceFileMovementC2mList',
      }, // this is for model namespace and
    }))(ServiceFileMovementC2mSearch)
  }
  getServiceFileMovementC2mCreateForm = () => {
    const { ServiceFileMovementC2mCreateForm } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.serviceFileMovementC2mList,
      count: state._vehicleServiceCompany.serviceFileMovementC2mCount,
      currentPage:
        state._vehicleServiceCompany.serviceFileMovementC2mCurrentPageNumber,
      searchFormParameters:
        state._vehicleServiceCompany.serviceFileMovementC2mSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'serviceFileMovementC2mList',
      }, // this is for model namespace and
    }))(ServiceFileMovementC2mCreateForm)
  }

  getServiceFileMovementC2mUpdateForm = () => {
    const { ServiceFileMovementC2mUpdateForm } = GlobalComponents
    return connect(state => ({
      selectedRows: state._vehicleServiceCompany.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompany.currentUpdateIndex,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'serviceFileMovementC2mList',
      }, // this is for model namespace and
    }))(ServiceFileMovementC2mUpdateForm)
  }

  getServiceFileMovementM2cSearch = () => {
    const { ServiceFileMovementM2cSearch } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.serviceFileMovementM2cList,
      count: state._vehicleServiceCompany.serviceFileMovementM2cCount,
      currentPage:
        state._vehicleServiceCompany.serviceFileMovementM2cCurrentPageNumber,
      searchFormParameters:
        state._vehicleServiceCompany.serviceFileMovementM2cSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'serviceFileMovementM2cList',
      }, // this is for model namespace and
    }))(ServiceFileMovementM2cSearch)
  }
  getServiceFileMovementM2cCreateForm = () => {
    const { ServiceFileMovementM2cCreateForm } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.serviceFileMovementM2cList,
      count: state._vehicleServiceCompany.serviceFileMovementM2cCount,
      currentPage:
        state._vehicleServiceCompany.serviceFileMovementM2cCurrentPageNumber,
      searchFormParameters:
        state._vehicleServiceCompany.serviceFileMovementM2cSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'serviceFileMovementM2cList',
      }, // this is for model namespace and
    }))(ServiceFileMovementM2cCreateForm)
  }

  getServiceFileMovementM2cUpdateForm = () => {
    const { ServiceFileMovementM2cUpdateForm } = GlobalComponents
    return connect(state => ({
      selectedRows: state._vehicleServiceCompany.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompany.currentUpdateIndex,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'serviceFileMovementM2cList',
      }, // this is for model namespace and
    }))(ServiceFileMovementM2cUpdateForm)
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

    const { VehicleServiceCompanyDashboard } = GlobalComponents
    const { VehicleServiceCompanyEditDetail } = GlobalComponents
    const { VehicleServiceCompanyViewDetail } = GlobalComponents

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
              <h1>商户管理</h1>
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
                to={`/vehicleServiceCompany/${
                  this.props.vehicleServiceCompany.id
                }/dashboard`}
              >
                <Icon type="dashboard" />
                <span>仪表板</span>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link
                to={`/vehicleServiceCompany/${
                  this.props.vehicleServiceCompany.id
                }/editDetail`}
              >
                <Icon type="edit" />
                <span>详情编辑</span>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link
                to={`/vehicleServiceCompany/${
                  this.props.vehicleServiceCompany.id
                }/viewDetail`}
              >
                <Icon type="eye-o" />
                <span>详情查看</span>
              </Link>
            </Menu.Item>

            {this.getNavMenuItems(this.props.vehicleServiceCompany.id)}
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
                path="/vehicleServiceCompany/:id/dashboard"
                component={VehicleServiceCompanyDashboard}
              />
              <Route
                path="/vehicleServiceCompany/:id/editDetail"
                component={VehicleServiceCompanyEditDetail}
              />
              <Route
                path="/vehicleServiceCompany/:id/viewDetail"
                component={VehicleServiceCompanyViewDetail}
              />

              <Route
                path="/vehicleServiceCompany/:id/list/vehicleServiceCompanyBusinessScopeList"
                component={this.getVehicleServiceCompanyBusinessScopeSearch()}
              />
              <Route
                path="/vehicleServiceCompany/:id/list/vehicleServiceCompanyBusinessScopeCreateForm"
                component={this.getVehicleServiceCompanyBusinessScopeCreateForm()}
              />
              <Route
                path="/vehicleServiceCompany/:id/list/vehicleServiceCompanyBusinessScopeUpdateForm"
                component={this.getVehicleServiceCompanyBusinessScopeUpdateForm()}
              />

              <Route
                path="/vehicleServiceCompany/:id/list/vehicleServiceCompanyDispatcherList"
                component={this.getVehicleServiceCompanyDispatcherSearch()}
              />
              <Route
                path="/vehicleServiceCompany/:id/list/vehicleServiceCompanyDispatcherCreateForm"
                component={this.getVehicleServiceCompanyDispatcherCreateForm()}
              />
              <Route
                path="/vehicleServiceCompany/:id/list/vehicleServiceCompanyDispatcherUpdateForm"
                component={this.getVehicleServiceCompanyDispatcherUpdateForm()}
              />

              <Route
                path="/vehicleServiceCompany/:id/list/vehicleServiceCompanyEmployeeList"
                component={this.getVehicleServiceCompanyEmployeeSearch()}
              />
              <Route
                path="/vehicleServiceCompany/:id/list/vehicleServiceCompanyEmployeeCreateForm"
                component={this.getVehicleServiceCompanyEmployeeCreateForm()}
              />
              <Route
                path="/vehicleServiceCompany/:id/list/vehicleServiceCompanyEmployeeUpdateForm"
                component={this.getVehicleServiceCompanyEmployeeUpdateForm()}
              />

              <Route
                path="/vehicleServiceCompany/:id/list/serviceVehicleMovementC2mList"
                component={this.getServiceVehicleMovementC2mSearch()}
              />
              <Route
                path="/vehicleServiceCompany/:id/list/serviceVehicleMovementC2mCreateForm"
                component={this.getServiceVehicleMovementC2mCreateForm()}
              />
              <Route
                path="/vehicleServiceCompany/:id/list/serviceVehicleMovementC2mUpdateForm"
                component={this.getServiceVehicleMovementC2mUpdateForm()}
              />

              <Route
                path="/vehicleServiceCompany/:id/list/serviceVehicleMovementM2cList"
                component={this.getServiceVehicleMovementM2cSearch()}
              />
              <Route
                path="/vehicleServiceCompany/:id/list/serviceVehicleMovementM2cCreateForm"
                component={this.getServiceVehicleMovementM2cCreateForm()}
              />
              <Route
                path="/vehicleServiceCompany/:id/list/serviceVehicleMovementM2cUpdateForm"
                component={this.getServiceVehicleMovementM2cUpdateForm()}
              />

              <Route
                path="/vehicleServiceCompany/:id/list/serviceFileMovementC2mList"
                component={this.getServiceFileMovementC2mSearch()}
              />
              <Route
                path="/vehicleServiceCompany/:id/list/serviceFileMovementC2mCreateForm"
                component={this.getServiceFileMovementC2mCreateForm()}
              />
              <Route
                path="/vehicleServiceCompany/:id/list/serviceFileMovementC2mUpdateForm"
                component={this.getServiceFileMovementC2mUpdateForm()}
              />

              <Route
                path="/vehicleServiceCompany/:id/list/serviceFileMovementM2cList"
                component={this.getServiceFileMovementM2cSearch()}
              />
              <Route
                path="/vehicleServiceCompany/:id/list/serviceFileMovementM2cCreateForm"
                component={this.getServiceFileMovementM2cCreateForm()}
              />
              <Route
                path="/vehicleServiceCompany/:id/list/serviceFileMovementM2cUpdateForm"
                component={this.getServiceFileMovementM2cUpdateForm()}
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
  vehicleServiceCompany: state._vehicleServiceCompany,
  ...state,
}))(VehicleServiceCompanyBizApp)
