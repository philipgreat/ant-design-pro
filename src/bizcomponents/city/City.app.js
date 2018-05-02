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
import styles from './City.app.less'


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


  
const menuData = {menuName:"城市", menuFor: "city",
  		subItems: [
  {name: 'productPriceList', displayName:'产品价格'},
  {name: 'vehicleServiceCompanyList', displayName:'商户'},
  {name: 'inspectionStationList', displayName:'检测站'},
  {name: 'vehicleInspectionOrderList', displayName:'年检订单'},
  		
  		
  		],
};

class CityBizApp extends React.PureComponent {
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
      return ['/city/']
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


  getProductPriceSearch = () => {
    const {ProductPriceSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._city.productPriceList,
      count: state._city.productPriceCount,
      currentPage: state._city.productPriceCurrentPageNumber,
      searchFormParameters: state._city.productPriceSearchFormParameters,
      loading: state._city.loading,
      partialList: state._city.partialList,
      owner: { type: '_city', id: state._city.id, listName: 'productPriceList', ref:state._city, listDisplayName: '产品价格列表' }, // this is for model namespace and
    }))(ProductPriceSearch)
  }
  getProductPriceCreateForm = () => {
   	const {ProductPriceCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._city.productPriceList,
      count: state._city.productPriceCount,
      currentPage: state._city.productPriceCurrentPageNumber,
      searchFormParameters: state._city.productPriceSearchFormParameters,
      loading: state._city.loading,
      owner: { type: '_city', id: state._city.id, listName: 'productPriceList', ref:state._city, listDisplayName: '产品价格列表'}, // this is for model namespace and
    }))(ProductPriceCreateForm)
  }
  
  getProductPriceUpdateForm = () => {
  	const {ProductPriceUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._city.selectedRows,
      currentUpdateIndex: state._city.currentUpdateIndex,
      owner: { type: '_city', id: state._city.id, listName: 'productPriceList', ref:state._city, listDisplayName: '产品价格列表' }, // this is for model namespace and
    }))(ProductPriceUpdateForm)
  }

  getVehicleServiceCompanySearch = () => {
    const {VehicleServiceCompanySearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._city.vehicleServiceCompanyList,
      count: state._city.vehicleServiceCompanyCount,
      currentPage: state._city.vehicleServiceCompanyCurrentPageNumber,
      searchFormParameters: state._city.vehicleServiceCompanySearchFormParameters,
      loading: state._city.loading,
      partialList: state._city.partialList,
      owner: { type: '_city', id: state._city.id, listName: 'vehicleServiceCompanyList', ref:state._city, listDisplayName: '商户列表' }, // this is for model namespace and
    }))(VehicleServiceCompanySearch)
  }
  getVehicleServiceCompanyCreateForm = () => {
   	const {VehicleServiceCompanyCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._city.vehicleServiceCompanyList,
      count: state._city.vehicleServiceCompanyCount,
      currentPage: state._city.vehicleServiceCompanyCurrentPageNumber,
      searchFormParameters: state._city.vehicleServiceCompanySearchFormParameters,
      loading: state._city.loading,
      owner: { type: '_city', id: state._city.id, listName: 'vehicleServiceCompanyList', ref:state._city, listDisplayName: '商户列表'}, // this is for model namespace and
    }))(VehicleServiceCompanyCreateForm)
  }
  
  getVehicleServiceCompanyUpdateForm = () => {
  	const {VehicleServiceCompanyUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._city.selectedRows,
      currentUpdateIndex: state._city.currentUpdateIndex,
      owner: { type: '_city', id: state._city.id, listName: 'vehicleServiceCompanyList', ref:state._city, listDisplayName: '商户列表' }, // this is for model namespace and
    }))(VehicleServiceCompanyUpdateForm)
  }

  getInspectionStationSearch = () => {
    const {InspectionStationSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._city.inspectionStationList,
      count: state._city.inspectionStationCount,
      currentPage: state._city.inspectionStationCurrentPageNumber,
      searchFormParameters: state._city.inspectionStationSearchFormParameters,
      loading: state._city.loading,
      partialList: state._city.partialList,
      owner: { type: '_city', id: state._city.id, listName: 'inspectionStationList', ref:state._city, listDisplayName: '检测站列表' }, // this is for model namespace and
    }))(InspectionStationSearch)
  }
  getInspectionStationCreateForm = () => {
   	const {InspectionStationCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._city.inspectionStationList,
      count: state._city.inspectionStationCount,
      currentPage: state._city.inspectionStationCurrentPageNumber,
      searchFormParameters: state._city.inspectionStationSearchFormParameters,
      loading: state._city.loading,
      owner: { type: '_city', id: state._city.id, listName: 'inspectionStationList', ref:state._city, listDisplayName: '检测站列表'}, // this is for model namespace and
    }))(InspectionStationCreateForm)
  }
  
  getInspectionStationUpdateForm = () => {
  	const {InspectionStationUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._city.selectedRows,
      currentUpdateIndex: state._city.currentUpdateIndex,
      owner: { type: '_city', id: state._city.id, listName: 'inspectionStationList', ref:state._city, listDisplayName: '检测站列表' }, // this is for model namespace and
    }))(InspectionStationUpdateForm)
  }

  getVehicleInspectionOrderSearch = () => {
    const {VehicleInspectionOrderSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._city.vehicleInspectionOrderList,
      count: state._city.vehicleInspectionOrderCount,
      currentPage: state._city.vehicleInspectionOrderCurrentPageNumber,
      searchFormParameters: state._city.vehicleInspectionOrderSearchFormParameters,
      loading: state._city.loading,
      partialList: state._city.partialList,
      owner: { type: '_city', id: state._city.id, listName: 'vehicleInspectionOrderList', ref:state._city, listDisplayName: '年检订单列表' }, // this is for model namespace and
    }))(VehicleInspectionOrderSearch)
  }
  getVehicleInspectionOrderCreateForm = () => {
   	const {VehicleInspectionOrderCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._city.vehicleInspectionOrderList,
      count: state._city.vehicleInspectionOrderCount,
      currentPage: state._city.vehicleInspectionOrderCurrentPageNumber,
      searchFormParameters: state._city.vehicleInspectionOrderSearchFormParameters,
      loading: state._city.loading,
      owner: { type: '_city', id: state._city.id, listName: 'vehicleInspectionOrderList', ref:state._city, listDisplayName: '年检订单列表'}, // this is for model namespace and
    }))(VehicleInspectionOrderCreateForm)
  }
  
  getVehicleInspectionOrderUpdateForm = () => {
  	const {VehicleInspectionOrderUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._city.selectedRows,
      currentUpdateIndex: state._city.currentUpdateIndex,
      owner: { type: '_city', id: state._city.id, listName: 'vehicleInspectionOrderList', ref:state._city, listDisplayName: '年检订单列表' }, // this is for model namespace and
    }))(VehicleInspectionOrderUpdateForm)
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
     const {CityDashboard} = GlobalComponents
     const {CityEditDetail} = GlobalComponents
     const {CityViewDetail} = GlobalComponents
     
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
               <Link to={`/city/${this.props.city.id}/dashboard`}><Icon type="dashboard" /><span>仪表板</span></Link>
             </Menu.Item>


             {this.getNavMenuItems(this.props.city.id)}
             <Menu.Item key="homepage">
               <Link to={"/home"}><Icon type="home" /><span>回到主页</span></Link>
             </Menu.Item>
           </Menu>
         </Sider>
         <Layout>
           <Content style={{ margin: '24px 24px 0', height: '100%' }}>
             <Switch>
             
               <Route path="/city/:id/dashboard" component={CityDashboard} />
               
               <Route path="/city/:id/editDetail" component={CityEditDetail} />
               <Route path="/city/:id/viewDetail" component={CityViewDetail} /> 
               

               <Route path="/city/:id/list/productPriceList" component={this.getProductPriceSearch()} />
               <Route path="/city/:id/list/productPriceCreateForm" component={this.getProductPriceCreateForm()} />
               <Route path="/city/:id/list/productPriceUpdateForm" component={this.getProductPriceUpdateForm()} />

               <Route path="/city/:id/list/vehicleServiceCompanyList" component={this.getVehicleServiceCompanySearch()} />
               <Route path="/city/:id/list/vehicleServiceCompanyCreateForm" component={this.getVehicleServiceCompanyCreateForm()} />
               <Route path="/city/:id/list/vehicleServiceCompanyUpdateForm" component={this.getVehicleServiceCompanyUpdateForm()} />

               <Route path="/city/:id/list/inspectionStationList" component={this.getInspectionStationSearch()} />
               <Route path="/city/:id/list/inspectionStationCreateForm" component={this.getInspectionStationCreateForm()} />
               <Route path="/city/:id/list/inspectionStationUpdateForm" component={this.getInspectionStationUpdateForm()} />

               <Route path="/city/:id/list/vehicleInspectionOrderList" component={this.getVehicleInspectionOrderSearch()} />
               <Route path="/city/:id/list/vehicleInspectionOrderCreateForm" component={this.getVehicleInspectionOrderCreateForm()} />
               <Route path="/city/:id/list/vehicleInspectionOrderUpdateForm" component={this.getVehicleInspectionOrderUpdateForm()} />
              
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
  city: state._city,
  ...state,
}))(CityBizApp)



