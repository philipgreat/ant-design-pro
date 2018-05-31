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
  {name: 'onlineOrderRedeemHistoryList', displayName:'线上订单兑换记录'},
  {name: 'ticketPrintingHistoryList', displayName:'门票打印记录'},
  {name: 'offlineStoreOrderList', displayName:'线下门店订单'},
  		
  		
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
  



  getOnlineOrderRedeemHistorySearch = () => {
    const {OnlineOrderRedeemHistorySearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._employee.onlineOrderRedeemHistoryList,
      count: state._employee.onlineOrderRedeemHistoryCount,
      currentPage: state._employee.onlineOrderRedeemHistoryCurrentPageNumber,
      searchFormParameters: state._employee.onlineOrderRedeemHistorySearchFormParameters,
      loading: state._employee.loading,
      partialList: state._employee.partialList,
      owner: { type: '_employee', id: state._employee.id, referenceName: 'employee', listName: 'onlineOrderRedeemHistoryList', ref:state._employee, listDisplayName: '线上订单兑换记录列表' }, // this is for model namespace and
    }))(OnlineOrderRedeemHistorySearch)
  }
  getOnlineOrderRedeemHistoryCreateForm = () => {
   	const {OnlineOrderRedeemHistoryCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._employee.onlineOrderRedeemHistoryList,
      count: state._employee.onlineOrderRedeemHistoryCount,
      currentPage: state._employee.onlineOrderRedeemHistoryCurrentPageNumber,
      searchFormParameters: state._employee.onlineOrderRedeemHistorySearchFormParameters,
      loading: state._employee.loading,
      owner: { type: '_employee', id: state._employee.id, referenceName: 'employee', listName: 'onlineOrderRedeemHistoryList', ref:state._employee, listDisplayName: '线上订单兑换记录列表'}, // this is for model namespace and
    }))(OnlineOrderRedeemHistoryCreateForm)
  }
  
  getOnlineOrderRedeemHistoryUpdateForm = () => {
  	const {OnlineOrderRedeemHistoryUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._employee.selectedRows,
      currentUpdateIndex: state._employee.currentUpdateIndex,
      owner: { type: '_employee', id: state._employee.id, listName: 'onlineOrderRedeemHistoryList', ref:state._employee, listDisplayName: '线上订单兑换记录列表' }, // this is for model namespace and
    }))(OnlineOrderRedeemHistoryUpdateForm)
  }

  getTicketPrintingHistorySearch = () => {
    const {TicketPrintingHistorySearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._employee.ticketPrintingHistoryList,
      count: state._employee.ticketPrintingHistoryCount,
      currentPage: state._employee.ticketPrintingHistoryCurrentPageNumber,
      searchFormParameters: state._employee.ticketPrintingHistorySearchFormParameters,
      loading: state._employee.loading,
      partialList: state._employee.partialList,
      owner: { type: '_employee', id: state._employee.id, referenceName: 'operator', listName: 'ticketPrintingHistoryList', ref:state._employee, listDisplayName: '门票打印记录列表' }, // this is for model namespace and
    }))(TicketPrintingHistorySearch)
  }
  getTicketPrintingHistoryCreateForm = () => {
   	const {TicketPrintingHistoryCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._employee.ticketPrintingHistoryList,
      count: state._employee.ticketPrintingHistoryCount,
      currentPage: state._employee.ticketPrintingHistoryCurrentPageNumber,
      searchFormParameters: state._employee.ticketPrintingHistorySearchFormParameters,
      loading: state._employee.loading,
      owner: { type: '_employee', id: state._employee.id, referenceName: 'operator', listName: 'ticketPrintingHistoryList', ref:state._employee, listDisplayName: '门票打印记录列表'}, // this is for model namespace and
    }))(TicketPrintingHistoryCreateForm)
  }
  
  getTicketPrintingHistoryUpdateForm = () => {
  	const {TicketPrintingHistoryUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._employee.selectedRows,
      currentUpdateIndex: state._employee.currentUpdateIndex,
      owner: { type: '_employee', id: state._employee.id, listName: 'ticketPrintingHistoryList', ref:state._employee, listDisplayName: '门票打印记录列表' }, // this is for model namespace and
    }))(TicketPrintingHistoryUpdateForm)
  }

  getOfflineStoreOrderSearch = () => {
    const {OfflineStoreOrderSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._employee.offlineStoreOrderList,
      count: state._employee.offlineStoreOrderCount,
      currentPage: state._employee.offlineStoreOrderCurrentPageNumber,
      searchFormParameters: state._employee.offlineStoreOrderSearchFormParameters,
      loading: state._employee.loading,
      partialList: state._employee.partialList,
      owner: { type: '_employee', id: state._employee.id, referenceName: 'employee', listName: 'offlineStoreOrderList', ref:state._employee, listDisplayName: '线下门店订单列表' }, // this is for model namespace and
    }))(OfflineStoreOrderSearch)
  }
  getOfflineStoreOrderCreateForm = () => {
   	const {OfflineStoreOrderCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._employee.offlineStoreOrderList,
      count: state._employee.offlineStoreOrderCount,
      currentPage: state._employee.offlineStoreOrderCurrentPageNumber,
      searchFormParameters: state._employee.offlineStoreOrderSearchFormParameters,
      loading: state._employee.loading,
      owner: { type: '_employee', id: state._employee.id, referenceName: 'employee', listName: 'offlineStoreOrderList', ref:state._employee, listDisplayName: '线下门店订单列表'}, // this is for model namespace and
    }))(OfflineStoreOrderCreateForm)
  }
  
  getOfflineStoreOrderUpdateForm = () => {
  	const {OfflineStoreOrderUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._employee.selectedRows,
      currentUpdateIndex: state._employee.currentUpdateIndex,
      owner: { type: '_employee', id: state._employee.id, listName: 'offlineStoreOrderList', ref:state._employee, listDisplayName: '线下门店订单列表' }, // this is for model namespace and
    }))(OfflineStoreOrderUpdateForm)
  }

  getPageTitle = () => {
    // const { location } = this.props
    // const { pathname } = location
    const title = '濮瑞游戏'
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
     //const {EmployeeEditDetail} = GlobalComponents
     //const {EmployeeViewDetail} = GlobalComponents
     
     
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
               
               

               <Route path="/employee/:id/list/onlineOrderRedeemHistoryList" component={this.getOnlineOrderRedeemHistorySearch()} />
               <Route path="/employee/:id/list/onlineOrderRedeemHistoryCreateForm" component={this.getOnlineOrderRedeemHistoryCreateForm()} />
               <Route path="/employee/:id/list/onlineOrderRedeemHistoryUpdateForm" component={this.getOnlineOrderRedeemHistoryUpdateForm()} />

               <Route path="/employee/:id/list/ticketPrintingHistoryList" component={this.getTicketPrintingHistorySearch()} />
               <Route path="/employee/:id/list/ticketPrintingHistoryCreateForm" component={this.getTicketPrintingHistoryCreateForm()} />
               <Route path="/employee/:id/list/ticketPrintingHistoryUpdateForm" component={this.getTicketPrintingHistoryUpdateForm()} />

               <Route path="/employee/:id/list/offlineStoreOrderList" component={this.getOfflineStoreOrderSearch()} />
               <Route path="/employee/:id/list/offlineStoreOrderCreateForm" component={this.getOfflineStoreOrderCreateForm()} />
               <Route path="/employee/:id/list/offlineStoreOrderUpdateForm" component={this.getOfflineStoreOrderUpdateForm()} />
              
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



