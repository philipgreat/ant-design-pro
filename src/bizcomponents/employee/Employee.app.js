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
import styles from './Employee.app.less'


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

class EmployeeBizApp extends React.PureComponent {
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
      return ['/employee/']
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
          <span>员工</span>
        </span>}
      >

        <Menu.Item>
          <Link to={`/employee/${objectId}/list/employeeCompanyTrainingList`}>员工参与的公司培训</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/employee/${objectId}/list/employeeSkillList`}>员工技能</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/employee/${objectId}/list/employeePerformanceList`}>员工绩效</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/employee/${objectId}/list/employeeWorkExperienceList`}>员工工作经验</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/employee/${objectId}/list/employeeLeaveList`}>请假记录</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/employee/${objectId}/list/employeeInterviewList`}>员工面试</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/employee/${objectId}/list/employeeAttendanceList`}>员工考勤</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/employee/${objectId}/list/employeeQualifierList`}>员工资质</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/employee/${objectId}/list/employeeEducationList`}>员工教育</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/employee/${objectId}/list/employeeAwardList`}>员工嘉奖</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/employee/${objectId}/list/employeeSalarySheetList`}>工资单</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/employee/${objectId}/list/payingOffList`}>工资支付</Link>
        </Menu.Item>
      </SubMenu>
    )
  }


  getEmployeeCompanyTrainingSearch = () => {
    const {EmployeeCompanyTrainingSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._employee.employeeCompanyTrainingList,
      count: state._employee.employeeCompanyTrainingCount,
      currentPage: state._employee.employeeCompanyTrainingCurrentPageNumber,
      searchFormParameters: state._employee.employeeCompanyTrainingSearchFormParameters,
      loading: state._employee.loading,
      owner: { type: '_employee', id: state._employee.id, listName: 'employeeCompanyTrainingList', ref:state._employee, listDisplayName: '员工参与的公司培训列表' }, // this is for model namespace and
    }))(EmployeeCompanyTrainingSearch)
  }
  getEmployeeCompanyTrainingCreateForm = () => {
   	const {EmployeeCompanyTrainingCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._employee.employeeCompanyTrainingList,
      count: state._employee.employeeCompanyTrainingCount,
      currentPage: state._employee.employeeCompanyTrainingCurrentPageNumber,
      searchFormParameters: state._employee.employeeCompanyTrainingSearchFormParameters,
      loading: state._employee.loading,
      owner: { type: '_employee', id: state._employee.id, listName: 'employeeCompanyTrainingList', ref:state._employee, listDisplayName: '员工参与的公司培训列表'}, // this is for model namespace and
    }))(EmployeeCompanyTrainingCreateForm)
  }
  
  getEmployeeCompanyTrainingUpdateForm = () => {
  	const {EmployeeCompanyTrainingUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._employee.selectedRows,
      currentUpdateIndex: state._employee.currentUpdateIndex,
      owner: { type: '_employee', id: state._employee.id, listName: 'employeeCompanyTrainingList', ref:state._employee, listDisplayName: '员工参与的公司培训列表' }, // this is for model namespace and
    }))(EmployeeCompanyTrainingUpdateForm)
  }

  getEmployeeSkillSearch = () => {
    const {EmployeeSkillSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._employee.employeeSkillList,
      count: state._employee.employeeSkillCount,
      currentPage: state._employee.employeeSkillCurrentPageNumber,
      searchFormParameters: state._employee.employeeSkillSearchFormParameters,
      loading: state._employee.loading,
      owner: { type: '_employee', id: state._employee.id, listName: 'employeeSkillList', ref:state._employee, listDisplayName: '员工技能列表' }, // this is for model namespace and
    }))(EmployeeSkillSearch)
  }
  getEmployeeSkillCreateForm = () => {
   	const {EmployeeSkillCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._employee.employeeSkillList,
      count: state._employee.employeeSkillCount,
      currentPage: state._employee.employeeSkillCurrentPageNumber,
      searchFormParameters: state._employee.employeeSkillSearchFormParameters,
      loading: state._employee.loading,
      owner: { type: '_employee', id: state._employee.id, listName: 'employeeSkillList', ref:state._employee, listDisplayName: '员工技能列表'}, // this is for model namespace and
    }))(EmployeeSkillCreateForm)
  }
  
  getEmployeeSkillUpdateForm = () => {
  	const {EmployeeSkillUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._employee.selectedRows,
      currentUpdateIndex: state._employee.currentUpdateIndex,
      owner: { type: '_employee', id: state._employee.id, listName: 'employeeSkillList', ref:state._employee, listDisplayName: '员工技能列表' }, // this is for model namespace and
    }))(EmployeeSkillUpdateForm)
  }

  getEmployeePerformanceSearch = () => {
    const {EmployeePerformanceSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._employee.employeePerformanceList,
      count: state._employee.employeePerformanceCount,
      currentPage: state._employee.employeePerformanceCurrentPageNumber,
      searchFormParameters: state._employee.employeePerformanceSearchFormParameters,
      loading: state._employee.loading,
      owner: { type: '_employee', id: state._employee.id, listName: 'employeePerformanceList', ref:state._employee, listDisplayName: '员工绩效列表' }, // this is for model namespace and
    }))(EmployeePerformanceSearch)
  }
  getEmployeePerformanceCreateForm = () => {
   	const {EmployeePerformanceCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._employee.employeePerformanceList,
      count: state._employee.employeePerformanceCount,
      currentPage: state._employee.employeePerformanceCurrentPageNumber,
      searchFormParameters: state._employee.employeePerformanceSearchFormParameters,
      loading: state._employee.loading,
      owner: { type: '_employee', id: state._employee.id, listName: 'employeePerformanceList', ref:state._employee, listDisplayName: '员工绩效列表'}, // this is for model namespace and
    }))(EmployeePerformanceCreateForm)
  }
  
  getEmployeePerformanceUpdateForm = () => {
  	const {EmployeePerformanceUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._employee.selectedRows,
      currentUpdateIndex: state._employee.currentUpdateIndex,
      owner: { type: '_employee', id: state._employee.id, listName: 'employeePerformanceList', ref:state._employee, listDisplayName: '员工绩效列表' }, // this is for model namespace and
    }))(EmployeePerformanceUpdateForm)
  }

  getEmployeeWorkExperienceSearch = () => {
    const {EmployeeWorkExperienceSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._employee.employeeWorkExperienceList,
      count: state._employee.employeeWorkExperienceCount,
      currentPage: state._employee.employeeWorkExperienceCurrentPageNumber,
      searchFormParameters: state._employee.employeeWorkExperienceSearchFormParameters,
      loading: state._employee.loading,
      owner: { type: '_employee', id: state._employee.id, listName: 'employeeWorkExperienceList', ref:state._employee, listDisplayName: '员工工作经验列表' }, // this is for model namespace and
    }))(EmployeeWorkExperienceSearch)
  }
  getEmployeeWorkExperienceCreateForm = () => {
   	const {EmployeeWorkExperienceCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._employee.employeeWorkExperienceList,
      count: state._employee.employeeWorkExperienceCount,
      currentPage: state._employee.employeeWorkExperienceCurrentPageNumber,
      searchFormParameters: state._employee.employeeWorkExperienceSearchFormParameters,
      loading: state._employee.loading,
      owner: { type: '_employee', id: state._employee.id, listName: 'employeeWorkExperienceList', ref:state._employee, listDisplayName: '员工工作经验列表'}, // this is for model namespace and
    }))(EmployeeWorkExperienceCreateForm)
  }
  
  getEmployeeWorkExperienceUpdateForm = () => {
  	const {EmployeeWorkExperienceUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._employee.selectedRows,
      currentUpdateIndex: state._employee.currentUpdateIndex,
      owner: { type: '_employee', id: state._employee.id, listName: 'employeeWorkExperienceList', ref:state._employee, listDisplayName: '员工工作经验列表' }, // this is for model namespace and
    }))(EmployeeWorkExperienceUpdateForm)
  }

  getEmployeeLeaveSearch = () => {
    const {EmployeeLeaveSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._employee.employeeLeaveList,
      count: state._employee.employeeLeaveCount,
      currentPage: state._employee.employeeLeaveCurrentPageNumber,
      searchFormParameters: state._employee.employeeLeaveSearchFormParameters,
      loading: state._employee.loading,
      owner: { type: '_employee', id: state._employee.id, listName: 'employeeLeaveList', ref:state._employee, listDisplayName: '请假记录列表' }, // this is for model namespace and
    }))(EmployeeLeaveSearch)
  }
  getEmployeeLeaveCreateForm = () => {
   	const {EmployeeLeaveCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._employee.employeeLeaveList,
      count: state._employee.employeeLeaveCount,
      currentPage: state._employee.employeeLeaveCurrentPageNumber,
      searchFormParameters: state._employee.employeeLeaveSearchFormParameters,
      loading: state._employee.loading,
      owner: { type: '_employee', id: state._employee.id, listName: 'employeeLeaveList', ref:state._employee, listDisplayName: '请假记录列表'}, // this is for model namespace and
    }))(EmployeeLeaveCreateForm)
  }
  
  getEmployeeLeaveUpdateForm = () => {
  	const {EmployeeLeaveUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._employee.selectedRows,
      currentUpdateIndex: state._employee.currentUpdateIndex,
      owner: { type: '_employee', id: state._employee.id, listName: 'employeeLeaveList', ref:state._employee, listDisplayName: '请假记录列表' }, // this is for model namespace and
    }))(EmployeeLeaveUpdateForm)
  }

  getEmployeeInterviewSearch = () => {
    const {EmployeeInterviewSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._employee.employeeInterviewList,
      count: state._employee.employeeInterviewCount,
      currentPage: state._employee.employeeInterviewCurrentPageNumber,
      searchFormParameters: state._employee.employeeInterviewSearchFormParameters,
      loading: state._employee.loading,
      owner: { type: '_employee', id: state._employee.id, listName: 'employeeInterviewList', ref:state._employee, listDisplayName: '员工面试列表' }, // this is for model namespace and
    }))(EmployeeInterviewSearch)
  }
  getEmployeeInterviewCreateForm = () => {
   	const {EmployeeInterviewCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._employee.employeeInterviewList,
      count: state._employee.employeeInterviewCount,
      currentPage: state._employee.employeeInterviewCurrentPageNumber,
      searchFormParameters: state._employee.employeeInterviewSearchFormParameters,
      loading: state._employee.loading,
      owner: { type: '_employee', id: state._employee.id, listName: 'employeeInterviewList', ref:state._employee, listDisplayName: '员工面试列表'}, // this is for model namespace and
    }))(EmployeeInterviewCreateForm)
  }
  
  getEmployeeInterviewUpdateForm = () => {
  	const {EmployeeInterviewUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._employee.selectedRows,
      currentUpdateIndex: state._employee.currentUpdateIndex,
      owner: { type: '_employee', id: state._employee.id, listName: 'employeeInterviewList', ref:state._employee, listDisplayName: '员工面试列表' }, // this is for model namespace and
    }))(EmployeeInterviewUpdateForm)
  }

  getEmployeeAttendanceSearch = () => {
    const {EmployeeAttendanceSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._employee.employeeAttendanceList,
      count: state._employee.employeeAttendanceCount,
      currentPage: state._employee.employeeAttendanceCurrentPageNumber,
      searchFormParameters: state._employee.employeeAttendanceSearchFormParameters,
      loading: state._employee.loading,
      owner: { type: '_employee', id: state._employee.id, listName: 'employeeAttendanceList', ref:state._employee, listDisplayName: '员工考勤列表' }, // this is for model namespace and
    }))(EmployeeAttendanceSearch)
  }
  getEmployeeAttendanceCreateForm = () => {
   	const {EmployeeAttendanceCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._employee.employeeAttendanceList,
      count: state._employee.employeeAttendanceCount,
      currentPage: state._employee.employeeAttendanceCurrentPageNumber,
      searchFormParameters: state._employee.employeeAttendanceSearchFormParameters,
      loading: state._employee.loading,
      owner: { type: '_employee', id: state._employee.id, listName: 'employeeAttendanceList', ref:state._employee, listDisplayName: '员工考勤列表'}, // this is for model namespace and
    }))(EmployeeAttendanceCreateForm)
  }
  
  getEmployeeAttendanceUpdateForm = () => {
  	const {EmployeeAttendanceUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._employee.selectedRows,
      currentUpdateIndex: state._employee.currentUpdateIndex,
      owner: { type: '_employee', id: state._employee.id, listName: 'employeeAttendanceList', ref:state._employee, listDisplayName: '员工考勤列表' }, // this is for model namespace and
    }))(EmployeeAttendanceUpdateForm)
  }

  getEmployeeQualifierSearch = () => {
    const {EmployeeQualifierSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._employee.employeeQualifierList,
      count: state._employee.employeeQualifierCount,
      currentPage: state._employee.employeeQualifierCurrentPageNumber,
      searchFormParameters: state._employee.employeeQualifierSearchFormParameters,
      loading: state._employee.loading,
      owner: { type: '_employee', id: state._employee.id, listName: 'employeeQualifierList', ref:state._employee, listDisplayName: '员工资质列表' }, // this is for model namespace and
    }))(EmployeeQualifierSearch)
  }
  getEmployeeQualifierCreateForm = () => {
   	const {EmployeeQualifierCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._employee.employeeQualifierList,
      count: state._employee.employeeQualifierCount,
      currentPage: state._employee.employeeQualifierCurrentPageNumber,
      searchFormParameters: state._employee.employeeQualifierSearchFormParameters,
      loading: state._employee.loading,
      owner: { type: '_employee', id: state._employee.id, listName: 'employeeQualifierList', ref:state._employee, listDisplayName: '员工资质列表'}, // this is for model namespace and
    }))(EmployeeQualifierCreateForm)
  }
  
  getEmployeeQualifierUpdateForm = () => {
  	const {EmployeeQualifierUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._employee.selectedRows,
      currentUpdateIndex: state._employee.currentUpdateIndex,
      owner: { type: '_employee', id: state._employee.id, listName: 'employeeQualifierList', ref:state._employee, listDisplayName: '员工资质列表' }, // this is for model namespace and
    }))(EmployeeQualifierUpdateForm)
  }

  getEmployeeEducationSearch = () => {
    const {EmployeeEducationSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._employee.employeeEducationList,
      count: state._employee.employeeEducationCount,
      currentPage: state._employee.employeeEducationCurrentPageNumber,
      searchFormParameters: state._employee.employeeEducationSearchFormParameters,
      loading: state._employee.loading,
      owner: { type: '_employee', id: state._employee.id, listName: 'employeeEducationList', ref:state._employee, listDisplayName: '员工教育列表' }, // this is for model namespace and
    }))(EmployeeEducationSearch)
  }
  getEmployeeEducationCreateForm = () => {
   	const {EmployeeEducationCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._employee.employeeEducationList,
      count: state._employee.employeeEducationCount,
      currentPage: state._employee.employeeEducationCurrentPageNumber,
      searchFormParameters: state._employee.employeeEducationSearchFormParameters,
      loading: state._employee.loading,
      owner: { type: '_employee', id: state._employee.id, listName: 'employeeEducationList', ref:state._employee, listDisplayName: '员工教育列表'}, // this is for model namespace and
    }))(EmployeeEducationCreateForm)
  }
  
  getEmployeeEducationUpdateForm = () => {
  	const {EmployeeEducationUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._employee.selectedRows,
      currentUpdateIndex: state._employee.currentUpdateIndex,
      owner: { type: '_employee', id: state._employee.id, listName: 'employeeEducationList', ref:state._employee, listDisplayName: '员工教育列表' }, // this is for model namespace and
    }))(EmployeeEducationUpdateForm)
  }

  getEmployeeAwardSearch = () => {
    const {EmployeeAwardSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._employee.employeeAwardList,
      count: state._employee.employeeAwardCount,
      currentPage: state._employee.employeeAwardCurrentPageNumber,
      searchFormParameters: state._employee.employeeAwardSearchFormParameters,
      loading: state._employee.loading,
      owner: { type: '_employee', id: state._employee.id, listName: 'employeeAwardList', ref:state._employee, listDisplayName: '员工嘉奖列表' }, // this is for model namespace and
    }))(EmployeeAwardSearch)
  }
  getEmployeeAwardCreateForm = () => {
   	const {EmployeeAwardCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._employee.employeeAwardList,
      count: state._employee.employeeAwardCount,
      currentPage: state._employee.employeeAwardCurrentPageNumber,
      searchFormParameters: state._employee.employeeAwardSearchFormParameters,
      loading: state._employee.loading,
      owner: { type: '_employee', id: state._employee.id, listName: 'employeeAwardList', ref:state._employee, listDisplayName: '员工嘉奖列表'}, // this is for model namespace and
    }))(EmployeeAwardCreateForm)
  }
  
  getEmployeeAwardUpdateForm = () => {
  	const {EmployeeAwardUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._employee.selectedRows,
      currentUpdateIndex: state._employee.currentUpdateIndex,
      owner: { type: '_employee', id: state._employee.id, listName: 'employeeAwardList', ref:state._employee, listDisplayName: '员工嘉奖列表' }, // this is for model namespace and
    }))(EmployeeAwardUpdateForm)
  }

  getEmployeeSalarySheetSearch = () => {
    const {EmployeeSalarySheetSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._employee.employeeSalarySheetList,
      count: state._employee.employeeSalarySheetCount,
      currentPage: state._employee.employeeSalarySheetCurrentPageNumber,
      searchFormParameters: state._employee.employeeSalarySheetSearchFormParameters,
      loading: state._employee.loading,
      owner: { type: '_employee', id: state._employee.id, listName: 'employeeSalarySheetList', ref:state._employee, listDisplayName: '工资单列表' }, // this is for model namespace and
    }))(EmployeeSalarySheetSearch)
  }
  getEmployeeSalarySheetCreateForm = () => {
   	const {EmployeeSalarySheetCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._employee.employeeSalarySheetList,
      count: state._employee.employeeSalarySheetCount,
      currentPage: state._employee.employeeSalarySheetCurrentPageNumber,
      searchFormParameters: state._employee.employeeSalarySheetSearchFormParameters,
      loading: state._employee.loading,
      owner: { type: '_employee', id: state._employee.id, listName: 'employeeSalarySheetList', ref:state._employee, listDisplayName: '工资单列表'}, // this is for model namespace and
    }))(EmployeeSalarySheetCreateForm)
  }
  
  getEmployeeSalarySheetUpdateForm = () => {
  	const {EmployeeSalarySheetUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._employee.selectedRows,
      currentUpdateIndex: state._employee.currentUpdateIndex,
      owner: { type: '_employee', id: state._employee.id, listName: 'employeeSalarySheetList', ref:state._employee, listDisplayName: '工资单列表' }, // this is for model namespace and
    }))(EmployeeSalarySheetUpdateForm)
  }

  getPayingOffSearch = () => {
    const {PayingOffSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._employee.payingOffList,
      count: state._employee.payingOffCount,
      currentPage: state._employee.payingOffCurrentPageNumber,
      searchFormParameters: state._employee.payingOffSearchFormParameters,
      loading: state._employee.loading,
      owner: { type: '_employee', id: state._employee.id, listName: 'payingOffList', ref:state._employee, listDisplayName: '工资支付列表' }, // this is for model namespace and
    }))(PayingOffSearch)
  }
  getPayingOffCreateForm = () => {
   	const {PayingOffCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._employee.payingOffList,
      count: state._employee.payingOffCount,
      currentPage: state._employee.payingOffCurrentPageNumber,
      searchFormParameters: state._employee.payingOffSearchFormParameters,
      loading: state._employee.loading,
      owner: { type: '_employee', id: state._employee.id, listName: 'payingOffList', ref:state._employee, listDisplayName: '工资支付列表'}, // this is for model namespace and
    }))(PayingOffCreateForm)
  }
  
  getPayingOffUpdateForm = () => {
  	const {PayingOffUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._employee.selectedRows,
      currentUpdateIndex: state._employee.currentUpdateIndex,
      owner: { type: '_employee', id: state._employee.id, listName: 'payingOffList', ref:state._employee, listDisplayName: '工资支付列表' }, // this is for model namespace and
    }))(PayingOffUpdateForm)
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
     const {EmployeeDashboard} = GlobalComponents
     const {EmployeeEditDetail} = GlobalComponents
     const {EmployeeViewDetail} = GlobalComponents
     
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
               <Link to={`/employee/${this.props.employee.id}/dashboard`}><Icon type="dashboard" /><span>仪表板</span></Link>
             </Menu.Item>
             

             {this.getNavMenuItems(this.props.employee.id)}
             <Menu.Item >
               <Link to={"/home"}><Icon type="home" /><span>回到主页</span></Link>
             </Menu.Item>
           </Menu>
         </Sider>
         <Layout>
           <Content style={{ margin: '24px 24px 0', height: '100%' }}>
             <Switch>
             
               <Route path="/employee/:id/dashboard" component={EmployeeDashboard} />
               
               <Route path="/employee/:id/editDetail" component={EmployeeEditDetail} />
               <Route path="/employee/:id/viewDetail" component={EmployeeViewDetail} /> 
               

               <Route path="/employee/:id/list/employeeCompanyTrainingList" component={this.getEmployeeCompanyTrainingSearch()} />
               <Route path="/employee/:id/list/employeeCompanyTrainingCreateForm" component={this.getEmployeeCompanyTrainingCreateForm()} />
               <Route path="/employee/:id/list/employeeCompanyTrainingUpdateForm" component={this.getEmployeeCompanyTrainingUpdateForm()} />

               <Route path="/employee/:id/list/employeeSkillList" component={this.getEmployeeSkillSearch()} />
               <Route path="/employee/:id/list/employeeSkillCreateForm" component={this.getEmployeeSkillCreateForm()} />
               <Route path="/employee/:id/list/employeeSkillUpdateForm" component={this.getEmployeeSkillUpdateForm()} />

               <Route path="/employee/:id/list/employeePerformanceList" component={this.getEmployeePerformanceSearch()} />
               <Route path="/employee/:id/list/employeePerformanceCreateForm" component={this.getEmployeePerformanceCreateForm()} />
               <Route path="/employee/:id/list/employeePerformanceUpdateForm" component={this.getEmployeePerformanceUpdateForm()} />

               <Route path="/employee/:id/list/employeeWorkExperienceList" component={this.getEmployeeWorkExperienceSearch()} />
               <Route path="/employee/:id/list/employeeWorkExperienceCreateForm" component={this.getEmployeeWorkExperienceCreateForm()} />
               <Route path="/employee/:id/list/employeeWorkExperienceUpdateForm" component={this.getEmployeeWorkExperienceUpdateForm()} />

               <Route path="/employee/:id/list/employeeLeaveList" component={this.getEmployeeLeaveSearch()} />
               <Route path="/employee/:id/list/employeeLeaveCreateForm" component={this.getEmployeeLeaveCreateForm()} />
               <Route path="/employee/:id/list/employeeLeaveUpdateForm" component={this.getEmployeeLeaveUpdateForm()} />

               <Route path="/employee/:id/list/employeeInterviewList" component={this.getEmployeeInterviewSearch()} />
               <Route path="/employee/:id/list/employeeInterviewCreateForm" component={this.getEmployeeInterviewCreateForm()} />
               <Route path="/employee/:id/list/employeeInterviewUpdateForm" component={this.getEmployeeInterviewUpdateForm()} />

               <Route path="/employee/:id/list/employeeAttendanceList" component={this.getEmployeeAttendanceSearch()} />
               <Route path="/employee/:id/list/employeeAttendanceCreateForm" component={this.getEmployeeAttendanceCreateForm()} />
               <Route path="/employee/:id/list/employeeAttendanceUpdateForm" component={this.getEmployeeAttendanceUpdateForm()} />

               <Route path="/employee/:id/list/employeeQualifierList" component={this.getEmployeeQualifierSearch()} />
               <Route path="/employee/:id/list/employeeQualifierCreateForm" component={this.getEmployeeQualifierCreateForm()} />
               <Route path="/employee/:id/list/employeeQualifierUpdateForm" component={this.getEmployeeQualifierUpdateForm()} />

               <Route path="/employee/:id/list/employeeEducationList" component={this.getEmployeeEducationSearch()} />
               <Route path="/employee/:id/list/employeeEducationCreateForm" component={this.getEmployeeEducationCreateForm()} />
               <Route path="/employee/:id/list/employeeEducationUpdateForm" component={this.getEmployeeEducationUpdateForm()} />

               <Route path="/employee/:id/list/employeeAwardList" component={this.getEmployeeAwardSearch()} />
               <Route path="/employee/:id/list/employeeAwardCreateForm" component={this.getEmployeeAwardCreateForm()} />
               <Route path="/employee/:id/list/employeeAwardUpdateForm" component={this.getEmployeeAwardUpdateForm()} />

               <Route path="/employee/:id/list/employeeSalarySheetList" component={this.getEmployeeSalarySheetSearch()} />
               <Route path="/employee/:id/list/employeeSalarySheetCreateForm" component={this.getEmployeeSalarySheetCreateForm()} />
               <Route path="/employee/:id/list/employeeSalarySheetUpdateForm" component={this.getEmployeeSalarySheetUpdateForm()} />

               <Route path="/employee/:id/list/payingOffList" component={this.getPayingOffSearch()} />
               <Route path="/employee/:id/list/payingOffCreateForm" component={this.getPayingOffCreateForm()} />
               <Route path="/employee/:id/list/payingOffUpdateForm" component={this.getPayingOffUpdateForm()} />
              
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
  employee: state._employee,
  ...state,
}))(EmployeeBizApp)



