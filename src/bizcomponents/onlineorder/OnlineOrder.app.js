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
import styles from './OnlineOrder.app.less'
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


  
const menuData = {menuName:"线上订单号", menuFor: "onlineOrder",
  		subItems: [
  {name: 'onlineOrderPaymentList', displayName:'线上订单支付'},
  {name: 'onlineOrderRedeemHistoryList', displayName:'线上订单兑换记录'},
  {name: 'couponList', displayName:'优惠券'},
  		
  		
  		],
};

class OnlineOrderBizApp extends React.PureComponent {
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
      return ['/onlineOrder/']
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
  



  getOnlineOrderPaymentSearch = () => {
    const {OnlineOrderPaymentSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._onlineOrder.onlineOrderPaymentList,
      count: state._onlineOrder.onlineOrderPaymentCount,
      currentPage: state._onlineOrder.onlineOrderPaymentCurrentPageNumber,
      searchFormParameters: state._onlineOrder.onlineOrderPaymentSearchFormParameters,
      loading: state._onlineOrder.loading,
      partialList: state._onlineOrder.partialList,
      owner: { type: '_onlineOrder', id: state._onlineOrder.id, referenceName: 'onlineOrder', listName: 'onlineOrderPaymentList', ref:state._onlineOrder, listDisplayName: '线上订单支付列表' }, // this is for model namespace and
    }))(OnlineOrderPaymentSearch)
  }
  getOnlineOrderPaymentCreateForm = () => {
   	const {OnlineOrderPaymentCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._onlineOrder.onlineOrderPaymentList,
      count: state._onlineOrder.onlineOrderPaymentCount,
      currentPage: state._onlineOrder.onlineOrderPaymentCurrentPageNumber,
      searchFormParameters: state._onlineOrder.onlineOrderPaymentSearchFormParameters,
      loading: state._onlineOrder.loading,
      owner: { type: '_onlineOrder', id: state._onlineOrder.id, referenceName: 'onlineOrder', listName: 'onlineOrderPaymentList', ref:state._onlineOrder, listDisplayName: '线上订单支付列表'}, // this is for model namespace and
    }))(OnlineOrderPaymentCreateForm)
  }
  
  getOnlineOrderPaymentUpdateForm = () => {
  	const {OnlineOrderPaymentUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._onlineOrder.selectedRows,
      currentUpdateIndex: state._onlineOrder.currentUpdateIndex,
      owner: { type: '_onlineOrder', id: state._onlineOrder.id, listName: 'onlineOrderPaymentList', ref:state._onlineOrder, listDisplayName: '线上订单支付列表' }, // this is for model namespace and
    }))(OnlineOrderPaymentUpdateForm)
  }

  getOnlineOrderRedeemHistorySearch = () => {
    const {OnlineOrderRedeemHistorySearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._onlineOrder.onlineOrderRedeemHistoryList,
      count: state._onlineOrder.onlineOrderRedeemHistoryCount,
      currentPage: state._onlineOrder.onlineOrderRedeemHistoryCurrentPageNumber,
      searchFormParameters: state._onlineOrder.onlineOrderRedeemHistorySearchFormParameters,
      loading: state._onlineOrder.loading,
      partialList: state._onlineOrder.partialList,
      owner: { type: '_onlineOrder', id: state._onlineOrder.id, referenceName: 'onlineOrder', listName: 'onlineOrderRedeemHistoryList', ref:state._onlineOrder, listDisplayName: '线上订单兑换记录列表' }, // this is for model namespace and
    }))(OnlineOrderRedeemHistorySearch)
  }
  getOnlineOrderRedeemHistoryCreateForm = () => {
   	const {OnlineOrderRedeemHistoryCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._onlineOrder.onlineOrderRedeemHistoryList,
      count: state._onlineOrder.onlineOrderRedeemHistoryCount,
      currentPage: state._onlineOrder.onlineOrderRedeemHistoryCurrentPageNumber,
      searchFormParameters: state._onlineOrder.onlineOrderRedeemHistorySearchFormParameters,
      loading: state._onlineOrder.loading,
      owner: { type: '_onlineOrder', id: state._onlineOrder.id, referenceName: 'onlineOrder', listName: 'onlineOrderRedeemHistoryList', ref:state._onlineOrder, listDisplayName: '线上订单兑换记录列表'}, // this is for model namespace and
    }))(OnlineOrderRedeemHistoryCreateForm)
  }
  
  getOnlineOrderRedeemHistoryUpdateForm = () => {
  	const {OnlineOrderRedeemHistoryUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._onlineOrder.selectedRows,
      currentUpdateIndex: state._onlineOrder.currentUpdateIndex,
      owner: { type: '_onlineOrder', id: state._onlineOrder.id, listName: 'onlineOrderRedeemHistoryList', ref:state._onlineOrder, listDisplayName: '线上订单兑换记录列表' }, // this is for model namespace and
    }))(OnlineOrderRedeemHistoryUpdateForm)
  }

  getCouponSearch = () => {
    const {CouponSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._onlineOrder.couponList,
      count: state._onlineOrder.couponCount,
      currentPage: state._onlineOrder.couponCurrentPageNumber,
      searchFormParameters: state._onlineOrder.couponSearchFormParameters,
      loading: state._onlineOrder.loading,
      partialList: state._onlineOrder.partialList,
      owner: { type: '_onlineOrder', id: state._onlineOrder.id, referenceName: 'onlineOrder', listName: 'couponList', ref:state._onlineOrder, listDisplayName: '优惠券列表' }, // this is for model namespace and
    }))(CouponSearch)
  }
  getCouponCreateForm = () => {
   	const {CouponCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._onlineOrder.couponList,
      count: state._onlineOrder.couponCount,
      currentPage: state._onlineOrder.couponCurrentPageNumber,
      searchFormParameters: state._onlineOrder.couponSearchFormParameters,
      loading: state._onlineOrder.loading,
      owner: { type: '_onlineOrder', id: state._onlineOrder.id, referenceName: 'onlineOrder', listName: 'couponList', ref:state._onlineOrder, listDisplayName: '优惠券列表'}, // this is for model namespace and
    }))(CouponCreateForm)
  }
  
  getCouponUpdateForm = () => {
  	const {CouponUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._onlineOrder.selectedRows,
      currentUpdateIndex: state._onlineOrder.currentUpdateIndex,
      owner: { type: '_onlineOrder', id: state._onlineOrder.id, listName: 'couponList', ref:state._onlineOrder, listDisplayName: '优惠券列表' }, // this is for model namespace and
    }))(CouponUpdateForm)
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
     const {OnlineOrderDashboard} = GlobalComponents
     //const {OnlineOrderEditDetail} = GlobalComponents
     //const {OnlineOrderViewDetail} = GlobalComponents
     
     
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
               <Link to={`/onlineOrder/${this.props.onlineOrder.id}/dashboard`}><Icon type="dashboard" /><span>仪表板</span></Link>
             </Menu.Item>


             {this.getNavMenuItems(this.props.onlineOrder.id)}
             <Menu.Item key="homepage">
               <Link to={"/home"}><Icon type="home" /><span>回到主页</span></Link>
             </Menu.Item>
           </Menu>
         </Sider>
         <Layout>
           <Content style={{ margin: '24px 24px 0', height: '100%' }}>
             <Switch>
             
               <Route path="/onlineOrder/:id/dashboard" component={OnlineOrderDashboard} />
               
               

               <Route path="/onlineOrder/:id/list/onlineOrderPaymentList" component={this.getOnlineOrderPaymentSearch()} />
               <Route path="/onlineOrder/:id/list/onlineOrderPaymentCreateForm" component={this.getOnlineOrderPaymentCreateForm()} />
               <Route path="/onlineOrder/:id/list/onlineOrderPaymentUpdateForm" component={this.getOnlineOrderPaymentUpdateForm()} />

               <Route path="/onlineOrder/:id/list/onlineOrderRedeemHistoryList" component={this.getOnlineOrderRedeemHistorySearch()} />
               <Route path="/onlineOrder/:id/list/onlineOrderRedeemHistoryCreateForm" component={this.getOnlineOrderRedeemHistoryCreateForm()} />
               <Route path="/onlineOrder/:id/list/onlineOrderRedeemHistoryUpdateForm" component={this.getOnlineOrderRedeemHistoryUpdateForm()} />

               <Route path="/onlineOrder/:id/list/couponList" component={this.getCouponSearch()} />
               <Route path="/onlineOrder/:id/list/couponCreateForm" component={this.getCouponCreateForm()} />
               <Route path="/onlineOrder/:id/list/couponUpdateForm" component={this.getCouponUpdateForm()} />
              
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
  onlineOrder: state._onlineOrder,
  ...state,
}))(OnlineOrderBizApp)



