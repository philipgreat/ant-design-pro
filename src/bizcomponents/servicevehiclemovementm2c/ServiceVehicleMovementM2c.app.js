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
import styles from './ServiceVehicleMovementM2c.app.less'
import ServiceVehicleMovementM2cDashboard from './ServiceVehicleMovementM2c.dashboard'
import ServiceVehicleMovementM2cEditDetail from './ServiceVehicleMovementM2c.editdetail'


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

class ServiceVehicleMovementM2cBizApp extends React.PureComponent {
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
      return ['/serviceVehicleMovementM2c/']
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
          <span>还车服务</span>
        </span>}
      >

        <Menu.Item>
          <Link to={`/serviceVehicleMovementM2c/${objectId}/list/serviceVehicleMovementM2cChecklistResultList`}>还车服务检查结果</Link>
        </Menu.Item>
      </SubMenu>
    )
  }


  getServiceVehicleMovementM2cChecklistResultSearch = () => {
    const {ServiceVehicleMovementM2cChecklistResultSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._serviceVehicleMovementM2c.serviceVehicleMovementM2cChecklistResultList,
      count: state._serviceVehicleMovementM2c.serviceVehicleMovementM2cChecklistResultCount,
      currentPage: state._serviceVehicleMovementM2c.serviceVehicleMovementM2cChecklistResultCurrentPageNumber,
      searchFormParameters: state._serviceVehicleMovementM2c.serviceVehicleMovementM2cChecklistResultSearchFormParameters,
      loading: state._serviceVehicleMovementM2c.loading,
      owner: { type: '_serviceVehicleMovementM2c', id: state._serviceVehicleMovementM2c.id }, // this is for model namespace and
    }))(ServiceVehicleMovementM2cChecklistResultSearch)
  }
  getServiceVehicleMovementM2cChecklistResultCreateForm = () => {
   	const {ServiceVehicleMovementM2cChecklistResultCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._serviceVehicleMovementM2c.serviceVehicleMovementM2cChecklistResultList,
      count: state._serviceVehicleMovementM2c.serviceVehicleMovementM2cChecklistResultCount,
      currentPage: state._serviceVehicleMovementM2c.serviceVehicleMovementM2cChecklistResultCurrentPageNumber,
      searchFormParameters: state._serviceVehicleMovementM2c.serviceVehicleMovementM2cChecklistResultSearchFormParameters,
      loading: state._serviceVehicleMovementM2c.loading,
      owner: { type: '_serviceVehicleMovementM2c', id: state._serviceVehicleMovementM2c.id }, // this is for model namespace and
    }))(ServiceVehicleMovementM2cChecklistResultCreateForm)
  }
  
  getServiceVehicleMovementM2cChecklistResultUpdateForm = () => {
  	const {ServiceVehicleMovementM2cChecklistResultUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._serviceVehicleMovementM2c.selectedRows,
      currentUpdateIndex: state._serviceVehicleMovementM2c.currentUpdateIndex,
      owner: { type: '_serviceVehicleMovementM2c', id: state._serviceVehicleMovementM2c.id }, // this is for model namespace and
    }))(ServiceVehicleMovementM2cChecklistResultUpdateForm)
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
           onCollapse={this.onCollapse}
           width={256}
           className={styles.sider}
         >
           <div className={styles.logo}>
             <img src="/scm.svg" alt="logo" onClick={this.toggle} />
             <Link to="/home"> <h1>还车服务</h1></Link>
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
               <Link to={`/serviceVehicleMovementM2c/${this.props.serviceVehicleMovementM2c.id}/dashboard`}><Icon type="dashboard" /><span>仪表板</span></Link>
             </Menu.Item>
             <Menu.Item >
               <Link to={`/serviceVehicleMovementM2c/${this.props.serviceVehicleMovementM2c.id}/editDetail`}><Icon type="edit" /><span>详情编辑</span></Link>
             </Menu.Item>

             {this.getNavMenuItems(this.props.serviceVehicleMovementM2c.id)}
           </Menu>
         </Sider>
         <Layout>
           <Content style={{ margin: '24px 24px 0', height: '100%' }}>
             <Switch>
               <Route path="/serviceVehicleMovementM2c/:id/dashboard" component={ServiceVehicleMovementM2cDashboard} />
               <Route path="/serviceVehicleMovementM2c/:id/editDetail" component={ServiceVehicleMovementM2cEditDetail} />

               <Route path="/serviceVehicleMovementM2c/:id/list/serviceVehicleMovementM2cChecklistResultList" component={this.getServiceVehicleMovementM2cChecklistResultSearch()} />
               <Route path="/serviceVehicleMovementM2c/:id/list/serviceVehicleMovementM2cChecklistResultCreateForm" component={this.getServiceVehicleMovementM2cChecklistResultCreateForm()} />
               <Route path="/serviceVehicleMovementM2c/:id/list/serviceVehicleMovementM2cChecklistResultUpdateForm" component={this.getServiceVehicleMovementM2cChecklistResultUpdateForm()} />
              
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
  serviceVehicleMovementM2c: state._serviceVehicleMovementM2c,
  ...state,
}))(ServiceVehicleMovementM2cBizApp)



