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
import styles from './ServiceVehicleRepairing.app.less'

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

class ServiceVehicleRepairingBizApp extends React.PureComponent {
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
      return ['/serviceVehicleRepairing/']
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
            <span>修车服务</span>
          </span>
        }
      >
        <Menu.Item>
          <Link
            to={`/serviceVehicleRepairing/${objectId}/list/reportVehicleInspectionReportList`}
          >
            车辆检验报告
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link
            to={`/serviceVehicleRepairing/${objectId}/list/repairingQuotationList`}
          >
            维修报价
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link
            to={`/serviceVehicleRepairing/${objectId}/list/repairingAllowanceItemList`}
          >
            修补贴项目
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link
            to={`/serviceVehicleRepairing/${objectId}/list/vehicleRepairingPaymentList`}
          >
            修理付款
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link
            to={`/serviceVehicleRepairing/${objectId}/list/vehicleRepairingReportList`}
          >
            车辆维修报告
          </Link>
        </Menu.Item>
      </SubMenu>
    )
  }

  getReportVehicleInspectionReportSearch = () => {
    const { ReportVehicleInspectionReportSearch } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._serviceVehicleRepairing.reportVehicleInspectionReportList,
      count: state._serviceVehicleRepairing.reportVehicleInspectionReportCount,
      currentPage:
        state._serviceVehicleRepairing
          .reportVehicleInspectionReportCurrentPageNumber,
      searchFormParameters:
        state._serviceVehicleRepairing
          .reportVehicleInspectionReportSearchFormParameters,
      loading: state._serviceVehicleRepairing.loading,
      owner: {
        type: '_serviceVehicleRepairing',
        id: state._serviceVehicleRepairing.id,
        listName: 'reportVehicleInspectionReportList',
      }, // this is for model namespace and
    }))(ReportVehicleInspectionReportSearch)
  }
  getReportVehicleInspectionReportCreateForm = () => {
    const { ReportVehicleInspectionReportCreateForm } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._serviceVehicleRepairing.reportVehicleInspectionReportList,
      count: state._serviceVehicleRepairing.reportVehicleInspectionReportCount,
      currentPage:
        state._serviceVehicleRepairing
          .reportVehicleInspectionReportCurrentPageNumber,
      searchFormParameters:
        state._serviceVehicleRepairing
          .reportVehicleInspectionReportSearchFormParameters,
      loading: state._serviceVehicleRepairing.loading,
      owner: {
        type: '_serviceVehicleRepairing',
        id: state._serviceVehicleRepairing.id,
        listName: 'reportVehicleInspectionReportList',
      }, // this is for model namespace and
    }))(ReportVehicleInspectionReportCreateForm)
  }

  getReportVehicleInspectionReportUpdateForm = () => {
    const { ReportVehicleInspectionReportUpdateForm } = GlobalComponents
    return connect(state => ({
      selectedRows: state._serviceVehicleRepairing.selectedRows,
      currentUpdateIndex: state._serviceVehicleRepairing.currentUpdateIndex,
      owner: {
        type: '_serviceVehicleRepairing',
        id: state._serviceVehicleRepairing.id,
        listName: 'reportVehicleInspectionReportList',
      }, // this is for model namespace and
    }))(ReportVehicleInspectionReportUpdateForm)
  }

  getRepairingQuotationSearch = () => {
    const { RepairingQuotationSearch } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._serviceVehicleRepairing.repairingQuotationList,
      count: state._serviceVehicleRepairing.repairingQuotationCount,
      currentPage:
        state._serviceVehicleRepairing.repairingQuotationCurrentPageNumber,
      searchFormParameters:
        state._serviceVehicleRepairing.repairingQuotationSearchFormParameters,
      loading: state._serviceVehicleRepairing.loading,
      owner: {
        type: '_serviceVehicleRepairing',
        id: state._serviceVehicleRepairing.id,
        listName: 'repairingQuotationList',
      }, // this is for model namespace and
    }))(RepairingQuotationSearch)
  }
  getRepairingQuotationCreateForm = () => {
    const { RepairingQuotationCreateForm } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._serviceVehicleRepairing.repairingQuotationList,
      count: state._serviceVehicleRepairing.repairingQuotationCount,
      currentPage:
        state._serviceVehicleRepairing.repairingQuotationCurrentPageNumber,
      searchFormParameters:
        state._serviceVehicleRepairing.repairingQuotationSearchFormParameters,
      loading: state._serviceVehicleRepairing.loading,
      owner: {
        type: '_serviceVehicleRepairing',
        id: state._serviceVehicleRepairing.id,
        listName: 'repairingQuotationList',
      }, // this is for model namespace and
    }))(RepairingQuotationCreateForm)
  }

  getRepairingQuotationUpdateForm = () => {
    const { RepairingQuotationUpdateForm } = GlobalComponents
    return connect(state => ({
      selectedRows: state._serviceVehicleRepairing.selectedRows,
      currentUpdateIndex: state._serviceVehicleRepairing.currentUpdateIndex,
      owner: {
        type: '_serviceVehicleRepairing',
        id: state._serviceVehicleRepairing.id,
        listName: 'repairingQuotationList',
      }, // this is for model namespace and
    }))(RepairingQuotationUpdateForm)
  }

  getRepairingAllowanceItemSearch = () => {
    const { RepairingAllowanceItemSearch } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._serviceVehicleRepairing.repairingAllowanceItemList,
      count: state._serviceVehicleRepairing.repairingAllowanceItemCount,
      currentPage:
        state._serviceVehicleRepairing.repairingAllowanceItemCurrentPageNumber,
      searchFormParameters:
        state._serviceVehicleRepairing
          .repairingAllowanceItemSearchFormParameters,
      loading: state._serviceVehicleRepairing.loading,
      owner: {
        type: '_serviceVehicleRepairing',
        id: state._serviceVehicleRepairing.id,
        listName: 'repairingAllowanceItemList',
      }, // this is for model namespace and
    }))(RepairingAllowanceItemSearch)
  }
  getRepairingAllowanceItemCreateForm = () => {
    const { RepairingAllowanceItemCreateForm } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._serviceVehicleRepairing.repairingAllowanceItemList,
      count: state._serviceVehicleRepairing.repairingAllowanceItemCount,
      currentPage:
        state._serviceVehicleRepairing.repairingAllowanceItemCurrentPageNumber,
      searchFormParameters:
        state._serviceVehicleRepairing
          .repairingAllowanceItemSearchFormParameters,
      loading: state._serviceVehicleRepairing.loading,
      owner: {
        type: '_serviceVehicleRepairing',
        id: state._serviceVehicleRepairing.id,
        listName: 'repairingAllowanceItemList',
      }, // this is for model namespace and
    }))(RepairingAllowanceItemCreateForm)
  }

  getRepairingAllowanceItemUpdateForm = () => {
    const { RepairingAllowanceItemUpdateForm } = GlobalComponents
    return connect(state => ({
      selectedRows: state._serviceVehicleRepairing.selectedRows,
      currentUpdateIndex: state._serviceVehicleRepairing.currentUpdateIndex,
      owner: {
        type: '_serviceVehicleRepairing',
        id: state._serviceVehicleRepairing.id,
        listName: 'repairingAllowanceItemList',
      }, // this is for model namespace and
    }))(RepairingAllowanceItemUpdateForm)
  }

  getVehicleRepairingPaymentSearch = () => {
    const { VehicleRepairingPaymentSearch } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._serviceVehicleRepairing.vehicleRepairingPaymentList,
      count: state._serviceVehicleRepairing.vehicleRepairingPaymentCount,
      currentPage:
        state._serviceVehicleRepairing.vehicleRepairingPaymentCurrentPageNumber,
      searchFormParameters:
        state._serviceVehicleRepairing
          .vehicleRepairingPaymentSearchFormParameters,
      loading: state._serviceVehicleRepairing.loading,
      owner: {
        type: '_serviceVehicleRepairing',
        id: state._serviceVehicleRepairing.id,
        listName: 'vehicleRepairingPaymentList',
      }, // this is for model namespace and
    }))(VehicleRepairingPaymentSearch)
  }
  getVehicleRepairingPaymentCreateForm = () => {
    const { VehicleRepairingPaymentCreateForm } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._serviceVehicleRepairing.vehicleRepairingPaymentList,
      count: state._serviceVehicleRepairing.vehicleRepairingPaymentCount,
      currentPage:
        state._serviceVehicleRepairing.vehicleRepairingPaymentCurrentPageNumber,
      searchFormParameters:
        state._serviceVehicleRepairing
          .vehicleRepairingPaymentSearchFormParameters,
      loading: state._serviceVehicleRepairing.loading,
      owner: {
        type: '_serviceVehicleRepairing',
        id: state._serviceVehicleRepairing.id,
        listName: 'vehicleRepairingPaymentList',
      }, // this is for model namespace and
    }))(VehicleRepairingPaymentCreateForm)
  }

  getVehicleRepairingPaymentUpdateForm = () => {
    const { VehicleRepairingPaymentUpdateForm } = GlobalComponents
    return connect(state => ({
      selectedRows: state._serviceVehicleRepairing.selectedRows,
      currentUpdateIndex: state._serviceVehicleRepairing.currentUpdateIndex,
      owner: {
        type: '_serviceVehicleRepairing',
        id: state._serviceVehicleRepairing.id,
        listName: 'vehicleRepairingPaymentList',
      }, // this is for model namespace and
    }))(VehicleRepairingPaymentUpdateForm)
  }

  getVehicleRepairingReportSearch = () => {
    const { VehicleRepairingReportSearch } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._serviceVehicleRepairing.vehicleRepairingReportList,
      count: state._serviceVehicleRepairing.vehicleRepairingReportCount,
      currentPage:
        state._serviceVehicleRepairing.vehicleRepairingReportCurrentPageNumber,
      searchFormParameters:
        state._serviceVehicleRepairing
          .vehicleRepairingReportSearchFormParameters,
      loading: state._serviceVehicleRepairing.loading,
      owner: {
        type: '_serviceVehicleRepairing',
        id: state._serviceVehicleRepairing.id,
        listName: 'vehicleRepairingReportList',
      }, // this is for model namespace and
    }))(VehicleRepairingReportSearch)
  }
  getVehicleRepairingReportCreateForm = () => {
    const { VehicleRepairingReportCreateForm } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._serviceVehicleRepairing.vehicleRepairingReportList,
      count: state._serviceVehicleRepairing.vehicleRepairingReportCount,
      currentPage:
        state._serviceVehicleRepairing.vehicleRepairingReportCurrentPageNumber,
      searchFormParameters:
        state._serviceVehicleRepairing
          .vehicleRepairingReportSearchFormParameters,
      loading: state._serviceVehicleRepairing.loading,
      owner: {
        type: '_serviceVehicleRepairing',
        id: state._serviceVehicleRepairing.id,
        listName: 'vehicleRepairingReportList',
      }, // this is for model namespace and
    }))(VehicleRepairingReportCreateForm)
  }

  getVehicleRepairingReportUpdateForm = () => {
    const { VehicleRepairingReportUpdateForm } = GlobalComponents
    return connect(state => ({
      selectedRows: state._serviceVehicleRepairing.selectedRows,
      currentUpdateIndex: state._serviceVehicleRepairing.currentUpdateIndex,
      owner: {
        type: '_serviceVehicleRepairing',
        id: state._serviceVehicleRepairing.id,
        listName: 'vehicleRepairingReportList',
      }, // this is for model namespace and
    }))(VehicleRepairingReportUpdateForm)
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

    const { ServiceVehicleRepairingDashboard } = GlobalComponents
    const { ServiceVehicleRepairingEditDetail } = GlobalComponents
    const { ServiceVehicleRepairingViewDetail } = GlobalComponents

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
              <h1>修车服务</h1>
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
                to={`/serviceVehicleRepairing/${
                  this.props.serviceVehicleRepairing.id
                }/dashboard`}
              >
                <Icon type="dashboard" />
                <span>仪表板</span>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link
                to={`/serviceVehicleRepairing/${
                  this.props.serviceVehicleRepairing.id
                }/editDetail`}
              >
                <Icon type="edit" />
                <span>详情编辑</span>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link
                to={`/serviceVehicleRepairing/${
                  this.props.serviceVehicleRepairing.id
                }/viewDetail`}
              >
                <Icon type="eye-o" />
                <span>详情查看</span>
              </Link>
            </Menu.Item>

            {this.getNavMenuItems(this.props.serviceVehicleRepairing.id)}
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
                path="/serviceVehicleRepairing/:id/dashboard"
                component={ServiceVehicleRepairingDashboard}
              />
              <Route
                path="/serviceVehicleRepairing/:id/editDetail"
                component={ServiceVehicleRepairingEditDetail}
              />
              <Route
                path="/serviceVehicleRepairing/:id/viewDetail"
                component={ServiceVehicleRepairingViewDetail}
              />

              <Route
                path="/serviceVehicleRepairing/:id/list/reportVehicleInspectionReportList"
                component={this.getReportVehicleInspectionReportSearch()}
              />
              <Route
                path="/serviceVehicleRepairing/:id/list/reportVehicleInspectionReportCreateForm"
                component={this.getReportVehicleInspectionReportCreateForm()}
              />
              <Route
                path="/serviceVehicleRepairing/:id/list/reportVehicleInspectionReportUpdateForm"
                component={this.getReportVehicleInspectionReportUpdateForm()}
              />

              <Route
                path="/serviceVehicleRepairing/:id/list/repairingQuotationList"
                component={this.getRepairingQuotationSearch()}
              />
              <Route
                path="/serviceVehicleRepairing/:id/list/repairingQuotationCreateForm"
                component={this.getRepairingQuotationCreateForm()}
              />
              <Route
                path="/serviceVehicleRepairing/:id/list/repairingQuotationUpdateForm"
                component={this.getRepairingQuotationUpdateForm()}
              />

              <Route
                path="/serviceVehicleRepairing/:id/list/repairingAllowanceItemList"
                component={this.getRepairingAllowanceItemSearch()}
              />
              <Route
                path="/serviceVehicleRepairing/:id/list/repairingAllowanceItemCreateForm"
                component={this.getRepairingAllowanceItemCreateForm()}
              />
              <Route
                path="/serviceVehicleRepairing/:id/list/repairingAllowanceItemUpdateForm"
                component={this.getRepairingAllowanceItemUpdateForm()}
              />

              <Route
                path="/serviceVehicleRepairing/:id/list/vehicleRepairingPaymentList"
                component={this.getVehicleRepairingPaymentSearch()}
              />
              <Route
                path="/serviceVehicleRepairing/:id/list/vehicleRepairingPaymentCreateForm"
                component={this.getVehicleRepairingPaymentCreateForm()}
              />
              <Route
                path="/serviceVehicleRepairing/:id/list/vehicleRepairingPaymentUpdateForm"
                component={this.getVehicleRepairingPaymentUpdateForm()}
              />

              <Route
                path="/serviceVehicleRepairing/:id/list/vehicleRepairingReportList"
                component={this.getVehicleRepairingReportSearch()}
              />
              <Route
                path="/serviceVehicleRepairing/:id/list/vehicleRepairingReportCreateForm"
                component={this.getVehicleRepairingReportCreateForm()}
              />
              <Route
                path="/serviceVehicleRepairing/:id/list/vehicleRepairingReportUpdateForm"
                component={this.getVehicleRepairingReportUpdateForm()}
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
  serviceVehicleRepairing: state._serviceVehicleRepairing,
  ...state,
}))(ServiceVehicleRepairingBizApp)
