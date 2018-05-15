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
import styles from './BookSharingPlatform.app.less'
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


  
const menuData = {menuName:"书共享平台", menuFor: "bookSharingPlatform",
  		subItems: [
  {name: 'accountManagementList', displayName:'账户管理'},
  {name: 'provinceList', displayName:'省'},
  {name: 'bookManagementList', displayName:'图书管理'},
  {name: 'memberServiceManagementList', displayName:'会员服务管理'},
  {name: 'mainOrderList', displayName:'主订单'},
  {name: 'bookList', displayName:'书'},
  {name: 'platformAccountList', displayName:'平台账户'},
  {name: 'fundationAccountList', displayName:'基金账户'},
  {name: 'storeList', displayName:'商店'},
  {name: 'customerList', displayName:'客户'},
  		
  		
  		],
};

class BookSharingPlatformBizApp extends React.PureComponent {
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
      return ['/bookSharingPlatform/']
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


  getAccountManagementSearch = () => {
    const {AccountManagementSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._bookSharingPlatform.accountManagementList,
      count: state._bookSharingPlatform.accountManagementCount,
      currentPage: state._bookSharingPlatform.accountManagementCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.accountManagementSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      partialList: state._bookSharingPlatform.partialList,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, referenceName: 'bookSharingPlatform', listName: 'accountManagementList', ref:state._bookSharingPlatform, listDisplayName: '账户管理列表' }, // this is for model namespace and
    }))(AccountManagementSearch)
  }
  getAccountManagementCreateForm = () => {
   	const {AccountManagementCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._bookSharingPlatform.accountManagementList,
      count: state._bookSharingPlatform.accountManagementCount,
      currentPage: state._bookSharingPlatform.accountManagementCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.accountManagementSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, referenceName: 'bookSharingPlatform', listName: 'accountManagementList', ref:state._bookSharingPlatform, listDisplayName: '账户管理列表'}, // this is for model namespace and
    }))(AccountManagementCreateForm)
  }
  
  getAccountManagementUpdateForm = () => {
  	const {AccountManagementUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._bookSharingPlatform.selectedRows,
      currentUpdateIndex: state._bookSharingPlatform.currentUpdateIndex,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, listName: 'accountManagementList', ref:state._bookSharingPlatform, listDisplayName: '账户管理列表' }, // this is for model namespace and
    }))(AccountManagementUpdateForm)
  }

  getProvinceSearch = () => {
    const {ProvinceSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._bookSharingPlatform.provinceList,
      count: state._bookSharingPlatform.provinceCount,
      currentPage: state._bookSharingPlatform.provinceCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.provinceSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      partialList: state._bookSharingPlatform.partialList,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, referenceName: 'bookSharingPlatform', listName: 'provinceList', ref:state._bookSharingPlatform, listDisplayName: '省列表' }, // this is for model namespace and
    }))(ProvinceSearch)
  }
  getProvinceCreateForm = () => {
   	const {ProvinceCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._bookSharingPlatform.provinceList,
      count: state._bookSharingPlatform.provinceCount,
      currentPage: state._bookSharingPlatform.provinceCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.provinceSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, referenceName: 'bookSharingPlatform', listName: 'provinceList', ref:state._bookSharingPlatform, listDisplayName: '省列表'}, // this is for model namespace and
    }))(ProvinceCreateForm)
  }
  
  getProvinceUpdateForm = () => {
  	const {ProvinceUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._bookSharingPlatform.selectedRows,
      currentUpdateIndex: state._bookSharingPlatform.currentUpdateIndex,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, listName: 'provinceList', ref:state._bookSharingPlatform, listDisplayName: '省列表' }, // this is for model namespace and
    }))(ProvinceUpdateForm)
  }

  getBookManagementSearch = () => {
    const {BookManagementSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._bookSharingPlatform.bookManagementList,
      count: state._bookSharingPlatform.bookManagementCount,
      currentPage: state._bookSharingPlatform.bookManagementCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.bookManagementSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      partialList: state._bookSharingPlatform.partialList,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, referenceName: 'bookSharingPlatform', listName: 'bookManagementList', ref:state._bookSharingPlatform, listDisplayName: '图书管理列表' }, // this is for model namespace and
    }))(BookManagementSearch)
  }
  getBookManagementCreateForm = () => {
   	const {BookManagementCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._bookSharingPlatform.bookManagementList,
      count: state._bookSharingPlatform.bookManagementCount,
      currentPage: state._bookSharingPlatform.bookManagementCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.bookManagementSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, referenceName: 'bookSharingPlatform', listName: 'bookManagementList', ref:state._bookSharingPlatform, listDisplayName: '图书管理列表'}, // this is for model namespace and
    }))(BookManagementCreateForm)
  }
  
  getBookManagementUpdateForm = () => {
  	const {BookManagementUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._bookSharingPlatform.selectedRows,
      currentUpdateIndex: state._bookSharingPlatform.currentUpdateIndex,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, listName: 'bookManagementList', ref:state._bookSharingPlatform, listDisplayName: '图书管理列表' }, // this is for model namespace and
    }))(BookManagementUpdateForm)
  }

  getMemberServiceManagementSearch = () => {
    const {MemberServiceManagementSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._bookSharingPlatform.memberServiceManagementList,
      count: state._bookSharingPlatform.memberServiceManagementCount,
      currentPage: state._bookSharingPlatform.memberServiceManagementCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.memberServiceManagementSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      partialList: state._bookSharingPlatform.partialList,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, referenceName: 'bookSharingPlatform', listName: 'memberServiceManagementList', ref:state._bookSharingPlatform, listDisplayName: '会员服务管理列表' }, // this is for model namespace and
    }))(MemberServiceManagementSearch)
  }
  getMemberServiceManagementCreateForm = () => {
   	const {MemberServiceManagementCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._bookSharingPlatform.memberServiceManagementList,
      count: state._bookSharingPlatform.memberServiceManagementCount,
      currentPage: state._bookSharingPlatform.memberServiceManagementCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.memberServiceManagementSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, referenceName: 'bookSharingPlatform', listName: 'memberServiceManagementList', ref:state._bookSharingPlatform, listDisplayName: '会员服务管理列表'}, // this is for model namespace and
    }))(MemberServiceManagementCreateForm)
  }
  
  getMemberServiceManagementUpdateForm = () => {
  	const {MemberServiceManagementUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._bookSharingPlatform.selectedRows,
      currentUpdateIndex: state._bookSharingPlatform.currentUpdateIndex,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, listName: 'memberServiceManagementList', ref:state._bookSharingPlatform, listDisplayName: '会员服务管理列表' }, // this is for model namespace and
    }))(MemberServiceManagementUpdateForm)
  }

  getMainOrderSearch = () => {
    const {MainOrderSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._bookSharingPlatform.mainOrderList,
      count: state._bookSharingPlatform.mainOrderCount,
      currentPage: state._bookSharingPlatform.mainOrderCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.mainOrderSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      partialList: state._bookSharingPlatform.partialList,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, referenceName: 'bookSharingPlatform', listName: 'mainOrderList', ref:state._bookSharingPlatform, listDisplayName: '主订单列表' }, // this is for model namespace and
    }))(MainOrderSearch)
  }
  getMainOrderCreateForm = () => {
   	const {MainOrderCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._bookSharingPlatform.mainOrderList,
      count: state._bookSharingPlatform.mainOrderCount,
      currentPage: state._bookSharingPlatform.mainOrderCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.mainOrderSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, referenceName: 'bookSharingPlatform', listName: 'mainOrderList', ref:state._bookSharingPlatform, listDisplayName: '主订单列表'}, // this is for model namespace and
    }))(MainOrderCreateForm)
  }
  
  getMainOrderUpdateForm = () => {
  	const {MainOrderUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._bookSharingPlatform.selectedRows,
      currentUpdateIndex: state._bookSharingPlatform.currentUpdateIndex,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, listName: 'mainOrderList', ref:state._bookSharingPlatform, listDisplayName: '主订单列表' }, // this is for model namespace and
    }))(MainOrderUpdateForm)
  }

  getBookSearch = () => {
    const {BookSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._bookSharingPlatform.bookList,
      count: state._bookSharingPlatform.bookCount,
      currentPage: state._bookSharingPlatform.bookCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.bookSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      partialList: state._bookSharingPlatform.partialList,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, referenceName: 'platform', listName: 'bookList', ref:state._bookSharingPlatform, listDisplayName: '书列表' }, // this is for model namespace and
    }))(BookSearch)
  }
  getBookCreateForm = () => {
   	const {BookCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._bookSharingPlatform.bookList,
      count: state._bookSharingPlatform.bookCount,
      currentPage: state._bookSharingPlatform.bookCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.bookSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, referenceName: 'platform', listName: 'bookList', ref:state._bookSharingPlatform, listDisplayName: '书列表'}, // this is for model namespace and
    }))(BookCreateForm)
  }
  
  getBookUpdateForm = () => {
  	const {BookUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._bookSharingPlatform.selectedRows,
      currentUpdateIndex: state._bookSharingPlatform.currentUpdateIndex,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, listName: 'bookList', ref:state._bookSharingPlatform, listDisplayName: '书列表' }, // this is for model namespace and
    }))(BookUpdateForm)
  }

  getPlatformAccountSearch = () => {
    const {PlatformAccountSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._bookSharingPlatform.platformAccountList,
      count: state._bookSharingPlatform.platformAccountCount,
      currentPage: state._bookSharingPlatform.platformAccountCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.platformAccountSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      partialList: state._bookSharingPlatform.partialList,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, referenceName: 'platform', listName: 'platformAccountList', ref:state._bookSharingPlatform, listDisplayName: '平台账户列表' }, // this is for model namespace and
    }))(PlatformAccountSearch)
  }
  getPlatformAccountCreateForm = () => {
   	const {PlatformAccountCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._bookSharingPlatform.platformAccountList,
      count: state._bookSharingPlatform.platformAccountCount,
      currentPage: state._bookSharingPlatform.platformAccountCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.platformAccountSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, referenceName: 'platform', listName: 'platformAccountList', ref:state._bookSharingPlatform, listDisplayName: '平台账户列表'}, // this is for model namespace and
    }))(PlatformAccountCreateForm)
  }
  
  getPlatformAccountUpdateForm = () => {
  	const {PlatformAccountUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._bookSharingPlatform.selectedRows,
      currentUpdateIndex: state._bookSharingPlatform.currentUpdateIndex,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, listName: 'platformAccountList', ref:state._bookSharingPlatform, listDisplayName: '平台账户列表' }, // this is for model namespace and
    }))(PlatformAccountUpdateForm)
  }

  getFundationAccountSearch = () => {
    const {FundationAccountSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._bookSharingPlatform.fundationAccountList,
      count: state._bookSharingPlatform.fundationAccountCount,
      currentPage: state._bookSharingPlatform.fundationAccountCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.fundationAccountSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      partialList: state._bookSharingPlatform.partialList,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, referenceName: 'platform', listName: 'fundationAccountList', ref:state._bookSharingPlatform, listDisplayName: '基金账户列表' }, // this is for model namespace and
    }))(FundationAccountSearch)
  }
  getFundationAccountCreateForm = () => {
   	const {FundationAccountCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._bookSharingPlatform.fundationAccountList,
      count: state._bookSharingPlatform.fundationAccountCount,
      currentPage: state._bookSharingPlatform.fundationAccountCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.fundationAccountSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, referenceName: 'platform', listName: 'fundationAccountList', ref:state._bookSharingPlatform, listDisplayName: '基金账户列表'}, // this is for model namespace and
    }))(FundationAccountCreateForm)
  }
  
  getFundationAccountUpdateForm = () => {
  	const {FundationAccountUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._bookSharingPlatform.selectedRows,
      currentUpdateIndex: state._bookSharingPlatform.currentUpdateIndex,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, listName: 'fundationAccountList', ref:state._bookSharingPlatform, listDisplayName: '基金账户列表' }, // this is for model namespace and
    }))(FundationAccountUpdateForm)
  }

  getStoreSearch = () => {
    const {StoreSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._bookSharingPlatform.storeList,
      count: state._bookSharingPlatform.storeCount,
      currentPage: state._bookSharingPlatform.storeCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.storeSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      partialList: state._bookSharingPlatform.partialList,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, referenceName: 'platform', listName: 'storeList', ref:state._bookSharingPlatform, listDisplayName: '商店列表' }, // this is for model namespace and
    }))(StoreSearch)
  }
  getStoreCreateForm = () => {
   	const {StoreCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._bookSharingPlatform.storeList,
      count: state._bookSharingPlatform.storeCount,
      currentPage: state._bookSharingPlatform.storeCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.storeSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, referenceName: 'platform', listName: 'storeList', ref:state._bookSharingPlatform, listDisplayName: '商店列表'}, // this is for model namespace and
    }))(StoreCreateForm)
  }
  
  getStoreUpdateForm = () => {
  	const {StoreUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._bookSharingPlatform.selectedRows,
      currentUpdateIndex: state._bookSharingPlatform.currentUpdateIndex,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, listName: 'storeList', ref:state._bookSharingPlatform, listDisplayName: '商店列表' }, // this is for model namespace and
    }))(StoreUpdateForm)
  }

  getCustomerSearch = () => {
    const {CustomerSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._bookSharingPlatform.customerList,
      count: state._bookSharingPlatform.customerCount,
      currentPage: state._bookSharingPlatform.customerCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.customerSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      partialList: state._bookSharingPlatform.partialList,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, referenceName: 'platform', listName: 'customerList', ref:state._bookSharingPlatform, listDisplayName: '客户列表' }, // this is for model namespace and
    }))(CustomerSearch)
  }
  getCustomerCreateForm = () => {
   	const {CustomerCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._bookSharingPlatform.customerList,
      count: state._bookSharingPlatform.customerCount,
      currentPage: state._bookSharingPlatform.customerCurrentPageNumber,
      searchFormParameters: state._bookSharingPlatform.customerSearchFormParameters,
      loading: state._bookSharingPlatform.loading,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, referenceName: 'platform', listName: 'customerList', ref:state._bookSharingPlatform, listDisplayName: '客户列表'}, // this is for model namespace and
    }))(CustomerCreateForm)
  }
  
  getCustomerUpdateForm = () => {
  	const {CustomerUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._bookSharingPlatform.selectedRows,
      currentUpdateIndex: state._bookSharingPlatform.currentUpdateIndex,
      owner: { type: '_bookSharingPlatform', id: state._bookSharingPlatform.id, listName: 'customerList', ref:state._bookSharingPlatform, listDisplayName: '客户列表' }, // this is for model namespace and
    }))(CustomerUpdateForm)
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
     const {BookSharingPlatformDashboard} = GlobalComponents
     const {BookSharingPlatformEditDetail} = GlobalComponents
     const {BookSharingPlatformViewDetail} = GlobalComponents
     
     
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
               <Link to={`/bookSharingPlatform/${this.props.bookSharingPlatform.id}/dashboard`}><Icon type="dashboard" /><span>仪表板</span></Link>
             </Menu.Item>


             {this.getNavMenuItems(this.props.bookSharingPlatform.id)}
             <Menu.Item key="homepage">
               <Link to={"/home"}><Icon type="home" /><span>回到主页</span></Link>
             </Menu.Item>
           </Menu>
         </Sider>
         <Layout>
           <Content style={{ margin: '24px 24px 0', height: '100%' }}>
             <Switch>
             
               <Route path="/bookSharingPlatform/:id/dashboard" component={BookSharingPlatformDashboard} />
               
               <Route path="/bookSharingPlatform/:id/editDetail" component={BookSharingPlatformEditDetail} />
               <Route path="/bookSharingPlatform/:id/viewDetail" component={BookSharingPlatformViewDetail} /> 
               

               <Route path="/bookSharingPlatform/:id/list/accountManagementList" component={this.getAccountManagementSearch()} />
               <Route path="/bookSharingPlatform/:id/list/accountManagementCreateForm" component={this.getAccountManagementCreateForm()} />
               <Route path="/bookSharingPlatform/:id/list/accountManagementUpdateForm" component={this.getAccountManagementUpdateForm()} />

               <Route path="/bookSharingPlatform/:id/list/provinceList" component={this.getProvinceSearch()} />
               <Route path="/bookSharingPlatform/:id/list/provinceCreateForm" component={this.getProvinceCreateForm()} />
               <Route path="/bookSharingPlatform/:id/list/provinceUpdateForm" component={this.getProvinceUpdateForm()} />

               <Route path="/bookSharingPlatform/:id/list/bookManagementList" component={this.getBookManagementSearch()} />
               <Route path="/bookSharingPlatform/:id/list/bookManagementCreateForm" component={this.getBookManagementCreateForm()} />
               <Route path="/bookSharingPlatform/:id/list/bookManagementUpdateForm" component={this.getBookManagementUpdateForm()} />

               <Route path="/bookSharingPlatform/:id/list/memberServiceManagementList" component={this.getMemberServiceManagementSearch()} />
               <Route path="/bookSharingPlatform/:id/list/memberServiceManagementCreateForm" component={this.getMemberServiceManagementCreateForm()} />
               <Route path="/bookSharingPlatform/:id/list/memberServiceManagementUpdateForm" component={this.getMemberServiceManagementUpdateForm()} />

               <Route path="/bookSharingPlatform/:id/list/mainOrderList" component={this.getMainOrderSearch()} />
               <Route path="/bookSharingPlatform/:id/list/mainOrderCreateForm" component={this.getMainOrderCreateForm()} />
               <Route path="/bookSharingPlatform/:id/list/mainOrderUpdateForm" component={this.getMainOrderUpdateForm()} />

               <Route path="/bookSharingPlatform/:id/list/bookList" component={this.getBookSearch()} />
               <Route path="/bookSharingPlatform/:id/list/bookCreateForm" component={this.getBookCreateForm()} />
               <Route path="/bookSharingPlatform/:id/list/bookUpdateForm" component={this.getBookUpdateForm()} />

               <Route path="/bookSharingPlatform/:id/list/platformAccountList" component={this.getPlatformAccountSearch()} />
               <Route path="/bookSharingPlatform/:id/list/platformAccountCreateForm" component={this.getPlatformAccountCreateForm()} />
               <Route path="/bookSharingPlatform/:id/list/platformAccountUpdateForm" component={this.getPlatformAccountUpdateForm()} />

               <Route path="/bookSharingPlatform/:id/list/fundationAccountList" component={this.getFundationAccountSearch()} />
               <Route path="/bookSharingPlatform/:id/list/fundationAccountCreateForm" component={this.getFundationAccountCreateForm()} />
               <Route path="/bookSharingPlatform/:id/list/fundationAccountUpdateForm" component={this.getFundationAccountUpdateForm()} />

               <Route path="/bookSharingPlatform/:id/list/storeList" component={this.getStoreSearch()} />
               <Route path="/bookSharingPlatform/:id/list/storeCreateForm" component={this.getStoreCreateForm()} />
               <Route path="/bookSharingPlatform/:id/list/storeUpdateForm" component={this.getStoreUpdateForm()} />

               <Route path="/bookSharingPlatform/:id/list/customerList" component={this.getCustomerSearch()} />
               <Route path="/bookSharingPlatform/:id/list/customerCreateForm" component={this.getCustomerCreateForm()} />
               <Route path="/bookSharingPlatform/:id/list/customerUpdateForm" component={this.getCustomerUpdateForm()} />
              
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
  bookSharingPlatform: state._bookSharingPlatform,
  ...state,
}))(BookSharingPlatformBizApp)



