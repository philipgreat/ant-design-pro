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
import styles from './MainOrder.app.less'
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


  
const menuData = {menuName:"主订单", menuFor: "mainOrder",
  		subItems: [
  {name: 'lineItemList', displayName:'行项目'},
  {name: 'mainOrderPaymentList', displayName:'主要订单付款'},
  {name: 'platformAccountDetailsList', displayName:'平台账户信息'},
  {name: 'fundationAccountDetailsList', displayName:'基金账户信息'},
  {name: 'storeAccountDetailsList', displayName:'存储帐户详细信息'},
  {name: 'customerAccountDetailsList', displayName:'客户账户信息'},
  		
  		
  		],
};

class MainOrderBizApp extends React.PureComponent {
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
      return ['/mainOrder/']
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
  



  getLineItemSearch = () => {
    const {LineItemSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._mainOrder.lineItemList,
      count: state._mainOrder.lineItemCount,
      currentPage: state._mainOrder.lineItemCurrentPageNumber,
      searchFormParameters: state._mainOrder.lineItemSearchFormParameters,
      loading: state._mainOrder.loading,
      partialList: state._mainOrder.partialList,
      owner: { type: '_mainOrder', id: state._mainOrder.id, referenceName: 'mainOrder', listName: 'lineItemList', ref:state._mainOrder, listDisplayName: '行项目列表' }, // this is for model namespace and
    }))(LineItemSearch)
  }
  getLineItemCreateForm = () => {
   	const {LineItemCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._mainOrder.lineItemList,
      count: state._mainOrder.lineItemCount,
      currentPage: state._mainOrder.lineItemCurrentPageNumber,
      searchFormParameters: state._mainOrder.lineItemSearchFormParameters,
      loading: state._mainOrder.loading,
      owner: { type: '_mainOrder', id: state._mainOrder.id, referenceName: 'mainOrder', listName: 'lineItemList', ref:state._mainOrder, listDisplayName: '行项目列表'}, // this is for model namespace and
    }))(LineItemCreateForm)
  }
  
  getLineItemUpdateForm = () => {
  	const {LineItemUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._mainOrder.selectedRows,
      currentUpdateIndex: state._mainOrder.currentUpdateIndex,
      owner: { type: '_mainOrder', id: state._mainOrder.id, listName: 'lineItemList', ref:state._mainOrder, listDisplayName: '行项目列表' }, // this is for model namespace and
    }))(LineItemUpdateForm)
  }

  getMainOrderPaymentSearch = () => {
    const {MainOrderPaymentSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._mainOrder.mainOrderPaymentList,
      count: state._mainOrder.mainOrderPaymentCount,
      currentPage: state._mainOrder.mainOrderPaymentCurrentPageNumber,
      searchFormParameters: state._mainOrder.mainOrderPaymentSearchFormParameters,
      loading: state._mainOrder.loading,
      partialList: state._mainOrder.partialList,
      owner: { type: '_mainOrder', id: state._mainOrder.id, referenceName: 'mainOrder', listName: 'mainOrderPaymentList', ref:state._mainOrder, listDisplayName: '主要订单付款列表' }, // this is for model namespace and
    }))(MainOrderPaymentSearch)
  }
  getMainOrderPaymentCreateForm = () => {
   	const {MainOrderPaymentCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._mainOrder.mainOrderPaymentList,
      count: state._mainOrder.mainOrderPaymentCount,
      currentPage: state._mainOrder.mainOrderPaymentCurrentPageNumber,
      searchFormParameters: state._mainOrder.mainOrderPaymentSearchFormParameters,
      loading: state._mainOrder.loading,
      owner: { type: '_mainOrder', id: state._mainOrder.id, referenceName: 'mainOrder', listName: 'mainOrderPaymentList', ref:state._mainOrder, listDisplayName: '主要订单付款列表'}, // this is for model namespace and
    }))(MainOrderPaymentCreateForm)
  }
  
  getMainOrderPaymentUpdateForm = () => {
  	const {MainOrderPaymentUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._mainOrder.selectedRows,
      currentUpdateIndex: state._mainOrder.currentUpdateIndex,
      owner: { type: '_mainOrder', id: state._mainOrder.id, listName: 'mainOrderPaymentList', ref:state._mainOrder, listDisplayName: '主要订单付款列表' }, // this is for model namespace and
    }))(MainOrderPaymentUpdateForm)
  }

  getPlatformAccountDetailsSearch = () => {
    const {PlatformAccountDetailsSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._mainOrder.platformAccountDetailsList,
      count: state._mainOrder.platformAccountDetailsCount,
      currentPage: state._mainOrder.platformAccountDetailsCurrentPageNumber,
      searchFormParameters: state._mainOrder.platformAccountDetailsSearchFormParameters,
      loading: state._mainOrder.loading,
      partialList: state._mainOrder.partialList,
      owner: { type: '_mainOrder', id: state._mainOrder.id, referenceName: 'relatedMainOrder', listName: 'platformAccountDetailsList', ref:state._mainOrder, listDisplayName: '平台账户信息列表' }, // this is for model namespace and
    }))(PlatformAccountDetailsSearch)
  }
  getPlatformAccountDetailsCreateForm = () => {
   	const {PlatformAccountDetailsCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._mainOrder.platformAccountDetailsList,
      count: state._mainOrder.platformAccountDetailsCount,
      currentPage: state._mainOrder.platformAccountDetailsCurrentPageNumber,
      searchFormParameters: state._mainOrder.platformAccountDetailsSearchFormParameters,
      loading: state._mainOrder.loading,
      owner: { type: '_mainOrder', id: state._mainOrder.id, referenceName: 'relatedMainOrder', listName: 'platformAccountDetailsList', ref:state._mainOrder, listDisplayName: '平台账户信息列表'}, // this is for model namespace and
    }))(PlatformAccountDetailsCreateForm)
  }
  
  getPlatformAccountDetailsUpdateForm = () => {
  	const {PlatformAccountDetailsUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._mainOrder.selectedRows,
      currentUpdateIndex: state._mainOrder.currentUpdateIndex,
      owner: { type: '_mainOrder', id: state._mainOrder.id, listName: 'platformAccountDetailsList', ref:state._mainOrder, listDisplayName: '平台账户信息列表' }, // this is for model namespace and
    }))(PlatformAccountDetailsUpdateForm)
  }

  getFundationAccountDetailsSearch = () => {
    const {FundationAccountDetailsSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._mainOrder.fundationAccountDetailsList,
      count: state._mainOrder.fundationAccountDetailsCount,
      currentPage: state._mainOrder.fundationAccountDetailsCurrentPageNumber,
      searchFormParameters: state._mainOrder.fundationAccountDetailsSearchFormParameters,
      loading: state._mainOrder.loading,
      partialList: state._mainOrder.partialList,
      owner: { type: '_mainOrder', id: state._mainOrder.id, referenceName: 'relatedMainOrder', listName: 'fundationAccountDetailsList', ref:state._mainOrder, listDisplayName: '基金账户信息列表' }, // this is for model namespace and
    }))(FundationAccountDetailsSearch)
  }
  getFundationAccountDetailsCreateForm = () => {
   	const {FundationAccountDetailsCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._mainOrder.fundationAccountDetailsList,
      count: state._mainOrder.fundationAccountDetailsCount,
      currentPage: state._mainOrder.fundationAccountDetailsCurrentPageNumber,
      searchFormParameters: state._mainOrder.fundationAccountDetailsSearchFormParameters,
      loading: state._mainOrder.loading,
      owner: { type: '_mainOrder', id: state._mainOrder.id, referenceName: 'relatedMainOrder', listName: 'fundationAccountDetailsList', ref:state._mainOrder, listDisplayName: '基金账户信息列表'}, // this is for model namespace and
    }))(FundationAccountDetailsCreateForm)
  }
  
  getFundationAccountDetailsUpdateForm = () => {
  	const {FundationAccountDetailsUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._mainOrder.selectedRows,
      currentUpdateIndex: state._mainOrder.currentUpdateIndex,
      owner: { type: '_mainOrder', id: state._mainOrder.id, listName: 'fundationAccountDetailsList', ref:state._mainOrder, listDisplayName: '基金账户信息列表' }, // this is for model namespace and
    }))(FundationAccountDetailsUpdateForm)
  }

  getStoreAccountDetailsSearch = () => {
    const {StoreAccountDetailsSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._mainOrder.storeAccountDetailsList,
      count: state._mainOrder.storeAccountDetailsCount,
      currentPage: state._mainOrder.storeAccountDetailsCurrentPageNumber,
      searchFormParameters: state._mainOrder.storeAccountDetailsSearchFormParameters,
      loading: state._mainOrder.loading,
      partialList: state._mainOrder.partialList,
      owner: { type: '_mainOrder', id: state._mainOrder.id, referenceName: 'relatedMainOrder', listName: 'storeAccountDetailsList', ref:state._mainOrder, listDisplayName: '存储帐户详细信息列表' }, // this is for model namespace and
    }))(StoreAccountDetailsSearch)
  }
  getStoreAccountDetailsCreateForm = () => {
   	const {StoreAccountDetailsCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._mainOrder.storeAccountDetailsList,
      count: state._mainOrder.storeAccountDetailsCount,
      currentPage: state._mainOrder.storeAccountDetailsCurrentPageNumber,
      searchFormParameters: state._mainOrder.storeAccountDetailsSearchFormParameters,
      loading: state._mainOrder.loading,
      owner: { type: '_mainOrder', id: state._mainOrder.id, referenceName: 'relatedMainOrder', listName: 'storeAccountDetailsList', ref:state._mainOrder, listDisplayName: '存储帐户详细信息列表'}, // this is for model namespace and
    }))(StoreAccountDetailsCreateForm)
  }
  
  getStoreAccountDetailsUpdateForm = () => {
  	const {StoreAccountDetailsUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._mainOrder.selectedRows,
      currentUpdateIndex: state._mainOrder.currentUpdateIndex,
      owner: { type: '_mainOrder', id: state._mainOrder.id, listName: 'storeAccountDetailsList', ref:state._mainOrder, listDisplayName: '存储帐户详细信息列表' }, // this is for model namespace and
    }))(StoreAccountDetailsUpdateForm)
  }

  getCustomerAccountDetailsSearch = () => {
    const {CustomerAccountDetailsSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._mainOrder.customerAccountDetailsList,
      count: state._mainOrder.customerAccountDetailsCount,
      currentPage: state._mainOrder.customerAccountDetailsCurrentPageNumber,
      searchFormParameters: state._mainOrder.customerAccountDetailsSearchFormParameters,
      loading: state._mainOrder.loading,
      partialList: state._mainOrder.partialList,
      owner: { type: '_mainOrder', id: state._mainOrder.id, referenceName: 'relatedMainOrder', listName: 'customerAccountDetailsList', ref:state._mainOrder, listDisplayName: '客户账户信息列表' }, // this is for model namespace and
    }))(CustomerAccountDetailsSearch)
  }
  getCustomerAccountDetailsCreateForm = () => {
   	const {CustomerAccountDetailsCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._mainOrder.customerAccountDetailsList,
      count: state._mainOrder.customerAccountDetailsCount,
      currentPage: state._mainOrder.customerAccountDetailsCurrentPageNumber,
      searchFormParameters: state._mainOrder.customerAccountDetailsSearchFormParameters,
      loading: state._mainOrder.loading,
      owner: { type: '_mainOrder', id: state._mainOrder.id, referenceName: 'relatedMainOrder', listName: 'customerAccountDetailsList', ref:state._mainOrder, listDisplayName: '客户账户信息列表'}, // this is for model namespace and
    }))(CustomerAccountDetailsCreateForm)
  }
  
  getCustomerAccountDetailsUpdateForm = () => {
  	const {CustomerAccountDetailsUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._mainOrder.selectedRows,
      currentUpdateIndex: state._mainOrder.currentUpdateIndex,
      owner: { type: '_mainOrder', id: state._mainOrder.id, listName: 'customerAccountDetailsList', ref:state._mainOrder, listDisplayName: '客户账户信息列表' }, // this is for model namespace and
    }))(CustomerAccountDetailsUpdateForm)
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
     const {MainOrderDashboard} = GlobalComponents
     //const {MainOrderEditDetail} = GlobalComponents
     //const {MainOrderViewDetail} = GlobalComponents
     
     
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
               <Link to={`/mainOrder/${this.props.mainOrder.id}/dashboard`}><Icon type="dashboard" /><span>仪表板</span></Link>
             </Menu.Item>


             {this.getNavMenuItems(this.props.mainOrder.id)}
             <Menu.Item key="homepage">
               <Link to={"/home"}><Icon type="home" /><span>回到主页</span></Link>
             </Menu.Item>
           </Menu>
         </Sider>
         <Layout>
           <Content style={{ margin: '24px 24px 0', height: '100%' }}>
             <Switch>
             
               <Route path="/mainOrder/:id/dashboard" component={MainOrderDashboard} />
               
               

               <Route path="/mainOrder/:id/list/lineItemList" component={this.getLineItemSearch()} />
               <Route path="/mainOrder/:id/list/lineItemCreateForm" component={this.getLineItemCreateForm()} />
               <Route path="/mainOrder/:id/list/lineItemUpdateForm" component={this.getLineItemUpdateForm()} />

               <Route path="/mainOrder/:id/list/mainOrderPaymentList" component={this.getMainOrderPaymentSearch()} />
               <Route path="/mainOrder/:id/list/mainOrderPaymentCreateForm" component={this.getMainOrderPaymentCreateForm()} />
               <Route path="/mainOrder/:id/list/mainOrderPaymentUpdateForm" component={this.getMainOrderPaymentUpdateForm()} />

               <Route path="/mainOrder/:id/list/platformAccountDetailsList" component={this.getPlatformAccountDetailsSearch()} />
               <Route path="/mainOrder/:id/list/platformAccountDetailsCreateForm" component={this.getPlatformAccountDetailsCreateForm()} />
               <Route path="/mainOrder/:id/list/platformAccountDetailsUpdateForm" component={this.getPlatformAccountDetailsUpdateForm()} />

               <Route path="/mainOrder/:id/list/fundationAccountDetailsList" component={this.getFundationAccountDetailsSearch()} />
               <Route path="/mainOrder/:id/list/fundationAccountDetailsCreateForm" component={this.getFundationAccountDetailsCreateForm()} />
               <Route path="/mainOrder/:id/list/fundationAccountDetailsUpdateForm" component={this.getFundationAccountDetailsUpdateForm()} />

               <Route path="/mainOrder/:id/list/storeAccountDetailsList" component={this.getStoreAccountDetailsSearch()} />
               <Route path="/mainOrder/:id/list/storeAccountDetailsCreateForm" component={this.getStoreAccountDetailsCreateForm()} />
               <Route path="/mainOrder/:id/list/storeAccountDetailsUpdateForm" component={this.getStoreAccountDetailsUpdateForm()} />

               <Route path="/mainOrder/:id/list/customerAccountDetailsList" component={this.getCustomerAccountDetailsSearch()} />
               <Route path="/mainOrder/:id/list/customerAccountDetailsCreateForm" component={this.getCustomerAccountDetailsCreateForm()} />
               <Route path="/mainOrder/:id/list/customerAccountDetailsUpdateForm" component={this.getCustomerAccountDetailsUpdateForm()} />
              
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
  mainOrder: state._mainOrder,
  ...state,
}))(MainOrderBizApp)



