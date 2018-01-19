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
import styles from './AvailableService.app.less'


import HeaderSearch from '../../components/HeaderSearch';
import NoticeIcon from '../../components/NoticeIcon';
import GlobalFooter from '../../components/GlobalFooter';


import GlobalComponents from '../../custcomponents';

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

class AvailableServiceBizApp extends React.PureComponent {
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
  onCollapse = (collapsed) => {
    this.props.dispatch({
      type: 'global/changeLayoutCollapsed',
      payload: collapsed,
    })
  }

  getDefaultCollapsedSubMenus = (props) => {
    const currentMenuSelectedKeys = [...this.getCurrentMenuSelectedKeys(props)]
    currentMenuSelectedKeys.splice(-1, 1)
    if (currentMenuSelectedKeys.length === 0) {
      return ['/availableService/']
    }
    return currentMenuSelectedKeys
  }
  getCurrentMenuSelectedKeys = (props) => {
    const { location: { pathname } } = props || this.props
    const keys = pathname.split('/').slice(1)
    if (keys.length === 1 && keys[0] === '') {
      return [this.menus[0].key]
    }
    return keys
  }
  getNavMenuItems = (objectId) => {
    return (
      <SubMenu title={
        <span>
          <Icon type="profile" />
          <span>服务范围</span>
        </span>}
      >

        <Menu.Item>
          <Link to={`/availableService/${objectId}/list/vehicleRepairingAllowanceList`}>汽车修理平台补贴</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/availableService/${objectId}/list/vehicleServiceCompanyBusinessScopeList`}>服务提供商服务范围管理</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/availableService/${objectId}/list/companyEmployeeMessageList`}>消息管理</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/availableService/${objectId}/list/vehicleInspectionOrderServiceLogList`}>车辆检测服务订单日志</Link>
        </Menu.Item>
      </SubMenu>
    )
  }


  getVehicleRepairingAllowanceSearch = () => {
    const {VehicleRepairingAllowanceSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._availableService.vehicleRepairingAllowanceList,
      count: state._availableService.vehicleRepairingAllowanceCount,
      currentPage: state._availableService.vehicleRepairingAllowanceCurrentPageNumber,
      searchFormParameters: state._availableService.vehicleRepairingAllowanceSearchFormParameters,
      loading: state._availableService.loading,
      owner: { type: '_availableService', id: state._availableService.id, listName: 'vehicleRepairingAllowanceList' }, // this is for model namespace and
    }))(VehicleRepairingAllowanceSearch)
  }
  getVehicleRepairingAllowanceCreateForm = () => {
   	const {VehicleRepairingAllowanceCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._availableService.vehicleRepairingAllowanceList,
      count: state._availableService.vehicleRepairingAllowanceCount,
      currentPage: state._availableService.vehicleRepairingAllowanceCurrentPageNumber,
      searchFormParameters: state._availableService.vehicleRepairingAllowanceSearchFormParameters,
      loading: state._availableService.loading,
      owner: { type: '_availableService', id: state._availableService.id, listName: 'vehicleRepairingAllowanceList'}, // this is for model namespace and
    }))(VehicleRepairingAllowanceCreateForm)
  }
  
  getVehicleRepairingAllowanceUpdateForm = () => {
  	const {VehicleRepairingAllowanceUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._availableService.selectedRows,
      currentUpdateIndex: state._availableService.currentUpdateIndex,
      owner: { type: '_availableService', id: state._availableService.id, listName: 'vehicleRepairingAllowanceList' }, // this is for model namespace and
    }))(VehicleRepairingAllowanceUpdateForm)
  }

  getVehicleServiceCompanyBusinessScopeSearch = () => {
    const {VehicleServiceCompanyBusinessScopeSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._availableService.vehicleServiceCompanyBusinessScopeList,
      count: state._availableService.vehicleServiceCompanyBusinessScopeCount,
      currentPage: state._availableService.vehicleServiceCompanyBusinessScopeCurrentPageNumber,
      searchFormParameters: state._availableService.vehicleServiceCompanyBusinessScopeSearchFormParameters,
      loading: state._availableService.loading,
      owner: { type: '_availableService', id: state._availableService.id, listName: 'vehicleServiceCompanyBusinessScopeList' }, // this is for model namespace and
    }))(VehicleServiceCompanyBusinessScopeSearch)
  }
  getVehicleServiceCompanyBusinessScopeCreateForm = () => {
   	const {VehicleServiceCompanyBusinessScopeCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._availableService.vehicleServiceCompanyBusinessScopeList,
      count: state._availableService.vehicleServiceCompanyBusinessScopeCount,
      currentPage: state._availableService.vehicleServiceCompanyBusinessScopeCurrentPageNumber,
      searchFormParameters: state._availableService.vehicleServiceCompanyBusinessScopeSearchFormParameters,
      loading: state._availableService.loading,
      owner: { type: '_availableService', id: state._availableService.id, listName: 'vehicleServiceCompanyBusinessScopeList'}, // this is for model namespace and
    }))(VehicleServiceCompanyBusinessScopeCreateForm)
  }
  
  getVehicleServiceCompanyBusinessScopeUpdateForm = () => {
  	const {VehicleServiceCompanyBusinessScopeUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._availableService.selectedRows,
      currentUpdateIndex: state._availableService.currentUpdateIndex,
      owner: { type: '_availableService', id: state._availableService.id, listName: 'vehicleServiceCompanyBusinessScopeList' }, // this is for model namespace and
    }))(VehicleServiceCompanyBusinessScopeUpdateForm)
  }

  getCompanyEmployeeMessageSearch = () => {
    const {CompanyEmployeeMessageSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._availableService.companyEmployeeMessageList,
      count: state._availableService.companyEmployeeMessageCount,
      currentPage: state._availableService.companyEmployeeMessageCurrentPageNumber,
      searchFormParameters: state._availableService.companyEmployeeMessageSearchFormParameters,
      loading: state._availableService.loading,
      owner: { type: '_availableService', id: state._availableService.id, listName: 'companyEmployeeMessageList' }, // this is for model namespace and
    }))(CompanyEmployeeMessageSearch)
  }
  getCompanyEmployeeMessageCreateForm = () => {
   	const {CompanyEmployeeMessageCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._availableService.companyEmployeeMessageList,
      count: state._availableService.companyEmployeeMessageCount,
      currentPage: state._availableService.companyEmployeeMessageCurrentPageNumber,
      searchFormParameters: state._availableService.companyEmployeeMessageSearchFormParameters,
      loading: state._availableService.loading,
      owner: { type: '_availableService', id: state._availableService.id, listName: 'companyEmployeeMessageList'}, // this is for model namespace and
    }))(CompanyEmployeeMessageCreateForm)
  }
  
  getCompanyEmployeeMessageUpdateForm = () => {
  	const {CompanyEmployeeMessageUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._availableService.selectedRows,
      currentUpdateIndex: state._availableService.currentUpdateIndex,
      owner: { type: '_availableService', id: state._availableService.id, listName: 'companyEmployeeMessageList' }, // this is for model namespace and
    }))(CompanyEmployeeMessageUpdateForm)
  }

  getVehicleInspectionOrderServiceLogSearch = () => {
    const {VehicleInspectionOrderServiceLogSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._availableService.vehicleInspectionOrderServiceLogList,
      count: state._availableService.vehicleInspectionOrderServiceLogCount,
      currentPage: state._availableService.vehicleInspectionOrderServiceLogCurrentPageNumber,
      searchFormParameters: state._availableService.vehicleInspectionOrderServiceLogSearchFormParameters,
      loading: state._availableService.loading,
      owner: { type: '_availableService', id: state._availableService.id, listName: 'vehicleInspectionOrderServiceLogList' }, // this is for model namespace and
    }))(VehicleInspectionOrderServiceLogSearch)
  }
  getVehicleInspectionOrderServiceLogCreateForm = () => {
   	const {VehicleInspectionOrderServiceLogCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._availableService.vehicleInspectionOrderServiceLogList,
      count: state._availableService.vehicleInspectionOrderServiceLogCount,
      currentPage: state._availableService.vehicleInspectionOrderServiceLogCurrentPageNumber,
      searchFormParameters: state._availableService.vehicleInspectionOrderServiceLogSearchFormParameters,
      loading: state._availableService.loading,
      owner: { type: '_availableService', id: state._availableService.id, listName: 'vehicleInspectionOrderServiceLogList'}, // this is for model namespace and
    }))(VehicleInspectionOrderServiceLogCreateForm)
  }
  
  getVehicleInspectionOrderServiceLogUpdateForm = () => {
  	const {VehicleInspectionOrderServiceLogUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._availableService.selectedRows,
      currentUpdateIndex: state._availableService.currentUpdateIndex,
      owner: { type: '_availableService', id: state._availableService.id, listName: 'vehicleInspectionOrderServiceLogList' }, // this is for model namespace and
    }))(VehicleInspectionOrderServiceLogUpdateForm)
  }

  getPageTitle = () => {
    // const { location } = this.props
    // const { pathname } = location
    const title = '代审车服务平台'
    return title
  }
 
  handleOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1)
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
    
     const {AvailableServiceDashboard} = GlobalComponents
     const {AvailableServiceEditDetail} = GlobalComponents
     const {AvailableServiceViewDetail} = GlobalComponents
     
     
     
     
     // Don't show popup menu when it is been collapsed
     const menuProps = collapsed ? {} : {
       openKeys: this.state.openKeys,
     }
     const layout = (
       <Layout>
         <Sider
           trigger={null}
           collapsible
           collapsed={collapsed}
           breakpoint="md"
           onCollapse={()=>this.onCollapse(collapsed)}
           width={256}
           className={styles.sider}
         >
           <div className={styles.logo}>
             <img src="./scm.svg" alt="logo" onClick={this.toggle} />
             <Link to="/home"> <h1>服务范围</h1></Link>
           </div>

           <Menu
             theme="dark"
             mode="inline"
             {...menuProps}
             onOpenChange={this.handleOpenChange}
             selectedKeys={this.getCurrentMenuSelectedKeys()}
             style={{ margin: '16px 0', width: '100%' }}
           >
           

             <Menu.Item >
               <Link to={`/availableService/${this.props.availableService.id}/dashboard`}><Icon type="dashboard" /><span>仪表板</span></Link>
             </Menu.Item>
             <Menu.Item >
               <Link to={`/availableService/${this.props.availableService.id}/editDetail`}><Icon type="edit" /><span>详情编辑</span></Link>
             </Menu.Item>
             <Menu.Item >
               <Link to={`/availableService/${this.props.availableService.id}/viewDetail`}><Icon type="eye-o" /><span>详情查看</span></Link>
             </Menu.Item>
             

             {this.getNavMenuItems(this.props.availableService.id)}
             <Menu.Item >
               <Link to={"/home"}><Icon type="home" /><span>回到主页</span></Link>
             </Menu.Item>
           </Menu>
         </Sider>
         <Layout>
           <Content style={{ margin: '24px 24px 0', height: '100%' }}>
             <Switch>
               <Route path="/availableService/:id/dashboard" component={AvailableServiceDashboard} />
               <Route path="/availableService/:id/editDetail" component={AvailableServiceEditDetail} />
               <Route path="/availableService/:id/viewDetail" component={AvailableServiceViewDetail} />
               

               <Route path="/availableService/:id/list/vehicleRepairingAllowanceList" component={this.getVehicleRepairingAllowanceSearch()} />
               <Route path="/availableService/:id/list/vehicleRepairingAllowanceCreateForm" component={this.getVehicleRepairingAllowanceCreateForm()} />
               <Route path="/availableService/:id/list/vehicleRepairingAllowanceUpdateForm" component={this.getVehicleRepairingAllowanceUpdateForm()} />

               <Route path="/availableService/:id/list/vehicleServiceCompanyBusinessScopeList" component={this.getVehicleServiceCompanyBusinessScopeSearch()} />
               <Route path="/availableService/:id/list/vehicleServiceCompanyBusinessScopeCreateForm" component={this.getVehicleServiceCompanyBusinessScopeCreateForm()} />
               <Route path="/availableService/:id/list/vehicleServiceCompanyBusinessScopeUpdateForm" component={this.getVehicleServiceCompanyBusinessScopeUpdateForm()} />

               <Route path="/availableService/:id/list/companyEmployeeMessageList" component={this.getCompanyEmployeeMessageSearch()} />
               <Route path="/availableService/:id/list/companyEmployeeMessageCreateForm" component={this.getCompanyEmployeeMessageCreateForm()} />
               <Route path="/availableService/:id/list/companyEmployeeMessageUpdateForm" component={this.getCompanyEmployeeMessageUpdateForm()} />

               <Route path="/availableService/:id/list/vehicleInspectionOrderServiceLogList" component={this.getVehicleInspectionOrderServiceLogSearch()} />
               <Route path="/availableService/:id/list/vehicleInspectionOrderServiceLogCreateForm" component={this.getVehicleInspectionOrderServiceLogCreateForm()} />
               <Route path="/availableService/:id/list/vehicleInspectionOrderServiceLogUpdateForm" component={this.getVehicleInspectionOrderServiceLogUpdateForm()} />
              
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
  availableService: state._availableService,
  ...state,
}))(AvailableServiceBizApp)


