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
import styles from './VehicleServiceCompanyEmployee.app.less'


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

class VehicleServiceCompanyEmployeeBizApp extends React.PureComponent {
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
      return ['/vehicleServiceCompanyEmployee/']
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
          <span>商户员工</span>
        </span>}
      >

        <Menu.Item>
          <Link to={`/vehicleServiceCompanyEmployee/${objectId}/list/serviceOrderFilterList`}>服务单状态类型</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/vehicleServiceCompanyEmployee/${objectId}/list/employeeDrivingLicenseList`}>员工驾驶证</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/vehicleServiceCompanyEmployee/${objectId}/list/vehicleInspectionOrderServiceLogList`}>年检订单执行日志</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/vehicleServiceCompanyEmployee/${objectId}/list/serviceVehicleMovementC2mList`}>收车服务</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/vehicleServiceCompanyEmployee/${objectId}/list/serviceVehicleMovementM2mListAsResponsibleWorker`}>移车服务</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/vehicleServiceCompanyEmployee/${objectId}/list/serviceVehicleMovementM2mListAsDriver`}>移车服务</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/vehicleServiceCompanyEmployee/${objectId}/list/serviceVehicleMovementM2mListAsReceiver`}>移车服务</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/vehicleServiceCompanyEmployee/${objectId}/list/serviceVehicleMovementM2cList`}>还车服务</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/vehicleServiceCompanyEmployee/${objectId}/list/serviceFileMovementC2mList`}>收件服务</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/vehicleServiceCompanyEmployee/${objectId}/list/serviceFileMovementM2mListAsResponsibleWorker`}>移件服务</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/vehicleServiceCompanyEmployee/${objectId}/list/serviceFileMovementM2mListAsSender`}>移件服务</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/vehicleServiceCompanyEmployee/${objectId}/list/serviceFileMovementM2mListAsReceiver`}>移件服务</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/vehicleServiceCompanyEmployee/${objectId}/list/serviceFileMovementM2cList`}>还件服务</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/vehicleServiceCompanyEmployee/${objectId}/list/serviceInsuranceForInspectionList`}>保险服务</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/vehicleServiceCompanyEmployee/${objectId}/list/serviceVehicleInspectionList`}>车辆上线检测</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/vehicleServiceCompanyEmployee/${objectId}/list/serviceFileInspectionList`}>6年免检服务</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/vehicleServiceCompanyEmployee/${objectId}/list/serviceVehicleRepairingList`}>维修服务</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/vehicleServiceCompanyEmployee/${objectId}/list/serviceCompanyAccountList`}>服务商户对账单</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/vehicleServiceCompanyEmployee/${objectId}/list/repairingCompanyAccountList`}>修理厂对账单</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/vehicleServiceCompanyEmployee/${objectId}/list/insuranceServiceAccountList`}>保险服务对账单</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/vehicleServiceCompanyEmployee/${objectId}/list/inspectionStationAccountList`}>检测站对账单</Link>
        </Menu.Item>
      </SubMenu>
    )
  }


  getServiceOrderFilterSearch = () => {
    const {ServiceOrderFilterSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompanyEmployee.serviceOrderFilterList,
      count: state._vehicleServiceCompanyEmployee.serviceOrderFilterCount,
      currentPage: state._vehicleServiceCompanyEmployee.serviceOrderFilterCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompanyEmployee.serviceOrderFilterSearchFormParameters,
      loading: state._vehicleServiceCompanyEmployee.loading,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, listName: 'serviceOrderFilterList' }, // this is for model namespace and
    }))(ServiceOrderFilterSearch)
  }
  getServiceOrderFilterCreateForm = () => {
   	const {ServiceOrderFilterCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompanyEmployee.serviceOrderFilterList,
      count: state._vehicleServiceCompanyEmployee.serviceOrderFilterCount,
      currentPage: state._vehicleServiceCompanyEmployee.serviceOrderFilterCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompanyEmployee.serviceOrderFilterSearchFormParameters,
      loading: state._vehicleServiceCompanyEmployee.loading,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, listName: 'serviceOrderFilterList'}, // this is for model namespace and
    }))(ServiceOrderFilterCreateForm)
  }
  
  getServiceOrderFilterUpdateForm = () => {
  	const {ServiceOrderFilterUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleServiceCompanyEmployee.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompanyEmployee.currentUpdateIndex,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, listName: 'serviceOrderFilterList' }, // this is for model namespace and
    }))(ServiceOrderFilterUpdateForm)
  }

  getEmployeeDrivingLicenseSearch = () => {
    const {EmployeeDrivingLicenseSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompanyEmployee.employeeDrivingLicenseList,
      count: state._vehicleServiceCompanyEmployee.employeeDrivingLicenseCount,
      currentPage: state._vehicleServiceCompanyEmployee.employeeDrivingLicenseCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompanyEmployee.employeeDrivingLicenseSearchFormParameters,
      loading: state._vehicleServiceCompanyEmployee.loading,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, listName: 'employeeDrivingLicenseList' }, // this is for model namespace and
    }))(EmployeeDrivingLicenseSearch)
  }
  getEmployeeDrivingLicenseCreateForm = () => {
   	const {EmployeeDrivingLicenseCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompanyEmployee.employeeDrivingLicenseList,
      count: state._vehicleServiceCompanyEmployee.employeeDrivingLicenseCount,
      currentPage: state._vehicleServiceCompanyEmployee.employeeDrivingLicenseCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompanyEmployee.employeeDrivingLicenseSearchFormParameters,
      loading: state._vehicleServiceCompanyEmployee.loading,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, listName: 'employeeDrivingLicenseList'}, // this is for model namespace and
    }))(EmployeeDrivingLicenseCreateForm)
  }
  
  getEmployeeDrivingLicenseUpdateForm = () => {
  	const {EmployeeDrivingLicenseUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleServiceCompanyEmployee.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompanyEmployee.currentUpdateIndex,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, listName: 'employeeDrivingLicenseList' }, // this is for model namespace and
    }))(EmployeeDrivingLicenseUpdateForm)
  }

  getVehicleInspectionOrderServiceLogSearch = () => {
    const {VehicleInspectionOrderServiceLogSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompanyEmployee.vehicleInspectionOrderServiceLogList,
      count: state._vehicleServiceCompanyEmployee.vehicleInspectionOrderServiceLogCount,
      currentPage: state._vehicleServiceCompanyEmployee.vehicleInspectionOrderServiceLogCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompanyEmployee.vehicleInspectionOrderServiceLogSearchFormParameters,
      loading: state._vehicleServiceCompanyEmployee.loading,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, listName: 'vehicleInspectionOrderServiceLogList' }, // this is for model namespace and
    }))(VehicleInspectionOrderServiceLogSearch)
  }
  getVehicleInspectionOrderServiceLogCreateForm = () => {
   	const {VehicleInspectionOrderServiceLogCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompanyEmployee.vehicleInspectionOrderServiceLogList,
      count: state._vehicleServiceCompanyEmployee.vehicleInspectionOrderServiceLogCount,
      currentPage: state._vehicleServiceCompanyEmployee.vehicleInspectionOrderServiceLogCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompanyEmployee.vehicleInspectionOrderServiceLogSearchFormParameters,
      loading: state._vehicleServiceCompanyEmployee.loading,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, listName: 'vehicleInspectionOrderServiceLogList'}, // this is for model namespace and
    }))(VehicleInspectionOrderServiceLogCreateForm)
  }
  
  getVehicleInspectionOrderServiceLogUpdateForm = () => {
  	const {VehicleInspectionOrderServiceLogUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleServiceCompanyEmployee.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompanyEmployee.currentUpdateIndex,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, listName: 'vehicleInspectionOrderServiceLogList' }, // this is for model namespace and
    }))(VehicleInspectionOrderServiceLogUpdateForm)
  }

  getServiceVehicleMovementC2mSearch = () => {
    const {ServiceVehicleMovementC2mSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompanyEmployee.serviceVehicleMovementC2mList,
      count: state._vehicleServiceCompanyEmployee.serviceVehicleMovementC2mCount,
      currentPage: state._vehicleServiceCompanyEmployee.serviceVehicleMovementC2mCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompanyEmployee.serviceVehicleMovementC2mSearchFormParameters,
      loading: state._vehicleServiceCompanyEmployee.loading,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, listName: 'serviceVehicleMovementC2mList' }, // this is for model namespace and
    }))(ServiceVehicleMovementC2mSearch)
  }
  getServiceVehicleMovementC2mCreateForm = () => {
   	const {ServiceVehicleMovementC2mCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompanyEmployee.serviceVehicleMovementC2mList,
      count: state._vehicleServiceCompanyEmployee.serviceVehicleMovementC2mCount,
      currentPage: state._vehicleServiceCompanyEmployee.serviceVehicleMovementC2mCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompanyEmployee.serviceVehicleMovementC2mSearchFormParameters,
      loading: state._vehicleServiceCompanyEmployee.loading,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, listName: 'serviceVehicleMovementC2mList'}, // this is for model namespace and
    }))(ServiceVehicleMovementC2mCreateForm)
  }
  
  getServiceVehicleMovementC2mUpdateForm = () => {
  	const {ServiceVehicleMovementC2mUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleServiceCompanyEmployee.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompanyEmployee.currentUpdateIndex,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, listName: 'serviceVehicleMovementC2mList' }, // this is for model namespace and
    }))(ServiceVehicleMovementC2mUpdateForm)
  }

  getServiceVehicleMovementM2mAsResponsibleWorkerSearch = () => {
    const {ServiceVehicleMovementM2mSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompanyEmployee.serviceVehicleMovementM2mListAsResponsibleWorker,
      count: state._vehicleServiceCompanyEmployee.serviceVehicleMovementM2mAsResponsibleWorkerCount,
      currentPage: state._vehicleServiceCompanyEmployee.serviceVehicleMovementM2mAsResponsibleWorkerCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompanyEmployee.serviceVehicleMovementM2mAsResponsibleWorkerSearchFormParameters,
      loading: state._vehicleServiceCompanyEmployee.loading,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, listName: 'serviceVehicleMovementM2mListAsResponsibleWorker' }, // this is for model namespace and
    }))(ServiceVehicleMovementM2mSearch)
  }
  getServiceVehicleMovementM2mAsResponsibleWorkerCreateForm = () => {
   	const {ServiceVehicleMovementM2mCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompanyEmployee.serviceVehicleMovementM2mListAsResponsibleWorker,
      count: state._vehicleServiceCompanyEmployee.serviceVehicleMovementM2mAsResponsibleWorkerCount,
      currentPage: state._vehicleServiceCompanyEmployee.serviceVehicleMovementM2mAsResponsibleWorkerCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompanyEmployee.serviceVehicleMovementM2mAsResponsibleWorkerSearchFormParameters,
      loading: state._vehicleServiceCompanyEmployee.loading,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, listName: 'serviceVehicleMovementM2mListAsResponsibleWorker'}, // this is for model namespace and
    }))(ServiceVehicleMovementM2mCreateForm)
  }
  
  getServiceVehicleMovementM2mAsResponsibleWorkerUpdateForm = () => {
  	const {ServiceVehicleMovementM2mUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleServiceCompanyEmployee.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompanyEmployee.currentUpdateIndex,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, listName: 'serviceVehicleMovementM2mListAsResponsibleWorker' }, // this is for model namespace and
    }))(ServiceVehicleMovementM2mUpdateForm)
  }

  getServiceVehicleMovementM2mAsDriverSearch = () => {
    const {ServiceVehicleMovementM2mSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompanyEmployee.serviceVehicleMovementM2mListAsDriver,
      count: state._vehicleServiceCompanyEmployee.serviceVehicleMovementM2mAsDriverCount,
      currentPage: state._vehicleServiceCompanyEmployee.serviceVehicleMovementM2mAsDriverCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompanyEmployee.serviceVehicleMovementM2mAsDriverSearchFormParameters,
      loading: state._vehicleServiceCompanyEmployee.loading,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, listName: 'serviceVehicleMovementM2mListAsDriver' }, // this is for model namespace and
    }))(ServiceVehicleMovementM2mSearch)
  }
  getServiceVehicleMovementM2mAsDriverCreateForm = () => {
   	const {ServiceVehicleMovementM2mCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompanyEmployee.serviceVehicleMovementM2mListAsDriver,
      count: state._vehicleServiceCompanyEmployee.serviceVehicleMovementM2mAsDriverCount,
      currentPage: state._vehicleServiceCompanyEmployee.serviceVehicleMovementM2mAsDriverCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompanyEmployee.serviceVehicleMovementM2mAsDriverSearchFormParameters,
      loading: state._vehicleServiceCompanyEmployee.loading,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, listName: 'serviceVehicleMovementM2mListAsDriver'}, // this is for model namespace and
    }))(ServiceVehicleMovementM2mCreateForm)
  }
  
  getServiceVehicleMovementM2mAsDriverUpdateForm = () => {
  	const {ServiceVehicleMovementM2mUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleServiceCompanyEmployee.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompanyEmployee.currentUpdateIndex,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, listName: 'serviceVehicleMovementM2mListAsDriver' }, // this is for model namespace and
    }))(ServiceVehicleMovementM2mUpdateForm)
  }

  getServiceVehicleMovementM2mAsReceiverSearch = () => {
    const {ServiceVehicleMovementM2mSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompanyEmployee.serviceVehicleMovementM2mListAsReceiver,
      count: state._vehicleServiceCompanyEmployee.serviceVehicleMovementM2mAsReceiverCount,
      currentPage: state._vehicleServiceCompanyEmployee.serviceVehicleMovementM2mAsReceiverCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompanyEmployee.serviceVehicleMovementM2mAsReceiverSearchFormParameters,
      loading: state._vehicleServiceCompanyEmployee.loading,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, listName: 'serviceVehicleMovementM2mListAsReceiver' }, // this is for model namespace and
    }))(ServiceVehicleMovementM2mSearch)
  }
  getServiceVehicleMovementM2mAsReceiverCreateForm = () => {
   	const {ServiceVehicleMovementM2mCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompanyEmployee.serviceVehicleMovementM2mListAsReceiver,
      count: state._vehicleServiceCompanyEmployee.serviceVehicleMovementM2mAsReceiverCount,
      currentPage: state._vehicleServiceCompanyEmployee.serviceVehicleMovementM2mAsReceiverCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompanyEmployee.serviceVehicleMovementM2mAsReceiverSearchFormParameters,
      loading: state._vehicleServiceCompanyEmployee.loading,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, listName: 'serviceVehicleMovementM2mListAsReceiver'}, // this is for model namespace and
    }))(ServiceVehicleMovementM2mCreateForm)
  }
  
  getServiceVehicleMovementM2mAsReceiverUpdateForm = () => {
  	const {ServiceVehicleMovementM2mUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleServiceCompanyEmployee.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompanyEmployee.currentUpdateIndex,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, listName: 'serviceVehicleMovementM2mListAsReceiver' }, // this is for model namespace and
    }))(ServiceVehicleMovementM2mUpdateForm)
  }

  getServiceVehicleMovementM2cSearch = () => {
    const {ServiceVehicleMovementM2cSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompanyEmployee.serviceVehicleMovementM2cList,
      count: state._vehicleServiceCompanyEmployee.serviceVehicleMovementM2cCount,
      currentPage: state._vehicleServiceCompanyEmployee.serviceVehicleMovementM2cCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompanyEmployee.serviceVehicleMovementM2cSearchFormParameters,
      loading: state._vehicleServiceCompanyEmployee.loading,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, listName: 'serviceVehicleMovementM2cList' }, // this is for model namespace and
    }))(ServiceVehicleMovementM2cSearch)
  }
  getServiceVehicleMovementM2cCreateForm = () => {
   	const {ServiceVehicleMovementM2cCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompanyEmployee.serviceVehicleMovementM2cList,
      count: state._vehicleServiceCompanyEmployee.serviceVehicleMovementM2cCount,
      currentPage: state._vehicleServiceCompanyEmployee.serviceVehicleMovementM2cCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompanyEmployee.serviceVehicleMovementM2cSearchFormParameters,
      loading: state._vehicleServiceCompanyEmployee.loading,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, listName: 'serviceVehicleMovementM2cList'}, // this is for model namespace and
    }))(ServiceVehicleMovementM2cCreateForm)
  }
  
  getServiceVehicleMovementM2cUpdateForm = () => {
  	const {ServiceVehicleMovementM2cUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleServiceCompanyEmployee.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompanyEmployee.currentUpdateIndex,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, listName: 'serviceVehicleMovementM2cList' }, // this is for model namespace and
    }))(ServiceVehicleMovementM2cUpdateForm)
  }

  getServiceFileMovementC2mSearch = () => {
    const {ServiceFileMovementC2mSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompanyEmployee.serviceFileMovementC2mList,
      count: state._vehicleServiceCompanyEmployee.serviceFileMovementC2mCount,
      currentPage: state._vehicleServiceCompanyEmployee.serviceFileMovementC2mCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompanyEmployee.serviceFileMovementC2mSearchFormParameters,
      loading: state._vehicleServiceCompanyEmployee.loading,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, listName: 'serviceFileMovementC2mList' }, // this is for model namespace and
    }))(ServiceFileMovementC2mSearch)
  }
  getServiceFileMovementC2mCreateForm = () => {
   	const {ServiceFileMovementC2mCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompanyEmployee.serviceFileMovementC2mList,
      count: state._vehicleServiceCompanyEmployee.serviceFileMovementC2mCount,
      currentPage: state._vehicleServiceCompanyEmployee.serviceFileMovementC2mCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompanyEmployee.serviceFileMovementC2mSearchFormParameters,
      loading: state._vehicleServiceCompanyEmployee.loading,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, listName: 'serviceFileMovementC2mList'}, // this is for model namespace and
    }))(ServiceFileMovementC2mCreateForm)
  }
  
  getServiceFileMovementC2mUpdateForm = () => {
  	const {ServiceFileMovementC2mUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleServiceCompanyEmployee.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompanyEmployee.currentUpdateIndex,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, listName: 'serviceFileMovementC2mList' }, // this is for model namespace and
    }))(ServiceFileMovementC2mUpdateForm)
  }

  getServiceFileMovementM2mAsResponsibleWorkerSearch = () => {
    const {ServiceFileMovementM2mSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompanyEmployee.serviceFileMovementM2mListAsResponsibleWorker,
      count: state._vehicleServiceCompanyEmployee.serviceFileMovementM2mAsResponsibleWorkerCount,
      currentPage: state._vehicleServiceCompanyEmployee.serviceFileMovementM2mAsResponsibleWorkerCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompanyEmployee.serviceFileMovementM2mAsResponsibleWorkerSearchFormParameters,
      loading: state._vehicleServiceCompanyEmployee.loading,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, listName: 'serviceFileMovementM2mListAsResponsibleWorker' }, // this is for model namespace and
    }))(ServiceFileMovementM2mSearch)
  }
  getServiceFileMovementM2mAsResponsibleWorkerCreateForm = () => {
   	const {ServiceFileMovementM2mCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompanyEmployee.serviceFileMovementM2mListAsResponsibleWorker,
      count: state._vehicleServiceCompanyEmployee.serviceFileMovementM2mAsResponsibleWorkerCount,
      currentPage: state._vehicleServiceCompanyEmployee.serviceFileMovementM2mAsResponsibleWorkerCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompanyEmployee.serviceFileMovementM2mAsResponsibleWorkerSearchFormParameters,
      loading: state._vehicleServiceCompanyEmployee.loading,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, listName: 'serviceFileMovementM2mListAsResponsibleWorker'}, // this is for model namespace and
    }))(ServiceFileMovementM2mCreateForm)
  }
  
  getServiceFileMovementM2mAsResponsibleWorkerUpdateForm = () => {
  	const {ServiceFileMovementM2mUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleServiceCompanyEmployee.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompanyEmployee.currentUpdateIndex,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, listName: 'serviceFileMovementM2mListAsResponsibleWorker' }, // this is for model namespace and
    }))(ServiceFileMovementM2mUpdateForm)
  }

  getServiceFileMovementM2mAsSenderSearch = () => {
    const {ServiceFileMovementM2mSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompanyEmployee.serviceFileMovementM2mListAsSender,
      count: state._vehicleServiceCompanyEmployee.serviceFileMovementM2mAsSenderCount,
      currentPage: state._vehicleServiceCompanyEmployee.serviceFileMovementM2mAsSenderCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompanyEmployee.serviceFileMovementM2mAsSenderSearchFormParameters,
      loading: state._vehicleServiceCompanyEmployee.loading,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, listName: 'serviceFileMovementM2mListAsSender' }, // this is for model namespace and
    }))(ServiceFileMovementM2mSearch)
  }
  getServiceFileMovementM2mAsSenderCreateForm = () => {
   	const {ServiceFileMovementM2mCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompanyEmployee.serviceFileMovementM2mListAsSender,
      count: state._vehicleServiceCompanyEmployee.serviceFileMovementM2mAsSenderCount,
      currentPage: state._vehicleServiceCompanyEmployee.serviceFileMovementM2mAsSenderCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompanyEmployee.serviceFileMovementM2mAsSenderSearchFormParameters,
      loading: state._vehicleServiceCompanyEmployee.loading,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, listName: 'serviceFileMovementM2mListAsSender'}, // this is for model namespace and
    }))(ServiceFileMovementM2mCreateForm)
  }
  
  getServiceFileMovementM2mAsSenderUpdateForm = () => {
  	const {ServiceFileMovementM2mUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleServiceCompanyEmployee.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompanyEmployee.currentUpdateIndex,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, listName: 'serviceFileMovementM2mListAsSender' }, // this is for model namespace and
    }))(ServiceFileMovementM2mUpdateForm)
  }

  getServiceFileMovementM2mAsReceiverSearch = () => {
    const {ServiceFileMovementM2mSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompanyEmployee.serviceFileMovementM2mListAsReceiver,
      count: state._vehicleServiceCompanyEmployee.serviceFileMovementM2mAsReceiverCount,
      currentPage: state._vehicleServiceCompanyEmployee.serviceFileMovementM2mAsReceiverCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompanyEmployee.serviceFileMovementM2mAsReceiverSearchFormParameters,
      loading: state._vehicleServiceCompanyEmployee.loading,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, listName: 'serviceFileMovementM2mListAsReceiver' }, // this is for model namespace and
    }))(ServiceFileMovementM2mSearch)
  }
  getServiceFileMovementM2mAsReceiverCreateForm = () => {
   	const {ServiceFileMovementM2mCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompanyEmployee.serviceFileMovementM2mListAsReceiver,
      count: state._vehicleServiceCompanyEmployee.serviceFileMovementM2mAsReceiverCount,
      currentPage: state._vehicleServiceCompanyEmployee.serviceFileMovementM2mAsReceiverCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompanyEmployee.serviceFileMovementM2mAsReceiverSearchFormParameters,
      loading: state._vehicleServiceCompanyEmployee.loading,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, listName: 'serviceFileMovementM2mListAsReceiver'}, // this is for model namespace and
    }))(ServiceFileMovementM2mCreateForm)
  }
  
  getServiceFileMovementM2mAsReceiverUpdateForm = () => {
  	const {ServiceFileMovementM2mUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleServiceCompanyEmployee.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompanyEmployee.currentUpdateIndex,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, listName: 'serviceFileMovementM2mListAsReceiver' }, // this is for model namespace and
    }))(ServiceFileMovementM2mUpdateForm)
  }

  getServiceFileMovementM2cSearch = () => {
    const {ServiceFileMovementM2cSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompanyEmployee.serviceFileMovementM2cList,
      count: state._vehicleServiceCompanyEmployee.serviceFileMovementM2cCount,
      currentPage: state._vehicleServiceCompanyEmployee.serviceFileMovementM2cCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompanyEmployee.serviceFileMovementM2cSearchFormParameters,
      loading: state._vehicleServiceCompanyEmployee.loading,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, listName: 'serviceFileMovementM2cList' }, // this is for model namespace and
    }))(ServiceFileMovementM2cSearch)
  }
  getServiceFileMovementM2cCreateForm = () => {
   	const {ServiceFileMovementM2cCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompanyEmployee.serviceFileMovementM2cList,
      count: state._vehicleServiceCompanyEmployee.serviceFileMovementM2cCount,
      currentPage: state._vehicleServiceCompanyEmployee.serviceFileMovementM2cCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompanyEmployee.serviceFileMovementM2cSearchFormParameters,
      loading: state._vehicleServiceCompanyEmployee.loading,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, listName: 'serviceFileMovementM2cList'}, // this is for model namespace and
    }))(ServiceFileMovementM2cCreateForm)
  }
  
  getServiceFileMovementM2cUpdateForm = () => {
  	const {ServiceFileMovementM2cUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleServiceCompanyEmployee.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompanyEmployee.currentUpdateIndex,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, listName: 'serviceFileMovementM2cList' }, // this is for model namespace and
    }))(ServiceFileMovementM2cUpdateForm)
  }

  getServiceInsuranceForInspectionSearch = () => {
    const {ServiceInsuranceForInspectionSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompanyEmployee.serviceInsuranceForInspectionList,
      count: state._vehicleServiceCompanyEmployee.serviceInsuranceForInspectionCount,
      currentPage: state._vehicleServiceCompanyEmployee.serviceInsuranceForInspectionCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompanyEmployee.serviceInsuranceForInspectionSearchFormParameters,
      loading: state._vehicleServiceCompanyEmployee.loading,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, listName: 'serviceInsuranceForInspectionList' }, // this is for model namespace and
    }))(ServiceInsuranceForInspectionSearch)
  }
  getServiceInsuranceForInspectionCreateForm = () => {
   	const {ServiceInsuranceForInspectionCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompanyEmployee.serviceInsuranceForInspectionList,
      count: state._vehicleServiceCompanyEmployee.serviceInsuranceForInspectionCount,
      currentPage: state._vehicleServiceCompanyEmployee.serviceInsuranceForInspectionCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompanyEmployee.serviceInsuranceForInspectionSearchFormParameters,
      loading: state._vehicleServiceCompanyEmployee.loading,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, listName: 'serviceInsuranceForInspectionList'}, // this is for model namespace and
    }))(ServiceInsuranceForInspectionCreateForm)
  }
  
  getServiceInsuranceForInspectionUpdateForm = () => {
  	const {ServiceInsuranceForInspectionUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleServiceCompanyEmployee.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompanyEmployee.currentUpdateIndex,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, listName: 'serviceInsuranceForInspectionList' }, // this is for model namespace and
    }))(ServiceInsuranceForInspectionUpdateForm)
  }

  getServiceVehicleInspectionSearch = () => {
    const {ServiceVehicleInspectionSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompanyEmployee.serviceVehicleInspectionList,
      count: state._vehicleServiceCompanyEmployee.serviceVehicleInspectionCount,
      currentPage: state._vehicleServiceCompanyEmployee.serviceVehicleInspectionCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompanyEmployee.serviceVehicleInspectionSearchFormParameters,
      loading: state._vehicleServiceCompanyEmployee.loading,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, listName: 'serviceVehicleInspectionList' }, // this is for model namespace and
    }))(ServiceVehicleInspectionSearch)
  }
  getServiceVehicleInspectionCreateForm = () => {
   	const {ServiceVehicleInspectionCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompanyEmployee.serviceVehicleInspectionList,
      count: state._vehicleServiceCompanyEmployee.serviceVehicleInspectionCount,
      currentPage: state._vehicleServiceCompanyEmployee.serviceVehicleInspectionCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompanyEmployee.serviceVehicleInspectionSearchFormParameters,
      loading: state._vehicleServiceCompanyEmployee.loading,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, listName: 'serviceVehicleInspectionList'}, // this is for model namespace and
    }))(ServiceVehicleInspectionCreateForm)
  }
  
  getServiceVehicleInspectionUpdateForm = () => {
  	const {ServiceVehicleInspectionUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleServiceCompanyEmployee.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompanyEmployee.currentUpdateIndex,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, listName: 'serviceVehicleInspectionList' }, // this is for model namespace and
    }))(ServiceVehicleInspectionUpdateForm)
  }

  getServiceFileInspectionSearch = () => {
    const {ServiceFileInspectionSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompanyEmployee.serviceFileInspectionList,
      count: state._vehicleServiceCompanyEmployee.serviceFileInspectionCount,
      currentPage: state._vehicleServiceCompanyEmployee.serviceFileInspectionCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompanyEmployee.serviceFileInspectionSearchFormParameters,
      loading: state._vehicleServiceCompanyEmployee.loading,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, listName: 'serviceFileInspectionList' }, // this is for model namespace and
    }))(ServiceFileInspectionSearch)
  }
  getServiceFileInspectionCreateForm = () => {
   	const {ServiceFileInspectionCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompanyEmployee.serviceFileInspectionList,
      count: state._vehicleServiceCompanyEmployee.serviceFileInspectionCount,
      currentPage: state._vehicleServiceCompanyEmployee.serviceFileInspectionCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompanyEmployee.serviceFileInspectionSearchFormParameters,
      loading: state._vehicleServiceCompanyEmployee.loading,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, listName: 'serviceFileInspectionList'}, // this is for model namespace and
    }))(ServiceFileInspectionCreateForm)
  }
  
  getServiceFileInspectionUpdateForm = () => {
  	const {ServiceFileInspectionUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleServiceCompanyEmployee.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompanyEmployee.currentUpdateIndex,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, listName: 'serviceFileInspectionList' }, // this is for model namespace and
    }))(ServiceFileInspectionUpdateForm)
  }

  getServiceVehicleRepairingSearch = () => {
    const {ServiceVehicleRepairingSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompanyEmployee.serviceVehicleRepairingList,
      count: state._vehicleServiceCompanyEmployee.serviceVehicleRepairingCount,
      currentPage: state._vehicleServiceCompanyEmployee.serviceVehicleRepairingCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompanyEmployee.serviceVehicleRepairingSearchFormParameters,
      loading: state._vehicleServiceCompanyEmployee.loading,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, listName: 'serviceVehicleRepairingList' }, // this is for model namespace and
    }))(ServiceVehicleRepairingSearch)
  }
  getServiceVehicleRepairingCreateForm = () => {
   	const {ServiceVehicleRepairingCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompanyEmployee.serviceVehicleRepairingList,
      count: state._vehicleServiceCompanyEmployee.serviceVehicleRepairingCount,
      currentPage: state._vehicleServiceCompanyEmployee.serviceVehicleRepairingCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompanyEmployee.serviceVehicleRepairingSearchFormParameters,
      loading: state._vehicleServiceCompanyEmployee.loading,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, listName: 'serviceVehicleRepairingList'}, // this is for model namespace and
    }))(ServiceVehicleRepairingCreateForm)
  }
  
  getServiceVehicleRepairingUpdateForm = () => {
  	const {ServiceVehicleRepairingUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleServiceCompanyEmployee.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompanyEmployee.currentUpdateIndex,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, listName: 'serviceVehicleRepairingList' }, // this is for model namespace and
    }))(ServiceVehicleRepairingUpdateForm)
  }

  getServiceCompanyAccountSearch = () => {
    const {ServiceCompanyAccountSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompanyEmployee.serviceCompanyAccountList,
      count: state._vehicleServiceCompanyEmployee.serviceCompanyAccountCount,
      currentPage: state._vehicleServiceCompanyEmployee.serviceCompanyAccountCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompanyEmployee.serviceCompanyAccountSearchFormParameters,
      loading: state._vehicleServiceCompanyEmployee.loading,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, listName: 'serviceCompanyAccountList' }, // this is for model namespace and
    }))(ServiceCompanyAccountSearch)
  }
  getServiceCompanyAccountCreateForm = () => {
   	const {ServiceCompanyAccountCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompanyEmployee.serviceCompanyAccountList,
      count: state._vehicleServiceCompanyEmployee.serviceCompanyAccountCount,
      currentPage: state._vehicleServiceCompanyEmployee.serviceCompanyAccountCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompanyEmployee.serviceCompanyAccountSearchFormParameters,
      loading: state._vehicleServiceCompanyEmployee.loading,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, listName: 'serviceCompanyAccountList'}, // this is for model namespace and
    }))(ServiceCompanyAccountCreateForm)
  }
  
  getServiceCompanyAccountUpdateForm = () => {
  	const {ServiceCompanyAccountUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleServiceCompanyEmployee.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompanyEmployee.currentUpdateIndex,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, listName: 'serviceCompanyAccountList' }, // this is for model namespace and
    }))(ServiceCompanyAccountUpdateForm)
  }

  getRepairingCompanyAccountSearch = () => {
    const {RepairingCompanyAccountSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompanyEmployee.repairingCompanyAccountList,
      count: state._vehicleServiceCompanyEmployee.repairingCompanyAccountCount,
      currentPage: state._vehicleServiceCompanyEmployee.repairingCompanyAccountCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompanyEmployee.repairingCompanyAccountSearchFormParameters,
      loading: state._vehicleServiceCompanyEmployee.loading,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, listName: 'repairingCompanyAccountList' }, // this is for model namespace and
    }))(RepairingCompanyAccountSearch)
  }
  getRepairingCompanyAccountCreateForm = () => {
   	const {RepairingCompanyAccountCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompanyEmployee.repairingCompanyAccountList,
      count: state._vehicleServiceCompanyEmployee.repairingCompanyAccountCount,
      currentPage: state._vehicleServiceCompanyEmployee.repairingCompanyAccountCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompanyEmployee.repairingCompanyAccountSearchFormParameters,
      loading: state._vehicleServiceCompanyEmployee.loading,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, listName: 'repairingCompanyAccountList'}, // this is for model namespace and
    }))(RepairingCompanyAccountCreateForm)
  }
  
  getRepairingCompanyAccountUpdateForm = () => {
  	const {RepairingCompanyAccountUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleServiceCompanyEmployee.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompanyEmployee.currentUpdateIndex,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, listName: 'repairingCompanyAccountList' }, // this is for model namespace and
    }))(RepairingCompanyAccountUpdateForm)
  }

  getInsuranceServiceAccountSearch = () => {
    const {InsuranceServiceAccountSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompanyEmployee.insuranceServiceAccountList,
      count: state._vehicleServiceCompanyEmployee.insuranceServiceAccountCount,
      currentPage: state._vehicleServiceCompanyEmployee.insuranceServiceAccountCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompanyEmployee.insuranceServiceAccountSearchFormParameters,
      loading: state._vehicleServiceCompanyEmployee.loading,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, listName: 'insuranceServiceAccountList' }, // this is for model namespace and
    }))(InsuranceServiceAccountSearch)
  }
  getInsuranceServiceAccountCreateForm = () => {
   	const {InsuranceServiceAccountCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompanyEmployee.insuranceServiceAccountList,
      count: state._vehicleServiceCompanyEmployee.insuranceServiceAccountCount,
      currentPage: state._vehicleServiceCompanyEmployee.insuranceServiceAccountCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompanyEmployee.insuranceServiceAccountSearchFormParameters,
      loading: state._vehicleServiceCompanyEmployee.loading,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, listName: 'insuranceServiceAccountList'}, // this is for model namespace and
    }))(InsuranceServiceAccountCreateForm)
  }
  
  getInsuranceServiceAccountUpdateForm = () => {
  	const {InsuranceServiceAccountUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleServiceCompanyEmployee.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompanyEmployee.currentUpdateIndex,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, listName: 'insuranceServiceAccountList' }, // this is for model namespace and
    }))(InsuranceServiceAccountUpdateForm)
  }

  getInspectionStationAccountSearch = () => {
    const {InspectionStationAccountSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompanyEmployee.inspectionStationAccountList,
      count: state._vehicleServiceCompanyEmployee.inspectionStationAccountCount,
      currentPage: state._vehicleServiceCompanyEmployee.inspectionStationAccountCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompanyEmployee.inspectionStationAccountSearchFormParameters,
      loading: state._vehicleServiceCompanyEmployee.loading,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, listName: 'inspectionStationAccountList' }, // this is for model namespace and
    }))(InspectionStationAccountSearch)
  }
  getInspectionStationAccountCreateForm = () => {
   	const {InspectionStationAccountCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompanyEmployee.inspectionStationAccountList,
      count: state._vehicleServiceCompanyEmployee.inspectionStationAccountCount,
      currentPage: state._vehicleServiceCompanyEmployee.inspectionStationAccountCurrentPageNumber,
      searchFormParameters: state._vehicleServiceCompanyEmployee.inspectionStationAccountSearchFormParameters,
      loading: state._vehicleServiceCompanyEmployee.loading,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, listName: 'inspectionStationAccountList'}, // this is for model namespace and
    }))(InspectionStationAccountCreateForm)
  }
  
  getInspectionStationAccountUpdateForm = () => {
  	const {InspectionStationAccountUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleServiceCompanyEmployee.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompanyEmployee.currentUpdateIndex,
      owner: { type: '_vehicleServiceCompanyEmployee', id: state._vehicleServiceCompanyEmployee.id, listName: 'inspectionStationAccountList' }, // this is for model namespace and
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
    
     const {VehicleServiceCompanyEmployeeDashboard} = GlobalComponents
     const {VehicleServiceCompanyEmployeeEditDetail} = GlobalComponents
     const {VehicleServiceCompanyEmployeeViewDetail} = GlobalComponents
     
     
     
     
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
             <Link to="/home"> <h1>商户员工</h1></Link>
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
               <Link to={`/vehicleServiceCompanyEmployee/${this.props.vehicleServiceCompanyEmployee.id}/dashboard`}><Icon type="dashboard" /><span>仪表板</span></Link>
             </Menu.Item>
             <Menu.Item >
               <Link to={`/vehicleServiceCompanyEmployee/${this.props.vehicleServiceCompanyEmployee.id}/editDetail`}><Icon type="edit" /><span>详情编辑</span></Link>
             </Menu.Item>
             <Menu.Item >
               <Link to={`/vehicleServiceCompanyEmployee/${this.props.vehicleServiceCompanyEmployee.id}/viewDetail`}><Icon type="eye-o" /><span>详情查看</span></Link>
             </Menu.Item>
             

             {this.getNavMenuItems(this.props.vehicleServiceCompanyEmployee.id)}
             <Menu.Item >
               <Link to={"/home"}><Icon type="home" /><span>回到主页</span></Link>
             </Menu.Item>
           </Menu>
         </Sider>
         <Layout>
           <Content style={{ margin: '24px 24px 0', height: '100%' }}>
             <Switch>
               <Route path="/vehicleServiceCompanyEmployee/:id/dashboard" component={VehicleServiceCompanyEmployeeDashboard} />
               <Route path="/vehicleServiceCompanyEmployee/:id/editDetail" component={VehicleServiceCompanyEmployeeEditDetail} />
               <Route path="/vehicleServiceCompanyEmployee/:id/viewDetail" component={VehicleServiceCompanyEmployeeViewDetail} />
               

               <Route path="/vehicleServiceCompanyEmployee/:id/list/serviceOrderFilterList" component={this.getServiceOrderFilterSearch()} />
               <Route path="/vehicleServiceCompanyEmployee/:id/list/serviceOrderFilterCreateForm" component={this.getServiceOrderFilterCreateForm()} />
               <Route path="/vehicleServiceCompanyEmployee/:id/list/serviceOrderFilterUpdateForm" component={this.getServiceOrderFilterUpdateForm()} />

               <Route path="/vehicleServiceCompanyEmployee/:id/list/employeeDrivingLicenseList" component={this.getEmployeeDrivingLicenseSearch()} />
               <Route path="/vehicleServiceCompanyEmployee/:id/list/employeeDrivingLicenseCreateForm" component={this.getEmployeeDrivingLicenseCreateForm()} />
               <Route path="/vehicleServiceCompanyEmployee/:id/list/employeeDrivingLicenseUpdateForm" component={this.getEmployeeDrivingLicenseUpdateForm()} />

               <Route path="/vehicleServiceCompanyEmployee/:id/list/vehicleInspectionOrderServiceLogList" component={this.getVehicleInspectionOrderServiceLogSearch()} />
               <Route path="/vehicleServiceCompanyEmployee/:id/list/vehicleInspectionOrderServiceLogCreateForm" component={this.getVehicleInspectionOrderServiceLogCreateForm()} />
               <Route path="/vehicleServiceCompanyEmployee/:id/list/vehicleInspectionOrderServiceLogUpdateForm" component={this.getVehicleInspectionOrderServiceLogUpdateForm()} />

               <Route path="/vehicleServiceCompanyEmployee/:id/list/serviceVehicleMovementC2mList" component={this.getServiceVehicleMovementC2mSearch()} />
               <Route path="/vehicleServiceCompanyEmployee/:id/list/serviceVehicleMovementC2mCreateForm" component={this.getServiceVehicleMovementC2mCreateForm()} />
               <Route path="/vehicleServiceCompanyEmployee/:id/list/serviceVehicleMovementC2mUpdateForm" component={this.getServiceVehicleMovementC2mUpdateForm()} />

               <Route path="/vehicleServiceCompanyEmployee/:id/list/serviceVehicleMovementM2mListAsResponsibleWorker" component={this.getServiceVehicleMovementM2mAsResponsibleWorkerSearch()} />
               <Route path="/vehicleServiceCompanyEmployee/:id/list/serviceVehicleMovementM2mAsResponsibleWorkerCreateForm" component={this.getServiceVehicleMovementM2mAsResponsibleWorkerCreateForm()} />
               <Route path="/vehicleServiceCompanyEmployee/:id/list/serviceVehicleMovementM2mAsResponsibleWorkerUpdateForm" component={this.getServiceVehicleMovementM2mAsResponsibleWorkerUpdateForm()} />

               <Route path="/vehicleServiceCompanyEmployee/:id/list/serviceVehicleMovementM2mListAsDriver" component={this.getServiceVehicleMovementM2mAsDriverSearch()} />
               <Route path="/vehicleServiceCompanyEmployee/:id/list/serviceVehicleMovementM2mAsDriverCreateForm" component={this.getServiceVehicleMovementM2mAsDriverCreateForm()} />
               <Route path="/vehicleServiceCompanyEmployee/:id/list/serviceVehicleMovementM2mAsDriverUpdateForm" component={this.getServiceVehicleMovementM2mAsDriverUpdateForm()} />

               <Route path="/vehicleServiceCompanyEmployee/:id/list/serviceVehicleMovementM2mListAsReceiver" component={this.getServiceVehicleMovementM2mAsReceiverSearch()} />
               <Route path="/vehicleServiceCompanyEmployee/:id/list/serviceVehicleMovementM2mAsReceiverCreateForm" component={this.getServiceVehicleMovementM2mAsReceiverCreateForm()} />
               <Route path="/vehicleServiceCompanyEmployee/:id/list/serviceVehicleMovementM2mAsReceiverUpdateForm" component={this.getServiceVehicleMovementM2mAsReceiverUpdateForm()} />

               <Route path="/vehicleServiceCompanyEmployee/:id/list/serviceVehicleMovementM2cList" component={this.getServiceVehicleMovementM2cSearch()} />
               <Route path="/vehicleServiceCompanyEmployee/:id/list/serviceVehicleMovementM2cCreateForm" component={this.getServiceVehicleMovementM2cCreateForm()} />
               <Route path="/vehicleServiceCompanyEmployee/:id/list/serviceVehicleMovementM2cUpdateForm" component={this.getServiceVehicleMovementM2cUpdateForm()} />

               <Route path="/vehicleServiceCompanyEmployee/:id/list/serviceFileMovementC2mList" component={this.getServiceFileMovementC2mSearch()} />
               <Route path="/vehicleServiceCompanyEmployee/:id/list/serviceFileMovementC2mCreateForm" component={this.getServiceFileMovementC2mCreateForm()} />
               <Route path="/vehicleServiceCompanyEmployee/:id/list/serviceFileMovementC2mUpdateForm" component={this.getServiceFileMovementC2mUpdateForm()} />

               <Route path="/vehicleServiceCompanyEmployee/:id/list/serviceFileMovementM2mListAsResponsibleWorker" component={this.getServiceFileMovementM2mAsResponsibleWorkerSearch()} />
               <Route path="/vehicleServiceCompanyEmployee/:id/list/serviceFileMovementM2mAsResponsibleWorkerCreateForm" component={this.getServiceFileMovementM2mAsResponsibleWorkerCreateForm()} />
               <Route path="/vehicleServiceCompanyEmployee/:id/list/serviceFileMovementM2mAsResponsibleWorkerUpdateForm" component={this.getServiceFileMovementM2mAsResponsibleWorkerUpdateForm()} />

               <Route path="/vehicleServiceCompanyEmployee/:id/list/serviceFileMovementM2mListAsSender" component={this.getServiceFileMovementM2mAsSenderSearch()} />
               <Route path="/vehicleServiceCompanyEmployee/:id/list/serviceFileMovementM2mAsSenderCreateForm" component={this.getServiceFileMovementM2mAsSenderCreateForm()} />
               <Route path="/vehicleServiceCompanyEmployee/:id/list/serviceFileMovementM2mAsSenderUpdateForm" component={this.getServiceFileMovementM2mAsSenderUpdateForm()} />

               <Route path="/vehicleServiceCompanyEmployee/:id/list/serviceFileMovementM2mListAsReceiver" component={this.getServiceFileMovementM2mAsReceiverSearch()} />
               <Route path="/vehicleServiceCompanyEmployee/:id/list/serviceFileMovementM2mAsReceiverCreateForm" component={this.getServiceFileMovementM2mAsReceiverCreateForm()} />
               <Route path="/vehicleServiceCompanyEmployee/:id/list/serviceFileMovementM2mAsReceiverUpdateForm" component={this.getServiceFileMovementM2mAsReceiverUpdateForm()} />

               <Route path="/vehicleServiceCompanyEmployee/:id/list/serviceFileMovementM2cList" component={this.getServiceFileMovementM2cSearch()} />
               <Route path="/vehicleServiceCompanyEmployee/:id/list/serviceFileMovementM2cCreateForm" component={this.getServiceFileMovementM2cCreateForm()} />
               <Route path="/vehicleServiceCompanyEmployee/:id/list/serviceFileMovementM2cUpdateForm" component={this.getServiceFileMovementM2cUpdateForm()} />

               <Route path="/vehicleServiceCompanyEmployee/:id/list/serviceInsuranceForInspectionList" component={this.getServiceInsuranceForInspectionSearch()} />
               <Route path="/vehicleServiceCompanyEmployee/:id/list/serviceInsuranceForInspectionCreateForm" component={this.getServiceInsuranceForInspectionCreateForm()} />
               <Route path="/vehicleServiceCompanyEmployee/:id/list/serviceInsuranceForInspectionUpdateForm" component={this.getServiceInsuranceForInspectionUpdateForm()} />

               <Route path="/vehicleServiceCompanyEmployee/:id/list/serviceVehicleInspectionList" component={this.getServiceVehicleInspectionSearch()} />
               <Route path="/vehicleServiceCompanyEmployee/:id/list/serviceVehicleInspectionCreateForm" component={this.getServiceVehicleInspectionCreateForm()} />
               <Route path="/vehicleServiceCompanyEmployee/:id/list/serviceVehicleInspectionUpdateForm" component={this.getServiceVehicleInspectionUpdateForm()} />

               <Route path="/vehicleServiceCompanyEmployee/:id/list/serviceFileInspectionList" component={this.getServiceFileInspectionSearch()} />
               <Route path="/vehicleServiceCompanyEmployee/:id/list/serviceFileInspectionCreateForm" component={this.getServiceFileInspectionCreateForm()} />
               <Route path="/vehicleServiceCompanyEmployee/:id/list/serviceFileInspectionUpdateForm" component={this.getServiceFileInspectionUpdateForm()} />

               <Route path="/vehicleServiceCompanyEmployee/:id/list/serviceVehicleRepairingList" component={this.getServiceVehicleRepairingSearch()} />
               <Route path="/vehicleServiceCompanyEmployee/:id/list/serviceVehicleRepairingCreateForm" component={this.getServiceVehicleRepairingCreateForm()} />
               <Route path="/vehicleServiceCompanyEmployee/:id/list/serviceVehicleRepairingUpdateForm" component={this.getServiceVehicleRepairingUpdateForm()} />

               <Route path="/vehicleServiceCompanyEmployee/:id/list/serviceCompanyAccountList" component={this.getServiceCompanyAccountSearch()} />
               <Route path="/vehicleServiceCompanyEmployee/:id/list/serviceCompanyAccountCreateForm" component={this.getServiceCompanyAccountCreateForm()} />
               <Route path="/vehicleServiceCompanyEmployee/:id/list/serviceCompanyAccountUpdateForm" component={this.getServiceCompanyAccountUpdateForm()} />

               <Route path="/vehicleServiceCompanyEmployee/:id/list/repairingCompanyAccountList" component={this.getRepairingCompanyAccountSearch()} />
               <Route path="/vehicleServiceCompanyEmployee/:id/list/repairingCompanyAccountCreateForm" component={this.getRepairingCompanyAccountCreateForm()} />
               <Route path="/vehicleServiceCompanyEmployee/:id/list/repairingCompanyAccountUpdateForm" component={this.getRepairingCompanyAccountUpdateForm()} />

               <Route path="/vehicleServiceCompanyEmployee/:id/list/insuranceServiceAccountList" component={this.getInsuranceServiceAccountSearch()} />
               <Route path="/vehicleServiceCompanyEmployee/:id/list/insuranceServiceAccountCreateForm" component={this.getInsuranceServiceAccountCreateForm()} />
               <Route path="/vehicleServiceCompanyEmployee/:id/list/insuranceServiceAccountUpdateForm" component={this.getInsuranceServiceAccountUpdateForm()} />

               <Route path="/vehicleServiceCompanyEmployee/:id/list/inspectionStationAccountList" component={this.getInspectionStationAccountSearch()} />
               <Route path="/vehicleServiceCompanyEmployee/:id/list/inspectionStationAccountCreateForm" component={this.getInspectionStationAccountCreateForm()} />
               <Route path="/vehicleServiceCompanyEmployee/:id/list/inspectionStationAccountUpdateForm" component={this.getInspectionStationAccountUpdateForm()} />
              
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
  vehicleServiceCompanyEmployee: state._vehicleServiceCompanyEmployee,
  ...state,
}))(VehicleServiceCompanyEmployeeBizApp)



