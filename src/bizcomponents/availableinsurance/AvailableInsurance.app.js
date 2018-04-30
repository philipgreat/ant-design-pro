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
import styles from './AvailableInsurance.app.less'


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


  
const menuData = {menuName:"车辆代办保险", menuFor: "availableInsurance",
  		subItems: [
  {name: 'vehicleInspectionInsuranceOrderList', displayName:'车辆上线检测保险订单'},
  {name: 'serviceInsuranceForInspectionList', displayName:'保险服务'},
  		
  		
  		],
};

class AvailableInsuranceBizApp extends React.PureComponent {
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
      return ['/availableInsurance/']
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


  getVehicleInspectionInsuranceOrderSearch = () => {
    const {VehicleInspectionInsuranceOrderSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._availableInsurance.vehicleInspectionInsuranceOrderList,
      count: state._availableInsurance.vehicleInspectionInsuranceOrderCount,
      currentPage: state._availableInsurance.vehicleInspectionInsuranceOrderCurrentPageNumber,
      searchFormParameters: state._availableInsurance.vehicleInspectionInsuranceOrderSearchFormParameters,
      loading: state._availableInsurance.loading,
      owner: { type: '_availableInsurance', id: state._availableInsurance.id, listName: 'vehicleInspectionInsuranceOrderList', ref:state._availableInsurance, listDisplayName: '车辆上线检测保险订单列表' }, // this is for model namespace and
    }))(VehicleInspectionInsuranceOrderSearch)
  }
  getVehicleInspectionInsuranceOrderCreateForm = () => {
   	const {VehicleInspectionInsuranceOrderCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._availableInsurance.vehicleInspectionInsuranceOrderList,
      count: state._availableInsurance.vehicleInspectionInsuranceOrderCount,
      currentPage: state._availableInsurance.vehicleInspectionInsuranceOrderCurrentPageNumber,
      searchFormParameters: state._availableInsurance.vehicleInspectionInsuranceOrderSearchFormParameters,
      loading: state._availableInsurance.loading,
      owner: { type: '_availableInsurance', id: state._availableInsurance.id, listName: 'vehicleInspectionInsuranceOrderList', ref:state._availableInsurance, listDisplayName: '车辆上线检测保险订单列表'}, // this is for model namespace and
    }))(VehicleInspectionInsuranceOrderCreateForm)
  }
  
  getVehicleInspectionInsuranceOrderUpdateForm = () => {
  	const {VehicleInspectionInsuranceOrderUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._availableInsurance.selectedRows,
      currentUpdateIndex: state._availableInsurance.currentUpdateIndex,
      owner: { type: '_availableInsurance', id: state._availableInsurance.id, listName: 'vehicleInspectionInsuranceOrderList', ref:state._availableInsurance, listDisplayName: '车辆上线检测保险订单列表' }, // this is for model namespace and
    }))(VehicleInspectionInsuranceOrderUpdateForm)
  }

  getServiceInsuranceForInspectionSearch = () => {
    const {ServiceInsuranceForInspectionSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._availableInsurance.serviceInsuranceForInspectionList,
      count: state._availableInsurance.serviceInsuranceForInspectionCount,
      currentPage: state._availableInsurance.serviceInsuranceForInspectionCurrentPageNumber,
      searchFormParameters: state._availableInsurance.serviceInsuranceForInspectionSearchFormParameters,
      loading: state._availableInsurance.loading,
      owner: { type: '_availableInsurance', id: state._availableInsurance.id, listName: 'serviceInsuranceForInspectionList', ref:state._availableInsurance, listDisplayName: '保险服务列表' }, // this is for model namespace and
    }))(ServiceInsuranceForInspectionSearch)
  }
  getServiceInsuranceForInspectionCreateForm = () => {
   	const {ServiceInsuranceForInspectionCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._availableInsurance.serviceInsuranceForInspectionList,
      count: state._availableInsurance.serviceInsuranceForInspectionCount,
      currentPage: state._availableInsurance.serviceInsuranceForInspectionCurrentPageNumber,
      searchFormParameters: state._availableInsurance.serviceInsuranceForInspectionSearchFormParameters,
      loading: state._availableInsurance.loading,
      owner: { type: '_availableInsurance', id: state._availableInsurance.id, listName: 'serviceInsuranceForInspectionList', ref:state._availableInsurance, listDisplayName: '保险服务列表'}, // this is for model namespace and
    }))(ServiceInsuranceForInspectionCreateForm)
  }
  
  getServiceInsuranceForInspectionUpdateForm = () => {
  	const {ServiceInsuranceForInspectionUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._availableInsurance.selectedRows,
      currentUpdateIndex: state._availableInsurance.currentUpdateIndex,
      owner: { type: '_availableInsurance', id: state._availableInsurance.id, listName: 'serviceInsuranceForInspectionList', ref:state._availableInsurance, listDisplayName: '保险服务列表' }, // this is for model namespace and
    }))(ServiceInsuranceForInspectionUpdateForm)
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
     const {AvailableInsuranceDashboard} = GlobalComponents
     const {AvailableInsuranceEditDetail} = GlobalComponents
     const {AvailableInsuranceViewDetail} = GlobalComponents
     
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
               <Link to={`/availableInsurance/${this.props.availableInsurance.id}/dashboard`}><Icon type="dashboard" /><span>仪表板</span></Link>
             </Menu.Item>
             

             {this.getNavMenuItems(this.props.availableInsurance.id)}
             <Menu.Item >
               <Link to={"/home"}><Icon type="home" /><span>回到主页</span></Link>
             </Menu.Item>
           </Menu>
         </Sider>
         <Layout>
           <Content style={{ margin: '24px 24px 0', height: '100%' }}>
             <Switch>
             
               <Route path="/availableInsurance/:id/dashboard" component={AvailableInsuranceDashboard} />
               
               <Route path="/availableInsurance/:id/editDetail" component={AvailableInsuranceEditDetail} />
               <Route path="/availableInsurance/:id/viewDetail" component={AvailableInsuranceViewDetail} /> 
               

               <Route path="/availableInsurance/:id/list/vehicleInspectionInsuranceOrderList" component={this.getVehicleInspectionInsuranceOrderSearch()} />
               <Route path="/availableInsurance/:id/list/vehicleInspectionInsuranceOrderCreateForm" component={this.getVehicleInspectionInsuranceOrderCreateForm()} />
               <Route path="/availableInsurance/:id/list/vehicleInspectionInsuranceOrderUpdateForm" component={this.getVehicleInspectionInsuranceOrderUpdateForm()} />

               <Route path="/availableInsurance/:id/list/serviceInsuranceForInspectionList" component={this.getServiceInsuranceForInspectionSearch()} />
               <Route path="/availableInsurance/:id/list/serviceInsuranceForInspectionCreateForm" component={this.getServiceInsuranceForInspectionCreateForm()} />
               <Route path="/availableInsurance/:id/list/serviceInsuranceForInspectionUpdateForm" component={this.getServiceInsuranceForInspectionUpdateForm()} />
              
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
  availableInsurance: state._availableInsurance,
  ...state,
}))(AvailableInsuranceBizApp)



