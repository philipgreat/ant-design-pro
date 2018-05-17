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
import styles from './AccountManagement.app.less'
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


  
const menuData = {menuName:"账户管理", menuFor: "accountManagement",
  		subItems: [
  {name: 'memberAccountRechargeProductList', displayName:'会员帐户充电产品'},
  {name: 'platformAccountList', displayName:'平台账户'},
  {name: 'fundationAccountList', displayName:'基金账户'},
  {name: 'storeAccountList', displayName:'存储账户'},
  {name: 'customerAccountList', displayName:'客户账户'},
  		
  		
  		],
};

class AccountManagementBizApp extends React.PureComponent {
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
      return ['/accountManagement/']
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
  



  getMemberAccountRechargeProductSearch = () => {
    const {MemberAccountRechargeProductSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._accountManagement.memberAccountRechargeProductList,
      count: state._accountManagement.memberAccountRechargeProductCount,
      currentPage: state._accountManagement.memberAccountRechargeProductCurrentPageNumber,
      searchFormParameters: state._accountManagement.memberAccountRechargeProductSearchFormParameters,
      loading: state._accountManagement.loading,
      partialList: state._accountManagement.partialList,
      owner: { type: '_accountManagement', id: state._accountManagement.id, referenceName: 'accountManagement', listName: 'memberAccountRechargeProductList', ref:state._accountManagement, listDisplayName: '会员帐户充电产品列表' }, // this is for model namespace and
    }))(MemberAccountRechargeProductSearch)
  }
  getMemberAccountRechargeProductCreateForm = () => {
   	const {MemberAccountRechargeProductCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._accountManagement.memberAccountRechargeProductList,
      count: state._accountManagement.memberAccountRechargeProductCount,
      currentPage: state._accountManagement.memberAccountRechargeProductCurrentPageNumber,
      searchFormParameters: state._accountManagement.memberAccountRechargeProductSearchFormParameters,
      loading: state._accountManagement.loading,
      owner: { type: '_accountManagement', id: state._accountManagement.id, referenceName: 'accountManagement', listName: 'memberAccountRechargeProductList', ref:state._accountManagement, listDisplayName: '会员帐户充电产品列表'}, // this is for model namespace and
    }))(MemberAccountRechargeProductCreateForm)
  }
  
  getMemberAccountRechargeProductUpdateForm = () => {
  	const {MemberAccountRechargeProductUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._accountManagement.selectedRows,
      currentUpdateIndex: state._accountManagement.currentUpdateIndex,
      owner: { type: '_accountManagement', id: state._accountManagement.id, listName: 'memberAccountRechargeProductList', ref:state._accountManagement, listDisplayName: '会员帐户充电产品列表' }, // this is for model namespace and
    }))(MemberAccountRechargeProductUpdateForm)
  }

  getPlatformAccountSearch = () => {
    const {PlatformAccountSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._accountManagement.platformAccountList,
      count: state._accountManagement.platformAccountCount,
      currentPage: state._accountManagement.platformAccountCurrentPageNumber,
      searchFormParameters: state._accountManagement.platformAccountSearchFormParameters,
      loading: state._accountManagement.loading,
      partialList: state._accountManagement.partialList,
      owner: { type: '_accountManagement', id: state._accountManagement.id, referenceName: 'accountManagement', listName: 'platformAccountList', ref:state._accountManagement, listDisplayName: '平台账户列表' }, // this is for model namespace and
    }))(PlatformAccountSearch)
  }
  getPlatformAccountCreateForm = () => {
   	const {PlatformAccountCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._accountManagement.platformAccountList,
      count: state._accountManagement.platformAccountCount,
      currentPage: state._accountManagement.platformAccountCurrentPageNumber,
      searchFormParameters: state._accountManagement.platformAccountSearchFormParameters,
      loading: state._accountManagement.loading,
      owner: { type: '_accountManagement', id: state._accountManagement.id, referenceName: 'accountManagement', listName: 'platformAccountList', ref:state._accountManagement, listDisplayName: '平台账户列表'}, // this is for model namespace and
    }))(PlatformAccountCreateForm)
  }
  
  getPlatformAccountUpdateForm = () => {
  	const {PlatformAccountUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._accountManagement.selectedRows,
      currentUpdateIndex: state._accountManagement.currentUpdateIndex,
      owner: { type: '_accountManagement', id: state._accountManagement.id, listName: 'platformAccountList', ref:state._accountManagement, listDisplayName: '平台账户列表' }, // this is for model namespace and
    }))(PlatformAccountUpdateForm)
  }

  getFundationAccountSearch = () => {
    const {FundationAccountSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._accountManagement.fundationAccountList,
      count: state._accountManagement.fundationAccountCount,
      currentPage: state._accountManagement.fundationAccountCurrentPageNumber,
      searchFormParameters: state._accountManagement.fundationAccountSearchFormParameters,
      loading: state._accountManagement.loading,
      partialList: state._accountManagement.partialList,
      owner: { type: '_accountManagement', id: state._accountManagement.id, referenceName: 'accountManagement', listName: 'fundationAccountList', ref:state._accountManagement, listDisplayName: '基金账户列表' }, // this is for model namespace and
    }))(FundationAccountSearch)
  }
  getFundationAccountCreateForm = () => {
   	const {FundationAccountCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._accountManagement.fundationAccountList,
      count: state._accountManagement.fundationAccountCount,
      currentPage: state._accountManagement.fundationAccountCurrentPageNumber,
      searchFormParameters: state._accountManagement.fundationAccountSearchFormParameters,
      loading: state._accountManagement.loading,
      owner: { type: '_accountManagement', id: state._accountManagement.id, referenceName: 'accountManagement', listName: 'fundationAccountList', ref:state._accountManagement, listDisplayName: '基金账户列表'}, // this is for model namespace and
    }))(FundationAccountCreateForm)
  }
  
  getFundationAccountUpdateForm = () => {
  	const {FundationAccountUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._accountManagement.selectedRows,
      currentUpdateIndex: state._accountManagement.currentUpdateIndex,
      owner: { type: '_accountManagement', id: state._accountManagement.id, listName: 'fundationAccountList', ref:state._accountManagement, listDisplayName: '基金账户列表' }, // this is for model namespace and
    }))(FundationAccountUpdateForm)
  }

  getStoreAccountSearch = () => {
    const {StoreAccountSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._accountManagement.storeAccountList,
      count: state._accountManagement.storeAccountCount,
      currentPage: state._accountManagement.storeAccountCurrentPageNumber,
      searchFormParameters: state._accountManagement.storeAccountSearchFormParameters,
      loading: state._accountManagement.loading,
      partialList: state._accountManagement.partialList,
      owner: { type: '_accountManagement', id: state._accountManagement.id, referenceName: 'accountManagement', listName: 'storeAccountList', ref:state._accountManagement, listDisplayName: '存储账户列表' }, // this is for model namespace and
    }))(StoreAccountSearch)
  }
  getStoreAccountCreateForm = () => {
   	const {StoreAccountCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._accountManagement.storeAccountList,
      count: state._accountManagement.storeAccountCount,
      currentPage: state._accountManagement.storeAccountCurrentPageNumber,
      searchFormParameters: state._accountManagement.storeAccountSearchFormParameters,
      loading: state._accountManagement.loading,
      owner: { type: '_accountManagement', id: state._accountManagement.id, referenceName: 'accountManagement', listName: 'storeAccountList', ref:state._accountManagement, listDisplayName: '存储账户列表'}, // this is for model namespace and
    }))(StoreAccountCreateForm)
  }
  
  getStoreAccountUpdateForm = () => {
  	const {StoreAccountUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._accountManagement.selectedRows,
      currentUpdateIndex: state._accountManagement.currentUpdateIndex,
      owner: { type: '_accountManagement', id: state._accountManagement.id, listName: 'storeAccountList', ref:state._accountManagement, listDisplayName: '存储账户列表' }, // this is for model namespace and
    }))(StoreAccountUpdateForm)
  }

  getCustomerAccountSearch = () => {
    const {CustomerAccountSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._accountManagement.customerAccountList,
      count: state._accountManagement.customerAccountCount,
      currentPage: state._accountManagement.customerAccountCurrentPageNumber,
      searchFormParameters: state._accountManagement.customerAccountSearchFormParameters,
      loading: state._accountManagement.loading,
      partialList: state._accountManagement.partialList,
      owner: { type: '_accountManagement', id: state._accountManagement.id, referenceName: 'accountManagement', listName: 'customerAccountList', ref:state._accountManagement, listDisplayName: '客户账户列表' }, // this is for model namespace and
    }))(CustomerAccountSearch)
  }
  getCustomerAccountCreateForm = () => {
   	const {CustomerAccountCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._accountManagement.customerAccountList,
      count: state._accountManagement.customerAccountCount,
      currentPage: state._accountManagement.customerAccountCurrentPageNumber,
      searchFormParameters: state._accountManagement.customerAccountSearchFormParameters,
      loading: state._accountManagement.loading,
      owner: { type: '_accountManagement', id: state._accountManagement.id, referenceName: 'accountManagement', listName: 'customerAccountList', ref:state._accountManagement, listDisplayName: '客户账户列表'}, // this is for model namespace and
    }))(CustomerAccountCreateForm)
  }
  
  getCustomerAccountUpdateForm = () => {
  	const {CustomerAccountUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._accountManagement.selectedRows,
      currentUpdateIndex: state._accountManagement.currentUpdateIndex,
      owner: { type: '_accountManagement', id: state._accountManagement.id, listName: 'customerAccountList', ref:state._accountManagement, listDisplayName: '客户账户列表' }, // this is for model namespace and
    }))(CustomerAccountUpdateForm)
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
     const {AccountManagementDashboard} = GlobalComponents
     //const {AccountManagementEditDetail} = GlobalComponents
     //const {AccountManagementViewDetail} = GlobalComponents
     
     
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
               <Link to={`/accountManagement/${this.props.accountManagement.id}/dashboard`}><Icon type="dashboard" /><span>仪表板</span></Link>
             </Menu.Item>


             {this.getNavMenuItems(this.props.accountManagement.id)}
             <Menu.Item key="homepage">
               <Link to={"/home"}><Icon type="home" /><span>回到主页</span></Link>
             </Menu.Item>
           </Menu>
         </Sider>
         <Layout>
           <Content style={{ margin: '24px 24px 0', height: '100%' }}>
             <Switch>
             
               <Route path="/accountManagement/:id/dashboard" component={AccountManagementDashboard} />
               
               

               <Route path="/accountManagement/:id/list/memberAccountRechargeProductList" component={this.getMemberAccountRechargeProductSearch()} />
               <Route path="/accountManagement/:id/list/memberAccountRechargeProductCreateForm" component={this.getMemberAccountRechargeProductCreateForm()} />
               <Route path="/accountManagement/:id/list/memberAccountRechargeProductUpdateForm" component={this.getMemberAccountRechargeProductUpdateForm()} />

               <Route path="/accountManagement/:id/list/platformAccountList" component={this.getPlatformAccountSearch()} />
               <Route path="/accountManagement/:id/list/platformAccountCreateForm" component={this.getPlatformAccountCreateForm()} />
               <Route path="/accountManagement/:id/list/platformAccountUpdateForm" component={this.getPlatformAccountUpdateForm()} />

               <Route path="/accountManagement/:id/list/fundationAccountList" component={this.getFundationAccountSearch()} />
               <Route path="/accountManagement/:id/list/fundationAccountCreateForm" component={this.getFundationAccountCreateForm()} />
               <Route path="/accountManagement/:id/list/fundationAccountUpdateForm" component={this.getFundationAccountUpdateForm()} />

               <Route path="/accountManagement/:id/list/storeAccountList" component={this.getStoreAccountSearch()} />
               <Route path="/accountManagement/:id/list/storeAccountCreateForm" component={this.getStoreAccountCreateForm()} />
               <Route path="/accountManagement/:id/list/storeAccountUpdateForm" component={this.getStoreAccountUpdateForm()} />

               <Route path="/accountManagement/:id/list/customerAccountList" component={this.getCustomerAccountSearch()} />
               <Route path="/accountManagement/:id/list/customerAccountCreateForm" component={this.getCustomerAccountCreateForm()} />
               <Route path="/accountManagement/:id/list/customerAccountUpdateForm" component={this.getCustomerAccountUpdateForm()} />
              
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
  accountManagement: state._accountManagement,
  ...state,
}))(AccountManagementBizApp)



