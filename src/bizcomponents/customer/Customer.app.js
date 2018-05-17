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
import styles from './Customer.app.less'
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


  
const menuData = {menuName:"客户", menuFor: "customer",
  		subItems: [
  {name: 'bookCopyList', displayName:'书副本'},
  {name: 'borrowingHistoryList', displayName:'借贷历史'},
  {name: 'borrowingExpiredSkuList', displayName:'借款到期Sku'},
  {name: 'bookReviewList', displayName:'书评'},
  {name: 'bookReviewLikeList', displayName:'这样的书评'},
  {name: 'bookCopySharingApplicationList', displayName:'书副本共享应用程序'},
  {name: 'customerAccountList', displayName:'客户账户'},
  {name: 'workshopRegisterHistoryList', displayName:'车间登记历史'},
  {name: 'workshopReviewList', displayName:'车间检查'},
  {name: 'workshopLikeList', displayName:'车间等'},
  		
  		
  		],
};

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
      return ['/customer/']
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
  



  getBookCopySearch = () => {
    const {BookCopySearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._customer.bookCopyList,
      count: state._customer.bookCopyCount,
      currentPage: state._customer.bookCopyCurrentPageNumber,
      searchFormParameters: state._customer.bookCopySearchFormParameters,
      loading: state._customer.loading,
      partialList: state._customer.partialList,
      owner: { type: '_customer', id: state._customer.id, referenceName: 'bookCopyVendor', listName: 'bookCopyList', ref:state._customer, listDisplayName: '书副本列表' }, // this is for model namespace and
    }))(BookCopySearch)
  }
  getBookCopyCreateForm = () => {
   	const {BookCopyCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._customer.bookCopyList,
      count: state._customer.bookCopyCount,
      currentPage: state._customer.bookCopyCurrentPageNumber,
      searchFormParameters: state._customer.bookCopySearchFormParameters,
      loading: state._customer.loading,
      owner: { type: '_customer', id: state._customer.id, referenceName: 'bookCopyVendor', listName: 'bookCopyList', ref:state._customer, listDisplayName: '书副本列表'}, // this is for model namespace and
    }))(BookCopyCreateForm)
  }
  
  getBookCopyUpdateForm = () => {
  	const {BookCopyUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._customer.selectedRows,
      currentUpdateIndex: state._customer.currentUpdateIndex,
      owner: { type: '_customer', id: state._customer.id, listName: 'bookCopyList', ref:state._customer, listDisplayName: '书副本列表' }, // this is for model namespace and
    }))(BookCopyUpdateForm)
  }

  getBorrowingHistorySearch = () => {
    const {BorrowingHistorySearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._customer.borrowingHistoryList,
      count: state._customer.borrowingHistoryCount,
      currentPage: state._customer.borrowingHistoryCurrentPageNumber,
      searchFormParameters: state._customer.borrowingHistorySearchFormParameters,
      loading: state._customer.loading,
      partialList: state._customer.partialList,
      owner: { type: '_customer', id: state._customer.id, referenceName: 'borrower', listName: 'borrowingHistoryList', ref:state._customer, listDisplayName: '借贷历史列表' }, // this is for model namespace and
    }))(BorrowingHistorySearch)
  }
  getBorrowingHistoryCreateForm = () => {
   	const {BorrowingHistoryCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._customer.borrowingHistoryList,
      count: state._customer.borrowingHistoryCount,
      currentPage: state._customer.borrowingHistoryCurrentPageNumber,
      searchFormParameters: state._customer.borrowingHistorySearchFormParameters,
      loading: state._customer.loading,
      owner: { type: '_customer', id: state._customer.id, referenceName: 'borrower', listName: 'borrowingHistoryList', ref:state._customer, listDisplayName: '借贷历史列表'}, // this is for model namespace and
    }))(BorrowingHistoryCreateForm)
  }
  
  getBorrowingHistoryUpdateForm = () => {
  	const {BorrowingHistoryUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._customer.selectedRows,
      currentUpdateIndex: state._customer.currentUpdateIndex,
      owner: { type: '_customer', id: state._customer.id, listName: 'borrowingHistoryList', ref:state._customer, listDisplayName: '借贷历史列表' }, // this is for model namespace and
    }))(BorrowingHistoryUpdateForm)
  }

  getBorrowingExpiredSkuSearch = () => {
    const {BorrowingExpiredSkuSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._customer.borrowingExpiredSkuList,
      count: state._customer.borrowingExpiredSkuCount,
      currentPage: state._customer.borrowingExpiredSkuCurrentPageNumber,
      searchFormParameters: state._customer.borrowingExpiredSkuSearchFormParameters,
      loading: state._customer.loading,
      partialList: state._customer.partialList,
      owner: { type: '_customer', id: state._customer.id, referenceName: 'borrower', listName: 'borrowingExpiredSkuList', ref:state._customer, listDisplayName: '借款到期Sku列表' }, // this is for model namespace and
    }))(BorrowingExpiredSkuSearch)
  }
  getBorrowingExpiredSkuCreateForm = () => {
   	const {BorrowingExpiredSkuCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._customer.borrowingExpiredSkuList,
      count: state._customer.borrowingExpiredSkuCount,
      currentPage: state._customer.borrowingExpiredSkuCurrentPageNumber,
      searchFormParameters: state._customer.borrowingExpiredSkuSearchFormParameters,
      loading: state._customer.loading,
      owner: { type: '_customer', id: state._customer.id, referenceName: 'borrower', listName: 'borrowingExpiredSkuList', ref:state._customer, listDisplayName: '借款到期Sku列表'}, // this is for model namespace and
    }))(BorrowingExpiredSkuCreateForm)
  }
  
  getBorrowingExpiredSkuUpdateForm = () => {
  	const {BorrowingExpiredSkuUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._customer.selectedRows,
      currentUpdateIndex: state._customer.currentUpdateIndex,
      owner: { type: '_customer', id: state._customer.id, listName: 'borrowingExpiredSkuList', ref:state._customer, listDisplayName: '借款到期Sku列表' }, // this is for model namespace and
    }))(BorrowingExpiredSkuUpdateForm)
  }

  getBookReviewSearch = () => {
    const {BookReviewSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._customer.bookReviewList,
      count: state._customer.bookReviewCount,
      currentPage: state._customer.bookReviewCurrentPageNumber,
      searchFormParameters: state._customer.bookReviewSearchFormParameters,
      loading: state._customer.loading,
      partialList: state._customer.partialList,
      owner: { type: '_customer', id: state._customer.id, referenceName: 'reviewer', listName: 'bookReviewList', ref:state._customer, listDisplayName: '书评列表' }, // this is for model namespace and
    }))(BookReviewSearch)
  }
  getBookReviewCreateForm = () => {
   	const {BookReviewCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._customer.bookReviewList,
      count: state._customer.bookReviewCount,
      currentPage: state._customer.bookReviewCurrentPageNumber,
      searchFormParameters: state._customer.bookReviewSearchFormParameters,
      loading: state._customer.loading,
      owner: { type: '_customer', id: state._customer.id, referenceName: 'reviewer', listName: 'bookReviewList', ref:state._customer, listDisplayName: '书评列表'}, // this is for model namespace and
    }))(BookReviewCreateForm)
  }
  
  getBookReviewUpdateForm = () => {
  	const {BookReviewUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._customer.selectedRows,
      currentUpdateIndex: state._customer.currentUpdateIndex,
      owner: { type: '_customer', id: state._customer.id, listName: 'bookReviewList', ref:state._customer, listDisplayName: '书评列表' }, // this is for model namespace and
    }))(BookReviewUpdateForm)
  }

  getBookReviewLikeSearch = () => {
    const {BookReviewLikeSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._customer.bookReviewLikeList,
      count: state._customer.bookReviewLikeCount,
      currentPage: state._customer.bookReviewLikeCurrentPageNumber,
      searchFormParameters: state._customer.bookReviewLikeSearchFormParameters,
      loading: state._customer.loading,
      partialList: state._customer.partialList,
      owner: { type: '_customer', id: state._customer.id, referenceName: 'replier', listName: 'bookReviewLikeList', ref:state._customer, listDisplayName: '这样的书评列表' }, // this is for model namespace and
    }))(BookReviewLikeSearch)
  }
  getBookReviewLikeCreateForm = () => {
   	const {BookReviewLikeCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._customer.bookReviewLikeList,
      count: state._customer.bookReviewLikeCount,
      currentPage: state._customer.bookReviewLikeCurrentPageNumber,
      searchFormParameters: state._customer.bookReviewLikeSearchFormParameters,
      loading: state._customer.loading,
      owner: { type: '_customer', id: state._customer.id, referenceName: 'replier', listName: 'bookReviewLikeList', ref:state._customer, listDisplayName: '这样的书评列表'}, // this is for model namespace and
    }))(BookReviewLikeCreateForm)
  }
  
  getBookReviewLikeUpdateForm = () => {
  	const {BookReviewLikeUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._customer.selectedRows,
      currentUpdateIndex: state._customer.currentUpdateIndex,
      owner: { type: '_customer', id: state._customer.id, listName: 'bookReviewLikeList', ref:state._customer, listDisplayName: '这样的书评列表' }, // this is for model namespace and
    }))(BookReviewLikeUpdateForm)
  }

  getBookCopySharingApplicationSearch = () => {
    const {BookCopySharingApplicationSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._customer.bookCopySharingApplicationList,
      count: state._customer.bookCopySharingApplicationCount,
      currentPage: state._customer.bookCopySharingApplicationCurrentPageNumber,
      searchFormParameters: state._customer.bookCopySharingApplicationSearchFormParameters,
      loading: state._customer.loading,
      partialList: state._customer.partialList,
      owner: { type: '_customer', id: state._customer.id, referenceName: 'customer', listName: 'bookCopySharingApplicationList', ref:state._customer, listDisplayName: '书副本共享应用程序列表' }, // this is for model namespace and
    }))(BookCopySharingApplicationSearch)
  }
  getBookCopySharingApplicationCreateForm = () => {
   	const {BookCopySharingApplicationCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._customer.bookCopySharingApplicationList,
      count: state._customer.bookCopySharingApplicationCount,
      currentPage: state._customer.bookCopySharingApplicationCurrentPageNumber,
      searchFormParameters: state._customer.bookCopySharingApplicationSearchFormParameters,
      loading: state._customer.loading,
      owner: { type: '_customer', id: state._customer.id, referenceName: 'customer', listName: 'bookCopySharingApplicationList', ref:state._customer, listDisplayName: '书副本共享应用程序列表'}, // this is for model namespace and
    }))(BookCopySharingApplicationCreateForm)
  }
  
  getBookCopySharingApplicationUpdateForm = () => {
  	const {BookCopySharingApplicationUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._customer.selectedRows,
      currentUpdateIndex: state._customer.currentUpdateIndex,
      owner: { type: '_customer', id: state._customer.id, listName: 'bookCopySharingApplicationList', ref:state._customer, listDisplayName: '书副本共享应用程序列表' }, // this is for model namespace and
    }))(BookCopySharingApplicationUpdateForm)
  }

  getCustomerAccountSearch = () => {
    const {CustomerAccountSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._customer.customerAccountList,
      count: state._customer.customerAccountCount,
      currentPage: state._customer.customerAccountCurrentPageNumber,
      searchFormParameters: state._customer.customerAccountSearchFormParameters,
      loading: state._customer.loading,
      partialList: state._customer.partialList,
      owner: { type: '_customer', id: state._customer.id, referenceName: 'customer', listName: 'customerAccountList', ref:state._customer, listDisplayName: '客户账户列表' }, // this is for model namespace and
    }))(CustomerAccountSearch)
  }
  getCustomerAccountCreateForm = () => {
   	const {CustomerAccountCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._customer.customerAccountList,
      count: state._customer.customerAccountCount,
      currentPage: state._customer.customerAccountCurrentPageNumber,
      searchFormParameters: state._customer.customerAccountSearchFormParameters,
      loading: state._customer.loading,
      owner: { type: '_customer', id: state._customer.id, referenceName: 'customer', listName: 'customerAccountList', ref:state._customer, listDisplayName: '客户账户列表'}, // this is for model namespace and
    }))(CustomerAccountCreateForm)
  }
  
  getCustomerAccountUpdateForm = () => {
  	const {CustomerAccountUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._customer.selectedRows,
      currentUpdateIndex: state._customer.currentUpdateIndex,
      owner: { type: '_customer', id: state._customer.id, listName: 'customerAccountList', ref:state._customer, listDisplayName: '客户账户列表' }, // this is for model namespace and
    }))(CustomerAccountUpdateForm)
  }

  getWorkshopRegisterHistorySearch = () => {
    const {WorkshopRegisterHistorySearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._customer.workshopRegisterHistoryList,
      count: state._customer.workshopRegisterHistoryCount,
      currentPage: state._customer.workshopRegisterHistoryCurrentPageNumber,
      searchFormParameters: state._customer.workshopRegisterHistorySearchFormParameters,
      loading: state._customer.loading,
      partialList: state._customer.partialList,
      owner: { type: '_customer', id: state._customer.id, referenceName: 'registerMember', listName: 'workshopRegisterHistoryList', ref:state._customer, listDisplayName: '车间登记历史列表' }, // this is for model namespace and
    }))(WorkshopRegisterHistorySearch)
  }
  getWorkshopRegisterHistoryCreateForm = () => {
   	const {WorkshopRegisterHistoryCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._customer.workshopRegisterHistoryList,
      count: state._customer.workshopRegisterHistoryCount,
      currentPage: state._customer.workshopRegisterHistoryCurrentPageNumber,
      searchFormParameters: state._customer.workshopRegisterHistorySearchFormParameters,
      loading: state._customer.loading,
      owner: { type: '_customer', id: state._customer.id, referenceName: 'registerMember', listName: 'workshopRegisterHistoryList', ref:state._customer, listDisplayName: '车间登记历史列表'}, // this is for model namespace and
    }))(WorkshopRegisterHistoryCreateForm)
  }
  
  getWorkshopRegisterHistoryUpdateForm = () => {
  	const {WorkshopRegisterHistoryUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._customer.selectedRows,
      currentUpdateIndex: state._customer.currentUpdateIndex,
      owner: { type: '_customer', id: state._customer.id, listName: 'workshopRegisterHistoryList', ref:state._customer, listDisplayName: '车间登记历史列表' }, // this is for model namespace and
    }))(WorkshopRegisterHistoryUpdateForm)
  }

  getWorkshopReviewSearch = () => {
    const {WorkshopReviewSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._customer.workshopReviewList,
      count: state._customer.workshopReviewCount,
      currentPage: state._customer.workshopReviewCurrentPageNumber,
      searchFormParameters: state._customer.workshopReviewSearchFormParameters,
      loading: state._customer.loading,
      partialList: state._customer.partialList,
      owner: { type: '_customer', id: state._customer.id, referenceName: 'reviewer', listName: 'workshopReviewList', ref:state._customer, listDisplayName: '车间检查列表' }, // this is for model namespace and
    }))(WorkshopReviewSearch)
  }
  getWorkshopReviewCreateForm = () => {
   	const {WorkshopReviewCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._customer.workshopReviewList,
      count: state._customer.workshopReviewCount,
      currentPage: state._customer.workshopReviewCurrentPageNumber,
      searchFormParameters: state._customer.workshopReviewSearchFormParameters,
      loading: state._customer.loading,
      owner: { type: '_customer', id: state._customer.id, referenceName: 'reviewer', listName: 'workshopReviewList', ref:state._customer, listDisplayName: '车间检查列表'}, // this is for model namespace and
    }))(WorkshopReviewCreateForm)
  }
  
  getWorkshopReviewUpdateForm = () => {
  	const {WorkshopReviewUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._customer.selectedRows,
      currentUpdateIndex: state._customer.currentUpdateIndex,
      owner: { type: '_customer', id: state._customer.id, listName: 'workshopReviewList', ref:state._customer, listDisplayName: '车间检查列表' }, // this is for model namespace and
    }))(WorkshopReviewUpdateForm)
  }

  getWorkshopLikeSearch = () => {
    const {WorkshopLikeSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._customer.workshopLikeList,
      count: state._customer.workshopLikeCount,
      currentPage: state._customer.workshopLikeCurrentPageNumber,
      searchFormParameters: state._customer.workshopLikeSearchFormParameters,
      loading: state._customer.loading,
      partialList: state._customer.partialList,
      owner: { type: '_customer', id: state._customer.id, referenceName: 'replier', listName: 'workshopLikeList', ref:state._customer, listDisplayName: '车间等列表' }, // this is for model namespace and
    }))(WorkshopLikeSearch)
  }
  getWorkshopLikeCreateForm = () => {
   	const {WorkshopLikeCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._customer.workshopLikeList,
      count: state._customer.workshopLikeCount,
      currentPage: state._customer.workshopLikeCurrentPageNumber,
      searchFormParameters: state._customer.workshopLikeSearchFormParameters,
      loading: state._customer.loading,
      owner: { type: '_customer', id: state._customer.id, referenceName: 'replier', listName: 'workshopLikeList', ref:state._customer, listDisplayName: '车间等列表'}, // this is for model namespace and
    }))(WorkshopLikeCreateForm)
  }
  
  getWorkshopLikeUpdateForm = () => {
  	const {WorkshopLikeUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._customer.selectedRows,
      currentUpdateIndex: state._customer.currentUpdateIndex,
      owner: { type: '_customer', id: state._customer.id, listName: 'workshopLikeList', ref:state._customer, listDisplayName: '车间等列表' }, // this is for model namespace and
    }))(WorkshopLikeUpdateForm)
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
     const {CustomerDashboard} = GlobalComponents
     //const {CustomerEditDetail} = GlobalComponents
     //const {CustomerViewDetail} = GlobalComponents
     
     
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
               <Link to={`/customer/${this.props.customer.id}/dashboard`}><Icon type="dashboard" /><span>仪表板</span></Link>
             </Menu.Item>


             {this.getNavMenuItems(this.props.customer.id)}
             <Menu.Item key="homepage">
               <Link to={"/home"}><Icon type="home" /><span>回到主页</span></Link>
             </Menu.Item>
           </Menu>
         </Sider>
         <Layout>
           <Content style={{ margin: '24px 24px 0', height: '100%' }}>
             <Switch>
             
               <Route path="/customer/:id/dashboard" component={CustomerDashboard} />
               
               

               <Route path="/customer/:id/list/bookCopyList" component={this.getBookCopySearch()} />
               <Route path="/customer/:id/list/bookCopyCreateForm" component={this.getBookCopyCreateForm()} />
               <Route path="/customer/:id/list/bookCopyUpdateForm" component={this.getBookCopyUpdateForm()} />

               <Route path="/customer/:id/list/borrowingHistoryList" component={this.getBorrowingHistorySearch()} />
               <Route path="/customer/:id/list/borrowingHistoryCreateForm" component={this.getBorrowingHistoryCreateForm()} />
               <Route path="/customer/:id/list/borrowingHistoryUpdateForm" component={this.getBorrowingHistoryUpdateForm()} />

               <Route path="/customer/:id/list/borrowingExpiredSkuList" component={this.getBorrowingExpiredSkuSearch()} />
               <Route path="/customer/:id/list/borrowingExpiredSkuCreateForm" component={this.getBorrowingExpiredSkuCreateForm()} />
               <Route path="/customer/:id/list/borrowingExpiredSkuUpdateForm" component={this.getBorrowingExpiredSkuUpdateForm()} />

               <Route path="/customer/:id/list/bookReviewList" component={this.getBookReviewSearch()} />
               <Route path="/customer/:id/list/bookReviewCreateForm" component={this.getBookReviewCreateForm()} />
               <Route path="/customer/:id/list/bookReviewUpdateForm" component={this.getBookReviewUpdateForm()} />

               <Route path="/customer/:id/list/bookReviewLikeList" component={this.getBookReviewLikeSearch()} />
               <Route path="/customer/:id/list/bookReviewLikeCreateForm" component={this.getBookReviewLikeCreateForm()} />
               <Route path="/customer/:id/list/bookReviewLikeUpdateForm" component={this.getBookReviewLikeUpdateForm()} />

               <Route path="/customer/:id/list/bookCopySharingApplicationList" component={this.getBookCopySharingApplicationSearch()} />
               <Route path="/customer/:id/list/bookCopySharingApplicationCreateForm" component={this.getBookCopySharingApplicationCreateForm()} />
               <Route path="/customer/:id/list/bookCopySharingApplicationUpdateForm" component={this.getBookCopySharingApplicationUpdateForm()} />

               <Route path="/customer/:id/list/customerAccountList" component={this.getCustomerAccountSearch()} />
               <Route path="/customer/:id/list/customerAccountCreateForm" component={this.getCustomerAccountCreateForm()} />
               <Route path="/customer/:id/list/customerAccountUpdateForm" component={this.getCustomerAccountUpdateForm()} />

               <Route path="/customer/:id/list/workshopRegisterHistoryList" component={this.getWorkshopRegisterHistorySearch()} />
               <Route path="/customer/:id/list/workshopRegisterHistoryCreateForm" component={this.getWorkshopRegisterHistoryCreateForm()} />
               <Route path="/customer/:id/list/workshopRegisterHistoryUpdateForm" component={this.getWorkshopRegisterHistoryUpdateForm()} />

               <Route path="/customer/:id/list/workshopReviewList" component={this.getWorkshopReviewSearch()} />
               <Route path="/customer/:id/list/workshopReviewCreateForm" component={this.getWorkshopReviewCreateForm()} />
               <Route path="/customer/:id/list/workshopReviewUpdateForm" component={this.getWorkshopReviewUpdateForm()} />

               <Route path="/customer/:id/list/workshopLikeList" component={this.getWorkshopLikeSearch()} />
               <Route path="/customer/:id/list/workshopLikeCreateForm" component={this.getWorkshopLikeCreateForm()} />
               <Route path="/customer/:id/list/workshopLikeUpdateForm" component={this.getWorkshopLikeUpdateForm()} />
              
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
  customer: state._customer,
  ...state,
}))(CustomerBizApp)



