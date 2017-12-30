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
import styles from './GroupPage.app.less'
import GroupPageDashboard from './GroupPage.dashboard'
import GroupPageEditDetail from './GroupPage.editdetail'


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

class GroupPageBizApp extends React.PureComponent {
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
      return ['/groupPage/']
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
          <span>群组页面</span>
        </span>}
      >

        <Menu.Item>
          <Link to={`/groupPage/${objectId}/list/groupFilterList`}>群组过滤器</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/groupPage/${objectId}/list/threadList`}>主贴</Link>
        </Menu.Item>
      </SubMenu>
    )
  }


  getGroupFilterSearch = () => {
    const {GroupFilterSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._groupPage.groupFilterList,
      count: state._groupPage.groupFilterCount,
      currentPage: state._groupPage.groupFilterCurrentPageNumber,
      searchFormParameters: state._groupPage.groupFilterSearchFormParameters,
      loading: state._groupPage.loading,
      owner: { type: '_groupPage', id: state._groupPage.id }, // this is for model namespace and
    }))(GroupFilterSearch)
  }
  getGroupFilterCreateForm = () => {
   	const {GroupFilterCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._groupPage.groupFilterList,
      count: state._groupPage.groupFilterCount,
      currentPage: state._groupPage.groupFilterCurrentPageNumber,
      searchFormParameters: state._groupPage.groupFilterSearchFormParameters,
      loading: state._groupPage.loading,
      owner: { type: '_groupPage', id: state._groupPage.id }, // this is for model namespace and
    }))(GroupFilterCreateForm)
  }
  
  getGroupFilterUpdateForm = () => {
  	const {GroupFilterUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._groupPage.selectedRows,
      currentUpdateIndex: state._groupPage.currentUpdateIndex,
      owner: { type: '_groupPage', id: state._groupPage.id }, // this is for model namespace and
    }))(GroupFilterUpdateForm)
  }

  getThreadSearch = () => {
    const {ThreadSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._groupPage.threadList,
      count: state._groupPage.threadCount,
      currentPage: state._groupPage.threadCurrentPageNumber,
      searchFormParameters: state._groupPage.threadSearchFormParameters,
      loading: state._groupPage.loading,
      owner: { type: '_groupPage', id: state._groupPage.id }, // this is for model namespace and
    }))(ThreadSearch)
  }
  getThreadCreateForm = () => {
   	const {ThreadCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._groupPage.threadList,
      count: state._groupPage.threadCount,
      currentPage: state._groupPage.threadCurrentPageNumber,
      searchFormParameters: state._groupPage.threadSearchFormParameters,
      loading: state._groupPage.loading,
      owner: { type: '_groupPage', id: state._groupPage.id }, // this is for model namespace and
    }))(ThreadCreateForm)
  }
  
  getThreadUpdateForm = () => {
  	const {ThreadUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._groupPage.selectedRows,
      currentUpdateIndex: state._groupPage.currentUpdateIndex,
      owner: { type: '_groupPage', id: state._groupPage.id }, // this is for model namespace and
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
           onCollapse={this.onCollapse}
           width={256}
           className={styles.sider}
         >
           <div className={styles.logo}>
             <img src="/scm.svg" alt="logo" onClick={this.toggle} />
             <Link to="/home"> <h1>群组页面</h1></Link>
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
               <Link to={`/groupPage/${this.props.groupPage.id}/dashboard`}><Icon type="dashboard" /><span>仪表板</span></Link>
             </Menu.Item>
             <Menu.Item >
               <Link to={`/groupPage/${this.props.groupPage.id}/editDetail`}><Icon type="edit" /><span>详情编辑</span></Link>
             </Menu.Item>

             {this.getNavMenuItems(this.props.groupPage.id)}
           </Menu>
         </Sider>
         <Layout>
           <Content style={{ margin: '24px 24px 0', height: '100%' }}>
             <Switch>
               <Route path="/groupPage/:id/dashboard" component={GroupPageDashboard} />
               <Route path="/groupPage/:id/editDetail" component={GroupPageEditDetail} />

               <Route path="/groupPage/:id/list/groupFilterList" component={this.getGroupFilterSearch()} />
               <Route path="/groupPage/:id/list/groupFilterCreateForm" component={this.getGroupFilterCreateForm()} />
               <Route path="/groupPage/:id/list/groupFilterUpdateForm" component={this.getGroupFilterUpdateForm()} />

               <Route path="/groupPage/:id/list/threadList" component={this.getThreadSearch()} />
               <Route path="/groupPage/:id/list/threadCreateForm" component={this.getThreadCreateForm()} />
               <Route path="/groupPage/:id/list/threadUpdateForm" component={this.getThreadUpdateForm()} />
              
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
  groupPage: state._groupPage,
  ...state,
}))(GroupPageBizApp)



