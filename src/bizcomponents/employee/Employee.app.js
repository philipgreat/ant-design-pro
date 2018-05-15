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
import styles from './Employee.app.less'
import {sessionObject} from '../../utils/utils'

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


  
const menuData = {menuName:"员工", menuFor: "employee",
  		subItems: [
  {name: 'bookCopyCheckPlanList', displayName:'书副本检查计划'},
  {name: 'bookCopyCheckRecordList', displayName:'书副本检查记录'},
  {name: 'bookCopyOperationRecordList', displayName:'书复制操作记录'},
  {name: 'bookCopySharingApplicationList', displayName:'书副本共享应用程序'},
  {name: 'workshopList', displayName:'车间'},
  {name: 'employeeWorkingStoreList', displayName:'员工工作的商店'},
  		
  		
  		],
};

class EmployeeBizApp extends React.PureComponent {
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
      return ['/employee/']
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
  
  getNavMenuItems = () => {
  

    const menuData = sessionObject('menuData')
    const targetApp = sessionObject('targetApp')
	const {objectId}=targetApp;
  
    return (
      <SubMenu key="firstOne" title={
        <span>
          <Icon type="profile" />
          <span>{menuData.menuName}</span>
        </span>}
      >
        {menuData.subItems.map((item)=>(<Menu.Item key={item.name}>
          <Link to={`/${menuData.menuFor}/${objectId}/list/${item.name}/${item.displayName}列表`}>{item.displayName}</Link>
        </Menu.Item>))}
       
      </SubMenu>
    )
  }
  
  getNavMenuItems2 = (objectId) => {
  
    const {menuData,targetApp} = this.props.breadcrumb;

  
    return (
      <SubMenu key="firstOne" title={
        <span>
          <Icon type="profile" />
          <span>{menuData.menuName}</span>
        </span>}
      >
        {menuData.subItems.map((item)=>(<Menu.Item>
          <Link to={`/${menuData.menuFor}/${objectId}/list/${item.name}`}>{item.displayName}</Link>
        </Menu.Item>))}
       
      </SubMenu>
    )
  }


