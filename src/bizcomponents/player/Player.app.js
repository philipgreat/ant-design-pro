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
import styles from './Player.app.less'
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


  
const menuData = {menuName:"玩家", menuFor: "player",
  		subItems: [
  {name: 'gamePlayerRecordList', displayName:'游戏玩家记录'},
  {name: 'gameTokenList', displayName:'游戏Token'},
  		
  		
  		],
};

class PlayerBizApp extends React.PureComponent {
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
      return ['/player/']
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
  



  getGamePlayerRecordSearch = () => {
    const {GamePlayerRecordSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._player.gamePlayerRecordList,
      count: state._player.gamePlayerRecordCount,
      currentPage: state._player.gamePlayerRecordCurrentPageNumber,
      searchFormParameters: state._player.gamePlayerRecordSearchFormParameters,
      loading: state._player.loading,
      partialList: state._player.partialList,
      owner: { type: '_player', id: state._player.id, referenceName: 'player', listName: 'gamePlayerRecordList', ref:state._player, listDisplayName: '游戏玩家记录列表' }, // this is for model namespace and
    }))(GamePlayerRecordSearch)
  }
  getGamePlayerRecordCreateForm = () => {
   	const {GamePlayerRecordCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._player.gamePlayerRecordList,
      count: state._player.gamePlayerRecordCount,
      currentPage: state._player.gamePlayerRecordCurrentPageNumber,
      searchFormParameters: state._player.gamePlayerRecordSearchFormParameters,
      loading: state._player.loading,
      owner: { type: '_player', id: state._player.id, referenceName: 'player', listName: 'gamePlayerRecordList', ref:state._player, listDisplayName: '游戏玩家记录列表'}, // this is for model namespace and
    }))(GamePlayerRecordCreateForm)
  }
  
  getGamePlayerRecordUpdateForm = () => {
  	const {GamePlayerRecordUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._player.selectedRows,
      currentUpdateIndex: state._player.currentUpdateIndex,
      owner: { type: '_player', id: state._player.id, listName: 'gamePlayerRecordList', ref:state._player, listDisplayName: '游戏玩家记录列表' }, // this is for model namespace and
    }))(GamePlayerRecordUpdateForm)
  }

  getGameTokenSearch = () => {
    const {GameTokenSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._player.gameTokenList,
      count: state._player.gameTokenCount,
      currentPage: state._player.gameTokenCurrentPageNumber,
      searchFormParameters: state._player.gameTokenSearchFormParameters,
      loading: state._player.loading,
      partialList: state._player.partialList,
      owner: { type: '_player', id: state._player.id, referenceName: 'player', listName: 'gameTokenList', ref:state._player, listDisplayName: '游戏Token列表' }, // this is for model namespace and
    }))(GameTokenSearch)
  }
  getGameTokenCreateForm = () => {
   	const {GameTokenCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._player.gameTokenList,
      count: state._player.gameTokenCount,
      currentPage: state._player.gameTokenCurrentPageNumber,
      searchFormParameters: state._player.gameTokenSearchFormParameters,
      loading: state._player.loading,
      owner: { type: '_player', id: state._player.id, referenceName: 'player', listName: 'gameTokenList', ref:state._player, listDisplayName: '游戏Token列表'}, // this is for model namespace and
    }))(GameTokenCreateForm)
  }
  
  getGameTokenUpdateForm = () => {
  	const {GameTokenUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._player.selectedRows,
      currentUpdateIndex: state._player.currentUpdateIndex,
      owner: { type: '_player', id: state._player.id, listName: 'gameTokenList', ref:state._player, listDisplayName: '游戏Token列表' }, // this is for model namespace and
    }))(GameTokenUpdateForm)
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
     const {PlayerDashboard} = GlobalComponents
     //const {PlayerEditDetail} = GlobalComponents
     //const {PlayerViewDetail} = GlobalComponents
     
     
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
               <Link to={`/player/${this.props.player.id}/dashboard`}><Icon type="dashboard" /><span>仪表板</span></Link>
             </Menu.Item>


             {this.getNavMenuItems(this.props.player.id)}
             <Menu.Item key="homepage">
               <Link to={"/home"}><Icon type="home" /><span>回到主页</span></Link>
             </Menu.Item>
           </Menu>
         </Sider>
         <Layout>
           <Content style={{ margin: '24px 24px 0', height: '100%' }}>
             <Switch>
             
               <Route path="/player/:id/dashboard" component={PlayerDashboard} />
               
               

               <Route path="/player/:id/list/gamePlayerRecordList" component={this.getGamePlayerRecordSearch()} />
               <Route path="/player/:id/list/gamePlayerRecordCreateForm" component={this.getGamePlayerRecordCreateForm()} />
               <Route path="/player/:id/list/gamePlayerRecordUpdateForm" component={this.getGamePlayerRecordUpdateForm()} />

               <Route path="/player/:id/list/gameTokenList" component={this.getGameTokenSearch()} />
               <Route path="/player/:id/list/gameTokenCreateForm" component={this.getGameTokenCreateForm()} />
               <Route path="/player/:id/list/gameTokenUpdateForm" component={this.getGameTokenUpdateForm()} />
              
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
  player: state._player,
  ...state,
}))(PlayerBizApp)



