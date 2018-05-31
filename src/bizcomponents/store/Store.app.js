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
import styles from './Store.app.less'
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


  
const menuData = {menuName:"门店", menuFor: "store",
  		subItems: [
  {name: 'gameCategoryList', displayName:'游戏类别'},
  {name: 'gameList', displayName:'游戏'},
  {name: 'gameSessionRecordList', displayName:'游戏场次记录'},
  {name: 'rearrangeSessionTicketRecordListAsSourceStore', displayName:'换场记录'},
  {name: 'rearrangeSessionTicketRecordListAsTargetStore', displayName:'换场记录'},
  {name: 'onlineOrderList', displayName:'线上订单号'},
  {name: 'onlineOrderRedeemHistoryList', displayName:'线上订单兑换记录'},
  {name: 'ticketPrintingList', displayName:'门票打印记录'},
  {name: 'ticketPrintingHistoryList', displayName:'门票打印记录'},
  {name: 'offlineStoreOrderList', displayName:'线下门店订单'},
  {name: 'employeeList', displayName:'员工'},
  {name: 'adList', displayName:'广告'},
  {name: 'bannerList', displayName:'横幅'},
  {name: 'newsList', displayName:'新闻'},
  {name: 'campaignList', displayName:'运动'},
  		
  		
  		],
};

class StoreBizApp extends React.PureComponent {
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
      return ['/store/']
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
  