  getBookCopyCheckPlanSearch = () => {
    const {BookCopyCheckPlanSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._employee.bookCopyCheckPlanList,
      count: state._employee.bookCopyCheckPlanCount,
      currentPage: state._employee.bookCopyCheckPlanCurrentPageNumber,
      searchFormParameters: state._employee.bookCopyCheckPlanSearchFormParameters,
      loading: state._employee.loading,
      partialList: state._employee.partialList,
      owner: { type: '_employee', id: state._employee.id, referenceName: 'planCreator', listName: 'bookCopyCheckPlanList', ref:state._employee, listDisplayName: '书副本检查计划列表' }, // this is for model namespace and
    }))(BookCopyCheckPlanSearch)
  }
  getBookCopyCheckPlanCreateForm = () => {
   	const {BookCopyCheckPlanCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._employee.bookCopyCheckPlanList,
      count: state._employee.bookCopyCheckPlanCount,
      currentPage: state._employee.bookCopyCheckPlanCurrentPageNumber,
      searchFormParameters: state._employee.bookCopyCheckPlanSearchFormParameters,
      loading: state._employee.loading,
      owner: { type: '_employee', id: state._employee.id, referenceName: 'planCreator', listName: 'bookCopyCheckPlanList', ref:state._employee, listDisplayName: '书副本检查计划列表'}, // this is for model namespace and
    }))(BookCopyCheckPlanCreateForm)
  }
  
  getBookCopyCheckPlanUpdateForm = () => {
  	const {BookCopyCheckPlanUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._employee.selectedRows,
      currentUpdateIndex: state._employee.currentUpdateIndex,
      owner: { type: '_employee', id: state._employee.id, listName: 'bookCopyCheckPlanList', ref:state._employee, listDisplayName: '书副本检查计划列表' }, // this is for model namespace and
    }))(BookCopyCheckPlanUpdateForm)
  }

  getBookCopyCheckRecordSearch = () => {
    const {BookCopyCheckRecordSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._employee.bookCopyCheckRecordList,
      count: state._employee.bookCopyCheckRecordCount,
      currentPage: state._employee.bookCopyCheckRecordCurrentPageNumber,
      searchFormParameters: state._employee.bookCopyCheckRecordSearchFormParameters,
      loading: state._employee.loading,
      partialList: state._employee.partialList,
      owner: { type: '_employee', id: state._employee.id, referenceName: 'checkProcessEmployee', listName: 'bookCopyCheckRecordList', ref:state._employee, listDisplayName: '书副本检查记录列表' }, // this is for model namespace and
    }))(BookCopyCheckRecordSearch)
  }
  getBookCopyCheckRecordCreateForm = () => {
   	const {BookCopyCheckRecordCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._employee.bookCopyCheckRecordList,
      count: state._employee.bookCopyCheckRecordCount,
      currentPage: state._employee.bookCopyCheckRecordCurrentPageNumber,
      searchFormParameters: state._employee.bookCopyCheckRecordSearchFormParameters,
      loading: state._employee.loading,
      owner: { type: '_employee', id: state._employee.id, referenceName: 'checkProcessEmployee', listName: 'bookCopyCheckRecordList', ref:state._employee, listDisplayName: '书副本检查记录列表'}, // this is for model namespace and
    }))(BookCopyCheckRecordCreateForm)
  }
  
  getBookCopyCheckRecordUpdateForm = () => {
  	const {BookCopyCheckRecordUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._employee.selectedRows,
      currentUpdateIndex: state._employee.currentUpdateIndex,
      owner: { type: '_employee', id: state._employee.id, listName: 'bookCopyCheckRecordList', ref:state._employee, listDisplayName: '书副本检查记录列表' }, // this is for model namespace and
    }))(BookCopyCheckRecordUpdateForm)
  }

  getBookCopyOperationRecordSearch = () => {
    const {BookCopyOperationRecordSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._employee.bookCopyOperationRecordList,
      count: state._employee.bookCopyOperationRecordCount,
      currentPage: state._employee.bookCopyOperationRecordCurrentPageNumber,
      searchFormParameters: state._employee.bookCopyOperationRecordSearchFormParameters,
      loading: state._employee.loading,
      partialList: state._employee.partialList,
      owner: { type: '_employee', id: state._employee.id, referenceName: 'operationEmployee', listName: 'bookCopyOperationRecordList', ref:state._employee, listDisplayName: '书复制操作记录列表' }, // this is for model namespace and
    }))(BookCopyOperationRecordSearch)
  }
  getBookCopyOperationRecordCreateForm = () => {
   	const {BookCopyOperationRecordCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._employee.bookCopyOperationRecordList,
      count: state._employee.bookCopyOperationRecordCount,
      currentPage: state._employee.bookCopyOperationRecordCurrentPageNumber,
      searchFormParameters: state._employee.bookCopyOperationRecordSearchFormParameters,
      loading: state._employee.loading,
      owner: { type: '_employee', id: state._employee.id, referenceName: 'operationEmployee', listName: 'bookCopyOperationRecordList', ref:state._employee, listDisplayName: '书复制操作记录列表'}, // this is for model namespace and
    }))(BookCopyOperationRecordCreateForm)
  }
  
  getBookCopyOperationRecordUpdateForm = () => {
  	const {BookCopyOperationRecordUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._employee.selectedRows,
      currentUpdateIndex: state._employee.currentUpdateIndex,
      owner: { type: '_employee', id: state._employee.id, listName: 'bookCopyOperationRecordList', ref:state._employee, listDisplayName: '书复制操作记录列表' }, // this is for model namespace and
    }))(BookCopyOperationRecordUpdateForm)
  }

  getBookCopySharingApplicationSearch = () => {
    const {BookCopySharingApplicationSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._employee.bookCopySharingApplicationList,
      count: state._employee.bookCopySharingApplicationCount,
      currentPage: state._employee.bookCopySharingApplicationCurrentPageNumber,
      searchFormParameters: state._employee.bookCopySharingApplicationSearchFormParameters,
      loading: state._employee.loading,
      partialList: state._employee.partialList,
      owner: { type: '_employee', id: state._employee.id, referenceName: 'employee', listName: 'bookCopySharingApplicationList', ref:state._employee, listDisplayName: '书副本共享应用程序列表' }, // this is for model namespace and
    }))(BookCopySharingApplicationSearch)
  }
  getBookCopySharingApplicationCreateForm = () => {
   	const {BookCopySharingApplicationCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._employee.bookCopySharingApplicationList,
      count: state._employee.bookCopySharingApplicationCount,
      currentPage: state._employee.bookCopySharingApplicationCurrentPageNumber,
      searchFormParameters: state._employee.bookCopySharingApplicationSearchFormParameters,
      loading: state._employee.loading,
      owner: { type: '_employee', id: state._employee.id, referenceName: 'employee', listName: 'bookCopySharingApplicationList', ref:state._employee, listDisplayName: '书副本共享应用程序列表'}, // this is for model namespace and
    }))(BookCopySharingApplicationCreateForm)
  }
  
  getBookCopySharingApplicationUpdateForm = () => {
  	const {BookCopySharingApplicationUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._employee.selectedRows,
      currentUpdateIndex: state._employee.currentUpdateIndex,
      owner: { type: '_employee', id: state._employee.id, listName: 'bookCopySharingApplicationList', ref:state._employee, listDisplayName: '书副本共享应用程序列表' }, // this is for model namespace and
    }))(BookCopySharingApplicationUpdateForm)
  }

  getWorkshopSearch = () => {
    const {WorkshopSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._employee.workshopList,
      count: state._employee.workshopCount,
      currentPage: state._employee.workshopCurrentPageNumber,
      searchFormParameters: state._employee.workshopSearchFormParameters,
      loading: state._employee.loading,
      partialList: state._employee.partialList,
      owner: { type: '_employee', id: state._employee.id, referenceName: 'publishEmployee', listName: 'workshopList', ref:state._employee, listDisplayName: '车间列表' }, // this is for model namespace and
    }))(WorkshopSearch)
  }
  getWorkshopCreateForm = () => {
   	const {WorkshopCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._employee.workshopList,
      count: state._employee.workshopCount,
      currentPage: state._employee.workshopCurrentPageNumber,
      searchFormParameters: state._employee.workshopSearchFormParameters,
      loading: state._employee.loading,
      owner: { type: '_employee', id: state._employee.id, referenceName: 'publishEmployee', listName: 'workshopList', ref:state._employee, listDisplayName: '车间列表'}, // this is for model namespace and
    }))(WorkshopCreateForm)
  }
  
  getWorkshopUpdateForm = () => {
  	const {WorkshopUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._employee.selectedRows,
      currentUpdateIndex: state._employee.currentUpdateIndex,
      owner: { type: '_employee', id: state._employee.id, listName: 'workshopList', ref:state._employee, listDisplayName: '车间列表' }, // this is for model namespace and
    }))(WorkshopUpdateForm)
  }

  getEmployeeWorkingStoreSearch = () => {
    const {EmployeeWorkingStoreSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._employee.employeeWorkingStoreList,
      count: state._employee.employeeWorkingStoreCount,
      currentPage: state._employee.employeeWorkingStoreCurrentPageNumber,
      searchFormParameters: state._employee.employeeWorkingStoreSearchFormParameters,
      loading: state._employee.loading,
      partialList: state._employee.partialList,
      owner: { type: '_employee', id: state._employee.id, referenceName: 'employee', listName: 'employeeWorkingStoreList', ref:state._employee, listDisplayName: '员工工作的商店列表' }, // this is for model namespace and
    }))(EmployeeWorkingStoreSearch)
  }
  getEmployeeWorkingStoreCreateForm = () => {
   	const {EmployeeWorkingStoreCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._employee.employeeWorkingStoreList,
      count: state._employee.employeeWorkingStoreCount,
      currentPage: state._employee.employeeWorkingStoreCurrentPageNumber,
      searchFormParameters: state._employee.employeeWorkingStoreSearchFormParameters,
      loading: state._employee.loading,
      owner: { type: '_employee', id: state._employee.id, referenceName: 'employee', listName: 'employeeWorkingStoreList', ref:state._employee, listDisplayName: '员工工作的商店列表'}, // this is for model namespace and
    }))(EmployeeWorkingStoreCreateForm)
  }
  
  getEmployeeWorkingStoreUpdateForm = () => {
  	const {EmployeeWorkingStoreUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._employee.selectedRows,
      currentUpdateIndex: state._employee.currentUpdateIndex,
      owner: { type: '_employee', id: state._employee.id, listName: 'employeeWorkingStoreList', ref:state._employee, listDisplayName: '员工工作的商店列表' }, // this is for model namespace and
    }))(EmployeeWorkingStoreUpdateForm)
  }

  getPageTitle = () => {
    // const { location } = this.props
    // const { pathname } = location
    const title = '书香社区'
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
     const { breadcrumb }  = this.props
     const {EmployeeDashboard} = GlobalComponents
     const {EmployeeEditDetail} = GlobalComponents
     const {EmployeeViewDetail} = GlobalComponents
     
     
     const targetApp = sessionObject('targetApp')
     const currentBreadcrumb =sessionObject(targetApp.id)
     
     
     // Don't show popup menu when it is been collapsed
     const menuProps = collapsed ? {} : {
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
          {currentBreadcrumb.map((item)=>{
            return (<Link  key={item.link} to={`${item.link}`} className={styles.breadcrumbLink}> &gt;{item.name}</Link>)

          })}
         </div>
          <div className={styles.right}>
          
          <AutoComplete
            className="certain-category-search"
            placeholder="请输入名称"
            optionLabelProp="value"
            
          >
            <Input
              suffix={<Icon type="search" className="certain-category-icon" />}
            />
          </AutoComplete> </div>
        </Header>
       <Layout>
         <Sider
           trigger={null}
           collapsible
           collapsed={collapsed}
           breakpoint="md"
           onCollapse={()=>this.onCollapse(collapsed)}
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
               <Link to={`/employee/${this.props.employee.id}/dashboard`}><Icon type="dashboard" /><span>仪表板</span></Link>
             </Menu.Item>


             {this.getNavMenuItems(this.props.employee.id)}
             <Menu.Item key="homepage">
               <Link to={"/home"}><Icon type="home" /><span>回到主页</span></Link>
             </Menu.Item>
           </Menu>
         </Sider>
         <Layout>
           <Content style={{ margin: '24px 24px 0', height: '100%' }}>
             <Switch>
             
               <Route path="/employee/:id/dashboard" component={EmployeeDashboard} />
               
               <Route path="/employee/:id/editDetail" component={EmployeeEditDetail} />
               <Route path="/employee/:id/viewDetail" component={EmployeeViewDetail} /> 
               

               <Route path="/employee/:id/list/bookCopyCheckPlanList" component={this.getBookCopyCheckPlanSearch()} />
               <Route path="/employee/:id/list/bookCopyCheckPlanCreateForm" component={this.getBookCopyCheckPlanCreateForm()} />
               <Route path="/employee/:id/list/bookCopyCheckPlanUpdateForm" component={this.getBookCopyCheckPlanUpdateForm()} />

               <Route path="/employee/:id/list/bookCopyCheckRecordList" component={this.getBookCopyCheckRecordSearch()} />
               <Route path="/employee/:id/list/bookCopyCheckRecordCreateForm" component={this.getBookCopyCheckRecordCreateForm()} />
               <Route path="/employee/:id/list/bookCopyCheckRecordUpdateForm" component={this.getBookCopyCheckRecordUpdateForm()} />

               <Route path="/employee/:id/list/bookCopyOperationRecordList" component={this.getBookCopyOperationRecordSearch()} />
               <Route path="/employee/:id/list/bookCopyOperationRecordCreateForm" component={this.getBookCopyOperationRecordCreateForm()} />
               <Route path="/employee/:id/list/bookCopyOperationRecordUpdateForm" component={this.getBookCopyOperationRecordUpdateForm()} />

               <Route path="/employee/:id/list/bookCopySharingApplicationList" component={this.getBookCopySharingApplicationSearch()} />
               <Route path="/employee/:id/list/bookCopySharingApplicationCreateForm" component={this.getBookCopySharingApplicationCreateForm()} />
               <Route path="/employee/:id/list/bookCopySharingApplicationUpdateForm" component={this.getBookCopySharingApplicationUpdateForm()} />

               <Route path="/employee/:id/list/workshopList" component={this.getWorkshopSearch()} />
               <Route path="/employee/:id/list/workshopCreateForm" component={this.getWorkshopCreateForm()} />
               <Route path="/employee/:id/list/workshopUpdateForm" component={this.getWorkshopUpdateForm()} />

               <Route path="/employee/:id/list/employeeWorkingStoreList" component={this.getEmployeeWorkingStoreSearch()} />
               <Route path="/employee/:id/list/employeeWorkingStoreCreateForm" component={this.getEmployeeWorkingStoreCreateForm()} />
               <Route path="/employee/:id/list/employeeWorkingStoreUpdateForm" component={this.getEmployeeWorkingStoreUpdateForm()} />
              
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
  employee: state._employee,
  ...state,
}))(EmployeeBizApp)



