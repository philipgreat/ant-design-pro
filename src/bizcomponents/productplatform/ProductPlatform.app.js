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
import styles from './ProductPlatform.app.less'


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


  
const menuData = {menuName:"产品平台", menuFor: "productPlatform",
  		subItems: [
  {name: 'productList', displayName:'产品'},
  {name: 'materialList', displayName:'材料'},
  		
  		
  		],
};

class ProductPlatformBizApp extends React.PureComponent {
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
      return ['/productPlatform/']
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
          <span>{menuData.menuName}</span>
        </span>}
      >
        {menuData.subItems.map((item)=>(<Menu.Item>
          <Link to={`/${menuData.menuFor}/${objectId}/list/${item.name}`}>{item.displayName}</Link>
        </Menu.Item>))}
       
      </SubMenu>
    )
  }


  getProductSearch = () => {
    const {ProductSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._productPlatform.productList,
      count: state._productPlatform.productCount,
      currentPage: state._productPlatform.productCurrentPageNumber,
      searchFormParameters: state._productPlatform.productSearchFormParameters,
      loading: state._productPlatform.loading,
      owner: { type: '_productPlatform', id: state._productPlatform.id, listName: 'productList', ref:state._productPlatform, listDisplayName: '产品列表' }, // this is for model namespace and
    }))(ProductSearch)
  }
  getProductCreateForm = () => {
   	const {ProductCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._productPlatform.productList,
      count: state._productPlatform.productCount,
      currentPage: state._productPlatform.productCurrentPageNumber,
      searchFormParameters: state._productPlatform.productSearchFormParameters,
      loading: state._productPlatform.loading,
      owner: { type: '_productPlatform', id: state._productPlatform.id, listName: 'productList', ref:state._productPlatform, listDisplayName: '产品列表'}, // this is for model namespace and
    }))(ProductCreateForm)
  }
  
  getProductUpdateForm = () => {
  	const {ProductUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._productPlatform.selectedRows,
      currentUpdateIndex: state._productPlatform.currentUpdateIndex,
      owner: { type: '_productPlatform', id: state._productPlatform.id, listName: 'productList', ref:state._productPlatform, listDisplayName: '产品列表' }, // this is for model namespace and
    }))(ProductUpdateForm)
  }

  getMaterialSearch = () => {
    const {MaterialSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._productPlatform.materialList,
      count: state._productPlatform.materialCount,
      currentPage: state._productPlatform.materialCurrentPageNumber,
      searchFormParameters: state._productPlatform.materialSearchFormParameters,
      loading: state._productPlatform.loading,
      owner: { type: '_productPlatform', id: state._productPlatform.id, listName: 'materialList', ref:state._productPlatform, listDisplayName: '材料列表' }, // this is for model namespace and
    }))(MaterialSearch)
  }
  getMaterialCreateForm = () => {
   	const {MaterialCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._productPlatform.materialList,
      count: state._productPlatform.materialCount,
      currentPage: state._productPlatform.materialCurrentPageNumber,
      searchFormParameters: state._productPlatform.materialSearchFormParameters,
      loading: state._productPlatform.loading,
      owner: { type: '_productPlatform', id: state._productPlatform.id, listName: 'materialList', ref:state._productPlatform, listDisplayName: '材料列表'}, // this is for model namespace and
    }))(MaterialCreateForm)
  }
  
  getMaterialUpdateForm = () => {
  	const {MaterialUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._productPlatform.selectedRows,
      currentUpdateIndex: state._productPlatform.currentUpdateIndex,
      owner: { type: '_productPlatform', id: state._productPlatform.id, listName: 'materialList', ref:state._productPlatform, listDisplayName: '材料列表' }, // this is for model namespace and
    }))(MaterialUpdateForm)
  }

  getPageTitle = () => {
    // const { location } = this.props
    // const { pathname } = location
    const title = '物料管理系统'
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
     const {ProductPlatformDashboard} = GlobalComponents
     const {ProductPlatformEditDetail} = GlobalComponents
     const {ProductPlatformViewDetail} = GlobalComponents
     
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
            return (<a href={`#${item.link}`} className={styles.breadcrumbLink}> &gt;{item.name}</a>)

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
             {...menuProps}
             onOpenChange={this.handleOpenChange}
             selectedKeys={this.getCurrentMenuSelectedKeys()}
             style={{ margin: '16px 0', width: '100%' }}
           >
           

             <Menu.Item >
               <Link to={`/productPlatform/${this.props.productPlatform.id}/dashboard`}><Icon type="dashboard" /><span>仪表板</span></Link>
             </Menu.Item>
             

             {this.getNavMenuItems(this.props.productPlatform.id)}
             <Menu.Item >
               <Link to={"/home"}><Icon type="home" /><span>回到主页</span></Link>
             </Menu.Item>
           </Menu>
         </Sider>
         <Layout>
           <Content style={{ margin: '24px 24px 0', height: '100%' }}>
             <Switch>
             
               <Route path="/productPlatform/:id/dashboard" component={ProductPlatformDashboard} />
               
               <Route path="/productPlatform/:id/editDetail" component={ProductPlatformEditDetail} />
               <Route path="/productPlatform/:id/viewDetail" component={ProductPlatformViewDetail} /> 
               

               <Route path="/productPlatform/:id/list/productList" component={this.getProductSearch()} />
               <Route path="/productPlatform/:id/list/productCreateForm" component={this.getProductCreateForm()} />
               <Route path="/productPlatform/:id/list/productUpdateForm" component={this.getProductUpdateForm()} />

               <Route path="/productPlatform/:id/list/materialList" component={this.getMaterialSearch()} />
               <Route path="/productPlatform/:id/list/materialCreateForm" component={this.getMaterialCreateForm()} />
               <Route path="/productPlatform/:id/list/materialUpdateForm" component={this.getMaterialUpdateForm()} />
              
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
  productPlatform: state._productPlatform,
  ...state,
}))(ProductPlatformBizApp)



