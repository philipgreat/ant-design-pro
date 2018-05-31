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
import styles from './Game.app.less'
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


  
const menuData = {menuName:"游戏", menuFor: "game",
  		subItems: [
  {name: 'gameSessionList', displayName:'游戏场次'},
  {name: 'gameSessionRecordList', displayName:'游戏场次记录'},
  {name: 'gamePlayerRecordList', displayName:'游戏玩家记录'},
  {name: 'rearrangeSessionTicketRecordListAsSourceGame', displayName:'换场记录'},
  {name: 'rearrangeSessionTicketRecordListAsTargetGame', displayName:'换场记录'},
  {name: 'gameTicketList', displayName:'游戏门票'},
  {name: 'onlineOrderList', displayName:'线上订单号'},
  {name: 'ticketPrintingHistoryList', displayName:'门票打印记录'},
  {name: 'offlineStoreOrderList', displayName:'线下门店订单'},
  		
  		
  		],
};

class GameBizApp extends React.PureComponent {
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
      return ['/game/']
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
  



  getGameSessionSearch = () => {
    const {GameSessionSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._game.gameSessionList,
      count: state._game.gameSessionCount,
      currentPage: state._game.gameSessionCurrentPageNumber,
      searchFormParameters: state._game.gameSessionSearchFormParameters,
      loading: state._game.loading,
      partialList: state._game.partialList,
      owner: { type: '_game', id: state._game.id, referenceName: 'game', listName: 'gameSessionList', ref:state._game, listDisplayName: '游戏场次列表' }, // this is for model namespace and
    }))(GameSessionSearch)
  }
  getGameSessionCreateForm = () => {
   	const {GameSessionCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._game.gameSessionList,
      count: state._game.gameSessionCount,
      currentPage: state._game.gameSessionCurrentPageNumber,
      searchFormParameters: state._game.gameSessionSearchFormParameters,
      loading: state._game.loading,
      owner: { type: '_game', id: state._game.id, referenceName: 'game', listName: 'gameSessionList', ref:state._game, listDisplayName: '游戏场次列表'}, // this is for model namespace and
    }))(GameSessionCreateForm)
  }
  
  getGameSessionUpdateForm = () => {
  	const {GameSessionUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._game.selectedRows,
      currentUpdateIndex: state._game.currentUpdateIndex,
      owner: { type: '_game', id: state._game.id, listName: 'gameSessionList', ref:state._game, listDisplayName: '游戏场次列表' }, // this is for model namespace and
    }))(GameSessionUpdateForm)
  }

  getGameSessionRecordSearch = () => {
    const {GameSessionRecordSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._game.gameSessionRecordList,
      count: state._game.gameSessionRecordCount,
      currentPage: state._game.gameSessionRecordCurrentPageNumber,
      searchFormParameters: state._game.gameSessionRecordSearchFormParameters,
      loading: state._game.loading,
      partialList: state._game.partialList,
      owner: { type: '_game', id: state._game.id, referenceName: 'game', listName: 'gameSessionRecordList', ref:state._game, listDisplayName: '游戏场次记录列表' }, // this is for model namespace and
    }))(GameSessionRecordSearch)
  }
  getGameSessionRecordCreateForm = () => {
   	const {GameSessionRecordCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._game.gameSessionRecordList,
      count: state._game.gameSessionRecordCount,
      currentPage: state._game.gameSessionRecordCurrentPageNumber,
      searchFormParameters: state._game.gameSessionRecordSearchFormParameters,
      loading: state._game.loading,
      owner: { type: '_game', id: state._game.id, referenceName: 'game', listName: 'gameSessionRecordList', ref:state._game, listDisplayName: '游戏场次记录列表'}, // this is for model namespace and
    }))(GameSessionRecordCreateForm)
  }
  
  getGameSessionRecordUpdateForm = () => {
  	const {GameSessionRecordUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._game.selectedRows,
      currentUpdateIndex: state._game.currentUpdateIndex,
      owner: { type: '_game', id: state._game.id, listName: 'gameSessionRecordList', ref:state._game, listDisplayName: '游戏场次记录列表' }, // this is for model namespace and
    }))(GameSessionRecordUpdateForm)
  }

  getGamePlayerRecordSearch = () => {
    const {GamePlayerRecordSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._game.gamePlayerRecordList,
      count: state._game.gamePlayerRecordCount,
      currentPage: state._game.gamePlayerRecordCurrentPageNumber,
      searchFormParameters: state._game.gamePlayerRecordSearchFormParameters,
      loading: state._game.loading,
      partialList: state._game.partialList,
      owner: { type: '_game', id: state._game.id, referenceName: 'game', listName: 'gamePlayerRecordList', ref:state._game, listDisplayName: '游戏玩家记录列表' }, // this is for model namespace and
    }))(GamePlayerRecordSearch)
  }
  getGamePlayerRecordCreateForm = () => {
   	const {GamePlayerRecordCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._game.gamePlayerRecordList,
      count: state._game.gamePlayerRecordCount,
      currentPage: state._game.gamePlayerRecordCurrentPageNumber,
      searchFormParameters: state._game.gamePlayerRecordSearchFormParameters,
      loading: state._game.loading,
      owner: { type: '_game', id: state._game.id, referenceName: 'game', listName: 'gamePlayerRecordList', ref:state._game, listDisplayName: '游戏玩家记录列表'}, // this is for model namespace and
    }))(GamePlayerRecordCreateForm)
  }
  
  getGamePlayerRecordUpdateForm = () => {
  	const {GamePlayerRecordUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._game.selectedRows,
      currentUpdateIndex: state._game.currentUpdateIndex,
      owner: { type: '_game', id: state._game.id, listName: 'gamePlayerRecordList', ref:state._game, listDisplayName: '游戏玩家记录列表' }, // this is for model namespace and
    }))(GamePlayerRecordUpdateForm)
  }

  getRearrangeSessionTicketRecordAsSourceGameSearch = () => {
    const {RearrangeSessionTicketRecordSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._game.rearrangeSessionTicketRecordListAsSourceGame,
      count: state._game.rearrangeSessionTicketRecordAsSourceGameCount,
      currentPage: state._game.rearrangeSessionTicketRecordAsSourceGameCurrentPageNumber,
      searchFormParameters: state._game.rearrangeSessionTicketRecordAsSourceGameSearchFormParameters,
      loading: state._game.loading,
      partialList: state._game.partialList,
      owner: { type: '_game', id: state._game.id, referenceName: 'sourceGame', listName: 'rearrangeSessionTicketRecordListAsSourceGame', ref:state._game, listDisplayName: '换场记录列表' }, // this is for model namespace and
    }))(RearrangeSessionTicketRecordSearch)
  }
  getRearrangeSessionTicketRecordAsSourceGameCreateForm = () => {
   	const {RearrangeSessionTicketRecordCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._game.rearrangeSessionTicketRecordListAsSourceGame,
      count: state._game.rearrangeSessionTicketRecordAsSourceGameCount,
      currentPage: state._game.rearrangeSessionTicketRecordAsSourceGameCurrentPageNumber,
      searchFormParameters: state._game.rearrangeSessionTicketRecordAsSourceGameSearchFormParameters,
      loading: state._game.loading,
      owner: { type: '_game', id: state._game.id, referenceName: 'sourceGame', listName: 'rearrangeSessionTicketRecordListAsSourceGame', ref:state._game, listDisplayName: '换场记录列表'}, // this is for model namespace and
    }))(RearrangeSessionTicketRecordCreateForm)
  }
  
  getRearrangeSessionTicketRecordAsSourceGameUpdateForm = () => {
  	const {RearrangeSessionTicketRecordUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._game.selectedRows,
      currentUpdateIndex: state._game.currentUpdateIndex,
      owner: { type: '_game', id: state._game.id, listName: 'rearrangeSessionTicketRecordListAsSourceGame', ref:state._game, listDisplayName: '换场记录列表' }, // this is for model namespace and
    }))(RearrangeSessionTicketRecordUpdateForm)
  }

  getRearrangeSessionTicketRecordAsTargetGameSearch = () => {
    const {RearrangeSessionTicketRecordSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._game.rearrangeSessionTicketRecordListAsTargetGame,
      count: state._game.rearrangeSessionTicketRecordAsTargetGameCount,
      currentPage: state._game.rearrangeSessionTicketRecordAsTargetGameCurrentPageNumber,
      searchFormParameters: state._game.rearrangeSessionTicketRecordAsTargetGameSearchFormParameters,
      loading: state._game.loading,
      partialList: state._game.partialList,
      owner: { type: '_game', id: state._game.id, referenceName: 'targetGame', listName: 'rearrangeSessionTicketRecordListAsTargetGame', ref:state._game, listDisplayName: '换场记录列表' }, // this is for model namespace and
    }))(RearrangeSessionTicketRecordSearch)
  }
  getRearrangeSessionTicketRecordAsTargetGameCreateForm = () => {
   	const {RearrangeSessionTicketRecordCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._game.rearrangeSessionTicketRecordListAsTargetGame,
      count: state._game.rearrangeSessionTicketRecordAsTargetGameCount,
      currentPage: state._game.rearrangeSessionTicketRecordAsTargetGameCurrentPageNumber,
      searchFormParameters: state._game.rearrangeSessionTicketRecordAsTargetGameSearchFormParameters,
      loading: state._game.loading,
      owner: { type: '_game', id: state._game.id, referenceName: 'targetGame', listName: 'rearrangeSessionTicketRecordListAsTargetGame', ref:state._game, listDisplayName: '换场记录列表'}, // this is for model namespace and
    }))(RearrangeSessionTicketRecordCreateForm)
  }
  
  getRearrangeSessionTicketRecordAsTargetGameUpdateForm = () => {
  	const {RearrangeSessionTicketRecordUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._game.selectedRows,
      currentUpdateIndex: state._game.currentUpdateIndex,
      owner: { type: '_game', id: state._game.id, listName: 'rearrangeSessionTicketRecordListAsTargetGame', ref:state._game, listDisplayName: '换场记录列表' }, // this is for model namespace and
    }))(RearrangeSessionTicketRecordUpdateForm)
  }

  getGameTicketSearch = () => {
    const {GameTicketSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._game.gameTicketList,
      count: state._game.gameTicketCount,
      currentPage: state._game.gameTicketCurrentPageNumber,
      searchFormParameters: state._game.gameTicketSearchFormParameters,
      loading: state._game.loading,
      partialList: state._game.partialList,
      owner: { type: '_game', id: state._game.id, referenceName: 'game', listName: 'gameTicketList', ref:state._game, listDisplayName: '游戏门票列表' }, // this is for model namespace and
    }))(GameTicketSearch)
  }
  getGameTicketCreateForm = () => {
   	const {GameTicketCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._game.gameTicketList,
      count: state._game.gameTicketCount,
      currentPage: state._game.gameTicketCurrentPageNumber,
      searchFormParameters: state._game.gameTicketSearchFormParameters,
      loading: state._game.loading,
      owner: { type: '_game', id: state._game.id, referenceName: 'game', listName: 'gameTicketList', ref:state._game, listDisplayName: '游戏门票列表'}, // this is for model namespace and
    }))(GameTicketCreateForm)
  }
  
  getGameTicketUpdateForm = () => {
  	const {GameTicketUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._game.selectedRows,
      currentUpdateIndex: state._game.currentUpdateIndex,
      owner: { type: '_game', id: state._game.id, listName: 'gameTicketList', ref:state._game, listDisplayName: '游戏门票列表' }, // this is for model namespace and
    }))(GameTicketUpdateForm)
  }

  getOnlineOrderSearch = () => {
    const {OnlineOrderSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._game.onlineOrderList,
      count: state._game.onlineOrderCount,
      currentPage: state._game.onlineOrderCurrentPageNumber,
      searchFormParameters: state._game.onlineOrderSearchFormParameters,
      loading: state._game.loading,
      partialList: state._game.partialList,
      owner: { type: '_game', id: state._game.id, referenceName: 'game', listName: 'onlineOrderList', ref:state._game, listDisplayName: '线上订单号列表' }, // this is for model namespace and
    }))(OnlineOrderSearch)
  }
  getOnlineOrderCreateForm = () => {
   	const {OnlineOrderCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._game.onlineOrderList,
      count: state._game.onlineOrderCount,
      currentPage: state._game.onlineOrderCurrentPageNumber,
      searchFormParameters: state._game.onlineOrderSearchFormParameters,
      loading: state._game.loading,
      owner: { type: '_game', id: state._game.id, referenceName: 'game', listName: 'onlineOrderList', ref:state._game, listDisplayName: '线上订单号列表'}, // this is for model namespace and
    }))(OnlineOrderCreateForm)
  }
  
  getOnlineOrderUpdateForm = () => {
  	const {OnlineOrderUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._game.selectedRows,
      currentUpdateIndex: state._game.currentUpdateIndex,
      owner: { type: '_game', id: state._game.id, listName: 'onlineOrderList', ref:state._game, listDisplayName: '线上订单号列表' }, // this is for model namespace and
    }))(OnlineOrderUpdateForm)
  }

  getTicketPrintingHistorySearch = () => {
    const {TicketPrintingHistorySearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._game.ticketPrintingHistoryList,
      count: state._game.ticketPrintingHistoryCount,
      currentPage: state._game.ticketPrintingHistoryCurrentPageNumber,
      searchFormParameters: state._game.ticketPrintingHistorySearchFormParameters,
      loading: state._game.loading,
      partialList: state._game.partialList,
      owner: { type: '_game', id: state._game.id, referenceName: 'game', listName: 'ticketPrintingHistoryList', ref:state._game, listDisplayName: '门票打印记录列表' }, // this is for model namespace and
    }))(TicketPrintingHistorySearch)
  }
  getTicketPrintingHistoryCreateForm = () => {
   	const {TicketPrintingHistoryCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._game.ticketPrintingHistoryList,
      count: state._game.ticketPrintingHistoryCount,
      currentPage: state._game.ticketPrintingHistoryCurrentPageNumber,
      searchFormParameters: state._game.ticketPrintingHistorySearchFormParameters,
      loading: state._game.loading,
      owner: { type: '_game', id: state._game.id, referenceName: 'game', listName: 'ticketPrintingHistoryList', ref:state._game, listDisplayName: '门票打印记录列表'}, // this is for model namespace and
    }))(TicketPrintingHistoryCreateForm)
  }
  
  getTicketPrintingHistoryUpdateForm = () => {
  	const {TicketPrintingHistoryUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._game.selectedRows,
      currentUpdateIndex: state._game.currentUpdateIndex,
      owner: { type: '_game', id: state._game.id, listName: 'ticketPrintingHistoryList', ref:state._game, listDisplayName: '门票打印记录列表' }, // this is for model namespace and
    }))(TicketPrintingHistoryUpdateForm)
  }

  getOfflineStoreOrderSearch = () => {
    const {OfflineStoreOrderSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._game.offlineStoreOrderList,
      count: state._game.offlineStoreOrderCount,
      currentPage: state._game.offlineStoreOrderCurrentPageNumber,
      searchFormParameters: state._game.offlineStoreOrderSearchFormParameters,
      loading: state._game.loading,
      partialList: state._game.partialList,
      owner: { type: '_game', id: state._game.id, referenceName: 'game', listName: 'offlineStoreOrderList', ref:state._game, listDisplayName: '线下门店订单列表' }, // this is for model namespace and
    }))(OfflineStoreOrderSearch)
  }
  getOfflineStoreOrderCreateForm = () => {
   	const {OfflineStoreOrderCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._game.offlineStoreOrderList,
      count: state._game.offlineStoreOrderCount,
      currentPage: state._game.offlineStoreOrderCurrentPageNumber,
      searchFormParameters: state._game.offlineStoreOrderSearchFormParameters,
      loading: state._game.loading,
      owner: { type: '_game', id: state._game.id, referenceName: 'game', listName: 'offlineStoreOrderList', ref:state._game, listDisplayName: '线下门店订单列表'}, // this is for model namespace and
    }))(OfflineStoreOrderCreateForm)
  }
  
  getOfflineStoreOrderUpdateForm = () => {
  	const {OfflineStoreOrderUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._game.selectedRows,
      currentUpdateIndex: state._game.currentUpdateIndex,
      owner: { type: '_game', id: state._game.id, listName: 'offlineStoreOrderList', ref:state._game, listDisplayName: '线下门店订单列表' }, // this is for model namespace and
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
     const {GameDashboard} = GlobalComponents
     //const {GameEditDetail} = GlobalComponents
     //const {GameViewDetail} = GlobalComponents
     
     
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
               <Link to={`/game/${this.props.game.id}/dashboard`}><Icon type="dashboard" /><span>仪表板</span></Link>
             </Menu.Item>


             {this.getNavMenuItems(this.props.game.id)}
             <Menu.Item key="homepage">
               <Link to={"/home"}><Icon type="home" /><span>回到主页</span></Link>
             </Menu.Item>
           </Menu>
         </Sider>
         <Layout>
           <Content style={{ margin: '24px 24px 0', height: '100%' }}>
             <Switch>
             
               <Route path="/game/:id/dashboard" component={GameDashboard} />
               
               

               <Route path="/game/:id/list/gameSessionList" component={this.getGameSessionSearch()} />
               <Route path="/game/:id/list/gameSessionCreateForm" component={this.getGameSessionCreateForm()} />
               <Route path="/game/:id/list/gameSessionUpdateForm" component={this.getGameSessionUpdateForm()} />

               <Route path="/game/:id/list/gameSessionRecordList" component={this.getGameSessionRecordSearch()} />
               <Route path="/game/:id/list/gameSessionRecordCreateForm" component={this.getGameSessionRecordCreateForm()} />
               <Route path="/game/:id/list/gameSessionRecordUpdateForm" component={this.getGameSessionRecordUpdateForm()} />

               <Route path="/game/:id/list/gamePlayerRecordList" component={this.getGamePlayerRecordSearch()} />
               <Route path="/game/:id/list/gamePlayerRecordCreateForm" component={this.getGamePlayerRecordCreateForm()} />
               <Route path="/game/:id/list/gamePlayerRecordUpdateForm" component={this.getGamePlayerRecordUpdateForm()} />

               <Route path="/game/:id/list/rearrangeSessionTicketRecordListAsSourceGame" component={this.getRearrangeSessionTicketRecordAsSourceGameSearch()} />
               <Route path="/game/:id/list/rearrangeSessionTicketRecordAsSourceGameCreateForm" component={this.getRearrangeSessionTicketRecordAsSourceGameCreateForm()} />
               <Route path="/game/:id/list/rearrangeSessionTicketRecordAsSourceGameUpdateForm" component={this.getRearrangeSessionTicketRecordAsSourceGameUpdateForm()} />

               <Route path="/game/:id/list/rearrangeSessionTicketRecordListAsTargetGame" component={this.getRearrangeSessionTicketRecordAsTargetGameSearch()} />
               <Route path="/game/:id/list/rearrangeSessionTicketRecordAsTargetGameCreateForm" component={this.getRearrangeSessionTicketRecordAsTargetGameCreateForm()} />
               <Route path="/game/:id/list/rearrangeSessionTicketRecordAsTargetGameUpdateForm" component={this.getRearrangeSessionTicketRecordAsTargetGameUpdateForm()} />

               <Route path="/game/:id/list/gameTicketList" component={this.getGameTicketSearch()} />
               <Route path="/game/:id/list/gameTicketCreateForm" component={this.getGameTicketCreateForm()} />
               <Route path="/game/:id/list/gameTicketUpdateForm" component={this.getGameTicketUpdateForm()} />

               <Route path="/game/:id/list/onlineOrderList" component={this.getOnlineOrderSearch()} />
               <Route path="/game/:id/list/onlineOrderCreateForm" component={this.getOnlineOrderCreateForm()} />
               <Route path="/game/:id/list/onlineOrderUpdateForm" component={this.getOnlineOrderUpdateForm()} />

               <Route path="/game/:id/list/ticketPrintingHistoryList" component={this.getTicketPrintingHistorySearch()} />
               <Route path="/game/:id/list/ticketPrintingHistoryCreateForm" component={this.getTicketPrintingHistoryCreateForm()} />
               <Route path="/game/:id/list/ticketPrintingHistoryUpdateForm" component={this.getTicketPrintingHistoryUpdateForm()} />

               <Route path="/game/:id/list/offlineStoreOrderList" component={this.getOfflineStoreOrderSearch()} />
               <Route path="/game/:id/list/offlineStoreOrderCreateForm" component={this.getOfflineStoreOrderCreateForm()} />
               <Route path="/game/:id/list/offlineStoreOrderUpdateForm" component={this.getOfflineStoreOrderUpdateForm()} />
              
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
  game: state._game,
  ...state,
}))(GameBizApp)



