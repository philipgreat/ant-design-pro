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
import styles from './Community.app.less'
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


  
const menuData = {menuName:"社区", menuFor: "community",
  		subItems: [
  {name: 'invitationCodeList', displayName:'邀请码'},
  {name: 'homePageList', displayName:'主页'},
  {name: 'encyclopediaItemList', displayName:'百科全书条目'},
  {name: 'taskPageList', displayName:'任务页面'},
  {name: 'communityUserList', displayName:'社区用户'},
  {name: 'taskList', displayName:'任务'},
  {name: 'groupPageList', displayName:'群组页面'},
  {name: 'threadList', displayName:'主贴'},
  		
  		
  		],
};

class CommunityBizApp extends React.PureComponent {
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
      return ['/community/']
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


  getInvitationCodeSearch = () => {
    const {InvitationCodeSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._community.invitationCodeList,
      count: state._community.invitationCodeCount,
      currentPage: state._community.invitationCodeCurrentPageNumber,
      searchFormParameters: state._community.invitationCodeSearchFormParameters,
      loading: state._community.loading,
      partialList: state._community.partialList,
      owner: { type: '_community', id: state._community.id, referenceName: 'community', listName: 'invitationCodeList', ref:state._community, listDisplayName: '邀请码列表' }, // this is for model namespace and
    }))(InvitationCodeSearch)
  }
  getInvitationCodeCreateForm = () => {
   	const {InvitationCodeCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._community.invitationCodeList,
      count: state._community.invitationCodeCount,
      currentPage: state._community.invitationCodeCurrentPageNumber,
      searchFormParameters: state._community.invitationCodeSearchFormParameters,
      loading: state._community.loading,
      owner: { type: '_community', id: state._community.id, referenceName: 'community', listName: 'invitationCodeList', ref:state._community, listDisplayName: '邀请码列表'}, // this is for model namespace and
    }))(InvitationCodeCreateForm)
  }
  
  getInvitationCodeUpdateForm = () => {
  	const {InvitationCodeUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._community.selectedRows,
      currentUpdateIndex: state._community.currentUpdateIndex,
      owner: { type: '_community', id: state._community.id, listName: 'invitationCodeList', ref:state._community, listDisplayName: '邀请码列表' }, // this is for model namespace and
    }))(InvitationCodeUpdateForm)
  }

  getHomePageSearch = () => {
    const {HomePageSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._community.homePageList,
      count: state._community.homePageCount,
      currentPage: state._community.homePageCurrentPageNumber,
      searchFormParameters: state._community.homePageSearchFormParameters,
      loading: state._community.loading,
      partialList: state._community.partialList,
      owner: { type: '_community', id: state._community.id, referenceName: 'community', listName: 'homePageList', ref:state._community, listDisplayName: '主页列表' }, // this is for model namespace and
    }))(HomePageSearch)
  }
  getHomePageCreateForm = () => {
   	const {HomePageCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._community.homePageList,
      count: state._community.homePageCount,
      currentPage: state._community.homePageCurrentPageNumber,
      searchFormParameters: state._community.homePageSearchFormParameters,
      loading: state._community.loading,
      owner: { type: '_community', id: state._community.id, referenceName: 'community', listName: 'homePageList', ref:state._community, listDisplayName: '主页列表'}, // this is for model namespace and
    }))(HomePageCreateForm)
  }
  
  getHomePageUpdateForm = () => {
  	const {HomePageUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._community.selectedRows,
      currentUpdateIndex: state._community.currentUpdateIndex,
      owner: { type: '_community', id: state._community.id, listName: 'homePageList', ref:state._community, listDisplayName: '主页列表' }, // this is for model namespace and
    }))(HomePageUpdateForm)
  }

  getEncyclopediaItemSearch = () => {
    const {EncyclopediaItemSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._community.encyclopediaItemList,
      count: state._community.encyclopediaItemCount,
      currentPage: state._community.encyclopediaItemCurrentPageNumber,
      searchFormParameters: state._community.encyclopediaItemSearchFormParameters,
      loading: state._community.loading,
      partialList: state._community.partialList,
      owner: { type: '_community', id: state._community.id, referenceName: 'community', listName: 'encyclopediaItemList', ref:state._community, listDisplayName: '百科全书条目列表' }, // this is for model namespace and
    }))(EncyclopediaItemSearch)
  }
  getEncyclopediaItemCreateForm = () => {
   	const {EncyclopediaItemCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._community.encyclopediaItemList,
      count: state._community.encyclopediaItemCount,
      currentPage: state._community.encyclopediaItemCurrentPageNumber,
      searchFormParameters: state._community.encyclopediaItemSearchFormParameters,
      loading: state._community.loading,
      owner: { type: '_community', id: state._community.id, referenceName: 'community', listName: 'encyclopediaItemList', ref:state._community, listDisplayName: '百科全书条目列表'}, // this is for model namespace and
    }))(EncyclopediaItemCreateForm)
  }
  
  getEncyclopediaItemUpdateForm = () => {
  	const {EncyclopediaItemUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._community.selectedRows,
      currentUpdateIndex: state._community.currentUpdateIndex,
      owner: { type: '_community', id: state._community.id, listName: 'encyclopediaItemList', ref:state._community, listDisplayName: '百科全书条目列表' }, // this is for model namespace and
    }))(EncyclopediaItemUpdateForm)
  }

  getTaskPageSearch = () => {
    const {TaskPageSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._community.taskPageList,
      count: state._community.taskPageCount,
      currentPage: state._community.taskPageCurrentPageNumber,
      searchFormParameters: state._community.taskPageSearchFormParameters,
      loading: state._community.loading,
      partialList: state._community.partialList,
      owner: { type: '_community', id: state._community.id, referenceName: 'community', listName: 'taskPageList', ref:state._community, listDisplayName: '任务页面列表' }, // this is for model namespace and
    }))(TaskPageSearch)
  }
  getTaskPageCreateForm = () => {
   	const {TaskPageCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._community.taskPageList,
      count: state._community.taskPageCount,
      currentPage: state._community.taskPageCurrentPageNumber,
      searchFormParameters: state._community.taskPageSearchFormParameters,
      loading: state._community.loading,
      owner: { type: '_community', id: state._community.id, referenceName: 'community', listName: 'taskPageList', ref:state._community, listDisplayName: '任务页面列表'}, // this is for model namespace and
    }))(TaskPageCreateForm)
  }
  
  getTaskPageUpdateForm = () => {
  	const {TaskPageUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._community.selectedRows,
      currentUpdateIndex: state._community.currentUpdateIndex,
      owner: { type: '_community', id: state._community.id, listName: 'taskPageList', ref:state._community, listDisplayName: '任务页面列表' }, // this is for model namespace and
    }))(TaskPageUpdateForm)
  }

  getCommunityUserSearch = () => {
    const {CommunityUserSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._community.communityUserList,
      count: state._community.communityUserCount,
      currentPage: state._community.communityUserCurrentPageNumber,
      searchFormParameters: state._community.communityUserSearchFormParameters,
      loading: state._community.loading,
      partialList: state._community.partialList,
      owner: { type: '_community', id: state._community.id, referenceName: 'community', listName: 'communityUserList', ref:state._community, listDisplayName: '社区用户列表' }, // this is for model namespace and
    }))(CommunityUserSearch)
  }
  getCommunityUserCreateForm = () => {
   	const {CommunityUserCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._community.communityUserList,
      count: state._community.communityUserCount,
      currentPage: state._community.communityUserCurrentPageNumber,
      searchFormParameters: state._community.communityUserSearchFormParameters,
      loading: state._community.loading,
      owner: { type: '_community', id: state._community.id, referenceName: 'community', listName: 'communityUserList', ref:state._community, listDisplayName: '社区用户列表'}, // this is for model namespace and
    }))(CommunityUserCreateForm)
  }
  
  getCommunityUserUpdateForm = () => {
  	const {CommunityUserUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._community.selectedRows,
      currentUpdateIndex: state._community.currentUpdateIndex,
      owner: { type: '_community', id: state._community.id, listName: 'communityUserList', ref:state._community, listDisplayName: '社区用户列表' }, // this is for model namespace and
    }))(CommunityUserUpdateForm)
  }

  getTaskSearch = () => {
    const {TaskSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._community.taskList,
      count: state._community.taskCount,
      currentPage: state._community.taskCurrentPageNumber,
      searchFormParameters: state._community.taskSearchFormParameters,
      loading: state._community.loading,
      partialList: state._community.partialList,
      owner: { type: '_community', id: state._community.id, referenceName: 'community', listName: 'taskList', ref:state._community, listDisplayName: '任务列表' }, // this is for model namespace and
    }))(TaskSearch)
  }
  getTaskCreateForm = () => {
   	const {TaskCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._community.taskList,
      count: state._community.taskCount,
      currentPage: state._community.taskCurrentPageNumber,
      searchFormParameters: state._community.taskSearchFormParameters,
      loading: state._community.loading,
      owner: { type: '_community', id: state._community.id, referenceName: 'community', listName: 'taskList', ref:state._community, listDisplayName: '任务列表'}, // this is for model namespace and
    }))(TaskCreateForm)
  }
  
  getTaskUpdateForm = () => {
  	const {TaskUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._community.selectedRows,
      currentUpdateIndex: state._community.currentUpdateIndex,
      owner: { type: '_community', id: state._community.id, listName: 'taskList', ref:state._community, listDisplayName: '任务列表' }, // this is for model namespace and
    }))(TaskUpdateForm)
  }

  getGroupPageSearch = () => {
    const {GroupPageSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._community.groupPageList,
      count: state._community.groupPageCount,
      currentPage: state._community.groupPageCurrentPageNumber,
      searchFormParameters: state._community.groupPageSearchFormParameters,
      loading: state._community.loading,
      partialList: state._community.partialList,
      owner: { type: '_community', id: state._community.id, referenceName: 'community', listName: 'groupPageList', ref:state._community, listDisplayName: '群组页面列表' }, // this is for model namespace and
    }))(GroupPageSearch)
  }
  getGroupPageCreateForm = () => {
   	const {GroupPageCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._community.groupPageList,
      count: state._community.groupPageCount,
      currentPage: state._community.groupPageCurrentPageNumber,
      searchFormParameters: state._community.groupPageSearchFormParameters,
      loading: state._community.loading,
      owner: { type: '_community', id: state._community.id, referenceName: 'community', listName: 'groupPageList', ref:state._community, listDisplayName: '群组页面列表'}, // this is for model namespace and
    }))(GroupPageCreateForm)
  }
  
  getGroupPageUpdateForm = () => {
  	const {GroupPageUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._community.selectedRows,
      currentUpdateIndex: state._community.currentUpdateIndex,
      owner: { type: '_community', id: state._community.id, listName: 'groupPageList', ref:state._community, listDisplayName: '群组页面列表' }, // this is for model namespace and
    }))(GroupPageUpdateForm)
  }

  getThreadSearch = () => {
    const {ThreadSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._community.threadList,
      count: state._community.threadCount,
      currentPage: state._community.threadCurrentPageNumber,
      searchFormParameters: state._community.threadSearchFormParameters,
      loading: state._community.loading,
      partialList: state._community.partialList,
      owner: { type: '_community', id: state._community.id, referenceName: 'community', listName: 'threadList', ref:state._community, listDisplayName: '主贴列表' }, // this is for model namespace and
    }))(ThreadSearch)
  }
  getThreadCreateForm = () => {
   	const {ThreadCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._community.threadList,
      count: state._community.threadCount,
      currentPage: state._community.threadCurrentPageNumber,
      searchFormParameters: state._community.threadSearchFormParameters,
      loading: state._community.loading,
      owner: { type: '_community', id: state._community.id, referenceName: 'community', listName: 'threadList', ref:state._community, listDisplayName: '主贴列表'}, // this is for model namespace and
    }))(ThreadCreateForm)
  }
  
  getThreadUpdateForm = () => {
  	const {ThreadUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._community.selectedRows,
      currentUpdateIndex: state._community.currentUpdateIndex,
      owner: { type: '_community', id: state._community.id, listName: 'threadList', ref:state._community, listDisplayName: '主贴列表' }, // this is for model namespace and
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
     const {CommunityDashboard} = GlobalComponents
     const {CommunityEditDetail} = GlobalComponents
     const {CommunityViewDetail} = GlobalComponents
     
     
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
               <Link to={`/community/${this.props.community.id}/dashboard`}><Icon type="dashboard" /><span>仪表板</span></Link>
             </Menu.Item>


             {this.getNavMenuItems(this.props.community.id)}
             <Menu.Item key="homepage">
               <Link to={"/home"}><Icon type="home" /><span>回到主页</span></Link>
             </Menu.Item>
           </Menu>
         </Sider>
         <Layout>
           <Content style={{ margin: '24px 24px 0', height: '100%' }}>
             <Switch>
             
               <Route path="/community/:id/dashboard" component={CommunityDashboard} />
               
               <Route path="/community/:id/editDetail" component={CommunityEditDetail} />
               <Route path="/community/:id/viewDetail" component={CommunityViewDetail} /> 
               

               <Route path="/community/:id/list/invitationCodeList" component={this.getInvitationCodeSearch()} />
               <Route path="/community/:id/list/invitationCodeCreateForm" component={this.getInvitationCodeCreateForm()} />
               <Route path="/community/:id/list/invitationCodeUpdateForm" component={this.getInvitationCodeUpdateForm()} />

               <Route path="/community/:id/list/homePageList" component={this.getHomePageSearch()} />
               <Route path="/community/:id/list/homePageCreateForm" component={this.getHomePageCreateForm()} />
               <Route path="/community/:id/list/homePageUpdateForm" component={this.getHomePageUpdateForm()} />

               <Route path="/community/:id/list/encyclopediaItemList" component={this.getEncyclopediaItemSearch()} />
               <Route path="/community/:id/list/encyclopediaItemCreateForm" component={this.getEncyclopediaItemCreateForm()} />
               <Route path="/community/:id/list/encyclopediaItemUpdateForm" component={this.getEncyclopediaItemUpdateForm()} />

               <Route path="/community/:id/list/taskPageList" component={this.getTaskPageSearch()} />
               <Route path="/community/:id/list/taskPageCreateForm" component={this.getTaskPageCreateForm()} />
               <Route path="/community/:id/list/taskPageUpdateForm" component={this.getTaskPageUpdateForm()} />

               <Route path="/community/:id/list/communityUserList" component={this.getCommunityUserSearch()} />
               <Route path="/community/:id/list/communityUserCreateForm" component={this.getCommunityUserCreateForm()} />
               <Route path="/community/:id/list/communityUserUpdateForm" component={this.getCommunityUserUpdateForm()} />

               <Route path="/community/:id/list/taskList" component={this.getTaskSearch()} />
               <Route path="/community/:id/list/taskCreateForm" component={this.getTaskCreateForm()} />
               <Route path="/community/:id/list/taskUpdateForm" component={this.getTaskUpdateForm()} />

               <Route path="/community/:id/list/groupPageList" component={this.getGroupPageSearch()} />
               <Route path="/community/:id/list/groupPageCreateForm" component={this.getGroupPageCreateForm()} />
               <Route path="/community/:id/list/groupPageUpdateForm" component={this.getGroupPageUpdateForm()} />

               <Route path="/community/:id/list/threadList" component={this.getThreadSearch()} />
               <Route path="/community/:id/list/threadCreateForm" component={this.getThreadCreateForm()} />
               <Route path="/community/:id/list/threadUpdateForm" component={this.getThreadUpdateForm()} />
              
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
  community: state._community,
  ...state,
}))(CommunityBizApp)



