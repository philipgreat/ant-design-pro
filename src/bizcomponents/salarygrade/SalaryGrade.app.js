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
import styles from './SalaryGrade.app.less'


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

class SalaryGradeBizApp extends React.PureComponent {
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
      return ['/salaryGrade/']
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
          <span>工资等级</span>
        </span>}
      >

        <Menu.Item>
          <Link to={`/salaryGrade/${objectId}/list/employeeList`}>员工</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/salaryGrade/${objectId}/list/employeeSalarySheetList`}>工资单</Link>
        </Menu.Item>
      </SubMenu>
    )
  }


  getEmployeeSearch = () => {
    const {EmployeeSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._salaryGrade.employeeList,
      count: state._salaryGrade.employeeCount,
      currentPage: state._salaryGrade.employeeCurrentPageNumber,
      searchFormParameters: state._salaryGrade.employeeSearchFormParameters,
      loading: state._salaryGrade.loading,
      owner: { type: '_salaryGrade', id: state._salaryGrade.id, listName: 'employeeList', ref:state._salaryGrade, listDisplayName: '员工列表' }, // this is for model namespace and
    }))(EmployeeSearch)
  }
  getEmployeeCreateForm = () => {
   	const {EmployeeCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._salaryGrade.employeeList,
      count: state._salaryGrade.employeeCount,
      currentPage: state._salaryGrade.employeeCurrentPageNumber,
      searchFormParameters: state._salaryGrade.employeeSearchFormParameters,
      loading: state._salaryGrade.loading,
      owner: { type: '_salaryGrade', id: state._salaryGrade.id, listName: 'employeeList', ref:state._salaryGrade, listDisplayName: '员工列表'}, // this is for model namespace and
    }))(EmployeeCreateForm)
  }
  
  getEmployeeUpdateForm = () => {
  	const {EmployeeUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._salaryGrade.selectedRows,
      currentUpdateIndex: state._salaryGrade.currentUpdateIndex,
      owner: { type: '_salaryGrade', id: state._salaryGrade.id, listName: 'employeeList', ref:state._salaryGrade, listDisplayName: '员工列表' }, // this is for model namespace and
    }))(EmployeeUpdateForm)
  }

  getEmployeeSalarySheetSearch = () => {
    const {EmployeeSalarySheetSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._salaryGrade.employeeSalarySheetList,
      count: state._salaryGrade.employeeSalarySheetCount,
      currentPage: state._salaryGrade.employeeSalarySheetCurrentPageNumber,
      searchFormParameters: state._salaryGrade.employeeSalarySheetSearchFormParameters,
      loading: state._salaryGrade.loading,
      owner: { type: '_salaryGrade', id: state._salaryGrade.id, listName: 'employeeSalarySheetList', ref:state._salaryGrade, listDisplayName: '工资单列表' }, // this is for model namespace and
    }))(EmployeeSalarySheetSearch)
  }
  getEmployeeSalarySheetCreateForm = () => {
   	const {EmployeeSalarySheetCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._salaryGrade.employeeSalarySheetList,
      count: state._salaryGrade.employeeSalarySheetCount,
      currentPage: state._salaryGrade.employeeSalarySheetCurrentPageNumber,
      searchFormParameters: state._salaryGrade.employeeSalarySheetSearchFormParameters,
      loading: state._salaryGrade.loading,
      owner: { type: '_salaryGrade', id: state._salaryGrade.id, listName: 'employeeSalarySheetList', ref:state._salaryGrade, listDisplayName: '工资单列表'}, // this is for model namespace and
    }))(EmployeeSalarySheetCreateForm)
  }
  
  getEmployeeSalarySheetUpdateForm = () => {
  	const {EmployeeSalarySheetUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._salaryGrade.selectedRows,
      currentUpdateIndex: state._salaryGrade.currentUpdateIndex,
      owner: { type: '_salaryGrade', id: state._salaryGrade.id, listName: 'employeeSalarySheetList', ref:state._salaryGrade, listDisplayName: '工资单列表' }, // this is for model namespace and
    }))(EmployeeSalarySheetUpdateForm)
  }

  getPageTitle = () => {
    // const { location } = this.props
    // const { pathname } = location
    const title = '全国装修加速器运营系统'
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
     const {SalaryGradeDashboard} = GlobalComponents
     const {SalaryGradeEditDetail} = GlobalComponents
     const {SalaryGradeViewDetail} = GlobalComponents
     
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
               <Link to={`/salaryGrade/${this.props.salaryGrade.id}/dashboard`}><Icon type="dashboard" /><span>仪表板</span></Link>
             </Menu.Item>
             

             {this.getNavMenuItems(this.props.salaryGrade.id)}
             <Menu.Item >
               <Link to={"/home"}><Icon type="home" /><span>回到主页</span></Link>
             </Menu.Item>
           </Menu>
         </Sider>
         <Layout>
           <Content style={{ margin: '24px 24px 0', height: '100%' }}>
             <Switch>
             
               <Route path="/salaryGrade/:id/dashboard" component={SalaryGradeDashboard} />
               
               <Route path="/salaryGrade/:id/editDetail" component={SalaryGradeEditDetail} />
               <Route path="/salaryGrade/:id/viewDetail" component={SalaryGradeViewDetail} /> 
               

               <Route path="/salaryGrade/:id/list/employeeList" component={this.getEmployeeSearch()} />
               <Route path="/salaryGrade/:id/list/employeeCreateForm" component={this.getEmployeeCreateForm()} />
               <Route path="/salaryGrade/:id/list/employeeUpdateForm" component={this.getEmployeeUpdateForm()} />

               <Route path="/salaryGrade/:id/list/employeeSalarySheetList" component={this.getEmployeeSalarySheetSearch()} />
               <Route path="/salaryGrade/:id/list/employeeSalarySheetCreateForm" component={this.getEmployeeSalarySheetCreateForm()} />
               <Route path="/salaryGrade/:id/list/employeeSalarySheetUpdateForm" component={this.getEmployeeSalarySheetUpdateForm()} />
              
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
  salaryGrade: state._salaryGrade,
  ...state,
}))(SalaryGradeBizApp)



