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
import styles from './Printer.app.less'
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


  
const menuData = {menuName:"打印机", menuFor: "printer",
  		subItems: [
  {name: 'printerTaskList', displayName:'打印机任务'},
  {name: 'storeList', displayName:'商店'},
  		
  		
  		],
};

class PrinterBizApp extends React.PureComponent {
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
      return ['/printer/']
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
  



  getPrinterTaskSearch = () => {
    const {PrinterTaskSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._printer.printerTaskList,
      count: state._printer.printerTaskCount,
      currentPage: state._printer.printerTaskCurrentPageNumber,
      searchFormParameters: state._printer.printerTaskSearchFormParameters,
      loading: state._printer.loading,
      partialList: state._printer.partialList,
      owner: { type: '_printer', id: state._printer.id, referenceName: 'printer', listName: 'printerTaskList', ref:state._printer, listDisplayName: '打印机任务列表' }, // this is for model namespace and
    }))(PrinterTaskSearch)
  }
  getPrinterTaskCreateForm = () => {
   	const {PrinterTaskCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._printer.printerTaskList,
      count: state._printer.printerTaskCount,
      currentPage: state._printer.printerTaskCurrentPageNumber,
      searchFormParameters: state._printer.printerTaskSearchFormParameters,
      loading: state._printer.loading,
      owner: { type: '_printer', id: state._printer.id, referenceName: 'printer', listName: 'printerTaskList', ref:state._printer, listDisplayName: '打印机任务列表'}, // this is for model namespace and
    }))(PrinterTaskCreateForm)
  }
  
  getPrinterTaskUpdateForm = () => {
  	const {PrinterTaskUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._printer.selectedRows,
      currentUpdateIndex: state._printer.currentUpdateIndex,
      owner: { type: '_printer', id: state._printer.id, listName: 'printerTaskList', ref:state._printer, listDisplayName: '打印机任务列表' }, // this is for model namespace and
    }))(PrinterTaskUpdateForm)
  }

  getStoreSearch = () => {
    const {StoreSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._printer.storeList,
      count: state._printer.storeCount,
      currentPage: state._printer.storeCurrentPageNumber,
      searchFormParameters: state._printer.storeSearchFormParameters,
      loading: state._printer.loading,
      partialList: state._printer.partialList,
      owner: { type: '_printer', id: state._printer.id, referenceName: 'printer', listName: 'storeList', ref:state._printer, listDisplayName: '商店列表' }, // this is for model namespace and
    }))(StoreSearch)
  }
  getStoreCreateForm = () => {
   	const {StoreCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._printer.storeList,
      count: state._printer.storeCount,
      currentPage: state._printer.storeCurrentPageNumber,
      searchFormParameters: state._printer.storeSearchFormParameters,
      loading: state._printer.loading,
      owner: { type: '_printer', id: state._printer.id, referenceName: 'printer', listName: 'storeList', ref:state._printer, listDisplayName: '商店列表'}, // this is for model namespace and
    }))(StoreCreateForm)
  }
  
  getStoreUpdateForm = () => {
  	const {StoreUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._printer.selectedRows,
      currentUpdateIndex: state._printer.currentUpdateIndex,
      owner: { type: '_printer', id: state._printer.id, listName: 'storeList', ref:state._printer, listDisplayName: '商店列表' }, // this is for model namespace and
    }))(StoreUpdateForm)
  }

  getPageTitle = () => {
    // const { location } = this.props
    // const { pathname } = location
    const title = '书香社区'
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
     const {PrinterDashboard} = GlobalComponents
     //const {PrinterEditDetail} = GlobalComponents
     //const {PrinterViewDetail} = GlobalComponents
     
     
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
               <Link to={`/printer/${this.props.printer.id}/dashboard`}><Icon type="dashboard" /><span>仪表板</span></Link>
             </Menu.Item>


             {this.getNavMenuItems(this.props.printer.id)}
             <Menu.Item key="homepage">
               <Link to={"/home"}><Icon type="home" /><span>回到主页</span></Link>
             </Menu.Item>
           </Menu>
         </Sider>
         <Layout>
           <Content style={{ margin: '24px 24px 0', height: '100%' }}>
             <Switch>
             
               <Route path="/printer/:id/dashboard" component={PrinterDashboard} />
               
               

               <Route path="/printer/:id/list/printerTaskList" component={this.getPrinterTaskSearch()} />
               <Route path="/printer/:id/list/printerTaskCreateForm" component={this.getPrinterTaskCreateForm()} />
               <Route path="/printer/:id/list/printerTaskUpdateForm" component={this.getPrinterTaskUpdateForm()} />

               <Route path="/printer/:id/list/storeList" component={this.getStoreSearch()} />
               <Route path="/printer/:id/list/storeCreateForm" component={this.getStoreCreateForm()} />
               <Route path="/printer/:id/list/storeUpdateForm" component={this.getStoreUpdateForm()} />
              
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
  printer: state._printer,
  ...state,
}))(PrinterBizApp)



