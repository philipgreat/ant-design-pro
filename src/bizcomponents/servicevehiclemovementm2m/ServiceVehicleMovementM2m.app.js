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
import styles from './ServiceVehicleMovementM2m.app.less'


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

class ServiceVehicleMovementM2mBizApp extends React.PureComponent {
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
      return ['/serviceVehicleMovementM2m/']
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
          <span>移车服务</span>
        </span>}
      >

        <Menu.Item>
          <Link to={`/serviceVehicleMovementM2m/${objectId}/list/serviceVehicleMovementM2mChecklistResultList`}>移车服务检查结果</Link>
        </Menu.Item>
      </SubMenu>
    )
  }


  getServiceVehicleMovementM2mChecklistResultSearch = () => {
    const {ServiceVehicleMovementM2mChecklistResultSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._serviceVehicleMovementM2m.serviceVehicleMovementM2mChecklistResultList,
      count: state._serviceVehicleMovementM2m.serviceVehicleMovementM2mChecklistResultCount,
      currentPage: state._serviceVehicleMovementM2m.serviceVehicleMovementM2mChecklistResultCurrentPageNumber,
      searchFormParameters: state._serviceVehicleMovementM2m.serviceVehicleMovementM2mChecklistResultSearchFormParameters,
      loading: state._serviceVehicleMovementM2m.loading,
      owner: { type: '_serviceVehicleMovementM2m', id: state._serviceVehicleMovementM2m.id, listName: 'serviceVehicleMovementM2mChecklistResultList' }, // this is for model namespace and
    }))(ServiceVehicleMovementM2mChecklistResultSearch)
  }
  getServiceVehicleMovementM2mChecklistResultCreateForm = () => {
   	const {ServiceVehicleMovementM2mChecklistResultCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._serviceVehicleMovementM2m.serviceVehicleMovementM2mChecklistResultList,
      count: state._serviceVehicleMovementM2m.serviceVehicleMovementM2mChecklistResultCount,
      currentPage: state._serviceVehicleMovementM2m.serviceVehicleMovementM2mChecklistResultCurrentPageNumber,
      searchFormParameters: state._serviceVehicleMovementM2m.serviceVehicleMovementM2mChecklistResultSearchFormParameters,
      loading: state._serviceVehicleMovementM2m.loading,
      owner: { type: '_serviceVehicleMovementM2m', id: state._serviceVehicleMovementM2m.id, listName: 'serviceVehicleMovementM2mChecklistResultList'}, // this is for model namespace and
    }))(ServiceVehicleMovementM2mChecklistResultCreateForm)
  }
  
  getServiceVehicleMovementM2mChecklistResultUpdateForm = () => {
  	const {ServiceVehicleMovementM2mChecklistResultUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._serviceVehicleMovementM2m.selectedRows,
      currentUpdateIndex: state._serviceVehicleMovementM2m.currentUpdateIndex,
      owner: { type: '_serviceVehicleMovementM2m', id: state._serviceVehicleMovementM2m.id, listName: 'serviceVehicleMovementM2mChecklistResultList' }, // this is for model namespace and
    }))(ServiceVehicleMovementM2mChecklistResultUpdateForm)
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
    
     const {ServiceVehicleMovementM2mDashboard} = GlobalComponents
     const {ServiceVehicleMovementM2mEditDetail} = GlobalComponents
     const {ServiceVehicleMovementM2mViewDetail} = GlobalComponents
     
     
     
     
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
             <Link to="/home"> <h1>移车服务</h1></Link>
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
               <Link to={`/serviceVehicleMovementM2m/${this.props.serviceVehicleMovementM2m.id}/dashboard`}><Icon type="dashboard" /><span>仪表板</span></Link>
             </Menu.Item>
             <Menu.Item >
               <Link to={`/serviceVehicleMovementM2m/${this.props.serviceVehicleMovementM2m.id}/editDetail`}><Icon type="edit" /><span>详情编辑</span></Link>
             </Menu.Item>
             <Menu.Item >
               <Link to={`/serviceVehicleMovementM2m/${this.props.serviceVehicleMovementM2m.id}/viewDetail`}><Icon type="eye-o" /><span>详情查看</span></Link>
             </Menu.Item>
             

             {this.getNavMenuItems(this.props.serviceVehicleMovementM2m.id)}
             <Menu.Item >
               <Link to={"/home"}><Icon type="home" /><span>回到主页</span></Link>
             </Menu.Item>
           </Menu>
         </Sider>
         <Layout>
           <Content style={{ margin: '24px 24px 0', height: '100%' }}>
             <Switch>
               <Route path="/serviceVehicleMovementM2m/:id/dashboard" component={ServiceVehicleMovementM2mDashboard} />
               <Route path="/serviceVehicleMovementM2m/:id/editDetail" component={ServiceVehicleMovementM2mEditDetail} />
               <Route path="/serviceVehicleMovementM2m/:id/viewDetail" component={ServiceVehicleMovementM2mViewDetail} />
               

               <Route path="/serviceVehicleMovementM2m/:id/list/serviceVehicleMovementM2mChecklistResultList" component={this.getServiceVehicleMovementM2mChecklistResultSearch()} />
               <Route path="/serviceVehicleMovementM2m/:id/list/serviceVehicleMovementM2mChecklistResultCreateForm" component={this.getServiceVehicleMovementM2mChecklistResultCreateForm()} />
               <Route path="/serviceVehicleMovementM2m/:id/list/serviceVehicleMovementM2mChecklistResultUpdateForm" component={this.getServiceVehicleMovementM2mChecklistResultUpdateForm()} />
              
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
  serviceVehicleMovementM2m: state._serviceVehicleMovementM2m,
  ...state,
}))(ServiceVehicleMovementM2mBizApp)



