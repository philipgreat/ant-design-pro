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
import styles from './GameSession.app.less'
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


  
const menuData = {menuName:"游戏场次", menuFor: "gameSession",
  		subItems: [
  {name: 'gameSessionRecordList', displayName:'游戏场次记录'},
  {name: 'gamePlayerRecordList', displayName:'游戏玩家记录'},
  {name: 'rearrangeSessionTicketRecordListAsSourceGameSession', displayName:'换场记录'},
  {name: 'rearrangeSessionTicketRecordListAsTargetGameSession', displayName:'换场记录'},
  {name: 'gameTokenList', displayName:'游戏Token'},
  {name: 'gameTicketList', displayName:'游戏门票'},
  {name: 'onlineOrderList', displayName:'线上订单号'},
  {name: 'ticketPrintingHistoryList', displayName:'门票打印记录'},
  {name: 'offlineStoreOrderList', displayName:'线下门店订单'},
  		
  		
  		],
};

class GameSessionBizApp extends React.PureComponent {
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
      return ['/gameSession/']
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
  



  getGameSessionRecordSearch = () => {
    const {GameSessionRecordSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._gameSession.gameSessionRecordList,
      count: state._gameSession.gameSessionRecordCount,
      currentPage: state._gameSession.gameSessionRecordCurrentPageNumber,
      searchFormParameters: state._gameSession.gameSessionRecordSearchFormParameters,
      loading: state._gameSession.loading,
      partialList: state._gameSession.partialList,
      owner: { type: '_gameSession', id: state._gameSession.id, referenceName: 'gameSession', listName: 'gameSessionRecordList', ref:state._gameSession, listDisplayName: '游戏场次记录列表' }, // this is for model namespace and
    }))(GameSessionRecordSearch)
  }
  getGameSessionRecordCreateForm = () => {
   	const {GameSessionRecordCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._gameSession.gameSessionRecordList,
      count: state._gameSession.gameSessionRecordCount,
      currentPage: state._gameSession.gameSessionRecordCurrentPageNumber,
      searchFormParameters: state._gameSession.gameSessionRecordSearchFormParameters,
      loading: state._gameSession.loading,
      owner: { type: '_gameSession', id: state._gameSession.id, referenceName: 'gameSession', listName: 'gameSessionRecordList', ref:state._gameSession, listDisplayName: '游戏场次记录列表'}, // this is for model namespace and
    }))(GameSessionRecordCreateForm)
  }
  
  getGameSessionRecordUpdateForm = () => {
  	const {GameSessionRecordUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._gameSession.selectedRows,
      currentUpdateIndex: state._gameSession.currentUpdateIndex,
      owner: { type: '_gameSession', id: state._gameSession.id, listName: 'gameSessionRecordList', ref:state._gameSession, listDisplayName: '游戏场次记录列表' }, // this is for model namespace and
    }))(GameSessionRecordUpdateForm)
  }

  getGamePlayerRecordSearch = () => {
    const {GamePlayerRecordSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._gameSession.gamePlayerRecordList,
      count: state._gameSession.gamePlayerRecordCount,
      currentPage: state._gameSession.gamePlayerRecordCurrentPageNumber,
      searchFormParameters: state._gameSession.gamePlayerRecordSearchFormParameters,
      loading: state._gameSession.loading,
      partialList: state._gameSession.partialList,
      owner: { type: '_gameSession', id: state._gameSession.id, referenceName: 'gameSession', listName: 'gamePlayerRecordList', ref:state._gameSession, listDisplayName: '游戏玩家记录列表' }, // this is for model namespace and
    }))(GamePlayerRecordSearch)
  }
  getGamePlayerRecordCreateForm = () => {
   	const {GamePlayerRecordCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._gameSession.gamePlayerRecordList,
      count: state._gameSession.gamePlayerRecordCount,
      currentPage: state._gameSession.gamePlayerRecordCurrentPageNumber,
      searchFormParameters: state._gameSession.gamePlayerRecordSearchFormParameters,
      loading: state._gameSession.loading,
      owner: { type: '_gameSession', id: state._gameSession.id, referenceName: 'gameSession', listName: 'gamePlayerRecordList', ref:state._gameSession, listDisplayName: '游戏玩家记录列表'}, // this is for model namespace and
    }))(GamePlayerRecordCreateForm)
  }
  
  getGamePlayerRecordUpdateForm = () => {
  	const {GamePlayerRecordUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._gameSession.selectedRows,
      currentUpdateIndex: state._gameSession.currentUpdateIndex,
      owner: { type: '_gameSession', id: state._gameSession.id, listName: 'gamePlayerRecordList', ref:state._gameSession, listDisplayName: '游戏玩家记录列表' }, // this is for model namespace and
    }))(GamePlayerRecordUpdateForm)
  }

  getRearrangeSessionTicketRecordAsSourceGameSessionSearch = () => {
    const {RearrangeSessionTicketRecordSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._gameSession.rearrangeSessionTicketRecordListAsSourceGameSession,
      count: state._gameSession.rearrangeSessionTicketRecordAsSourceGameSessionCount,
      currentPage: state._gameSession.rearrangeSessionTicketRecordAsSourceGameSessionCurrentPageNumber,
      searchFormParameters: state._gameSession.rearrangeSessionTicketRecordAsSourceGameSessionSearchFormParameters,
      loading: state._gameSession.loading,
      partialList: state._gameSession.partialList,
      owner: { type: '_gameSession', id: state._gameSession.id, referenceName: 'sourceGameSession', listName: 'rearrangeSessionTicketRecordListAsSourceGameSession', ref:state._gameSession, listDisplayName: '换场记录列表' }, // this is for model namespace and
    }))(RearrangeSessionTicketRecordSearch)
  }
  getRearrangeSessionTicketRecordAsSourceGameSessionCreateForm = () => {
   	const {RearrangeSessionTicketRecordCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._gameSession.rearrangeSessionTicketRecordListAsSourceGameSession,
      count: state._gameSession.rearrangeSessionTicketRecordAsSourceGameSessionCount,
      currentPage: state._gameSession.rearrangeSessionTicketRecordAsSourceGameSessionCurrentPageNumber,
      searchFormParameters: state._gameSession.rearrangeSessionTicketRecordAsSourceGameSessionSearchFormParameters,
      loading: state._gameSession.loading,
      owner: { type: '_gameSession', id: state._gameSession.id, referenceName: 'sourceGameSession', listName: 'rearrangeSessionTicketRecordListAsSourceGameSession', ref:state._gameSession, listDisplayName: '换场记录列表'}, // this is for model namespace and
    }))(RearrangeSessionTicketRecordCreateForm)
  }
  
  getRearrangeSessionTicketRecordAsSourceGameSessionUpdateForm = () => {
  	const {RearrangeSessionTicketRecordUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._gameSession.selectedRows,
      currentUpdateIndex: state._gameSession.currentUpdateIndex,
      owner: { type: '_gameSession', id: state._gameSession.id, listName: 'rearrangeSessionTicketRecordListAsSourceGameSession', ref:state._gameSession, listDisplayName: '换场记录列表' }, // this is for model namespace and
    }))(RearrangeSessionTicketRecordUpdateForm)
  }

  getRearrangeSessionTicketRecordAsTargetGameSessionSearch = () => {
    const {RearrangeSessionTicketRecordSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._gameSession.rearrangeSessionTicketRecordListAsTargetGameSession,
      count: state._gameSession.rearrangeSessionTicketRecordAsTargetGameSessionCount,
      currentPage: state._gameSession.rearrangeSessionTicketRecordAsTargetGameSessionCurrentPageNumber,
      searchFormParameters: state._gameSession.rearrangeSessionTicketRecordAsTargetGameSessionSearchFormParameters,
      loading: state._gameSession.loading,
      partialList: state._gameSession.partialList,
      owner: { type: '_gameSession', id: state._gameSession.id, referenceName: 'targetGameSession', listName: 'rearrangeSessionTicketRecordListAsTargetGameSession', ref:state._gameSession, listDisplayName: '换场记录列表' }, // this is for model namespace and
    }))(RearrangeSessionTicketRecordSearch)
  }
  getRearrangeSessionTicketRecordAsTargetGameSessionCreateForm = () => {
   	const {RearrangeSessionTicketRecordCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._gameSession.rearrangeSessionTicketRecordListAsTargetGameSession,
      count: state._gameSession.rearrangeSessionTicketRecordAsTargetGameSessionCount,
      currentPage: state._gameSession.rearrangeSessionTicketRecordAsTargetGameSessionCurrentPageNumber,
      searchFormParameters: state._gameSession.rearrangeSessionTicketRecordAsTargetGameSessionSearchFormParameters,
      loading: state._gameSession.loading,
      owner: { type: '_gameSession', id: state._gameSession.id, referenceName: 'targetGameSession', listName: 'rearrangeSessionTicketRecordListAsTargetGameSession', ref:state._gameSession, listDisplayName: '换场记录列表'}, // this is for model namespace and
    }))(RearrangeSessionTicketRecordCreateForm)
  }
  
  getRearrangeSessionTicketRecordAsTargetGameSessionUpdateForm = () => {
  	const {RearrangeSessionTicketRecordUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._gameSession.selectedRows,
      currentUpdateIndex: state._gameSession.currentUpdateIndex,
      owner: { type: '_gameSession', id: state._gameSession.id, listName: 'rearrangeSessionTicketRecordListAsTargetGameSession', ref:state._gameSession, listDisplayName: '换场记录列表' }, // this is for model namespace and
    }))(RearrangeSessionTicketRecordUpdateForm)
  }

  getGameTokenSearch = () => {
    const {GameTokenSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._gameSession.gameTokenList,
      count: state._gameSession.gameTokenCount,
      currentPage: state._gameSession.gameTokenCurrentPageNumber,
      searchFormParameters: state._gameSession.gameTokenSearchFormParameters,
      loading: state._gameSession.loading,
      partialList: state._gameSession.partialList,
      owner: { type: '_gameSession', id: state._gameSession.id, referenceName: 'gameSession', listName: 'gameTokenList', ref:state._gameSession, listDisplayName: '游戏Token列表' }, // this is for model namespace and
    }))(GameTokenSearch)
  }
  getGameTokenCreateForm = () => {
   	const {GameTokenCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._gameSession.gameTokenList,
      count: state._gameSession.gameTokenCount,
      currentPage: state._gameSession.gameTokenCurrentPageNumber,
      searchFormParameters: state._gameSession.gameTokenSearchFormParameters,
      loading: state._gameSession.loading,
      owner: { type: '_gameSession', id: state._gameSession.id, referenceName: 'gameSession', listName: 'gameTokenList', ref:state._gameSession, listDisplayName: '游戏Token列表'}, // this is for model namespace and
    }))(GameTokenCreateForm)
  }
  
  getGameTokenUpdateForm = () => {
  	const {GameTokenUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._gameSession.selectedRows,
      currentUpdateIndex: state._gameSession.currentUpdateIndex,
      owner: { type: '_gameSession', id: state._gameSession.id, listName: 'gameTokenList', ref:state._gameSession, listDisplayName: '游戏Token列表' }, // this is for model namespace and
    }))(GameTokenUpdateForm)
  }

  getGameTicketSearch = () => {
    const {GameTicketSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._gameSession.gameTicketList,
      count: state._gameSession.gameTicketCount,
      currentPage: state._gameSession.gameTicketCurrentPageNumber,
      searchFormParameters: state._gameSession.gameTicketSearchFormParameters,
      loading: state._gameSession.loading,
      partialList: state._gameSession.partialList,
      owner: { type: '_gameSession', id: state._gameSession.id, referenceName: 'gameSession', listName: 'gameTicketList', ref:state._gameSession, listDisplayName: '游戏门票列表' }, // this is for model namespace and
    }))(GameTicketSearch)
  }
  getGameTicketCreateForm = () => {
   	const {GameTicketCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._gameSession.gameTicketList,
      count: state._gameSession.gameTicketCount,
      currentPage: state._gameSession.gameTicketCurrentPageNumber,
      searchFormParameters: state._gameSession.gameTicketSearchFormParameters,
      loading: state._gameSession.loading,
      owner: { type: '_gameSession', id: state._gameSession.id, referenceName: 'gameSession', listName: 'gameTicketList', ref:state._gameSession, listDisplayName: '游戏门票列表'}, // this is for model namespace and
    }))(GameTicketCreateForm)
  }
  
  getGameTicketUpdateForm = () => {
  	const {GameTicketUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._gameSession.selectedRows,
      currentUpdateIndex: state._gameSession.currentUpdateIndex,
      owner: { type: '_gameSession', id: state._gameSession.id, listName: 'gameTicketList', ref:state._gameSession, listDisplayName: '游戏门票列表' }, // this is for model namespace and
    }))(GameTicketUpdateForm)
  }

  getOnlineOrderSearch = () => {
    const {OnlineOrderSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._gameSession.onlineOrderList,
      count: state._gameSession.onlineOrderCount,
      currentPage: state._gameSession.onlineOrderCurrentPageNumber,
      searchFormParameters: state._gameSession.onlineOrderSearchFormParameters,
      loading: state._gameSession.loading,
      partialList: state._gameSession.partialList,
      owner: { type: '_gameSession', id: state._gameSession.id, referenceName: 'session', listName: 'onlineOrderList', ref:state._gameSession, listDisplayName: '线上订单号列表' }, // this is for model namespace and
    }))(OnlineOrderSearch)
  }
  getOnlineOrderCreateForm = () => {
   	const {OnlineOrderCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._gameSession.onlineOrderList,
      count: state._gameSession.onlineOrderCount,
      currentPage: state._gameSession.onlineOrderCurrentPageNumber,
      searchFormParameters: state._gameSession.onlineOrderSearchFormParameters,
      loading: state._gameSession.loading,
      owner: { type: '_gameSession', id: state._gameSession.id, referenceName: 'session', listName: 'onlineOrderList', ref:state._gameSession, listDisplayName: '线上订单号列表'}, // this is for model namespace and
    }))(OnlineOrderCreateForm)
  }
  
  getOnlineOrderUpdateForm = () => {
  	const {OnlineOrderUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._gameSession.selectedRows,
      currentUpdateIndex: state._gameSession.currentUpdateIndex,
      owner: { type: '_gameSession', id: state._gameSession.id, listName: 'onlineOrderList', ref:state._gameSession, listDisplayName: '线上订单号列表' }, // this is for model namespace and
    }))(OnlineOrderUpdateForm)
  }

  getTicketPrintingHistorySearch = () => {
    const {TicketPrintingHistorySearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._gameSession.ticketPrintingHistoryList,
      count: state._gameSession.ticketPrintingHistoryCount,
      currentPage: state._gameSession.ticketPrintingHistoryCurrentPageNumber,
      searchFormParameters: state._gameSession.ticketPrintingHistorySearchFormParameters,
      loading: state._gameSession.loading,
      partialList: state._gameSession.partialList,
      owner: { type: '_gameSession', id: state._gameSession.id, referenceName: 'gameSession', listName: 'ticketPrintingHistoryList', ref:state._gameSession, listDisplayName: '门票打印记录列表' }, // this is for model namespace and
    }))(TicketPrintingHistorySearch)
  }
  getTicketPrintingHistoryCreateForm = () => {
   	const {TicketPrintingHistoryCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._gameSession.ticketPrintingHistoryList,
      count: state._gameSession.ticketPrintingHistoryCount,
      currentPage: state._gameSession.ticketPrintingHistoryCurrentPageNumber,
      searchFormParameters: state._gameSession.ticketPrintingHistorySearchFormParameters,
      loading: state._gameSession.loading,
      owner: { type: '_gameSession', id: state._gameSession.id, referenceName: 'gameSession', listName: 'ticketPrintingHistoryList', ref:state._gameSession, listDisplayName: '门票打印记录列表'}, // this is for model namespace and
    }))(TicketPrintingHistoryCreateForm)
  }
  
  getTicketPrintingHistoryUpdateForm = () => {
  	const {TicketPrintingHistoryUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._gameSession.selectedRows,
      currentUpdateIndex: state._gameSession.currentUpdateIndex,
      owner: { type: '_gameSession', id: state._gameSession.id, listName: 'ticketPrintingHistoryList', ref:state._gameSession, listDisplayName: '门票打印记录列表' }, // this is for model namespace and
    }))(TicketPrintingHistoryUpdateForm)
  }

  getOfflineStoreOrderSearch = () => {
    const {OfflineStoreOrderSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._gameSession.offlineStoreOrderList,
      count: state._gameSession.offlineStoreOrderCount,
      currentPage: state._gameSession.offlineStoreOrderCurrentPageNumber,
      searchFormParameters: state._gameSession.offlineStoreOrderSearchFormParameters,
      loading: state._gameSession.loading,
      partialList: state._gameSession.partialList,
      owner: { type: '_gameSession', id: state._gameSession.id, referenceName: 'gameSession', listName: 'offlineStoreOrderList', ref:state._gameSession, listDisplayName: '线下门店订单列表' }, // this is for model namespace and
    }))(OfflineStoreOrderSearch)
  }
  getOfflineStoreOrderCreateForm = () => {
   	const {OfflineStoreOrderCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._gameSession.offlineStoreOrderList,
      count: state._gameSession.offlineStoreOrderCount,
      currentPage: state._gameSession.offlineStoreOrderCurrentPageNumber,
      searchFormParameters: state._gameSession.offlineStoreOrderSearchFormParameters,
      loading: state._gameSession.loading,
      owner: { type: '_gameSession', id: state._gameSession.id, referenceName: 'gameSession', listName: 'offlineStoreOrderList', ref:state._gameSession, listDisplayName: '线下门店订单列表'}, // this is for model namespace and
    }))(OfflineStoreOrderCreateForm)
  }
  
  getOfflineStoreOrderUpdateForm = () => {
  	const {OfflineStoreOrderUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._gameSession.selectedRows,
      currentUpdateIndex: state._gameSession.currentUpdateIndex,
      owner: { type: '_gameSession', id: state._gameSession.id, listName: 'offlineStoreOrderList', ref:state._gameSession, listDisplayName: '线下门店订单列表' }, // this is for model namespace and
    }))(OfflineStoreOrderUpdateForm)
  }

  getPageTitle = () => {
    // const { location } = this.props
    // const { pathname } = location
    const title = '濮瑞游戏'
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
     const {GameSessionDashboard} = GlobalComponents
     //const {GameSessionEditDetail} = GlobalComponents
     //const {GameSessionViewDetail} = GlobalComponents
     
     
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
               <Link to={`/gameSession/${this.props.gameSession.id}/dashboard`}><Icon type="dashboard" /><span>仪表板</span></Link>
             </Menu.Item>


             {this.getNavMenuItems(this.props.gameSession.id)}
             <Menu.Item key="homepage">
               <Link to={"/home"}><Icon type="home" /><span>回到主页</span></Link>
             </Menu.Item>
           </Menu>
         </Sider>
         <Layout>
           <Content style={{ margin: '24px 24px 0', height: '100%' }}>
             <Switch>
             
               <Route path="/gameSession/:id/dashboard" component={GameSessionDashboard} />
               
               

               <Route path="/gameSession/:id/list/gameSessionRecordList" component={this.getGameSessionRecordSearch()} />
               <Route path="/gameSession/:id/list/gameSessionRecordCreateForm" component={this.getGameSessionRecordCreateForm()} />
               <Route path="/gameSession/:id/list/gameSessionRecordUpdateForm" component={this.getGameSessionRecordUpdateForm()} />

               <Route path="/gameSession/:id/list/gamePlayerRecordList" component={this.getGamePlayerRecordSearch()} />
               <Route path="/gameSession/:id/list/gamePlayerRecordCreateForm" component={this.getGamePlayerRecordCreateForm()} />
               <Route path="/gameSession/:id/list/gamePlayerRecordUpdateForm" component={this.getGamePlayerRecordUpdateForm()} />

               <Route path="/gameSession/:id/list/rearrangeSessionTicketRecordListAsSourceGameSession" component={this.getRearrangeSessionTicketRecordAsSourceGameSessionSearch()} />
               <Route path="/gameSession/:id/list/rearrangeSessionTicketRecordAsSourceGameSessionCreateForm" component={this.getRearrangeSessionTicketRecordAsSourceGameSessionCreateForm()} />
               <Route path="/gameSession/:id/list/rearrangeSessionTicketRecordAsSourceGameSessionUpdateForm" component={this.getRearrangeSessionTicketRecordAsSourceGameSessionUpdateForm()} />

               <Route path="/gameSession/:id/list/rearrangeSessionTicketRecordListAsTargetGameSession" component={this.getRearrangeSessionTicketRecordAsTargetGameSessionSearch()} />
               <Route path="/gameSession/:id/list/rearrangeSessionTicketRecordAsTargetGameSessionCreateForm" component={this.getRearrangeSessionTicketRecordAsTargetGameSessionCreateForm()} />
               <Route path="/gameSession/:id/list/rearrangeSessionTicketRecordAsTargetGameSessionUpdateForm" component={this.getRearrangeSessionTicketRecordAsTargetGameSessionUpdateForm()} />

               <Route path="/gameSession/:id/list/gameTokenList" component={this.getGameTokenSearch()} />
               <Route path="/gameSession/:id/list/gameTokenCreateForm" component={this.getGameTokenCreateForm()} />
               <Route path="/gameSession/:id/list/gameTokenUpdateForm" component={this.getGameTokenUpdateForm()} />

               <Route path="/gameSession/:id/list/gameTicketList" component={this.getGameTicketSearch()} />
               <Route path="/gameSession/:id/list/gameTicketCreateForm" component={this.getGameTicketCreateForm()} />
               <Route path="/gameSession/:id/list/gameTicketUpdateForm" component={this.getGameTicketUpdateForm()} />

               <Route path="/gameSession/:id/list/onlineOrderList" component={this.getOnlineOrderSearch()} />
               <Route path="/gameSession/:id/list/onlineOrderCreateForm" component={this.getOnlineOrderCreateForm()} />
               <Route path="/gameSession/:id/list/onlineOrderUpdateForm" component={this.getOnlineOrderUpdateForm()} />

               <Route path="/gameSession/:id/list/ticketPrintingHistoryList" component={this.getTicketPrintingHistorySearch()} />
               <Route path="/gameSession/:id/list/ticketPrintingHistoryCreateForm" component={this.getTicketPrintingHistoryCreateForm()} />
               <Route path="/gameSession/:id/list/ticketPrintingHistoryUpdateForm" component={this.getTicketPrintingHistoryUpdateForm()} />

               <Route path="/gameSession/:id/list/offlineStoreOrderList" component={this.getOfflineStoreOrderSearch()} />
               <Route path="/gameSession/:id/list/offlineStoreOrderCreateForm" component={this.getOfflineStoreOrderCreateForm()} />
               <Route path="/gameSession/:id/list/offlineStoreOrderUpdateForm" component={this.getOfflineStoreOrderUpdateForm()} />
              
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
  gameSession: state._gameSession,
  ...state,
}))(GameSessionBizApp)



