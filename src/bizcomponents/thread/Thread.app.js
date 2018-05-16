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
import styles from './Thread.app.less'
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


  
const menuData = {menuName:"主贴", menuFor: "thread",
  		subItems: [
  {name: 'threadReplyList', displayName:'跟帖回复'},
  {name: 'threadRegistrationList', displayName:'活动注册'},
  {name: 'threadLikeList', displayName:'主贴点赞'},
  		
  		
  		],
};

class ThreadBizApp extends React.PureComponent {
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
      return ['/thread/']
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


  getThreadReplySearch = () => {
    const {ThreadReplySearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._thread.threadReplyList,
      count: state._thread.threadReplyCount,
      currentPage: state._thread.threadReplyCurrentPageNumber,
      searchFormParameters: state._thread.threadReplySearchFormParameters,
      loading: state._thread.loading,
      partialList: state._thread.partialList,
      owner: { type: '_thread', id: state._thread.id, referenceName: 'thread', listName: 'threadReplyList', ref:state._thread, listDisplayName: '跟帖回复列表' }, // this is for model namespace and
    }))(ThreadReplySearch)
  }
  getThreadReplyCreateForm = () => {
   	const {ThreadReplyCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._thread.threadReplyList,
      count: state._thread.threadReplyCount,
      currentPage: state._thread.threadReplyCurrentPageNumber,
      searchFormParameters: state._thread.threadReplySearchFormParameters,
      loading: state._thread.loading,
      owner: { type: '_thread', id: state._thread.id, referenceName: 'thread', listName: 'threadReplyList', ref:state._thread, listDisplayName: '跟帖回复列表'}, // this is for model namespace and
    }))(ThreadReplyCreateForm)
  }
  
  getThreadReplyUpdateForm = () => {
  	const {ThreadReplyUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._thread.selectedRows,
      currentUpdateIndex: state._thread.currentUpdateIndex,
      owner: { type: '_thread', id: state._thread.id, listName: 'threadReplyList', ref:state._thread, listDisplayName: '跟帖回复列表' }, // this is for model namespace and
    }))(ThreadReplyUpdateForm)
  }

  getThreadRegistrationSearch = () => {
    const {ThreadRegistrationSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._thread.threadRegistrationList,
      count: state._thread.threadRegistrationCount,
      currentPage: state._thread.threadRegistrationCurrentPageNumber,
      searchFormParameters: state._thread.threadRegistrationSearchFormParameters,
      loading: state._thread.loading,
      partialList: state._thread.partialList,
      owner: { type: '_thread', id: state._thread.id, referenceName: 'thread', listName: 'threadRegistrationList', ref:state._thread, listDisplayName: '活动注册列表' }, // this is for model namespace and
    }))(ThreadRegistrationSearch)
  }
  getThreadRegistrationCreateForm = () => {
   	const {ThreadRegistrationCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._thread.threadRegistrationList,
      count: state._thread.threadRegistrationCount,
      currentPage: state._thread.threadRegistrationCurrentPageNumber,
      searchFormParameters: state._thread.threadRegistrationSearchFormParameters,
      loading: state._thread.loading,
      owner: { type: '_thread', id: state._thread.id, referenceName: 'thread', listName: 'threadRegistrationList', ref:state._thread, listDisplayName: '活动注册列表'}, // this is for model namespace and
    }))(ThreadRegistrationCreateForm)
  }
  
  getThreadRegistrationUpdateForm = () => {
  	const {ThreadRegistrationUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._thread.selectedRows,
      currentUpdateIndex: state._thread.currentUpdateIndex,
      owner: { type: '_thread', id: state._thread.id, listName: 'threadRegistrationList', ref:state._thread, listDisplayName: '活动注册列表' }, // this is for model namespace and
    }))(ThreadRegistrationUpdateForm)
  }

  getThreadLikeSearch = () => {
    const {ThreadLikeSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._thread.threadLikeList,
      count: state._thread.threadLikeCount,
      currentPage: state._thread.threadLikeCurrentPageNumber,
      searchFormParameters: state._thread.threadLikeSearchFormParameters,
      loading: state._thread.loading,
      partialList: state._thread.partialList,
      owner: { type: '_thread', id: state._thread.id, referenceName: 'thread', listName: 'threadLikeList', ref:state._thread, listDisplayName: '主贴点赞列表' }, // this is for model namespace and
    }))(ThreadLikeSearch)
  }
  getThreadLikeCreateForm = () => {
   	const {ThreadLikeCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._thread.threadLikeList,
      count: state._thread.threadLikeCount,
      currentPage: state._thread.threadLikeCurrentPageNumber,
      searchFormParameters: state._thread.threadLikeSearchFormParameters,
      loading: state._thread.loading,
      owner: { type: '_thread', id: state._thread.id, referenceName: 'thread', listName: 'threadLikeList', ref:state._thread, listDisplayName: '主贴点赞列表'}, // this is for model namespace and
    }))(ThreadLikeCreateForm)
  }
  
  getThreadLikeUpdateForm = () => {
  	const {ThreadLikeUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._thread.selectedRows,
      currentUpdateIndex: state._thread.currentUpdateIndex,
      owner: { type: '_thread', id: state._thread.id, listName: 'threadLikeList', ref:state._thread, listDisplayName: '主贴点赞列表' }, // this is for model namespace and
    }))(ThreadLikeUpdateForm)
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
     const {ThreadDashboard} = GlobalComponents
     const {ThreadEditDetail} = GlobalComponents
     const {ThreadViewDetail} = GlobalComponents
     
     
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
               <Link to={`/thread/${this.props.thread.id}/dashboard`}><Icon type="dashboard" /><span>仪表板</span></Link>
             </Menu.Item>


             {this.getNavMenuItems(this.props.thread.id)}
             <Menu.Item key="homepage">
               <Link to={"/home"}><Icon type="home" /><span>回到主页</span></Link>
             </Menu.Item>
           </Menu>
         </Sider>
         <Layout>
           <Content style={{ margin: '24px 24px 0', height: '100%' }}>
             <Switch>
             
               <Route path="/thread/:id/dashboard" component={ThreadDashboard} />
               
               <Route path="/thread/:id/editDetail" component={ThreadEditDetail} />
               <Route path="/thread/:id/viewDetail" component={ThreadViewDetail} /> 
               

               <Route path="/thread/:id/list/threadReplyList" component={this.getThreadReplySearch()} />
               <Route path="/thread/:id/list/threadReplyCreateForm" component={this.getThreadReplyCreateForm()} />
               <Route path="/thread/:id/list/threadReplyUpdateForm" component={this.getThreadReplyUpdateForm()} />

               <Route path="/thread/:id/list/threadRegistrationList" component={this.getThreadRegistrationSearch()} />
               <Route path="/thread/:id/list/threadRegistrationCreateForm" component={this.getThreadRegistrationCreateForm()} />
               <Route path="/thread/:id/list/threadRegistrationUpdateForm" component={this.getThreadRegistrationUpdateForm()} />

               <Route path="/thread/:id/list/threadLikeList" component={this.getThreadLikeSearch()} />
               <Route path="/thread/:id/list/threadLikeCreateForm" component={this.getThreadLikeCreateForm()} />
               <Route path="/thread/:id/list/threadLikeUpdateForm" component={this.getThreadLikeUpdateForm()} />
              
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
  thread: state._thread,
  ...state,
}))(ThreadBizApp)



