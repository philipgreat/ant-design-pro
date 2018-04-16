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
import styles from './VehicleServiceCompany.app.less'

import HeaderSearch from '../../components/HeaderSearch'
import NoticeIcon from '../../components/NoticeIcon'
import GlobalFooter from '../../components/GlobalFooter'

import GlobalComponents from '../../custcomponents'

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

class VehicleServiceCompanyBizApp extends React.PureComponent {
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
  onCollapse = collapsed => {
    this.props.dispatch({
      type: 'global/changeLayoutCollapsed',
      payload: collapsed,
    })
  }

  getDefaultCollapsedSubMenus = props => {
    const currentMenuSelectedKeys = [...this.getCurrentMenuSelectedKeys(props)]
    currentMenuSelectedKeys.splice(-1, 1)
    if (currentMenuSelectedKeys.length === 0) {
      return ['/vehicleServiceCompany/']
    }
    return currentMenuSelectedKeys
  }
  getCurrentMenuSelectedKeys = props => {
    const { location: { pathname } } = props || this.props
    const keys = pathname.split('/').slice(1)
    if (keys.length === 1 && keys[0] === '') {
      return [this.menus[0].key]
    }
    return keys
  }
  getNavMenuItems = objectId => {
    return (
      <SubMenu
        title={
          <span>
            <Icon type="profile" />
            <span>商户</span>
          </span>
        }
      >
        <Menu.Item>
          <Link to={`/vehicleServiceCompany/${objectId}/list/contractList`}>
            合同
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link
            to={`/vehicleServiceCompany/${objectId}/list/serviceCompanyAuthenticationInfoList`}
          >
            商户认证信息
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link
            to={`/vehicleServiceCompany/${objectId}/list/vehicleInspectionPlateNumberPatternList`}
          >
            上线检测支持的车牌号码类别
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link
            to={`/vehicleServiceCompany/${objectId}/list/fileInspectionPlateNumberPatternList`}
          >
            6年免检检测支持的车牌号码类别
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link
            to={`/vehicleServiceCompany/${objectId}/list/vehicleServiceCompanyBusinessScopeList`}
          >
            商户服务范围
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link
            to={`/vehicleServiceCompany/${objectId}/list/companyQrcodePromotionRecordList`}
          >
            公司二维码推广记录
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link
            to={`/vehicleServiceCompany/${objectId}/list/vehicleServiceCompanyDispatcherList`}
          >
            商户派单
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link
            to={`/vehicleServiceCompany/${objectId}/list/vehicleServiceCompanyEmployeeList`}
          >
            商户员工
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link
            to={`/vehicleServiceCompany/${objectId}/list/vehicleInspectionOrderList`}
          >
            年检订单
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link
            to={`/vehicleServiceCompany/${objectId}/list/serviceVehicleMovementC2mList`}
          >
            收车服务
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link
            to={`/vehicleServiceCompany/${objectId}/list/serviceVehicleMovementM2mList`}
          >
            移车服务
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link
            to={`/vehicleServiceCompany/${objectId}/list/serviceVehicleMovementM2cList`}
          >
            还车服务
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link
            to={`/vehicleServiceCompany/${objectId}/list/serviceFileMovementC2mList`}
          >
            收件服务
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link
            to={`/vehicleServiceCompany/${objectId}/list/serviceFileMovementM2mList`}
          >
            移件服务
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link
            to={`/vehicleServiceCompany/${objectId}/list/serviceFileMovementM2cList`}
          >
            还件服务
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link
            to={`/vehicleServiceCompany/${objectId}/list/serviceInsuranceForInspectionList`}
          >
            保险服务
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link
            to={`/vehicleServiceCompany/${objectId}/list/serviceVehicleInspectionList`}
          >
            车辆上线检测
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link
            to={`/vehicleServiceCompany/${objectId}/list/serviceFileInspectionList`}
          >
            6年免检服务
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link
            to={`/vehicleServiceCompany/${objectId}/list/serviceVehicleRepairingList`}
          >
            维修服务
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link
            to={`/vehicleServiceCompany/${objectId}/list/serviceCompanyAccountList`}
          >
            服务商户对账单
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link
            to={`/vehicleServiceCompany/${objectId}/list/repairingCompanyAccountList`}
          >
            修理厂对账单
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link
            to={`/vehicleServiceCompany/${objectId}/list/insuranceServiceAccountList`}
          >
            保险服务对账单
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link
            to={`/vehicleServiceCompany/${objectId}/list/inspectionStationAccountList`}
          >
            检测站对账单
          </Link>
        </Menu.Item>
      </SubMenu>
    )
  }

