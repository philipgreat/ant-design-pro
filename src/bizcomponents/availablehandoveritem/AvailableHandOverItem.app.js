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
import styles from './AvailableHandOverItem.app.less'
import AvailableHandOverItemDashboard from './AvailableHandOverItem.dashboard'
import AvailableHandOverItemEditDetail from './AvailableHandOverItem.editdetail'
import AvailableHandOverItemViewDetail from './AvailableHandOverItem.viewdetail'


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

class AvailableHandOverItemBizApp extends React.PureComponent {
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
      return ['/availableHandOverItem/']
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
          <span>交接检查清单</span>
        </span>}
      >

        <Menu.Item>
          <Link to={`/availableHandOverItem/${objectId}/list/handOverChecklistItemList`}>移交清单项目</Link>
        </Menu.Item>
      </SubMenu>
    )
  }


  getHandOverChecklistItemSearch = () => {
    const {HandOverChecklistItemSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._availableHandOverItem.handOverChecklistItemList,
      count: state._availableHandOverItem.handOverChecklistItemCount,
      currentPage: state._availableHandOverItem.handOverChecklistItemCurrentPageNumber,
      searchFormParameters: state._availableHandOverItem.handOverChecklistItemSearchFormParameters,
      loading: state._availableHandOverItem.loading,
      owner: { type: '_availableHandOverItem', id: state._availableHandOverItem.id, listName: 'handOverChecklistItemList' }, // this is for model namespace and
    }))(HandOverChecklistItemSearch)
  }
  getHandOverChecklistItemCreateForm = () => {
   	const {HandOverChecklistItemCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._availableHandOverItem.handOverChecklistItemList,
      count: state._availableHandOverItem.handOverChecklistItemCount,
      currentPage: state._availableHandOverItem.handOverChecklistItemCurrentPageNumber,
      searchFormParameters: state._availableHandOverItem.handOverChecklistItemSearchFormParameters,
      loading: state._availableHandOverItem.loading,
      owner: { type: '_availableHandOverItem', id: state._availableHandOverItem.id, listName: 'handOverChecklistItemList'}, // this is for model namespace and
    }))(HandOverChecklistItemCreateForm)
  }
  
  getHandOverChecklistItemUpdateForm = () => {
  	const {HandOverChecklistItemUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._availableHandOverItem.selectedRows,
      currentUpdateIndex: state._availableHandOverItem.currentUpdateIndex,
      owner: { type: '_availableHandOverItem', id: state._availableHandOverItem.id, listName: 'handOverChecklistItemList' }, // this is for model namespace and
    }))(HandOverChecklistItemUpdateForm)
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
             <Link to="/home"> <h1>交接检查清单</h1></Link>
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
               <Link to={`/availableHandOverItem/${this.props.availableHandOverItem.id}/dashboard`}><Icon type="dashboard" /><span>仪表板</span></Link>
             </Menu.Item>
             <Menu.Item >
               <Link to={`/availableHandOverItem/${this.props.availableHandOverItem.id}/editDetail`}><Icon type="edit" /><span>详情编辑</span></Link>
             </Menu.Item>
             <Menu.Item >
               <Link to={`/availableHandOverItem/${this.props.availableHandOverItem.id}/viewDetail`}><Icon type="eye-o" /><span>详情查看</span></Link>
             </Menu.Item>
             

             {this.getNavMenuItems(this.props.availableHandOverItem.id)}
             <Menu.Item >
               <Link to={"/home"}><Icon type="home" /><span>回到主页</span></Link>
             </Menu.Item>
           </Menu>
         </Sider>
         <Layout>
           <Content style={{ margin: '24px 24px 0', height: '100%' }}>
             <Switch>
               <Route path="/availableHandOverItem/:id/dashboard" component={AvailableHandOverItemDashboard} />
               <Route path="/availableHandOverItem/:id/editDetail" component={AvailableHandOverItemEditDetail} />
               <Route path="/availableHandOverItem/:id/viewDetail" component={AvailableHandOverItemViewDetail} />
               

               <Route path="/availableHandOverItem/:id/list/handOverChecklistItemList" component={this.getHandOverChecklistItemSearch()} />
               <Route path="/availableHandOverItem/:id/list/handOverChecklistItemCreateForm" component={this.getHandOverChecklistItemCreateForm()} />
               <Route path="/availableHandOverItem/:id/list/handOverChecklistItemUpdateForm" component={this.getHandOverChecklistItemUpdateForm()} />
              
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
  availableHandOverItem: state._availableHandOverItem,
  ...state,
}))(AvailableHandOverItemBizApp)



