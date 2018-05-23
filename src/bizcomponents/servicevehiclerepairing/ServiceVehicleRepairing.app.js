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
import styles from './ServiceVehicleRepairing.app.less'
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


  
const menuData = {menuName:"维修服务", menuFor: "serviceVehicleRepairing",
  		subItems: [
  {name: 'repairingAllowanceItemList', displayName:'车辆维修补贴项'},
  {name: 'vehicleRepairingPaymentList', displayName:'支付维修订单'},
  		
  		
  		],
};

class ServiceVehicleRepairingBizApp extends React.PureComponent {
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
      return ['/serviceVehicleRepairing/']
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
  



  getRepairingAllowanceItemSearch = () => {
    const {RepairingAllowanceItemSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._serviceVehicleRepairing.repairingAllowanceItemList,
      count: state._serviceVehicleRepairing.repairingAllowanceItemCount,
      currentPage: state._serviceVehicleRepairing.repairingAllowanceItemCurrentPageNumber,
      searchFormParameters: state._serviceVehicleRepairing.repairingAllowanceItemSearchFormParameters,
      loading: state._serviceVehicleRepairing.loading,
      partialList: state._serviceVehicleRepairing.partialList,
      owner: { type: '_serviceVehicleRepairing', id: state._serviceVehicleRepairing.id, referenceName: 'service', listName: 'repairingAllowanceItemList', ref:state._serviceVehicleRepairing, listDisplayName: '车辆维修补贴项列表' }, // this is for model namespace and
    }))(RepairingAllowanceItemSearch)
  }
  getRepairingAllowanceItemCreateForm = () => {
   	const {RepairingAllowanceItemCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._serviceVehicleRepairing.repairingAllowanceItemList,
      count: state._serviceVehicleRepairing.repairingAllowanceItemCount,
      currentPage: state._serviceVehicleRepairing.repairingAllowanceItemCurrentPageNumber,
      searchFormParameters: state._serviceVehicleRepairing.repairingAllowanceItemSearchFormParameters,
      loading: state._serviceVehicleRepairing.loading,
      owner: { type: '_serviceVehicleRepairing', id: state._serviceVehicleRepairing.id, referenceName: 'service', listName: 'repairingAllowanceItemList', ref:state._serviceVehicleRepairing, listDisplayName: '车辆维修补贴项列表'}, // this is for model namespace and
    }))(RepairingAllowanceItemCreateForm)
  }
  
  getRepairingAllowanceItemUpdateForm = () => {
  	const {RepairingAllowanceItemUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._serviceVehicleRepairing.selectedRows,
      currentUpdateIndex: state._serviceVehicleRepairing.currentUpdateIndex,
      owner: { type: '_serviceVehicleRepairing', id: state._serviceVehicleRepairing.id, listName: 'repairingAllowanceItemList', ref:state._serviceVehicleRepairing, listDisplayName: '车辆维修补贴项列表' }, // this is for model namespace and
    }))(RepairingAllowanceItemUpdateForm)
  }

  getVehicleRepairingPaymentSearch = () => {
    const {VehicleRepairingPaymentSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._serviceVehicleRepairing.vehicleRepairingPaymentList,
      count: state._serviceVehicleRepairing.vehicleRepairingPaymentCount,
      currentPage: state._serviceVehicleRepairing.vehicleRepairingPaymentCurrentPageNumber,
      searchFormParameters: state._serviceVehicleRepairing.vehicleRepairingPaymentSearchFormParameters,
      loading: state._serviceVehicleRepairing.loading,
      partialList: state._serviceVehicleRepairing.partialList,
      owner: { type: '_serviceVehicleRepairing', id: state._serviceVehicleRepairing.id, referenceName: 'serviceVehicleRepairing', listName: 'vehicleRepairingPaymentList', ref:state._serviceVehicleRepairing, listDisplayName: '支付维修订单列表' }, // this is for model namespace and
    }))(VehicleRepairingPaymentSearch)
  }
  getVehicleRepairingPaymentCreateForm = () => {
   	const {VehicleRepairingPaymentCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._serviceVehicleRepairing.vehicleRepairingPaymentList,
      count: state._serviceVehicleRepairing.vehicleRepairingPaymentCount,
      currentPage: state._serviceVehicleRepairing.vehicleRepairingPaymentCurrentPageNumber,
      searchFormParameters: state._serviceVehicleRepairing.vehicleRepairingPaymentSearchFormParameters,
      loading: state._serviceVehicleRepairing.loading,
      owner: { type: '_serviceVehicleRepairing', id: state._serviceVehicleRepairing.id, referenceName: 'serviceVehicleRepairing', listName: 'vehicleRepairingPaymentList', ref:state._serviceVehicleRepairing, listDisplayName: '支付维修订单列表'}, // this is for model namespace and
    }))(VehicleRepairingPaymentCreateForm)
  }
  
  getVehicleRepairingPaymentUpdateForm = () => {
  	const {VehicleRepairingPaymentUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._serviceVehicleRepairing.selectedRows,
      currentUpdateIndex: state._serviceVehicleRepairing.currentUpdateIndex,
      owner: { type: '_serviceVehicleRepairing', id: state._serviceVehicleRepairing.id, listName: 'vehicleRepairingPaymentList', ref:state._serviceVehicleRepairing, listDisplayName: '支付维修订单列表' }, // this is for model namespace and
    }))(VehicleRepairingPaymentUpdateForm)
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
     const {ServiceVehicleRepairingDashboard} = GlobalComponents
     //const {ServiceVehicleRepairingEditDetail} = GlobalComponents
     //const {ServiceVehicleRepairingViewDetail} = GlobalComponents
     
     
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
               <Link to={`/serviceVehicleRepairing/${this.props.serviceVehicleRepairing.id}/dashboard`}><Icon type="dashboard" /><span>仪表板</span></Link>
             </Menu.Item>


             {this.getNavMenuItems(this.props.serviceVehicleRepairing.id)}
             <Menu.Item key="homepage">
               <Link to={"/home"}><Icon type="home" /><span>回到主页</span></Link>
             </Menu.Item>
           </Menu>
         </Sider>
         <Layout>
           <Content style={{ margin: '24px 24px 0', height: '100%' }}>
             <Switch>
             
               <Route path="/serviceVehicleRepairing/:id/dashboard" component={ServiceVehicleRepairingDashboard} />
               
               

               <Route path="/serviceVehicleRepairing/:id/list/repairingAllowanceItemList" component={this.getRepairingAllowanceItemSearch()} />
               <Route path="/serviceVehicleRepairing/:id/list/repairingAllowanceItemCreateForm" component={this.getRepairingAllowanceItemCreateForm()} />
               <Route path="/serviceVehicleRepairing/:id/list/repairingAllowanceItemUpdateForm" component={this.getRepairingAllowanceItemUpdateForm()} />

               <Route path="/serviceVehicleRepairing/:id/list/vehicleRepairingPaymentList" component={this.getVehicleRepairingPaymentSearch()} />
               <Route path="/serviceVehicleRepairing/:id/list/vehicleRepairingPaymentCreateForm" component={this.getVehicleRepairingPaymentCreateForm()} />
               <Route path="/serviceVehicleRepairing/:id/list/vehicleRepairingPaymentUpdateForm" component={this.getVehicleRepairingPaymentUpdateForm()} />
              
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
  serviceVehicleRepairing: state._serviceVehicleRepairing,
  ...state,
}))(ServiceVehicleRepairingBizApp)