  getContractSearch = () => {
    const { ContractSearch } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.contractList,
      count: state._vehicleServiceCompany.contractCount,
      currentPage: state._vehicleServiceCompany.contractCurrentPageNumber,
      searchFormParameters:
        state._vehicleServiceCompany.contractSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'contractList',
      }, // this is for model namespace and
    }))(ContractSearch)
  }
  getContractCreateForm = () => {
    const { ContractCreateForm } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.contractList,
      count: state._vehicleServiceCompany.contractCount,
      currentPage: state._vehicleServiceCompany.contractCurrentPageNumber,
      searchFormParameters:
        state._vehicleServiceCompany.contractSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'contractList',
      }, // this is for model namespace and
    }))(ContractCreateForm)
  }

  getContractUpdateForm = () => {
    const { ContractUpdateForm } = GlobalComponents
    return connect(state => ({
      selectedRows: state._vehicleServiceCompany.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompany.currentUpdateIndex,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'contractList',
      }, // this is for model namespace and
    }))(ContractUpdateForm)
  }

  getServiceCompanyAuthenticationInfoSearch = () => {
    const { ServiceCompanyAuthenticationInfoSearch } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.serviceCompanyAuthenticationInfoList,
      count: state._vehicleServiceCompany.serviceCompanyAuthenticationInfoCount,
      currentPage:
        state._vehicleServiceCompany
          .serviceCompanyAuthenticationInfoCurrentPageNumber,
      searchFormParameters:
        state._vehicleServiceCompany
          .serviceCompanyAuthenticationInfoSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'serviceCompanyAuthenticationInfoList',
      }, // this is for model namespace and
    }))(ServiceCompanyAuthenticationInfoSearch)
  }
  getServiceCompanyAuthenticationInfoCreateForm = () => {
    const { ServiceCompanyAuthenticationInfoCreateForm } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.serviceCompanyAuthenticationInfoList,
      count: state._vehicleServiceCompany.serviceCompanyAuthenticationInfoCount,
      currentPage:
        state._vehicleServiceCompany
          .serviceCompanyAuthenticationInfoCurrentPageNumber,
      searchFormParameters:
        state._vehicleServiceCompany
          .serviceCompanyAuthenticationInfoSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'serviceCompanyAuthenticationInfoList',
      }, // this is for model namespace and
    }))(ServiceCompanyAuthenticationInfoCreateForm)
  }

  getServiceCompanyAuthenticationInfoUpdateForm = () => {
    const { ServiceCompanyAuthenticationInfoUpdateForm } = GlobalComponents
    return connect(state => ({
      selectedRows: state._vehicleServiceCompany.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompany.currentUpdateIndex,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'serviceCompanyAuthenticationInfoList',
      }, // this is for model namespace and
    }))(ServiceCompanyAuthenticationInfoUpdateForm)
  }

  getVehicleInspectionPlateNumberPatternSearch = () => {
    const { VehicleInspectionPlateNumberPatternSearch } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data:
        state._vehicleServiceCompany.vehicleInspectionPlateNumberPatternList,
      count:
        state._vehicleServiceCompany.vehicleInspectionPlateNumberPatternCount,
      currentPage:
        state._vehicleServiceCompany
          .vehicleInspectionPlateNumberPatternCurrentPageNumber,
      searchFormParameters:
        state._vehicleServiceCompany
          .vehicleInspectionPlateNumberPatternSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'vehicleInspectionPlateNumberPatternList',
      }, // this is for model namespace and
    }))(VehicleInspectionPlateNumberPatternSearch)
  }
  getVehicleInspectionPlateNumberPatternCreateForm = () => {
    const { VehicleInspectionPlateNumberPatternCreateForm } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data:
        state._vehicleServiceCompany.vehicleInspectionPlateNumberPatternList,
      count:
        state._vehicleServiceCompany.vehicleInspectionPlateNumberPatternCount,
      currentPage:
        state._vehicleServiceCompany
          .vehicleInspectionPlateNumberPatternCurrentPageNumber,
      searchFormParameters:
        state._vehicleServiceCompany
          .vehicleInspectionPlateNumberPatternSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'vehicleInspectionPlateNumberPatternList',
      }, // this is for model namespace and
    }))(VehicleInspectionPlateNumberPatternCreateForm)
  }

  getVehicleInspectionPlateNumberPatternUpdateForm = () => {
    const { VehicleInspectionPlateNumberPatternUpdateForm } = GlobalComponents
    return connect(state => ({
      selectedRows: state._vehicleServiceCompany.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompany.currentUpdateIndex,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'vehicleInspectionPlateNumberPatternList',
      }, // this is for model namespace and
    }))(VehicleInspectionPlateNumberPatternUpdateForm)
  }

  getFileInspectionPlateNumberPatternSearch = () => {
    const { FileInspectionPlateNumberPatternSearch } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.fileInspectionPlateNumberPatternList,
      count: state._vehicleServiceCompany.fileInspectionPlateNumberPatternCount,
      currentPage:
        state._vehicleServiceCompany
          .fileInspectionPlateNumberPatternCurrentPageNumber,
      searchFormParameters:
        state._vehicleServiceCompany
          .fileInspectionPlateNumberPatternSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'fileInspectionPlateNumberPatternList',
      }, // this is for model namespace and
    }))(FileInspectionPlateNumberPatternSearch)
  }
  getFileInspectionPlateNumberPatternCreateForm = () => {
    const { FileInspectionPlateNumberPatternCreateForm } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.fileInspectionPlateNumberPatternList,
      count: state._vehicleServiceCompany.fileInspectionPlateNumberPatternCount,
      currentPage:
        state._vehicleServiceCompany
          .fileInspectionPlateNumberPatternCurrentPageNumber,
      searchFormParameters:
        state._vehicleServiceCompany
          .fileInspectionPlateNumberPatternSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'fileInspectionPlateNumberPatternList',
      }, // this is for model namespace and
    }))(FileInspectionPlateNumberPatternCreateForm)
  }

  getFileInspectionPlateNumberPatternUpdateForm = () => {
    const { FileInspectionPlateNumberPatternUpdateForm } = GlobalComponents
    return connect(state => ({
      selectedRows: state._vehicleServiceCompany.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompany.currentUpdateIndex,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'fileInspectionPlateNumberPatternList',
      }, // this is for model namespace and
    }))(FileInspectionPlateNumberPatternUpdateForm)
  }

  getVehicleServiceCompanyBusinessScopeSearch = () => {
    const { VehicleServiceCompanyBusinessScopeSearch } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.vehicleServiceCompanyBusinessScopeList,
      count:
        state._vehicleServiceCompany.vehicleServiceCompanyBusinessScopeCount,
      currentPage:
        state._vehicleServiceCompany
          .vehicleServiceCompanyBusinessScopeCurrentPageNumber,
      searchFormParameters:
        state._vehicleServiceCompany
          .vehicleServiceCompanyBusinessScopeSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'vehicleServiceCompanyBusinessScopeList',
      }, // this is for model namespace and
    }))(VehicleServiceCompanyBusinessScopeSearch)
  }
  getVehicleServiceCompanyBusinessScopeCreateForm = () => {
    const { VehicleServiceCompanyBusinessScopeCreateForm } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.vehicleServiceCompanyBusinessScopeList,
      count:
        state._vehicleServiceCompany.vehicleServiceCompanyBusinessScopeCount,
      currentPage:
        state._vehicleServiceCompany
          .vehicleServiceCompanyBusinessScopeCurrentPageNumber,
      searchFormParameters:
        state._vehicleServiceCompany
          .vehicleServiceCompanyBusinessScopeSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'vehicleServiceCompanyBusinessScopeList',
      }, // this is for model namespace and
    }))(VehicleServiceCompanyBusinessScopeCreateForm)
  }

  getVehicleServiceCompanyBusinessScopeUpdateForm = () => {
    const { VehicleServiceCompanyBusinessScopeUpdateForm } = GlobalComponents
    return connect(state => ({
      selectedRows: state._vehicleServiceCompany.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompany.currentUpdateIndex,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'vehicleServiceCompanyBusinessScopeList',
      }, // this is for model namespace and
    }))(VehicleServiceCompanyBusinessScopeUpdateForm)
  }

  getCompanyQrcodePromotionRecordSearch = () => {
    const { CompanyQrcodePromotionRecordSearch } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.companyQrcodePromotionRecordList,
      count: state._vehicleServiceCompany.companyQrcodePromotionRecordCount,
      currentPage:
        state._vehicleServiceCompany
          .companyQrcodePromotionRecordCurrentPageNumber,
      searchFormParameters:
        state._vehicleServiceCompany
          .companyQrcodePromotionRecordSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'companyQrcodePromotionRecordList',
      }, // this is for model namespace and
    }))(CompanyQrcodePromotionRecordSearch)
  }
  getCompanyQrcodePromotionRecordCreateForm = () => {
    const { CompanyQrcodePromotionRecordCreateForm } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.companyQrcodePromotionRecordList,
      count: state._vehicleServiceCompany.companyQrcodePromotionRecordCount,
      currentPage:
        state._vehicleServiceCompany
          .companyQrcodePromotionRecordCurrentPageNumber,
      searchFormParameters:
        state._vehicleServiceCompany
          .companyQrcodePromotionRecordSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'companyQrcodePromotionRecordList',
      }, // this is for model namespace and
    }))(CompanyQrcodePromotionRecordCreateForm)
  }

  getCompanyQrcodePromotionRecordUpdateForm = () => {
    const { CompanyQrcodePromotionRecordUpdateForm } = GlobalComponents
    return connect(state => ({
      selectedRows: state._vehicleServiceCompany.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompany.currentUpdateIndex,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'companyQrcodePromotionRecordList',
      }, // this is for model namespace and
    }))(CompanyQrcodePromotionRecordUpdateForm)
  }

  getVehicleServiceCompanyDispatcherSearch = () => {
    const { VehicleServiceCompanyDispatcherSearch } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.vehicleServiceCompanyDispatcherList,
      count: state._vehicleServiceCompany.vehicleServiceCompanyDispatcherCount,
      currentPage:
        state._vehicleServiceCompany
          .vehicleServiceCompanyDispatcherCurrentPageNumber,
      searchFormParameters:
        state._vehicleServiceCompany
          .vehicleServiceCompanyDispatcherSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'vehicleServiceCompanyDispatcherList',
      }, // this is for model namespace and
    }))(VehicleServiceCompanyDispatcherSearch)
  }
  getVehicleServiceCompanyDispatcherCreateForm = () => {
    const { VehicleServiceCompanyDispatcherCreateForm } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.vehicleServiceCompanyDispatcherList,
      count: state._vehicleServiceCompany.vehicleServiceCompanyDispatcherCount,
      currentPage:
        state._vehicleServiceCompany
          .vehicleServiceCompanyDispatcherCurrentPageNumber,
      searchFormParameters:
        state._vehicleServiceCompany
          .vehicleServiceCompanyDispatcherSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'vehicleServiceCompanyDispatcherList',
      }, // this is for model namespace and
    }))(VehicleServiceCompanyDispatcherCreateForm)
  }

  getVehicleServiceCompanyDispatcherUpdateForm = () => {
    const { VehicleServiceCompanyDispatcherUpdateForm } = GlobalComponents
    return connect(state => ({
      selectedRows: state._vehicleServiceCompany.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompany.currentUpdateIndex,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'vehicleServiceCompanyDispatcherList',
      }, // this is for model namespace and
    }))(VehicleServiceCompanyDispatcherUpdateForm)
  }

  getVehicleServiceCompanyEmployeeSearch = () => {
    const { VehicleServiceCompanyEmployeeSearch } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.vehicleServiceCompanyEmployeeList,
      count: state._vehicleServiceCompany.vehicleServiceCompanyEmployeeCount,
      currentPage:
        state._vehicleServiceCompany
          .vehicleServiceCompanyEmployeeCurrentPageNumber,
      searchFormParameters:
        state._vehicleServiceCompany
          .vehicleServiceCompanyEmployeeSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'vehicleServiceCompanyEmployeeList',
      }, // this is for model namespace and
    }))(VehicleServiceCompanyEmployeeSearch)
  }
  getVehicleServiceCompanyEmployeeCreateForm = () => {
    const { VehicleServiceCompanyEmployeeCreateForm } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.vehicleServiceCompanyEmployeeList,
      count: state._vehicleServiceCompany.vehicleServiceCompanyEmployeeCount,
      currentPage:
        state._vehicleServiceCompany
          .vehicleServiceCompanyEmployeeCurrentPageNumber,
      searchFormParameters:
        state._vehicleServiceCompany
          .vehicleServiceCompanyEmployeeSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'vehicleServiceCompanyEmployeeList',
      }, // this is for model namespace and
    }))(VehicleServiceCompanyEmployeeCreateForm)
  }

  getVehicleServiceCompanyEmployeeUpdateForm = () => {
    const { VehicleServiceCompanyEmployeeUpdateForm } = GlobalComponents
    return connect(state => ({
      selectedRows: state._vehicleServiceCompany.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompany.currentUpdateIndex,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'vehicleServiceCompanyEmployeeList',
      }, // this is for model namespace and
    }))(VehicleServiceCompanyEmployeeUpdateForm)
  }

  getVehicleInspectionOrderSearch = () => {
    const { VehicleInspectionOrderSearch } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.vehicleInspectionOrderList,
      count: state._vehicleServiceCompany.vehicleInspectionOrderCount,
      currentPage:
        state._vehicleServiceCompany.vehicleInspectionOrderCurrentPageNumber,
      searchFormParameters:
        state._vehicleServiceCompany.vehicleInspectionOrderSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'vehicleInspectionOrderList',
      }, // this is for model namespace and
    }))(VehicleInspectionOrderSearch)
  }
  getVehicleInspectionOrderCreateForm = () => {
    const { VehicleInspectionOrderCreateForm } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.vehicleInspectionOrderList,
      count: state._vehicleServiceCompany.vehicleInspectionOrderCount,
      currentPage:
        state._vehicleServiceCompany.vehicleInspectionOrderCurrentPageNumber,
      searchFormParameters:
        state._vehicleServiceCompany.vehicleInspectionOrderSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'vehicleInspectionOrderList',
      }, // this is for model namespace and
    }))(VehicleInspectionOrderCreateForm)
  }

  getVehicleInspectionOrderUpdateForm = () => {
    const { VehicleInspectionOrderUpdateForm } = GlobalComponents
    return connect(state => ({
      selectedRows: state._vehicleServiceCompany.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompany.currentUpdateIndex,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'vehicleInspectionOrderList',
      }, // this is for model namespace and
    }))(VehicleInspectionOrderUpdateForm)
  }

  getServiceVehicleMovementC2mSearch = () => {
    const { ServiceVehicleMovementC2mSearch } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.serviceVehicleMovementC2mList,
      count: state._vehicleServiceCompany.serviceVehicleMovementC2mCount,
      currentPage:
        state._vehicleServiceCompany.serviceVehicleMovementC2mCurrentPageNumber,
      searchFormParameters:
        state._vehicleServiceCompany
          .serviceVehicleMovementC2mSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'serviceVehicleMovementC2mList',
      }, // this is for model namespace and
    }))(ServiceVehicleMovementC2mSearch)
  }
  getServiceVehicleMovementC2mCreateForm = () => {
    const { ServiceVehicleMovementC2mCreateForm } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.serviceVehicleMovementC2mList,
      count: state._vehicleServiceCompany.serviceVehicleMovementC2mCount,
      currentPage:
        state._vehicleServiceCompany.serviceVehicleMovementC2mCurrentPageNumber,
      searchFormParameters:
        state._vehicleServiceCompany
          .serviceVehicleMovementC2mSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'serviceVehicleMovementC2mList',
      }, // this is for model namespace and
    }))(ServiceVehicleMovementC2mCreateForm)
  }

  getServiceVehicleMovementC2mUpdateForm = () => {
    const { ServiceVehicleMovementC2mUpdateForm } = GlobalComponents
    return connect(state => ({
      selectedRows: state._vehicleServiceCompany.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompany.currentUpdateIndex,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'serviceVehicleMovementC2mList',
      }, // this is for model namespace and
    }))(ServiceVehicleMovementC2mUpdateForm)
  }

  getServiceVehicleMovementM2mSearch = () => {
    const { ServiceVehicleMovementM2mSearch } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.serviceVehicleMovementM2mList,
      count: state._vehicleServiceCompany.serviceVehicleMovementM2mCount,
      currentPage:
        state._vehicleServiceCompany.serviceVehicleMovementM2mCurrentPageNumber,
      searchFormParameters:
        state._vehicleServiceCompany
          .serviceVehicleMovementM2mSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'serviceVehicleMovementM2mList',
      }, // this is for model namespace and
    }))(ServiceVehicleMovementM2mSearch)
  }
  getServiceVehicleMovementM2mCreateForm = () => {
    const { ServiceVehicleMovementM2mCreateForm } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.serviceVehicleMovementM2mList,
      count: state._vehicleServiceCompany.serviceVehicleMovementM2mCount,
      currentPage:
        state._vehicleServiceCompany.serviceVehicleMovementM2mCurrentPageNumber,
      searchFormParameters:
        state._vehicleServiceCompany
          .serviceVehicleMovementM2mSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'serviceVehicleMovementM2mList',
      }, // this is for model namespace and
    }))(ServiceVehicleMovementM2mCreateForm)
  }

  getServiceVehicleMovementM2mUpdateForm = () => {
    const { ServiceVehicleMovementM2mUpdateForm } = GlobalComponents
    return connect(state => ({
      selectedRows: state._vehicleServiceCompany.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompany.currentUpdateIndex,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'serviceVehicleMovementM2mList',
      }, // this is for model namespace and
    }))(ServiceVehicleMovementM2mUpdateForm)
  }

  getServiceVehicleMovementM2cSearch = () => {
    const { ServiceVehicleMovementM2cSearch } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.serviceVehicleMovementM2cList,
      count: state._vehicleServiceCompany.serviceVehicleMovementM2cCount,
      currentPage:
        state._vehicleServiceCompany.serviceVehicleMovementM2cCurrentPageNumber,
      searchFormParameters:
        state._vehicleServiceCompany
          .serviceVehicleMovementM2cSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'serviceVehicleMovementM2cList',
      }, // this is for model namespace and
    }))(ServiceVehicleMovementM2cSearch)
  }
  getServiceVehicleMovementM2cCreateForm = () => {
    const { ServiceVehicleMovementM2cCreateForm } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.serviceVehicleMovementM2cList,
      count: state._vehicleServiceCompany.serviceVehicleMovementM2cCount,
      currentPage:
        state._vehicleServiceCompany.serviceVehicleMovementM2cCurrentPageNumber,
      searchFormParameters:
        state._vehicleServiceCompany
          .serviceVehicleMovementM2cSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'serviceVehicleMovementM2cList',
      }, // this is for model namespace and
    }))(ServiceVehicleMovementM2cCreateForm)
  }

  getServiceVehicleMovementM2cUpdateForm = () => {
    const { ServiceVehicleMovementM2cUpdateForm } = GlobalComponents
    return connect(state => ({
      selectedRows: state._vehicleServiceCompany.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompany.currentUpdateIndex,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'serviceVehicleMovementM2cList',
      }, // this is for model namespace and
    }))(ServiceVehicleMovementM2cUpdateForm)
  }

  getServiceFileMovementC2mSearch = () => {
    const { ServiceFileMovementC2mSearch } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.serviceFileMovementC2mList,
      count: state._vehicleServiceCompany.serviceFileMovementC2mCount,
      currentPage:
        state._vehicleServiceCompany.serviceFileMovementC2mCurrentPageNumber,
      searchFormParameters:
        state._vehicleServiceCompany.serviceFileMovementC2mSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'serviceFileMovementC2mList',
      }, // this is for model namespace and
    }))(ServiceFileMovementC2mSearch)
  }
  getServiceFileMovementC2mCreateForm = () => {
    const { ServiceFileMovementC2mCreateForm } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.serviceFileMovementC2mList,
      count: state._vehicleServiceCompany.serviceFileMovementC2mCount,
      currentPage:
        state._vehicleServiceCompany.serviceFileMovementC2mCurrentPageNumber,
      searchFormParameters:
        state._vehicleServiceCompany.serviceFileMovementC2mSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'serviceFileMovementC2mList',
      }, // this is for model namespace and
    }))(ServiceFileMovementC2mCreateForm)
  }

  getServiceFileMovementC2mUpdateForm = () => {
    const { ServiceFileMovementC2mUpdateForm } = GlobalComponents
    return connect(state => ({
      selectedRows: state._vehicleServiceCompany.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompany.currentUpdateIndex,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'serviceFileMovementC2mList',
      }, // this is for model namespace and
    }))(ServiceFileMovementC2mUpdateForm)
  }

  getServiceFileMovementM2mSearch = () => {
    const { ServiceFileMovementM2mSearch } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.serviceFileMovementM2mList,
      count: state._vehicleServiceCompany.serviceFileMovementM2mCount,
      currentPage:
        state._vehicleServiceCompany.serviceFileMovementM2mCurrentPageNumber,
      searchFormParameters:
        state._vehicleServiceCompany.serviceFileMovementM2mSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'serviceFileMovementM2mList',
      }, // this is for model namespace and
    }))(ServiceFileMovementM2mSearch)
  }
  getServiceFileMovementM2mCreateForm = () => {
    const { ServiceFileMovementM2mCreateForm } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.serviceFileMovementM2mList,
      count: state._vehicleServiceCompany.serviceFileMovementM2mCount,
      currentPage:
        state._vehicleServiceCompany.serviceFileMovementM2mCurrentPageNumber,
      searchFormParameters:
        state._vehicleServiceCompany.serviceFileMovementM2mSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'serviceFileMovementM2mList',
      }, // this is for model namespace and
    }))(ServiceFileMovementM2mCreateForm)
  }

  getServiceFileMovementM2mUpdateForm = () => {
    const { ServiceFileMovementM2mUpdateForm } = GlobalComponents
    return connect(state => ({
      selectedRows: state._vehicleServiceCompany.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompany.currentUpdateIndex,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'serviceFileMovementM2mList',
      }, // this is for model namespace and
    }))(ServiceFileMovementM2mUpdateForm)
  }

  getServiceFileMovementM2cSearch = () => {
    const { ServiceFileMovementM2cSearch } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.serviceFileMovementM2cList,
      count: state._vehicleServiceCompany.serviceFileMovementM2cCount,
      currentPage:
        state._vehicleServiceCompany.serviceFileMovementM2cCurrentPageNumber,
      searchFormParameters:
        state._vehicleServiceCompany.serviceFileMovementM2cSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'serviceFileMovementM2cList',
      }, // this is for model namespace and
    }))(ServiceFileMovementM2cSearch)
  }
  getServiceFileMovementM2cCreateForm = () => {
    const { ServiceFileMovementM2cCreateForm } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.serviceFileMovementM2cList,
      count: state._vehicleServiceCompany.serviceFileMovementM2cCount,
      currentPage:
        state._vehicleServiceCompany.serviceFileMovementM2cCurrentPageNumber,
      searchFormParameters:
        state._vehicleServiceCompany.serviceFileMovementM2cSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'serviceFileMovementM2cList',
      }, // this is for model namespace and
    }))(ServiceFileMovementM2cCreateForm)
  }

  getServiceFileMovementM2cUpdateForm = () => {
    const { ServiceFileMovementM2cUpdateForm } = GlobalComponents
    return connect(state => ({
      selectedRows: state._vehicleServiceCompany.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompany.currentUpdateIndex,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'serviceFileMovementM2cList',
      }, // this is for model namespace and
    }))(ServiceFileMovementM2cUpdateForm)
  }

  getServiceInsuranceForInspectionSearch = () => {
    const { ServiceInsuranceForInspectionSearch } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.serviceInsuranceForInspectionList,
      count: state._vehicleServiceCompany.serviceInsuranceForInspectionCount,
      currentPage:
        state._vehicleServiceCompany
          .serviceInsuranceForInspectionCurrentPageNumber,
      searchFormParameters:
        state._vehicleServiceCompany
          .serviceInsuranceForInspectionSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'serviceInsuranceForInspectionList',
      }, // this is for model namespace and
    }))(ServiceInsuranceForInspectionSearch)
  }
  getServiceInsuranceForInspectionCreateForm = () => {
    const { ServiceInsuranceForInspectionCreateForm } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.serviceInsuranceForInspectionList,
      count: state._vehicleServiceCompany.serviceInsuranceForInspectionCount,
      currentPage:
        state._vehicleServiceCompany
          .serviceInsuranceForInspectionCurrentPageNumber,
      searchFormParameters:
        state._vehicleServiceCompany
          .serviceInsuranceForInspectionSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'serviceInsuranceForInspectionList',
      }, // this is for model namespace and
    }))(ServiceInsuranceForInspectionCreateForm)
  }

  getServiceInsuranceForInspectionUpdateForm = () => {
    const { ServiceInsuranceForInspectionUpdateForm } = GlobalComponents
    return connect(state => ({
      selectedRows: state._vehicleServiceCompany.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompany.currentUpdateIndex,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'serviceInsuranceForInspectionList',
      }, // this is for model namespace and
    }))(ServiceInsuranceForInspectionUpdateForm)
  }

  getServiceVehicleInspectionSearch = () => {
    const { ServiceVehicleInspectionSearch } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.serviceVehicleInspectionList,
      count: state._vehicleServiceCompany.serviceVehicleInspectionCount,
      currentPage:
        state._vehicleServiceCompany.serviceVehicleInspectionCurrentPageNumber,
      searchFormParameters:
        state._vehicleServiceCompany
          .serviceVehicleInspectionSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'serviceVehicleInspectionList',
      }, // this is for model namespace and
    }))(ServiceVehicleInspectionSearch)
  }
  getServiceVehicleInspectionCreateForm = () => {
    const { ServiceVehicleInspectionCreateForm } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.serviceVehicleInspectionList,
      count: state._vehicleServiceCompany.serviceVehicleInspectionCount,
      currentPage:
        state._vehicleServiceCompany.serviceVehicleInspectionCurrentPageNumber,
      searchFormParameters:
        state._vehicleServiceCompany
          .serviceVehicleInspectionSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'serviceVehicleInspectionList',
      }, // this is for model namespace and
    }))(ServiceVehicleInspectionCreateForm)
  }

  getServiceVehicleInspectionUpdateForm = () => {
    const { ServiceVehicleInspectionUpdateForm } = GlobalComponents
    return connect(state => ({
      selectedRows: state._vehicleServiceCompany.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompany.currentUpdateIndex,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'serviceVehicleInspectionList',
      }, // this is for model namespace and
    }))(ServiceVehicleInspectionUpdateForm)
  }

  getServiceFileInspectionSearch = () => {
    const { ServiceFileInspectionSearch } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.serviceFileInspectionList,
      count: state._vehicleServiceCompany.serviceFileInspectionCount,
      currentPage:
        state._vehicleServiceCompany.serviceFileInspectionCurrentPageNumber,
      searchFormParameters:
        state._vehicleServiceCompany.serviceFileInspectionSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'serviceFileInspectionList',
      }, // this is for model namespace and
    }))(ServiceFileInspectionSearch)
  }
  getServiceFileInspectionCreateForm = () => {
    const { ServiceFileInspectionCreateForm } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.serviceFileInspectionList,
      count: state._vehicleServiceCompany.serviceFileInspectionCount,
      currentPage:
        state._vehicleServiceCompany.serviceFileInspectionCurrentPageNumber,
      searchFormParameters:
        state._vehicleServiceCompany.serviceFileInspectionSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'serviceFileInspectionList',
      }, // this is for model namespace and
    }))(ServiceFileInspectionCreateForm)
  }

  getServiceFileInspectionUpdateForm = () => {
    const { ServiceFileInspectionUpdateForm } = GlobalComponents
    return connect(state => ({
      selectedRows: state._vehicleServiceCompany.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompany.currentUpdateIndex,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'serviceFileInspectionList',
      }, // this is for model namespace and
    }))(ServiceFileInspectionUpdateForm)
  }

  getServiceVehicleRepairingSearch = () => {
    const { ServiceVehicleRepairingSearch } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.serviceVehicleRepairingList,
      count: state._vehicleServiceCompany.serviceVehicleRepairingCount,
      currentPage:
        state._vehicleServiceCompany.serviceVehicleRepairingCurrentPageNumber,
      searchFormParameters:
        state._vehicleServiceCompany
          .serviceVehicleRepairingSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'serviceVehicleRepairingList',
      }, // this is for model namespace and
    }))(ServiceVehicleRepairingSearch)
  }
  getServiceVehicleRepairingCreateForm = () => {
    const { ServiceVehicleRepairingCreateForm } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.serviceVehicleRepairingList,
      count: state._vehicleServiceCompany.serviceVehicleRepairingCount,
      currentPage:
        state._vehicleServiceCompany.serviceVehicleRepairingCurrentPageNumber,
      searchFormParameters:
        state._vehicleServiceCompany
          .serviceVehicleRepairingSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'serviceVehicleRepairingList',
      }, // this is for model namespace and
    }))(ServiceVehicleRepairingCreateForm)
  }

  getServiceVehicleRepairingUpdateForm = () => {
    const { ServiceVehicleRepairingUpdateForm } = GlobalComponents
    return connect(state => ({
      selectedRows: state._vehicleServiceCompany.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompany.currentUpdateIndex,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'serviceVehicleRepairingList',
      }, // this is for model namespace and
    }))(ServiceVehicleRepairingUpdateForm)
  }

  getServiceCompanyAccountSearch = () => {
    const { ServiceCompanyAccountSearch } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.serviceCompanyAccountList,
      count: state._vehicleServiceCompany.serviceCompanyAccountCount,
      currentPage:
        state._vehicleServiceCompany.serviceCompanyAccountCurrentPageNumber,
      searchFormParameters:
        state._vehicleServiceCompany.serviceCompanyAccountSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'serviceCompanyAccountList',
      }, // this is for model namespace and
    }))(ServiceCompanyAccountSearch)
  }
  getServiceCompanyAccountCreateForm = () => {
    const { ServiceCompanyAccountCreateForm } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.serviceCompanyAccountList,
      count: state._vehicleServiceCompany.serviceCompanyAccountCount,
      currentPage:
        state._vehicleServiceCompany.serviceCompanyAccountCurrentPageNumber,
      searchFormParameters:
        state._vehicleServiceCompany.serviceCompanyAccountSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'serviceCompanyAccountList',
      }, // this is for model namespace and
    }))(ServiceCompanyAccountCreateForm)
  }

  getServiceCompanyAccountUpdateForm = () => {
    const { ServiceCompanyAccountUpdateForm } = GlobalComponents
    return connect(state => ({
      selectedRows: state._vehicleServiceCompany.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompany.currentUpdateIndex,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'serviceCompanyAccountList',
      }, // this is for model namespace and
    }))(ServiceCompanyAccountUpdateForm)
  }

  getRepairingCompanyAccountSearch = () => {
    const { RepairingCompanyAccountSearch } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.repairingCompanyAccountList,
      count: state._vehicleServiceCompany.repairingCompanyAccountCount,
      currentPage:
        state._vehicleServiceCompany.repairingCompanyAccountCurrentPageNumber,
      searchFormParameters:
        state._vehicleServiceCompany
          .repairingCompanyAccountSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'repairingCompanyAccountList',
      }, // this is for model namespace and
    }))(RepairingCompanyAccountSearch)
  }
  getRepairingCompanyAccountCreateForm = () => {
    const { RepairingCompanyAccountCreateForm } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.repairingCompanyAccountList,
      count: state._vehicleServiceCompany.repairingCompanyAccountCount,
      currentPage:
        state._vehicleServiceCompany.repairingCompanyAccountCurrentPageNumber,
      searchFormParameters:
        state._vehicleServiceCompany
          .repairingCompanyAccountSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'repairingCompanyAccountList',
      }, // this is for model namespace and
    }))(RepairingCompanyAccountCreateForm)
  }

  getRepairingCompanyAccountUpdateForm = () => {
    const { RepairingCompanyAccountUpdateForm } = GlobalComponents
    return connect(state => ({
      selectedRows: state._vehicleServiceCompany.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompany.currentUpdateIndex,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'repairingCompanyAccountList',
      }, // this is for model namespace and
    }))(RepairingCompanyAccountUpdateForm)
  }

  getInsuranceServiceAccountSearch = () => {
    const { InsuranceServiceAccountSearch } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.insuranceServiceAccountList,
      count: state._vehicleServiceCompany.insuranceServiceAccountCount,
      currentPage:
        state._vehicleServiceCompany.insuranceServiceAccountCurrentPageNumber,
      searchFormParameters:
        state._vehicleServiceCompany
          .insuranceServiceAccountSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'insuranceServiceAccountList',
      }, // this is for model namespace and
    }))(InsuranceServiceAccountSearch)
  }
  getInsuranceServiceAccountCreateForm = () => {
    const { InsuranceServiceAccountCreateForm } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.insuranceServiceAccountList,
      count: state._vehicleServiceCompany.insuranceServiceAccountCount,
      currentPage:
        state._vehicleServiceCompany.insuranceServiceAccountCurrentPageNumber,
      searchFormParameters:
        state._vehicleServiceCompany
          .insuranceServiceAccountSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'insuranceServiceAccountList',
      }, // this is for model namespace and
    }))(InsuranceServiceAccountCreateForm)
  }

  getInsuranceServiceAccountUpdateForm = () => {
    const { InsuranceServiceAccountUpdateForm } = GlobalComponents
    return connect(state => ({
      selectedRows: state._vehicleServiceCompany.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompany.currentUpdateIndex,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'insuranceServiceAccountList',
      }, // this is for model namespace and
    }))(InsuranceServiceAccountUpdateForm)
  }

  getInspectionStationAccountSearch = () => {
    const { InspectionStationAccountSearch } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.inspectionStationAccountList,
      count: state._vehicleServiceCompany.inspectionStationAccountCount,
      currentPage:
        state._vehicleServiceCompany.inspectionStationAccountCurrentPageNumber,
      searchFormParameters:
        state._vehicleServiceCompany
          .inspectionStationAccountSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'inspectionStationAccountList',
      }, // this is for model namespace and
    }))(InspectionStationAccountSearch)
  }
  getInspectionStationAccountCreateForm = () => {
    const { InspectionStationAccountCreateForm } = GlobalComponents
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleServiceCompany.inspectionStationAccountList,
      count: state._vehicleServiceCompany.inspectionStationAccountCount,
      currentPage:
        state._vehicleServiceCompany.inspectionStationAccountCurrentPageNumber,
      searchFormParameters:
        state._vehicleServiceCompany
          .inspectionStationAccountSearchFormParameters,
      loading: state._vehicleServiceCompany.loading,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'inspectionStationAccountList',
      }, // this is for model namespace and
    }))(InspectionStationAccountCreateForm)
  }

  getInspectionStationAccountUpdateForm = () => {
    const { InspectionStationAccountUpdateForm } = GlobalComponents
    return connect(state => ({
      selectedRows: state._vehicleServiceCompany.selectedRows,
      currentUpdateIndex: state._vehicleServiceCompany.currentUpdateIndex,
      owner: {
        type: '_vehicleServiceCompany',
        id: state._vehicleServiceCompany.id,
        listName: 'inspectionStationAccountList',
      }, // this is for model namespace and
    }))(InspectionStationAccountUpdateForm)
  }

  getPageTitle = () => {
    // const { location } = this.props
    // const { pathname } = location
    const title = '代审车服务平台'
    return title
  }

  handleOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(
      key => this.state.openKeys.indexOf(key) === -1
    )
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

    const { VehicleServiceCompanyDashboard } = GlobalComponents
    const { VehicleServiceCompanyEditDetail } = GlobalComponents
    const { VehicleServiceCompanyViewDetail } = GlobalComponents

    // Don't show popup menu when it is been collapsed
    const menuProps = collapsed
      ? {}
      : {
          openKeys: this.state.openKeys,
        }
    const layout = (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          breakpoint="md"
          onCollapse={() => this.onCollapse(collapsed)}
          width={256}
          className={styles.sider}
        >
          <div className={styles.logo}>
            <img src="./scm.svg" alt="logo" onClick={this.toggle} />
            <Link to="/home">
              {' '}
              <h1>商户</h1>
            </Link>
          </div>

          <Menu
            theme="dark"
            mode="inline"
            {...menuProps}
            onOpenChange={this.handleOpenChange}
            selectedKeys={this.getCurrentMenuSelectedKeys()}
            style={{ margin: '16px 0', width: '100%' }}
          >
            <Menu.Item>
              <Link
                to={`/vehicleServiceCompany/${
                  this.props.vehicleServiceCompany.id
                }/dashboard`}
              >
                <Icon type="dashboard" />
                <span>仪表板</span>
              </Link>
            </Menu.Item>

            {this.getNavMenuItems(this.props.vehicleServiceCompany.id)}
            <Menu.Item>
              <Link to={'/home'}>
                <Icon type="home" />
                <span>回到主页</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content style={{ margin: '24px 24px 0', height: '100%' }}>
            <Switch>
              <Route
                path="/vehicleServiceCompany/:id/dashboard"
                component={VehicleServiceCompanyDashboard}
              />

              <Route
                path="/vehicleServiceCompany/:id/editDetail"
                component={VehicleServiceCompanyEditDetail}
              />
              <Route
                path="/vehicleServiceCompany/:id/viewDetail"
                component={VehicleServiceCompanyViewDetail}
              />

              <Route
                path="/vehicleServiceCompany/:id/list/contractList"
                component={this.getContractSearch()}
              />
              <Route
                path="/vehicleServiceCompany/:id/list/contractCreateForm"
                component={this.getContractCreateForm()}
              />
              <Route
                path="/vehicleServiceCompany/:id/list/contractUpdateForm"
                component={this.getContractUpdateForm()}
              />

              <Route
                path="/vehicleServiceCompany/:id/list/serviceCompanyAuthenticationInfoList"
                component={this.getServiceCompanyAuthenticationInfoSearch()}
              />
              <Route
                path="/vehicleServiceCompany/:id/list/serviceCompanyAuthenticationInfoCreateForm"
                component={this.getServiceCompanyAuthenticationInfoCreateForm()}
              />
              <Route
                path="/vehicleServiceCompany/:id/list/serviceCompanyAuthenticationInfoUpdateForm"
                component={this.getServiceCompanyAuthenticationInfoUpdateForm()}
              />

              <Route
                path="/vehicleServiceCompany/:id/list/vehicleInspectionPlateNumberPatternList"
                component={this.getVehicleInspectionPlateNumberPatternSearch()}
              />
              <Route
                path="/vehicleServiceCompany/:id/list/vehicleInspectionPlateNumberPatternCreateForm"
                component={this.getVehicleInspectionPlateNumberPatternCreateForm()}
              />
              <Route
                path="/vehicleServiceCompany/:id/list/vehicleInspectionPlateNumberPatternUpdateForm"
                component={this.getVehicleInspectionPlateNumberPatternUpdateForm()}
              />

              <Route
                path="/vehicleServiceCompany/:id/list/fileInspectionPlateNumberPatternList"
                component={this.getFileInspectionPlateNumberPatternSearch()}
              />
              <Route
                path="/vehicleServiceCompany/:id/list/fileInspectionPlateNumberPatternCreateForm"
                component={this.getFileInspectionPlateNumberPatternCreateForm()}
              />
              <Route
                path="/vehicleServiceCompany/:id/list/fileInspectionPlateNumberPatternUpdateForm"
                component={this.getFileInspectionPlateNumberPatternUpdateForm()}
              />

              <Route
                path="/vehicleServiceCompany/:id/list/vehicleServiceCompanyBusinessScopeList"
                component={this.getVehicleServiceCompanyBusinessScopeSearch()}
              />
              <Route
                path="/vehicleServiceCompany/:id/list/vehicleServiceCompanyBusinessScopeCreateForm"
                component={this.getVehicleServiceCompanyBusinessScopeCreateForm()}
              />
              <Route
                path="/vehicleServiceCompany/:id/list/vehicleServiceCompanyBusinessScopeUpdateForm"
                component={this.getVehicleServiceCompanyBusinessScopeUpdateForm()}
              />

              <Route
                path="/vehicleServiceCompany/:id/list/companyQrcodePromotionRecordList"
                component={this.getCompanyQrcodePromotionRecordSearch()}
              />
              <Route
                path="/vehicleServiceCompany/:id/list/companyQrcodePromotionRecordCreateForm"
                component={this.getCompanyQrcodePromotionRecordCreateForm()}
              />
              <Route
                path="/vehicleServiceCompany/:id/list/companyQrcodePromotionRecordUpdateForm"
                component={this.getCompanyQrcodePromotionRecordUpdateForm()}
              />

              <Route
                path="/vehicleServiceCompany/:id/list/vehicleServiceCompanyDispatcherList"
                component={this.getVehicleServiceCompanyDispatcherSearch()}
              />
              <Route
                path="/vehicleServiceCompany/:id/list/vehicleServiceCompanyDispatcherCreateForm"
                component={this.getVehicleServiceCompanyDispatcherCreateForm()}
              />
              <Route
                path="/vehicleServiceCompany/:id/list/vehicleServiceCompanyDispatcherUpdateForm"
                component={this.getVehicleServiceCompanyDispatcherUpdateForm()}
              />

              <Route
                path="/vehicleServiceCompany/:id/list/vehicleServiceCompanyEmployeeList"
                component={this.getVehicleServiceCompanyEmployeeSearch()}
              />
              <Route
                path="/vehicleServiceCompany/:id/list/vehicleServiceCompanyEmployeeCreateForm"
                component={this.getVehicleServiceCompanyEmployeeCreateForm()}
              />
              <Route
                path="/vehicleServiceCompany/:id/list/vehicleServiceCompanyEmployeeUpdateForm"
                component={this.getVehicleServiceCompanyEmployeeUpdateForm()}
              />

              <Route
                path="/vehicleServiceCompany/:id/list/vehicleInspectionOrderList"
                component={this.getVehicleInspectionOrderSearch()}
              />
              <Route
                path="/vehicleServiceCompany/:id/list/vehicleInspectionOrderCreateForm"
                component={this.getVehicleInspectionOrderCreateForm()}
              />
              <Route
                path="/vehicleServiceCompany/:id/list/vehicleInspectionOrderUpdateForm"
                component={this.getVehicleInspectionOrderUpdateForm()}
              />

              <Route
                path="/vehicleServiceCompany/:id/list/serviceVehicleMovementC2mList"
                component={this.getServiceVehicleMovementC2mSearch()}
              />
              <Route
                path="/vehicleServiceCompany/:id/list/serviceVehicleMovementC2mCreateForm"
                component={this.getServiceVehicleMovementC2mCreateForm()}
              />
              <Route
                path="/vehicleServiceCompany/:id/list/serviceVehicleMovementC2mUpdateForm"
                component={this.getServiceVehicleMovementC2mUpdateForm()}
              />

              <Route
                path="/vehicleServiceCompany/:id/list/serviceVehicleMovementM2mList"
                component={this.getServiceVehicleMovementM2mSearch()}
              />
              <Route
                path="/vehicleServiceCompany/:id/list/serviceVehicleMovementM2mCreateForm"
                component={this.getServiceVehicleMovementM2mCreateForm()}
              />
              <Route
                path="/vehicleServiceCompany/:id/list/serviceVehicleMovementM2mUpdateForm"
                component={this.getServiceVehicleMovementM2mUpdateForm()}
              />

              <Route
                path="/vehicleServiceCompany/:id/list/serviceVehicleMovementM2cList"
                component={this.getServiceVehicleMovementM2cSearch()}
              />
              <Route
                path="/vehicleServiceCompany/:id/list/serviceVehicleMovementM2cCreateForm"
                component={this.getServiceVehicleMovementM2cCreateForm()}
              />
              <Route
                path="/vehicleServiceCompany/:id/list/serviceVehicleMovementM2cUpdateForm"
                component={this.getServiceVehicleMovementM2cUpdateForm()}
              />

              <Route
                path="/vehicleServiceCompany/:id/list/serviceFileMovementC2mList"
                component={this.getServiceFileMovementC2mSearch()}
              />
              <Route
                path="/vehicleServiceCompany/:id/list/serviceFileMovementC2mCreateForm"
                component={this.getServiceFileMovementC2mCreateForm()}
              />
              <Route
                path="/vehicleServiceCompany/:id/list/serviceFileMovementC2mUpdateForm"
                component={this.getServiceFileMovementC2mUpdateForm()}
              />

              <Route
                path="/vehicleServiceCompany/:id/list/serviceFileMovementM2mList"
                component={this.getServiceFileMovementM2mSearch()}
              />
              <Route
                path="/vehicleServiceCompany/:id/list/serviceFileMovementM2mCreateForm"
                component={this.getServiceFileMovementM2mCreateForm()}
              />
              <Route
                path="/vehicleServiceCompany/:id/list/serviceFileMovementM2mUpdateForm"
                component={this.getServiceFileMovementM2mUpdateForm()}
              />

              <Route
                path="/vehicleServiceCompany/:id/list/serviceFileMovementM2cList"
                component={this.getServiceFileMovementM2cSearch()}
              />
              <Route
                path="/vehicleServiceCompany/:id/list/serviceFileMovementM2cCreateForm"
                component={this.getServiceFileMovementM2cCreateForm()}
              />
              <Route
                path="/vehicleServiceCompany/:id/list/serviceFileMovementM2cUpdateForm"
                component={this.getServiceFileMovementM2cUpdateForm()}
              />

              <Route
                path="/vehicleServiceCompany/:id/list/serviceInsuranceForInspectionList"
                component={this.getServiceInsuranceForInspectionSearch()}
              />
              <Route
                path="/vehicleServiceCompany/:id/list/serviceInsuranceForInspectionCreateForm"
                component={this.getServiceInsuranceForInspectionCreateForm()}
              />
              <Route
                path="/vehicleServiceCompany/:id/list/serviceInsuranceForInspectionUpdateForm"
                component={this.getServiceInsuranceForInspectionUpdateForm()}
              />

              <Route
                path="/vehicleServiceCompany/:id/list/serviceVehicleInspectionList"
                component={this.getServiceVehicleInspectionSearch()}
              />
              <Route
                path="/vehicleServiceCompany/:id/list/serviceVehicleInspectionCreateForm"
                component={this.getServiceVehicleInspectionCreateForm()}
              />
              <Route
                path="/vehicleServiceCompany/:id/list/serviceVehicleInspectionUpdateForm"
                component={this.getServiceVehicleInspectionUpdateForm()}
              />

              <Route
                path="/vehicleServiceCompany/:id/list/serviceFileInspectionList"
                component={this.getServiceFileInspectionSearch()}
              />
              <Route
                path="/vehicleServiceCompany/:id/list/serviceFileInspectionCreateForm"
                component={this.getServiceFileInspectionCreateForm()}
              />
              <Route
                path="/vehicleServiceCompany/:id/list/serviceFileInspectionUpdateForm"
                component={this.getServiceFileInspectionUpdateForm()}
              />

              <Route
                path="/vehicleServiceCompany/:id/list/serviceVehicleRepairingList"
                component={this.getServiceVehicleRepairingSearch()}
              />
              <Route
                path="/vehicleServiceCompany/:id/list/serviceVehicleRepairingCreateForm"
                component={this.getServiceVehicleRepairingCreateForm()}
              />
              <Route
                path="/vehicleServiceCompany/:id/list/serviceVehicleRepairingUpdateForm"
                component={this.getServiceVehicleRepairingUpdateForm()}
              />

              <Route
                path="/vehicleServiceCompany/:id/list/serviceCompanyAccountList"
                component={this.getServiceCompanyAccountSearch()}
              />
              <Route
                path="/vehicleServiceCompany/:id/list/serviceCompanyAccountCreateForm"
                component={this.getServiceCompanyAccountCreateForm()}
              />
              <Route
                path="/vehicleServiceCompany/:id/list/serviceCompanyAccountUpdateForm"
                component={this.getServiceCompanyAccountUpdateForm()}
              />

              <Route
                path="/vehicleServiceCompany/:id/list/repairingCompanyAccountList"
                component={this.getRepairingCompanyAccountSearch()}
              />
              <Route
                path="/vehicleServiceCompany/:id/list/repairingCompanyAccountCreateForm"
                component={this.getRepairingCompanyAccountCreateForm()}
              />
              <Route
                path="/vehicleServiceCompany/:id/list/repairingCompanyAccountUpdateForm"
                component={this.getRepairingCompanyAccountUpdateForm()}
              />

              <Route
                path="/vehicleServiceCompany/:id/list/insuranceServiceAccountList"
                component={this.getInsuranceServiceAccountSearch()}
              />
              <Route
                path="/vehicleServiceCompany/:id/list/insuranceServiceAccountCreateForm"
                component={this.getInsuranceServiceAccountCreateForm()}
              />
              <Route
                path="/vehicleServiceCompany/:id/list/insuranceServiceAccountUpdateForm"
                component={this.getInsuranceServiceAccountUpdateForm()}
              />

              <Route
                path="/vehicleServiceCompany/:id/list/inspectionStationAccountList"
                component={this.getInspectionStationAccountSearch()}
              />
              <Route
                path="/vehicleServiceCompany/:id/list/inspectionStationAccountCreateForm"
                component={this.getInspectionStationAccountCreateForm()}
              />
              <Route
                path="/vehicleServiceCompany/:id/list/inspectionStationAccountUpdateForm"
                component={this.getInspectionStationAccountUpdateForm()}
              />
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
  vehicleServiceCompany: state._vehicleServiceCompany,
  ...state,
}))(VehicleServiceCompanyBizApp)
