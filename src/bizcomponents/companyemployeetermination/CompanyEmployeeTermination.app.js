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
import styles from './CompanyEmployeeTermination.app.less'


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

class CompanyEmployeeTerminationBizApp extends React.PureComponent {
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
      return ['/companyEmployeeTermination/']
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
          <span>公司员工终止</span>
        </span>}
      >

        <Menu.Item>
          <Link to={`/companyEmployeeTermination/${objectId}/list/vehicleServiceCompanyEmployeeList`}>服务提供商员工管理</Link>
        </Menu.Item>
      </SubMenu>
    )
  }


  getVehicleServiceCompanyEmployeeSearch = () => {
    const {VehicleServiceCompanyEmployeeSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._companyEmployeeTermination.vehicleServiceCompanyEmployeeList,
      count: state._companyEmployeeTermination.vehicleServiceCompanyEmployeeCount,
      currentPage: state._companyEmployeeTermination.vehicleServiceCompanyEmployeeCurrentPageNumber,
      searchFormParameters: state._companyEmployeeTermination.vehicleServiceCompanyEmployeeSearchFormParameters,
      loading: state._companyEmployeeTermination.loading,
      owner: { type: '_companyEmployeeTermination', id: state._companyEmployeeTermination.id, listName: 'vehicleServiceCompanyEmployeeList' }, // this is for model namespace and
    }))(VehicleServiceCompanyEmployeeSearch)
  }
  getVehicleServiceCompanyEmployeeCreateForm = () => {
   	const {VehicleServiceCompanyEmployeeCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._companyEmployeeTermination.vehicleServiceCompanyEmployeeList,
      count: state._companyEmployeeTermination.vehicleServiceCompanyEmployeeCount,
      currentPage: state._companyEmployeeTermination.vehicleServiceCompanyEmployeeCurrentPageNumber,
      searchFormParameters: state._companyEmployeeTermination.vehicleServiceCompanyEmployeeSearchFormParameters,
      loading: state._companyEmployeeTermination.loading,
      owner: { type: '_companyEmployeeTermination', id: state._companyEmployeeTermination.id, listName: 'vehicleServiceCompanyEmployeeList'}, // this is for model namespace and
    }))(VehicleServiceCompanyEmployeeCreateForm)
  }
  
  getVehicleServiceCompanyEmployeeUpdateForm = () => {
  	const {VehicleServiceCompanyEmployeeUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._companyEmployeeTermination.selectedRows,
      currentUpdateIndex: state._companyEmployeeTermination.currentUpdateIndex,
      owner: { type: '_companyEmployeeTermination', id: state._companyEmployeeTermination.id, listName: 'vehicleServiceCompanyEmployeeList' }, // this is for model namespace and
    }))(VehicleServiceCompanyEmployeeUpdateForm)
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
    
     const {CompanyEmployeeTerminationDashboard} = GlobalComponents
     const {CompanyEmployeeTerminationEditDetail} = GlobalComponents
     const {CompanyEmployeeTerminationViewDetail} = GlobalComponents
     
     
     
     
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
             <Link to="/home"> <h1>公司员工终止</h1></Link>
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
               <Link to={`/companyEmployeeTermination/${this.props.companyEmployeeTermination.id}/dashboard`}><Icon type="dashboard" /><span>仪表板</span></Link>
             </Menu.Item>
             <Menu.Item >
               <Link to={`/companyEmployeeTermination/${this.props.companyEmployeeTermination.id}/editDetail`}><Icon type="edit" /><span>详情编辑</span></Link>
             </Menu.Item>
             <Menu.Item >
               <Link to={`/companyEmployeeTermination/${this.props.companyEmployeeTermination.id}/viewDetail`}><Icon type="eye-o" /><span>详情查看</span></Link>
             </Menu.Item>
             

             {this.getNavMenuItems(this.props.companyEmployeeTermination.id)}
             <Menu.Item >
               <Link to={"/home"}><Icon type="home" /><span>回到主页</span></Link>
             </Menu.Item>
           </Menu>
         </Sider>
         <Layout>
           <Content style={{ margin: '24px 24px 0', height: '100%' }}>
             <Switch>
               <Route path="/companyEmployeeTermination/:id/dashboard" component={CompanyEmployeeTerminationDashboard} />
               <Route path="/companyEmployeeTermination/:id/editDetail" component={CompanyEmployeeTerminationEditDetail} />
               <Route path="/companyEmployeeTermination/:id/viewDetail" component={CompanyEmployeeTerminationViewDetail} />
               

               <Route path="/companyEmployeeTermination/:id/list/vehicleServiceCompanyEmployeeList" component={this.getVehicleServiceCompanyEmployeeSearch()} />
               <Route path="/companyEmployeeTermination/:id/list/vehicleServiceCompanyEmployeeCreateForm" component={this.getVehicleServiceCompanyEmployeeCreateForm()} />
               <Route path="/companyEmployeeTermination/:id/list/vehicleServiceCompanyEmployeeUpdateForm" component={this.getVehicleServiceCompanyEmployeeUpdateForm()} />
              
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
  companyEmployeeTermination: state._companyEmployeeTermination,
  ...state,
}))(CompanyEmployeeTerminationBizApp)



