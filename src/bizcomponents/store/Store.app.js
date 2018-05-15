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
import styles from './Store.app.less'
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


  
const menuData = {menuName:"商店", menuFor: "store",
  		subItems: [
  {name: 'bookCopyList', displayName:'书副本'},
  {name: 'bookCopyCheckPlanList', displayName:'书副本检查计划'},
  {name: 'bookCopyOperationRecordList', displayName:'书复制操作记录'},
  {name: 'borrowingHistoryListAsLendingStore', displayName:'借贷历史'},
  {name: 'borrowingHistoryListAsReturnStore', displayName:'借贷历史'},
  {name: 'borrowingExpiredSkuListAsLendingStore', displayName:'借款到期Sku'},
  {name: 'borrowingExpiredSkuListAsReturnStore', displayName:'借款到期Sku'},
  {name: 'bookCopySharingApplicationList', displayName:'书副本共享应用程序'},
  {name: 'storeAccountList', displayName:'存储账户'},
  {name: 'workshopList', displayName:'车间'},
  {name: 'employeeWorkingStoreList', displayName:'员工工作的商店'},
  		
  		
  		],
};

class StoreBizApp extends React.PureComponent {
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
      return ['/store/']
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


  getBookCopySearch = () => {
    const {BookCopySearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._store.bookCopyList,
      count: state._store.bookCopyCount,
      currentPage: state._store.bookCopyCurrentPageNumber,
      searchFormParameters: state._store.bookCopySearchFormParameters,
      loading: state._store.loading,
      partialList: state._store.partialList,
      owner: { type: '_store', id: state._store.id, referenceName: 'locationStore', listName: 'bookCopyList', ref:state._store, listDisplayName: '书副本列表' }, // this is for model namespace and
    }))(BookCopySearch)
  }
  getBookCopyCreateForm = () => {
   	const {BookCopyCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._store.bookCopyList,
      count: state._store.bookCopyCount,
      currentPage: state._store.bookCopyCurrentPageNumber,
      searchFormParameters: state._store.bookCopySearchFormParameters,
      loading: state._store.loading,
      owner: { type: '_store', id: state._store.id, referenceName: 'locationStore', listName: 'bookCopyList', ref:state._store, listDisplayName: '书副本列表'}, // this is for model namespace and
    }))(BookCopyCreateForm)
  }
  
  getBookCopyUpdateForm = () => {
  	const {BookCopyUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._store.selectedRows,
      currentUpdateIndex: state._store.currentUpdateIndex,
      owner: { type: '_store', id: state._store.id, listName: 'bookCopyList', ref:state._store, listDisplayName: '书副本列表' }, // this is for model namespace and
    }))(BookCopyUpdateForm)
  }

  getBookCopyCheckPlanSearch = () => {
    const {BookCopyCheckPlanSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._store.bookCopyCheckPlanList,
      count: state._store.bookCopyCheckPlanCount,
      currentPage: state._store.bookCopyCheckPlanCurrentPageNumber,
      searchFormParameters: state._store.bookCopyCheckPlanSearchFormParameters,
      loading: state._store.loading,
      partialList: state._store.partialList,
      owner: { type: '_store', id: state._store.id, referenceName: 'checkStore', listName: 'bookCopyCheckPlanList', ref:state._store, listDisplayName: '书副本检查计划列表' }, // this is for model namespace and
    }))(BookCopyCheckPlanSearch)
  }
  getBookCopyCheckPlanCreateForm = () => {
   	const {BookCopyCheckPlanCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._store.bookCopyCheckPlanList,
      count: state._store.bookCopyCheckPlanCount,
      currentPage: state._store.bookCopyCheckPlanCurrentPageNumber,
      searchFormParameters: state._store.bookCopyCheckPlanSearchFormParameters,
      loading: state._store.loading,
      owner: { type: '_store', id: state._store.id, referenceName: 'checkStore', listName: 'bookCopyCheckPlanList', ref:state._store, listDisplayName: '书副本检查计划列表'}, // this is for model namespace and
    }))(BookCopyCheckPlanCreateForm)
  }
  
  getBookCopyCheckPlanUpdateForm = () => {
  	const {BookCopyCheckPlanUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._store.selectedRows,
      currentUpdateIndex: state._store.currentUpdateIndex,
      owner: { type: '_store', id: state._store.id, listName: 'bookCopyCheckPlanList', ref:state._store, listDisplayName: '书副本检查计划列表' }, // this is for model namespace and
    }))(BookCopyCheckPlanUpdateForm)
  }

  getBookCopyOperationRecordSearch = () => {
    const {BookCopyOperationRecordSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._store.bookCopyOperationRecordList,
      count: state._store.bookCopyOperationRecordCount,
      currentPage: state._store.bookCopyOperationRecordCurrentPageNumber,
      searchFormParameters: state._store.bookCopyOperationRecordSearchFormParameters,
      loading: state._store.loading,
      partialList: state._store.partialList,
      owner: { type: '_store', id: state._store.id, referenceName: 'operateStore', listName: 'bookCopyOperationRecordList', ref:state._store, listDisplayName: '书复制操作记录列表' }, // this is for model namespace and
    }))(BookCopyOperationRecordSearch)
  }
  getBookCopyOperationRecordCreateForm = () => {
   	const {BookCopyOperationRecordCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._store.bookCopyOperationRecordList,
      count: state._store.bookCopyOperationRecordCount,
      currentPage: state._store.bookCopyOperationRecordCurrentPageNumber,
      searchFormParameters: state._store.bookCopyOperationRecordSearchFormParameters,
      loading: state._store.loading,
      owner: { type: '_store', id: state._store.id, referenceName: 'operateStore', listName: 'bookCopyOperationRecordList', ref:state._store, listDisplayName: '书复制操作记录列表'}, // this is for model namespace and
    }))(BookCopyOperationRecordCreateForm)
  }
  
  getBookCopyOperationRecordUpdateForm = () => {
  	const {BookCopyOperationRecordUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._store.selectedRows,
      currentUpdateIndex: state._store.currentUpdateIndex,
      owner: { type: '_store', id: state._store.id, listName: 'bookCopyOperationRecordList', ref:state._store, listDisplayName: '书复制操作记录列表' }, // this is for model namespace and
    }))(BookCopyOperationRecordUpdateForm)
  }

  getBorrowingHistoryAsLendingStoreSearch = () => {
    const {BorrowingHistorySearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._store.borrowingHistoryListAsLendingStore,
      count: state._store.borrowingHistoryAsLendingStoreCount,
      currentPage: state._store.borrowingHistoryAsLendingStoreCurrentPageNumber,
      searchFormParameters: state._store.borrowingHistoryAsLendingStoreSearchFormParameters,
      loading: state._store.loading,
      partialList: state._store.partialList,
      owner: { type: '_store', id: state._store.id, referenceName: 'lendingStore', listName: 'borrowingHistoryListAsLendingStore', ref:state._store, listDisplayName: '借贷历史列表' }, // this is for model namespace and
    }))(BorrowingHistorySearch)
  }
  getBorrowingHistoryAsLendingStoreCreateForm = () => {
   	const {BorrowingHistoryCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._store.borrowingHistoryListAsLendingStore,
      count: state._store.borrowingHistoryAsLendingStoreCount,
      currentPage: state._store.borrowingHistoryAsLendingStoreCurrentPageNumber,
      searchFormParameters: state._store.borrowingHistoryAsLendingStoreSearchFormParameters,
      loading: state._store.loading,
      owner: { type: '_store', id: state._store.id, referenceName: 'lendingStore', listName: 'borrowingHistoryListAsLendingStore', ref:state._store, listDisplayName: '借贷历史列表'}, // this is for model namespace and
    }))(BorrowingHistoryCreateForm)
  }
  
  getBorrowingHistoryAsLendingStoreUpdateForm = () => {
  	const {BorrowingHistoryUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._store.selectedRows,
      currentUpdateIndex: state._store.currentUpdateIndex,
      owner: { type: '_store', id: state._store.id, listName: 'borrowingHistoryListAsLendingStore', ref:state._store, listDisplayName: '借贷历史列表' }, // this is for model namespace and
    }))(BorrowingHistoryUpdateForm)
  }

  getBorrowingHistoryAsReturnStoreSearch = () => {
    const {BorrowingHistorySearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._store.borrowingHistoryListAsReturnStore,
      count: state._store.borrowingHistoryAsReturnStoreCount,
      currentPage: state._store.borrowingHistoryAsReturnStoreCurrentPageNumber,
      searchFormParameters: state._store.borrowingHistoryAsReturnStoreSearchFormParameters,
      loading: state._store.loading,
      partialList: state._store.partialList,
      owner: { type: '_store', id: state._store.id, referenceName: 'returnStore', listName: 'borrowingHistoryListAsReturnStore', ref:state._store, listDisplayName: '借贷历史列表' }, // this is for model namespace and
    }))(BorrowingHistorySearch)
  }
  getBorrowingHistoryAsReturnStoreCreateForm = () => {
   	const {BorrowingHistoryCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._store.borrowingHistoryListAsReturnStore,
      count: state._store.borrowingHistoryAsReturnStoreCount,
      currentPage: state._store.borrowingHistoryAsReturnStoreCurrentPageNumber,
      searchFormParameters: state._store.borrowingHistoryAsReturnStoreSearchFormParameters,
      loading: state._store.loading,
      owner: { type: '_store', id: state._store.id, referenceName: 'returnStore', listName: 'borrowingHistoryListAsReturnStore', ref:state._store, listDisplayName: '借贷历史列表'}, // this is for model namespace and
    }))(BorrowingHistoryCreateForm)
  }
  
  getBorrowingHistoryAsReturnStoreUpdateForm = () => {
  	const {BorrowingHistoryUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._store.selectedRows,
      currentUpdateIndex: state._store.currentUpdateIndex,
      owner: { type: '_store', id: state._store.id, listName: 'borrowingHistoryListAsReturnStore', ref:state._store, listDisplayName: '借贷历史列表' }, // this is for model namespace and
    }))(BorrowingHistoryUpdateForm)
  }

  getBorrowingExpiredSkuAsLendingStoreSearch = () => {
    const {BorrowingExpiredSkuSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._store.borrowingExpiredSkuListAsLendingStore,
      count: state._store.borrowingExpiredSkuAsLendingStoreCount,
      currentPage: state._store.borrowingExpiredSkuAsLendingStoreCurrentPageNumber,
      searchFormParameters: state._store.borrowingExpiredSkuAsLendingStoreSearchFormParameters,
      loading: state._store.loading,
      partialList: state._store.partialList,
      owner: { type: '_store', id: state._store.id, referenceName: 'lendingStore', listName: 'borrowingExpiredSkuListAsLendingStore', ref:state._store, listDisplayName: '借款到期Sku列表' }, // this is for model namespace and
    }))(BorrowingExpiredSkuSearch)
  }
  getBorrowingExpiredSkuAsLendingStoreCreateForm = () => {
   	const {BorrowingExpiredSkuCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._store.borrowingExpiredSkuListAsLendingStore,
      count: state._store.borrowingExpiredSkuAsLendingStoreCount,
      currentPage: state._store.borrowingExpiredSkuAsLendingStoreCurrentPageNumber,
      searchFormParameters: state._store.borrowingExpiredSkuAsLendingStoreSearchFormParameters,
      loading: state._store.loading,
      owner: { type: '_store', id: state._store.id, referenceName: 'lendingStore', listName: 'borrowingExpiredSkuListAsLendingStore', ref:state._store, listDisplayName: '借款到期Sku列表'}, // this is for model namespace and
    }))(BorrowingExpiredSkuCreateForm)
  }
  
  getBorrowingExpiredSkuAsLendingStoreUpdateForm = () => {
  	const {BorrowingExpiredSkuUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._store.selectedRows,
      currentUpdateIndex: state._store.currentUpdateIndex,
      owner: { type: '_store', id: state._store.id, listName: 'borrowingExpiredSkuListAsLendingStore', ref:state._store, listDisplayName: '借款到期Sku列表' }, // this is for model namespace and
    }))(BorrowingExpiredSkuUpdateForm)
  }

  getBorrowingExpiredSkuAsReturnStoreSearch = () => {
    const {BorrowingExpiredSkuSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._store.borrowingExpiredSkuListAsReturnStore,
      count: state._store.borrowingExpiredSkuAsReturnStoreCount,
      currentPage: state._store.borrowingExpiredSkuAsReturnStoreCurrentPageNumber,
      searchFormParameters: state._store.borrowingExpiredSkuAsReturnStoreSearchFormParameters,
      loading: state._store.loading,
      partialList: state._store.partialList,
      owner: { type: '_store', id: state._store.id, referenceName: 'returnStore', listName: 'borrowingExpiredSkuListAsReturnStore', ref:state._store, listDisplayName: '借款到期Sku列表' }, // this is for model namespace and
    }))(BorrowingExpiredSkuSearch)
  }
  getBorrowingExpiredSkuAsReturnStoreCreateForm = () => {
   	const {BorrowingExpiredSkuCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._store.borrowingExpiredSkuListAsReturnStore,
      count: state._store.borrowingExpiredSkuAsReturnStoreCount,
      currentPage: state._store.borrowingExpiredSkuAsReturnStoreCurrentPageNumber,
      searchFormParameters: state._store.borrowingExpiredSkuAsReturnStoreSearchFormParameters,
      loading: state._store.loading,
      owner: { type: '_store', id: state._store.id, referenceName: 'returnStore', listName: 'borrowingExpiredSkuListAsReturnStore', ref:state._store, listDisplayName: '借款到期Sku列表'}, // this is for model namespace and
    }))(BorrowingExpiredSkuCreateForm)
  }
  
  getBorrowingExpiredSkuAsReturnStoreUpdateForm = () => {
  	const {BorrowingExpiredSkuUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._store.selectedRows,
      currentUpdateIndex: state._store.currentUpdateIndex,
      owner: { type: '_store', id: state._store.id, listName: 'borrowingExpiredSkuListAsReturnStore', ref:state._store, listDisplayName: '借款到期Sku列表' }, // this is for model namespace and
    }))(BorrowingExpiredSkuUpdateForm)
  }

  getBookCopySharingApplicationSearch = () => {
    const {BookCopySharingApplicationSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._store.bookCopySharingApplicationList,
      count: state._store.bookCopySharingApplicationCount,
      currentPage: state._store.bookCopySharingApplicationCurrentPageNumber,
      searchFormParameters: state._store.bookCopySharingApplicationSearchFormParameters,
      loading: state._store.loading,
      partialList: state._store.partialList,
      owner: { type: '_store', id: state._store.id, referenceName: 'destinationStore', listName: 'bookCopySharingApplicationList', ref:state._store, listDisplayName: '书副本共享应用程序列表' }, // this is for model namespace and
    }))(BookCopySharingApplicationSearch)
  }
  getBookCopySharingApplicationCreateForm = () => {
   	const {BookCopySharingApplicationCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._store.bookCopySharingApplicationList,
      count: state._store.bookCopySharingApplicationCount,
      currentPage: state._store.bookCopySharingApplicationCurrentPageNumber,
      searchFormParameters: state._store.bookCopySharingApplicationSearchFormParameters,
      loading: state._store.loading,
      owner: { type: '_store', id: state._store.id, referenceName: 'destinationStore', listName: 'bookCopySharingApplicationList', ref:state._store, listDisplayName: '书副本共享应用程序列表'}, // this is for model namespace and
    }))(BookCopySharingApplicationCreateForm)
  }
  
  getBookCopySharingApplicationUpdateForm = () => {
  	const {BookCopySharingApplicationUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._store.selectedRows,
      currentUpdateIndex: state._store.currentUpdateIndex,
      owner: { type: '_store', id: state._store.id, listName: 'bookCopySharingApplicationList', ref:state._store, listDisplayName: '书副本共享应用程序列表' }, // this is for model namespace and
    }))(BookCopySharingApplicationUpdateForm)
  }

  getStoreAccountSearch = () => {
    const {StoreAccountSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._store.storeAccountList,
      count: state._store.storeAccountCount,
      currentPage: state._store.storeAccountCurrentPageNumber,
      searchFormParameters: state._store.storeAccountSearchFormParameters,
      loading: state._store.loading,
      partialList: state._store.partialList,
      owner: { type: '_store', id: state._store.id, referenceName: 'store', listName: 'storeAccountList', ref:state._store, listDisplayName: '存储账户列表' }, // this is for model namespace and
    }))(StoreAccountSearch)
  }
  getStoreAccountCreateForm = () => {
   	const {StoreAccountCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._store.storeAccountList,
      count: state._store.storeAccountCount,
      currentPage: state._store.storeAccountCurrentPageNumber,
      searchFormParameters: state._store.storeAccountSearchFormParameters,
      loading: state._store.loading,
      owner: { type: '_store', id: state._store.id, referenceName: 'store', listName: 'storeAccountList', ref:state._store, listDisplayName: '存储账户列表'}, // this is for model namespace and
    }))(StoreAccountCreateForm)
  }
  
  getStoreAccountUpdateForm = () => {
  	const {StoreAccountUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._store.selectedRows,
      currentUpdateIndex: state._store.currentUpdateIndex,
      owner: { type: '_store', id: state._store.id, listName: 'storeAccountList', ref:state._store, listDisplayName: '存储账户列表' }, // this is for model namespace and
    }))(StoreAccountUpdateForm)
  }

  getWorkshopSearch = () => {
    const {WorkshopSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._store.workshopList,
      count: state._store.workshopCount,
      currentPage: state._store.workshopCurrentPageNumber,
      searchFormParameters: state._store.workshopSearchFormParameters,
      loading: state._store.loading,
      partialList: state._store.partialList,
      owner: { type: '_store', id: state._store.id, referenceName: 'publishStore', listName: 'workshopList', ref:state._store, listDisplayName: '车间列表' }, // this is for model namespace and
    }))(WorkshopSearch)
  }
  getWorkshopCreateForm = () => {
   	const {WorkshopCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._store.workshopList,
      count: state._store.workshopCount,
      currentPage: state._store.workshopCurrentPageNumber,
      searchFormParameters: state._store.workshopSearchFormParameters,
      loading: state._store.loading,
      owner: { type: '_store', id: state._store.id, referenceName: 'publishStore', listName: 'workshopList', ref:state._store, listDisplayName: '车间列表'}, // this is for model namespace and
    }))(WorkshopCreateForm)
  }
  
  getWorkshopUpdateForm = () => {
  	const {WorkshopUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._store.selectedRows,
      currentUpdateIndex: state._store.currentUpdateIndex,
      owner: { type: '_store', id: state._store.id, listName: 'workshopList', ref:state._store, listDisplayName: '车间列表' }, // this is for model namespace and
    }))(WorkshopUpdateForm)
  }

  getEmployeeWorkingStoreSearch = () => {
    const {EmployeeWorkingStoreSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._store.employeeWorkingStoreList,
      count: state._store.employeeWorkingStoreCount,
      currentPage: state._store.employeeWorkingStoreCurrentPageNumber,
      searchFormParameters: state._store.employeeWorkingStoreSearchFormParameters,
      loading: state._store.loading,
      partialList: state._store.partialList,
      owner: { type: '_store', id: state._store.id, referenceName: 'store', listName: 'employeeWorkingStoreList', ref:state._store, listDisplayName: '员工工作的商店列表' }, // this is for model namespace and
    }))(EmployeeWorkingStoreSearch)
  }
  getEmployeeWorkingStoreCreateForm = () => {
   	const {EmployeeWorkingStoreCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._store.employeeWorkingStoreList,
      count: state._store.employeeWorkingStoreCount,
      currentPage: state._store.employeeWorkingStoreCurrentPageNumber,
      searchFormParameters: state._store.employeeWorkingStoreSearchFormParameters,
      loading: state._store.loading,
      owner: { type: '_store', id: state._store.id, referenceName: 'store', listName: 'employeeWorkingStoreList', ref:state._store, listDisplayName: '员工工作的商店列表'}, // this is for model namespace and
    }))(EmployeeWorkingStoreCreateForm)
  }
  
  getEmployeeWorkingStoreUpdateForm = () => {
  	const {EmployeeWorkingStoreUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._store.selectedRows,
      currentUpdateIndex: state._store.currentUpdateIndex,
      owner: { type: '_store', id: state._store.id, listName: 'employeeWorkingStoreList', ref:state._store, listDisplayName: '员工工作的商店列表' }, // this is for model namespace and
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
     const {StoreDashboard} = GlobalComponents
     const {StoreEditDetail} = GlobalComponents
     const {StoreViewDetail} = GlobalComponents
     
     
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
               <Link to={`/store/${this.props.store.id}/dashboard`}><Icon type="dashboard" /><span>仪表板</span></Link>
             </Menu.Item>


             {this.getNavMenuItems(this.props.store.id)}
             <Menu.Item key="homepage">
               <Link to={"/home"}><Icon type="home" /><span>回到主页</span></Link>
             </Menu.Item>
           </Menu>
         </Sider>
         <Layout>
           <Content style={{ margin: '24px 24px 0', height: '100%' }}>
             <Switch>
             
               <Route path="/store/:id/dashboard" component={StoreDashboard} />
               
               <Route path="/store/:id/editDetail" component={StoreEditDetail} />
               <Route path="/store/:id/viewDetail" component={StoreViewDetail} /> 
               

               <Route path="/store/:id/list/bookCopyList" component={this.getBookCopySearch()} />
               <Route path="/store/:id/list/bookCopyCreateForm" component={this.getBookCopyCreateForm()} />
               <Route path="/store/:id/list/bookCopyUpdateForm" component={this.getBookCopyUpdateForm()} />

               <Route path="/store/:id/list/bookCopyCheckPlanList" component={this.getBookCopyCheckPlanSearch()} />
               <Route path="/store/:id/list/bookCopyCheckPlanCreateForm" component={this.getBookCopyCheckPlanCreateForm()} />
               <Route path="/store/:id/list/bookCopyCheckPlanUpdateForm" component={this.getBookCopyCheckPlanUpdateForm()} />

               <Route path="/store/:id/list/bookCopyOperationRecordList" component={this.getBookCopyOperationRecordSearch()} />
               <Route path="/store/:id/list/bookCopyOperationRecordCreateForm" component={this.getBookCopyOperationRecordCreateForm()} />
               <Route path="/store/:id/list/bookCopyOperationRecordUpdateForm" component={this.getBookCopyOperationRecordUpdateForm()} />

               <Route path="/store/:id/list/borrowingHistoryListAsLendingStore" component={this.getBorrowingHistoryAsLendingStoreSearch()} />
               <Route path="/store/:id/list/borrowingHistoryAsLendingStoreCreateForm" component={this.getBorrowingHistoryAsLendingStoreCreateForm()} />
               <Route path="/store/:id/list/borrowingHistoryAsLendingStoreUpdateForm" component={this.getBorrowingHistoryAsLendingStoreUpdateForm()} />

               <Route path="/store/:id/list/borrowingHistoryListAsReturnStore" component={this.getBorrowingHistoryAsReturnStoreSearch()} />
               <Route path="/store/:id/list/borrowingHistoryAsReturnStoreCreateForm" component={this.getBorrowingHistoryAsReturnStoreCreateForm()} />
               <Route path="/store/:id/list/borrowingHistoryAsReturnStoreUpdateForm" component={this.getBorrowingHistoryAsReturnStoreUpdateForm()} />

               <Route path="/store/:id/list/borrowingExpiredSkuListAsLendingStore" component={this.getBorrowingExpiredSkuAsLendingStoreSearch()} />
               <Route path="/store/:id/list/borrowingExpiredSkuAsLendingStoreCreateForm" component={this.getBorrowingExpiredSkuAsLendingStoreCreateForm()} />
               <Route path="/store/:id/list/borrowingExpiredSkuAsLendingStoreUpdateForm" component={this.getBorrowingExpiredSkuAsLendingStoreUpdateForm()} />

               <Route path="/store/:id/list/borrowingExpiredSkuListAsReturnStore" component={this.getBorrowingExpiredSkuAsReturnStoreSearch()} />
               <Route path="/store/:id/list/borrowingExpiredSkuAsReturnStoreCreateForm" component={this.getBorrowingExpiredSkuAsReturnStoreCreateForm()} />
               <Route path="/store/:id/list/borrowingExpiredSkuAsReturnStoreUpdateForm" component={this.getBorrowingExpiredSkuAsReturnStoreUpdateForm()} />

               <Route path="/store/:id/list/bookCopySharingApplicationList" component={this.getBookCopySharingApplicationSearch()} />
               <Route path="/store/:id/list/bookCopySharingApplicationCreateForm" component={this.getBookCopySharingApplicationCreateForm()} />
               <Route path="/store/:id/list/bookCopySharingApplicationUpdateForm" component={this.getBookCopySharingApplicationUpdateForm()} />

               <Route path="/store/:id/list/storeAccountList" component={this.getStoreAccountSearch()} />
               <Route path="/store/:id/list/storeAccountCreateForm" component={this.getStoreAccountCreateForm()} />
               <Route path="/store/:id/list/storeAccountUpdateForm" component={this.getStoreAccountUpdateForm()} />

               <Route path="/store/:id/list/workshopList" component={this.getWorkshopSearch()} />
               <Route path="/store/:id/list/workshopCreateForm" component={this.getWorkshopCreateForm()} />
               <Route path="/store/:id/list/workshopUpdateForm" component={this.getWorkshopUpdateForm()} />

               <Route path="/store/:id/list/employeeWorkingStoreList" component={this.getEmployeeWorkingStoreSearch()} />
               <Route path="/store/:id/list/employeeWorkingStoreCreateForm" component={this.getEmployeeWorkingStoreCreateForm()} />
               <Route path="/store/:id/list/employeeWorkingStoreUpdateForm" component={this.getEmployeeWorkingStoreUpdateForm()} />
              
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
  store: state._store,
  ...state,
}))(StoreBizApp)



