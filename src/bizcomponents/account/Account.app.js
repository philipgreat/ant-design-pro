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
import styles from './Account.app.less'

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
  menuName: '对账单',
  menuFor: 'account',
  subItems: [
    { name: 'serviceCompanyAccountList', displayName: '服务商户对账单' },
    { name: 'repairingCompanyAccountList', displayName: '修理厂对账单' },
    { name: 'insuranceServiceAccountList', displayName: '保险服务对账单' },
    { name: 'mainOrderAccountList', displayName: '年检订单对账单' },
    { name: 'inspectionStationAccountList', displayName: '检测站对账单' },
  ],
}

class AccountBizApp extends React.PureComponent {
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
      return ['/account/']
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

  getServiceCompanyAccountSearch = () => {
    const { ServiceCompanyAccountSearch } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._account.serviceCompanyAccountList,
      count: state._account.serviceCompanyAccountCount,
      currentPage: state._account.serviceCompanyAccountCurrentPageNumber,
      searchFormParameters:
        state._account.serviceCompanyAccountSearchFormParameters,
      loading: state._account.loading,
      owner: {
        type: '_account',
        id: state._account.id,
        listName: 'serviceCompanyAccountList',
        ref: state._account,
        listDisplayName: '服务商户对账单列表',
      }, // this is for model namespace and
    }))(ServiceCompanyAccountSearch)
  }
  getServiceCompanyAccountCreateForm = () => {
    const { ServiceCompanyAccountCreateForm } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._account.serviceCompanyAccountList,
      count: state._account.serviceCompanyAccountCount,
      currentPage: state._account.serviceCompanyAccountCurrentPageNumber,
      searchFormParameters:
        state._account.serviceCompanyAccountSearchFormParameters,
      loading: state._account.loading,
      owner: {
        type: '_account',
        id: state._account.id,
        listName: 'serviceCompanyAccountList',
        ref: state._account,
        listDisplayName: '服务商户对账单列表',
      }, // this is for model namespace and
    }))(ServiceCompanyAccountCreateForm)
  }

  getServiceCompanyAccountUpdateForm = () => {
    const { ServiceCompanyAccountUpdateForm } = GlobalComponents
    return connect(state => ({
      selectedRows: state._account.selectedRows,
      currentUpdateIndex: state._account.currentUpdateIndex,
      owner: {
        type: '_account',
        id: state._account.id,
        listName: 'serviceCompanyAccountList',
        ref: state._account,
        listDisplayName: '服务商户对账单列表',
      }, // this is for model namespace and
    }))(ServiceCompanyAccountUpdateForm)
  }

  getRepairingCompanyAccountSearch = () => {
    const { RepairingCompanyAccountSearch } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._account.repairingCompanyAccountList,
      count: state._account.repairingCompanyAccountCount,
      currentPage: state._account.repairingCompanyAccountCurrentPageNumber,
      searchFormParameters:
        state._account.repairingCompanyAccountSearchFormParameters,
      loading: state._account.loading,
      owner: {
        type: '_account',
        id: state._account.id,
        listName: 'repairingCompanyAccountList',
        ref: state._account,
        listDisplayName: '修理厂对账单列表',
      }, // this is for model namespace and
    }))(RepairingCompanyAccountSearch)
  }
  getRepairingCompanyAccountCreateForm = () => {
    const { RepairingCompanyAccountCreateForm } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._account.repairingCompanyAccountList,
      count: state._account.repairingCompanyAccountCount,
      currentPage: state._account.repairingCompanyAccountCurrentPageNumber,
      searchFormParameters:
        state._account.repairingCompanyAccountSearchFormParameters,
      loading: state._account.loading,
      owner: {
        type: '_account',
        id: state._account.id,
        listName: 'repairingCompanyAccountList',
        ref: state._account,
        listDisplayName: '修理厂对账单列表',
      }, // this is for model namespace and
    }))(RepairingCompanyAccountCreateForm)
  }

  getRepairingCompanyAccountUpdateForm = () => {
    const { RepairingCompanyAccountUpdateForm } = GlobalComponents
    return connect(state => ({
      selectedRows: state._account.selectedRows,
      currentUpdateIndex: state._account.currentUpdateIndex,
      owner: {
        type: '_account',
        id: state._account.id,
        listName: 'repairingCompanyAccountList',
        ref: state._account,
        listDisplayName: '修理厂对账单列表',
      }, // this is for model namespace and
    }))(RepairingCompanyAccountUpdateForm)
  }

  getInsuranceServiceAccountSearch = () => {
    const { InsuranceServiceAccountSearch } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._account.insuranceServiceAccountList,
      count: state._account.insuranceServiceAccountCount,
      currentPage: state._account.insuranceServiceAccountCurrentPageNumber,
      searchFormParameters:
        state._account.insuranceServiceAccountSearchFormParameters,
      loading: state._account.loading,
      owner: {
        type: '_account',
        id: state._account.id,
        listName: 'insuranceServiceAccountList',
        ref: state._account,
        listDisplayName: '保险服务对账单列表',
      }, // this is for model namespace and
    }))(InsuranceServiceAccountSearch)
  }
  getInsuranceServiceAccountCreateForm = () => {
    const { InsuranceServiceAccountCreateForm } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._account.insuranceServiceAccountList,
      count: state._account.insuranceServiceAccountCount,
      currentPage: state._account.insuranceServiceAccountCurrentPageNumber,
      searchFormParameters:
        state._account.insuranceServiceAccountSearchFormParameters,
      loading: state._account.loading,
      owner: {
        type: '_account',
        id: state._account.id,
        listName: 'insuranceServiceAccountList',
        ref: state._account,
        listDisplayName: '保险服务对账单列表',
      }, // this is for model namespace and
    }))(InsuranceServiceAccountCreateForm)
  }

  getInsuranceServiceAccountUpdateForm = () => {
    const { InsuranceServiceAccountUpdateForm } = GlobalComponents
    return connect(state => ({
      selectedRows: state._account.selectedRows,
      currentUpdateIndex: state._account.currentUpdateIndex,
      owner: {
        type: '_account',
        id: state._account.id,
        listName: 'insuranceServiceAccountList',
        ref: state._account,
        listDisplayName: '保险服务对账单列表',
      }, // this is for model namespace and
    }))(InsuranceServiceAccountUpdateForm)
  }

  getMainOrderAccountSearch = () => {
    const { MainOrderAccountSearch } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._account.mainOrderAccountList,
      count: state._account.mainOrderAccountCount,
      currentPage: state._account.mainOrderAccountCurrentPageNumber,
      searchFormParameters: state._account.mainOrderAccountSearchFormParameters,
      loading: state._account.loading,
      owner: {
        type: '_account',
        id: state._account.id,
        listName: 'mainOrderAccountList',
        ref: state._account,
        listDisplayName: '年检订单对账单列表',
      }, // this is for model namespace and
    }))(MainOrderAccountSearch)
  }
  getMainOrderAccountCreateForm = () => {
    const { MainOrderAccountCreateForm } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._account.mainOrderAccountList,
      count: state._account.mainOrderAccountCount,
      currentPage: state._account.mainOrderAccountCurrentPageNumber,
      searchFormParameters: state._account.mainOrderAccountSearchFormParameters,
      loading: state._account.loading,
      owner: {
        type: '_account',
        id: state._account.id,
        listName: 'mainOrderAccountList',
        ref: state._account,
        listDisplayName: '年检订单对账单列表',
      }, // this is for model namespace and
    }))(MainOrderAccountCreateForm)
  }

  getMainOrderAccountUpdateForm = () => {
    const { MainOrderAccountUpdateForm } = GlobalComponents
    return connect(state => ({
      selectedRows: state._account.selectedRows,
      currentUpdateIndex: state._account.currentUpdateIndex,
      owner: {
        type: '_account',
        id: state._account.id,
        listName: 'mainOrderAccountList',
        ref: state._account,
        listDisplayName: '年检订单对账单列表',
      }, // this is for model namespace and
    }))(MainOrderAccountUpdateForm)
  }

  getInspectionStationAccountSearch = () => {
    const { InspectionStationAccountSearch } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._account.inspectionStationAccountList,
      count: state._account.inspectionStationAccountCount,
      currentPage: state._account.inspectionStationAccountCurrentPageNumber,
      searchFormParameters:
        state._account.inspectionStationAccountSearchFormParameters,
      loading: state._account.loading,
      owner: {
        type: '_account',
        id: state._account.id,
        listName: 'inspectionStationAccountList',
        ref: state._account,
        listDisplayName: '检测站对账单列表',
      }, // this is for model namespace and
    }))(InspectionStationAccountSearch)
  }
  getInspectionStationAccountCreateForm = () => {
    const { InspectionStationAccountCreateForm } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._account.inspectionStationAccountList,
      count: state._account.inspectionStationAccountCount,
      currentPage: state._account.inspectionStationAccountCurrentPageNumber,
      searchFormParameters:
        state._account.inspectionStationAccountSearchFormParameters,
      loading: state._account.loading,
      owner: {
        type: '_account',
        id: state._account.id,
        listName: 'inspectionStationAccountList',
        ref: state._account,
        listDisplayName: '检测站对账单列表',
      }, // this is for model namespace and
    }))(InspectionStationAccountCreateForm)
  }

  getInspectionStationAccountUpdateForm = () => {
    const { InspectionStationAccountUpdateForm } = GlobalComponents
    return connect(state => ({
      selectedRows: state._account.selectedRows,
      currentUpdateIndex: state._account.currentUpdateIndex,
      owner: {
        type: '_account',
        id: state._account.id,
        listName: 'inspectionStationAccountList',
        ref: state._account,
        listDisplayName: '检测站对账单列表',
      }, // this is for model namespace and
    }))(InspectionStationAccountUpdateForm)
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
    const { AccountDashboard } = GlobalComponents
    const { AccountEditDetail } = GlobalComponents
    const { AccountViewDetail } = GlobalComponents

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
                <Link to={`/account/${this.props.account.id}/dashboard`}>
                  <Icon type="dashboard" />
                  <span>仪表板</span>
                </Link>
              </Menu.Item>

              {this.getNavMenuItems(this.props.account.id)}
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
                  path="/account/:id/dashboard"
                  component={AccountDashboard}
                />

                <Route
                  path="/account/:id/editDetail"
                  component={AccountEditDetail}
                />
                <Route
                  path="/account/:id/viewDetail"
                  component={AccountViewDetail}
                />

                <Route
                  path="/account/:id/list/serviceCompanyAccountList"
                  component={this.getServiceCompanyAccountSearch()}
                />
                <Route
                  path="/account/:id/list/serviceCompanyAccountCreateForm"
                  component={this.getServiceCompanyAccountCreateForm()}
                />
                <Route
                  path="/account/:id/list/serviceCompanyAccountUpdateForm"
                  component={this.getServiceCompanyAccountUpdateForm()}
                />

                <Route
                  path="/account/:id/list/repairingCompanyAccountList"
                  component={this.getRepairingCompanyAccountSearch()}
                />
                <Route
                  path="/account/:id/list/repairingCompanyAccountCreateForm"
                  component={this.getRepairingCompanyAccountCreateForm()}
                />
                <Route
                  path="/account/:id/list/repairingCompanyAccountUpdateForm"
                  component={this.getRepairingCompanyAccountUpdateForm()}
                />

                <Route
                  path="/account/:id/list/insuranceServiceAccountList"
                  component={this.getInsuranceServiceAccountSearch()}
                />
                <Route
                  path="/account/:id/list/insuranceServiceAccountCreateForm"
                  component={this.getInsuranceServiceAccountCreateForm()}
                />
                <Route
                  path="/account/:id/list/insuranceServiceAccountUpdateForm"
                  component={this.getInsuranceServiceAccountUpdateForm()}
                />

                <Route
                  path="/account/:id/list/mainOrderAccountList"
                  component={this.getMainOrderAccountSearch()}
                />
                <Route
                  path="/account/:id/list/mainOrderAccountCreateForm"
                  component={this.getMainOrderAccountCreateForm()}
                />
                <Route
                  path="/account/:id/list/mainOrderAccountUpdateForm"
                  component={this.getMainOrderAccountUpdateForm()}
                />

                <Route
                  path="/account/:id/list/inspectionStationAccountList"
                  component={this.getInspectionStationAccountSearch()}
                />
                <Route
                  path="/account/:id/list/inspectionStationAccountCreateForm"
                  component={this.getInspectionStationAccountCreateForm()}
                />
                <Route
                  path="/account/:id/list/inspectionStationAccountUpdateForm"
                  component={this.getInspectionStationAccountUpdateForm()}
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
  account: state._account,
  ...state,
}))(AccountBizApp)
