

import React, { Component } from 'react'
import { connect } from 'dva'
import { Form,Button, Row, Col, Icon, Card, Tabs, Table, Radio, DatePicker, Tooltip, Menu, Dropdown,Steps,Badge } from 'antd'
import { Link, Route, Redirect, Switch } from 'dva/router'
import numeral from 'numeral'
import moment from 'moment'
import {
  ChartCard, yuan, MiniArea, MiniBar, MiniProgress, Field, Bar, Pie, TimelineChart,

} from '../../components/Charts'
import Trend from '../../components/Trend'
import NumberInfo from '../../components/NumberInfo'
import { getTimeDistance } from '../../utils/utils'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import styles from './VehicleInspectionOrder.viewdetail.less'
import GlobalComponents from '../../custcomponents'
import DescriptionList from '../../components/DescriptionList';
const { Description } = DescriptionList;
const { Step } = Steps

const { TabPane } = Tabs
const { RangePicker } = DatePicker

const topColResponsiveProps = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 6,
  style: { marginBottom: 24 },
}

const summaryOf = (vehicleInspectionOrder) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{vehicleInspectionOrder.id}</Description> 
<Description term="订单状态">{vehicleInspectionOrder.orderStatus}</Description> 
<Description term="车牌号码">{vehicleInspectionOrder.vehicleLicensePlateNumber}</Description> 
<Description term="创建时间">{ moment(vehicleInspectionOrder.createTime).format('YYYY-MM-DD')}</Description> 
<Description term="联系人姓名">{vehicleInspectionOrder.contactName}</Description> 
<Description term="联系人手机">{vehicleInspectionOrder.contactMobileNumber}</Description> 
<Description term="产品类型">{vehicleInspectionOrder.productType}</Description> 
<Description term="6年免检">{vehicleInspectionOrder.hasSixYearExemption?'是':'否'}</Description> 
<Description term="上线检测">{vehicleInspectionOrder.hasInspection?'是':'否'}</Description> 
<Description term="二级维护">{vehicleInspectionOrder.hasSecondLevelMaintenance?'是':'否'}</Description> 
<Description term="等级评定">{vehicleInspectionOrder.hasGradeEstimation?'是':'否'}</Description> 
<Description term="商户优惠">{vehicleInspectionOrder.merchantDiscount?'是':'否'}</Description> 
<Description term="最后更新时间">{ moment(vehicleInspectionOrder.lastUpdateTime).format('YYYY-MM-DD')}</Description> 
<Description term="服务公司信息">{vehicleInspectionOrder.serviceCompanyInfo}</Description> 
<Description term="地址">{vehicleInspectionOrder.contactAddressDetail}</Description> 
<Description term="计划年检日期">{ moment(vehicleInspectionOrder.planInspectionDate).format('YYYY-MM-DD')}</Description> 
<Description term="无伤人交通事故">{vehicleInspectionOrder.trafficAccidentAnnouncement?'是':'否'}</Description> 
<Description term="提供委托书">{vehicleInspectionOrder.engagementLetterProvided?'是':'否'}</Description> 
<Description term="上门取车">{vehicleInspectionOrder.homePickUp?'是':'否'}</Description> 
<Description term="车辆类型">{vehicleInspectionOrder.vehicleType}</Description> 
<Description term="使用性质">{vehicleInspectionOrder.vehicleUseCharacter}</Description> 
<Description term="核准座位数">{vehicleInspectionOrder.vehicleSeatsQuantity}</Description> 
<Description term="注册日期">{ moment(vehicleInspectionOrder.vehicleRegistrationDate).format('YYYY-MM-DD')}</Description> 
<Description term="检测有效期">{ moment(vehicleInspectionOrder.inspectionValidationDate).format('YYYY-MM-DD')}</Description> 
<Description term="保险有效期">{ moment(vehicleInspectionOrder.insuranceValidationDate).format('YYYY-MM-DD')}</Description> 
<Description term="发动机号">{vehicleInspectionOrder.engineNumber}</Description> 
<Description term="车架号">{vehicleInspectionOrder.vehicleIdentificationNumber}</Description> 
<Description term="发证日期">{ moment(vehicleInspectionOrder.vehiclePermitIssueDate).format('YYYY-MM-DD')}</Description> 
<Description term="所有人">{vehicleInspectionOrder.vehiclePermitHolderName}</Description> 
<Description term="行驶证图1">{vehicleInspectionOrder.vehiclePermitImage1}</Description> 
<Description term="行驶证图2">{vehicleInspectionOrder.vehiclePermitImage2}</Description> 
<Description term="行驶证图3">{vehicleInspectionOrder.vehiclePermitImage3}</Description> 
<Description term="行驶证图4">{vehicleInspectionOrder.vehiclePermitImage4}</Description> 
<Description term="行驶证图5">{vehicleInspectionOrder.vehiclePermitImage5}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  vehicleInspectionOrder: state._vehicleInspectionOrder,
}))
export default class VehicleInspectionOrderViewDetail extends Component {


