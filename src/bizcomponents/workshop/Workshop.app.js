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
import styles from './Workshop.app.less'
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


  
const menuData = {menuName:"车间", menuFor: "workshop",
  		subItems: [
  {name: 'workshopRegisterHistoryList', displayName:'车间登记历史'},
  {name: 'workshopReviewList', displayName:'车间检查'},
  {name: 'workshopLikeList', displayName:'车间等'},
  		
  		
  		],
};

class WorkshopBizApp extends React.PureComponent {
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
      return ['/workshop/']
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


  getWorkshopRegisterHistorySearch = () => {
    const {WorkshopRegisterHistorySearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._workshop.workshopRegisterHistoryList,
      count: state._workshop.workshopRegisterHistoryCount,
      currentPage: state._workshop.workshopRegisterHistoryCurrentPageNumber,
      searchFormParameters: state._workshop.workshopRegisterHistorySearchFormParameters,
      loading: state._workshop.loading,
      partialList: state._workshop.partialList,
      owner: { type: '_workshop', id: state._workshop.id, referenceName: 'workshop', listName: 'workshopRegisterHistoryList', ref:state._workshop, listDisplayName: '车间登记历史列表' }, // this is for model namespace and
    }))(WorkshopRegisterHistorySearch)
  }
  getWorkshopRegisterHistoryCreateForm = () => {
   	const {WorkshopRegisterHistoryCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._workshop.workshopRegisterHistoryList,
      count: state._workshop.workshopRegisterHistoryCount,
      currentPage: state._workshop.workshopRegisterHistoryCurrentPageNumber,
      searchFormParameters: state._workshop.workshopRegisterHistorySearchFormParameters,
      loading: state._workshop.loading,
      owner: { type: '_workshop', id: state._workshop.id, referenceName: 'workshop', listName: 'workshopRegisterHistoryList', ref:state._workshop, listDisplayName: '车间登记历史列表'}, // this is for model namespace and
    }))(WorkshopRegisterHistoryCreateForm)
  }
  
  getWorkshopRegisterHistoryUpdateForm = () => {
  	const {WorkshopRegisterHistoryUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._workshop.selectedRows,
      currentUpdateIndex: state._workshop.currentUpdateIndex,
      owner: { type: '_workshop', id: state._workshop.id, listName: 'workshopRegisterHistoryList', ref:state._workshop, listDisplayName: '车间登记历史列表' }, // this is for model namespace and
    }))(WorkshopRegisterHistoryUpdateForm)
  }

  getWorkshopReviewSearch = () => {
    const {WorkshopReviewSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._workshop.workshopReviewList,
      count: state._workshop.workshopReviewCount,
      currentPage: state._workshop.workshopReviewCurrentPageNumber,
      searchFormParameters: state._workshop.workshopReviewSearchFormParameters,
      loading: state._workshop.loading,
      partialList: state._workshop.partialList,
      owner: { type: '_workshop', id: state._workshop.id, referenceName: 'workshop', listName: 'workshopReviewList', ref:state._workshop, listDisplayName: '车间检查列表' }, // this is for model namespace and
    }))(WorkshopReviewSearch)
  }
  getWorkshopReviewCreateForm = () => {
   	const {WorkshopReviewCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._workshop.workshopReviewList,
      count: state._workshop.workshopReviewCount,
      currentPage: state._workshop.workshopReviewCurrentPageNumber,
      searchFormParameters: state._workshop.workshopReviewSearchFormParameters,
      loading: state._workshop.loading,
      owner: { type: '_workshop', id: state._workshop.id, referenceName: 'workshop', listName: 'workshopReviewList', ref:state._workshop, listDisplayName: '车间检查列表'}, // this is for model namespace and
    }))(WorkshopReviewCreateForm)
  }
  
  getWorkshopReviewUpdateForm = () => {
  	const {WorkshopReviewUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._workshop.selectedRows,
      currentUpdateIndex: state._workshop.currentUpdateIndex,
      owner: { type: '_workshop', id: state._workshop.id, listName: 'workshopReviewList', ref:state._workshop, listDisplayName: '车间检查列表' }, // this is for model namespace and
    }))(WorkshopReviewUpdateForm)
  }

  getWorkshopLikeSearch = () => {
    const {WorkshopLikeSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._workshop.workshopLikeList,
      count: state._workshop.workshopLikeCount,
      currentPage: state._workshop.workshopLikeCurrentPageNumber,
      searchFormParameters: state._workshop.workshopLikeSearchFormParameters,
      loading: state._workshop.loading,
      partialList: state._workshop.partialList,
      owner: { type: '_workshop', id: state._workshop.id, referenceName: 'workshop', listName: 'workshopLikeList', ref:state._workshop, listDisplayName: '车间等列表' }, // this is for model namespace and
    }))(WorkshopLikeSearch)
  }
  getWorkshopLikeCreateForm = () => {
   	const {WorkshopLikeCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._workshop.workshopLikeList,
      count: state._workshop.workshopLikeCount,
      currentPage: state._workshop.workshopLikeCurrentPageNumber,
      searchFormParameters: state._workshop.workshopLikeSearchFormParameters,
      loading: state._workshop.loading,
      owner: { type: '_workshop', id: state._workshop.id, referenceName: 'workshop', listName: 'workshopLikeList', ref:state._workshop, listDisplayName: '车间等列表'}, // this is for model namespace and
    }))(WorkshopLikeCreateForm)
  }
  
  getWorkshopLikeUpdateForm = () => {
  	const {WorkshopLikeUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._workshop.selectedRows,
      currentUpdateIndex: state._workshop.currentUpdateIndex,
      owner: { type: '_workshop', id: state._workshop.id, listName: 'workshopLikeList', ref:state._workshop, listDisplayName: '车间等列表' }, // this is for model namespace and
    }))(WorkshopLikeUpdateForm)
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
     const {WorkshopDashboard} = GlobalComponents
     const {WorkshopEditDetail} = GlobalComponents
     const {WorkshopViewDetail} = GlobalComponents
     
     
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
               <Link to={`/workshop/${this.props.workshop.id}/dashboard`}><Icon type="dashboard" /><span>仪表板</span></Link>
             </Menu.Item>


             {this.getNavMenuItems(this.props.workshop.id)}
             <Menu.Item key="homepage">
               <Link to={"/home"}><Icon type="home" /><span>回到主页</span></Link>
             </Menu.Item>
           </Menu>
         </Sider>
         <Layout>
           <Content style={{ margin: '24px 24px 0', height: '100%' }}>
             <Switch>
             
               <Route path="/workshop/:id/dashboard" component={WorkshopDashboard} />
               
               <Route path="/workshop/:id/editDetail" component={WorkshopEditDetail} />
               <Route path="/workshop/:id/viewDetail" component={WorkshopViewDetail} /> 
               

               <Route path="/workshop/:id/list/workshopRegisterHistoryList" component={this.getWorkshopRegisterHistorySearch()} />
               <Route path="/workshop/:id/list/workshopRegisterHistoryCreateForm" component={this.getWorkshopRegisterHistoryCreateForm()} />
               <Route path="/workshop/:id/list/workshopRegisterHistoryUpdateForm" component={this.getWorkshopRegisterHistoryUpdateForm()} />

               <Route path="/workshop/:id/list/workshopReviewList" component={this.getWorkshopReviewSearch()} />
               <Route path="/workshop/:id/list/workshopReviewCreateForm" component={this.getWorkshopReviewCreateForm()} />
               <Route path="/workshop/:id/list/workshopReviewUpdateForm" component={this.getWorkshopReviewUpdateForm()} />

               <Route path="/workshop/:id/list/workshopLikeList" component={this.getWorkshopLikeSearch()} />
               <Route path="/workshop/:id/list/workshopLikeCreateForm" component={this.getWorkshopLikeCreateForm()} />
               <Route path="/workshop/:id/list/workshopLikeUpdateForm" component={this.getWorkshopLikeUpdateForm()} />
              
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
  workshop: state._workshop,
  ...state,
}))(WorkshopBizApp)



