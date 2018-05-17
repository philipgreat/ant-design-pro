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
import styles from './BookCopy.app.less'
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


  
const menuData = {menuName:"书副本", menuFor: "bookCopy",
  		subItems: [
  {name: 'bookTagRecordList', displayName:'书标签记录'},
  {name: 'bookCopySkuList', displayName:'书副本Sku'},
  {name: 'bookCopyCheckRecordList', displayName:'书副本检查记录'},
  {name: 'bookCopyOperationRecordList', displayName:'书复制操作记录'},
  {name: 'borrowingHistoryList', displayName:'借贷历史'},
  {name: 'borrowingExpiredSkuList', displayName:'借款到期Sku'},
  {name: 'bookReviewList', displayName:'书评'},
  		
  		
  		],
};

class BookCopyBizApp extends React.PureComponent {
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
      return ['/bookCopy/']
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
      data: state._bookCopy.bookTagRecordList,
      count: state._bookCopy.bookTagRecordCount,
      currentPage: state._bookCopy.bookTagRecordCurrentPageNumber,
      searchFormParameters: state._bookCopy.bookTagRecordSearchFormParameters,
      loading: state._bookCopy.loading,
      partialList: state._bookCopy.partialList,
      owner: { type: '_bookCopy', id: state._bookCopy.id, referenceName: 'bookCopy', listName: 'bookTagRecordList', ref:state._bookCopy, listDisplayName: '书标签记录列表' }, // this is for model namespace and
    }))(BookTagRecordSearch)
  }
  getBookTagRecordCreateForm = () => {
   	const {BookTagRecordCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._bookCopy.bookTagRecordList,
      count: state._bookCopy.bookTagRecordCount,
      currentPage: state._bookCopy.bookTagRecordCurrentPageNumber,
      searchFormParameters: state._bookCopy.bookTagRecordSearchFormParameters,
      loading: state._bookCopy.loading,
      owner: { type: '_bookCopy', id: state._bookCopy.id, referenceName: 'bookCopy', listName: 'bookTagRecordList', ref:state._bookCopy, listDisplayName: '书标签记录列表'}, // this is for model namespace and
    }))(BookTagRecordCreateForm)
  }
  
  getBookTagRecordUpdateForm = () => {
  	const {BookTagRecordUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._bookCopy.selectedRows,
      currentUpdateIndex: state._bookCopy.currentUpdateIndex,
      owner: { type: '_bookCopy', id: state._bookCopy.id, listName: 'bookTagRecordList', ref:state._bookCopy, listDisplayName: '书标签记录列表' }, // this is for model namespace and
    }))(BookTagRecordUpdateForm)
  }

  getBookCopySkuSearch = () => {
    const {BookCopySkuSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._bookCopy.bookCopySkuList,
      count: state._bookCopy.bookCopySkuCount,
      currentPage: state._bookCopy.bookCopySkuCurrentPageNumber,
      searchFormParameters: state._bookCopy.bookCopySkuSearchFormParameters,
      loading: state._bookCopy.loading,
      partialList: state._bookCopy.partialList,
      owner: { type: '_bookCopy', id: state._bookCopy.id, referenceName: 'bookCopy', listName: 'bookCopySkuList', ref:state._bookCopy, listDisplayName: '书副本Sku列表' }, // this is for model namespace and
    }))(BookCopySkuSearch)
  }
  getBookCopySkuCreateForm = () => {
   	const {BookCopySkuCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._bookCopy.bookCopySkuList,
      count: state._bookCopy.bookCopySkuCount,
      currentPage: state._bookCopy.bookCopySkuCurrentPageNumber,
      searchFormParameters: state._bookCopy.bookCopySkuSearchFormParameters,
      loading: state._bookCopy.loading,
      owner: { type: '_bookCopy', id: state._bookCopy.id, referenceName: 'bookCopy', listName: 'bookCopySkuList', ref:state._bookCopy, listDisplayName: '书副本Sku列表'}, // this is for model namespace and
    }))(BookCopySkuCreateForm)
  }
  
  getBookCopySkuUpdateForm = () => {
  	const {BookCopySkuUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._bookCopy.selectedRows,
      currentUpdateIndex: state._bookCopy.currentUpdateIndex,
      owner: { type: '_bookCopy', id: state._bookCopy.id, listName: 'bookCopySkuList', ref:state._bookCopy, listDisplayName: '书副本Sku列表' }, // this is for model namespace and
    }))(BookCopySkuUpdateForm)
  }

  getBookCopyCheckRecordSearch = () => {
    const {BookCopyCheckRecordSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._bookCopy.bookCopyCheckRecordList,
      count: state._bookCopy.bookCopyCheckRecordCount,
      currentPage: state._bookCopy.bookCopyCheckRecordCurrentPageNumber,
      searchFormParameters: state._bookCopy.bookCopyCheckRecordSearchFormParameters,
      loading: state._bookCopy.loading,
      partialList: state._bookCopy.partialList,
      owner: { type: '_bookCopy', id: state._bookCopy.id, referenceName: 'bookCopy', listName: 'bookCopyCheckRecordList', ref:state._bookCopy, listDisplayName: '书副本检查记录列表' }, // this is for model namespace and
    }))(BookCopyCheckRecordSearch)
  }
  getBookCopyCheckRecordCreateForm = () => {
   	const {BookCopyCheckRecordCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._bookCopy.bookCopyCheckRecordList,
      count: state._bookCopy.bookCopyCheckRecordCount,
      currentPage: state._bookCopy.bookCopyCheckRecordCurrentPageNumber,
      searchFormParameters: state._bookCopy.bookCopyCheckRecordSearchFormParameters,
      loading: state._bookCopy.loading,
      owner: { type: '_bookCopy', id: state._bookCopy.id, referenceName: 'bookCopy', listName: 'bookCopyCheckRecordList', ref:state._bookCopy, listDisplayName: '书副本检查记录列表'}, // this is for model namespace and
    }))(BookCopyCheckRecordCreateForm)
  }
  
  getBookCopyCheckRecordUpdateForm = () => {
  	const {BookCopyCheckRecordUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._bookCopy.selectedRows,
      currentUpdateIndex: state._bookCopy.currentUpdateIndex,
      owner: { type: '_bookCopy', id: state._bookCopy.id, listName: 'bookCopyCheckRecordList', ref:state._bookCopy, listDisplayName: '书副本检查记录列表' }, // this is for model namespace and
    }))(BookCopyCheckRecordUpdateForm)
  }

  getBookCopyOperationRecordSearch = () => {
    const {BookCopyOperationRecordSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._bookCopy.bookCopyOperationRecordList,
      count: state._bookCopy.bookCopyOperationRecordCount,
      currentPage: state._bookCopy.bookCopyOperationRecordCurrentPageNumber,
      searchFormParameters: state._bookCopy.bookCopyOperationRecordSearchFormParameters,
      loading: state._bookCopy.loading,
      partialList: state._bookCopy.partialList,
      owner: { type: '_bookCopy', id: state._bookCopy.id, referenceName: 'bookCopy', listName: 'bookCopyOperationRecordList', ref:state._bookCopy, listDisplayName: '书复制操作记录列表' }, // this is for model namespace and
    }))(BookCopyOperationRecordSearch)
  }
  getBookCopyOperationRecordCreateForm = () => {
   	const {BookCopyOperationRecordCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._bookCopy.bookCopyOperationRecordList,
      count: state._bookCopy.bookCopyOperationRecordCount,
      currentPage: state._bookCopy.bookCopyOperationRecordCurrentPageNumber,
      searchFormParameters: state._bookCopy.bookCopyOperationRecordSearchFormParameters,
      loading: state._bookCopy.loading,
      owner: { type: '_bookCopy', id: state._bookCopy.id, referenceName: 'bookCopy', listName: 'bookCopyOperationRecordList', ref:state._bookCopy, listDisplayName: '书复制操作记录列表'}, // this is for model namespace and
    }))(BookCopyOperationRecordCreateForm)
  }
  
  getBookCopyOperationRecordUpdateForm = () => {
  	const {BookCopyOperationRecordUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._bookCopy.selectedRows,
      currentUpdateIndex: state._bookCopy.currentUpdateIndex,
      owner: { type: '_bookCopy', id: state._bookCopy.id, listName: 'bookCopyOperationRecordList', ref:state._bookCopy, listDisplayName: '书复制操作记录列表' }, // this is for model namespace and
    }))(BookCopyOperationRecordUpdateForm)
  }

  getBorrowingHistorySearch = () => {
    const {BorrowingHistorySearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._bookCopy.borrowingHistoryList,
      count: state._bookCopy.borrowingHistoryCount,
      currentPage: state._bookCopy.borrowingHistoryCurrentPageNumber,
      searchFormParameters: state._bookCopy.borrowingHistorySearchFormParameters,
      loading: state._bookCopy.loading,
      partialList: state._bookCopy.partialList,
      owner: { type: '_bookCopy', id: state._bookCopy.id, referenceName: 'bookCopy', listName: 'borrowingHistoryList', ref:state._bookCopy, listDisplayName: '借贷历史列表' }, // this is for model namespace and
    }))(BorrowingHistorySearch)
  }
  getBorrowingHistoryCreateForm = () => {
   	const {BorrowingHistoryCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._bookCopy.borrowingHistoryList,
      count: state._bookCopy.borrowingHistoryCount,
      currentPage: state._bookCopy.borrowingHistoryCurrentPageNumber,
      searchFormParameters: state._bookCopy.borrowingHistorySearchFormParameters,
      loading: state._bookCopy.loading,
      owner: { type: '_bookCopy', id: state._bookCopy.id, referenceName: 'bookCopy', listName: 'borrowingHistoryList', ref:state._bookCopy, listDisplayName: '借贷历史列表'}, // this is for model namespace and
    }))(BorrowingHistoryCreateForm)
  }
  
  getBorrowingHistoryUpdateForm = () => {
  	const {BorrowingHistoryUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._bookCopy.selectedRows,
      currentUpdateIndex: state._bookCopy.currentUpdateIndex,
      owner: { type: '_bookCopy', id: state._bookCopy.id, listName: 'borrowingHistoryList', ref:state._bookCopy, listDisplayName: '借贷历史列表' }, // this is for model namespace and
    }))(BorrowingHistoryUpdateForm)
  }

  getBorrowingExpiredSkuSearch = () => {
    const {BorrowingExpiredSkuSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._bookCopy.borrowingExpiredSkuList,
      count: state._bookCopy.borrowingExpiredSkuCount,
      currentPage: state._bookCopy.borrowingExpiredSkuCurrentPageNumber,
      searchFormParameters: state._bookCopy.borrowingExpiredSkuSearchFormParameters,
      loading: state._bookCopy.loading,
      partialList: state._bookCopy.partialList,
      owner: { type: '_bookCopy', id: state._bookCopy.id, referenceName: 'bookCopy', listName: 'borrowingExpiredSkuList', ref:state._bookCopy, listDisplayName: '借款到期Sku列表' }, // this is for model namespace and
    }))(BorrowingExpiredSkuSearch)
  }
  getBorrowingExpiredSkuCreateForm = () => {
   	const {BorrowingExpiredSkuCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._bookCopy.borrowingExpiredSkuList,
      count: state._bookCopy.borrowingExpiredSkuCount,
      currentPage: state._bookCopy.borrowingExpiredSkuCurrentPageNumber,
      searchFormParameters: state._bookCopy.borrowingExpiredSkuSearchFormParameters,
      loading: state._bookCopy.loading,
      owner: { type: '_bookCopy', id: state._bookCopy.id, referenceName: 'bookCopy', listName: 'borrowingExpiredSkuList', ref:state._bookCopy, listDisplayName: '借款到期Sku列表'}, // this is for model namespace and
    }))(BorrowingExpiredSkuCreateForm)
  }
  
  getBorrowingExpiredSkuUpdateForm = () => {
  	const {BorrowingExpiredSkuUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._bookCopy.selectedRows,
      currentUpdateIndex: state._bookCopy.currentUpdateIndex,
      owner: { type: '_bookCopy', id: state._bookCopy.id, listName: 'borrowingExpiredSkuList', ref:state._bookCopy, listDisplayName: '借款到期Sku列表' }, // this is for model namespace and
    }))(BorrowingExpiredSkuUpdateForm)
  }

  getBookReviewSearch = () => {
    const {BookReviewSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._bookCopy.bookReviewList,
      count: state._bookCopy.bookReviewCount,
      currentPage: state._bookCopy.bookReviewCurrentPageNumber,
      searchFormParameters: state._bookCopy.bookReviewSearchFormParameters,
      loading: state._bookCopy.loading,
      partialList: state._bookCopy.partialList,
      owner: { type: '_bookCopy', id: state._bookCopy.id, referenceName: 'bookCopy', listName: 'bookReviewList', ref:state._bookCopy, listDisplayName: '书评列表' }, // this is for model namespace and
    }))(BookReviewSearch)
  }
  getBookReviewCreateForm = () => {
   	const {BookReviewCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._bookCopy.bookReviewList,
      count: state._bookCopy.bookReviewCount,
      currentPage: state._bookCopy.bookReviewCurrentPageNumber,
      searchFormParameters: state._bookCopy.bookReviewSearchFormParameters,
      loading: state._bookCopy.loading,
      owner: { type: '_bookCopy', id: state._bookCopy.id, referenceName: 'bookCopy', listName: 'bookReviewList', ref:state._bookCopy, listDisplayName: '书评列表'}, // this is for model namespace and
    }))(BookReviewCreateForm)
  }
  
  getBookReviewUpdateForm = () => {
  	const {BookReviewUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._bookCopy.selectedRows,
      currentUpdateIndex: state._bookCopy.currentUpdateIndex,
      owner: { type: '_bookCopy', id: state._bookCopy.id, listName: 'bookReviewList', ref:state._bookCopy, listDisplayName: '书评列表' }, // this is for model namespace and
    }))(BookReviewUpdateForm)
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
     const {BookCopyDashboard} = GlobalComponents
     //const {BookCopyEditDetail} = GlobalComponents
     //const {BookCopyViewDetail} = GlobalComponents
     
     
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
               <Link to={`/bookCopy/${this.props.bookCopy.id}/dashboard`}><Icon type="dashboard" /><span>仪表板</span></Link>
             </Menu.Item>


             {this.getNavMenuItems(this.props.bookCopy.id)}
             <Menu.Item key="homepage">
               <Link to={"/home"}><Icon type="home" /><span>回到主页</span></Link>
             </Menu.Item>
           </Menu>
         </Sider>
         <Layout>
           <Content style={{ margin: '24px 24px 0', height: '100%' }}>
             <Switch>
             
               <Route path="/bookCopy/:id/dashboard" component={BookCopyDashboard} />
               
               

               <Route path="/bookCopy/:id/list/bookTagRecordList" component={this.getBookTagRecordSearch()} />
               <Route path="/bookCopy/:id/list/bookTagRecordCreateForm" component={this.getBookTagRecordCreateForm()} />
               <Route path="/bookCopy/:id/list/bookTagRecordUpdateForm" component={this.getBookTagRecordUpdateForm()} />

               <Route path="/bookCopy/:id/list/bookCopySkuList" component={this.getBookCopySkuSearch()} />
               <Route path="/bookCopy/:id/list/bookCopySkuCreateForm" component={this.getBookCopySkuCreateForm()} />
               <Route path="/bookCopy/:id/list/bookCopySkuUpdateForm" component={this.getBookCopySkuUpdateForm()} />

               <Route path="/bookCopy/:id/list/bookCopyCheckRecordList" component={this.getBookCopyCheckRecordSearch()} />
               <Route path="/bookCopy/:id/list/bookCopyCheckRecordCreateForm" component={this.getBookCopyCheckRecordCreateForm()} />
               <Route path="/bookCopy/:id/list/bookCopyCheckRecordUpdateForm" component={this.getBookCopyCheckRecordUpdateForm()} />

               <Route path="/bookCopy/:id/list/bookCopyOperationRecordList" component={this.getBookCopyOperationRecordSearch()} />
               <Route path="/bookCopy/:id/list/bookCopyOperationRecordCreateForm" component={this.getBookCopyOperationRecordCreateForm()} />
               <Route path="/bookCopy/:id/list/bookCopyOperationRecordUpdateForm" component={this.getBookCopyOperationRecordUpdateForm()} />

               <Route path="/bookCopy/:id/list/borrowingHistoryList" component={this.getBorrowingHistorySearch()} />
               <Route path="/bookCopy/:id/list/borrowingHistoryCreateForm" component={this.getBorrowingHistoryCreateForm()} />
               <Route path="/bookCopy/:id/list/borrowingHistoryUpdateForm" component={this.getBorrowingHistoryUpdateForm()} />

               <Route path="/bookCopy/:id/list/borrowingExpiredSkuList" component={this.getBorrowingExpiredSkuSearch()} />
               <Route path="/bookCopy/:id/list/borrowingExpiredSkuCreateForm" component={this.getBorrowingExpiredSkuCreateForm()} />
               <Route path="/bookCopy/:id/list/borrowingExpiredSkuUpdateForm" component={this.getBorrowingExpiredSkuUpdateForm()} />

               <Route path="/bookCopy/:id/list/bookReviewList" component={this.getBookReviewSearch()} />
               <Route path="/bookCopy/:id/list/bookReviewCreateForm" component={this.getBookReviewCreateForm()} />
               <Route path="/bookCopy/:id/list/bookReviewUpdateForm" component={this.getBookReviewUpdateForm()} />
              
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
  bookCopy: state._bookCopy,
  ...state,
}))(BookCopyBizApp)



