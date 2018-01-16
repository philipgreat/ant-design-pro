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
import styles from './InspectionStation.app.less'
import InspectionStationDashboard from './InspectionStation.dashboard'
import InspectionStationEditDetail from './InspectionStation.editdetail'
import InspectionStationViewDetail from './InspectionStation.viewdetail'


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

class InspectionStationBizApp extends React.PureComponent {
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
      return ['/inspectionStation/']
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
          <span>检测站</span>
        </span>}
      >

        <Menu.Item>
          <Link to={`/inspectionStation/${objectId}/list/serviceVehicleInspectionList`}>车辆上线检测结果</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/inspectionStation/${objectId}/list/serviceFileInspectionList`}>6年免检服务结果</Link>
        </Menu.Item>
      </SubMenu>
    )
  }


  getServiceVehicleInspectionSearch = () => {
    const {ServiceVehicleInspectionSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._inspectionStation.serviceVehicleInspectionList,
      count: state._inspectionStation.serviceVehicleInspectionCount,
      currentPage: state._inspectionStation.serviceVehicleInspectionCurrentPageNumber,
      searchFormParameters: state._inspectionStation.serviceVehicleInspectionSearchFormParameters,
      loading: state._inspectionStation.loading,
      owner: { type: '_inspectionStation', id: state._inspectionStation.id, listName: 'serviceVehicleInspectionList' }, // this is for model namespace and
    }))(ServiceVehicleInspectionSearch)
  }
  getServiceVehicleInspectionCreateForm = () => {
   	const {ServiceVehicleInspectionCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._inspectionStation.serviceVehicleInspectionList,
      count: state._inspectionStation.serviceVehicleInspectionCount,
      currentPage: state._inspectionStation.serviceVehicleInspectionCurrentPageNumber,
      searchFormParameters: state._inspectionStation.serviceVehicleInspectionSearchFormParameters,
      loading: state._inspectionStation.loading,
      owner: { type: '_inspectionStation', id: state._inspectionStation.id, listName: 'serviceVehicleInspectionList'}, // this is for model namespace and
    }))(ServiceVehicleInspectionCreateForm)
  }
  
  getServiceVehicleInspectionUpdateForm = () => {
  	const {ServiceVehicleInspectionUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._inspectionStation.selectedRows,
      currentUpdateIndex: state._inspectionStation.currentUpdateIndex,
      owner: { type: '_inspectionStation', id: state._inspectionStation.id, listName: 'serviceVehicleInspectionList' }, // this is for model namespace and
    }))(ServiceVehicleInspectionUpdateForm)
  }

  getServiceFileInspectionSearch = () => {
    const {ServiceFileInspectionSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._inspectionStation.serviceFileInspectionList,
      count: state._inspectionStation.serviceFileInspectionCount,
      currentPage: state._inspectionStation.serviceFileInspectionCurrentPageNumber,
      searchFormParameters: state._inspectionStation.serviceFileInspectionSearchFormParameters,
      loading: state._inspectionStation.loading,
      owner: { type: '_inspectionStation', id: state._inspectionStation.id, listName: 'serviceFileInspectionList' }, // this is for model namespace and
    }))(ServiceFileInspectionSearch)
  }
  getServiceFileInspectionCreateForm = () => {
   	const {ServiceFileInspectionCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._inspectionStation.serviceFileInspectionList,
      count: state._inspectionStation.serviceFileInspectionCount,
      currentPage: state._inspectionStation.serviceFileInspectionCurrentPageNumber,
      searchFormParameters: state._inspectionStation.serviceFileInspectionSearchFormParameters,
      loading: state._inspectionStation.loading,
      owner: { type: '_inspectionStation', id: state._inspectionStation.id, listName: 'serviceFileInspectionList'}, // this is for model namespace and
    }))(ServiceFileInspectionCreateForm)
  }
  
  getServiceFileInspectionUpdateForm = () => {
  	const {ServiceFileInspectionUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._inspectionStation.selectedRows,
      currentUpdateIndex: state._inspectionStation.currentUpdateIndex,
      owner: { type: '_inspectionStation', id: state._inspectionStation.id, listName: 'serviceFileInspectionList' }, // this is for model namespace and
    }))(ServiceFileInspectionUpdateForm)
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
             <Link to="/home"> <h1>检测站</h1></Link>
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
               <Link to={`/inspectionStation/${this.props.inspectionStation.id}/dashboard`}><Icon type="dashboard" /><span>仪表板</span></Link>
             </Menu.Item>
             <Menu.Item >
               <Link to={`/inspectionStation/${this.props.inspectionStation.id}/editDetail`}><Icon type="edit" /><span>详情编辑</span></Link>
             </Menu.Item>
             <Menu.Item >
               <Link to={`/inspectionStation/${this.props.inspectionStation.id}/viewDetail`}><Icon type="eye-o" /><span>详情查看</span></Link>
             </Menu.Item>
             

             {this.getNavMenuItems(this.props.inspectionStation.id)}
             <Menu.Item >
               <Link to={"/home"}><Icon type="home" /><span>回到主页</span></Link>
             </Menu.Item>
           </Menu>
         </Sider>
         <Layout>
           <Content style={{ margin: '24px 24px 0', height: '100%' }}>
             <Switch>
               <Route path="/inspectionStation/:id/dashboard" component={InspectionStationDashboard} />
               <Route path="/inspectionStation/:id/editDetail" component={InspectionStationEditDetail} />
               <Route path="/inspectionStation/:id/viewDetail" component={InspectionStationViewDetail} />
               

               <Route path="/inspectionStation/:id/list/serviceVehicleInspectionList" component={this.getServiceVehicleInspectionSearch()} />
               <Route path="/inspectionStation/:id/list/serviceVehicleInspectionCreateForm" component={this.getServiceVehicleInspectionCreateForm()} />
               <Route path="/inspectionStation/:id/list/serviceVehicleInspectionUpdateForm" component={this.getServiceVehicleInspectionUpdateForm()} />

               <Route path="/inspectionStation/:id/list/serviceFileInspectionList" component={this.getServiceFileInspectionSearch()} />
               <Route path="/inspectionStation/:id/list/serviceFileInspectionCreateForm" component={this.getServiceFileInspectionCreateForm()} />
               <Route path="/inspectionStation/:id/list/serviceFileInspectionUpdateForm" component={this.getServiceFileInspectionUpdateForm()} />
              
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
  inspectionStation: state._inspectionStation,
  ...state,
}))(InspectionStationBizApp)



