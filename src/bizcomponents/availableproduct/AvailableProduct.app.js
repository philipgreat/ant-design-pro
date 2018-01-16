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
import styles from './AvailableProduct.app.less'
import AvailableProductDashboard from './AvailableProduct.dashboard'
import AvailableProductEditDetail from './AvailableProduct.editdetail'
import AvailableProductViewDetail from './AvailableProduct.viewdetail'


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

class AvailableProductBizApp extends React.PureComponent {
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
      return ['/availableProduct/']
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
          <span>产品类型</span>
        </span>}
      >

        <Menu.Item>
          <Link to={`/availableProduct/${objectId}/list/availableServiceList`}>服务范围</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/availableProduct/${objectId}/list/productPriceList`}>产品价格</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/availableProduct/${objectId}/list/availableInsuranceList`}>保险增值服务</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/availableProduct/${objectId}/list/availableHandOverItemList`}>交接检查清单</Link>
        </Menu.Item>
      </SubMenu>
    )
  }


  getAvailableServiceSearch = () => {
    const {AvailableServiceSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._availableProduct.availableServiceList,
      count: state._availableProduct.availableServiceCount,
      currentPage: state._availableProduct.availableServiceCurrentPageNumber,
      searchFormParameters: state._availableProduct.availableServiceSearchFormParameters,
      loading: state._availableProduct.loading,
      owner: { type: '_availableProduct', id: state._availableProduct.id, listName: 'availableServiceList' }, // this is for model namespace and
    }))(AvailableServiceSearch)
  }
  getAvailableServiceCreateForm = () => {
   	const {AvailableServiceCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._availableProduct.availableServiceList,
      count: state._availableProduct.availableServiceCount,
      currentPage: state._availableProduct.availableServiceCurrentPageNumber,
      searchFormParameters: state._availableProduct.availableServiceSearchFormParameters,
      loading: state._availableProduct.loading,
      owner: { type: '_availableProduct', id: state._availableProduct.id, listName: 'availableServiceList'}, // this is for model namespace and
    }))(AvailableServiceCreateForm)
  }
  
  getAvailableServiceUpdateForm = () => {
  	const {AvailableServiceUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._availableProduct.selectedRows,
      currentUpdateIndex: state._availableProduct.currentUpdateIndex,
      owner: { type: '_availableProduct', id: state._availableProduct.id, listName: 'availableServiceList' }, // this is for model namespace and
    }))(AvailableServiceUpdateForm)
  }

  getProductPriceSearch = () => {
    const {ProductPriceSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._availableProduct.productPriceList,
      count: state._availableProduct.productPriceCount,
      currentPage: state._availableProduct.productPriceCurrentPageNumber,
      searchFormParameters: state._availableProduct.productPriceSearchFormParameters,
      loading: state._availableProduct.loading,
      owner: { type: '_availableProduct', id: state._availableProduct.id, listName: 'productPriceList' }, // this is for model namespace and
    }))(ProductPriceSearch)
  }
  getProductPriceCreateForm = () => {
   	const {ProductPriceCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._availableProduct.productPriceList,
      count: state._availableProduct.productPriceCount,
      currentPage: state._availableProduct.productPriceCurrentPageNumber,
      searchFormParameters: state._availableProduct.productPriceSearchFormParameters,
      loading: state._availableProduct.loading,
      owner: { type: '_availableProduct', id: state._availableProduct.id, listName: 'productPriceList'}, // this is for model namespace and
    }))(ProductPriceCreateForm)
  }
  
  getProductPriceUpdateForm = () => {
  	const {ProductPriceUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._availableProduct.selectedRows,
      currentUpdateIndex: state._availableProduct.currentUpdateIndex,
      owner: { type: '_availableProduct', id: state._availableProduct.id, listName: 'productPriceList' }, // this is for model namespace and
    }))(ProductPriceUpdateForm)
  }

  getAvailableInsuranceSearch = () => {
    const {AvailableInsuranceSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._availableProduct.availableInsuranceList,
      count: state._availableProduct.availableInsuranceCount,
      currentPage: state._availableProduct.availableInsuranceCurrentPageNumber,
      searchFormParameters: state._availableProduct.availableInsuranceSearchFormParameters,
      loading: state._availableProduct.loading,
      owner: { type: '_availableProduct', id: state._availableProduct.id, listName: 'availableInsuranceList' }, // this is for model namespace and
    }))(AvailableInsuranceSearch)
  }
  getAvailableInsuranceCreateForm = () => {
   	const {AvailableInsuranceCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._availableProduct.availableInsuranceList,
      count: state._availableProduct.availableInsuranceCount,
      currentPage: state._availableProduct.availableInsuranceCurrentPageNumber,
      searchFormParameters: state._availableProduct.availableInsuranceSearchFormParameters,
      loading: state._availableProduct.loading,
      owner: { type: '_availableProduct', id: state._availableProduct.id, listName: 'availableInsuranceList'}, // this is for model namespace and
    }))(AvailableInsuranceCreateForm)
  }
  
  getAvailableInsuranceUpdateForm = () => {
  	const {AvailableInsuranceUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._availableProduct.selectedRows,
      currentUpdateIndex: state._availableProduct.currentUpdateIndex,
      owner: { type: '_availableProduct', id: state._availableProduct.id, listName: 'availableInsuranceList' }, // this is for model namespace and
    }))(AvailableInsuranceUpdateForm)
  }

  getAvailableHandOverItemSearch = () => {
    const {AvailableHandOverItemSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._availableProduct.availableHandOverItemList,
      count: state._availableProduct.availableHandOverItemCount,
      currentPage: state._availableProduct.availableHandOverItemCurrentPageNumber,
      searchFormParameters: state._availableProduct.availableHandOverItemSearchFormParameters,
      loading: state._availableProduct.loading,
      owner: { type: '_availableProduct', id: state._availableProduct.id, listName: 'availableHandOverItemList' }, // this is for model namespace and
    }))(AvailableHandOverItemSearch)
  }
  getAvailableHandOverItemCreateForm = () => {
   	const {AvailableHandOverItemCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._availableProduct.availableHandOverItemList,
      count: state._availableProduct.availableHandOverItemCount,
      currentPage: state._availableProduct.availableHandOverItemCurrentPageNumber,
      searchFormParameters: state._availableProduct.availableHandOverItemSearchFormParameters,
      loading: state._availableProduct.loading,
      owner: { type: '_availableProduct', id: state._availableProduct.id, listName: 'availableHandOverItemList'}, // this is for model namespace and
    }))(AvailableHandOverItemCreateForm)
  }
  
  getAvailableHandOverItemUpdateForm = () => {
  	const {AvailableHandOverItemUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._availableProduct.selectedRows,
      currentUpdateIndex: state._availableProduct.currentUpdateIndex,
      owner: { type: '_availableProduct', id: state._availableProduct.id, listName: 'availableHandOverItemList' }, // this is for model namespace and
    }))(AvailableHandOverItemUpdateForm)
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
             <img src="/scm.svg" alt="logo" onClick={this.toggle} />
             <Link to="/home"> <h1>产品类型</h1></Link>
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
               <Link to={`/availableProduct/${this.props.availableProduct.id}/dashboard`}><Icon type="dashboard" /><span>仪表板</span></Link>
             </Menu.Item>
             <Menu.Item >
               <Link to={`/availableProduct/${this.props.availableProduct.id}/editDetail`}><Icon type="edit" /><span>详情编辑</span></Link>
             </Menu.Item>
             <Menu.Item >
               <Link to={`/availableProduct/${this.props.availableProduct.id}/viewDetail`}><Icon type="eye-o" /><span>详情查看</span></Link>
             </Menu.Item>
             

             {this.getNavMenuItems(this.props.availableProduct.id)}
             <Menu.Item >
               <Link to={"/home"}><Icon type="home" /><span>回到主页</span></Link>
             </Menu.Item>
           </Menu>
         </Sider>
         <Layout>
           <Content style={{ margin: '24px 24px 0', height: '100%' }}>
             <Switch>
               <Route path="/availableProduct/:id/dashboard" component={AvailableProductDashboard} />
               <Route path="/availableProduct/:id/editDetail" component={AvailableProductEditDetail} />
               <Route path="/availableProduct/:id/viewDetail" component={AvailableProductViewDetail} />
               

               <Route path="/availableProduct/:id/list/availableServiceList" component={this.getAvailableServiceSearch()} />
               <Route path="/availableProduct/:id/list/availableServiceCreateForm" component={this.getAvailableServiceCreateForm()} />
               <Route path="/availableProduct/:id/list/availableServiceUpdateForm" component={this.getAvailableServiceUpdateForm()} />

               <Route path="/availableProduct/:id/list/productPriceList" component={this.getProductPriceSearch()} />
               <Route path="/availableProduct/:id/list/productPriceCreateForm" component={this.getProductPriceCreateForm()} />
               <Route path="/availableProduct/:id/list/productPriceUpdateForm" component={this.getProductPriceUpdateForm()} />

               <Route path="/availableProduct/:id/list/availableInsuranceList" component={this.getAvailableInsuranceSearch()} />
               <Route path="/availableProduct/:id/list/availableInsuranceCreateForm" component={this.getAvailableInsuranceCreateForm()} />
               <Route path="/availableProduct/:id/list/availableInsuranceUpdateForm" component={this.getAvailableInsuranceUpdateForm()} />

               <Route path="/availableProduct/:id/list/availableHandOverItemList" component={this.getAvailableHandOverItemSearch()} />
               <Route path="/availableProduct/:id/list/availableHandOverItemCreateForm" component={this.getAvailableHandOverItemCreateForm()} />
               <Route path="/availableProduct/:id/list/availableHandOverItemUpdateForm" component={this.getAvailableHandOverItemUpdateForm()} />
              
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
  availableProduct: state._availableProduct,
  ...state,
}))(AvailableProductBizApp)



