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
import styles from './SolutionSystem.app.less'


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

class SolutionSystemBizApp extends React.PureComponent {
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
      return ['/solutionSystem/']
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
          <span>解决方案系统</span>
        </span>}
      >

        <Menu.Item>
          <Link to={`/solutionSystem/${objectId}/list/designerList`}>设计师</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/solutionSystem/${objectId}/list/seniorDesignerList`}>高级设计师</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/solutionSystem/${objectId}/list/equipmentSupplierList`}>设备供应商</Link>
        </Menu.Item>
      </SubMenu>
    )
  }


  getDesignerSearch = () => {
    const {DesignerSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._solutionSystem.designerList,
      count: state._solutionSystem.designerCount,
      currentPage: state._solutionSystem.designerCurrentPageNumber,
      searchFormParameters: state._solutionSystem.designerSearchFormParameters,
      loading: state._solutionSystem.loading,
      owner: { type: '_solutionSystem', id: state._solutionSystem.id, listName: 'designerList' }, // this is for model namespace and
    }))(DesignerSearch)
  }
  getDesignerCreateForm = () => {
   	const {DesignerCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._solutionSystem.designerList,
      count: state._solutionSystem.designerCount,
      currentPage: state._solutionSystem.designerCurrentPageNumber,
      searchFormParameters: state._solutionSystem.designerSearchFormParameters,
      loading: state._solutionSystem.loading,
      owner: { type: '_solutionSystem', id: state._solutionSystem.id, listName: 'designerList'}, // this is for model namespace and
    }))(DesignerCreateForm)
  }
  
  getDesignerUpdateForm = () => {
  	const {DesignerUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._solutionSystem.selectedRows,
      currentUpdateIndex: state._solutionSystem.currentUpdateIndex,
      owner: { type: '_solutionSystem', id: state._solutionSystem.id, listName: 'designerList' }, // this is for model namespace and
    }))(DesignerUpdateForm)
  }

  getSeniorDesignerSearch = () => {
    const {SeniorDesignerSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._solutionSystem.seniorDesignerList,
      count: state._solutionSystem.seniorDesignerCount,
      currentPage: state._solutionSystem.seniorDesignerCurrentPageNumber,
      searchFormParameters: state._solutionSystem.seniorDesignerSearchFormParameters,
      loading: state._solutionSystem.loading,
      owner: { type: '_solutionSystem', id: state._solutionSystem.id, listName: 'seniorDesignerList' }, // this is for model namespace and
    }))(SeniorDesignerSearch)
  }
  getSeniorDesignerCreateForm = () => {
   	const {SeniorDesignerCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._solutionSystem.seniorDesignerList,
      count: state._solutionSystem.seniorDesignerCount,
      currentPage: state._solutionSystem.seniorDesignerCurrentPageNumber,
      searchFormParameters: state._solutionSystem.seniorDesignerSearchFormParameters,
      loading: state._solutionSystem.loading,
      owner: { type: '_solutionSystem', id: state._solutionSystem.id, listName: 'seniorDesignerList'}, // this is for model namespace and
    }))(SeniorDesignerCreateForm)
  }
  
  getSeniorDesignerUpdateForm = () => {
  	const {SeniorDesignerUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._solutionSystem.selectedRows,
      currentUpdateIndex: state._solutionSystem.currentUpdateIndex,
      owner: { type: '_solutionSystem', id: state._solutionSystem.id, listName: 'seniorDesignerList' }, // this is for model namespace and
    }))(SeniorDesignerUpdateForm)
  }

  getEquipmentSupplierSearch = () => {
    const {EquipmentSupplierSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._solutionSystem.equipmentSupplierList,
      count: state._solutionSystem.equipmentSupplierCount,
      currentPage: state._solutionSystem.equipmentSupplierCurrentPageNumber,
      searchFormParameters: state._solutionSystem.equipmentSupplierSearchFormParameters,
      loading: state._solutionSystem.loading,
      owner: { type: '_solutionSystem', id: state._solutionSystem.id, listName: 'equipmentSupplierList' }, // this is for model namespace and
    }))(EquipmentSupplierSearch)
  }
  getEquipmentSupplierCreateForm = () => {
   	const {EquipmentSupplierCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._solutionSystem.equipmentSupplierList,
      count: state._solutionSystem.equipmentSupplierCount,
      currentPage: state._solutionSystem.equipmentSupplierCurrentPageNumber,
      searchFormParameters: state._solutionSystem.equipmentSupplierSearchFormParameters,
      loading: state._solutionSystem.loading,
      owner: { type: '_solutionSystem', id: state._solutionSystem.id, listName: 'equipmentSupplierList'}, // this is for model namespace and
    }))(EquipmentSupplierCreateForm)
  }
  
  getEquipmentSupplierUpdateForm = () => {
  	const {EquipmentSupplierUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._solutionSystem.selectedRows,
      currentUpdateIndex: state._solutionSystem.currentUpdateIndex,
      owner: { type: '_solutionSystem', id: state._solutionSystem.id, listName: 'equipmentSupplierList' }, // this is for model namespace and
    }))(EquipmentSupplierUpdateForm)
  }

  getPageTitle = () => {
    // const { location } = this.props
    // const { pathname } = location
    const title = '环保装备方案管理系统'
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
    
     const {SolutionSystemDashboard} = GlobalComponents
     const {SolutionSystemEditDetail} = GlobalComponents
     const {SolutionSystemViewDetail} = GlobalComponents
     
     
     
     
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
             <Link to="/home"> <h1>解决方案系统</h1></Link>
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
               <Link to={`/solutionSystem/${this.props.solutionSystem.id}/dashboard`}><Icon type="dashboard" /><span>仪表板</span></Link>
             </Menu.Item>
             <Menu.Item >
               <Link to={`/solutionSystem/${this.props.solutionSystem.id}/editDetail`}><Icon type="edit" /><span>详情编辑</span></Link>
             </Menu.Item>
             <Menu.Item >
               <Link to={`/solutionSystem/${this.props.solutionSystem.id}/viewDetail`}><Icon type="eye-o" /><span>详情查看</span></Link>
             </Menu.Item>
             

             {this.getNavMenuItems(this.props.solutionSystem.id)}
             <Menu.Item >
               <Link to={"/home"}><Icon type="home" /><span>回到主页</span></Link>
             </Menu.Item>
           </Menu>
         </Sider>
         <Layout>
           <Content style={{ margin: '24px 24px 0', height: '100%' }}>
             <Switch>
               <Route path="/solutionSystem/:id/dashboard" component={SolutionSystemDashboard} />
               <Route path="/solutionSystem/:id/editDetail" component={SolutionSystemEditDetail} />
               <Route path="/solutionSystem/:id/viewDetail" component={SolutionSystemViewDetail} />
               

               <Route path="/solutionSystem/:id/list/designerList" component={this.getDesignerSearch()} />
               <Route path="/solutionSystem/:id/list/designerCreateForm" component={this.getDesignerCreateForm()} />
               <Route path="/solutionSystem/:id/list/designerUpdateForm" component={this.getDesignerUpdateForm()} />

               <Route path="/solutionSystem/:id/list/seniorDesignerList" component={this.getSeniorDesignerSearch()} />
               <Route path="/solutionSystem/:id/list/seniorDesignerCreateForm" component={this.getSeniorDesignerCreateForm()} />
               <Route path="/solutionSystem/:id/list/seniorDesignerUpdateForm" component={this.getSeniorDesignerUpdateForm()} />

               <Route path="/solutionSystem/:id/list/equipmentSupplierList" component={this.getEquipmentSupplierSearch()} />
               <Route path="/solutionSystem/:id/list/equipmentSupplierCreateForm" component={this.getEquipmentSupplierCreateForm()} />
               <Route path="/solutionSystem/:id/list/equipmentSupplierUpdateForm" component={this.getEquipmentSupplierUpdateForm()} />
              
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
  solutionSystem: state._solutionSystem,
  ...state,
}))(SolutionSystemBizApp)



