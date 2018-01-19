import React from 'react'
import PropTypes from 'prop-types'
import { Layout, Menu, Icon, Avatar, Dropdown, Tag, message, Spin } from 'antd'
import DocumentTitle from 'react-document-title'
import { connect } from 'dva'
import { Link, Route, Redirect, Switch } from 'dva/router'
import moment from 'moment'
import groupBy from 'lodash/groupBy'
import { ContainerQuery } from 'react-container-query'
import classNames from 'classnames'
import styles from './RepairingQuotation.app.less'


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

class RepairingQuotationBizApp extends React.PureComponent {
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
      return ['/repairingQuotation/']
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
  getNavMenuItems = (objectId) => {
    return (
      <SubMenu title={
        <span>
          <Icon type="profile" />
          <span>维修报价</span>
        </span>}
      >

        <Menu.Item>
          <Link to={`/repairingQuotation/${objectId}/list/repairingQuotationItemList`}>维修报价项目</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/repairingQuotation/${objectId}/list/vehicleRepairingPaymentList`}>修理付款</Link>
        </Menu.Item>
      </SubMenu>
    )
  }


  getRepairingQuotationItemSearch = () => {
    const {RepairingQuotationItemSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._repairingQuotation.repairingQuotationItemList,
      count: state._repairingQuotation.repairingQuotationItemCount,
      currentPage: state._repairingQuotation.repairingQuotationItemCurrentPageNumber,
      searchFormParameters: state._repairingQuotation.repairingQuotationItemSearchFormParameters,
      loading: state._repairingQuotation.loading,
      owner: { type: '_repairingQuotation', id: state._repairingQuotation.id, listName: 'repairingQuotationItemList' }, // this is for model namespace and
    }))(RepairingQuotationItemSearch)
  }
  getRepairingQuotationItemCreateForm = () => {
   	const {RepairingQuotationItemCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._repairingQuotation.repairingQuotationItemList,
      count: state._repairingQuotation.repairingQuotationItemCount,
      currentPage: state._repairingQuotation.repairingQuotationItemCurrentPageNumber,
      searchFormParameters: state._repairingQuotation.repairingQuotationItemSearchFormParameters,
      loading: state._repairingQuotation.loading,
      owner: { type: '_repairingQuotation', id: state._repairingQuotation.id, listName: 'repairingQuotationItemList'}, // this is for model namespace and
    }))(RepairingQuotationItemCreateForm)
  }
  
  getRepairingQuotationItemUpdateForm = () => {
  	const {RepairingQuotationItemUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._repairingQuotation.selectedRows,
      currentUpdateIndex: state._repairingQuotation.currentUpdateIndex,
      owner: { type: '_repairingQuotation', id: state._repairingQuotation.id, listName: 'repairingQuotationItemList' }, // this is for model namespace and
    }))(RepairingQuotationItemUpdateForm)
  }

  getVehicleRepairingPaymentSearch = () => {
    const {VehicleRepairingPaymentSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._repairingQuotation.vehicleRepairingPaymentList,
      count: state._repairingQuotation.vehicleRepairingPaymentCount,
      currentPage: state._repairingQuotation.vehicleRepairingPaymentCurrentPageNumber,
      searchFormParameters: state._repairingQuotation.vehicleRepairingPaymentSearchFormParameters,
      loading: state._repairingQuotation.loading,
      owner: { type: '_repairingQuotation', id: state._repairingQuotation.id, listName: 'vehicleRepairingPaymentList' }, // this is for model namespace and
    }))(VehicleRepairingPaymentSearch)
  }
  getVehicleRepairingPaymentCreateForm = () => {
   	const {VehicleRepairingPaymentCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._repairingQuotation.vehicleRepairingPaymentList,
      count: state._repairingQuotation.vehicleRepairingPaymentCount,
      currentPage: state._repairingQuotation.vehicleRepairingPaymentCurrentPageNumber,
      searchFormParameters: state._repairingQuotation.vehicleRepairingPaymentSearchFormParameters,
      loading: state._repairingQuotation.loading,
      owner: { type: '_repairingQuotation', id: state._repairingQuotation.id, listName: 'vehicleRepairingPaymentList'}, // this is for model namespace and
    }))(VehicleRepairingPaymentCreateForm)
  }
  
  getVehicleRepairingPaymentUpdateForm = () => {
  	const {VehicleRepairingPaymentUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._repairingQuotation.selectedRows,
      currentUpdateIndex: state._repairingQuotation.currentUpdateIndex,
      owner: { type: '_repairingQuotation', id: state._repairingQuotation.id, listName: 'vehicleRepairingPaymentList' }, // this is for model namespace and
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
    
     const {RepairingQuotationDashboard} = GlobalComponents
     const {RepairingQuotationEditDetail} = GlobalComponents
     const {RepairingQuotationViewDetail} = GlobalComponents
     
     
     
     
     // Don't show popup menu when it is been collapsed
     const menuProps = collapsed ? {} : {
       openKeys: this.state.openKeys,
     }
     const layout = (
       <Layout>
         <Sider
           trigger={null}
           collapsible
           collapsed={collapsed}
           breakpoint="md"
           onCollapse={()=>this.onCollapse(collapsed)}
           width={256}
           className={styles.sider}
         >
           <div className={styles.logo}>
             <img src="./scm.svg" alt="logo" onClick={this.toggle} />
             <Link to="/home"> <h1>维修报价</h1></Link>
           </div>

           <Menu
             theme="dark"
             mode="inline"
             {...menuProps}
             onOpenChange={this.handleOpenChange}
             selectedKeys={this.getCurrentMenuSelectedKeys()}
             style={{ margin: '16px 0', width: '100%' }}
           >
           

             <Menu.Item >
               <Link to={`/repairingQuotation/${this.props.repairingQuotation.id}/dashboard`}><Icon type="dashboard" /><span>仪表板</span></Link>
             </Menu.Item>
             <Menu.Item >
               <Link to={`/repairingQuotation/${this.props.repairingQuotation.id}/editDetail`}><Icon type="edit" /><span>详情编辑</span></Link>
             </Menu.Item>
             <Menu.Item >
               <Link to={`/repairingQuotation/${this.props.repairingQuotation.id}/viewDetail`}><Icon type="eye-o" /><span>详情查看</span></Link>
             </Menu.Item>
             

             {this.getNavMenuItems(this.props.repairingQuotation.id)}
             <Menu.Item >
               <Link to={"/home"}><Icon type="home" /><span>回到主页</span></Link>
             </Menu.Item>
           </Menu>
         </Sider>
         <Layout>
           <Content style={{ margin: '24px 24px 0', height: '100%' }}>
             <Switch>
               <Route path="/repairingQuotation/:id/dashboard" component={RepairingQuotationDashboard} />
               <Route path="/repairingQuotation/:id/editDetail" component={RepairingQuotationEditDetail} />
               <Route path="/repairingQuotation/:id/viewDetail" component={RepairingQuotationViewDetail} />
               

               <Route path="/repairingQuotation/:id/list/repairingQuotationItemList" component={this.getRepairingQuotationItemSearch()} />
               <Route path="/repairingQuotation/:id/list/repairingQuotationItemCreateForm" component={this.getRepairingQuotationItemCreateForm()} />
               <Route path="/repairingQuotation/:id/list/repairingQuotationItemUpdateForm" component={this.getRepairingQuotationItemUpdateForm()} />

               <Route path="/repairingQuotation/:id/list/vehicleRepairingPaymentList" component={this.getVehicleRepairingPaymentSearch()} />
               <Route path="/repairingQuotation/:id/list/vehicleRepairingPaymentCreateForm" component={this.getVehicleRepairingPaymentCreateForm()} />
               <Route path="/repairingQuotation/:id/list/vehicleRepairingPaymentUpdateForm" component={this.getVehicleRepairingPaymentUpdateForm()} />
              
             </Switch>
           </Content>
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
  repairingQuotation: state._repairingQuotation,
  ...state,
}))(RepairingQuotationBizApp)