  getGameCategorySearch = () => {
    const {GameCategorySearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._store.gameCategoryList,
      count: state._store.gameCategoryCount,
      currentPage: state._store.gameCategoryCurrentPageNumber,
      searchFormParameters: state._store.gameCategorySearchFormParameters,
      loading: state._store.loading,
      partialList: state._store.partialList,
      owner: { type: '_store', id: state._store.id, referenceName: 'store', listName: 'gameCategoryList', ref:state._store, listDisplayName: '游戏类别列表' }, // this is for model namespace and
    }))(GameCategorySearch)
  }
  getGameCategoryCreateForm = () => {
   	const {GameCategoryCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._store.gameCategoryList,
      count: state._store.gameCategoryCount,
      currentPage: state._store.gameCategoryCurrentPageNumber,
      searchFormParameters: state._store.gameCategorySearchFormParameters,
      loading: state._store.loading,
      owner: { type: '_store', id: state._store.id, referenceName: 'store', listName: 'gameCategoryList', ref:state._store, listDisplayName: '游戏类别列表'}, // this is for model namespace and
    }))(GameCategoryCreateForm)
  }
  
  getGameCategoryUpdateForm = () => {
  	const {GameCategoryUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._store.selectedRows,
      currentUpdateIndex: state._store.currentUpdateIndex,
      owner: { type: '_store', id: state._store.id, listName: 'gameCategoryList', ref:state._store, listDisplayName: '游戏类别列表' }, // this is for model namespace and
    }))(GameCategoryUpdateForm)
  }

  getGameSearch = () => {
    const {GameSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._store.gameList,
      count: state._store.gameCount,
      currentPage: state._store.gameCurrentPageNumber,
      searchFormParameters: state._store.gameSearchFormParameters,
      loading: state._store.loading,
      partialList: state._store.partialList,
      owner: { type: '_store', id: state._store.id, referenceName: 'store', listName: 'gameList', ref:state._store, listDisplayName: '游戏列表' }, // this is for model namespace and
    }))(GameSearch)
  }
  getGameCreateForm = () => {
   	const {GameCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._store.gameList,
      count: state._store.gameCount,
      currentPage: state._store.gameCurrentPageNumber,
      searchFormParameters: state._store.gameSearchFormParameters,
      loading: state._store.loading,
      owner: { type: '_store', id: state._store.id, referenceName: 'store', listName: 'gameList', ref:state._store, listDisplayName: '游戏列表'}, // this is for model namespace and
    }))(GameCreateForm)
  }
  
  getGameUpdateForm = () => {
  	const {GameUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._store.selectedRows,
      currentUpdateIndex: state._store.currentUpdateIndex,
      owner: { type: '_store', id: state._store.id, listName: 'gameList', ref:state._store, listDisplayName: '游戏列表' }, // this is for model namespace and
    }))(GameUpdateForm)
  }

  getGameSessionRecordSearch = () => {
    const {GameSessionRecordSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._store.gameSessionRecordList,
      count: state._store.gameSessionRecordCount,
      currentPage: state._store.gameSessionRecordCurrentPageNumber,
      searchFormParameters: state._store.gameSessionRecordSearchFormParameters,
      loading: state._store.loading,
      partialList: state._store.partialList,
      owner: { type: '_store', id: state._store.id, referenceName: 'store', listName: 'gameSessionRecordList', ref:state._store, listDisplayName: '游戏场次记录列表' }, // this is for model namespace and
    }))(GameSessionRecordSearch)
  }
  getGameSessionRecordCreateForm = () => {
   	const {GameSessionRecordCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._store.gameSessionRecordList,
      count: state._store.gameSessionRecordCount,
      currentPage: state._store.gameSessionRecordCurrentPageNumber,
      searchFormParameters: state._store.gameSessionRecordSearchFormParameters,
      loading: state._store.loading,
      owner: { type: '_store', id: state._store.id, referenceName: 'store', listName: 'gameSessionRecordList', ref:state._store, listDisplayName: '游戏场次记录列表'}, // this is for model namespace and
    }))(GameSessionRecordCreateForm)
  }
  
  getGameSessionRecordUpdateForm = () => {
  	const {GameSessionRecordUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._store.selectedRows,
      currentUpdateIndex: state._store.currentUpdateIndex,
      owner: { type: '_store', id: state._store.id, listName: 'gameSessionRecordList', ref:state._store, listDisplayName: '游戏场次记录列表' }, // this is for model namespace and
    }))(GameSessionRecordUpdateForm)
  }

  getRearrangeSessionTicketRecordAsSourceStoreSearch = () => {
    const {RearrangeSessionTicketRecordSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._store.rearrangeSessionTicketRecordListAsSourceStore,
      count: state._store.rearrangeSessionTicketRecordAsSourceStoreCount,
      currentPage: state._store.rearrangeSessionTicketRecordAsSourceStoreCurrentPageNumber,
      searchFormParameters: state._store.rearrangeSessionTicketRecordAsSourceStoreSearchFormParameters,
      loading: state._store.loading,
      partialList: state._store.partialList,
      owner: { type: '_store', id: state._store.id, referenceName: 'sourceStore', listName: 'rearrangeSessionTicketRecordListAsSourceStore', ref:state._store, listDisplayName: '换场记录列表' }, // this is for model namespace and
    }))(RearrangeSessionTicketRecordSearch)
  }
  getRearrangeSessionTicketRecordAsSourceStoreCreateForm = () => {
   	const {RearrangeSessionTicketRecordCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._store.rearrangeSessionTicketRecordListAsSourceStore,
      count: state._store.rearrangeSessionTicketRecordAsSourceStoreCount,
      currentPage: state._store.rearrangeSessionTicketRecordAsSourceStoreCurrentPageNumber,
      searchFormParameters: state._store.rearrangeSessionTicketRecordAsSourceStoreSearchFormParameters,
      loading: state._store.loading,
      owner: { type: '_store', id: state._store.id, referenceName: 'sourceStore', listName: 'rearrangeSessionTicketRecordListAsSourceStore', ref:state._store, listDisplayName: '换场记录列表'}, // this is for model namespace and
    }))(RearrangeSessionTicketRecordCreateForm)
  }
  
  getRearrangeSessionTicketRecordAsSourceStoreUpdateForm = () => {
  	const {RearrangeSessionTicketRecordUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._store.selectedRows,
      currentUpdateIndex: state._store.currentUpdateIndex,
      owner: { type: '_store', id: state._store.id, listName: 'rearrangeSessionTicketRecordListAsSourceStore', ref:state._store, listDisplayName: '换场记录列表' }, // this is for model namespace and
    }))(RearrangeSessionTicketRecordUpdateForm)
  }

  getRearrangeSessionTicketRecordAsTargetStoreSearch = () => {
    const {RearrangeSessionTicketRecordSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._store.rearrangeSessionTicketRecordListAsTargetStore,
      count: state._store.rearrangeSessionTicketRecordAsTargetStoreCount,
      currentPage: state._store.rearrangeSessionTicketRecordAsTargetStoreCurrentPageNumber,
      searchFormParameters: state._store.rearrangeSessionTicketRecordAsTargetStoreSearchFormParameters,
      loading: state._store.loading,
      partialList: state._store.partialList,
      owner: { type: '_store', id: state._store.id, referenceName: 'targetStore', listName: 'rearrangeSessionTicketRecordListAsTargetStore', ref:state._store, listDisplayName: '换场记录列表' }, // this is for model namespace and
    }))(RearrangeSessionTicketRecordSearch)
  }
  getRearrangeSessionTicketRecordAsTargetStoreCreateForm = () => {
   	const {RearrangeSessionTicketRecordCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._store.rearrangeSessionTicketRecordListAsTargetStore,
      count: state._store.rearrangeSessionTicketRecordAsTargetStoreCount,
      currentPage: state._store.rearrangeSessionTicketRecordAsTargetStoreCurrentPageNumber,
      searchFormParameters: state._store.rearrangeSessionTicketRecordAsTargetStoreSearchFormParameters,
      loading: state._store.loading,
      owner: { type: '_store', id: state._store.id, referenceName: 'targetStore', listName: 'rearrangeSessionTicketRecordListAsTargetStore', ref:state._store, listDisplayName: '换场记录列表'}, // this is for model namespace and
    }))(RearrangeSessionTicketRecordCreateForm)
  }
  
  getRearrangeSessionTicketRecordAsTargetStoreUpdateForm = () => {
  	const {RearrangeSessionTicketRecordUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._store.selectedRows,
      currentUpdateIndex: state._store.currentUpdateIndex,
      owner: { type: '_store', id: state._store.id, listName: 'rearrangeSessionTicketRecordListAsTargetStore', ref:state._store, listDisplayName: '换场记录列表' }, // this is for model namespace and
    }))(RearrangeSessionTicketRecordUpdateForm)
  }

  getOnlineOrderSearch = () => {
    const {OnlineOrderSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._store.onlineOrderList,
      count: state._store.onlineOrderCount,
      currentPage: state._store.onlineOrderCurrentPageNumber,
      searchFormParameters: state._store.onlineOrderSearchFormParameters,
      loading: state._store.loading,
      partialList: state._store.partialList,
      owner: { type: '_store', id: state._store.id, referenceName: 'store', listName: 'onlineOrderList', ref:state._store, listDisplayName: '线上订单号列表' }, // this is for model namespace and
    }))(OnlineOrderSearch)
  }
  getOnlineOrderCreateForm = () => {
   	const {OnlineOrderCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._store.onlineOrderList,
      count: state._store.onlineOrderCount,
      currentPage: state._store.onlineOrderCurrentPageNumber,
      searchFormParameters: state._store.onlineOrderSearchFormParameters,
      loading: state._store.loading,
      owner: { type: '_store', id: state._store.id, referenceName: 'store', listName: 'onlineOrderList', ref:state._store, listDisplayName: '线上订单号列表'}, // this is for model namespace and
    }))(OnlineOrderCreateForm)
  }
  
  getOnlineOrderUpdateForm = () => {
  	const {OnlineOrderUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._store.selectedRows,
      currentUpdateIndex: state._store.currentUpdateIndex,
      owner: { type: '_store', id: state._store.id, listName: 'onlineOrderList', ref:state._store, listDisplayName: '线上订单号列表' }, // this is for model namespace and
    }))(OnlineOrderUpdateForm)
  }

  getOnlineOrderRedeemHistorySearch = () => {
    const {OnlineOrderRedeemHistorySearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._store.onlineOrderRedeemHistoryList,
      count: state._store.onlineOrderRedeemHistoryCount,
      currentPage: state._store.onlineOrderRedeemHistoryCurrentPageNumber,
      searchFormParameters: state._store.onlineOrderRedeemHistorySearchFormParameters,
      loading: state._store.loading,
      partialList: state._store.partialList,
      owner: { type: '_store', id: state._store.id, referenceName: 'store', listName: 'onlineOrderRedeemHistoryList', ref:state._store, listDisplayName: '线上订单兑换记录列表' }, // this is for model namespace and
    }))(OnlineOrderRedeemHistorySearch)
  }
  getOnlineOrderRedeemHistoryCreateForm = () => {
   	const {OnlineOrderRedeemHistoryCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._store.onlineOrderRedeemHistoryList,
      count: state._store.onlineOrderRedeemHistoryCount,
      currentPage: state._store.onlineOrderRedeemHistoryCurrentPageNumber,
      searchFormParameters: state._store.onlineOrderRedeemHistorySearchFormParameters,
      loading: state._store.loading,
      owner: { type: '_store', id: state._store.id, referenceName: 'store', listName: 'onlineOrderRedeemHistoryList', ref:state._store, listDisplayName: '线上订单兑换记录列表'}, // this is for model namespace and
    }))(OnlineOrderRedeemHistoryCreateForm)
  }
  
  getOnlineOrderRedeemHistoryUpdateForm = () => {
  	const {OnlineOrderRedeemHistoryUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._store.selectedRows,
      currentUpdateIndex: state._store.currentUpdateIndex,
      owner: { type: '_store', id: state._store.id, listName: 'onlineOrderRedeemHistoryList', ref:state._store, listDisplayName: '线上订单兑换记录列表' }, // this is for model namespace and
    }))(OnlineOrderRedeemHistoryUpdateForm)
  }

  getTicketPrintingSearch = () => {
    const {TicketPrintingSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._store.ticketPrintingList,
      count: state._store.ticketPrintingCount,
      currentPage: state._store.ticketPrintingCurrentPageNumber,
      searchFormParameters: state._store.ticketPrintingSearchFormParameters,
      loading: state._store.loading,
      partialList: state._store.partialList,
      owner: { type: '_store', id: state._store.id, referenceName: 'store', listName: 'ticketPrintingList', ref:state._store, listDisplayName: '门票打印记录列表' }, // this is for model namespace and
    }))(TicketPrintingSearch)
  }
  getTicketPrintingCreateForm = () => {
   	const {TicketPrintingCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._store.ticketPrintingList,
      count: state._store.ticketPrintingCount,
      currentPage: state._store.ticketPrintingCurrentPageNumber,
      searchFormParameters: state._store.ticketPrintingSearchFormParameters,
      loading: state._store.loading,
      owner: { type: '_store', id: state._store.id, referenceName: 'store', listName: 'ticketPrintingList', ref:state._store, listDisplayName: '门票打印记录列表'}, // this is for model namespace and
    }))(TicketPrintingCreateForm)
  }
  
  getTicketPrintingUpdateForm = () => {
  	const {TicketPrintingUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._store.selectedRows,
      currentUpdateIndex: state._store.currentUpdateIndex,
      owner: { type: '_store', id: state._store.id, listName: 'ticketPrintingList', ref:state._store, listDisplayName: '门票打印记录列表' }, // this is for model namespace and
    }))(TicketPrintingUpdateForm)
  }

  getTicketPrintingHistorySearch = () => {
    const {TicketPrintingHistorySearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._store.ticketPrintingHistoryList,
      count: state._store.ticketPrintingHistoryCount,
      currentPage: state._store.ticketPrintingHistoryCurrentPageNumber,
      searchFormParameters: state._store.ticketPrintingHistorySearchFormParameters,
      loading: state._store.loading,
      partialList: state._store.partialList,
      owner: { type: '_store', id: state._store.id, referenceName: 'store', listName: 'ticketPrintingHistoryList', ref:state._store, listDisplayName: '门票打印记录列表' }, // this is for model namespace and
    }))(TicketPrintingHistorySearch)
  }
  getTicketPrintingHistoryCreateForm = () => {
   	const {TicketPrintingHistoryCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._store.ticketPrintingHistoryList,
      count: state._store.ticketPrintingHistoryCount,
      currentPage: state._store.ticketPrintingHistoryCurrentPageNumber,
      searchFormParameters: state._store.ticketPrintingHistorySearchFormParameters,
      loading: state._store.loading,
      owner: { type: '_store', id: state._store.id, referenceName: 'store', listName: 'ticketPrintingHistoryList', ref:state._store, listDisplayName: '门票打印记录列表'}, // this is for model namespace and
    }))(TicketPrintingHistoryCreateForm)
  }
  
  getTicketPrintingHistoryUpdateForm = () => {
  	const {TicketPrintingHistoryUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._store.selectedRows,
      currentUpdateIndex: state._store.currentUpdateIndex,
      owner: { type: '_store', id: state._store.id, listName: 'ticketPrintingHistoryList', ref:state._store, listDisplayName: '门票打印记录列表' }, // this is for model namespace and
    }))(TicketPrintingHistoryUpdateForm)
  }

  getOfflineStoreOrderSearch = () => {
    const {OfflineStoreOrderSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._store.offlineStoreOrderList,
      count: state._store.offlineStoreOrderCount,
      currentPage: state._store.offlineStoreOrderCurrentPageNumber,
      searchFormParameters: state._store.offlineStoreOrderSearchFormParameters,
      loading: state._store.loading,
      partialList: state._store.partialList,
      owner: { type: '_store', id: state._store.id, referenceName: 'store', listName: 'offlineStoreOrderList', ref:state._store, listDisplayName: '线下门店订单列表' }, // this is for model namespace and
    }))(OfflineStoreOrderSearch)
  }
  getOfflineStoreOrderCreateForm = () => {
   	const {OfflineStoreOrderCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._store.offlineStoreOrderList,
      count: state._store.offlineStoreOrderCount,
      currentPage: state._store.offlineStoreOrderCurrentPageNumber,
      searchFormParameters: state._store.offlineStoreOrderSearchFormParameters,
      loading: state._store.loading,
      owner: { type: '_store', id: state._store.id, referenceName: 'store', listName: 'offlineStoreOrderList', ref:state._store, listDisplayName: '线下门店订单列表'}, // this is for model namespace and
    }))(OfflineStoreOrderCreateForm)
  }
  
  getOfflineStoreOrderUpdateForm = () => {
  	const {OfflineStoreOrderUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._store.selectedRows,
      currentUpdateIndex: state._store.currentUpdateIndex,
      owner: { type: '_store', id: state._store.id, listName: 'offlineStoreOrderList', ref:state._store, listDisplayName: '线下门店订单列表' }, // this is for model namespace and
    }))(OfflineStoreOrderUpdateForm)
  }

  getEmployeeSearch = () => {
    const {EmployeeSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._store.employeeList,
      count: state._store.employeeCount,
      currentPage: state._store.employeeCurrentPageNumber,
      searchFormParameters: state._store.employeeSearchFormParameters,
      loading: state._store.loading,
      partialList: state._store.partialList,
      owner: { type: '_store', id: state._store.id, referenceName: 'store', listName: 'employeeList', ref:state._store, listDisplayName: '员工列表' }, // this is for model namespace and
    }))(EmployeeSearch)
  }
  getEmployeeCreateForm = () => {
   	const {EmployeeCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._store.employeeList,
      count: state._store.employeeCount,
      currentPage: state._store.employeeCurrentPageNumber,
      searchFormParameters: state._store.employeeSearchFormParameters,
      loading: state._store.loading,
      owner: { type: '_store', id: state._store.id, referenceName: 'store', listName: 'employeeList', ref:state._store, listDisplayName: '员工列表'}, // this is for model namespace and
    }))(EmployeeCreateForm)
  }
  
  getEmployeeUpdateForm = () => {
  	const {EmployeeUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._store.selectedRows,
      currentUpdateIndex: state._store.currentUpdateIndex,
      owner: { type: '_store', id: state._store.id, listName: 'employeeList', ref:state._store, listDisplayName: '员工列表' }, // this is for model namespace and
    }))(EmployeeUpdateForm)
  }

  getAdSearch = () => {
    const {AdSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._store.adList,
      count: state._store.adCount,
      currentPage: state._store.adCurrentPageNumber,
      searchFormParameters: state._store.adSearchFormParameters,
      loading: state._store.loading,
      partialList: state._store.partialList,
      owner: { type: '_store', id: state._store.id, referenceName: 'store', listName: 'adList', ref:state._store, listDisplayName: '广告列表' }, // this is for model namespace and
    }))(AdSearch)
  }
  getAdCreateForm = () => {
   	const {AdCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._store.adList,
      count: state._store.adCount,
      currentPage: state._store.adCurrentPageNumber,
      searchFormParameters: state._store.adSearchFormParameters,
      loading: state._store.loading,
      owner: { type: '_store', id: state._store.id, referenceName: 'store', listName: 'adList', ref:state._store, listDisplayName: '广告列表'}, // this is for model namespace and
    }))(AdCreateForm)
  }
  
  getAdUpdateForm = () => {
  	const {AdUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._store.selectedRows,
      currentUpdateIndex: state._store.currentUpdateIndex,
      owner: { type: '_store', id: state._store.id, listName: 'adList', ref:state._store, listDisplayName: '广告列表' }, // this is for model namespace and
    }))(AdUpdateForm)
  }

  getBannerSearch = () => {
    const {BannerSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._store.bannerList,
      count: state._store.bannerCount,
      currentPage: state._store.bannerCurrentPageNumber,
      searchFormParameters: state._store.bannerSearchFormParameters,
      loading: state._store.loading,
      partialList: state._store.partialList,
      owner: { type: '_store', id: state._store.id, referenceName: 'store', listName: 'bannerList', ref:state._store, listDisplayName: '横幅列表' }, // this is for model namespace and
    }))(BannerSearch)
  }
  getBannerCreateForm = () => {
   	const {BannerCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._store.bannerList,
      count: state._store.bannerCount,
      currentPage: state._store.bannerCurrentPageNumber,
      searchFormParameters: state._store.bannerSearchFormParameters,
      loading: state._store.loading,
      owner: { type: '_store', id: state._store.id, referenceName: 'store', listName: 'bannerList', ref:state._store, listDisplayName: '横幅列表'}, // this is for model namespace and
    }))(BannerCreateForm)
  }
  
  getBannerUpdateForm = () => {
  	const {BannerUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._store.selectedRows,
      currentUpdateIndex: state._store.currentUpdateIndex,
      owner: { type: '_store', id: state._store.id, listName: 'bannerList', ref:state._store, listDisplayName: '横幅列表' }, // this is for model namespace and
    }))(BannerUpdateForm)
  }

  getNewsSearch = () => {
    const {NewsSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._store.newsList,
      count: state._store.newsCount,
      currentPage: state._store.newsCurrentPageNumber,
      searchFormParameters: state._store.newsSearchFormParameters,
      loading: state._store.loading,
      partialList: state._store.partialList,
      owner: { type: '_store', id: state._store.id, referenceName: 'store', listName: 'newsList', ref:state._store, listDisplayName: '新闻列表' }, // this is for model namespace and
    }))(NewsSearch)
  }
  getNewsCreateForm = () => {
   	const {NewsCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._store.newsList,
      count: state._store.newsCount,
      currentPage: state._store.newsCurrentPageNumber,
      searchFormParameters: state._store.newsSearchFormParameters,
      loading: state._store.loading,
      owner: { type: '_store', id: state._store.id, referenceName: 'store', listName: 'newsList', ref:state._store, listDisplayName: '新闻列表'}, // this is for model namespace and
    }))(NewsCreateForm)
  }
  
  getNewsUpdateForm = () => {
  	const {NewsUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._store.selectedRows,
      currentUpdateIndex: state._store.currentUpdateIndex,
      owner: { type: '_store', id: state._store.id, listName: 'newsList', ref:state._store, listDisplayName: '新闻列表' }, // this is for model namespace and
    }))(NewsUpdateForm)
  }

  getCampaignSearch = () => {
    const {CampaignSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._store.campaignList,
      count: state._store.campaignCount,
      currentPage: state._store.campaignCurrentPageNumber,
      searchFormParameters: state._store.campaignSearchFormParameters,
      loading: state._store.loading,
      partialList: state._store.partialList,
      owner: { type: '_store', id: state._store.id, referenceName: 'store', listName: 'campaignList', ref:state._store, listDisplayName: '运动列表' }, // this is for model namespace and
    }))(CampaignSearch)
  }
  getCampaignCreateForm = () => {
   	const {CampaignCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._store.campaignList,
      count: state._store.campaignCount,
      currentPage: state._store.campaignCurrentPageNumber,
      searchFormParameters: state._store.campaignSearchFormParameters,
      loading: state._store.loading,
      owner: { type: '_store', id: state._store.id, referenceName: 'store', listName: 'campaignList', ref:state._store, listDisplayName: '运动列表'}, // this is for model namespace and
    }))(CampaignCreateForm)
  }
  
  getCampaignUpdateForm = () => {
  	const {CampaignUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._store.selectedRows,
      currentUpdateIndex: state._store.currentUpdateIndex,
      owner: { type: '_store', id: state._store.id, listName: 'campaignList', ref:state._store, listDisplayName: '运动列表' }, // this is for model namespace and
    }))(CampaignUpdateForm)
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
     const {StoreDashboard} = GlobalComponents
     //const {StoreEditDetail} = GlobalComponents
     //const {StoreViewDetail} = GlobalComponents
     
     
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
               <Link to={`/store/${this.props.store.id}/dashboard`}><Icon type="dashboard" /><span>仪表板</span></Link>
             </Menu.Item>


             {this.getNavMenuItems(this.props.store.id)}
             <Menu.Item key="homepage">
               <Link to={"/home"}><Icon type="home" /><span>回到主页</span></Link>
             </Menu.Item>
           </Menu>
         </Sider>
         <Layout>
           <Content style={{ margin: '24px 24px 0', height: '100%' }}>
             <Switch>
             
               <Route path="/store/:id/dashboard" component={StoreDashboard} />
               
               

               <Route path="/store/:id/list/gameCategoryList" component={this.getGameCategorySearch()} />
               <Route path="/store/:id/list/gameCategoryCreateForm" component={this.getGameCategoryCreateForm()} />
               <Route path="/store/:id/list/gameCategoryUpdateForm" component={this.getGameCategoryUpdateForm()} />

               <Route path="/store/:id/list/gameList" component={this.getGameSearch()} />
               <Route path="/store/:id/list/gameCreateForm" component={this.getGameCreateForm()} />
               <Route path="/store/:id/list/gameUpdateForm" component={this.getGameUpdateForm()} />

               <Route path="/store/:id/list/gameSessionRecordList" component={this.getGameSessionRecordSearch()} />
               <Route path="/store/:id/list/gameSessionRecordCreateForm" component={this.getGameSessionRecordCreateForm()} />
               <Route path="/store/:id/list/gameSessionRecordUpdateForm" component={this.getGameSessionRecordUpdateForm()} />

               <Route path="/store/:id/list/rearrangeSessionTicketRecordListAsSourceStore" component={this.getRearrangeSessionTicketRecordAsSourceStoreSearch()} />
               <Route path="/store/:id/list/rearrangeSessionTicketRecordAsSourceStoreCreateForm" component={this.getRearrangeSessionTicketRecordAsSourceStoreCreateForm()} />
               <Route path="/store/:id/list/rearrangeSessionTicketRecordAsSourceStoreUpdateForm" component={this.getRearrangeSessionTicketRecordAsSourceStoreUpdateForm()} />

               <Route path="/store/:id/list/rearrangeSessionTicketRecordListAsTargetStore" component={this.getRearrangeSessionTicketRecordAsTargetStoreSearch()} />
               <Route path="/store/:id/list/rearrangeSessionTicketRecordAsTargetStoreCreateForm" component={this.getRearrangeSessionTicketRecordAsTargetStoreCreateForm()} />
               <Route path="/store/:id/list/rearrangeSessionTicketRecordAsTargetStoreUpdateForm" component={this.getRearrangeSessionTicketRecordAsTargetStoreUpdateForm()} />

               <Route path="/store/:id/list/onlineOrderList" component={this.getOnlineOrderSearch()} />
               <Route path="/store/:id/list/onlineOrderCreateForm" component={this.getOnlineOrderCreateForm()} />
               <Route path="/store/:id/list/onlineOrderUpdateForm" component={this.getOnlineOrderUpdateForm()} />

               <Route path="/store/:id/list/onlineOrderRedeemHistoryList" component={this.getOnlineOrderRedeemHistorySearch()} />
               <Route path="/store/:id/list/onlineOrderRedeemHistoryCreateForm" component={this.getOnlineOrderRedeemHistoryCreateForm()} />
               <Route path="/store/:id/list/onlineOrderRedeemHistoryUpdateForm" component={this.getOnlineOrderRedeemHistoryUpdateForm()} />

               <Route path="/store/:id/list/ticketPrintingList" component={this.getTicketPrintingSearch()} />
               <Route path="/store/:id/list/ticketPrintingCreateForm" component={this.getTicketPrintingCreateForm()} />
               <Route path="/store/:id/list/ticketPrintingUpdateForm" component={this.getTicketPrintingUpdateForm()} />

               <Route path="/store/:id/list/ticketPrintingHistoryList" component={this.getTicketPrintingHistorySearch()} />
               <Route path="/store/:id/list/ticketPrintingHistoryCreateForm" component={this.getTicketPrintingHistoryCreateForm()} />
               <Route path="/store/:id/list/ticketPrintingHistoryUpdateForm" component={this.getTicketPrintingHistoryUpdateForm()} />

               <Route path="/store/:id/list/offlineStoreOrderList" component={this.getOfflineStoreOrderSearch()} />
               <Route path="/store/:id/list/offlineStoreOrderCreateForm" component={this.getOfflineStoreOrderCreateForm()} />
               <Route path="/store/:id/list/offlineStoreOrderUpdateForm" component={this.getOfflineStoreOrderUpdateForm()} />

               <Route path="/store/:id/list/employeeList" component={this.getEmployeeSearch()} />
               <Route path="/store/:id/list/employeeCreateForm" component={this.getEmployeeCreateForm()} />
               <Route path="/store/:id/list/employeeUpdateForm" component={this.getEmployeeUpdateForm()} />

               <Route path="/store/:id/list/adList" component={this.getAdSearch()} />
               <Route path="/store/:id/list/adCreateForm" component={this.getAdCreateForm()} />
               <Route path="/store/:id/list/adUpdateForm" component={this.getAdUpdateForm()} />

               <Route path="/store/:id/list/bannerList" component={this.getBannerSearch()} />
               <Route path="/store/:id/list/bannerCreateForm" component={this.getBannerCreateForm()} />
               <Route path="/store/:id/list/bannerUpdateForm" component={this.getBannerUpdateForm()} />

               <Route path="/store/:id/list/newsList" component={this.getNewsSearch()} />
               <Route path="/store/:id/list/newsCreateForm" component={this.getNewsCreateForm()} />
               <Route path="/store/:id/list/newsUpdateForm" component={this.getNewsUpdateForm()} />

               <Route path="/store/:id/list/campaignList" component={this.getCampaignSearch()} />
               <Route path="/store/:id/list/campaignCreateForm" component={this.getCampaignCreateForm()} />
               <Route path="/store/:id/list/campaignUpdateForm" component={this.getCampaignUpdateForm()} />
              
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
  store: state._store,
  ...state,
}))(StoreBizApp)



