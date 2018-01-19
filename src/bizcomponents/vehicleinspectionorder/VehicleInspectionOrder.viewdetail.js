

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
<Description term="序号">{vehicleInspectionOrder.id}</Description> 
<Description term="订单状态">{vehicleInspectionOrder.orderStatus}</Description> 
<Description term="创建时间">{ moment(vehicleInspectionOrder.createTime).format('YYYY-MM-DD')}</Description> 
<Description term="联系人姓名">{vehicleInspectionOrder.contactName}</Description> 
<Description term="联系手机号码">{vehicleInspectionOrder.contactMobileNumber}</Description> 
<Description term="地址">{vehicleInspectionOrder.contactAddressDetail}</Description> 
<Description term="车牌号码">{vehicleInspectionOrder.vehicleLicensePlateNumber}</Description> 
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
<Description term="车辆行驶证号码">{vehicleInspectionOrder.vehiclePermitNumber}</Description> 
<Description term="行驶证有效期">{ moment(vehicleInspectionOrder.vehiclePermitExpirationDate).format('YYYY-MM-DD')}</Description> 
<Description term="图1">{vehicleInspectionOrder.vehiclePermitImage1}</Description> 
<Description term="图2">{vehicleInspectionOrder.vehiclePermitImage2}</Description> 
<Description term="图3">{vehicleInspectionOrder.vehiclePermitImage3}</Description> 
<Description term="图4">{vehicleInspectionOrder.vehiclePermitImage4}</Description> 
<Description term="图5">{vehicleInspectionOrder.vehiclePermitImage5}</Description> 
	
        
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
    const {VehicleInspectionOrderServiceLogViewTable} = GlobalComponents;
    const {VehicleInspectionOrderCouponViewTable} = GlobalComponents;
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
  
    // eslint-disable-next-line max-len
    
    const vehicleInspectionOrder = this.props.vehicleInspectionOrder
    const { id, vehicleInspectionInsuranceOrderCount, vehicleInspectionOrderServiceLogCount, vehicleInspectionOrderCouponCount, vehicleInspectionOrderPaymentCount, handOverChecklistItemCount, serviceVehicleMovementC2mCount, serviceVehicleMovementM2mCount, serviceVehicleMovementM2cCount, serviceFileMovementC2mCount, serviceFileMovementM2mCount, serviceFileMovementM2cCount, serviceInsuranceForInspectionCount, serviceVehicleInspectionCount, serviceFileInspectionCount, serviceVehicleRepairingCount } = vehicleInspectionOrder
    const { vehicleInspectionInsuranceOrderList, vehicleInspectionOrderServiceLogList, vehicleInspectionOrderCouponList, vehicleInspectionOrderPaymentList, handOverChecklistItemList, serviceVehicleMovementC2mList, serviceVehicleMovementM2mList, serviceVehicleMovementM2cList, serviceFileMovementC2mList, serviceFileMovementM2mList, serviceFileMovementM2cList, serviceInsuranceForInspectionList, serviceVehicleInspectionList, serviceFileInspectionList, serviceVehicleRepairingList } = vehicleInspectionOrder
    
    const owner = { type: '_vehicleInspectionOrder', id }
    
    const tabList = [

      {key: 'vehicleInspectionInsuranceOrderList',tab: `车辆检测保险服务订单(${vehicleInspectionInsuranceOrderCount})`}, 
      {key: 'vehicleInspectionOrderServiceLogList',tab: `车辆检测服务订单日志(${vehicleInspectionOrderServiceLogCount})`}, 
      {key: 'vehicleInspectionOrderCouponList',tab: `优惠券(${vehicleInspectionOrderCouponCount})`}, 
      {key: 'vehicleInspectionOrderPaymentList',tab: `订单支付管理(${vehicleInspectionOrderPaymentCount})`}, 
      {key: 'handOverChecklistItemList',tab: `移交清单项目(${handOverChecklistItemCount})`}, 
      {key: 'serviceVehicleMovementC2mList',tab: `收车服务(${serviceVehicleMovementC2mCount})`}, 
      {key: 'serviceVehicleMovementM2mList',tab: `送审服务(${serviceVehicleMovementM2mCount})`}, 
      {key: 'serviceVehicleMovementM2cList',tab: `还车服务(${serviceVehicleMovementM2cCount})`}, 
      {key: 'serviceFileMovementC2mList',tab: `收件服务(${serviceFileMovementC2mCount})`}, 
      {key: 'serviceFileMovementM2mList',tab: `移件服务(${serviceFileMovementM2mCount})`}, 
      {key: 'serviceFileMovementM2cList',tab: `还件服务(${serviceFileMovementM2cCount})`}, 
      {key: 'serviceInsuranceForInspectionList',tab: `保险增值服务(${serviceInsuranceForInspectionCount})`}, 
      {key: 'serviceVehicleInspectionList',tab: `车辆上线检测结果(${serviceVehicleInspectionCount})`}, 
      {key: 'serviceFileInspectionList',tab: `6年免检服务结果(${serviceFileInspectionCount})`}, 
      {key: 'serviceVehicleRepairingList',tab: `修车服务(${serviceVehicleRepairingCount})`}, 
   

   ];
   
   
    const contentList = {
       vehicleInspectionInsuranceOrderList:  
        <VehicleInspectionInsuranceOrderViewTable data={vehicleInspectionInsuranceOrderList} owner={owner} {...this.props} />,
 
      vehicleInspectionOrderServiceLogList:  
        <VehicleInspectionOrderServiceLogViewTable data={vehicleInspectionOrderServiceLogList} owner={owner} {...this.props} />,
 
      vehicleInspectionOrderCouponList:  
        <VehicleInspectionOrderCouponViewTable data={vehicleInspectionOrderCouponList} owner={owner} {...this.props} />,
 
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
 
    
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="上线检测订单总览"
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



