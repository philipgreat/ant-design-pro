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
import styles from './BookManagement.app.less'
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


  
const menuData = {menuName:"图书管理", menuFor: "bookManagement",
  		subItems: [
  {name: 'bookTagRecordList', displayName:'书标签记录'},
  {name: 'bookCopySharingBenefitConfigurationList', displayName:'图书拷贝共享利益配置。'},
  {name: 'bookCopyDonateBenefitConfigurationList', displayName:'图书拷贝捐赠利益配置。'},
  {name: 'bookBorrowConfigurationList', displayName:'书借配置'},
  {name: 'bookList', displayName:'书'},
  {name: 'bookCopyStatusList', displayName:'书副本地位'},
  {name: 'bookCopySkuList', displayName:'书副本Sku'},
  {name: 'bookCopyCheckPlanList', displayName:'书副本检查计划'},
  {name: 'bookCopyCheckStatusList', displayName:'书副本检查状态'},
  {name: 'bookReviewTypeList', displayName:'书评类型'},
  		
  		
  		],
};

class BookManagementBizApp extends React.PureComponent {
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
      return ['/bookManagement/']
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
  



  getBookTagRecordSearch = () => {
    const {BookTagRecordSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._bookManagement.bookTagRecordList,
      count: state._bookManagement.bookTagRecordCount,
      currentPage: state._bookManagement.bookTagRecordCurrentPageNumber,
      searchFormParameters: state._bookManagement.bookTagRecordSearchFormParameters,
      loading: state._bookManagement.loading,
      partialList: state._bookManagement.partialList,
      owner: { type: '_bookManagement', id: state._bookManagement.id, referenceName: 'bookManagement', listName: 'bookTagRecordList', ref:state._bookManagement, listDisplayName: '书标签记录列表' }, // this is for model namespace and
    }))(BookTagRecordSearch)
  }
  getBookTagRecordCreateForm = () => {
   	const {BookTagRecordCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._bookManagement.bookTagRecordList,
      count: state._bookManagement.bookTagRecordCount,
      currentPage: state._bookManagement.bookTagRecordCurrentPageNumber,
      searchFormParameters: state._bookManagement.bookTagRecordSearchFormParameters,
      loading: state._bookManagement.loading,
      owner: { type: '_bookManagement', id: state._bookManagement.id, referenceName: 'bookManagement', listName: 'bookTagRecordList', ref:state._bookManagement, listDisplayName: '书标签记录列表'}, // this is for model namespace and
    }))(BookTagRecordCreateForm)
  }
  
  getBookTagRecordUpdateForm = () => {
  	const {BookTagRecordUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._bookManagement.selectedRows,
      currentUpdateIndex: state._bookManagement.currentUpdateIndex,
      owner: { type: '_bookManagement', id: state._bookManagement.id, listName: 'bookTagRecordList', ref:state._bookManagement, listDisplayName: '书标签记录列表' }, // this is for model namespace and
    }))(BookTagRecordUpdateForm)
  }

  getBookCopySharingBenefitConfigurationSearch = () => {
    const {BookCopySharingBenefitConfigurationSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._bookManagement.bookCopySharingBenefitConfigurationList,
      count: state._bookManagement.bookCopySharingBenefitConfigurationCount,
      currentPage: state._bookManagement.bookCopySharingBenefitConfigurationCurrentPageNumber,
      searchFormParameters: state._bookManagement.bookCopySharingBenefitConfigurationSearchFormParameters,
      loading: state._bookManagement.loading,
      partialList: state._bookManagement.partialList,
      owner: { type: '_bookManagement', id: state._bookManagement.id, referenceName: 'bookManagement', listName: 'bookCopySharingBenefitConfigurationList', ref:state._bookManagement, listDisplayName: '图书拷贝共享利益配置。列表' }, // this is for model namespace and
    }))(BookCopySharingBenefitConfigurationSearch)
  }
  getBookCopySharingBenefitConfigurationCreateForm = () => {
   	const {BookCopySharingBenefitConfigurationCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._bookManagement.bookCopySharingBenefitConfigurationList,
      count: state._bookManagement.bookCopySharingBenefitConfigurationCount,
      currentPage: state._bookManagement.bookCopySharingBenefitConfigurationCurrentPageNumber,
      searchFormParameters: state._bookManagement.bookCopySharingBenefitConfigurationSearchFormParameters,
      loading: state._bookManagement.loading,
      owner: { type: '_bookManagement', id: state._bookManagement.id, referenceName: 'bookManagement', listName: 'bookCopySharingBenefitConfigurationList', ref:state._bookManagement, listDisplayName: '图书拷贝共享利益配置。列表'}, // this is for model namespace and
    }))(BookCopySharingBenefitConfigurationCreateForm)
  }
  
  getBookCopySharingBenefitConfigurationUpdateForm = () => {
  	const {BookCopySharingBenefitConfigurationUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._bookManagement.selectedRows,
      currentUpdateIndex: state._bookManagement.currentUpdateIndex,
      owner: { type: '_bookManagement', id: state._bookManagement.id, listName: 'bookCopySharingBenefitConfigurationList', ref:state._bookManagement, listDisplayName: '图书拷贝共享利益配置。列表' }, // this is for model namespace and
    }))(BookCopySharingBenefitConfigurationUpdateForm)
  }

  getBookCopyDonateBenefitConfigurationSearch = () => {
    const {BookCopyDonateBenefitConfigurationSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._bookManagement.bookCopyDonateBenefitConfigurationList,
      count: state._bookManagement.bookCopyDonateBenefitConfigurationCount,
      currentPage: state._bookManagement.bookCopyDonateBenefitConfigurationCurrentPageNumber,
      searchFormParameters: state._bookManagement.bookCopyDonateBenefitConfigurationSearchFormParameters,
      loading: state._bookManagement.loading,
      partialList: state._bookManagement.partialList,
      owner: { type: '_bookManagement', id: state._bookManagement.id, referenceName: 'bookManagement', listName: 'bookCopyDonateBenefitConfigurationList', ref:state._bookManagement, listDisplayName: '图书拷贝捐赠利益配置。列表' }, // this is for model namespace and
    }))(BookCopyDonateBenefitConfigurationSearch)
  }
  getBookCopyDonateBenefitConfigurationCreateForm = () => {
   	const {BookCopyDonateBenefitConfigurationCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._bookManagement.bookCopyDonateBenefitConfigurationList,
      count: state._bookManagement.bookCopyDonateBenefitConfigurationCount,
      currentPage: state._bookManagement.bookCopyDonateBenefitConfigurationCurrentPageNumber,
      searchFormParameters: state._bookManagement.bookCopyDonateBenefitConfigurationSearchFormParameters,
      loading: state._bookManagement.loading,
      owner: { type: '_bookManagement', id: state._bookManagement.id, referenceName: 'bookManagement', listName: 'bookCopyDonateBenefitConfigurationList', ref:state._bookManagement, listDisplayName: '图书拷贝捐赠利益配置。列表'}, // this is for model namespace and
    }))(BookCopyDonateBenefitConfigurationCreateForm)
  }
  
  getBookCopyDonateBenefitConfigurationUpdateForm = () => {
  	const {BookCopyDonateBenefitConfigurationUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._bookManagement.selectedRows,
      currentUpdateIndex: state._bookManagement.currentUpdateIndex,
      owner: { type: '_bookManagement', id: state._bookManagement.id, listName: 'bookCopyDonateBenefitConfigurationList', ref:state._bookManagement, listDisplayName: '图书拷贝捐赠利益配置。列表' }, // this is for model namespace and
    }))(BookCopyDonateBenefitConfigurationUpdateForm)
  }

  getBookBorrowConfigurationSearch = () => {
    const {BookBorrowConfigurationSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._bookManagement.bookBorrowConfigurationList,
      count: state._bookManagement.bookBorrowConfigurationCount,
      currentPage: state._bookManagement.bookBorrowConfigurationCurrentPageNumber,
      searchFormParameters: state._bookManagement.bookBorrowConfigurationSearchFormParameters,
      loading: state._bookManagement.loading,
      partialList: state._bookManagement.partialList,
      owner: { type: '_bookManagement', id: state._bookManagement.id, referenceName: 'bookManagement', listName: 'bookBorrowConfigurationList', ref:state._bookManagement, listDisplayName: '书借配置列表' }, // this is for model namespace and
    }))(BookBorrowConfigurationSearch)
  }
  getBookBorrowConfigurationCreateForm = () => {
   	const {BookBorrowConfigurationCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._bookManagement.bookBorrowConfigurationList,
      count: state._bookManagement.bookBorrowConfigurationCount,
      currentPage: state._bookManagement.bookBorrowConfigurationCurrentPageNumber,
      searchFormParameters: state._bookManagement.bookBorrowConfigurationSearchFormParameters,
      loading: state._bookManagement.loading,
      owner: { type: '_bookManagement', id: state._bookManagement.id, referenceName: 'bookManagement', listName: 'bookBorrowConfigurationList', ref:state._bookManagement, listDisplayName: '书借配置列表'}, // this is for model namespace and
    }))(BookBorrowConfigurationCreateForm)
  }
  
  getBookBorrowConfigurationUpdateForm = () => {
  	const {BookBorrowConfigurationUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._bookManagement.selectedRows,
      currentUpdateIndex: state._bookManagement.currentUpdateIndex,
      owner: { type: '_bookManagement', id: state._bookManagement.id, listName: 'bookBorrowConfigurationList', ref:state._bookManagement, listDisplayName: '书借配置列表' }, // this is for model namespace and
    }))(BookBorrowConfigurationUpdateForm)
  }

  getBookSearch = () => {
    const {BookSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._bookManagement.bookList,
      count: state._bookManagement.bookCount,
      currentPage: state._bookManagement.bookCurrentPageNumber,
      searchFormParameters: state._bookManagement.bookSearchFormParameters,
      loading: state._bookManagement.loading,
      partialList: state._bookManagement.partialList,
      owner: { type: '_bookManagement', id: state._bookManagement.id, referenceName: 'bookManagement', listName: 'bookList', ref:state._bookManagement, listDisplayName: '书列表' }, // this is for model namespace and
    }))(BookSearch)
  }
  getBookCreateForm = () => {
   	const {BookCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._bookManagement.bookList,
      count: state._bookManagement.bookCount,
      currentPage: state._bookManagement.bookCurrentPageNumber,
      searchFormParameters: state._bookManagement.bookSearchFormParameters,
      loading: state._bookManagement.loading,
      owner: { type: '_bookManagement', id: state._bookManagement.id, referenceName: 'bookManagement', listName: 'bookList', ref:state._bookManagement, listDisplayName: '书列表'}, // this is for model namespace and
    }))(BookCreateForm)
  }
  
  getBookUpdateForm = () => {
  	const {BookUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._bookManagement.selectedRows,
      currentUpdateIndex: state._bookManagement.currentUpdateIndex,
      owner: { type: '_bookManagement', id: state._bookManagement.id, listName: 'bookList', ref:state._bookManagement, listDisplayName: '书列表' }, // this is for model namespace and
    }))(BookUpdateForm)
  }

  getBookCopyStatusSearch = () => {
    const {BookCopyStatusSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._bookManagement.bookCopyStatusList,
      count: state._bookManagement.bookCopyStatusCount,
      currentPage: state._bookManagement.bookCopyStatusCurrentPageNumber,
      searchFormParameters: state._bookManagement.bookCopyStatusSearchFormParameters,
      loading: state._bookManagement.loading,
      partialList: state._bookManagement.partialList,
      owner: { type: '_bookManagement', id: state._bookManagement.id, referenceName: 'bookManagement', listName: 'bookCopyStatusList', ref:state._bookManagement, listDisplayName: '书副本地位列表' }, // this is for model namespace and
    }))(BookCopyStatusSearch)
  }
  getBookCopyStatusCreateForm = () => {
   	const {BookCopyStatusCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._bookManagement.bookCopyStatusList,
      count: state._bookManagement.bookCopyStatusCount,
      currentPage: state._bookManagement.bookCopyStatusCurrentPageNumber,
      searchFormParameters: state._bookManagement.bookCopyStatusSearchFormParameters,
      loading: state._bookManagement.loading,
      owner: { type: '_bookManagement', id: state._bookManagement.id, referenceName: 'bookManagement', listName: 'bookCopyStatusList', ref:state._bookManagement, listDisplayName: '书副本地位列表'}, // this is for model namespace and
    }))(BookCopyStatusCreateForm)
  }
  
  getBookCopyStatusUpdateForm = () => {
  	const {BookCopyStatusUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._bookManagement.selectedRows,
      currentUpdateIndex: state._bookManagement.currentUpdateIndex,
      owner: { type: '_bookManagement', id: state._bookManagement.id, listName: 'bookCopyStatusList', ref:state._bookManagement, listDisplayName: '书副本地位列表' }, // this is for model namespace and
    }))(BookCopyStatusUpdateForm)
  }

  getBookCopySkuSearch = () => {
    const {BookCopySkuSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._bookManagement.bookCopySkuList,
      count: state._bookManagement.bookCopySkuCount,
      currentPage: state._bookManagement.bookCopySkuCurrentPageNumber,
      searchFormParameters: state._bookManagement.bookCopySkuSearchFormParameters,
      loading: state._bookManagement.loading,
      partialList: state._bookManagement.partialList,
      owner: { type: '_bookManagement', id: state._bookManagement.id, referenceName: 'bookManagement', listName: 'bookCopySkuList', ref:state._bookManagement, listDisplayName: '书副本Sku列表' }, // this is for model namespace and
    }))(BookCopySkuSearch)
  }
  getBookCopySkuCreateForm = () => {
   	const {BookCopySkuCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._bookManagement.bookCopySkuList,
      count: state._bookManagement.bookCopySkuCount,
      currentPage: state._bookManagement.bookCopySkuCurrentPageNumber,
      searchFormParameters: state._bookManagement.bookCopySkuSearchFormParameters,
      loading: state._bookManagement.loading,
      owner: { type: '_bookManagement', id: state._bookManagement.id, referenceName: 'bookManagement', listName: 'bookCopySkuList', ref:state._bookManagement, listDisplayName: '书副本Sku列表'}, // this is for model namespace and
    }))(BookCopySkuCreateForm)
  }
  
  getBookCopySkuUpdateForm = () => {
  	const {BookCopySkuUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._bookManagement.selectedRows,
      currentUpdateIndex: state._bookManagement.currentUpdateIndex,
      owner: { type: '_bookManagement', id: state._bookManagement.id, listName: 'bookCopySkuList', ref:state._bookManagement, listDisplayName: '书副本Sku列表' }, // this is for model namespace and
    }))(BookCopySkuUpdateForm)
  }

  getBookCopyCheckPlanSearch = () => {
    const {BookCopyCheckPlanSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._bookManagement.bookCopyCheckPlanList,
      count: state._bookManagement.bookCopyCheckPlanCount,
      currentPage: state._bookManagement.bookCopyCheckPlanCurrentPageNumber,
      searchFormParameters: state._bookManagement.bookCopyCheckPlanSearchFormParameters,
      loading: state._bookManagement.loading,
      partialList: state._bookManagement.partialList,
      owner: { type: '_bookManagement', id: state._bookManagement.id, referenceName: 'bookManagement', listName: 'bookCopyCheckPlanList', ref:state._bookManagement, listDisplayName: '书副本检查计划列表' }, // this is for model namespace and
    }))(BookCopyCheckPlanSearch)
  }
  getBookCopyCheckPlanCreateForm = () => {
   	const {BookCopyCheckPlanCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._bookManagement.bookCopyCheckPlanList,
      count: state._bookManagement.bookCopyCheckPlanCount,
      currentPage: state._bookManagement.bookCopyCheckPlanCurrentPageNumber,
      searchFormParameters: state._bookManagement.bookCopyCheckPlanSearchFormParameters,
      loading: state._bookManagement.loading,
      owner: { type: '_bookManagement', id: state._bookManagement.id, referenceName: 'bookManagement', listName: 'bookCopyCheckPlanList', ref:state._bookManagement, listDisplayName: '书副本检查计划列表'}, // this is for model namespace and
    }))(BookCopyCheckPlanCreateForm)
  }
  
  getBookCopyCheckPlanUpdateForm = () => {
  	const {BookCopyCheckPlanUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._bookManagement.selectedRows,
      currentUpdateIndex: state._bookManagement.currentUpdateIndex,
      owner: { type: '_bookManagement', id: state._bookManagement.id, listName: 'bookCopyCheckPlanList', ref:state._bookManagement, listDisplayName: '书副本检查计划列表' }, // this is for model namespace and
    }))(BookCopyCheckPlanUpdateForm)
  }

  getBookCopyCheckStatusSearch = () => {
    const {BookCopyCheckStatusSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._bookManagement.bookCopyCheckStatusList,
      count: state._bookManagement.bookCopyCheckStatusCount,
      currentPage: state._bookManagement.bookCopyCheckStatusCurrentPageNumber,
      searchFormParameters: state._bookManagement.bookCopyCheckStatusSearchFormParameters,
      loading: state._bookManagement.loading,
      partialList: state._bookManagement.partialList,
      owner: { type: '_bookManagement', id: state._bookManagement.id, referenceName: 'bookManagement', listName: 'bookCopyCheckStatusList', ref:state._bookManagement, listDisplayName: '书副本检查状态列表' }, // this is for model namespace and
    }))(BookCopyCheckStatusSearch)
  }
  getBookCopyCheckStatusCreateForm = () => {
   	const {BookCopyCheckStatusCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._bookManagement.bookCopyCheckStatusList,
      count: state._bookManagement.bookCopyCheckStatusCount,
      currentPage: state._bookManagement.bookCopyCheckStatusCurrentPageNumber,
      searchFormParameters: state._bookManagement.bookCopyCheckStatusSearchFormParameters,
      loading: state._bookManagement.loading,
      owner: { type: '_bookManagement', id: state._bookManagement.id, referenceName: 'bookManagement', listName: 'bookCopyCheckStatusList', ref:state._bookManagement, listDisplayName: '书副本检查状态列表'}, // this is for model namespace and
    }))(BookCopyCheckStatusCreateForm)
  }
  
  getBookCopyCheckStatusUpdateForm = () => {
  	const {BookCopyCheckStatusUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._bookManagement.selectedRows,
      currentUpdateIndex: state._bookManagement.currentUpdateIndex,
      owner: { type: '_bookManagement', id: state._bookManagement.id, listName: 'bookCopyCheckStatusList', ref:state._bookManagement, listDisplayName: '书副本检查状态列表' }, // this is for model namespace and
    }))(BookCopyCheckStatusUpdateForm)
  }

  getBookReviewTypeSearch = () => {
    const {BookReviewTypeSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._bookManagement.bookReviewTypeList,
      count: state._bookManagement.bookReviewTypeCount,
      currentPage: state._bookManagement.bookReviewTypeCurrentPageNumber,
      searchFormParameters: state._bookManagement.bookReviewTypeSearchFormParameters,
      loading: state._bookManagement.loading,
      partialList: state._bookManagement.partialList,
      owner: { type: '_bookManagement', id: state._bookManagement.id, referenceName: 'bookManagement', listName: 'bookReviewTypeList', ref:state._bookManagement, listDisplayName: '书评类型列表' }, // this is for model namespace and
    }))(BookReviewTypeSearch)
  }
  getBookReviewTypeCreateForm = () => {
   	const {BookReviewTypeCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._bookManagement.bookReviewTypeList,
      count: state._bookManagement.bookReviewTypeCount,
      currentPage: state._bookManagement.bookReviewTypeCurrentPageNumber,
      searchFormParameters: state._bookManagement.bookReviewTypeSearchFormParameters,
      loading: state._bookManagement.loading,
      owner: { type: '_bookManagement', id: state._bookManagement.id, referenceName: 'bookManagement', listName: 'bookReviewTypeList', ref:state._bookManagement, listDisplayName: '书评类型列表'}, // this is for model namespace and
    }))(BookReviewTypeCreateForm)
  }
  
  getBookReviewTypeUpdateForm = () => {
  	const {BookReviewTypeUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._bookManagement.selectedRows,
      currentUpdateIndex: state._bookManagement.currentUpdateIndex,
      owner: { type: '_bookManagement', id: state._bookManagement.id, listName: 'bookReviewTypeList', ref:state._bookManagement, listDisplayName: '书评类型列表' }, // this is for model namespace and
    }))(BookReviewTypeUpdateForm)
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
     const {BookManagementDashboard} = GlobalComponents
     //const {BookManagementEditDetail} = GlobalComponents
     //const {BookManagementViewDetail} = GlobalComponents
     
     
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
               <Link to={`/bookManagement/${this.props.bookManagement.id}/dashboard`}><Icon type="dashboard" /><span>仪表板</span></Link>
             </Menu.Item>


             {this.getNavMenuItems(this.props.bookManagement.id)}
             <Menu.Item key="homepage">
               <Link to={"/home"}><Icon type="home" /><span>回到主页</span></Link>
             </Menu.Item>
           </Menu>
         </Sider>
         <Layout>
           <Content style={{ margin: '24px 24px 0', height: '100%' }}>
             <Switch>
             
               <Route path="/bookManagement/:id/dashboard" component={BookManagementDashboard} />
               
               

               <Route path="/bookManagement/:id/list/bookTagRecordList" component={this.getBookTagRecordSearch()} />
               <Route path="/bookManagement/:id/list/bookTagRecordCreateForm" component={this.getBookTagRecordCreateForm()} />
               <Route path="/bookManagement/:id/list/bookTagRecordUpdateForm" component={this.getBookTagRecordUpdateForm()} />

               <Route path="/bookManagement/:id/list/bookCopySharingBenefitConfigurationList" component={this.getBookCopySharingBenefitConfigurationSearch()} />
               <Route path="/bookManagement/:id/list/bookCopySharingBenefitConfigurationCreateForm" component={this.getBookCopySharingBenefitConfigurationCreateForm()} />
               <Route path="/bookManagement/:id/list/bookCopySharingBenefitConfigurationUpdateForm" component={this.getBookCopySharingBenefitConfigurationUpdateForm()} />

               <Route path="/bookManagement/:id/list/bookCopyDonateBenefitConfigurationList" component={this.getBookCopyDonateBenefitConfigurationSearch()} />
               <Route path="/bookManagement/:id/list/bookCopyDonateBenefitConfigurationCreateForm" component={this.getBookCopyDonateBenefitConfigurationCreateForm()} />
               <Route path="/bookManagement/:id/list/bookCopyDonateBenefitConfigurationUpdateForm" component={this.getBookCopyDonateBenefitConfigurationUpdateForm()} />

               <Route path="/bookManagement/:id/list/bookBorrowConfigurationList" component={this.getBookBorrowConfigurationSearch()} />
               <Route path="/bookManagement/:id/list/bookBorrowConfigurationCreateForm" component={this.getBookBorrowConfigurationCreateForm()} />
               <Route path="/bookManagement/:id/list/bookBorrowConfigurationUpdateForm" component={this.getBookBorrowConfigurationUpdateForm()} />

               <Route path="/bookManagement/:id/list/bookList" component={this.getBookSearch()} />
               <Route path="/bookManagement/:id/list/bookCreateForm" component={this.getBookCreateForm()} />
               <Route path="/bookManagement/:id/list/bookUpdateForm" component={this.getBookUpdateForm()} />

               <Route path="/bookManagement/:id/list/bookCopyStatusList" component={this.getBookCopyStatusSearch()} />
               <Route path="/bookManagement/:id/list/bookCopyStatusCreateForm" component={this.getBookCopyStatusCreateForm()} />
               <Route path="/bookManagement/:id/list/bookCopyStatusUpdateForm" component={this.getBookCopyStatusUpdateForm()} />

               <Route path="/bookManagement/:id/list/bookCopySkuList" component={this.getBookCopySkuSearch()} />
               <Route path="/bookManagement/:id/list/bookCopySkuCreateForm" component={this.getBookCopySkuCreateForm()} />
               <Route path="/bookManagement/:id/list/bookCopySkuUpdateForm" component={this.getBookCopySkuUpdateForm()} />

               <Route path="/bookManagement/:id/list/bookCopyCheckPlanList" component={this.getBookCopyCheckPlanSearch()} />
               <Route path="/bookManagement/:id/list/bookCopyCheckPlanCreateForm" component={this.getBookCopyCheckPlanCreateForm()} />
               <Route path="/bookManagement/:id/list/bookCopyCheckPlanUpdateForm" component={this.getBookCopyCheckPlanUpdateForm()} />

               <Route path="/bookManagement/:id/list/bookCopyCheckStatusList" component={this.getBookCopyCheckStatusSearch()} />
               <Route path="/bookManagement/:id/list/bookCopyCheckStatusCreateForm" component={this.getBookCopyCheckStatusCreateForm()} />
               <Route path="/bookManagement/:id/list/bookCopyCheckStatusUpdateForm" component={this.getBookCopyCheckStatusUpdateForm()} />

               <Route path="/bookManagement/:id/list/bookReviewTypeList" component={this.getBookReviewTypeSearch()} />
               <Route path="/bookManagement/:id/list/bookReviewTypeCreateForm" component={this.getBookReviewTypeCreateForm()} />
               <Route path="/bookManagement/:id/list/bookReviewTypeUpdateForm" component={this.getBookReviewTypeUpdateForm()} />
              
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
  bookManagement: state._bookManagement,
  ...state,
}))(BookManagementBizApp)



