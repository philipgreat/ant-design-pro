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
import styles from './InspectionStation.app.less'


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


  
const menuData = {menuName:"检测站", menuFor: "inspectionStation",
  		subItems: [
  {name: 'vehicleServiceCompanyEmployeeList', displayName:'商户员工'},
  {name: 'serviceVehicleInspectionList', displayName:'车辆上线检测'},
  {name: 'serviceFileInspectionList', displayName:'6年免检服务'},
  {name: 'inspectionStationAccountList', displayName:'检测站对账单'},
  		
  		
  		],
};

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
          <span>{menuData.menuName}</span>
        </span>}
      >
        {menuData.subItems.map((item)=>(<Menu.Item>
          <Link to={`/${menuData.menuFor}/${objectId}/list/${item.name}`}>{item.displayName}</Link>
        </Menu.Item>))}
       
      </SubMenu>
    )
  }


  getVehicleServiceCompanyEmployeeSearch = () => {
    const {VehicleServiceCompanyEmployeeSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._inspectionStation.vehicleServiceCompanyEmployeeList,
      count: state._inspectionStation.vehicleServiceCompanyEmployeeCount,
      currentPage: state._inspectionStation.vehicleServiceCompanyEmployeeCurrentPageNumber,
      searchFormParameters: state._inspectionStation.vehicleServiceCompanyEmployeeSearchFormParameters,
      loading: state._inspectionStation.loading,
      owner: { type: '_inspectionStation', id: state._inspectionStation.id, listName: 'vehicleServiceCompanyEmployeeList', ref:state._inspectionStation, listDisplayName: '商户员工列表' }, // this is for model namespace and
    }))(VehicleServiceCompanyEmployeeSearch)
  }
  getVehicleServiceCompanyEmployeeCreateForm = () => {
   	const {VehicleServiceCompanyEmployeeCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._inspectionStation.vehicleServiceCompanyEmployeeList,
      count: state._inspectionStation.vehicleServiceCompanyEmployeeCount,
      currentPage: state._inspectionStation.vehicleServiceCompanyEmployeeCurrentPageNumber,
      searchFormParameters: state._inspectionStation.vehicleServiceCompanyEmployeeSearchFormParameters,
      loading: state._inspectionStation.loading,
      owner: { type: '_inspectionStation', id: state._inspectionStation.id, listName: 'vehicleServiceCompanyEmployeeList', ref:state._inspectionStation, listDisplayName: '商户员工列表'}, // this is for model namespace and
    }))(VehicleServiceCompanyEmployeeCreateForm)
  }
  
  getVehicleServiceCompanyEmployeeUpdateForm = () => {
  	const {VehicleServiceCompanyEmployeeUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._inspectionStation.selectedRows,
      currentUpdateIndex: state._inspectionStation.currentUpdateIndex,
      owner: { type: '_inspectionStation', id: state._inspectionStation.id, listName: 'vehicleServiceCompanyEmployeeList', ref:state._inspectionStation, listDisplayName: '商户员工列表' }, // this is for model namespace and
    }))(VehicleServiceCompanyEmployeeUpdateForm)
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
      owner: { type: '_inspectionStation', id: state._inspectionStation.id, listName: 'serviceVehicleInspectionList', ref:state._inspectionStation, listDisplayName: '车辆上线检测列表' }, // this is for model namespace and
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
      owner: { type: '_inspectionStation', id: state._inspectionStation.id, listName: 'serviceVehicleInspectionList', ref:state._inspectionStation, listDisplayName: '车辆上线检测列表'}, // this is for model namespace and
    }))(ServiceVehicleInspectionCreateForm)
  }
  
  getServiceVehicleInspectionUpdateForm = () => {
  	const {ServiceVehicleInspectionUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._inspectionStation.selectedRows,
      currentUpdateIndex: state._inspectionStation.currentUpdateIndex,
      owner: { type: '_inspectionStation', id: state._inspectionStation.id, listName: 'serviceVehicleInspectionList', ref:state._inspectionStation, listDisplayName: '车辆上线检测列表' }, // this is for model namespace and
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
      owner: { type: '_inspectionStation', id: state._inspectionStation.id, listName: 'serviceFileInspectionList', ref:state._inspectionStation, listDisplayName: '6年免检服务列表' }, // this is for model namespace and
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
      owner: { type: '_inspectionStation', id: state._inspectionStation.id, listName: 'serviceFileInspectionList', ref:state._inspectionStation, listDisplayName: '6年免检服务列表'}, // this is for model namespace and
    }))(ServiceFileInspectionCreateForm)
  }
  
  getServiceFileInspectionUpdateForm = () => {
  	const {ServiceFileInspectionUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._inspectionStation.selectedRows,
      currentUpdateIndex: state._inspectionStation.currentUpdateIndex,
      owner: { type: '_inspectionStation', id: state._inspectionStation.id, listName: 'serviceFileInspectionList', ref:state._inspectionStation, listDisplayName: '6年免检服务列表' }, // this is for model namespace and
    }))(ServiceFileInspectionUpdateForm)
  }

  getInspectionStationAccountSearch = () => {
    const {InspectionStationAccountSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._inspectionStation.inspectionStationAccountList,
      count: state._inspectionStation.inspectionStationAccountCount,
      currentPage: state._inspectionStation.inspectionStationAccountCurrentPageNumber,
      searchFormParameters: state._inspectionStation.inspectionStationAccountSearchFormParameters,
      loading: state._inspectionStation.loading,
      owner: { type: '_inspectionStation', id: state._inspectionStation.id, listName: 'inspectionStationAccountList', ref:state._inspectionStation, listDisplayName: '检测站对账单列表' }, // this is for model namespace and
    }))(InspectionStationAccountSearch)
  }
  getInspectionStationAccountCreateForm = () => {
   	const {InspectionStationAccountCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._inspectionStation.inspectionStationAccountList,
      count: state._inspectionStation.inspectionStationAccountCount,
      currentPage: state._inspectionStation.inspectionStationAccountCurrentPageNumber,
      searchFormParameters: state._inspectionStation.inspectionStationAccountSearchFormParameters,
      loading: state._inspectionStation.loading,
      owner: { type: '_inspectionStation', id: state._inspectionStation.id, listName: 'inspectionStationAccountList', ref:state._inspectionStation, listDisplayName: '检测站对账单列表'}, // this is for model namespace and
    }))(InspectionStationAccountCreateForm)
  }
  
  getInspectionStationAccountUpdateForm = () => {
  	const {InspectionStationAccountUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._inspectionStation.selectedRows,
      currentUpdateIndex: state._inspectionStation.currentUpdateIndex,
      owner: { type: '_inspectionStation', id: state._inspectionStation.id, listName: 'inspectionStationAccountList', ref:state._inspectionStation, listDisplayName: '检测站对账单列表' }, // this is for model namespace and
    }))(InspectionStationAccountUpdateForm)
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
     const { breadcrumb }  = this.props
     const {InspectionStationDashboard} = GlobalComponents
     const {InspectionStationEditDetail} = GlobalComponents
     const {InspectionStationViewDetail} = GlobalComponents
     
     const currentBreadcrumb = breadcrumb[breadcrumb.currentApp]
     
     
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
            return (<a href={`#${item.link}`} className={styles.breadcrumbLink}> &gt;{item.name}</a>)

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
             {...menuProps}
             onOpenChange={this.handleOpenChange}
             selectedKeys={this.getCurrentMenuSelectedKeys()}
             style={{ margin: '16px 0', width: '100%' }}
           >
           

             <Menu.Item >
               <Link to={`/inspectionStation/${this.props.inspectionStation.id}/dashboard`}><Icon type="dashboard" /><span>仪表板</span></Link>
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
               

               <Route path="/inspectionStation/:id/list/vehicleServiceCompanyEmployeeList" component={this.getVehicleServiceCompanyEmployeeSearch()} />
               <Route path="/inspectionStation/:id/list/vehicleServiceCompanyEmployeeCreateForm" component={this.getVehicleServiceCompanyEmployeeCreateForm()} />
               <Route path="/inspectionStation/:id/list/vehicleServiceCompanyEmployeeUpdateForm" component={this.getVehicleServiceCompanyEmployeeUpdateForm()} />

               <Route path="/inspectionStation/:id/list/serviceVehicleInspectionList" component={this.getServiceVehicleInspectionSearch()} />
               <Route path="/inspectionStation/:id/list/serviceVehicleInspectionCreateForm" component={this.getServiceVehicleInspectionCreateForm()} />
               <Route path="/inspectionStation/:id/list/serviceVehicleInspectionUpdateForm" component={this.getServiceVehicleInspectionUpdateForm()} />

               <Route path="/inspectionStation/:id/list/serviceFileInspectionList" component={this.getServiceFileInspectionSearch()} />
               <Route path="/inspectionStation/:id/list/serviceFileInspectionCreateForm" component={this.getServiceFileInspectionCreateForm()} />
               <Route path="/inspectionStation/:id/list/serviceFileInspectionUpdateForm" component={this.getServiceFileInspectionUpdateForm()} />

               <Route path="/inspectionStation/:id/list/inspectionStationAccountList" component={this.getInspectionStationAccountSearch()} />
               <Route path="/inspectionStation/:id/list/inspectionStationAccountCreateForm" component={this.getInspectionStationAccountCreateForm()} />
               <Route path="/inspectionStation/:id/list/inspectionStationAccountUpdateForm" component={this.getInspectionStationAccountUpdateForm()} />
              
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
  inspectionStation: state._inspectionStation,
  ...state,
}))(InspectionStationBizApp)



