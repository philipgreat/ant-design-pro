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
import styles from './HomePage.app.less'
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


  
const menuData = {menuName:"主页", menuFor: "homePage",
  		subItems: [
  {name: 'slideList', displayName:'幻灯片'},
  {name: 'encyclopediaItemList', displayName:'百科全书条目'},
  {name: 'taskFilterList', displayName:'任务过滤器'},
  {name: 'taskList', displayName:'任务'},
  {name: 'threadList', displayName:'主贴'},
  		
  		
  		],
};

class HomePageBizApp extends React.PureComponent {
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
      return ['/homePage/']
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


  getSlideSearch = () => {
    const {SlideSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._homePage.slideList,
      count: state._homePage.slideCount,
      currentPage: state._homePage.slideCurrentPageNumber,
      searchFormParameters: state._homePage.slideSearchFormParameters,
      loading: state._homePage.loading,
      partialList: state._homePage.partialList,
      owner: { type: '_homePage', id: state._homePage.id, referenceName: 'homePage', listName: 'slideList', ref:state._homePage, listDisplayName: '幻灯片列表' }, // this is for model namespace and
    }))(SlideSearch)
  }
  getSlideCreateForm = () => {
   	const {SlideCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._homePage.slideList,
      count: state._homePage.slideCount,
      currentPage: state._homePage.slideCurrentPageNumber,
      searchFormParameters: state._homePage.slideSearchFormParameters,
      loading: state._homePage.loading,
      owner: { type: '_homePage', id: state._homePage.id, referenceName: 'homePage', listName: 'slideList', ref:state._homePage, listDisplayName: '幻灯片列表'}, // this is for model namespace and
    }))(SlideCreateForm)
  }
  
  getSlideUpdateForm = () => {
  	const {SlideUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._homePage.selectedRows,
      currentUpdateIndex: state._homePage.currentUpdateIndex,
      owner: { type: '_homePage', id: state._homePage.id, listName: 'slideList', ref:state._homePage, listDisplayName: '幻灯片列表' }, // this is for model namespace and
    }))(SlideUpdateForm)
  }

  getEncyclopediaItemSearch = () => {
    const {EncyclopediaItemSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._homePage.encyclopediaItemList,
      count: state._homePage.encyclopediaItemCount,
      currentPage: state._homePage.encyclopediaItemCurrentPageNumber,
      searchFormParameters: state._homePage.encyclopediaItemSearchFormParameters,
      loading: state._homePage.loading,
      partialList: state._homePage.partialList,
      owner: { type: '_homePage', id: state._homePage.id, referenceName: 'homePage', listName: 'encyclopediaItemList', ref:state._homePage, listDisplayName: '百科全书条目列表' }, // this is for model namespace and
    }))(EncyclopediaItemSearch)
  }
  getEncyclopediaItemCreateForm = () => {
   	const {EncyclopediaItemCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._homePage.encyclopediaItemList,
      count: state._homePage.encyclopediaItemCount,
      currentPage: state._homePage.encyclopediaItemCurrentPageNumber,
      searchFormParameters: state._homePage.encyclopediaItemSearchFormParameters,
      loading: state._homePage.loading,
      owner: { type: '_homePage', id: state._homePage.id, referenceName: 'homePage', listName: 'encyclopediaItemList', ref:state._homePage, listDisplayName: '百科全书条目列表'}, // this is for model namespace and
    }))(EncyclopediaItemCreateForm)
  }
  
  getEncyclopediaItemUpdateForm = () => {
  	const {EncyclopediaItemUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._homePage.selectedRows,
      currentUpdateIndex: state._homePage.currentUpdateIndex,
      owner: { type: '_homePage', id: state._homePage.id, listName: 'encyclopediaItemList', ref:state._homePage, listDisplayName: '百科全书条目列表' }, // this is for model namespace and
    }))(EncyclopediaItemUpdateForm)
  }

  getTaskFilterSearch = () => {
    const {TaskFilterSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._homePage.taskFilterList,
      count: state._homePage.taskFilterCount,
      currentPage: state._homePage.taskFilterCurrentPageNumber,
      searchFormParameters: state._homePage.taskFilterSearchFormParameters,
      loading: state._homePage.loading,
      partialList: state._homePage.partialList,
      owner: { type: '_homePage', id: state._homePage.id, referenceName: 'homePage', listName: 'taskFilterList', ref:state._homePage, listDisplayName: '任务过滤器列表' }, // this is for model namespace and
    }))(TaskFilterSearch)
  }
  getTaskFilterCreateForm = () => {
   	const {TaskFilterCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._homePage.taskFilterList,
      count: state._homePage.taskFilterCount,
      currentPage: state._homePage.taskFilterCurrentPageNumber,
      searchFormParameters: state._homePage.taskFilterSearchFormParameters,
      loading: state._homePage.loading,
      owner: { type: '_homePage', id: state._homePage.id, referenceName: 'homePage', listName: 'taskFilterList', ref:state._homePage, listDisplayName: '任务过滤器列表'}, // this is for model namespace and
    }))(TaskFilterCreateForm)
  }
  
  getTaskFilterUpdateForm = () => {
  	const {TaskFilterUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._homePage.selectedRows,
      currentUpdateIndex: state._homePage.currentUpdateIndex,
      owner: { type: '_homePage', id: state._homePage.id, listName: 'taskFilterList', ref:state._homePage, listDisplayName: '任务过滤器列表' }, // this is for model namespace and
    }))(TaskFilterUpdateForm)
  }

  getTaskSearch = () => {
    const {TaskSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._homePage.taskList,
      count: state._homePage.taskCount,
      currentPage: state._homePage.taskCurrentPageNumber,
      searchFormParameters: state._homePage.taskSearchFormParameters,
      loading: state._homePage.loading,
      partialList: state._homePage.partialList,
      owner: { type: '_homePage', id: state._homePage.id, referenceName: 'homePage', listName: 'taskList', ref:state._homePage, listDisplayName: '任务列表' }, // this is for model namespace and
    }))(TaskSearch)
  }
  getTaskCreateForm = () => {
   	const {TaskCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._homePage.taskList,
      count: state._homePage.taskCount,
      currentPage: state._homePage.taskCurrentPageNumber,
      searchFormParameters: state._homePage.taskSearchFormParameters,
      loading: state._homePage.loading,
      owner: { type: '_homePage', id: state._homePage.id, referenceName: 'homePage', listName: 'taskList', ref:state._homePage, listDisplayName: '任务列表'}, // this is for model namespace and
    }))(TaskCreateForm)
  }
  
  getTaskUpdateForm = () => {
  	const {TaskUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._homePage.selectedRows,
      currentUpdateIndex: state._homePage.currentUpdateIndex,
      owner: { type: '_homePage', id: state._homePage.id, listName: 'taskList', ref:state._homePage, listDisplayName: '任务列表' }, // this is for model namespace and
    }))(TaskUpdateForm)
  }

  getThreadSearch = () => {
    const {ThreadSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._homePage.threadList,
      count: state._homePage.threadCount,
      currentPage: state._homePage.threadCurrentPageNumber,
      searchFormParameters: state._homePage.threadSearchFormParameters,
      loading: state._homePage.loading,
      partialList: state._homePage.partialList,
      owner: { type: '_homePage', id: state._homePage.id, referenceName: 'homePage', listName: 'threadList', ref:state._homePage, listDisplayName: '主贴列表' }, // this is for model namespace and
    }))(ThreadSearch)
  }
  getThreadCreateForm = () => {
   	const {ThreadCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._homePage.threadList,
      count: state._homePage.threadCount,
      currentPage: state._homePage.threadCurrentPageNumber,
      searchFormParameters: state._homePage.threadSearchFormParameters,
      loading: state._homePage.loading,
      owner: { type: '_homePage', id: state._homePage.id, referenceName: 'homePage', listName: 'threadList', ref:state._homePage, listDisplayName: '主贴列表'}, // this is for model namespace and
    }))(ThreadCreateForm)
  }
  
  getThreadUpdateForm = () => {
  	const {ThreadUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._homePage.selectedRows,
      currentUpdateIndex: state._homePage.currentUpdateIndex,
      owner: { type: '_homePage', id: state._homePage.id, listName: 'threadList', ref:state._homePage, listDisplayName: '主贴列表' }, // this is for model namespace and
    }))(ThreadUpdateForm)
  }

  getPageTitle = () => {
    // const { location } = this.props
    // const { pathname } = location
    const title = '帮帮兔社区运营中心'
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
     const {HomePageDashboard} = GlobalComponents
     const {HomePageEditDetail} = GlobalComponents
     const {HomePageViewDetail} = GlobalComponents
     
     
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
               <Link to={`/homePage/${this.props.homePage.id}/dashboard`}><Icon type="dashboard" /><span>仪表板</span></Link>
             </Menu.Item>


             {this.getNavMenuItems(this.props.homePage.id)}
             <Menu.Item key="homepage">
               <Link to={"/home"}><Icon type="home" /><span>回到主页</span></Link>
             </Menu.Item>
           </Menu>
         </Sider>
         <Layout>
           <Content style={{ margin: '24px 24px 0', height: '100%' }}>
             <Switch>
             
               <Route path="/homePage/:id/dashboard" component={HomePageDashboard} />
               
               <Route path="/homePage/:id/editDetail" component={HomePageEditDetail} />
               <Route path="/homePage/:id/viewDetail" component={HomePageViewDetail} /> 
               

               <Route path="/homePage/:id/list/slideList" component={this.getSlideSearch()} />
               <Route path="/homePage/:id/list/slideCreateForm" component={this.getSlideCreateForm()} />
               <Route path="/homePage/:id/list/slideUpdateForm" component={this.getSlideUpdateForm()} />

               <Route path="/homePage/:id/list/encyclopediaItemList" component={this.getEncyclopediaItemSearch()} />
               <Route path="/homePage/:id/list/encyclopediaItemCreateForm" component={this.getEncyclopediaItemCreateForm()} />
               <Route path="/homePage/:id/list/encyclopediaItemUpdateForm" component={this.getEncyclopediaItemUpdateForm()} />

               <Route path="/homePage/:id/list/taskFilterList" component={this.getTaskFilterSearch()} />
               <Route path="/homePage/:id/list/taskFilterCreateForm" component={this.getTaskFilterCreateForm()} />
               <Route path="/homePage/:id/list/taskFilterUpdateForm" component={this.getTaskFilterUpdateForm()} />

               <Route path="/homePage/:id/list/taskList" component={this.getTaskSearch()} />
               <Route path="/homePage/:id/list/taskCreateForm" component={this.getTaskCreateForm()} />
               <Route path="/homePage/:id/list/taskUpdateForm" component={this.getTaskUpdateForm()} />

               <Route path="/homePage/:id/list/threadList" component={this.getThreadSearch()} />
               <Route path="/homePage/:id/list/threadCreateForm" component={this.getThreadCreateForm()} />
               <Route path="/homePage/:id/list/threadUpdateForm" component={this.getThreadUpdateForm()} />
              
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
  homePage: state._homePage,
  ...state,
}))(HomePageBizApp)



