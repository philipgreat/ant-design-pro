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
import styles from './Customer.app.less'

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

class CustomerBizApp extends React.PureComponent {
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
      return ['/customer/']
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
            <span>客户</span>
          </span>
        }
      >
        <Menu.Item>
          <Link to={`/customer/${objectId}/list/vehicleInfoList`}>
            车辆信息
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/customer/${objectId}/list/vehicleInspectionOrderList`}>
            上线检测订单
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/customer/${objectId}/list/orderDiscountCouponList`}>
            订单的折扣券
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link
            to={`/customer/${objectId}/list/vehicleInspectionOrderCouponList`}
          >
            优惠券
          </Link>
        </Menu.Item>
      </SubMenu>
    )
  }

  getVehicleInfoSearch = () => {
    const { VehicleInfoSearch } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._customer.vehicleInfoList,
      count: state._customer.vehicleInfoCount,
      currentPage: state._customer.vehicleInfoCurrentPageNumber,
      searchFormParameters: state._customer.vehicleInfoSearchFormParameters,
      loading: state._customer.loading,
      owner: {
        type: '_customer',
        id: state._customer.id,
        listName: 'vehicleInfoList',
      }, // this is for model namespace and
    }))(VehicleInfoSearch)
  }
  getVehicleInfoCreateForm = () => {
    const { VehicleInfoCreateForm } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._customer.vehicleInfoList,
      count: state._customer.vehicleInfoCount,
      currentPage: state._customer.vehicleInfoCurrentPageNumber,
      searchFormParameters: state._customer.vehicleInfoSearchFormParameters,
      loading: state._customer.loading,
      owner: {
        type: '_customer',
        id: state._customer.id,
        listName: 'vehicleInfoList',
      }, // this is for model namespace and
    }))(VehicleInfoCreateForm)
  }

  getVehicleInfoUpdateForm = () => {
    const { VehicleInfoUpdateForm } = GlobalComponents
    return connect(state => ({
      selectedRows: state._customer.selectedRows,
      currentUpdateIndex: state._customer.currentUpdateIndex,
      owner: {
        type: '_customer',
        id: state._customer.id,
        listName: 'vehicleInfoList',
      }, // this is for model namespace and
    }))(VehicleInfoUpdateForm)
  }

  getVehicleInspectionOrderSearch = () => {
    const { VehicleInspectionOrderSearch } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._customer.vehicleInspectionOrderList,
      count: state._customer.vehicleInspectionOrderCount,
      currentPage: state._customer.vehicleInspectionOrderCurrentPageNumber,
      searchFormParameters:
        state._customer.vehicleInspectionOrderSearchFormParameters,
      loading: state._customer.loading,
      owner: {
        type: '_customer',
        id: state._customer.id,
        listName: 'vehicleInspectionOrderList',
      }, // this is for model namespace and
    }))(VehicleInspectionOrderSearch)
  }
  getVehicleInspectionOrderCreateForm = () => {
    const { VehicleInspectionOrderCreateForm } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._customer.vehicleInspectionOrderList,
      count: state._customer.vehicleInspectionOrderCount,
      currentPage: state._customer.vehicleInspectionOrderCurrentPageNumber,
      searchFormParameters:
        state._customer.vehicleInspectionOrderSearchFormParameters,
      loading: state._customer.loading,
      owner: {
        type: '_customer',
        id: state._customer.id,
        listName: 'vehicleInspectionOrderList',
      }, // this is for model namespace and
    }))(VehicleInspectionOrderCreateForm)
  }

  getVehicleInspectionOrderUpdateForm = () => {
    const { VehicleInspectionOrderUpdateForm } = GlobalComponents
    return connect(state => ({
      selectedRows: state._customer.selectedRows,
      currentUpdateIndex: state._customer.currentUpdateIndex,
      owner: {
        type: '_customer',
        id: state._customer.id,
        listName: 'vehicleInspectionOrderList',
      }, // this is for model namespace and
    }))(VehicleInspectionOrderUpdateForm)
  }

  getOrderDiscountCouponSearch = () => {
    const { OrderDiscountCouponSearch } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._customer.orderDiscountCouponList,
      count: state._customer.orderDiscountCouponCount,
      currentPage: state._customer.orderDiscountCouponCurrentPageNumber,
      searchFormParameters:
        state._customer.orderDiscountCouponSearchFormParameters,
      loading: state._customer.loading,
      owner: {
        type: '_customer',
        id: state._customer.id,
        listName: 'orderDiscountCouponList',
      }, // this is for model namespace and
    }))(OrderDiscountCouponSearch)
  }
  getOrderDiscountCouponCreateForm = () => {
    const { OrderDiscountCouponCreateForm } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._customer.orderDiscountCouponList,
      count: state._customer.orderDiscountCouponCount,
      currentPage: state._customer.orderDiscountCouponCurrentPageNumber,
      searchFormParameters:
        state._customer.orderDiscountCouponSearchFormParameters,
      loading: state._customer.loading,
      owner: {
        type: '_customer',
        id: state._customer.id,
        listName: 'orderDiscountCouponList',
      }, // this is for model namespace and
    }))(OrderDiscountCouponCreateForm)
  }

  getOrderDiscountCouponUpdateForm = () => {
    const { OrderDiscountCouponUpdateForm } = GlobalComponents
    return connect(state => ({
      selectedRows: state._customer.selectedRows,
      currentUpdateIndex: state._customer.currentUpdateIndex,
      owner: {
        type: '_customer',
        id: state._customer.id,
        listName: 'orderDiscountCouponList',
      }, // this is for model namespace and
    }))(OrderDiscountCouponUpdateForm)
  }

  getVehicleInspectionOrderCouponSearch = () => {
    const { VehicleInspectionOrderCouponSearch } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._customer.vehicleInspectionOrderCouponList,
      count: state._customer.vehicleInspectionOrderCouponCount,
      currentPage:
        state._customer.vehicleInspectionOrderCouponCurrentPageNumber,
      searchFormParameters:
        state._customer.vehicleInspectionOrderCouponSearchFormParameters,
      loading: state._customer.loading,
      owner: {
        type: '_customer',
        id: state._customer.id,
        listName: 'vehicleInspectionOrderCouponList',
      }, // this is for model namespace and
    }))(VehicleInspectionOrderCouponSearch)
  }
  getVehicleInspectionOrderCouponCreateForm = () => {
    const { VehicleInspectionOrderCouponCreateForm } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._customer.vehicleInspectionOrderCouponList,
      count: state._customer.vehicleInspectionOrderCouponCount,
      currentPage:
        state._customer.vehicleInspectionOrderCouponCurrentPageNumber,
      searchFormParameters:
        state._customer.vehicleInspectionOrderCouponSearchFormParameters,
      loading: state._customer.loading,
      owner: {
        type: '_customer',
        id: state._customer.id,
        listName: 'vehicleInspectionOrderCouponList',
      }, // this is for model namespace and
    }))(VehicleInspectionOrderCouponCreateForm)
  }

  getVehicleInspectionOrderCouponUpdateForm = () => {
    const { VehicleInspectionOrderCouponUpdateForm } = GlobalComponents
    return connect(state => ({
      selectedRows: state._customer.selectedRows,
      currentUpdateIndex: state._customer.currentUpdateIndex,
      owner: {
        type: '_customer',
        id: state._customer.id,
        listName: 'vehicleInspectionOrderCouponList',
      }, // this is for model namespace and
    }))(VehicleInspectionOrderCouponUpdateForm)
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

    const { CustomerDashboard } = GlobalComponents
    const { CustomerEditDetail } = GlobalComponents
    const { CustomerViewDetail } = GlobalComponents

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
              <h1>客户</h1>
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
              <Link to={`/customer/${this.props.customer.id}/dashboard`}>
                <Icon type="dashboard" />
                <span>仪表板</span>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to={`/customer/${this.props.customer.id}/editDetail`}>
                <Icon type="edit" />
                <span>详情编辑</span>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to={`/customer/${this.props.customer.id}/viewDetail`}>
                <Icon type="eye-o" />
                <span>详情查看</span>
              </Link>
            </Menu.Item>

            {this.getNavMenuItems(this.props.customer.id)}
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
                path="/customer/:id/dashboard"
                component={CustomerDashboard}
              />
              <Route
                path="/customer/:id/editDetail"
                component={CustomerEditDetail}
              />
              <Route
                path="/customer/:id/viewDetail"
                component={CustomerViewDetail}
              />

              <Route
                path="/customer/:id/list/vehicleInfoList"
                component={this.getVehicleInfoSearch()}
              />
              <Route
                path="/customer/:id/list/vehicleInfoCreateForm"
                component={this.getVehicleInfoCreateForm()}
              />
              <Route
                path="/customer/:id/list/vehicleInfoUpdateForm"
                component={this.getVehicleInfoUpdateForm()}
              />

              <Route
                path="/customer/:id/list/vehicleInspectionOrderList"
                component={this.getVehicleInspectionOrderSearch()}
              />
              <Route
                path="/customer/:id/list/vehicleInspectionOrderCreateForm"
                component={this.getVehicleInspectionOrderCreateForm()}
              />
              <Route
                path="/customer/:id/list/vehicleInspectionOrderUpdateForm"
                component={this.getVehicleInspectionOrderUpdateForm()}
              />

              <Route
                path="/customer/:id/list/orderDiscountCouponList"
                component={this.getOrderDiscountCouponSearch()}
              />
              <Route
                path="/customer/:id/list/orderDiscountCouponCreateForm"
                component={this.getOrderDiscountCouponCreateForm()}
              />
              <Route
                path="/customer/:id/list/orderDiscountCouponUpdateForm"
                component={this.getOrderDiscountCouponUpdateForm()}
              />

              <Route
                path="/customer/:id/list/vehicleInspectionOrderCouponList"
                component={this.getVehicleInspectionOrderCouponSearch()}
              />
              <Route
                path="/customer/:id/list/vehicleInspectionOrderCouponCreateForm"
                component={this.getVehicleInspectionOrderCouponCreateForm()}
              />
              <Route
                path="/customer/:id/list/vehicleInspectionOrderCouponUpdateForm"
                component={this.getVehicleInspectionOrderCouponUpdateForm()}
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
  customer: state._customer,
  ...state,
}))(CustomerBizApp)
