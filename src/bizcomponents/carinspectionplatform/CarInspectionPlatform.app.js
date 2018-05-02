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


  
const menuData = {menuName:"驾乐乐车辆代审服务平台", menuFor: "carInspectionPlatform",
  		subItems: [
  {name: 'provinceList', displayName:'省'},
  {name: 'availableProductList', displayName:'产品类型'},
  {name: 'availableVehicleTypeList', displayName:'车辆类型'},
  {name: 'availableVehicleUseCharacterList', displayName:'车辆使用性质'},
  {name: 'contractList', displayName:'合同'},
  {name: 'customerList', displayName:'客户'},
  {name: 'vehicleServiceCompanyList', displayName:'商户'},
  {name: 'vehicleInfoList', displayName:'车辆信息'},
  {name: 'vehicleInspectionOrderList', displayName:'年检订单'},
  {name: 'availableReviewItemList', displayName:'评论'},
  {name: 'availableRatingItemList', displayName:'服务评分'},
  {name: 'preorderPromotionList', displayName:'提前下单优惠'},
  {name: 'orderDiscountCouponList', displayName:'优惠券'},
  {name: 'accountList', displayName:'对账单'},
  		
  		
  		],
};

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
  
  getNavMenuItems = () => {
  
 	const menuDataExpr = sessionStorage.getItem('menuData');
    const targetAppExpr = sessionStorage.getItem('targetApp');
    const menuData = JSON.parse(menuDataExpr)
    const targetApp = JSON.parse(targetAppExpr)
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
  
  getNavMenuItems2 = (objectId) => {
  
    const {menuData,targetApp} = this.props.breadcrumb;

  
    return (
      <SubMenu key="firstOne" title={
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


  getProvinceSearch = () => {
    const {ProvinceSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._carInspectionPlatform.provinceList,
      count: state._carInspectionPlatform.provinceCount,
      currentPage: state._carInspectionPlatform.provinceCurrentPageNumber,
      searchFormParameters: state._carInspectionPlatform.provinceSearchFormParameters,
      loading: state._carInspectionPlatform.loading,
      partialList: state._carInspectionPlatform.partialList,
      owner: { type: '_carInspectionPlatform', id: state._carInspectionPlatform.id, listName: 'provinceList', ref:state._carInspectionPlatform, listDisplayName: '省列表' }, // this is for model namespace and
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
      owner: { type: '_carInspectionPlatform', id: state._carInspectionPlatform.id, listName: 'provinceList', ref:state._carInspectionPlatform, listDisplayName: '省列表'}, // this is for model namespace and
    }))(ProvinceCreateForm)
  }
  
  getProvinceUpdateForm = () => {
  	const {ProvinceUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._carInspectionPlatform.selectedRows,
      currentUpdateIndex: state._carInspectionPlatform.currentUpdateIndex,
      owner: { type: '_carInspectionPlatform', id: state._carInspectionPlatform.id, listName: 'provinceList', ref:state._carInspectionPlatform, listDisplayName: '省列表' }, // this is for model namespace and
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
      partialList: state._carInspectionPlatform.partialList,
      owner: { type: '_carInspectionPlatform', id: state._carInspectionPlatform.id, listName: 'availableProductList', ref:state._carInspectionPlatform, listDisplayName: '产品类型列表' }, // this is for model namespace and
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
      owner: { type: '_carInspectionPlatform', id: state._carInspectionPlatform.id, listName: 'availableProductList', ref:state._carInspectionPlatform, listDisplayName: '产品类型列表'}, // this is for model namespace and
    }))(AvailableProductCreateForm)
  }
  
  getAvailableProductUpdateForm = () => {
  	const {AvailableProductUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._carInspectionPlatform.selectedRows,
      currentUpdateIndex: state._carInspectionPlatform.currentUpdateIndex,
      owner: { type: '_carInspectionPlatform', id: state._carInspectionPlatform.id, listName: 'availableProductList', ref:state._carInspectionPlatform, listDisplayName: '产品类型列表' }, // this is for model namespace and
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
      partialList: state._carInspectionPlatform.partialList,
      owner: { type: '_carInspectionPlatform', id: state._carInspectionPlatform.id, listName: 'availableVehicleTypeList', ref:state._carInspectionPlatform, listDisplayName: '车辆类型列表' }, // this is for model namespace and
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
      owner: { type: '_carInspectionPlatform', id: state._carInspectionPlatform.id, listName: 'availableVehicleTypeList', ref:state._carInspectionPlatform, listDisplayName: '车辆类型列表'}, // this is for model namespace and
    }))(AvailableVehicleTypeCreateForm)
  }
  
  getAvailableVehicleTypeUpdateForm = () => {
  	const {AvailableVehicleTypeUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._carInspectionPlatform.selectedRows,
      currentUpdateIndex: state._carInspectionPlatform.currentUpdateIndex,
      owner: { type: '_carInspectionPlatform', id: state._carInspectionPlatform.id, listName: 'availableVehicleTypeList', ref:state._carInspectionPlatform, listDisplayName: '车辆类型列表' }, // this is for model namespace and
    }))(AvailableVehicleTypeUpdateForm)
  }

  getAvailableVehicleUseCharacterSearch = () => {
    const {AvailableVehicleUseCharacterSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._carInspectionPlatform.availableVehicleUseCharacterList,
      count: state._carInspectionPlatform.availableVehicleUseCharacterCount,
      currentPage: state._carInspectionPlatform.availableVehicleUseCharacterCurrentPageNumber,
      searchFormParameters: state._carInspectionPlatform.availableVehicleUseCharacterSearchFormParameters,
      loading: state._carInspectionPlatform.loading,
      partialList: state._carInspectionPlatform.partialList,
      owner: { type: '_carInspectionPlatform', id: state._carInspectionPlatform.id, listName: 'availableVehicleUseCharacterList', ref:state._carInspectionPlatform, listDisplayName: '车辆使用性质列表' }, // this is for model namespace and
    }))(AvailableVehicleUseCharacterSearch)
  }
  getAvailableVehicleUseCharacterCreateForm = () => {
   	const {AvailableVehicleUseCharacterCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._carInspectionPlatform.availableVehicleUseCharacterList,
      count: state._carInspectionPlatform.availableVehicleUseCharacterCount,
      currentPage: state._carInspectionPlatform.availableVehicleUseCharacterCurrentPageNumber,
      searchFormParameters: state._carInspectionPlatform.availableVehicleUseCharacterSearchFormParameters,
      loading: state._carInspectionPlatform.loading,
      owner: { type: '_carInspectionPlatform', id: state._carInspectionPlatform.id, listName: 'availableVehicleUseCharacterList', ref:state._carInspectionPlatform, listDisplayName: '车辆使用性质列表'}, // this is for model namespace and
    }))(AvailableVehicleUseCharacterCreateForm)
  }
  
  getAvailableVehicleUseCharacterUpdateForm = () => {
  	const {AvailableVehicleUseCharacterUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._carInspectionPlatform.selectedRows,
      currentUpdateIndex: state._carInspectionPlatform.currentUpdateIndex,
      owner: { type: '_carInspectionPlatform', id: state._carInspectionPlatform.id, listName: 'availableVehicleUseCharacterList', ref:state._carInspectionPlatform, listDisplayName: '车辆使用性质列表' }, // this is for model namespace and
    }))(AvailableVehicleUseCharacterUpdateForm)
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
      partialList: state._carInspectionPlatform.partialList,
      owner: { type: '_carInspectionPlatform', id: state._carInspectionPlatform.id, listName: 'contractList', ref:state._carInspectionPlatform, listDisplayName: '合同列表' }, // this is for model namespace and
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
      owner: { type: '_carInspectionPlatform', id: state._carInspectionPlatform.id, listName: 'contractList', ref:state._carInspectionPlatform, listDisplayName: '合同列表'}, // this is for model namespace and
    }))(ContractCreateForm)
  }
  
  getContractUpdateForm = () => {
  	const {ContractUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._carInspectionPlatform.selectedRows,
      currentUpdateIndex: state._carInspectionPlatform.currentUpdateIndex,
      owner: { type: '_carInspectionPlatform', id: state._carInspectionPlatform.id, listName: 'contractList', ref:state._carInspectionPlatform, listDisplayName: '合同列表' }, // this is for model namespace and
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
      partialList: state._carInspectionPlatform.partialList,
      owner: { type: '_carInspectionPlatform', id: state._carInspectionPlatform.id, listName: 'customerList', ref:state._carInspectionPlatform, listDisplayName: '客户列表' }, // this is for model namespace and
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
      owner: { type: '_carInspectionPlatform', id: state._carInspectionPlatform.id, listName: 'customerList', ref:state._carInspectionPlatform, listDisplayName: '客户列表'}, // this is for model namespace and
    }))(CustomerCreateForm)
  }
  
  getCustomerUpdateForm = () => {
  	const {CustomerUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._carInspectionPlatform.selectedRows,
      currentUpdateIndex: state._carInspectionPlatform.currentUpdateIndex,
      owner: { type: '_carInspectionPlatform', id: state._carInspectionPlatform.id, listName: 'customerList', ref:state._carInspectionPlatform, listDisplayName: '客户列表' }, // this is for model namespace and
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
      partialList: state._carInspectionPlatform.partialList,
      owner: { type: '_carInspectionPlatform', id: state._carInspectionPlatform.id, listName: 'vehicleServiceCompanyList', ref:state._carInspectionPlatform, listDisplayName: '商户列表' }, // this is for model namespace and
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
      owner: { type: '_carInspectionPlatform', id: state._carInspectionPlatform.id, listName: 'vehicleServiceCompanyList', ref:state._carInspectionPlatform, listDisplayName: '商户列表'}, // this is for model namespace and
    }))(VehicleServiceCompanyCreateForm)
  }
  
  getVehicleServiceCompanyUpdateForm = () => {
  	const {VehicleServiceCompanyUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._carInspectionPlatform.selectedRows,
      currentUpdateIndex: state._carInspectionPlatform.currentUpdateIndex,
      owner: { type: '_carInspectionPlatform', id: state._carInspectionPlatform.id, listName: 'vehicleServiceCompanyList', ref:state._carInspectionPlatform, listDisplayName: '商户列表' }, // this is for model namespace and
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
      partialList: state._carInspectionPlatform.partialList,
      owner: { type: '_carInspectionPlatform', id: state._carInspectionPlatform.id, listName: 'vehicleInfoList', ref:state._carInspectionPlatform, listDisplayName: '车辆信息列表' }, // this is for model namespace and
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
      owner: { type: '_carInspectionPlatform', id: state._carInspectionPlatform.id, listName: 'vehicleInfoList', ref:state._carInspectionPlatform, listDisplayName: '车辆信息列表'}, // this is for model namespace and
    }))(VehicleInfoCreateForm)
  }
  
  getVehicleInfoUpdateForm = () => {
  	const {VehicleInfoUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._carInspectionPlatform.selectedRows,
      currentUpdateIndex: state._carInspectionPlatform.currentUpdateIndex,
      owner: { type: '_carInspectionPlatform', id: state._carInspectionPlatform.id, listName: 'vehicleInfoList', ref:state._carInspectionPlatform, listDisplayName: '车辆信息列表' }, // this is for model namespace and
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
      partialList: state._carInspectionPlatform.partialList,
      owner: { type: '_carInspectionPlatform', id: state._carInspectionPlatform.id, listName: 'vehicleInspectionOrderList', ref:state._carInspectionPlatform, listDisplayName: '年检订单列表' }, // this is for model namespace and
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
      owner: { type: '_carInspectionPlatform', id: state._carInspectionPlatform.id, listName: 'vehicleInspectionOrderList', ref:state._carInspectionPlatform, listDisplayName: '年检订单列表'}, // this is for model namespace and
    }))(VehicleInspectionOrderCreateForm)
  }
  
  getVehicleInspectionOrderUpdateForm = () => {
  	const {VehicleInspectionOrderUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._carInspectionPlatform.selectedRows,
      currentUpdateIndex: state._carInspectionPlatform.currentUpdateIndex,
      owner: { type: '_carInspectionPlatform', id: state._carInspectionPlatform.id, listName: 'vehicleInspectionOrderList', ref:state._carInspectionPlatform, listDisplayName: '年检订单列表' }, // this is for model namespace and
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
      partialList: state._carInspectionPlatform.partialList,
      owner: { type: '_carInspectionPlatform', id: state._carInspectionPlatform.id, listName: 'availableReviewItemList', ref:state._carInspectionPlatform, listDisplayName: '评论列表' }, // this is for model namespace and
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
      owner: { type: '_carInspectionPlatform', id: state._carInspectionPlatform.id, listName: 'availableReviewItemList', ref:state._carInspectionPlatform, listDisplayName: '评论列表'}, // this is for model namespace and
    }))(AvailableReviewItemCreateForm)
  }
  
  getAvailableReviewItemUpdateForm = () => {
  	const {AvailableReviewItemUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._carInspectionPlatform.selectedRows,
      currentUpdateIndex: state._carInspectionPlatform.currentUpdateIndex,
      owner: { type: '_carInspectionPlatform', id: state._carInspectionPlatform.id, listName: 'availableReviewItemList', ref:state._carInspectionPlatform, listDisplayName: '评论列表' }, // this is for model namespace and
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
      partialList: state._carInspectionPlatform.partialList,
      owner: { type: '_carInspectionPlatform', id: state._carInspectionPlatform.id, listName: 'availableRatingItemList', ref:state._carInspectionPlatform, listDisplayName: '服务评分列表' }, // this is for model namespace and
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
      owner: { type: '_carInspectionPlatform', id: state._carInspectionPlatform.id, listName: 'availableRatingItemList', ref:state._carInspectionPlatform, listDisplayName: '服务评分列表'}, // this is for model namespace and
    }))(AvailableRatingItemCreateForm)
  }
  
  getAvailableRatingItemUpdateForm = () => {
  	const {AvailableRatingItemUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._carInspectionPlatform.selectedRows,
      currentUpdateIndex: state._carInspectionPlatform.currentUpdateIndex,
      owner: { type: '_carInspectionPlatform', id: state._carInspectionPlatform.id, listName: 'availableRatingItemList', ref:state._carInspectionPlatform, listDisplayName: '服务评分列表' }, // this is for model namespace and
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
      partialList: state._carInspectionPlatform.partialList,
      owner: { type: '_carInspectionPlatform', id: state._carInspectionPlatform.id, listName: 'preorderPromotionList', ref:state._carInspectionPlatform, listDisplayName: '提前下单优惠列表' }, // this is for model namespace and
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
      owner: { type: '_carInspectionPlatform', id: state._carInspectionPlatform.id, listName: 'preorderPromotionList', ref:state._carInspectionPlatform, listDisplayName: '提前下单优惠列表'}, // this is for model namespace and
    }))(PreorderPromotionCreateForm)
  }
  
  getPreorderPromotionUpdateForm = () => {
  	const {PreorderPromotionUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._carInspectionPlatform.selectedRows,
      currentUpdateIndex: state._carInspectionPlatform.currentUpdateIndex,
      owner: { type: '_carInspectionPlatform', id: state._carInspectionPlatform.id, listName: 'preorderPromotionList', ref:state._carInspectionPlatform, listDisplayName: '提前下单优惠列表' }, // this is for model namespace and
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
      partialList: state._carInspectionPlatform.partialList,
      owner: { type: '_carInspectionPlatform', id: state._carInspectionPlatform.id, listName: 'orderDiscountCouponList', ref:state._carInspectionPlatform, listDisplayName: '优惠券列表' }, // this is for model namespace and
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
      owner: { type: '_carInspectionPlatform', id: state._carInspectionPlatform.id, listName: 'orderDiscountCouponList', ref:state._carInspectionPlatform, listDisplayName: '优惠券列表'}, // this is for model namespace and
    }))(OrderDiscountCouponCreateForm)
  }
  
  getOrderDiscountCouponUpdateForm = () => {
  	const {OrderDiscountCouponUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._carInspectionPlatform.selectedRows,
      currentUpdateIndex: state._carInspectionPlatform.currentUpdateIndex,
      owner: { type: '_carInspectionPlatform', id: state._carInspectionPlatform.id, listName: 'orderDiscountCouponList', ref:state._carInspectionPlatform, listDisplayName: '优惠券列表' }, // this is for model namespace and
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
      partialList: state._carInspectionPlatform.partialList,
      owner: { type: '_carInspectionPlatform', id: state._carInspectionPlatform.id, listName: 'accountList', ref:state._carInspectionPlatform, listDisplayName: '对账单列表' }, // this is for model namespace and
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
      owner: { type: '_carInspectionPlatform', id: state._carInspectionPlatform.id, listName: 'accountList', ref:state._carInspectionPlatform, listDisplayName: '对账单列表'}, // this is for model namespace and
    }))(AccountCreateForm)
  }
  
  getAccountUpdateForm = () => {
  	const {AccountUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._carInspectionPlatform.selectedRows,
      currentUpdateIndex: state._carInspectionPlatform.currentUpdateIndex,
      owner: { type: '_carInspectionPlatform', id: state._carInspectionPlatform.id, listName: 'accountList', ref:state._carInspectionPlatform, listDisplayName: '对账单列表' }, // this is for model namespace and
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
     const { breadcrumb }  = this.props
     const {CarInspectionPlatformDashboard} = GlobalComponents
     const {CarInspectionPlatformEditDetail} = GlobalComponents
     const {CarInspectionPlatformViewDetail} = GlobalComponents
     
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
               <Link to={`/carInspectionPlatform/${this.props.carInspectionPlatform.id}/dashboard`}><Icon type="dashboard" /><span>仪表板</span></Link>
             </Menu.Item>


             {this.getNavMenuItems(this.props.carInspectionPlatform.id)}
             <Menu.Item key="homepage">
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

               <Route path="/carInspectionPlatform/:id/list/availableVehicleUseCharacterList" component={this.getAvailableVehicleUseCharacterSearch()} />
               <Route path="/carInspectionPlatform/:id/list/availableVehicleUseCharacterCreateForm" component={this.getAvailableVehicleUseCharacterCreateForm()} />
               <Route path="/carInspectionPlatform/:id/list/availableVehicleUseCharacterUpdateForm" component={this.getAvailableVehicleUseCharacterUpdateForm()} />

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



