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
import styles from './ServiceFileMovementC2m.app.less'


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

class ServiceFileMovementC2mBizApp extends React.PureComponent {
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
      return ['/serviceFileMovementC2m/']
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
          <span>收件服务</span>
        </span>}
      >

        <Menu.Item>
          <Link to={`/serviceFileMovementC2m/${objectId}/list/serviceFileMovementC2mChecklistResultList`}>收件服务检查结果</Link>
        </Menu.Item>
      </SubMenu>
    )
  }


  getServiceFileMovementC2mChecklistResultSearch = () => {
    const {ServiceFileMovementC2mChecklistResultSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._serviceFileMovementC2m.serviceFileMovementC2mChecklistResultList,
      count: state._serviceFileMovementC2m.serviceFileMovementC2mChecklistResultCount,
      currentPage: state._serviceFileMovementC2m.serviceFileMovementC2mChecklistResultCurrentPageNumber,
      searchFormParameters: state._serviceFileMovementC2m.serviceFileMovementC2mChecklistResultSearchFormParameters,
      loading: state._serviceFileMovementC2m.loading,
      owner: { type: '_serviceFileMovementC2m', id: state._serviceFileMovementC2m.id, listName: 'serviceFileMovementC2mChecklistResultList' }, // this is for model namespace and
    }))(ServiceFileMovementC2mChecklistResultSearch)
  }
  getServiceFileMovementC2mChecklistResultCreateForm = () => {
   	const {ServiceFileMovementC2mChecklistResultCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._serviceFileMovementC2m.serviceFileMovementC2mChecklistResultList,
      count: state._serviceFileMovementC2m.serviceFileMovementC2mChecklistResultCount,
      currentPage: state._serviceFileMovementC2m.serviceFileMovementC2mChecklistResultCurrentPageNumber,
      searchFormParameters: state._serviceFileMovementC2m.serviceFileMovementC2mChecklistResultSearchFormParameters,
      loading: state._serviceFileMovementC2m.loading,
      owner: { type: '_serviceFileMovementC2m', id: state._serviceFileMovementC2m.id, listName: 'serviceFileMovementC2mChecklistResultList'}, // this is for model namespace and
    }))(ServiceFileMovementC2mChecklistResultCreateForm)
  }
  
  getServiceFileMovementC2mChecklistResultUpdateForm = () => {
  	const {ServiceFileMovementC2mChecklistResultUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._serviceFileMovementC2m.selectedRows,
      currentUpdateIndex: state._serviceFileMovementC2m.currentUpdateIndex,
      owner: { type: '_serviceFileMovementC2m', id: state._serviceFileMovementC2m.id, listName: 'serviceFileMovementC2mChecklistResultList' }, // this is for model namespace and
    }))(ServiceFileMovementC2mChecklistResultUpdateForm)
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
    
     const {ServiceFileMovementC2mDashboard} = GlobalComponents
     const {ServiceFileMovementC2mEditDetail} = GlobalComponents
     const {ServiceFileMovementC2mViewDetail} = GlobalComponents
     
     
     
     
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
             <img src="./scm.svg" alt="logo" onClick={this.toggle} />
             <Link to="/home"> <h1>收件服务</h1></Link>
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
               <Link to={`/serviceFileMovementC2m/${this.props.serviceFileMovementC2m.id}/dashboard`}><Icon type="dashboard" /><span>仪表板</span></Link>
             </Menu.Item>
             <Menu.Item >
               <Link to={`/serviceFileMovementC2m/${this.props.serviceFileMovementC2m.id}/editDetail`}><Icon type="edit" /><span>详情编辑</span></Link>
             </Menu.Item>
             <Menu.Item >
               <Link to={`/serviceFileMovementC2m/${this.props.serviceFileMovementC2m.id}/viewDetail`}><Icon type="eye-o" /><span>详情查看</span></Link>
             </Menu.Item>
             

             {this.getNavMenuItems(this.props.serviceFileMovementC2m.id)}
             <Menu.Item >
               <Link to={"/home"}><Icon type="home" /><span>回到主页</span></Link>
             </Menu.Item>
           </Menu>
         </Sider>
         <Layout>
           <Content style={{ margin: '24px 24px 0', height: '100%' }}>
             <Switch>
               <Route path="/serviceFileMovementC2m/:id/dashboard" component={ServiceFileMovementC2mDashboard} />
               <Route path="/serviceFileMovementC2m/:id/editDetail" component={ServiceFileMovementC2mEditDetail} />
               <Route path="/serviceFileMovementC2m/:id/viewDetail" component={ServiceFileMovementC2mViewDetail} />
               

               <Route path="/serviceFileMovementC2m/:id/list/serviceFileMovementC2mChecklistResultList" component={this.getServiceFileMovementC2mChecklistResultSearch()} />
               <Route path="/serviceFileMovementC2m/:id/list/serviceFileMovementC2mChecklistResultCreateForm" component={this.getServiceFileMovementC2mChecklistResultCreateForm()} />
               <Route path="/serviceFileMovementC2m/:id/list/serviceFileMovementC2mChecklistResultUpdateForm" component={this.getServiceFileMovementC2mChecklistResultUpdateForm()} />
              
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
  serviceFileMovementC2m: state._serviceFileMovementC2m,
  ...state,
}))(ServiceFileMovementC2mBizApp)


