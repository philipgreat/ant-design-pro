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
  {name: 'companyQrcodePromotionRecordList', displayName:'公司二维码推广记录'},
  {name: 'vehicleInfoList', displayName:'车辆信息'},
  {name: 'vehicleInspectionOrderList', displayName:'年检订单'},
  {name: 'orderDiscountCouponList', displayName:'优惠券'},
  {name: 'vehicleInspectionOrderCouponList', displayName:'优惠券使用记录'},
  		
  		
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
  
 	const menuDataExpr = sessionStorage.getItem('menuData');
    const targetAppExpr = sessionStorage.getItem('targetApp');
    const menuData = JSON.parse(menuDataExpr)
    const targetApp = JSON.parse(targetAppExpr)
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


  getCompanyQrcodePromotionRecordSearch = () => {
    const {CompanyQrcodePromotionRecordSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._customer.companyQrcodePromotionRecordList,
      count: state._customer.companyQrcodePromotionRecordCount,
      currentPage: state._customer.companyQrcodePromotionRecordCurrentPageNumber,
      searchFormParameters: state._customer.companyQrcodePromotionRecordSearchFormParameters,
      loading: state._customer.loading,
      partialList: state._customer.partialList,
      owner: { type: '_customer', id: state._customer.id, listName: 'companyQrcodePromotionRecordList', ref:state._customer, listDisplayName: '公司二维码推广记录列表' }, // this is for model namespace and
    }))(CompanyQrcodePromotionRecordSearch)
  }
  getCompanyQrcodePromotionRecordCreateForm = () => {
   	const {CompanyQrcodePromotionRecordCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._customer.companyQrcodePromotionRecordList,
      count: state._customer.companyQrcodePromotionRecordCount,
      currentPage: state._customer.companyQrcodePromotionRecordCurrentPageNumber,
      searchFormParameters: state._customer.companyQrcodePromotionRecordSearchFormParameters,
      loading: state._customer.loading,
      owner: { type: '_customer', id: state._customer.id, listName: 'companyQrcodePromotionRecordList', ref:state._customer, listDisplayName: '公司二维码推广记录列表'}, // this is for model namespace and
    }))(CompanyQrcodePromotionRecordCreateForm)
  }
  
  getCompanyQrcodePromotionRecordUpdateForm = () => {
  	const {CompanyQrcodePromotionRecordUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._customer.selectedRows,
      currentUpdateIndex: state._customer.currentUpdateIndex,
      owner: { type: '_customer', id: state._customer.id, listName: 'companyQrcodePromotionRecordList', ref:state._customer, listDisplayName: '公司二维码推广记录列表' }, // this is for model namespace and
    }))(CompanyQrcodePromotionRecordUpdateForm)
  }

  getVehicleInfoSearch = () => {
    const {VehicleInfoSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._customer.vehicleInfoList,
      count: state._customer.vehicleInfoCount,
      currentPage: state._customer.vehicleInfoCurrentPageNumber,
      searchFormParameters: state._customer.vehicleInfoSearchFormParameters,
      loading: state._customer.loading,
      partialList: state._customer.partialList,
      owner: { type: '_customer', id: state._customer.id, listName: 'vehicleInfoList', ref:state._customer, listDisplayName: '车辆信息列表' }, // this is for model namespace and
    }))(VehicleInfoSearch)
  }
  getVehicleInfoCreateForm = () => {
   	const {VehicleInfoCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._customer.vehicleInfoList,
      count: state._customer.vehicleInfoCount,
      currentPage: state._customer.vehicleInfoCurrentPageNumber,
      searchFormParameters: state._customer.vehicleInfoSearchFormParameters,
      loading: state._customer.loading,
      owner: { type: '_customer', id: state._customer.id, listName: 'vehicleInfoList', ref:state._customer, listDisplayName: '车辆信息列表'}, // this is for model namespace and
    }))(VehicleInfoCreateForm)
  }
  
  getVehicleInfoUpdateForm = () => {
  	const {VehicleInfoUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._customer.selectedRows,
      currentUpdateIndex: state._customer.currentUpdateIndex,
      owner: { type: '_customer', id: state._customer.id, listName: 'vehicleInfoList', ref:state._customer, listDisplayName: '车辆信息列表' }, // this is for model namespace and
    }))(VehicleInfoUpdateForm)
  }

  getVehicleInspectionOrderSearch = () => {
    const {VehicleInspectionOrderSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._customer.vehicleInspectionOrderList,
      count: state._customer.vehicleInspectionOrderCount,
      currentPage: state._customer.vehicleInspectionOrderCurrentPageNumber,
      searchFormParameters: state._customer.vehicleInspectionOrderSearchFormParameters,
      loading: state._customer.loading,
      partialList: state._customer.partialList,
      owner: { type: '_customer', id: state._customer.id, listName: 'vehicleInspectionOrderList', ref:state._customer, listDisplayName: '年检订单列表' }, // this is for model namespace and
    }))(VehicleInspectionOrderSearch)
  }
  getVehicleInspectionOrderCreateForm = () => {
   	const {VehicleInspectionOrderCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._customer.vehicleInspectionOrderList,
      count: state._customer.vehicleInspectionOrderCount,
      currentPage: state._customer.vehicleInspectionOrderCurrentPageNumber,
      searchFormParameters: state._customer.vehicleInspectionOrderSearchFormParameters,
      loading: state._customer.loading,
      owner: { type: '_customer', id: state._customer.id, listName: 'vehicleInspectionOrderList', ref:state._customer, listDisplayName: '年检订单列表'}, // this is for model namespace and
    }))(VehicleInspectionOrderCreateForm)
  }
  
  getVehicleInspectionOrderUpdateForm = () => {
  	const {VehicleInspectionOrderUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._customer.selectedRows,
      currentUpdateIndex: state._customer.currentUpdateIndex,
      owner: { type: '_customer', id: state._customer.id, listName: 'vehicleInspectionOrderList', ref:state._customer, listDisplayName: '年检订单列表' }, // this is for model namespace and
    }))(VehicleInspectionOrderUpdateForm)
  }

  getOrderDiscountCouponSearch = () => {
    const {OrderDiscountCouponSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._customer.orderDiscountCouponList,
      count: state._customer.orderDiscountCouponCount,
      currentPage: state._customer.orderDiscountCouponCurrentPageNumber,
      searchFormParameters: state._customer.orderDiscountCouponSearchFormParameters,
      loading: state._customer.loading,
      partialList: state._customer.partialList,
      owner: { type: '_customer', id: state._customer.id, listName: 'orderDiscountCouponList', ref:state._customer, listDisplayName: '优惠券列表' }, // this is for model namespace and
    }))(OrderDiscountCouponSearch)
  }
  getOrderDiscountCouponCreateForm = () => {
   	const {OrderDiscountCouponCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._customer.orderDiscountCouponList,
      count: state._customer.orderDiscountCouponCount,
      currentPage: state._customer.orderDiscountCouponCurrentPageNumber,
      searchFormParameters: state._customer.orderDiscountCouponSearchFormParameters,
      loading: state._customer.loading,
      owner: { type: '_customer', id: state._customer.id, listName: 'orderDiscountCouponList', ref:state._customer, listDisplayName: '优惠券列表'}, // this is for model namespace and
    }))(OrderDiscountCouponCreateForm)
  }
  
  getOrderDiscountCouponUpdateForm = () => {
  	const {OrderDiscountCouponUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._customer.selectedRows,
      currentUpdateIndex: state._customer.currentUpdateIndex,
      owner: { type: '_customer', id: state._customer.id, listName: 'orderDiscountCouponList', ref:state._customer, listDisplayName: '优惠券列表' }, // this is for model namespace and
    }))(OrderDiscountCouponUpdateForm)
  }

  getVehicleInspectionOrderCouponSearch = () => {
    const {VehicleInspectionOrderCouponSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._customer.vehicleInspectionOrderCouponList,
      count: state._customer.vehicleInspectionOrderCouponCount,
      currentPage: state._customer.vehicleInspectionOrderCouponCurrentPageNumber,
      searchFormParameters: state._customer.vehicleInspectionOrderCouponSearchFormParameters,
      loading: state._customer.loading,
      partialList: state._customer.partialList,
      owner: { type: '_customer', id: state._customer.id, listName: 'vehicleInspectionOrderCouponList', ref:state._customer, listDisplayName: '优惠券使用记录列表' }, // this is for model namespace and
    }))(VehicleInspectionOrderCouponSearch)
  }
  getVehicleInspectionOrderCouponCreateForm = () => {
   	const {VehicleInspectionOrderCouponCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._customer.vehicleInspectionOrderCouponList,
      count: state._customer.vehicleInspectionOrderCouponCount,
      currentPage: state._customer.vehicleInspectionOrderCouponCurrentPageNumber,
      searchFormParameters: state._customer.vehicleInspectionOrderCouponSearchFormParameters,
      loading: state._customer.loading,
      owner: { type: '_customer', id: state._customer.id, listName: 'vehicleInspectionOrderCouponList', ref:state._customer, listDisplayName: '优惠券使用记录列表'}, // this is for model namespace and
    }))(VehicleInspectionOrderCouponCreateForm)
  }
  
  getVehicleInspectionOrderCouponUpdateForm = () => {
  	const {VehicleInspectionOrderCouponUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._customer.selectedRows,
      currentUpdateIndex: state._customer.currentUpdateIndex,
      owner: { type: '_customer', id: state._customer.id, listName: 'vehicleInspectionOrderCouponList', ref:state._customer, listDisplayName: '优惠券使用记录列表' }, // this is for model namespace and
    }))(VehicleInspectionOrderCouponUpdateForm)
  }

  getPageTitle = () => {
    // const { location } = this.props
    // const { pathname } = location
    const title = '代审车服务平台'
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
     const {CustomerEditDetail} = GlobalComponents
     const {CustomerViewDetail} = GlobalComponents
     
     const currentBreadcrumb = breadcrumb[breadcrumb.currentApp]
     
     
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
               
               <Route path="/customer/:id/editDetail" component={CustomerEditDetail} />
               <Route path="/customer/:id/viewDetail" component={CustomerViewDetail} /> 
               

               <Route path="/customer/:id/list/companyQrcodePromotionRecordList" component={this.getCompanyQrcodePromotionRecordSearch()} />
               <Route path="/customer/:id/list/companyQrcodePromotionRecordCreateForm" component={this.getCompanyQrcodePromotionRecordCreateForm()} />
               <Route path="/customer/:id/list/companyQrcodePromotionRecordUpdateForm" component={this.getCompanyQrcodePromotionRecordUpdateForm()} />

               <Route path="/customer/:id/list/vehicleInfoList" component={this.getVehicleInfoSearch()} />
               <Route path="/customer/:id/list/vehicleInfoCreateForm" component={this.getVehicleInfoCreateForm()} />
               <Route path="/customer/:id/list/vehicleInfoUpdateForm" component={this.getVehicleInfoUpdateForm()} />

               <Route path="/customer/:id/list/vehicleInspectionOrderList" component={this.getVehicleInspectionOrderSearch()} />
               <Route path="/customer/:id/list/vehicleInspectionOrderCreateForm" component={this.getVehicleInspectionOrderCreateForm()} />
               <Route path="/customer/:id/list/vehicleInspectionOrderUpdateForm" component={this.getVehicleInspectionOrderUpdateForm()} />

               <Route path="/customer/:id/list/orderDiscountCouponList" component={this.getOrderDiscountCouponSearch()} />
               <Route path="/customer/:id/list/orderDiscountCouponCreateForm" component={this.getOrderDiscountCouponCreateForm()} />
               <Route path="/customer/:id/list/orderDiscountCouponUpdateForm" component={this.getOrderDiscountCouponUpdateForm()} />

               <Route path="/customer/:id/list/vehicleInspectionOrderCouponList" component={this.getVehicleInspectionOrderCouponSearch()} />
               <Route path="/customer/:id/list/vehicleInspectionOrderCouponCreateForm" component={this.getVehicleInspectionOrderCouponCreateForm()} />
               <Route path="/customer/:id/list/vehicleInspectionOrderCouponUpdateForm" component={this.getVehicleInspectionOrderCouponUpdateForm()} />
              
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



