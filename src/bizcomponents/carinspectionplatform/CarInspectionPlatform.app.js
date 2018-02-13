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
import styles from './CarInspectionPlatform.app.less'


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

class CarInspectionPlatformBizApp extends React.PureComponent {
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
      return ['/carInspectionPlatform/']
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
          <span>驾乐乐车辆代审服务平台</span>
        </span>}
      >

        <Menu.Item>
          <Link to={`/carInspectionPlatform/${objectId}/list/provinceList`}>省</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/carInspectionPlatform/${objectId}/list/availableProductList`}>产品类型</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/carInspectionPlatform/${objectId}/list/availableVehicleTypeList`}>可用的车辆类型</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/carInspectionPlatform/${objectId}/list/contractList`}>合同</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/carInspectionPlatform/${objectId}/list/customerList`}>客户</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/carInspectionPlatform/${objectId}/list/vehicleServiceCompanyList`}>商户</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/carInspectionPlatform/${objectId}/list/vehicleInfoList`}>车辆信息</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/carInspectionPlatform/${objectId}/list/vehicleInspectionOrderList`}>上线检测订单</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/carInspectionPlatform/${objectId}/list/availableReviewItemList`}>评论条目</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/carInspectionPlatform/${objectId}/list/availableRatingItemList`}>评分条目</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/carInspectionPlatform/${objectId}/list/preorderPromotionList`}>预订促销</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/carInspectionPlatform/${objectId}/list/orderDiscountCouponList`}>订单的折扣券</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/carInspectionPlatform/${objectId}/list/accountList`}>对账单</Link>
        </Menu.Item>
      </SubMenu>
    )
  }


  getProvinceSearch = () => {
    const {ProvinceSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._carInspectionPlatform.provinceList,
      count: state._carInspectionPlatform.provinceCount,
      currentPage: state._carInspectionPlatform.provinceCurrentPageNumber,
      searchFormParameters: state._carInspectionPlatform.provinceSearchFormParameters,
      loading: state._carInspectionPlatform.loading,
      owner: { type: '_carInspectionPlatform', id: state._carInspectionPlatform.id, listName: 'provinceList' }, // this is for model namespace and
    }))(ProvinceSearch)
  }
  getProvinceCreateForm = () => {
   	const {ProvinceCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._carInspectionPlatform.provinceList,
      count: state._carInspectionPlatform.provinceCount,
      currentPage: state._carInspectionPlatform.provinceCurrentPageNumber,
      searchFormParameters: state._carInspectionPlatform.provinceSearchFormParameters,
      loading: state._carInspectionPlatform.loading,
      owner: { type: '_carInspectionPlatform', id: state._carInspectionPlatform.id, listName: 'provinceList'}, // this is for model namespace and
    }))(ProvinceCreateForm)
  }
  
  getProvinceUpdateForm = () => {
  	const {ProvinceUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._carInspectionPlatform.selectedRows,
      currentUpdateIndex: state._carInspectionPlatform.currentUpdateIndex,
      owner: { type: '_carInspectionPlatform', id: state._carInspectionPlatform.id, listName: 'provinceList' }, // this is for model namespace and
    }))(ProvinceUpdateForm)
  }

  getAvailableProductSearch = () => {
    const {AvailableProductSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._carInspectionPlatform.availableProductList,
      count: state._carInspectionPlatform.availableProductCount,
      currentPage: state._carInspectionPlatform.availableProductCurrentPageNumber,
      searchFormParameters: state._carInspectionPlatform.availableProductSearchFormParameters,
      loading: state._carInspectionPlatform.loading,
      owner: { type: '_carInspectionPlatform', id: state._carInspectionPlatform.id, listName: 'availableProductList' }, // this is for model namespace and
    }))(AvailableProductSearch)
  }
  getAvailableProductCreateForm = () => {
   	const {AvailableProductCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._carInspectionPlatform.availableProductList,
      count: state._carInspectionPlatform.availableProductCount,
      currentPage: state._carInspectionPlatform.availableProductCurrentPageNumber,
      searchFormParameters: state._carInspectionPlatform.availableProductSearchFormParameters,
      loading: state._carInspectionPlatform.loading,
      owner: { type: '_carInspectionPlatform', id: state._carInspectionPlatform.id, listName: 'availableProductList'}, // this is for model namespace and
    }))(AvailableProductCreateForm)
  }
  
  getAvailableProductUpdateForm = () => {
  	const {AvailableProductUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._carInspectionPlatform.selectedRows,
      currentUpdateIndex: state._carInspectionPlatform.currentUpdateIndex,
      owner: { type: '_carInspectionPlatform', id: state._carInspectionPlatform.id, listName: 'availableProductList' }, // this is for model namespace and
    }))(AvailableProductUpdateForm)
  }

  getAvailableVehicleTypeSearch = () => {
    const {AvailableVehicleTypeSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._carInspectionPlatform.availableVehicleTypeList,
      count: state._carInspectionPlatform.availableVehicleTypeCount,
      currentPage: state._carInspectionPlatform.availableVehicleTypeCurrentPageNumber,
      searchFormParameters: state._carInspectionPlatform.availableVehicleTypeSearchFormParameters,
      loading: state._carInspectionPlatform.loading,
      owner: { type: '_carInspectionPlatform', id: state._carInspectionPlatform.id, listName: 'availableVehicleTypeList' }, // this is for model namespace and
    }))(AvailableVehicleTypeSearch)
  }
  getAvailableVehicleTypeCreateForm = () => {
   	const {AvailableVehicleTypeCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._carInspectionPlatform.availableVehicleTypeList,
      count: state._carInspectionPlatform.availableVehicleTypeCount,
      currentPage: state._carInspectionPlatform.availableVehicleTypeCurrentPageNumber,
      searchFormParameters: state._carInspectionPlatform.availableVehicleTypeSearchFormParameters,
      loading: state._carInspectionPlatform.loading,
      owner: { type: '_carInspectionPlatform', id: state._carInspectionPlatform.id, listName: 'availableVehicleTypeList'}, // this is for model namespace and
    }))(AvailableVehicleTypeCreateForm)
  }
  
  getAvailableVehicleTypeUpdateForm = () => {
  	const {AvailableVehicleTypeUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._carInspectionPlatform.selectedRows,
      currentUpdateIndex: state._carInspectionPlatform.currentUpdateIndex,
      owner: { type: '_carInspectionPlatform', id: state._carInspectionPlatform.id, listName: 'availableVehicleTypeList' }, // this is for model namespace and
    }))(AvailableVehicleTypeUpdateForm)
  }

  getContractSearch = () => {
    const {ContractSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._carInspectionPlatform.contractList,
      count: state._carInspectionPlatform.contractCount,
      currentPage: state._carInspectionPlatform.contractCurrentPageNumber,
      searchFormParameters: state._carInspectionPlatform.contractSearchFormParameters,
      loading: state._carInspectionPlatform.loading,
      owner: { type: '_carInspectionPlatform', id: state._carInspectionPlatform.id, listName: 'contractList' }, // this is for model namespace and
    }))(ContractSearch)
  }
  getContractCreateForm = () => {
   	const {ContractCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._carInspectionPlatform.contractList,
      count: state._carInspectionPlatform.contractCount,
      currentPage: state._carInspectionPlatform.contractCurrentPageNumber,
      searchFormParameters: state._carInspectionPlatform.contractSearchFormParameters,
      loading: state._carInspectionPlatform.loading,
      owner: { type: '_carInspectionPlatform', id: state._carInspectionPlatform.id, listName: 'contractList'}, // this is for model namespace and
    }))(ContractCreateForm)
  }
  
  getContractUpdateForm = () => {
  	const {ContractUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._carInspectionPlatform.selectedRows,
      currentUpdateIndex: state._carInspectionPlatform.currentUpdateIndex,
      owner: { type: '_carInspectionPlatform', id: state._carInspectionPlatform.id, listName: 'contractList' }, // this is for model namespace and
    }))(ContractUpdateForm)
  }

  getCustomerSearch = () => {
    const {CustomerSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._carInspectionPlatform.customerList,
      count: state._carInspectionPlatform.customerCount,
      currentPage: state._carInspectionPlatform.customerCurrentPageNumber,
      searchFormParameters: state._carInspectionPlatform.customerSearchFormParameters,
      loading: state._carInspectionPlatform.loading,
      owner: { type: '_carInspectionPlatform', id: state._carInspectionPlatform.id, listName: 'customerList' }, // this is for model namespace and
    }))(CustomerSearch)
  }
  getCustomerCreateForm = () => {
   	const {CustomerCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._carInspectionPlatform.customerList,
      count: state._carInspectionPlatform.customerCount,
      currentPage: state._carInspectionPlatform.customerCurrentPageNumber,
      searchFormParameters: state._carInspectionPlatform.customerSearchFormParameters,
      loading: state._carInspectionPlatform.loading,
      owner: { type: '_carInspectionPlatform', id: state._carInspectionPlatform.id, listName: 'customerList'}, // this is for model namespace and
    }))(CustomerCreateForm)
  }
  
  getCustomerUpdateForm = () => {
  	const {CustomerUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._carInspectionPlatform.selectedRows,
      currentUpdateIndex: state._carInspectionPlatform.currentUpdateIndex,
      owner: { type: '_carInspectionPlatform', id: state._carInspectionPlatform.id, listName: 'customerList' }, // this is for model namespace and
    }))(CustomerUpdateForm)
  }

  getVehicleServiceCompanySearch = () => {
    const {VehicleServiceCompanySearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._carInspectionPlatform.vehicleServiceCompanyList,
      count: state._carInspectionPlatform.vehicleServiceCompanyCount,
      currentPage: state._carInspectionPlatform.vehicleServiceCompanyCurrentPageNumber,
      searchFormParameters: state._carInspectionPlatform.vehicleServiceCompanySearchFormParameters,
      loading: state._carInspectionPlatform.loading,
      owner: { type: '_carInspectionPlatform', id: state._carInspectionPlatform.id, listName: 'vehicleServiceCompanyList' }, // this is for model namespace and
    }))(VehicleServiceCompanySearch)
  }
  getVehicleServiceCompanyCreateForm = () => {
   	const {VehicleServiceCompanyCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._carInspectionPlatform.vehicleServiceCompanyList,
      count: state._carInspectionPlatform.vehicleServiceCompanyCount,
      currentPage: state._carInspectionPlatform.vehicleServiceCompanyCurrentPageNumber,
      searchFormParameters: state._carInspectionPlatform.vehicleServiceCompanySearchFormParameters,
      loading: state._carInspectionPlatform.loading,
      owner: { type: '_carInspectionPlatform', id: state._carInspectionPlatform.id, listName: 'vehicleServiceCompanyList'}, // this is for model namespace and
    }))(VehicleServiceCompanyCreateForm)
  }
  
  getVehicleServiceCompanyUpdateForm = () => {
  	const {VehicleServiceCompanyUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._carInspectionPlatform.selectedRows,
      currentUpdateIndex: state._carInspectionPlatform.currentUpdateIndex,
      owner: { type: '_carInspectionPlatform', id: state._carInspectionPlatform.id, listName: 'vehicleServiceCompanyList' }, // this is for model namespace and
    }))(VehicleServiceCompanyUpdateForm)
  }

  getVehicleInfoSearch = () => {
    const {VehicleInfoSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._carInspectionPlatform.vehicleInfoList,
      count: state._carInspectionPlatform.vehicleInfoCount,
      currentPage: state._carInspectionPlatform.vehicleInfoCurrentPageNumber,
      searchFormParameters: state._carInspectionPlatform.vehicleInfoSearchFormParameters,
      loading: state._carInspectionPlatform.loading,
      owner: { type: '_carInspectionPlatform', id: state._carInspectionPlatform.id, listName: 'vehicleInfoList' }, // this is for model namespace and
    }))(VehicleInfoSearch)
  }
  getVehicleInfoCreateForm = () => {
   	const {VehicleInfoCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._carInspectionPlatform.vehicleInfoList,
      count: state._carInspectionPlatform.vehicleInfoCount,
      currentPage: state._carInspectionPlatform.vehicleInfoCurrentPageNumber,
      searchFormParameters: state._carInspectionPlatform.vehicleInfoSearchFormParameters,
      loading: state._carInspectionPlatform.loading,
      owner: { type: '_carInspectionPlatform', id: state._carInspectionPlatform.id, listName: 'vehicleInfoList'}, // this is for model namespace and
    }))(VehicleInfoCreateForm)
  }
  
  getVehicleInfoUpdateForm = () => {
  	const {VehicleInfoUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._carInspectionPlatform.selectedRows,
      currentUpdateIndex: state._carInspectionPlatform.currentUpdateIndex,
      owner: { type: '_carInspectionPlatform', id: state._carInspectionPlatform.id, listName: 'vehicleInfoList' }, // this is for model namespace and
    }))(VehicleInfoUpdateForm)
  }

  getVehicleInspectionOrderSearch = () => {
    const {VehicleInspectionOrderSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._carInspectionPlatform.vehicleInspectionOrderList,
      count: state._carInspectionPlatform.vehicleInspectionOrderCount,
      currentPage: state._carInspectionPlatform.vehicleInspectionOrderCurrentPageNumber,
      searchFormParameters: state._carInspectionPlatform.vehicleInspectionOrderSearchFormParameters,
      loading: state._carInspectionPlatform.loading,
      owner: { type: '_carInspectionPlatform', id: state._carInspectionPlatform.id, listName: 'vehicleInspectionOrderList' }, // this is for model namespace and
    }))(VehicleInspectionOrderSearch)
  }
  getVehicleInspectionOrderCreateForm = () => {
   	const {VehicleInspectionOrderCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._carInspectionPlatform.vehicleInspectionOrderList,
      count: state._carInspectionPlatform.vehicleInspectionOrderCount,
      currentPage: state._carInspectionPlatform.vehicleInspectionOrderCurrentPageNumber,
      searchFormParameters: state._carInspectionPlatform.vehicleInspectionOrderSearchFormParameters,
      loading: state._carInspectionPlatform.loading,
      owner: { type: '_carInspectionPlatform', id: state._carInspectionPlatform.id, listName: 'vehicleInspectionOrderList'}, // this is for model namespace and
    }))(VehicleInspectionOrderCreateForm)
  }
  
  getVehicleInspectionOrderUpdateForm = () => {
  	const {VehicleInspectionOrderUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._carInspectionPlatform.selectedRows,
      currentUpdateIndex: state._carInspectionPlatform.currentUpdateIndex,
      owner: { type: '_carInspectionPlatform', id: state._carInspectionPlatform.id, listName: 'vehicleInspectionOrderList' }, // this is for model namespace and
    }))(VehicleInspectionOrderUpdateForm)
  }

  getAvailableReviewItemSearch = () => {
    const {AvailableReviewItemSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._carInspectionPlatform.availableReviewItemList,
      count: state._carInspectionPlatform.availableReviewItemCount,
      currentPage: state._carInspectionPlatform.availableReviewItemCurrentPageNumber,
      searchFormParameters: state._carInspectionPlatform.availableReviewItemSearchFormParameters,
      loading: state._carInspectionPlatform.loading,
      owner: { type: '_carInspectionPlatform', id: state._carInspectionPlatform.id, listName: 'availableReviewItemList' }, // this is for model namespace and
    }))(AvailableReviewItemSearch)
  }
  getAvailableReviewItemCreateForm = () => {
   	const {AvailableReviewItemCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._carInspectionPlatform.availableReviewItemList,
      count: state._carInspectionPlatform.availableReviewItemCount,
      currentPage: state._carInspectionPlatform.availableReviewItemCurrentPageNumber,
      searchFormParameters: state._carInspectionPlatform.availableReviewItemSearchFormParameters,
      loading: state._carInspectionPlatform.loading,
      owner: { type: '_carInspectionPlatform', id: state._carInspectionPlatform.id, listName: 'availableReviewItemList'}, // this is for model namespace and
    }))(AvailableReviewItemCreateForm)
  }
  
  getAvailableReviewItemUpdateForm = () => {
  	const {AvailableReviewItemUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._carInspectionPlatform.selectedRows,
      currentUpdateIndex: state._carInspectionPlatform.currentUpdateIndex,
      owner: { type: '_carInspectionPlatform', id: state._carInspectionPlatform.id, listName: 'availableReviewItemList' }, // this is for model namespace and
    }))(AvailableReviewItemUpdateForm)
  }

  getAvailableRatingItemSearch = () => {
    const {AvailableRatingItemSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._carInspectionPlatform.availableRatingItemList,
      count: state._carInspectionPlatform.availableRatingItemCount,
      currentPage: state._carInspectionPlatform.availableRatingItemCurrentPageNumber,
      searchFormParameters: state._carInspectionPlatform.availableRatingItemSearchFormParameters,
      loading: state._carInspectionPlatform.loading,
      owner: { type: '_carInspectionPlatform', id: state._carInspectionPlatform.id, listName: 'availableRatingItemList' }, // this is for model namespace and
    }))(AvailableRatingItemSearch)
  }
  getAvailableRatingItemCreateForm = () => {
   	const {AvailableRatingItemCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._carInspectionPlatform.availableRatingItemList,
      count: state._carInspectionPlatform.availableRatingItemCount,
      currentPage: state._carInspectionPlatform.availableRatingItemCurrentPageNumber,
      searchFormParameters: state._carInspectionPlatform.availableRatingItemSearchFormParameters,
      loading: state._carInspectionPlatform.loading,
      owner: { type: '_carInspectionPlatform', id: state._carInspectionPlatform.id, listName: 'availableRatingItemList'}, // this is for model namespace and
    }))(AvailableRatingItemCreateForm)
  }
  
  getAvailableRatingItemUpdateForm = () => {
  	const {AvailableRatingItemUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._carInspectionPlatform.selectedRows,
      currentUpdateIndex: state._carInspectionPlatform.currentUpdateIndex,
      owner: { type: '_carInspectionPlatform', id: state._carInspectionPlatform.id, listName: 'availableRatingItemList' }, // this is for model namespace and
    }))(AvailableRatingItemUpdateForm)
  }

  getPreorderPromotionSearch = () => {
    const {PreorderPromotionSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._carInspectionPlatform.preorderPromotionList,
      count: state._carInspectionPlatform.preorderPromotionCount,
      currentPage: state._carInspectionPlatform.preorderPromotionCurrentPageNumber,
      searchFormParameters: state._carInspectionPlatform.preorderPromotionSearchFormParameters,
      loading: state._carInspectionPlatform.loading,
      owner: { type: '_carInspectionPlatform', id: state._carInspectionPlatform.id, listName: 'preorderPromotionList' }, // this is for model namespace and
    }))(PreorderPromotionSearch)
  }
  getPreorderPromotionCreateForm = () => {
   	const {PreorderPromotionCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._carInspectionPlatform.preorderPromotionList,
      count: state._carInspectionPlatform.preorderPromotionCount,
      currentPage: state._carInspectionPlatform.preorderPromotionCurrentPageNumber,
      searchFormParameters: state._carInspectionPlatform.preorderPromotionSearchFormParameters,
      loading: state._carInspectionPlatform.loading,
      owner: { type: '_carInspectionPlatform', id: state._carInspectionPlatform.id, listName: 'preorderPromotionList'}, // this is for model namespace and
    }))(PreorderPromotionCreateForm)
  }
  
  getPreorderPromotionUpdateForm = () => {
  	const {PreorderPromotionUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._carInspectionPlatform.selectedRows,
      currentUpdateIndex: state._carInspectionPlatform.currentUpdateIndex,
      owner: { type: '_carInspectionPlatform', id: state._carInspectionPlatform.id, listName: 'preorderPromotionList' }, // this is for model namespace and
    }))(PreorderPromotionUpdateForm)
  }

  getOrderDiscountCouponSearch = () => {
    const {OrderDiscountCouponSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._carInspectionPlatform.orderDiscountCouponList,
      count: state._carInspectionPlatform.orderDiscountCouponCount,
      currentPage: state._carInspectionPlatform.orderDiscountCouponCurrentPageNumber,
      searchFormParameters: state._carInspectionPlatform.orderDiscountCouponSearchFormParameters,
      loading: state._carInspectionPlatform.loading,
      owner: { type: '_carInspectionPlatform', id: state._carInspectionPlatform.id, listName: 'orderDiscountCouponList' }, // this is for model namespace and
    }))(OrderDiscountCouponSearch)
  }
  getOrderDiscountCouponCreateForm = () => {
   	const {OrderDiscountCouponCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._carInspectionPlatform.orderDiscountCouponList,
      count: state._carInspectionPlatform.orderDiscountCouponCount,
      currentPage: state._carInspectionPlatform.orderDiscountCouponCurrentPageNumber,
      searchFormParameters: state._carInspectionPlatform.orderDiscountCouponSearchFormParameters,
      loading: state._carInspectionPlatform.loading,
      owner: { type: '_carInspectionPlatform', id: state._carInspectionPlatform.id, listName: 'orderDiscountCouponList'}, // this is for model namespace and
    }))(OrderDiscountCouponCreateForm)
  }
  
  getOrderDiscountCouponUpdateForm = () => {
  	const {OrderDiscountCouponUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._carInspectionPlatform.selectedRows,
      currentUpdateIndex: state._carInspectionPlatform.currentUpdateIndex,
      owner: { type: '_carInspectionPlatform', id: state._carInspectionPlatform.id, listName: 'orderDiscountCouponList' }, // this is for model namespace and
    }))(OrderDiscountCouponUpdateForm)
  }

  getAccountSearch = () => {
    const {AccountSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._carInspectionPlatform.accountList,
      count: state._carInspectionPlatform.accountCount,
      currentPage: state._carInspectionPlatform.accountCurrentPageNumber,
      searchFormParameters: state._carInspectionPlatform.accountSearchFormParameters,
      loading: state._carInspectionPlatform.loading,
      owner: { type: '_carInspectionPlatform', id: state._carInspectionPlatform.id, listName: 'accountList' }, // this is for model namespace and
    }))(AccountSearch)
  }
  getAccountCreateForm = () => {
   	const {AccountCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._carInspectionPlatform.accountList,
      count: state._carInspectionPlatform.accountCount,
      currentPage: state._carInspectionPlatform.accountCurrentPageNumber,
      searchFormParameters: state._carInspectionPlatform.accountSearchFormParameters,
      loading: state._carInspectionPlatform.loading,
      owner: { type: '_carInspectionPlatform', id: state._carInspectionPlatform.id, listName: 'accountList'}, // this is for model namespace and
    }))(AccountCreateForm)
  }
  
  getAccountUpdateForm = () => {
  	const {AccountUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._carInspectionPlatform.selectedRows,
      currentUpdateIndex: state._carInspectionPlatform.currentUpdateIndex,
      owner: { type: '_carInspectionPlatform', id: state._carInspectionPlatform.id, listName: 'accountList' }, // this is for model namespace and
    }))(AccountUpdateForm)
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
    
     const {CarInspectionPlatformDashboard} = GlobalComponents
     const {CarInspectionPlatformEditDetail} = GlobalComponents
     const {CarInspectionPlatformViewDetail} = GlobalComponents
     
     
     
     
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
             <Link to="/home"> <h1>驾乐乐车辆代审服务平台</h1></Link>
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
               <Link to={`/carInspectionPlatform/${this.props.carInspectionPlatform.id}/dashboard`}><Icon type="dashboard" /><span>仪表板</span></Link>
             </Menu.Item>
             <Menu.Item >
               <Link to={`/carInspectionPlatform/${this.props.carInspectionPlatform.id}/editDetail`}><Icon type="edit" /><span>详情编辑</span></Link>
             </Menu.Item>
             <Menu.Item >
               <Link to={`/carInspectionPlatform/${this.props.carInspectionPlatform.id}/viewDetail`}><Icon type="eye-o" /><span>详情查看</span></Link>
             </Menu.Item>
             

             {this.getNavMenuItems(this.props.carInspectionPlatform.id)}
             <Menu.Item >
               <Link to={"/home"}><Icon type="home" /><span>回到主页</span></Link>
             </Menu.Item>
           </Menu>
         </Sider>
         <Layout>
           <Content style={{ margin: '24px 24px 0', height: '100%' }}>
             <Switch>
               <Route path="/carInspectionPlatform/:id/dashboard" component={CarInspectionPlatformDashboard} />
               <Route path="/carInspectionPlatform/:id/editDetail" component={CarInspectionPlatformEditDetail} />
               <Route path="/carInspectionPlatform/:id/viewDetail" component={CarInspectionPlatformViewDetail} />
               

               <Route path="/carInspectionPlatform/:id/list/provinceList" component={this.getProvinceSearch()} />
               <Route path="/carInspectionPlatform/:id/list/provinceCreateForm" component={this.getProvinceCreateForm()} />
               <Route path="/carInspectionPlatform/:id/list/provinceUpdateForm" component={this.getProvinceUpdateForm()} />

               <Route path="/carInspectionPlatform/:id/list/availableProductList" component={this.getAvailableProductSearch()} />
               <Route path="/carInspectionPlatform/:id/list/availableProductCreateForm" component={this.getAvailableProductCreateForm()} />
               <Route path="/carInspectionPlatform/:id/list/availableProductUpdateForm" component={this.getAvailableProductUpdateForm()} />

               <Route path="/carInspectionPlatform/:id/list/availableVehicleTypeList" component={this.getAvailableVehicleTypeSearch()} />
               <Route path="/carInspectionPlatform/:id/list/availableVehicleTypeCreateForm" component={this.getAvailableVehicleTypeCreateForm()} />
               <Route path="/carInspectionPlatform/:id/list/availableVehicleTypeUpdateForm" component={this.getAvailableVehicleTypeUpdateForm()} />

               <Route path="/carInspectionPlatform/:id/list/contractList" component={this.getContractSearch()} />
               <Route path="/carInspectionPlatform/:id/list/contractCreateForm" component={this.getContractCreateForm()} />
               <Route path="/carInspectionPlatform/:id/list/contractUpdateForm" component={this.getContractUpdateForm()} />

               <Route path="/carInspectionPlatform/:id/list/customerList" component={this.getCustomerSearch()} />
               <Route path="/carInspectionPlatform/:id/list/customerCreateForm" component={this.getCustomerCreateForm()} />
               <Route path="/carInspectionPlatform/:id/list/customerUpdateForm" component={this.getCustomerUpdateForm()} />

               <Route path="/carInspectionPlatform/:id/list/vehicleServiceCompanyList" component={this.getVehicleServiceCompanySearch()} />
               <Route path="/carInspectionPlatform/:id/list/vehicleServiceCompanyCreateForm" component={this.getVehicleServiceCompanyCreateForm()} />
               <Route path="/carInspectionPlatform/:id/list/vehicleServiceCompanyUpdateForm" component={this.getVehicleServiceCompanyUpdateForm()} />

               <Route path="/carInspectionPlatform/:id/list/vehicleInfoList" component={this.getVehicleInfoSearch()} />
               <Route path="/carInspectionPlatform/:id/list/vehicleInfoCreateForm" component={this.getVehicleInfoCreateForm()} />
               <Route path="/carInspectionPlatform/:id/list/vehicleInfoUpdateForm" component={this.getVehicleInfoUpdateForm()} />

               <Route path="/carInspectionPlatform/:id/list/vehicleInspectionOrderList" component={this.getVehicleInspectionOrderSearch()} />
               <Route path="/carInspectionPlatform/:id/list/vehicleInspectionOrderCreateForm" component={this.getVehicleInspectionOrderCreateForm()} />
               <Route path="/carInspectionPlatform/:id/list/vehicleInspectionOrderUpdateForm" component={this.getVehicleInspectionOrderUpdateForm()} />

               <Route path="/carInspectionPlatform/:id/list/availableReviewItemList" component={this.getAvailableReviewItemSearch()} />
               <Route path="/carInspectionPlatform/:id/list/availableReviewItemCreateForm" component={this.getAvailableReviewItemCreateForm()} />
               <Route path="/carInspectionPlatform/:id/list/availableReviewItemUpdateForm" component={this.getAvailableReviewItemUpdateForm()} />

               <Route path="/carInspectionPlatform/:id/list/availableRatingItemList" component={this.getAvailableRatingItemSearch()} />
               <Route path="/carInspectionPlatform/:id/list/availableRatingItemCreateForm" component={this.getAvailableRatingItemCreateForm()} />
               <Route path="/carInspectionPlatform/:id/list/availableRatingItemUpdateForm" component={this.getAvailableRatingItemUpdateForm()} />

               <Route path="/carInspectionPlatform/:id/list/preorderPromotionList" component={this.getPreorderPromotionSearch()} />
               <Route path="/carInspectionPlatform/:id/list/preorderPromotionCreateForm" component={this.getPreorderPromotionCreateForm()} />
               <Route path="/carInspectionPlatform/:id/list/preorderPromotionUpdateForm" component={this.getPreorderPromotionUpdateForm()} />

               <Route path="/carInspectionPlatform/:id/list/orderDiscountCouponList" component={this.getOrderDiscountCouponSearch()} />
               <Route path="/carInspectionPlatform/:id/list/orderDiscountCouponCreateForm" component={this.getOrderDiscountCouponCreateForm()} />
               <Route path="/carInspectionPlatform/:id/list/orderDiscountCouponUpdateForm" component={this.getOrderDiscountCouponUpdateForm()} />

               <Route path="/carInspectionPlatform/:id/list/accountList" component={this.getAccountSearch()} />
               <Route path="/carInspectionPlatform/:id/list/accountCreateForm" component={this.getAccountCreateForm()} />
               <Route path="/carInspectionPlatform/:id/list/accountUpdateForm" component={this.getAccountUpdateForm()} />
              
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
  carInspectionPlatform: state._carInspectionPlatform,
  ...state,
}))(CarInspectionPlatformBizApp)



