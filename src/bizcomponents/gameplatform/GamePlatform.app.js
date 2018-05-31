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
import styles from './GamePlatform.app.less'
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


  
const menuData = {menuName:"游戏平台", menuFor: "gamePlatform",
  		subItems: [
  {name: 'cityList', displayName:'城市'},
  {name: 'onlineOrderList', displayName:'线上订单号'},
  {name: 'customerList', displayName:'客户'},
  {name: 'couponList', displayName:'优惠券'},
  {name: 'adList', displayName:'广告'},
  		
  		
  		],
};

class GamePlatformBizApp extends React.PureComponent {
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
      return ['/gamePlatform/']
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
  



  getCitySearch = () => {
    const {CitySearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._gamePlatform.cityList,
      count: state._gamePlatform.cityCount,
      currentPage: state._gamePlatform.cityCurrentPageNumber,
      searchFormParameters: state._gamePlatform.citySearchFormParameters,
      loading: state._gamePlatform.loading,
      partialList: state._gamePlatform.partialList,
      owner: { type: '_gamePlatform', id: state._gamePlatform.id, referenceName: 'gamePlatform', listName: 'cityList', ref:state._gamePlatform, listDisplayName: '城市列表' }, // this is for model namespace and
    }))(CitySearch)
  }
  getCityCreateForm = () => {
   	const {CityCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._gamePlatform.cityList,
      count: state._gamePlatform.cityCount,
      currentPage: state._gamePlatform.cityCurrentPageNumber,
      searchFormParameters: state._gamePlatform.citySearchFormParameters,
      loading: state._gamePlatform.loading,
      owner: { type: '_gamePlatform', id: state._gamePlatform.id, referenceName: 'gamePlatform', listName: 'cityList', ref:state._gamePlatform, listDisplayName: '城市列表'}, // this is for model namespace and
    }))(CityCreateForm)
  }
  
  getCityUpdateForm = () => {
  	const {CityUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._gamePlatform.selectedRows,
      currentUpdateIndex: state._gamePlatform.currentUpdateIndex,
      owner: { type: '_gamePlatform', id: state._gamePlatform.id, listName: 'cityList', ref:state._gamePlatform, listDisplayName: '城市列表' }, // this is for model namespace and
    }))(CityUpdateForm)
  }

  getOnlineOrderSearch = () => {
    const {OnlineOrderSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._gamePlatform.onlineOrderList,
      count: state._gamePlatform.onlineOrderCount,
      currentPage: state._gamePlatform.onlineOrderCurrentPageNumber,
      searchFormParameters: state._gamePlatform.onlineOrderSearchFormParameters,
      loading: state._gamePlatform.loading,
      partialList: state._gamePlatform.partialList,
      owner: { type: '_gamePlatform', id: state._gamePlatform.id, referenceName: 'gamePlatform', listName: 'onlineOrderList', ref:state._gamePlatform, listDisplayName: '线上订单号列表' }, // this is for model namespace and
    }))(OnlineOrderSearch)
  }
  getOnlineOrderCreateForm = () => {
   	const {OnlineOrderCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._gamePlatform.onlineOrderList,
      count: state._gamePlatform.onlineOrderCount,
      currentPage: state._gamePlatform.onlineOrderCurrentPageNumber,
      searchFormParameters: state._gamePlatform.onlineOrderSearchFormParameters,
      loading: state._gamePlatform.loading,
      owner: { type: '_gamePlatform', id: state._gamePlatform.id, referenceName: 'gamePlatform', listName: 'onlineOrderList', ref:state._gamePlatform, listDisplayName: '线上订单号列表'}, // this is for model namespace and
    }))(OnlineOrderCreateForm)
  }
  
  getOnlineOrderUpdateForm = () => {
  	const {OnlineOrderUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._gamePlatform.selectedRows,
      currentUpdateIndex: state._gamePlatform.currentUpdateIndex,
      owner: { type: '_gamePlatform', id: state._gamePlatform.id, listName: 'onlineOrderList', ref:state._gamePlatform, listDisplayName: '线上订单号列表' }, // this is for model namespace and
    }))(OnlineOrderUpdateForm)
  }

  getCustomerSearch = () => {
    const {CustomerSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._gamePlatform.customerList,
      count: state._gamePlatform.customerCount,
      currentPage: state._gamePlatform.customerCurrentPageNumber,
      searchFormParameters: state._gamePlatform.customerSearchFormParameters,
      loading: state._gamePlatform.loading,
      partialList: state._gamePlatform.partialList,
      owner: { type: '_gamePlatform', id: state._gamePlatform.id, referenceName: 'gamePlatform', listName: 'customerList', ref:state._gamePlatform, listDisplayName: '客户列表' }, // this is for model namespace and
    }))(CustomerSearch)
  }
  getCustomerCreateForm = () => {
   	const {CustomerCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._gamePlatform.customerList,
      count: state._gamePlatform.customerCount,
      currentPage: state._gamePlatform.customerCurrentPageNumber,
      searchFormParameters: state._gamePlatform.customerSearchFormParameters,
      loading: state._gamePlatform.loading,
      owner: { type: '_gamePlatform', id: state._gamePlatform.id, referenceName: 'gamePlatform', listName: 'customerList', ref:state._gamePlatform, listDisplayName: '客户列表'}, // this is for model namespace and
    }))(CustomerCreateForm)
  }
  
  getCustomerUpdateForm = () => {
  	const {CustomerUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._gamePlatform.selectedRows,
      currentUpdateIndex: state._gamePlatform.currentUpdateIndex,
      owner: { type: '_gamePlatform', id: state._gamePlatform.id, listName: 'customerList', ref:state._gamePlatform, listDisplayName: '客户列表' }, // this is for model namespace and
    }))(CustomerUpdateForm)
  }

  getCouponSearch = () => {
    const {CouponSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._gamePlatform.couponList,
      count: state._gamePlatform.couponCount,
      currentPage: state._gamePlatform.couponCurrentPageNumber,
      searchFormParameters: state._gamePlatform.couponSearchFormParameters,
      loading: state._gamePlatform.loading,
      partialList: state._gamePlatform.partialList,
      owner: { type: '_gamePlatform', id: state._gamePlatform.id, referenceName: 'gamePlatform', listName: 'couponList', ref:state._gamePlatform, listDisplayName: '优惠券列表' }, // this is for model namespace and
    }))(CouponSearch)
  }
  getCouponCreateForm = () => {
   	const {CouponCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._gamePlatform.couponList,
      count: state._gamePlatform.couponCount,
      currentPage: state._gamePlatform.couponCurrentPageNumber,
      searchFormParameters: state._gamePlatform.couponSearchFormParameters,
      loading: state._gamePlatform.loading,
      owner: { type: '_gamePlatform', id: state._gamePlatform.id, referenceName: 'gamePlatform', listName: 'couponList', ref:state._gamePlatform, listDisplayName: '优惠券列表'}, // this is for model namespace and
    }))(CouponCreateForm)
  }
  
  getCouponUpdateForm = () => {
  	const {CouponUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._gamePlatform.selectedRows,
      currentUpdateIndex: state._gamePlatform.currentUpdateIndex,
      owner: { type: '_gamePlatform', id: state._gamePlatform.id, listName: 'couponList', ref:state._gamePlatform, listDisplayName: '优惠券列表' }, // this is for model namespace and
    }))(CouponUpdateForm)
  }

  getAdSearch = () => {
    const {AdSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._gamePlatform.adList,
      count: state._gamePlatform.adCount,
      currentPage: state._gamePlatform.adCurrentPageNumber,
      searchFormParameters: state._gamePlatform.adSearchFormParameters,
      loading: state._gamePlatform.loading,
      partialList: state._gamePlatform.partialList,
      owner: { type: '_gamePlatform', id: state._gamePlatform.id, referenceName: 'gamePlatform', listName: 'adList', ref:state._gamePlatform, listDisplayName: '广告列表' }, // this is for model namespace and
    }))(AdSearch)
  }
  getAdCreateForm = () => {
   	const {AdCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._gamePlatform.adList,
      count: state._gamePlatform.adCount,
      currentPage: state._gamePlatform.adCurrentPageNumber,
      searchFormParameters: state._gamePlatform.adSearchFormParameters,
      loading: state._gamePlatform.loading,
      owner: { type: '_gamePlatform', id: state._gamePlatform.id, referenceName: 'gamePlatform', listName: 'adList', ref:state._gamePlatform, listDisplayName: '广告列表'}, // this is for model namespace and
    }))(AdCreateForm)
  }
  
  getAdUpdateForm = () => {
  	const {AdUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._gamePlatform.selectedRows,
      currentUpdateIndex: state._gamePlatform.currentUpdateIndex,
      owner: { type: '_gamePlatform', id: state._gamePlatform.id, listName: 'adList', ref:state._gamePlatform, listDisplayName: '广告列表' }, // this is for model namespace and
    }))(AdUpdateForm)
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
     const {GamePlatformDashboard} = GlobalComponents
     //const {GamePlatformEditDetail} = GlobalComponents
     //const {GamePlatformViewDetail} = GlobalComponents
     
     
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
               <Link to={`/gamePlatform/${this.props.gamePlatform.id}/dashboard`}><Icon type="dashboard" /><span>仪表板</span></Link>
             </Menu.Item>


             {this.getNavMenuItems(this.props.gamePlatform.id)}
             <Menu.Item key="homepage">
               <Link to={"/home"}><Icon type="home" /><span>回到主页</span></Link>
             </Menu.Item>
           </Menu>
         </Sider>
         <Layout>
           <Content style={{ margin: '24px 24px 0', height: '100%' }}>
             <Switch>
             
               <Route path="/gamePlatform/:id/dashboard" component={GamePlatformDashboard} />
               
               

               <Route path="/gamePlatform/:id/list/cityList" component={this.getCitySearch()} />
               <Route path="/gamePlatform/:id/list/cityCreateForm" component={this.getCityCreateForm()} />
               <Route path="/gamePlatform/:id/list/cityUpdateForm" component={this.getCityUpdateForm()} />

               <Route path="/gamePlatform/:id/list/onlineOrderList" component={this.getOnlineOrderSearch()} />
               <Route path="/gamePlatform/:id/list/onlineOrderCreateForm" component={this.getOnlineOrderCreateForm()} />
               <Route path="/gamePlatform/:id/list/onlineOrderUpdateForm" component={this.getOnlineOrderUpdateForm()} />

               <Route path="/gamePlatform/:id/list/customerList" component={this.getCustomerSearch()} />
               <Route path="/gamePlatform/:id/list/customerCreateForm" component={this.getCustomerCreateForm()} />
               <Route path="/gamePlatform/:id/list/customerUpdateForm" component={this.getCustomerUpdateForm()} />

               <Route path="/gamePlatform/:id/list/couponList" component={this.getCouponSearch()} />
               <Route path="/gamePlatform/:id/list/couponCreateForm" component={this.getCouponCreateForm()} />
               <Route path="/gamePlatform/:id/list/couponUpdateForm" component={this.getCouponUpdateForm()} />

               <Route path="/gamePlatform/:id/list/adList" component={this.getAdSearch()} />
               <Route path="/gamePlatform/:id/list/adCreateForm" component={this.getAdCreateForm()} />
               <Route path="/gamePlatform/:id/list/adUpdateForm" component={this.getAdUpdateForm()} />
              
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
  gamePlatform: state._gamePlatform,
  ...state,
}))(GamePlatformBizApp)



