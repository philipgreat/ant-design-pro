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
import styles from './Equipment.app.less'


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

class EquipmentBizApp extends React.PureComponent {
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
      return ['/equipment/']
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
          <span>设备</span>
        </span>}
      >

        <Menu.Item>
          <Link to={`/equipment/${objectId}/list/equipmentApplicationList`}>设备应用程序</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/equipment/${objectId}/list/inputInterfaceList`}>输入接口</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/equipment/${objectId}/list/outputInterfaceList`}>输出接口</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/equipment/${objectId}/list/equipmentParameterList`}>设备参数</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/equipment/${objectId}/list/equipmentSupplyLeadTimeList`}>设备供应提前期</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/equipment/${objectId}/list/equipmentFileList`}>设备文件</Link>
        </Menu.Item>
      </SubMenu>
    )
  }


  getEquipmentApplicationSearch = () => {
    const {EquipmentApplicationSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._equipment.equipmentApplicationList,
      count: state._equipment.equipmentApplicationCount,
      currentPage: state._equipment.equipmentApplicationCurrentPageNumber,
      searchFormParameters: state._equipment.equipmentApplicationSearchFormParameters,
      loading: state._equipment.loading,
      owner: { type: '_equipment', id: state._equipment.id, listName: 'equipmentApplicationList' }, // this is for model namespace and
    }))(EquipmentApplicationSearch)
  }
  getEquipmentApplicationCreateForm = () => {
   	const {EquipmentApplicationCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._equipment.equipmentApplicationList,
      count: state._equipment.equipmentApplicationCount,
      currentPage: state._equipment.equipmentApplicationCurrentPageNumber,
      searchFormParameters: state._equipment.equipmentApplicationSearchFormParameters,
      loading: state._equipment.loading,
      owner: { type: '_equipment', id: state._equipment.id, listName: 'equipmentApplicationList'}, // this is for model namespace and
    }))(EquipmentApplicationCreateForm)
  }
  
  getEquipmentApplicationUpdateForm = () => {
  	const {EquipmentApplicationUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._equipment.selectedRows,
      currentUpdateIndex: state._equipment.currentUpdateIndex,
      owner: { type: '_equipment', id: state._equipment.id, listName: 'equipmentApplicationList' }, // this is for model namespace and
    }))(EquipmentApplicationUpdateForm)
  }

  getInputInterfaceSearch = () => {
    const {InputInterfaceSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._equipment.inputInterfaceList,
      count: state._equipment.inputInterfaceCount,
      currentPage: state._equipment.inputInterfaceCurrentPageNumber,
      searchFormParameters: state._equipment.inputInterfaceSearchFormParameters,
      loading: state._equipment.loading,
      owner: { type: '_equipment', id: state._equipment.id, listName: 'inputInterfaceList' }, // this is for model namespace and
    }))(InputInterfaceSearch)
  }
  getInputInterfaceCreateForm = () => {
   	const {InputInterfaceCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._equipment.inputInterfaceList,
      count: state._equipment.inputInterfaceCount,
      currentPage: state._equipment.inputInterfaceCurrentPageNumber,
      searchFormParameters: state._equipment.inputInterfaceSearchFormParameters,
      loading: state._equipment.loading,
      owner: { type: '_equipment', id: state._equipment.id, listName: 'inputInterfaceList'}, // this is for model namespace and
    }))(InputInterfaceCreateForm)
  }
  
  getInputInterfaceUpdateForm = () => {
  	const {InputInterfaceUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._equipment.selectedRows,
      currentUpdateIndex: state._equipment.currentUpdateIndex,
      owner: { type: '_equipment', id: state._equipment.id, listName: 'inputInterfaceList' }, // this is for model namespace and
    }))(InputInterfaceUpdateForm)
  }

  getOutputInterfaceSearch = () => {
    const {OutputInterfaceSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._equipment.outputInterfaceList,
      count: state._equipment.outputInterfaceCount,
      currentPage: state._equipment.outputInterfaceCurrentPageNumber,
      searchFormParameters: state._equipment.outputInterfaceSearchFormParameters,
      loading: state._equipment.loading,
      owner: { type: '_equipment', id: state._equipment.id, listName: 'outputInterfaceList' }, // this is for model namespace and
    }))(OutputInterfaceSearch)
  }
  getOutputInterfaceCreateForm = () => {
   	const {OutputInterfaceCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._equipment.outputInterfaceList,
      count: state._equipment.outputInterfaceCount,
      currentPage: state._equipment.outputInterfaceCurrentPageNumber,
      searchFormParameters: state._equipment.outputInterfaceSearchFormParameters,
      loading: state._equipment.loading,
      owner: { type: '_equipment', id: state._equipment.id, listName: 'outputInterfaceList'}, // this is for model namespace and
    }))(OutputInterfaceCreateForm)
  }
  
  getOutputInterfaceUpdateForm = () => {
  	const {OutputInterfaceUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._equipment.selectedRows,
      currentUpdateIndex: state._equipment.currentUpdateIndex,
      owner: { type: '_equipment', id: state._equipment.id, listName: 'outputInterfaceList' }, // this is for model namespace and
    }))(OutputInterfaceUpdateForm)
  }

  getEquipmentParameterSearch = () => {
    const {EquipmentParameterSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._equipment.equipmentParameterList,
      count: state._equipment.equipmentParameterCount,
      currentPage: state._equipment.equipmentParameterCurrentPageNumber,
      searchFormParameters: state._equipment.equipmentParameterSearchFormParameters,
      loading: state._equipment.loading,
      owner: { type: '_equipment', id: state._equipment.id, listName: 'equipmentParameterList' }, // this is for model namespace and
    }))(EquipmentParameterSearch)
  }
  getEquipmentParameterCreateForm = () => {
   	const {EquipmentParameterCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._equipment.equipmentParameterList,
      count: state._equipment.equipmentParameterCount,
      currentPage: state._equipment.equipmentParameterCurrentPageNumber,
      searchFormParameters: state._equipment.equipmentParameterSearchFormParameters,
      loading: state._equipment.loading,
      owner: { type: '_equipment', id: state._equipment.id, listName: 'equipmentParameterList'}, // this is for model namespace and
    }))(EquipmentParameterCreateForm)
  }
  
  getEquipmentParameterUpdateForm = () => {
  	const {EquipmentParameterUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._equipment.selectedRows,
      currentUpdateIndex: state._equipment.currentUpdateIndex,
      owner: { type: '_equipment', id: state._equipment.id, listName: 'equipmentParameterList' }, // this is for model namespace and
    }))(EquipmentParameterUpdateForm)
  }

  getEquipmentSupplyLeadTimeSearch = () => {
    const {EquipmentSupplyLeadTimeSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._equipment.equipmentSupplyLeadTimeList,
      count: state._equipment.equipmentSupplyLeadTimeCount,
      currentPage: state._equipment.equipmentSupplyLeadTimeCurrentPageNumber,
      searchFormParameters: state._equipment.equipmentSupplyLeadTimeSearchFormParameters,
      loading: state._equipment.loading,
      owner: { type: '_equipment', id: state._equipment.id, listName: 'equipmentSupplyLeadTimeList' }, // this is for model namespace and
    }))(EquipmentSupplyLeadTimeSearch)
  }
  getEquipmentSupplyLeadTimeCreateForm = () => {
   	const {EquipmentSupplyLeadTimeCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._equipment.equipmentSupplyLeadTimeList,
      count: state._equipment.equipmentSupplyLeadTimeCount,
      currentPage: state._equipment.equipmentSupplyLeadTimeCurrentPageNumber,
      searchFormParameters: state._equipment.equipmentSupplyLeadTimeSearchFormParameters,
      loading: state._equipment.loading,
      owner: { type: '_equipment', id: state._equipment.id, listName: 'equipmentSupplyLeadTimeList'}, // this is for model namespace and
    }))(EquipmentSupplyLeadTimeCreateForm)
  }
  
  getEquipmentSupplyLeadTimeUpdateForm = () => {
  	const {EquipmentSupplyLeadTimeUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._equipment.selectedRows,
      currentUpdateIndex: state._equipment.currentUpdateIndex,
      owner: { type: '_equipment', id: state._equipment.id, listName: 'equipmentSupplyLeadTimeList' }, // this is for model namespace and
    }))(EquipmentSupplyLeadTimeUpdateForm)
  }

  getEquipmentFileSearch = () => {
    const {EquipmentFileSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._equipment.equipmentFileList,
      count: state._equipment.equipmentFileCount,
      currentPage: state._equipment.equipmentFileCurrentPageNumber,
      searchFormParameters: state._equipment.equipmentFileSearchFormParameters,
      loading: state._equipment.loading,
      owner: { type: '_equipment', id: state._equipment.id, listName: 'equipmentFileList' }, // this is for model namespace and
    }))(EquipmentFileSearch)
  }
  getEquipmentFileCreateForm = () => {
   	const {EquipmentFileCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._equipment.equipmentFileList,
      count: state._equipment.equipmentFileCount,
      currentPage: state._equipment.equipmentFileCurrentPageNumber,
      searchFormParameters: state._equipment.equipmentFileSearchFormParameters,
      loading: state._equipment.loading,
      owner: { type: '_equipment', id: state._equipment.id, listName: 'equipmentFileList'}, // this is for model namespace and
    }))(EquipmentFileCreateForm)
  }
  
  getEquipmentFileUpdateForm = () => {
  	const {EquipmentFileUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._equipment.selectedRows,
      currentUpdateIndex: state._equipment.currentUpdateIndex,
      owner: { type: '_equipment', id: state._equipment.id, listName: 'equipmentFileList' }, // this is for model namespace and
    }))(EquipmentFileUpdateForm)
  }

  getPageTitle = () => {
    // const { location } = this.props
    // const { pathname } = location
    const title = '环保装备方案管理系统'
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
    
     const {EquipmentDashboard} = GlobalComponents
     const {EquipmentEditDetail} = GlobalComponents
     const {EquipmentViewDetail} = GlobalComponents
     
     
     
     
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
             <Link to="/home"> <h1>设备</h1></Link>
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
               <Link to={`/equipment/${this.props.equipment.id}/dashboard`}><Icon type="dashboard" /><span>仪表板</span></Link>
             </Menu.Item>
             <Menu.Item >
               <Link to={`/equipment/${this.props.equipment.id}/editDetail`}><Icon type="edit" /><span>详情编辑</span></Link>
             </Menu.Item>
             <Menu.Item >
               <Link to={`/equipment/${this.props.equipment.id}/viewDetail`}><Icon type="eye-o" /><span>详情查看</span></Link>
             </Menu.Item>
             

             {this.getNavMenuItems(this.props.equipment.id)}
             <Menu.Item >
               <Link to={"/home"}><Icon type="home" /><span>回到主页</span></Link>
             </Menu.Item>
           </Menu>
         </Sider>
         <Layout>
           <Content style={{ margin: '24px 24px 0', height: '100%' }}>
             <Switch>
               <Route path="/equipment/:id/dashboard" component={EquipmentDashboard} />
               <Route path="/equipment/:id/editDetail" component={EquipmentEditDetail} />
               <Route path="/equipment/:id/viewDetail" component={EquipmentViewDetail} />
               

               <Route path="/equipment/:id/list/equipmentApplicationList" component={this.getEquipmentApplicationSearch()} />
               <Route path="/equipment/:id/list/equipmentApplicationCreateForm" component={this.getEquipmentApplicationCreateForm()} />
               <Route path="/equipment/:id/list/equipmentApplicationUpdateForm" component={this.getEquipmentApplicationUpdateForm()} />

               <Route path="/equipment/:id/list/inputInterfaceList" component={this.getInputInterfaceSearch()} />
               <Route path="/equipment/:id/list/inputInterfaceCreateForm" component={this.getInputInterfaceCreateForm()} />
               <Route path="/equipment/:id/list/inputInterfaceUpdateForm" component={this.getInputInterfaceUpdateForm()} />

               <Route path="/equipment/:id/list/outputInterfaceList" component={this.getOutputInterfaceSearch()} />
               <Route path="/equipment/:id/list/outputInterfaceCreateForm" component={this.getOutputInterfaceCreateForm()} />
               <Route path="/equipment/:id/list/outputInterfaceUpdateForm" component={this.getOutputInterfaceUpdateForm()} />

               <Route path="/equipment/:id/list/equipmentParameterList" component={this.getEquipmentParameterSearch()} />
               <Route path="/equipment/:id/list/equipmentParameterCreateForm" component={this.getEquipmentParameterCreateForm()} />
               <Route path="/equipment/:id/list/equipmentParameterUpdateForm" component={this.getEquipmentParameterUpdateForm()} />

               <Route path="/equipment/:id/list/equipmentSupplyLeadTimeList" component={this.getEquipmentSupplyLeadTimeSearch()} />
               <Route path="/equipment/:id/list/equipmentSupplyLeadTimeCreateForm" component={this.getEquipmentSupplyLeadTimeCreateForm()} />
               <Route path="/equipment/:id/list/equipmentSupplyLeadTimeUpdateForm" component={this.getEquipmentSupplyLeadTimeUpdateForm()} />

               <Route path="/equipment/:id/list/equipmentFileList" component={this.getEquipmentFileSearch()} />
               <Route path="/equipment/:id/list/equipmentFileCreateForm" component={this.getEquipmentFileCreateForm()} />
               <Route path="/equipment/:id/list/equipmentFileUpdateForm" component={this.getEquipmentFileUpdateForm()} />
              
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
  equipment: state._equipment,
  ...state,
}))(EquipmentBizApp)



