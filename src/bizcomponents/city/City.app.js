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
import styles from './City.app.less'

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

class CityBizApp extends React.PureComponent {
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
      return ['/city/']
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
            <span>城市</span>
          </span>
        }
      >
        <Menu.Item>
          <Link to={`/city/${objectId}/list/productPriceList`}>产品价格</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/city/${objectId}/list/vehicleServiceCompanyList`}>
            商户
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/city/${objectId}/list/inspectionStationList`}>
            检测站
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/city/${objectId}/list/vehicleInspectionOrderList`}>
            年检订单
          </Link>
        </Menu.Item>
      </SubMenu>
    )
  }

  getProductPriceSearch = () => {
    const { ProductPriceSearch } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._city.productPriceList,
      count: state._city.productPriceCount,
      currentPage: state._city.productPriceCurrentPageNumber,
      searchFormParameters: state._city.productPriceSearchFormParameters,
      loading: state._city.loading,
      owner: {
        type: '_city',
        id: state._city.id,
        listName: 'productPriceList',
      }, // this is for model namespace and
    }))(ProductPriceSearch)
  }
  getProductPriceCreateForm = () => {
    const { ProductPriceCreateForm } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._city.productPriceList,
      count: state._city.productPriceCount,
      currentPage: state._city.productPriceCurrentPageNumber,
      searchFormParameters: state._city.productPriceSearchFormParameters,
      loading: state._city.loading,
      owner: {
        type: '_city',
        id: state._city.id,
        listName: 'productPriceList',
      }, // this is for model namespace and
    }))(ProductPriceCreateForm)
  }

  getProductPriceUpdateForm = () => {
    const { ProductPriceUpdateForm } = GlobalComponents
    return connect(state => ({
      selectedRows: state._city.selectedRows,
      currentUpdateIndex: state._city.currentUpdateIndex,
      owner: {
        type: '_city',
        id: state._city.id,
        listName: 'productPriceList',
      }, // this is for model namespace and
    }))(ProductPriceUpdateForm)
  }

  getVehicleServiceCompanySearch = () => {
    const { VehicleServiceCompanySearch } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._city.vehicleServiceCompanyList,
      count: state._city.vehicleServiceCompanyCount,
      currentPage: state._city.vehicleServiceCompanyCurrentPageNumber,
      searchFormParameters:
        state._city.vehicleServiceCompanySearchFormParameters,
      loading: state._city.loading,
      owner: {
        type: '_city',
        id: state._city.id,
        listName: 'vehicleServiceCompanyList',
      }, // this is for model namespace and
    }))(VehicleServiceCompanySearch)
  }
  getVehicleServiceCompanyCreateForm = () => {
    const { VehicleServiceCompanyCreateForm } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._city.vehicleServiceCompanyList,
      count: state._city.vehicleServiceCompanyCount,
      currentPage: state._city.vehicleServiceCompanyCurrentPageNumber,
      searchFormParameters:
        state._city.vehicleServiceCompanySearchFormParameters,
      loading: state._city.loading,
      owner: {
        type: '_city',
        id: state._city.id,
        listName: 'vehicleServiceCompanyList',
      }, // this is for model namespace and
    }))(VehicleServiceCompanyCreateForm)
  }

  getVehicleServiceCompanyUpdateForm = () => {
    const { VehicleServiceCompanyUpdateForm } = GlobalComponents
    return connect(state => ({
      selectedRows: state._city.selectedRows,
      currentUpdateIndex: state._city.currentUpdateIndex,
      owner: {
        type: '_city',
        id: state._city.id,
        listName: 'vehicleServiceCompanyList',
      }, // this is for model namespace and
    }))(VehicleServiceCompanyUpdateForm)
  }

  getInspectionStationSearch = () => {
    const { InspectionStationSearch } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._city.inspectionStationList,
      count: state._city.inspectionStationCount,
      currentPage: state._city.inspectionStationCurrentPageNumber,
      searchFormParameters: state._city.inspectionStationSearchFormParameters,
      loading: state._city.loading,
      owner: {
        type: '_city',
        id: state._city.id,
        listName: 'inspectionStationList',
      }, // this is for model namespace and
    }))(InspectionStationSearch)
  }
  getInspectionStationCreateForm = () => {
    const { InspectionStationCreateForm } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._city.inspectionStationList,
      count: state._city.inspectionStationCount,
      currentPage: state._city.inspectionStationCurrentPageNumber,
      searchFormParameters: state._city.inspectionStationSearchFormParameters,
      loading: state._city.loading,
      owner: {
        type: '_city',
        id: state._city.id,
        listName: 'inspectionStationList',
      }, // this is for model namespace and
    }))(InspectionStationCreateForm)
  }

  getInspectionStationUpdateForm = () => {
    const { InspectionStationUpdateForm } = GlobalComponents
    return connect(state => ({
      selectedRows: state._city.selectedRows,
      currentUpdateIndex: state._city.currentUpdateIndex,
      owner: {
        type: '_city',
        id: state._city.id,
        listName: 'inspectionStationList',
      }, // this is for model namespace and
    }))(InspectionStationUpdateForm)
  }

  getVehicleInspectionOrderSearch = () => {
    const { VehicleInspectionOrderSearch } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._city.vehicleInspectionOrderList,
      count: state._city.vehicleInspectionOrderCount,
      currentPage: state._city.vehicleInspectionOrderCurrentPageNumber,
      searchFormParameters:
        state._city.vehicleInspectionOrderSearchFormParameters,
      loading: state._city.loading,
      owner: {
        type: '_city',
        id: state._city.id,
        listName: 'vehicleInspectionOrderList',
      }, // this is for model namespace and
    }))(VehicleInspectionOrderSearch)
  }
  getVehicleInspectionOrderCreateForm = () => {
    const { VehicleInspectionOrderCreateForm } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._city.vehicleInspectionOrderList,
      count: state._city.vehicleInspectionOrderCount,
      currentPage: state._city.vehicleInspectionOrderCurrentPageNumber,
      searchFormParameters:
        state._city.vehicleInspectionOrderSearchFormParameters,
      loading: state._city.loading,
      owner: {
        type: '_city',
        id: state._city.id,
        listName: 'vehicleInspectionOrderList',
      }, // this is for model namespace and
    }))(VehicleInspectionOrderCreateForm)
  }

  getVehicleInspectionOrderUpdateForm = () => {
    const { VehicleInspectionOrderUpdateForm } = GlobalComponents
    return connect(state => ({
      selectedRows: state._city.selectedRows,
      currentUpdateIndex: state._city.currentUpdateIndex,
      owner: {
        type: '_city',
        id: state._city.id,
        listName: 'vehicleInspectionOrderList',
      }, // this is for model namespace and
    }))(VehicleInspectionOrderUpdateForm)
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

    const { CityDashboard } = GlobalComponents
    const { CityEditDetail } = GlobalComponents
    const { CityViewDetail } = GlobalComponents

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
              <h1>城市</h1>
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
              <Link to={`/city/${this.props.city.id}/dashboard`}>
                <Icon type="dashboard" />
                <span>仪表板</span>
              </Link>
            </Menu.Item>

            {this.getNavMenuItems(this.props.city.id)}
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
              <Route path="/city/:id/dashboard" component={CityDashboard} />

              <Route path="/city/:id/editDetail" component={CityEditDetail} />
              <Route path="/city/:id/viewDetail" component={CityViewDetail} />

              <Route
                path="/city/:id/list/productPriceList"
                component={this.getProductPriceSearch()}
              />
              <Route
                path="/city/:id/list/productPriceCreateForm"
                component={this.getProductPriceCreateForm()}
              />
              <Route
                path="/city/:id/list/productPriceUpdateForm"
                component={this.getProductPriceUpdateForm()}
              />

              <Route
                path="/city/:id/list/vehicleServiceCompanyList"
                component={this.getVehicleServiceCompanySearch()}
              />
              <Route
                path="/city/:id/list/vehicleServiceCompanyCreateForm"
                component={this.getVehicleServiceCompanyCreateForm()}
              />
              <Route
                path="/city/:id/list/vehicleServiceCompanyUpdateForm"
                component={this.getVehicleServiceCompanyUpdateForm()}
              />

              <Route
                path="/city/:id/list/inspectionStationList"
                component={this.getInspectionStationSearch()}
              />
              <Route
                path="/city/:id/list/inspectionStationCreateForm"
                component={this.getInspectionStationCreateForm()}
              />
              <Route
                path="/city/:id/list/inspectionStationUpdateForm"
                component={this.getInspectionStationUpdateForm()}
              />

              <Route
                path="/city/:id/list/vehicleInspectionOrderList"
                component={this.getVehicleInspectionOrderSearch()}
              />
              <Route
                path="/city/:id/list/vehicleInspectionOrderCreateForm"
                component={this.getVehicleInspectionOrderCreateForm()}
              />
              <Route
                path="/city/:id/list/vehicleInspectionOrderUpdateForm"
                component={this.getVehicleInspectionOrderUpdateForm()}
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
  city: state._city,
  ...state,
}))(CityBizApp)