  state = {
    tabKey: `vehicleInspectionInsuranceOrderList`,
    stepDirection: 'horizontal',
  }
 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
    const {VehicleInspectionInsuranceOrderViewTable} = GlobalComponents;
    const {VehicleInspectionOrderChargeViewTable} = GlobalComponents;
    const {VehicleInspectionOrderServiceLogViewTable} = GlobalComponents;
    const {VehicleInspectionOrderPaymentViewTable} = GlobalComponents;
    const {HandOverChecklistItemViewTable} = GlobalComponents;
    const {ServiceVehicleMovementC2mViewTable} = GlobalComponents;
    const {ServiceVehicleMovementM2mViewTable} = GlobalComponents;
    const {ServiceVehicleMovementM2cViewTable} = GlobalComponents;
    const {ServiceFileMovementC2mViewTable} = GlobalComponents;
    const {ServiceFileMovementM2mViewTable} = GlobalComponents;
    const {ServiceFileMovementM2cViewTable} = GlobalComponents;
    const {ServiceInsuranceForInspectionViewTable} = GlobalComponents;
    const {ServiceVehicleInspectionViewTable} = GlobalComponents;
    const {ServiceFileInspectionViewTable} = GlobalComponents;
    const {ServiceVehicleRepairingViewTable} = GlobalComponents;
    const {OrderReviewResultViewTable} = GlobalComponents;
    const {OrderRatingResultViewTable} = GlobalComponents;
    const {OrderDiscountCouponViewTable} = GlobalComponents;
    const {VehicleInspectionOrderCouponViewTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    
    const vehicleInspectionOrder = this.props.vehicleInspectionOrder
    const { id, vehicleInspectionInsuranceOrderCount, vehicleInspectionOrderChargeCount, vehicleInspectionOrderServiceLogCount, vehicleInspectionOrderPaymentCount, handOverChecklistItemCount, serviceVehicleMovementC2mCount, serviceVehicleMovementM2mCount, serviceVehicleMovementM2cCount, serviceFileMovementC2mCount, serviceFileMovementM2mCount, serviceFileMovementM2cCount, serviceInsuranceForInspectionCount, serviceVehicleInspectionCount, serviceFileInspectionCount, serviceVehicleRepairingCount, orderReviewResultCount, orderRatingResultCount, orderDiscountCouponCount, vehicleInspectionOrderCouponCount } = vehicleInspectionOrder
    const { vehicleInspectionInsuranceOrderList, vehicleInspectionOrderChargeList, vehicleInspectionOrderServiceLogList, vehicleInspectionOrderPaymentList, handOverChecklistItemList, serviceVehicleMovementC2mList, serviceVehicleMovementM2mList, serviceVehicleMovementM2cList, serviceFileMovementC2mList, serviceFileMovementM2mList, serviceFileMovementM2cList, serviceInsuranceForInspectionList, serviceVehicleInspectionList, serviceFileInspectionList, serviceVehicleRepairingList, orderReviewResultList, orderRatingResultList, orderDiscountCouponList, vehicleInspectionOrderCouponList } = vehicleInspectionOrder
    
    const owner = { type: '_vehicleInspectionOrder', id }
    
    const tabList = [

      {key: 'vehicleInspectionInsuranceOrderList',tab: `车辆上线检测保险订单(${vehicleInspectionInsuranceOrderCount})`}, 
      {key: 'vehicleInspectionOrderChargeList',tab: `车辆检验订单费用(${vehicleInspectionOrderChargeCount})`}, 
      {key: 'vehicleInspectionOrderServiceLogList',tab: `年检订单执行日志(${vehicleInspectionOrderServiceLogCount})`}, 
      {key: 'vehicleInspectionOrderPaymentList',tab: `年检订单支付(${vehicleInspectionOrderPaymentCount})`}, 
      {key: 'handOverChecklistItemList',tab: `交接检查项(${handOverChecklistItemCount})`}, 
      {key: 'serviceVehicleMovementC2mList',tab: `收车服务(${serviceVehicleMovementC2mCount})`}, 
      {key: 'serviceVehicleMovementM2mList',tab: `移车服务(${serviceVehicleMovementM2mCount})`}, 
      {key: 'serviceVehicleMovementM2cList',tab: `还车服务(${serviceVehicleMovementM2cCount})`}, 
      {key: 'serviceFileMovementC2mList',tab: `收件服务(${serviceFileMovementC2mCount})`}, 
      {key: 'serviceFileMovementM2mList',tab: `移件服务(${serviceFileMovementM2mCount})`}, 
      {key: 'serviceFileMovementM2cList',tab: `还件服务(${serviceFileMovementM2cCount})`}, 
      {key: 'serviceInsuranceForInspectionList',tab: `保险服务(${serviceInsuranceForInspectionCount})`}, 
      {key: 'serviceVehicleInspectionList',tab: `车辆上线检测(${serviceVehicleInspectionCount})`}, 
      {key: 'serviceFileInspectionList',tab: `6年免检服务(${serviceFileInspectionCount})`}, 
      {key: 'serviceVehicleRepairingList',tab: `维修服务(${serviceVehicleRepairingCount})`}, 
      {key: 'orderReviewResultList',tab: `订单评论结果(${orderReviewResultCount})`}, 
      {key: 'orderRatingResultList',tab: `订单评分结果(${orderRatingResultCount})`}, 
      {key: 'orderDiscountCouponList',tab: `优惠券(${orderDiscountCouponCount})`}, 
      {key: 'vehicleInspectionOrderCouponList',tab: `优惠券使用记录(${vehicleInspectionOrderCouponCount})`}, 
   

   ];
   
   
    const contentList = {
       vehicleInspectionInsuranceOrderList:  
        <VehicleInspectionInsuranceOrderViewTable data={vehicleInspectionInsuranceOrderList} owner={owner} {...this.props} />,
 
      vehicleInspectionOrderChargeList:  
        <VehicleInspectionOrderChargeViewTable data={vehicleInspectionOrderChargeList} owner={owner} {...this.props} />,
 
      vehicleInspectionOrderServiceLogList:  
        <VehicleInspectionOrderServiceLogViewTable data={vehicleInspectionOrderServiceLogList} owner={owner} {...this.props} />,
 
      vehicleInspectionOrderPaymentList:  
        <VehicleInspectionOrderPaymentViewTable data={vehicleInspectionOrderPaymentList} owner={owner} {...this.props} />,
 
      handOverChecklistItemList:  
        <HandOverChecklistItemViewTable data={handOverChecklistItemList} owner={owner} {...this.props} />,
 
      serviceVehicleMovementC2mList:  
        <ServiceVehicleMovementC2mViewTable data={serviceVehicleMovementC2mList} owner={owner} {...this.props} />,
 
      serviceVehicleMovementM2mList:  
        <ServiceVehicleMovementM2mViewTable data={serviceVehicleMovementM2mList} owner={owner} {...this.props} />,
 
      serviceVehicleMovementM2cList:  
        <ServiceVehicleMovementM2cViewTable data={serviceVehicleMovementM2cList} owner={owner} {...this.props} />,
 
      serviceFileMovementC2mList:  
        <ServiceFileMovementC2mViewTable data={serviceFileMovementC2mList} owner={owner} {...this.props} />,
 
      serviceFileMovementM2mList:  
        <ServiceFileMovementM2mViewTable data={serviceFileMovementM2mList} owner={owner} {...this.props} />,
 
      serviceFileMovementM2cList:  
        <ServiceFileMovementM2cViewTable data={serviceFileMovementM2cList} owner={owner} {...this.props} />,
 
      serviceInsuranceForInspectionList:  
        <ServiceInsuranceForInspectionViewTable data={serviceInsuranceForInspectionList} owner={owner} {...this.props} />,
 
      serviceVehicleInspectionList:  
        <ServiceVehicleInspectionViewTable data={serviceVehicleInspectionList} owner={owner} {...this.props} />,
 
      serviceFileInspectionList:  
        <ServiceFileInspectionViewTable data={serviceFileInspectionList} owner={owner} {...this.props} />,
 
      serviceVehicleRepairingList:  
        <ServiceVehicleRepairingViewTable data={serviceVehicleRepairingList} owner={owner} {...this.props} />,
 
      orderReviewResultList:  
        <OrderReviewResultViewTable data={orderReviewResultList} owner={owner} {...this.props} />,
 
      orderRatingResultList:  
        <OrderRatingResultViewTable data={orderRatingResultList} owner={owner} {...this.props} />,
 
      orderDiscountCouponList:  
        <OrderDiscountCouponViewTable data={orderDiscountCouponList} owner={owner} {...this.props} />,
 
      vehicleInspectionOrderCouponList:  
        <VehicleInspectionOrderCouponViewTable data={vehicleInspectionOrderCouponList} owner={owner} {...this.props} />,
 
    
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="年检订单总览"
        content={summaryOf(this.props.vehicleInspectionOrder)}
        wrapperClassName={styles.advancedForm}
      >

      
      
	<Card 
  		className={styles.card} 
  		bordered={false}
  		tabList={tabList}
  		onTabChange={this.onTabChange}>
            {contentList[this.state.tabKey]}
        </Card>

 
      </PageHeaderLayout>
    )
  }
}



