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
import styles from './VehicleInspectionOrder.app.less'


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

class VehicleInspectionOrderBizApp extends React.PureComponent {
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
      return ['/vehicleInspectionOrder/']
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
          <span>上线检测订单</span>
        </span>}
      >

        <Menu.Item>
          <Link to={`/vehicleInspectionOrder/${objectId}/list/vehicleInspectionInsuranceOrderList`}>车辆检测保险服务订单</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/vehicleInspectionOrder/${objectId}/list/vehicleInspectionOrderServiceLogList`}>车辆检测服务订单日志</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/vehicleInspectionOrder/${objectId}/list/vehicleInspectionOrderCouponList`}>优惠券</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/vehicleInspectionOrder/${objectId}/list/vehicleInspectionOrderPaymentList`}>订单支付管理</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/vehicleInspectionOrder/${objectId}/list/handOverChecklistItemList`}>移交清单项目</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/vehicleInspectionOrder/${objectId}/list/serviceVehicleMovementC2mList`}>收车服务</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/vehicleInspectionOrder/${objectId}/list/serviceVehicleMovementM2mList`}>移车服务</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/vehicleInspectionOrder/${objectId}/list/serviceVehicleMovementM2cList`}>还车服务</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/vehicleInspectionOrder/${objectId}/list/serviceFileMovementC2mList`}>收件服务</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/vehicleInspectionOrder/${objectId}/list/serviceFileMovementM2mList`}>移件服务</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/vehicleInspectionOrder/${objectId}/list/serviceFileMovementM2cList`}>还件服务</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/vehicleInspectionOrder/${objectId}/list/serviceInsuranceForInspectionList`}>保险增值服务</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/vehicleInspectionOrder/${objectId}/list/serviceVehicleInspectionList`}>车辆上线检测</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/vehicleInspectionOrder/${objectId}/list/serviceFileInspectionList`}>6年免检服务</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/vehicleInspectionOrder/${objectId}/list/reportVehicleInspectionReportList`}>车辆检验报告</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/vehicleInspectionOrder/${objectId}/list/reportFileInspectionReportList`}>报告文件检验报告</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/vehicleInspectionOrder/${objectId}/list/serviceVehicleRepairingList`}>修车服务</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/vehicleInspectionOrder/${objectId}/list/orderReviewResultList`}>订单评论结果</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/vehicleInspectionOrder/${objectId}/list/orderRatingResultList`}>订单评级结果</Link>
        </Menu.Item>
      </SubMenu>
    )
  }


  getVehicleInspectionInsuranceOrderSearch = () => {
    const {VehicleInspectionInsuranceOrderSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleInspectionOrder.vehicleInspectionInsuranceOrderList,
      count: state._vehicleInspectionOrder.vehicleInspectionInsuranceOrderCount,
      currentPage: state._vehicleInspectionOrder.vehicleInspectionInsuranceOrderCurrentPageNumber,
      searchFormParameters: state._vehicleInspectionOrder.vehicleInspectionInsuranceOrderSearchFormParameters,
      loading: state._vehicleInspectionOrder.loading,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, listName: 'vehicleInspectionInsuranceOrderList' }, // this is for model namespace and
    }))(VehicleInspectionInsuranceOrderSearch)
  }
  getVehicleInspectionInsuranceOrderCreateForm = () => {
   	const {VehicleInspectionInsuranceOrderCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleInspectionOrder.vehicleInspectionInsuranceOrderList,
      count: state._vehicleInspectionOrder.vehicleInspectionInsuranceOrderCount,
      currentPage: state._vehicleInspectionOrder.vehicleInspectionInsuranceOrderCurrentPageNumber,
      searchFormParameters: state._vehicleInspectionOrder.vehicleInspectionInsuranceOrderSearchFormParameters,
      loading: state._vehicleInspectionOrder.loading,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, listName: 'vehicleInspectionInsuranceOrderList'}, // this is for model namespace and
    }))(VehicleInspectionInsuranceOrderCreateForm)
  }
  
  getVehicleInspectionInsuranceOrderUpdateForm = () => {
  	const {VehicleInspectionInsuranceOrderUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleInspectionOrder.selectedRows,
      currentUpdateIndex: state._vehicleInspectionOrder.currentUpdateIndex,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, listName: 'vehicleInspectionInsuranceOrderList' }, // this is for model namespace and
    }))(VehicleInspectionInsuranceOrderUpdateForm)
  }

  getVehicleInspectionOrderServiceLogSearch = () => {
    const {VehicleInspectionOrderServiceLogSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleInspectionOrder.vehicleInspectionOrderServiceLogList,
      count: state._vehicleInspectionOrder.vehicleInspectionOrderServiceLogCount,
      currentPage: state._vehicleInspectionOrder.vehicleInspectionOrderServiceLogCurrentPageNumber,
      searchFormParameters: state._vehicleInspectionOrder.vehicleInspectionOrderServiceLogSearchFormParameters,
      loading: state._vehicleInspectionOrder.loading,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, listName: 'vehicleInspectionOrderServiceLogList' }, // this is for model namespace and
    }))(VehicleInspectionOrderServiceLogSearch)
  }
  getVehicleInspectionOrderServiceLogCreateForm = () => {
   	const {VehicleInspectionOrderServiceLogCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleInspectionOrder.vehicleInspectionOrderServiceLogList,
      count: state._vehicleInspectionOrder.vehicleInspectionOrderServiceLogCount,
      currentPage: state._vehicleInspectionOrder.vehicleInspectionOrderServiceLogCurrentPageNumber,
      searchFormParameters: state._vehicleInspectionOrder.vehicleInspectionOrderServiceLogSearchFormParameters,
      loading: state._vehicleInspectionOrder.loading,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, listName: 'vehicleInspectionOrderServiceLogList'}, // this is for model namespace and
    }))(VehicleInspectionOrderServiceLogCreateForm)
  }
  
  getVehicleInspectionOrderServiceLogUpdateForm = () => {
  	const {VehicleInspectionOrderServiceLogUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleInspectionOrder.selectedRows,
      currentUpdateIndex: state._vehicleInspectionOrder.currentUpdateIndex,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, listName: 'vehicleInspectionOrderServiceLogList' }, // this is for model namespace and
    }))(VehicleInspectionOrderServiceLogUpdateForm)
  }

  getVehicleInspectionOrderCouponSearch = () => {
    const {VehicleInspectionOrderCouponSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleInspectionOrder.vehicleInspectionOrderCouponList,
      count: state._vehicleInspectionOrder.vehicleInspectionOrderCouponCount,
      currentPage: state._vehicleInspectionOrder.vehicleInspectionOrderCouponCurrentPageNumber,
      searchFormParameters: state._vehicleInspectionOrder.vehicleInspectionOrderCouponSearchFormParameters,
      loading: state._vehicleInspectionOrder.loading,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, listName: 'vehicleInspectionOrderCouponList' }, // this is for model namespace and
    }))(VehicleInspectionOrderCouponSearch)
  }
  getVehicleInspectionOrderCouponCreateForm = () => {
   	const {VehicleInspectionOrderCouponCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleInspectionOrder.vehicleInspectionOrderCouponList,
      count: state._vehicleInspectionOrder.vehicleInspectionOrderCouponCount,
      currentPage: state._vehicleInspectionOrder.vehicleInspectionOrderCouponCurrentPageNumber,
      searchFormParameters: state._vehicleInspectionOrder.vehicleInspectionOrderCouponSearchFormParameters,
      loading: state._vehicleInspectionOrder.loading,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, listName: 'vehicleInspectionOrderCouponList'}, // this is for model namespace and
    }))(VehicleInspectionOrderCouponCreateForm)
  }
  
  getVehicleInspectionOrderCouponUpdateForm = () => {
  	const {VehicleInspectionOrderCouponUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleInspectionOrder.selectedRows,
      currentUpdateIndex: state._vehicleInspectionOrder.currentUpdateIndex,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, listName: 'vehicleInspectionOrderCouponList' }, // this is for model namespace and
    }))(VehicleInspectionOrderCouponUpdateForm)
  }

  getVehicleInspectionOrderPaymentSearch = () => {
    const {VehicleInspectionOrderPaymentSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleInspectionOrder.vehicleInspectionOrderPaymentList,
      count: state._vehicleInspectionOrder.vehicleInspectionOrderPaymentCount,
      currentPage: state._vehicleInspectionOrder.vehicleInspectionOrderPaymentCurrentPageNumber,
      searchFormParameters: state._vehicleInspectionOrder.vehicleInspectionOrderPaymentSearchFormParameters,
      loading: state._vehicleInspectionOrder.loading,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, listName: 'vehicleInspectionOrderPaymentList' }, // this is for model namespace and
    }))(VehicleInspectionOrderPaymentSearch)
  }
  getVehicleInspectionOrderPaymentCreateForm = () => {
   	const {VehicleInspectionOrderPaymentCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleInspectionOrder.vehicleInspectionOrderPaymentList,
      count: state._vehicleInspectionOrder.vehicleInspectionOrderPaymentCount,
      currentPage: state._vehicleInspectionOrder.vehicleInspectionOrderPaymentCurrentPageNumber,
      searchFormParameters: state._vehicleInspectionOrder.vehicleInspectionOrderPaymentSearchFormParameters,
      loading: state._vehicleInspectionOrder.loading,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, listName: 'vehicleInspectionOrderPaymentList'}, // this is for model namespace and
    }))(VehicleInspectionOrderPaymentCreateForm)
  }
  
  getVehicleInspectionOrderPaymentUpdateForm = () => {
  	const {VehicleInspectionOrderPaymentUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleInspectionOrder.selectedRows,
      currentUpdateIndex: state._vehicleInspectionOrder.currentUpdateIndex,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, listName: 'vehicleInspectionOrderPaymentList' }, // this is for model namespace and
    }))(VehicleInspectionOrderPaymentUpdateForm)
  }

  getHandOverChecklistItemSearch = () => {
    const {HandOverChecklistItemSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleInspectionOrder.handOverChecklistItemList,
      count: state._vehicleInspectionOrder.handOverChecklistItemCount,
      currentPage: state._vehicleInspectionOrder.handOverChecklistItemCurrentPageNumber,
      searchFormParameters: state._vehicleInspectionOrder.handOverChecklistItemSearchFormParameters,
      loading: state._vehicleInspectionOrder.loading,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, listName: 'handOverChecklistItemList' }, // this is for model namespace and
    }))(HandOverChecklistItemSearch)
  }
  getHandOverChecklistItemCreateForm = () => {
   	const {HandOverChecklistItemCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleInspectionOrder.handOverChecklistItemList,
      count: state._vehicleInspectionOrder.handOverChecklistItemCount,
      currentPage: state._vehicleInspectionOrder.handOverChecklistItemCurrentPageNumber,
      searchFormParameters: state._vehicleInspectionOrder.handOverChecklistItemSearchFormParameters,
      loading: state._vehicleInspectionOrder.loading,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, listName: 'handOverChecklistItemList'}, // this is for model namespace and
    }))(HandOverChecklistItemCreateForm)
  }
  
  getHandOverChecklistItemUpdateForm = () => {
  	const {HandOverChecklistItemUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleInspectionOrder.selectedRows,
      currentUpdateIndex: state._vehicleInspectionOrder.currentUpdateIndex,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, listName: 'handOverChecklistItemList' }, // this is for model namespace and
    }))(HandOverChecklistItemUpdateForm)
  }

  getServiceVehicleMovementC2mSearch = () => {
    const {ServiceVehicleMovementC2mSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleInspectionOrder.serviceVehicleMovementC2mList,
      count: state._vehicleInspectionOrder.serviceVehicleMovementC2mCount,
      currentPage: state._vehicleInspectionOrder.serviceVehicleMovementC2mCurrentPageNumber,
      searchFormParameters: state._vehicleInspectionOrder.serviceVehicleMovementC2mSearchFormParameters,
      loading: state._vehicleInspectionOrder.loading,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, listName: 'serviceVehicleMovementC2mList' }, // this is for model namespace and
    }))(ServiceVehicleMovementC2mSearch)
  }
  getServiceVehicleMovementC2mCreateForm = () => {
   	const {ServiceVehicleMovementC2mCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleInspectionOrder.serviceVehicleMovementC2mList,
      count: state._vehicleInspectionOrder.serviceVehicleMovementC2mCount,
      currentPage: state._vehicleInspectionOrder.serviceVehicleMovementC2mCurrentPageNumber,
      searchFormParameters: state._vehicleInspectionOrder.serviceVehicleMovementC2mSearchFormParameters,
      loading: state._vehicleInspectionOrder.loading,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, listName: 'serviceVehicleMovementC2mList'}, // this is for model namespace and
    }))(ServiceVehicleMovementC2mCreateForm)
  }
  
  getServiceVehicleMovementC2mUpdateForm = () => {
  	const {ServiceVehicleMovementC2mUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleInspectionOrder.selectedRows,
      currentUpdateIndex: state._vehicleInspectionOrder.currentUpdateIndex,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, listName: 'serviceVehicleMovementC2mList' }, // this is for model namespace and
    }))(ServiceVehicleMovementC2mUpdateForm)
  }

  getServiceVehicleMovementM2mSearch = () => {
    const {ServiceVehicleMovementM2mSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleInspectionOrder.serviceVehicleMovementM2mList,
      count: state._vehicleInspectionOrder.serviceVehicleMovementM2mCount,
      currentPage: state._vehicleInspectionOrder.serviceVehicleMovementM2mCurrentPageNumber,
      searchFormParameters: state._vehicleInspectionOrder.serviceVehicleMovementM2mSearchFormParameters,
      loading: state._vehicleInspectionOrder.loading,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, listName: 'serviceVehicleMovementM2mList' }, // this is for model namespace and
    }))(ServiceVehicleMovementM2mSearch)
  }
  getServiceVehicleMovementM2mCreateForm = () => {
   	const {ServiceVehicleMovementM2mCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleInspectionOrder.serviceVehicleMovementM2mList,
      count: state._vehicleInspectionOrder.serviceVehicleMovementM2mCount,
      currentPage: state._vehicleInspectionOrder.serviceVehicleMovementM2mCurrentPageNumber,
      searchFormParameters: state._vehicleInspectionOrder.serviceVehicleMovementM2mSearchFormParameters,
      loading: state._vehicleInspectionOrder.loading,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, listName: 'serviceVehicleMovementM2mList'}, // this is for model namespace and
    }))(ServiceVehicleMovementM2mCreateForm)
  }
  
  getServiceVehicleMovementM2mUpdateForm = () => {
  	const {ServiceVehicleMovementM2mUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleInspectionOrder.selectedRows,
      currentUpdateIndex: state._vehicleInspectionOrder.currentUpdateIndex,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, listName: 'serviceVehicleMovementM2mList' }, // this is for model namespace and
    }))(ServiceVehicleMovementM2mUpdateForm)
  }

  getServiceVehicleMovementM2cSearch = () => {
    const {ServiceVehicleMovementM2cSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleInspectionOrder.serviceVehicleMovementM2cList,
      count: state._vehicleInspectionOrder.serviceVehicleMovementM2cCount,
      currentPage: state._vehicleInspectionOrder.serviceVehicleMovementM2cCurrentPageNumber,
      searchFormParameters: state._vehicleInspectionOrder.serviceVehicleMovementM2cSearchFormParameters,
      loading: state._vehicleInspectionOrder.loading,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, listName: 'serviceVehicleMovementM2cList' }, // this is for model namespace and
    }))(ServiceVehicleMovementM2cSearch)
  }
  getServiceVehicleMovementM2cCreateForm = () => {
   	const {ServiceVehicleMovementM2cCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleInspectionOrder.serviceVehicleMovementM2cList,
      count: state._vehicleInspectionOrder.serviceVehicleMovementM2cCount,
      currentPage: state._vehicleInspectionOrder.serviceVehicleMovementM2cCurrentPageNumber,
      searchFormParameters: state._vehicleInspectionOrder.serviceVehicleMovementM2cSearchFormParameters,
      loading: state._vehicleInspectionOrder.loading,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, listName: 'serviceVehicleMovementM2cList'}, // this is for model namespace and
    }))(ServiceVehicleMovementM2cCreateForm)
  }
  
  getServiceVehicleMovementM2cUpdateForm = () => {
  	const {ServiceVehicleMovementM2cUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleInspectionOrder.selectedRows,
      currentUpdateIndex: state._vehicleInspectionOrder.currentUpdateIndex,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, listName: 'serviceVehicleMovementM2cList' }, // this is for model namespace and
    }))(ServiceVehicleMovementM2cUpdateForm)
  }

  getServiceFileMovementC2mSearch = () => {
    const {ServiceFileMovementC2mSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleInspectionOrder.serviceFileMovementC2mList,
      count: state._vehicleInspectionOrder.serviceFileMovementC2mCount,
      currentPage: state._vehicleInspectionOrder.serviceFileMovementC2mCurrentPageNumber,
      searchFormParameters: state._vehicleInspectionOrder.serviceFileMovementC2mSearchFormParameters,
      loading: state._vehicleInspectionOrder.loading,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, listName: 'serviceFileMovementC2mList' }, // this is for model namespace and
    }))(ServiceFileMovementC2mSearch)
  }
  getServiceFileMovementC2mCreateForm = () => {
   	const {ServiceFileMovementC2mCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleInspectionOrder.serviceFileMovementC2mList,
      count: state._vehicleInspectionOrder.serviceFileMovementC2mCount,
      currentPage: state._vehicleInspectionOrder.serviceFileMovementC2mCurrentPageNumber,
      searchFormParameters: state._vehicleInspectionOrder.serviceFileMovementC2mSearchFormParameters,
      loading: state._vehicleInspectionOrder.loading,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, listName: 'serviceFileMovementC2mList'}, // this is for model namespace and
    }))(ServiceFileMovementC2mCreateForm)
  }
  
  getServiceFileMovementC2mUpdateForm = () => {
  	const {ServiceFileMovementC2mUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleInspectionOrder.selectedRows,
      currentUpdateIndex: state._vehicleInspectionOrder.currentUpdateIndex,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, listName: 'serviceFileMovementC2mList' }, // this is for model namespace and
    }))(ServiceFileMovementC2mUpdateForm)
  }

  getServiceFileMovementM2mSearch = () => {
    const {ServiceFileMovementM2mSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleInspectionOrder.serviceFileMovementM2mList,
      count: state._vehicleInspectionOrder.serviceFileMovementM2mCount,
      currentPage: state._vehicleInspectionOrder.serviceFileMovementM2mCurrentPageNumber,
      searchFormParameters: state._vehicleInspectionOrder.serviceFileMovementM2mSearchFormParameters,
      loading: state._vehicleInspectionOrder.loading,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, listName: 'serviceFileMovementM2mList' }, // this is for model namespace and
    }))(ServiceFileMovementM2mSearch)
  }
  getServiceFileMovementM2mCreateForm = () => {
   	const {ServiceFileMovementM2mCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleInspectionOrder.serviceFileMovementM2mList,
      count: state._vehicleInspectionOrder.serviceFileMovementM2mCount,
      currentPage: state._vehicleInspectionOrder.serviceFileMovementM2mCurrentPageNumber,
      searchFormParameters: state._vehicleInspectionOrder.serviceFileMovementM2mSearchFormParameters,
      loading: state._vehicleInspectionOrder.loading,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, listName: 'serviceFileMovementM2mList'}, // this is for model namespace and
    }))(ServiceFileMovementM2mCreateForm)
  }
  
  getServiceFileMovementM2mUpdateForm = () => {
  	const {ServiceFileMovementM2mUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleInspectionOrder.selectedRows,
      currentUpdateIndex: state._vehicleInspectionOrder.currentUpdateIndex,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, listName: 'serviceFileMovementM2mList' }, // this is for model namespace and
    }))(ServiceFileMovementM2mUpdateForm)
  }

  getServiceFileMovementM2cSearch = () => {
    const {ServiceFileMovementM2cSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleInspectionOrder.serviceFileMovementM2cList,
      count: state._vehicleInspectionOrder.serviceFileMovementM2cCount,
      currentPage: state._vehicleInspectionOrder.serviceFileMovementM2cCurrentPageNumber,
      searchFormParameters: state._vehicleInspectionOrder.serviceFileMovementM2cSearchFormParameters,
      loading: state._vehicleInspectionOrder.loading,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, listName: 'serviceFileMovementM2cList' }, // this is for model namespace and
    }))(ServiceFileMovementM2cSearch)
  }
  getServiceFileMovementM2cCreateForm = () => {
   	const {ServiceFileMovementM2cCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleInspectionOrder.serviceFileMovementM2cList,
      count: state._vehicleInspectionOrder.serviceFileMovementM2cCount,
      currentPage: state._vehicleInspectionOrder.serviceFileMovementM2cCurrentPageNumber,
      searchFormParameters: state._vehicleInspectionOrder.serviceFileMovementM2cSearchFormParameters,
      loading: state._vehicleInspectionOrder.loading,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, listName: 'serviceFileMovementM2cList'}, // this is for model namespace and
    }))(ServiceFileMovementM2cCreateForm)
  }
  
  getServiceFileMovementM2cUpdateForm = () => {
  	const {ServiceFileMovementM2cUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleInspectionOrder.selectedRows,
      currentUpdateIndex: state._vehicleInspectionOrder.currentUpdateIndex,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, listName: 'serviceFileMovementM2cList' }, // this is for model namespace and
    }))(ServiceFileMovementM2cUpdateForm)
  }

  getServiceInsuranceForInspectionSearch = () => {
    const {ServiceInsuranceForInspectionSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleInspectionOrder.serviceInsuranceForInspectionList,
      count: state._vehicleInspectionOrder.serviceInsuranceForInspectionCount,
      currentPage: state._vehicleInspectionOrder.serviceInsuranceForInspectionCurrentPageNumber,
      searchFormParameters: state._vehicleInspectionOrder.serviceInsuranceForInspectionSearchFormParameters,
      loading: state._vehicleInspectionOrder.loading,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, listName: 'serviceInsuranceForInspectionList' }, // this is for model namespace and
    }))(ServiceInsuranceForInspectionSearch)
  }
  getServiceInsuranceForInspectionCreateForm = () => {
   	const {ServiceInsuranceForInspectionCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleInspectionOrder.serviceInsuranceForInspectionList,
      count: state._vehicleInspectionOrder.serviceInsuranceForInspectionCount,
      currentPage: state._vehicleInspectionOrder.serviceInsuranceForInspectionCurrentPageNumber,
      searchFormParameters: state._vehicleInspectionOrder.serviceInsuranceForInspectionSearchFormParameters,
      loading: state._vehicleInspectionOrder.loading,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, listName: 'serviceInsuranceForInspectionList'}, // this is for model namespace and
    }))(ServiceInsuranceForInspectionCreateForm)
  }
  
  getServiceInsuranceForInspectionUpdateForm = () => {
  	const {ServiceInsuranceForInspectionUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleInspectionOrder.selectedRows,
      currentUpdateIndex: state._vehicleInspectionOrder.currentUpdateIndex,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, listName: 'serviceInsuranceForInspectionList' }, // this is for model namespace and
    }))(ServiceInsuranceForInspectionUpdateForm)
  }

  getServiceVehicleInspectionSearch = () => {
    const {ServiceVehicleInspectionSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleInspectionOrder.serviceVehicleInspectionList,
      count: state._vehicleInspectionOrder.serviceVehicleInspectionCount,
      currentPage: state._vehicleInspectionOrder.serviceVehicleInspectionCurrentPageNumber,
      searchFormParameters: state._vehicleInspectionOrder.serviceVehicleInspectionSearchFormParameters,
      loading: state._vehicleInspectionOrder.loading,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, listName: 'serviceVehicleInspectionList' }, // this is for model namespace and
    }))(ServiceVehicleInspectionSearch)
  }
  getServiceVehicleInspectionCreateForm = () => {
   	const {ServiceVehicleInspectionCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleInspectionOrder.serviceVehicleInspectionList,
      count: state._vehicleInspectionOrder.serviceVehicleInspectionCount,
      currentPage: state._vehicleInspectionOrder.serviceVehicleInspectionCurrentPageNumber,
      searchFormParameters: state._vehicleInspectionOrder.serviceVehicleInspectionSearchFormParameters,
      loading: state._vehicleInspectionOrder.loading,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, listName: 'serviceVehicleInspectionList'}, // this is for model namespace and
    }))(ServiceVehicleInspectionCreateForm)
  }
  
  getServiceVehicleInspectionUpdateForm = () => {
  	const {ServiceVehicleInspectionUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleInspectionOrder.selectedRows,
      currentUpdateIndex: state._vehicleInspectionOrder.currentUpdateIndex,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, listName: 'serviceVehicleInspectionList' }, // this is for model namespace and
    }))(ServiceVehicleInspectionUpdateForm)
  }

  getServiceFileInspectionSearch = () => {
    const {ServiceFileInspectionSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleInspectionOrder.serviceFileInspectionList,
      count: state._vehicleInspectionOrder.serviceFileInspectionCount,
      currentPage: state._vehicleInspectionOrder.serviceFileInspectionCurrentPageNumber,
      searchFormParameters: state._vehicleInspectionOrder.serviceFileInspectionSearchFormParameters,
      loading: state._vehicleInspectionOrder.loading,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, listName: 'serviceFileInspectionList' }, // this is for model namespace and
    }))(ServiceFileInspectionSearch)
  }
  getServiceFileInspectionCreateForm = () => {
   	const {ServiceFileInspectionCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleInspectionOrder.serviceFileInspectionList,
      count: state._vehicleInspectionOrder.serviceFileInspectionCount,
      currentPage: state._vehicleInspectionOrder.serviceFileInspectionCurrentPageNumber,
      searchFormParameters: state._vehicleInspectionOrder.serviceFileInspectionSearchFormParameters,
      loading: state._vehicleInspectionOrder.loading,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, listName: 'serviceFileInspectionList'}, // this is for model namespace and
    }))(ServiceFileInspectionCreateForm)
  }
  
  getServiceFileInspectionUpdateForm = () => {
  	const {ServiceFileInspectionUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleInspectionOrder.selectedRows,
      currentUpdateIndex: state._vehicleInspectionOrder.currentUpdateIndex,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, listName: 'serviceFileInspectionList' }, // this is for model namespace and
    }))(ServiceFileInspectionUpdateForm)
  }

  getReportVehicleInspectionReportSearch = () => {
    const {ReportVehicleInspectionReportSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleInspectionOrder.reportVehicleInspectionReportList,
      count: state._vehicleInspectionOrder.reportVehicleInspectionReportCount,
      currentPage: state._vehicleInspectionOrder.reportVehicleInspectionReportCurrentPageNumber,
      searchFormParameters: state._vehicleInspectionOrder.reportVehicleInspectionReportSearchFormParameters,
      loading: state._vehicleInspectionOrder.loading,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, listName: 'reportVehicleInspectionReportList' }, // this is for model namespace and
    }))(ReportVehicleInspectionReportSearch)
  }
  getReportVehicleInspectionReportCreateForm = () => {
   	const {ReportVehicleInspectionReportCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleInspectionOrder.reportVehicleInspectionReportList,
      count: state._vehicleInspectionOrder.reportVehicleInspectionReportCount,
      currentPage: state._vehicleInspectionOrder.reportVehicleInspectionReportCurrentPageNumber,
      searchFormParameters: state._vehicleInspectionOrder.reportVehicleInspectionReportSearchFormParameters,
      loading: state._vehicleInspectionOrder.loading,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, listName: 'reportVehicleInspectionReportList'}, // this is for model namespace and
    }))(ReportVehicleInspectionReportCreateForm)
  }
  
  getReportVehicleInspectionReportUpdateForm = () => {
  	const {ReportVehicleInspectionReportUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleInspectionOrder.selectedRows,
      currentUpdateIndex: state._vehicleInspectionOrder.currentUpdateIndex,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, listName: 'reportVehicleInspectionReportList' }, // this is for model namespace and
    }))(ReportVehicleInspectionReportUpdateForm)
  }

  getReportFileInspectionReportSearch = () => {
    const {ReportFileInspectionReportSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleInspectionOrder.reportFileInspectionReportList,
      count: state._vehicleInspectionOrder.reportFileInspectionReportCount,
      currentPage: state._vehicleInspectionOrder.reportFileInspectionReportCurrentPageNumber,
      searchFormParameters: state._vehicleInspectionOrder.reportFileInspectionReportSearchFormParameters,
      loading: state._vehicleInspectionOrder.loading,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, listName: 'reportFileInspectionReportList' }, // this is for model namespace and
    }))(ReportFileInspectionReportSearch)
  }
  getReportFileInspectionReportCreateForm = () => {
   	const {ReportFileInspectionReportCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleInspectionOrder.reportFileInspectionReportList,
      count: state._vehicleInspectionOrder.reportFileInspectionReportCount,
      currentPage: state._vehicleInspectionOrder.reportFileInspectionReportCurrentPageNumber,
      searchFormParameters: state._vehicleInspectionOrder.reportFileInspectionReportSearchFormParameters,
      loading: state._vehicleInspectionOrder.loading,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, listName: 'reportFileInspectionReportList'}, // this is for model namespace and
    }))(ReportFileInspectionReportCreateForm)
  }
  
  getReportFileInspectionReportUpdateForm = () => {
  	const {ReportFileInspectionReportUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleInspectionOrder.selectedRows,
      currentUpdateIndex: state._vehicleInspectionOrder.currentUpdateIndex,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, listName: 'reportFileInspectionReportList' }, // this is for model namespace and
    }))(ReportFileInspectionReportUpdateForm)
  }

  getServiceVehicleRepairingSearch = () => {
    const {ServiceVehicleRepairingSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleInspectionOrder.serviceVehicleRepairingList,
      count: state._vehicleInspectionOrder.serviceVehicleRepairingCount,
      currentPage: state._vehicleInspectionOrder.serviceVehicleRepairingCurrentPageNumber,
      searchFormParameters: state._vehicleInspectionOrder.serviceVehicleRepairingSearchFormParameters,
      loading: state._vehicleInspectionOrder.loading,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, listName: 'serviceVehicleRepairingList' }, // this is for model namespace and
    }))(ServiceVehicleRepairingSearch)
  }
  getServiceVehicleRepairingCreateForm = () => {
   	const {ServiceVehicleRepairingCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleInspectionOrder.serviceVehicleRepairingList,
      count: state._vehicleInspectionOrder.serviceVehicleRepairingCount,
      currentPage: state._vehicleInspectionOrder.serviceVehicleRepairingCurrentPageNumber,
      searchFormParameters: state._vehicleInspectionOrder.serviceVehicleRepairingSearchFormParameters,
      loading: state._vehicleInspectionOrder.loading,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, listName: 'serviceVehicleRepairingList'}, // this is for model namespace and
    }))(ServiceVehicleRepairingCreateForm)
  }
  
  getServiceVehicleRepairingUpdateForm = () => {
  	const {ServiceVehicleRepairingUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleInspectionOrder.selectedRows,
      currentUpdateIndex: state._vehicleInspectionOrder.currentUpdateIndex,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, listName: 'serviceVehicleRepairingList' }, // this is for model namespace and
    }))(ServiceVehicleRepairingUpdateForm)
  }

  getOrderReviewResultSearch = () => {
    const {OrderReviewResultSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleInspectionOrder.orderReviewResultList,
      count: state._vehicleInspectionOrder.orderReviewResultCount,
      currentPage: state._vehicleInspectionOrder.orderReviewResultCurrentPageNumber,
      searchFormParameters: state._vehicleInspectionOrder.orderReviewResultSearchFormParameters,
      loading: state._vehicleInspectionOrder.loading,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, listName: 'orderReviewResultList' }, // this is for model namespace and
    }))(OrderReviewResultSearch)
  }
  getOrderReviewResultCreateForm = () => {
   	const {OrderReviewResultCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleInspectionOrder.orderReviewResultList,
      count: state._vehicleInspectionOrder.orderReviewResultCount,
      currentPage: state._vehicleInspectionOrder.orderReviewResultCurrentPageNumber,
      searchFormParameters: state._vehicleInspectionOrder.orderReviewResultSearchFormParameters,
      loading: state._vehicleInspectionOrder.loading,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, listName: 'orderReviewResultList'}, // this is for model namespace and
    }))(OrderReviewResultCreateForm)
  }
  
  getOrderReviewResultUpdateForm = () => {
  	const {OrderReviewResultUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleInspectionOrder.selectedRows,
      currentUpdateIndex: state._vehicleInspectionOrder.currentUpdateIndex,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, listName: 'orderReviewResultList' }, // this is for model namespace and
    }))(OrderReviewResultUpdateForm)
  }

  getOrderRatingResultSearch = () => {
    const {OrderRatingResultSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleInspectionOrder.orderRatingResultList,
      count: state._vehicleInspectionOrder.orderRatingResultCount,
      currentPage: state._vehicleInspectionOrder.orderRatingResultCurrentPageNumber,
      searchFormParameters: state._vehicleInspectionOrder.orderRatingResultSearchFormParameters,
      loading: state._vehicleInspectionOrder.loading,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, listName: 'orderRatingResultList' }, // this is for model namespace and
    }))(OrderRatingResultSearch)
  }
  getOrderRatingResultCreateForm = () => {
   	const {OrderRatingResultCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._vehicleInspectionOrder.orderRatingResultList,
      count: state._vehicleInspectionOrder.orderRatingResultCount,
      currentPage: state._vehicleInspectionOrder.orderRatingResultCurrentPageNumber,
      searchFormParameters: state._vehicleInspectionOrder.orderRatingResultSearchFormParameters,
      loading: state._vehicleInspectionOrder.loading,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, listName: 'orderRatingResultList'}, // this is for model namespace and
    }))(OrderRatingResultCreateForm)
  }
  
  getOrderRatingResultUpdateForm = () => {
  	const {OrderRatingResultUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._vehicleInspectionOrder.selectedRows,
      currentUpdateIndex: state._vehicleInspectionOrder.currentUpdateIndex,
      owner: { type: '_vehicleInspectionOrder', id: state._vehicleInspectionOrder.id, listName: 'orderRatingResultList' }, // this is for model namespace and
    }))(OrderRatingResultUpdateForm)
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
    
     const {VehicleInspectionOrderDashboard} = GlobalComponents
     const {VehicleInspectionOrderEditDetail} = GlobalComponents
     const {VehicleInspectionOrderViewDetail} = GlobalComponents
     
     
     
     
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
             <Link to="/home"> <h1>上线检测订单</h1></Link>
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
               <Link to={`/vehicleInspectionOrder/${this.props.vehicleInspectionOrder.id}/dashboard`}><Icon type="dashboard" /><span>仪表板</span></Link>
             </Menu.Item>
             <Menu.Item >
               <Link to={`/vehicleInspectionOrder/${this.props.vehicleInspectionOrder.id}/editDetail`}><Icon type="edit" /><span>详情编辑</span></Link>
             </Menu.Item>
             <Menu.Item >
               <Link to={`/vehicleInspectionOrder/${this.props.vehicleInspectionOrder.id}/viewDetail`}><Icon type="eye-o" /><span>详情查看</span></Link>
             </Menu.Item>
             

             {this.getNavMenuItems(this.props.vehicleInspectionOrder.id)}
             <Menu.Item >
               <Link to={"/home"}><Icon type="home" /><span>回到主页</span></Link>
             </Menu.Item>
           </Menu>
         </Sider>
         <Layout>
           <Content style={{ margin: '24px 24px 0', height: '100%' }}>
             <Switch>
               <Route path="/vehicleInspectionOrder/:id/dashboard" component={VehicleInspectionOrderDashboard} />
               <Route path="/vehicleInspectionOrder/:id/editDetail" component={VehicleInspectionOrderEditDetail} />
               <Route path="/vehicleInspectionOrder/:id/viewDetail" component={VehicleInspectionOrderViewDetail} />
               

               <Route path="/vehicleInspectionOrder/:id/list/vehicleInspectionInsuranceOrderList" component={this.getVehicleInspectionInsuranceOrderSearch()} />
               <Route path="/vehicleInspectionOrder/:id/list/vehicleInspectionInsuranceOrderCreateForm" component={this.getVehicleInspectionInsuranceOrderCreateForm()} />
               <Route path="/vehicleInspectionOrder/:id/list/vehicleInspectionInsuranceOrderUpdateForm" component={this.getVehicleInspectionInsuranceOrderUpdateForm()} />

               <Route path="/vehicleInspectionOrder/:id/list/vehicleInspectionOrderServiceLogList" component={this.getVehicleInspectionOrderServiceLogSearch()} />
               <Route path="/vehicleInspectionOrder/:id/list/vehicleInspectionOrderServiceLogCreateForm" component={this.getVehicleInspectionOrderServiceLogCreateForm()} />
               <Route path="/vehicleInspectionOrder/:id/list/vehicleInspectionOrderServiceLogUpdateForm" component={this.getVehicleInspectionOrderServiceLogUpdateForm()} />

               <Route path="/vehicleInspectionOrder/:id/list/vehicleInspectionOrderCouponList" component={this.getVehicleInspectionOrderCouponSearch()} />
               <Route path="/vehicleInspectionOrder/:id/list/vehicleInspectionOrderCouponCreateForm" component={this.getVehicleInspectionOrderCouponCreateForm()} />
               <Route path="/vehicleInspectionOrder/:id/list/vehicleInspectionOrderCouponUpdateForm" component={this.getVehicleInspectionOrderCouponUpdateForm()} />

               <Route path="/vehicleInspectionOrder/:id/list/vehicleInspectionOrderPaymentList" component={this.getVehicleInspectionOrderPaymentSearch()} />
               <Route path="/vehicleInspectionOrder/:id/list/vehicleInspectionOrderPaymentCreateForm" component={this.getVehicleInspectionOrderPaymentCreateForm()} />
               <Route path="/vehicleInspectionOrder/:id/list/vehicleInspectionOrderPaymentUpdateForm" component={this.getVehicleInspectionOrderPaymentUpdateForm()} />

               <Route path="/vehicleInspectionOrder/:id/list/handOverChecklistItemList" component={this.getHandOverChecklistItemSearch()} />
               <Route path="/vehicleInspectionOrder/:id/list/handOverChecklistItemCreateForm" component={this.getHandOverChecklistItemCreateForm()} />
               <Route path="/vehicleInspectionOrder/:id/list/handOverChecklistItemUpdateForm" component={this.getHandOverChecklistItemUpdateForm()} />

               <Route path="/vehicleInspectionOrder/:id/list/serviceVehicleMovementC2mList" component={this.getServiceVehicleMovementC2mSearch()} />
               <Route path="/vehicleInspectionOrder/:id/list/serviceVehicleMovementC2mCreateForm" component={this.getServiceVehicleMovementC2mCreateForm()} />
               <Route path="/vehicleInspectionOrder/:id/list/serviceVehicleMovementC2mUpdateForm" component={this.getServiceVehicleMovementC2mUpdateForm()} />

               <Route path="/vehicleInspectionOrder/:id/list/serviceVehicleMovementM2mList" component={this.getServiceVehicleMovementM2mSearch()} />
               <Route path="/vehicleInspectionOrder/:id/list/serviceVehicleMovementM2mCreateForm" component={this.getServiceVehicleMovementM2mCreateForm()} />
               <Route path="/vehicleInspectionOrder/:id/list/serviceVehicleMovementM2mUpdateForm" component={this.getServiceVehicleMovementM2mUpdateForm()} />

               <Route path="/vehicleInspectionOrder/:id/list/serviceVehicleMovementM2cList" component={this.getServiceVehicleMovementM2cSearch()} />
               <Route path="/vehicleInspectionOrder/:id/list/serviceVehicleMovementM2cCreateForm" component={this.getServiceVehicleMovementM2cCreateForm()} />
               <Route path="/vehicleInspectionOrder/:id/list/serviceVehicleMovementM2cUpdateForm" component={this.getServiceVehicleMovementM2cUpdateForm()} />

               <Route path="/vehicleInspectionOrder/:id/list/serviceFileMovementC2mList" component={this.getServiceFileMovementC2mSearch()} />
               <Route path="/vehicleInspectionOrder/:id/list/serviceFileMovementC2mCreateForm" component={this.getServiceFileMovementC2mCreateForm()} />
               <Route path="/vehicleInspectionOrder/:id/list/serviceFileMovementC2mUpdateForm" component={this.getServiceFileMovementC2mUpdateForm()} />

               <Route path="/vehicleInspectionOrder/:id/list/serviceFileMovementM2mList" component={this.getServiceFileMovementM2mSearch()} />
               <Route path="/vehicleInspectionOrder/:id/list/serviceFileMovementM2mCreateForm" component={this.getServiceFileMovementM2mCreateForm()} />
               <Route path="/vehicleInspectionOrder/:id/list/serviceFileMovementM2mUpdateForm" component={this.getServiceFileMovementM2mUpdateForm()} />

               <Route path="/vehicleInspectionOrder/:id/list/serviceFileMovementM2cList" component={this.getServiceFileMovementM2cSearch()} />
               <Route path="/vehicleInspectionOrder/:id/list/serviceFileMovementM2cCreateForm" component={this.getServiceFileMovementM2cCreateForm()} />
               <Route path="/vehicleInspectionOrder/:id/list/serviceFileMovementM2cUpdateForm" component={this.getServiceFileMovementM2cUpdateForm()} />

               <Route path="/vehicleInspectionOrder/:id/list/serviceInsuranceForInspectionList" component={this.getServiceInsuranceForInspectionSearch()} />
               <Route path="/vehicleInspectionOrder/:id/list/serviceInsuranceForInspectionCreateForm" component={this.getServiceInsuranceForInspectionCreateForm()} />
               <Route path="/vehicleInspectionOrder/:id/list/serviceInsuranceForInspectionUpdateForm" component={this.getServiceInsuranceForInspectionUpdateForm()} />

               <Route path="/vehicleInspectionOrder/:id/list/serviceVehicleInspectionList" component={this.getServiceVehicleInspectionSearch()} />
               <Route path="/vehicleInspectionOrder/:id/list/serviceVehicleInspectionCreateForm" component={this.getServiceVehicleInspectionCreateForm()} />
               <Route path="/vehicleInspectionOrder/:id/list/serviceVehicleInspectionUpdateForm" component={this.getServiceVehicleInspectionUpdateForm()} />

               <Route path="/vehicleInspectionOrder/:id/list/serviceFileInspectionList" component={this.getServiceFileInspectionSearch()} />
               <Route path="/vehicleInspectionOrder/:id/list/serviceFileInspectionCreateForm" component={this.getServiceFileInspectionCreateForm()} />
               <Route path="/vehicleInspectionOrder/:id/list/serviceFileInspectionUpdateForm" component={this.getServiceFileInspectionUpdateForm()} />

               <Route path="/vehicleInspectionOrder/:id/list/reportVehicleInspectionReportList" component={this.getReportVehicleInspectionReportSearch()} />
               <Route path="/vehicleInspectionOrder/:id/list/reportVehicleInspectionReportCreateForm" component={this.getReportVehicleInspectionReportCreateForm()} />
               <Route path="/vehicleInspectionOrder/:id/list/reportVehicleInspectionReportUpdateForm" component={this.getReportVehicleInspectionReportUpdateForm()} />

               <Route path="/vehicleInspectionOrder/:id/list/reportFileInspectionReportList" component={this.getReportFileInspectionReportSearch()} />
               <Route path="/vehicleInspectionOrder/:id/list/reportFileInspectionReportCreateForm" component={this.getReportFileInspectionReportCreateForm()} />
               <Route path="/vehicleInspectionOrder/:id/list/reportFileInspectionReportUpdateForm" component={this.getReportFileInspectionReportUpdateForm()} />

               <Route path="/vehicleInspectionOrder/:id/list/serviceVehicleRepairingList" component={this.getServiceVehicleRepairingSearch()} />
               <Route path="/vehicleInspectionOrder/:id/list/serviceVehicleRepairingCreateForm" component={this.getServiceVehicleRepairingCreateForm()} />
               <Route path="/vehicleInspectionOrder/:id/list/serviceVehicleRepairingUpdateForm" component={this.getServiceVehicleRepairingUpdateForm()} />

               <Route path="/vehicleInspectionOrder/:id/list/orderReviewResultList" component={this.getOrderReviewResultSearch()} />
               <Route path="/vehicleInspectionOrder/:id/list/orderReviewResultCreateForm" component={this.getOrderReviewResultCreateForm()} />
               <Route path="/vehicleInspectionOrder/:id/list/orderReviewResultUpdateForm" component={this.getOrderReviewResultUpdateForm()} />

               <Route path="/vehicleInspectionOrder/:id/list/orderRatingResultList" component={this.getOrderRatingResultSearch()} />
               <Route path="/vehicleInspectionOrder/:id/list/orderRatingResultCreateForm" component={this.getOrderRatingResultCreateForm()} />
               <Route path="/vehicleInspectionOrder/:id/list/orderRatingResultUpdateForm" component={this.getOrderRatingResultUpdateForm()} />
              
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
  vehicleInspectionOrder: state._vehicleInspectionOrder,
  ...state,
}))(VehicleInspectionOrderBizApp)



