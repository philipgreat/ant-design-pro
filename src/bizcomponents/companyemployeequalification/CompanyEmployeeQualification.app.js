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
import styles from './CompanyEmployeeQualification.app.less'


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

class CompanyEmployeeQualificationBizApp extends React.PureComponent {
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
      return ['/companyEmployeeQualification/']
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
          <span>公司员工资格</span>
        </span>}
      >

        <Menu.Item>
          <Link to={`/companyEmployeeQualification/${objectId}/list/vehicleServiceCompanyEmployeeList`}>服务提供商员工管理</Link>
        </Menu.Item>
      </SubMenu>
    )
  }


  getVehicleServiceCompanyEmployeeSearch = () => {
    const {VehicleServiceCompanyEmployeeSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._companyEmployeeQualification.vehicleServiceCompanyEmployeeList,
      count: state._companyEmployeeQualification.vehicleServiceCompanyEmployeeCount,
      currentPage: state._companyEmployeeQualification.vehicleServiceCompanyEmployeeCurrentPageNumber,
      searchFormParameters: state._companyEmployeeQualification.vehicleServiceCompanyEmployeeSearchFormParameters,
      loading: state._companyEmployeeQualification.loading,
      owner: { type: '_companyEmployeeQualification', id: state._companyEmployeeQualification.id, listName: 'vehicleServiceCompanyEmployeeList' }, // this is for model namespace and
    }))(VehicleServiceCompanyEmployeeSearch)
  }
  getVehicleServiceCompanyEmployeeCreateForm = () => {
   	const {VehicleServiceCompanyEmployeeCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._companyEmployeeQualification.vehicleServiceCompanyEmployeeList,
      count: state._companyEmployeeQualification.vehicleServiceCompanyEmployeeCount,
      currentPage: state._companyEmployeeQualification.vehicleServiceCompanyEmployeeCurrentPageNumber,
      searchFormParameters: state._companyEmployeeQualification.vehicleServiceCompanyEmployeeSearchFormParameters,
      loading: state._companyEmployeeQualification.loading,
      owner: { type: '_companyEmployeeQualification', id: state._companyEmployeeQualification.id, listName: 'vehicleServiceCompanyEmployeeList'}, // this is for model namespace and
    }))(VehicleServiceCompanyEmployeeCreateForm)
  }
  
  getVehicleServiceCompanyEmployeeUpdateForm = () => {
  	const {VehicleServiceCompanyEmployeeUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._companyEmployeeQualification.selectedRows,
      currentUpdateIndex: state._companyEmployeeQualification.currentUpdateIndex,
      owner: { type: '_companyEmployeeQualification', id: state._companyEmployeeQualification.id, listName: 'vehicleServiceCompanyEmployeeList' }, // this is for model namespace and
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
    
     const {CompanyEmployeeQualificationDashboard} = GlobalComponents
     const {CompanyEmployeeQualificationEditDetail} = GlobalComponents
     const {CompanyEmployeeQualificationViewDetail} = GlobalComponents
     
     
     
     
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
             <Link to="/home"> <h1>公司员工资格</h1></Link>
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
               <Link to={`/companyEmployeeQualification/${this.props.companyEmployeeQualification.id}/dashboard`}><Icon type="dashboard" /><span>仪表板</span></Link>
             </Menu.Item>
             <Menu.Item >
               <Link to={`/companyEmployeeQualification/${this.props.companyEmployeeQualification.id}/editDetail`}><Icon type="edit" /><span>详情编辑</span></Link>
             </Menu.Item>
             <Menu.Item >
               <Link to={`/companyEmployeeQualification/${this.props.companyEmployeeQualification.id}/viewDetail`}><Icon type="eye-o" /><span>详情查看</span></Link>
             </Menu.Item>
             

             {this.getNavMenuItems(this.props.companyEmployeeQualification.id)}
             <Menu.Item >
               <Link to={"/home"}><Icon type="home" /><span>回到主页</span></Link>
             </Menu.Item>
           </Menu>
         </Sider>
         <Layout>
           <Content style={{ margin: '24px 24px 0', height: '100%' }}>
             <Switch>
               <Route path="/companyEmployeeQualification/:id/dashboard" component={CompanyEmployeeQualificationDashboard} />
               <Route path="/companyEmployeeQualification/:id/editDetail" component={CompanyEmployeeQualificationEditDetail} />
               <Route path="/companyEmployeeQualification/:id/viewDetail" component={CompanyEmployeeQualificationViewDetail} />
               

               <Route path="/companyEmployeeQualification/:id/list/vehicleServiceCompanyEmployeeList" component={this.getVehicleServiceCompanyEmployeeSearch()} />
               <Route path="/companyEmployeeQualification/:id/list/vehicleServiceCompanyEmployeeCreateForm" component={this.getVehicleServiceCompanyEmployeeCreateForm()} />
               <Route path="/companyEmployeeQualification/:id/list/vehicleServiceCompanyEmployeeUpdateForm" component={this.getVehicleServiceCompanyEmployeeUpdateForm()} />
              
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
  companyEmployeeQualification: state._companyEmployeeQualification,
  ...state,
}))(CompanyEmployeeQualificationBizApp)


