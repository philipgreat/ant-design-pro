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
import styles from './DecorationCountryCenter.app.less'


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

class DecorationCountryCenterBizApp extends React.PureComponent {
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
      return ['/decorationCountryCenter/']
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
          <span>全国中心</span>
        </span>}
      >

        <Menu.Item>
          <Link to={`/decorationCountryCenter/${objectId}/list/levelOneDepartmentList`}>一级部门</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/decorationCountryCenter/${objectId}/list/skillTypeList`}>技能类型</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/decorationCountryCenter/${objectId}/list/responsibilityTypeList`}>责任类型</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/decorationCountryCenter/${objectId}/list/terminationReasonList`}>雇佣终止的原因</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/decorationCountryCenter/${objectId}/list/terminationTypeList`}>雇佣终止类型</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/decorationCountryCenter/${objectId}/list/occupationTypeList`}>职位类型</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/decorationCountryCenter/${objectId}/list/leaveTypeList`}>请假类型</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/decorationCountryCenter/${objectId}/list/salaryGradeList`}>工资等级</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/decorationCountryCenter/${objectId}/list/interviewTypeList`}>面试类型</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/decorationCountryCenter/${objectId}/list/trainingCourseTypeList`}>培训课程类型</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/decorationCountryCenter/${objectId}/list/publicHolidayList`}>公共假日</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/decorationCountryCenter/${objectId}/list/employeeList`}>员工</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/decorationCountryCenter/${objectId}/list/instructorList`}>讲师</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/decorationCountryCenter/${objectId}/list/companyTrainingList`}>公司培训</Link>
        </Menu.Item>
      </SubMenu>
    )
  }


  getLevelOneDepartmentSearch = () => {
    const {LevelOneDepartmentSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._decorationCountryCenter.levelOneDepartmentList,
      count: state._decorationCountryCenter.levelOneDepartmentCount,
      currentPage: state._decorationCountryCenter.levelOneDepartmentCurrentPageNumber,
      searchFormParameters: state._decorationCountryCenter.levelOneDepartmentSearchFormParameters,
      loading: state._decorationCountryCenter.loading,
      owner: { type: '_decorationCountryCenter', id: state._decorationCountryCenter.id, listName: 'levelOneDepartmentList', ref:state._decorationCountryCenter, listDisplayName: '一级部门列表' }, // this is for model namespace and
    }))(LevelOneDepartmentSearch)
  }
  getLevelOneDepartmentCreateForm = () => {
   	const {LevelOneDepartmentCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._decorationCountryCenter.levelOneDepartmentList,
      count: state._decorationCountryCenter.levelOneDepartmentCount,
      currentPage: state._decorationCountryCenter.levelOneDepartmentCurrentPageNumber,
      searchFormParameters: state._decorationCountryCenter.levelOneDepartmentSearchFormParameters,
      loading: state._decorationCountryCenter.loading,
      owner: { type: '_decorationCountryCenter', id: state._decorationCountryCenter.id, listName: 'levelOneDepartmentList', ref:state._decorationCountryCenter, listDisplayName: '一级部门列表'}, // this is for model namespace and
    }))(LevelOneDepartmentCreateForm)
  }
  
  getLevelOneDepartmentUpdateForm = () => {
  	const {LevelOneDepartmentUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._decorationCountryCenter.selectedRows,
      currentUpdateIndex: state._decorationCountryCenter.currentUpdateIndex,
      owner: { type: '_decorationCountryCenter', id: state._decorationCountryCenter.id, listName: 'levelOneDepartmentList', ref:state._decorationCountryCenter, listDisplayName: '一级部门列表' }, // this is for model namespace and
    }))(LevelOneDepartmentUpdateForm)
  }

  getSkillTypeSearch = () => {
    const {SkillTypeSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._decorationCountryCenter.skillTypeList,
      count: state._decorationCountryCenter.skillTypeCount,
      currentPage: state._decorationCountryCenter.skillTypeCurrentPageNumber,
      searchFormParameters: state._decorationCountryCenter.skillTypeSearchFormParameters,
      loading: state._decorationCountryCenter.loading,
      owner: { type: '_decorationCountryCenter', id: state._decorationCountryCenter.id, listName: 'skillTypeList', ref:state._decorationCountryCenter, listDisplayName: '技能类型列表' }, // this is for model namespace and
    }))(SkillTypeSearch)
  }
  getSkillTypeCreateForm = () => {
   	const {SkillTypeCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._decorationCountryCenter.skillTypeList,
      count: state._decorationCountryCenter.skillTypeCount,
      currentPage: state._decorationCountryCenter.skillTypeCurrentPageNumber,
      searchFormParameters: state._decorationCountryCenter.skillTypeSearchFormParameters,
      loading: state._decorationCountryCenter.loading,
      owner: { type: '_decorationCountryCenter', id: state._decorationCountryCenter.id, listName: 'skillTypeList', ref:state._decorationCountryCenter, listDisplayName: '技能类型列表'}, // this is for model namespace and
    }))(SkillTypeCreateForm)
  }
  
  getSkillTypeUpdateForm = () => {
  	const {SkillTypeUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._decorationCountryCenter.selectedRows,
      currentUpdateIndex: state._decorationCountryCenter.currentUpdateIndex,
      owner: { type: '_decorationCountryCenter', id: state._decorationCountryCenter.id, listName: 'skillTypeList', ref:state._decorationCountryCenter, listDisplayName: '技能类型列表' }, // this is for model namespace and
    }))(SkillTypeUpdateForm)
  }

  getResponsibilityTypeSearch = () => {
    const {ResponsibilityTypeSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._decorationCountryCenter.responsibilityTypeList,
      count: state._decorationCountryCenter.responsibilityTypeCount,
      currentPage: state._decorationCountryCenter.responsibilityTypeCurrentPageNumber,
      searchFormParameters: state._decorationCountryCenter.responsibilityTypeSearchFormParameters,
      loading: state._decorationCountryCenter.loading,
      owner: { type: '_decorationCountryCenter', id: state._decorationCountryCenter.id, listName: 'responsibilityTypeList', ref:state._decorationCountryCenter, listDisplayName: '责任类型列表' }, // this is for model namespace and
    }))(ResponsibilityTypeSearch)
  }
  getResponsibilityTypeCreateForm = () => {
   	const {ResponsibilityTypeCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._decorationCountryCenter.responsibilityTypeList,
      count: state._decorationCountryCenter.responsibilityTypeCount,
      currentPage: state._decorationCountryCenter.responsibilityTypeCurrentPageNumber,
      searchFormParameters: state._decorationCountryCenter.responsibilityTypeSearchFormParameters,
      loading: state._decorationCountryCenter.loading,
      owner: { type: '_decorationCountryCenter', id: state._decorationCountryCenter.id, listName: 'responsibilityTypeList', ref:state._decorationCountryCenter, listDisplayName: '责任类型列表'}, // this is for model namespace and
    }))(ResponsibilityTypeCreateForm)
  }
  
  getResponsibilityTypeUpdateForm = () => {
  	const {ResponsibilityTypeUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._decorationCountryCenter.selectedRows,
      currentUpdateIndex: state._decorationCountryCenter.currentUpdateIndex,
      owner: { type: '_decorationCountryCenter', id: state._decorationCountryCenter.id, listName: 'responsibilityTypeList', ref:state._decorationCountryCenter, listDisplayName: '责任类型列表' }, // this is for model namespace and
    }))(ResponsibilityTypeUpdateForm)
  }

  getTerminationReasonSearch = () => {
    const {TerminationReasonSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._decorationCountryCenter.terminationReasonList,
      count: state._decorationCountryCenter.terminationReasonCount,
      currentPage: state._decorationCountryCenter.terminationReasonCurrentPageNumber,
      searchFormParameters: state._decorationCountryCenter.terminationReasonSearchFormParameters,
      loading: state._decorationCountryCenter.loading,
      owner: { type: '_decorationCountryCenter', id: state._decorationCountryCenter.id, listName: 'terminationReasonList', ref:state._decorationCountryCenter, listDisplayName: '雇佣终止的原因列表' }, // this is for model namespace and
    }))(TerminationReasonSearch)
  }
  getTerminationReasonCreateForm = () => {
   	const {TerminationReasonCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._decorationCountryCenter.terminationReasonList,
      count: state._decorationCountryCenter.terminationReasonCount,
      currentPage: state._decorationCountryCenter.terminationReasonCurrentPageNumber,
      searchFormParameters: state._decorationCountryCenter.terminationReasonSearchFormParameters,
      loading: state._decorationCountryCenter.loading,
      owner: { type: '_decorationCountryCenter', id: state._decorationCountryCenter.id, listName: 'terminationReasonList', ref:state._decorationCountryCenter, listDisplayName: '雇佣终止的原因列表'}, // this is for model namespace and
    }))(TerminationReasonCreateForm)
  }
  
  getTerminationReasonUpdateForm = () => {
  	const {TerminationReasonUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._decorationCountryCenter.selectedRows,
      currentUpdateIndex: state._decorationCountryCenter.currentUpdateIndex,
      owner: { type: '_decorationCountryCenter', id: state._decorationCountryCenter.id, listName: 'terminationReasonList', ref:state._decorationCountryCenter, listDisplayName: '雇佣终止的原因列表' }, // this is for model namespace and
    }))(TerminationReasonUpdateForm)
  }

  getTerminationTypeSearch = () => {
    const {TerminationTypeSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._decorationCountryCenter.terminationTypeList,
      count: state._decorationCountryCenter.terminationTypeCount,
      currentPage: state._decorationCountryCenter.terminationTypeCurrentPageNumber,
      searchFormParameters: state._decorationCountryCenter.terminationTypeSearchFormParameters,
      loading: state._decorationCountryCenter.loading,
      owner: { type: '_decorationCountryCenter', id: state._decorationCountryCenter.id, listName: 'terminationTypeList', ref:state._decorationCountryCenter, listDisplayName: '雇佣终止类型列表' }, // this is for model namespace and
    }))(TerminationTypeSearch)
  }
  getTerminationTypeCreateForm = () => {
   	const {TerminationTypeCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._decorationCountryCenter.terminationTypeList,
      count: state._decorationCountryCenter.terminationTypeCount,
      currentPage: state._decorationCountryCenter.terminationTypeCurrentPageNumber,
      searchFormParameters: state._decorationCountryCenter.terminationTypeSearchFormParameters,
      loading: state._decorationCountryCenter.loading,
      owner: { type: '_decorationCountryCenter', id: state._decorationCountryCenter.id, listName: 'terminationTypeList', ref:state._decorationCountryCenter, listDisplayName: '雇佣终止类型列表'}, // this is for model namespace and
    }))(TerminationTypeCreateForm)
  }
  
  getTerminationTypeUpdateForm = () => {
  	const {TerminationTypeUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._decorationCountryCenter.selectedRows,
      currentUpdateIndex: state._decorationCountryCenter.currentUpdateIndex,
      owner: { type: '_decorationCountryCenter', id: state._decorationCountryCenter.id, listName: 'terminationTypeList', ref:state._decorationCountryCenter, listDisplayName: '雇佣终止类型列表' }, // this is for model namespace and
    }))(TerminationTypeUpdateForm)
  }

  getOccupationTypeSearch = () => {
    const {OccupationTypeSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._decorationCountryCenter.occupationTypeList,
      count: state._decorationCountryCenter.occupationTypeCount,
      currentPage: state._decorationCountryCenter.occupationTypeCurrentPageNumber,
      searchFormParameters: state._decorationCountryCenter.occupationTypeSearchFormParameters,
      loading: state._decorationCountryCenter.loading,
      owner: { type: '_decorationCountryCenter', id: state._decorationCountryCenter.id, listName: 'occupationTypeList', ref:state._decorationCountryCenter, listDisplayName: '职位类型列表' }, // this is for model namespace and
    }))(OccupationTypeSearch)
  }
  getOccupationTypeCreateForm = () => {
   	const {OccupationTypeCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._decorationCountryCenter.occupationTypeList,
      count: state._decorationCountryCenter.occupationTypeCount,
      currentPage: state._decorationCountryCenter.occupationTypeCurrentPageNumber,
      searchFormParameters: state._decorationCountryCenter.occupationTypeSearchFormParameters,
      loading: state._decorationCountryCenter.loading,
      owner: { type: '_decorationCountryCenter', id: state._decorationCountryCenter.id, listName: 'occupationTypeList', ref:state._decorationCountryCenter, listDisplayName: '职位类型列表'}, // this is for model namespace and
    }))(OccupationTypeCreateForm)
  }
  
  getOccupationTypeUpdateForm = () => {
  	const {OccupationTypeUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._decorationCountryCenter.selectedRows,
      currentUpdateIndex: state._decorationCountryCenter.currentUpdateIndex,
      owner: { type: '_decorationCountryCenter', id: state._decorationCountryCenter.id, listName: 'occupationTypeList', ref:state._decorationCountryCenter, listDisplayName: '职位类型列表' }, // this is for model namespace and
    }))(OccupationTypeUpdateForm)
  }

  getLeaveTypeSearch = () => {
    const {LeaveTypeSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._decorationCountryCenter.leaveTypeList,
      count: state._decorationCountryCenter.leaveTypeCount,
      currentPage: state._decorationCountryCenter.leaveTypeCurrentPageNumber,
      searchFormParameters: state._decorationCountryCenter.leaveTypeSearchFormParameters,
      loading: state._decorationCountryCenter.loading,
      owner: { type: '_decorationCountryCenter', id: state._decorationCountryCenter.id, listName: 'leaveTypeList', ref:state._decorationCountryCenter, listDisplayName: '请假类型列表' }, // this is for model namespace and
    }))(LeaveTypeSearch)
  }
  getLeaveTypeCreateForm = () => {
   	const {LeaveTypeCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._decorationCountryCenter.leaveTypeList,
      count: state._decorationCountryCenter.leaveTypeCount,
      currentPage: state._decorationCountryCenter.leaveTypeCurrentPageNumber,
      searchFormParameters: state._decorationCountryCenter.leaveTypeSearchFormParameters,
      loading: state._decorationCountryCenter.loading,
      owner: { type: '_decorationCountryCenter', id: state._decorationCountryCenter.id, listName: 'leaveTypeList', ref:state._decorationCountryCenter, listDisplayName: '请假类型列表'}, // this is for model namespace and
    }))(LeaveTypeCreateForm)
  }
  
  getLeaveTypeUpdateForm = () => {
  	const {LeaveTypeUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._decorationCountryCenter.selectedRows,
      currentUpdateIndex: state._decorationCountryCenter.currentUpdateIndex,
      owner: { type: '_decorationCountryCenter', id: state._decorationCountryCenter.id, listName: 'leaveTypeList', ref:state._decorationCountryCenter, listDisplayName: '请假类型列表' }, // this is for model namespace and
    }))(LeaveTypeUpdateForm)
  }

  getSalaryGradeSearch = () => {
    const {SalaryGradeSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._decorationCountryCenter.salaryGradeList,
      count: state._decorationCountryCenter.salaryGradeCount,
      currentPage: state._decorationCountryCenter.salaryGradeCurrentPageNumber,
      searchFormParameters: state._decorationCountryCenter.salaryGradeSearchFormParameters,
      loading: state._decorationCountryCenter.loading,
      owner: { type: '_decorationCountryCenter', id: state._decorationCountryCenter.id, listName: 'salaryGradeList', ref:state._decorationCountryCenter, listDisplayName: '工资等级列表' }, // this is for model namespace and
    }))(SalaryGradeSearch)
  }
  getSalaryGradeCreateForm = () => {
   	const {SalaryGradeCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._decorationCountryCenter.salaryGradeList,
      count: state._decorationCountryCenter.salaryGradeCount,
      currentPage: state._decorationCountryCenter.salaryGradeCurrentPageNumber,
      searchFormParameters: state._decorationCountryCenter.salaryGradeSearchFormParameters,
      loading: state._decorationCountryCenter.loading,
      owner: { type: '_decorationCountryCenter', id: state._decorationCountryCenter.id, listName: 'salaryGradeList', ref:state._decorationCountryCenter, listDisplayName: '工资等级列表'}, // this is for model namespace and
    }))(SalaryGradeCreateForm)
  }
  
  getSalaryGradeUpdateForm = () => {
  	const {SalaryGradeUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._decorationCountryCenter.selectedRows,
      currentUpdateIndex: state._decorationCountryCenter.currentUpdateIndex,
      owner: { type: '_decorationCountryCenter', id: state._decorationCountryCenter.id, listName: 'salaryGradeList', ref:state._decorationCountryCenter, listDisplayName: '工资等级列表' }, // this is for model namespace and
    }))(SalaryGradeUpdateForm)
  }

  getInterviewTypeSearch = () => {
    const {InterviewTypeSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._decorationCountryCenter.interviewTypeList,
      count: state._decorationCountryCenter.interviewTypeCount,
      currentPage: state._decorationCountryCenter.interviewTypeCurrentPageNumber,
      searchFormParameters: state._decorationCountryCenter.interviewTypeSearchFormParameters,
      loading: state._decorationCountryCenter.loading,
      owner: { type: '_decorationCountryCenter', id: state._decorationCountryCenter.id, listName: 'interviewTypeList', ref:state._decorationCountryCenter, listDisplayName: '面试类型列表' }, // this is for model namespace and
    }))(InterviewTypeSearch)
  }
  getInterviewTypeCreateForm = () => {
   	const {InterviewTypeCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._decorationCountryCenter.interviewTypeList,
      count: state._decorationCountryCenter.interviewTypeCount,
      currentPage: state._decorationCountryCenter.interviewTypeCurrentPageNumber,
      searchFormParameters: state._decorationCountryCenter.interviewTypeSearchFormParameters,
      loading: state._decorationCountryCenter.loading,
      owner: { type: '_decorationCountryCenter', id: state._decorationCountryCenter.id, listName: 'interviewTypeList', ref:state._decorationCountryCenter, listDisplayName: '面试类型列表'}, // this is for model namespace and
    }))(InterviewTypeCreateForm)
  }
  
  getInterviewTypeUpdateForm = () => {
  	const {InterviewTypeUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._decorationCountryCenter.selectedRows,
      currentUpdateIndex: state._decorationCountryCenter.currentUpdateIndex,
      owner: { type: '_decorationCountryCenter', id: state._decorationCountryCenter.id, listName: 'interviewTypeList', ref:state._decorationCountryCenter, listDisplayName: '面试类型列表' }, // this is for model namespace and
    }))(InterviewTypeUpdateForm)
  }

  getTrainingCourseTypeSearch = () => {
    const {TrainingCourseTypeSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._decorationCountryCenter.trainingCourseTypeList,
      count: state._decorationCountryCenter.trainingCourseTypeCount,
      currentPage: state._decorationCountryCenter.trainingCourseTypeCurrentPageNumber,
      searchFormParameters: state._decorationCountryCenter.trainingCourseTypeSearchFormParameters,
      loading: state._decorationCountryCenter.loading,
      owner: { type: '_decorationCountryCenter', id: state._decorationCountryCenter.id, listName: 'trainingCourseTypeList', ref:state._decorationCountryCenter, listDisplayName: '培训课程类型列表' }, // this is for model namespace and
    }))(TrainingCourseTypeSearch)
  }
  getTrainingCourseTypeCreateForm = () => {
   	const {TrainingCourseTypeCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._decorationCountryCenter.trainingCourseTypeList,
      count: state._decorationCountryCenter.trainingCourseTypeCount,
      currentPage: state._decorationCountryCenter.trainingCourseTypeCurrentPageNumber,
      searchFormParameters: state._decorationCountryCenter.trainingCourseTypeSearchFormParameters,
      loading: state._decorationCountryCenter.loading,
      owner: { type: '_decorationCountryCenter', id: state._decorationCountryCenter.id, listName: 'trainingCourseTypeList', ref:state._decorationCountryCenter, listDisplayName: '培训课程类型列表'}, // this is for model namespace and
    }))(TrainingCourseTypeCreateForm)
  }
  
  getTrainingCourseTypeUpdateForm = () => {
  	const {TrainingCourseTypeUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._decorationCountryCenter.selectedRows,
      currentUpdateIndex: state._decorationCountryCenter.currentUpdateIndex,
      owner: { type: '_decorationCountryCenter', id: state._decorationCountryCenter.id, listName: 'trainingCourseTypeList', ref:state._decorationCountryCenter, listDisplayName: '培训课程类型列表' }, // this is for model namespace and
    }))(TrainingCourseTypeUpdateForm)
  }

  getPublicHolidaySearch = () => {
    const {PublicHolidaySearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._decorationCountryCenter.publicHolidayList,
      count: state._decorationCountryCenter.publicHolidayCount,
      currentPage: state._decorationCountryCenter.publicHolidayCurrentPageNumber,
      searchFormParameters: state._decorationCountryCenter.publicHolidaySearchFormParameters,
      loading: state._decorationCountryCenter.loading,
      owner: { type: '_decorationCountryCenter', id: state._decorationCountryCenter.id, listName: 'publicHolidayList', ref:state._decorationCountryCenter, listDisplayName: '公共假日列表' }, // this is for model namespace and
    }))(PublicHolidaySearch)
  }
  getPublicHolidayCreateForm = () => {
   	const {PublicHolidayCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._decorationCountryCenter.publicHolidayList,
      count: state._decorationCountryCenter.publicHolidayCount,
      currentPage: state._decorationCountryCenter.publicHolidayCurrentPageNumber,
      searchFormParameters: state._decorationCountryCenter.publicHolidaySearchFormParameters,
      loading: state._decorationCountryCenter.loading,
      owner: { type: '_decorationCountryCenter', id: state._decorationCountryCenter.id, listName: 'publicHolidayList', ref:state._decorationCountryCenter, listDisplayName: '公共假日列表'}, // this is for model namespace and
    }))(PublicHolidayCreateForm)
  }
  
  getPublicHolidayUpdateForm = () => {
  	const {PublicHolidayUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._decorationCountryCenter.selectedRows,
      currentUpdateIndex: state._decorationCountryCenter.currentUpdateIndex,
      owner: { type: '_decorationCountryCenter', id: state._decorationCountryCenter.id, listName: 'publicHolidayList', ref:state._decorationCountryCenter, listDisplayName: '公共假日列表' }, // this is for model namespace and
    }))(PublicHolidayUpdateForm)
  }

  getEmployeeSearch = () => {
    const {EmployeeSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._decorationCountryCenter.employeeList,
      count: state._decorationCountryCenter.employeeCount,
      currentPage: state._decorationCountryCenter.employeeCurrentPageNumber,
      searchFormParameters: state._decorationCountryCenter.employeeSearchFormParameters,
      loading: state._decorationCountryCenter.loading,
      owner: { type: '_decorationCountryCenter', id: state._decorationCountryCenter.id, listName: 'employeeList', ref:state._decorationCountryCenter, listDisplayName: '员工列表' }, // this is for model namespace and
    }))(EmployeeSearch)
  }
  getEmployeeCreateForm = () => {
   	const {EmployeeCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._decorationCountryCenter.employeeList,
      count: state._decorationCountryCenter.employeeCount,
      currentPage: state._decorationCountryCenter.employeeCurrentPageNumber,
      searchFormParameters: state._decorationCountryCenter.employeeSearchFormParameters,
      loading: state._decorationCountryCenter.loading,
      owner: { type: '_decorationCountryCenter', id: state._decorationCountryCenter.id, listName: 'employeeList', ref:state._decorationCountryCenter, listDisplayName: '员工列表'}, // this is for model namespace and
    }))(EmployeeCreateForm)
  }
  
  getEmployeeUpdateForm = () => {
  	const {EmployeeUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._decorationCountryCenter.selectedRows,
      currentUpdateIndex: state._decorationCountryCenter.currentUpdateIndex,
      owner: { type: '_decorationCountryCenter', id: state._decorationCountryCenter.id, listName: 'employeeList', ref:state._decorationCountryCenter, listDisplayName: '员工列表' }, // this is for model namespace and
    }))(EmployeeUpdateForm)
  }

  getInstructorSearch = () => {
    const {InstructorSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._decorationCountryCenter.instructorList,
      count: state._decorationCountryCenter.instructorCount,
      currentPage: state._decorationCountryCenter.instructorCurrentPageNumber,
      searchFormParameters: state._decorationCountryCenter.instructorSearchFormParameters,
      loading: state._decorationCountryCenter.loading,
      owner: { type: '_decorationCountryCenter', id: state._decorationCountryCenter.id, listName: 'instructorList', ref:state._decorationCountryCenter, listDisplayName: '讲师列表' }, // this is for model namespace and
    }))(InstructorSearch)
  }
  getInstructorCreateForm = () => {
   	const {InstructorCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._decorationCountryCenter.instructorList,
      count: state._decorationCountryCenter.instructorCount,
      currentPage: state._decorationCountryCenter.instructorCurrentPageNumber,
      searchFormParameters: state._decorationCountryCenter.instructorSearchFormParameters,
      loading: state._decorationCountryCenter.loading,
      owner: { type: '_decorationCountryCenter', id: state._decorationCountryCenter.id, listName: 'instructorList', ref:state._decorationCountryCenter, listDisplayName: '讲师列表'}, // this is for model namespace and
    }))(InstructorCreateForm)
  }
  
  getInstructorUpdateForm = () => {
  	const {InstructorUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._decorationCountryCenter.selectedRows,
      currentUpdateIndex: state._decorationCountryCenter.currentUpdateIndex,
      owner: { type: '_decorationCountryCenter', id: state._decorationCountryCenter.id, listName: 'instructorList', ref:state._decorationCountryCenter, listDisplayName: '讲师列表' }, // this is for model namespace and
    }))(InstructorUpdateForm)
  }

  getCompanyTrainingSearch = () => {
    const {CompanyTrainingSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._decorationCountryCenter.companyTrainingList,
      count: state._decorationCountryCenter.companyTrainingCount,
      currentPage: state._decorationCountryCenter.companyTrainingCurrentPageNumber,
      searchFormParameters: state._decorationCountryCenter.companyTrainingSearchFormParameters,
      loading: state._decorationCountryCenter.loading,
      owner: { type: '_decorationCountryCenter', id: state._decorationCountryCenter.id, listName: 'companyTrainingList', ref:state._decorationCountryCenter, listDisplayName: '公司培训列表' }, // this is for model namespace and
    }))(CompanyTrainingSearch)
  }
  getCompanyTrainingCreateForm = () => {
   	const {CompanyTrainingCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._decorationCountryCenter.companyTrainingList,
      count: state._decorationCountryCenter.companyTrainingCount,
      currentPage: state._decorationCountryCenter.companyTrainingCurrentPageNumber,
      searchFormParameters: state._decorationCountryCenter.companyTrainingSearchFormParameters,
      loading: state._decorationCountryCenter.loading,
      owner: { type: '_decorationCountryCenter', id: state._decorationCountryCenter.id, listName: 'companyTrainingList', ref:state._decorationCountryCenter, listDisplayName: '公司培训列表'}, // this is for model namespace and
    }))(CompanyTrainingCreateForm)
  }
  
  getCompanyTrainingUpdateForm = () => {
  	const {CompanyTrainingUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._decorationCountryCenter.selectedRows,
      currentUpdateIndex: state._decorationCountryCenter.currentUpdateIndex,
      owner: { type: '_decorationCountryCenter', id: state._decorationCountryCenter.id, listName: 'companyTrainingList', ref:state._decorationCountryCenter, listDisplayName: '公司培训列表' }, // this is for model namespace and
    }))(CompanyTrainingUpdateForm)
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
     const {DecorationCountryCenterDashboard} = GlobalComponents
     const {DecorationCountryCenterEditDetail} = GlobalComponents
     const {DecorationCountryCenterViewDetail} = GlobalComponents
     
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
               <Link to={`/decorationCountryCenter/${this.props.decorationCountryCenter.id}/dashboard`}><Icon type="dashboard" /><span>仪表板</span></Link>
             </Menu.Item>
             

             {this.getNavMenuItems(this.props.decorationCountryCenter.id)}
             <Menu.Item >
               <Link to={"/home"}><Icon type="home" /><span>回到主页</span></Link>
             </Menu.Item>
           </Menu>
         </Sider>
         <Layout>
           <Content style={{ margin: '24px 24px 0', height: '100%' }}>
             <Switch>
             
               <Route path="/decorationCountryCenter/:id/dashboard" component={DecorationCountryCenterDashboard} />
               
               <Route path="/decorationCountryCenter/:id/editDetail" component={DecorationCountryCenterEditDetail} />
               <Route path="/decorationCountryCenter/:id/viewDetail" component={DecorationCountryCenterViewDetail} /> 
               

               <Route path="/decorationCountryCenter/:id/list/levelOneDepartmentList" component={this.getLevelOneDepartmentSearch()} />
               <Route path="/decorationCountryCenter/:id/list/levelOneDepartmentCreateForm" component={this.getLevelOneDepartmentCreateForm()} />
               <Route path="/decorationCountryCenter/:id/list/levelOneDepartmentUpdateForm" component={this.getLevelOneDepartmentUpdateForm()} />

               <Route path="/decorationCountryCenter/:id/list/skillTypeList" component={this.getSkillTypeSearch()} />
               <Route path="/decorationCountryCenter/:id/list/skillTypeCreateForm" component={this.getSkillTypeCreateForm()} />
               <Route path="/decorationCountryCenter/:id/list/skillTypeUpdateForm" component={this.getSkillTypeUpdateForm()} />

               <Route path="/decorationCountryCenter/:id/list/responsibilityTypeList" component={this.getResponsibilityTypeSearch()} />
               <Route path="/decorationCountryCenter/:id/list/responsibilityTypeCreateForm" component={this.getResponsibilityTypeCreateForm()} />
               <Route path="/decorationCountryCenter/:id/list/responsibilityTypeUpdateForm" component={this.getResponsibilityTypeUpdateForm()} />

               <Route path="/decorationCountryCenter/:id/list/terminationReasonList" component={this.getTerminationReasonSearch()} />
               <Route path="/decorationCountryCenter/:id/list/terminationReasonCreateForm" component={this.getTerminationReasonCreateForm()} />
               <Route path="/decorationCountryCenter/:id/list/terminationReasonUpdateForm" component={this.getTerminationReasonUpdateForm()} />

               <Route path="/decorationCountryCenter/:id/list/terminationTypeList" component={this.getTerminationTypeSearch()} />
               <Route path="/decorationCountryCenter/:id/list/terminationTypeCreateForm" component={this.getTerminationTypeCreateForm()} />
               <Route path="/decorationCountryCenter/:id/list/terminationTypeUpdateForm" component={this.getTerminationTypeUpdateForm()} />

               <Route path="/decorationCountryCenter/:id/list/occupationTypeList" component={this.getOccupationTypeSearch()} />
               <Route path="/decorationCountryCenter/:id/list/occupationTypeCreateForm" component={this.getOccupationTypeCreateForm()} />
               <Route path="/decorationCountryCenter/:id/list/occupationTypeUpdateForm" component={this.getOccupationTypeUpdateForm()} />

               <Route path="/decorationCountryCenter/:id/list/leaveTypeList" component={this.getLeaveTypeSearch()} />
               <Route path="/decorationCountryCenter/:id/list/leaveTypeCreateForm" component={this.getLeaveTypeCreateForm()} />
               <Route path="/decorationCountryCenter/:id/list/leaveTypeUpdateForm" component={this.getLeaveTypeUpdateForm()} />

               <Route path="/decorationCountryCenter/:id/list/salaryGradeList" component={this.getSalaryGradeSearch()} />
               <Route path="/decorationCountryCenter/:id/list/salaryGradeCreateForm" component={this.getSalaryGradeCreateForm()} />
               <Route path="/decorationCountryCenter/:id/list/salaryGradeUpdateForm" component={this.getSalaryGradeUpdateForm()} />

               <Route path="/decorationCountryCenter/:id/list/interviewTypeList" component={this.getInterviewTypeSearch()} />
               <Route path="/decorationCountryCenter/:id/list/interviewTypeCreateForm" component={this.getInterviewTypeCreateForm()} />
               <Route path="/decorationCountryCenter/:id/list/interviewTypeUpdateForm" component={this.getInterviewTypeUpdateForm()} />

               <Route path="/decorationCountryCenter/:id/list/trainingCourseTypeList" component={this.getTrainingCourseTypeSearch()} />
               <Route path="/decorationCountryCenter/:id/list/trainingCourseTypeCreateForm" component={this.getTrainingCourseTypeCreateForm()} />
               <Route path="/decorationCountryCenter/:id/list/trainingCourseTypeUpdateForm" component={this.getTrainingCourseTypeUpdateForm()} />

               <Route path="/decorationCountryCenter/:id/list/publicHolidayList" component={this.getPublicHolidaySearch()} />
               <Route path="/decorationCountryCenter/:id/list/publicHolidayCreateForm" component={this.getPublicHolidayCreateForm()} />
               <Route path="/decorationCountryCenter/:id/list/publicHolidayUpdateForm" component={this.getPublicHolidayUpdateForm()} />

               <Route path="/decorationCountryCenter/:id/list/employeeList" component={this.getEmployeeSearch()} />
               <Route path="/decorationCountryCenter/:id/list/employeeCreateForm" component={this.getEmployeeCreateForm()} />
               <Route path="/decorationCountryCenter/:id/list/employeeUpdateForm" component={this.getEmployeeUpdateForm()} />

               <Route path="/decorationCountryCenter/:id/list/instructorList" component={this.getInstructorSearch()} />
               <Route path="/decorationCountryCenter/:id/list/instructorCreateForm" component={this.getInstructorCreateForm()} />
               <Route path="/decorationCountryCenter/:id/list/instructorUpdateForm" component={this.getInstructorUpdateForm()} />

               <Route path="/decorationCountryCenter/:id/list/companyTrainingList" component={this.getCompanyTrainingSearch()} />
               <Route path="/decorationCountryCenter/:id/list/companyTrainingCreateForm" component={this.getCompanyTrainingCreateForm()} />
               <Route path="/decorationCountryCenter/:id/list/companyTrainingUpdateForm" component={this.getCompanyTrainingUpdateForm()} />
              
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
  decorationCountryCenter: state._decorationCountryCenter,
  ...state,
}))(DecorationCountryCenterBizApp)



