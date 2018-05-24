

import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome';
import { connect } from 'dva'
import moment from 'moment'
import BooleanOption from 'components/BooleanOption';
import { Row, Col, Icon, Card, Tabs, Table, Radio, DatePicker, Tooltip, Menu, Dropdown,Badge, Switch  } from 'antd'
import { Link, Route, Redirect} from 'dva/router'
import numeral from 'numeral'
import {
  ChartCard, yuan, MiniArea, MiniBar, MiniProgress, Field, Bar, Pie, TimelineChart,
} from '../../components/Charts'
import Trend from '../../components/Trend'
import NumberInfo from '../../components/NumberInfo'
import { getTimeDistance } from '../../utils/utils'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import styles from './VehicleInspectionOrder.dashboard.less'
import DescriptionList from '../../components/DescriptionList';
import ImagePreview from '../../components/ImagePreview';
const { Description } = DescriptionList;
const { TabPane } = Tabs
const { RangePicker } = DatePicker

const topColResponsiveProps = {
  xs: 8,
  sm: 6,
  md: 6,
  lg: 4,
  xl: 4,
  style: { marginBottom: 24 },
}


const imageListOf = (vehicleInspectionOrder) =>{

  const imageList = [
	   {"title":'行驶证图1',"imageLocation":vehicleInspectionOrder.vehiclePermitImage1},
  {"title":'行驶证图2',"imageLocation":vehicleInspectionOrder.vehiclePermitImage2},
  {"title":'行驶证图3',"imageLocation":vehicleInspectionOrder.vehiclePermitImage3},
  {"title":'行驶证图4',"imageLocation":vehicleInspectionOrder.vehiclePermitImage4},
  {"title":'行驶证图5',"imageLocation":vehicleInspectionOrder.vehiclePermitImage5},
]
  const filteredList = imageList.filter((item)=>item.imageLocation!=null)
  if(filteredList.length===0){
    return null
  }

  return(<Card title='图片列表' className={styles.card}><Row type="flex" justify="start" align="bottom">
  {
      filteredList.map((item)=>(<Col span={4}><ImagePreview imageTitle ={item.title} showTitleUnderImage={true} imageLocation={item.imageLocation} >{item.title}</ImagePreview></Col>))
  }</Row></Card> )

}

const settingListOf = (vehicleInspectionOrder) =>{

	const optionList = [ 
	  {"title":'6年免检',"value":vehicleInspectionOrder.hasSixYearExemption},
  {"title":'上线检测',"value":vehicleInspectionOrder.hasInspection},
  {"title":'二级维护',"value":vehicleInspectionOrder.hasSecondLevelMaintenance},
  {"title":'等级评定',"value":vehicleInspectionOrder.hasGradeEstimation},
  {"title":'商户优惠',"value":vehicleInspectionOrder.merchantDiscount},
  {"title":'无伤人交通事故',"value":vehicleInspectionOrder.trafficAccidentAnnouncement},
  {"title":'提供委托书',"value":vehicleInspectionOrder.engagementLetterProvided},
  {"title":'上门取车',"value":vehicleInspectionOrder.homePickUp},
]
	
  if(optionList.length===0){
    return null
  }
  return(<Card title='状态集合' className={styles.card}>
  	
  	{
  	  optionList.map((item)=><Col span={6} style={{"height":"60px"}}>
       <Switch title={item.title} checked={item.value} type={item.value?"success":"error"} checkedChildren="是" unCheckedChildren="否" />
       <span style={{"margin":"10px"}}>{item.title}</span>
       </Col>)
  	}


</Card> )
	


}

const largeTextOf = (vehicleInspectionOrder) =>{

	return(<div> 
   <Card title={`服务公司信息`} ><pre>{vehicleInspectionOrder.serviceCompanyInfo}</pre></Card>
</div>)

	

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
<Description term="地址">{vehicleInspectionOrder.contactAddressDetail}</Description> 
<Description term="计划年检日期">{ moment(vehicleInspectionOrder.planInspectionDate).format('YYYY-MM-DD')}</Description> 
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
<Description term="经度">{vehicleInspectionOrder.longitude}</Description> 
	
        
      </DescriptionList>
	)

}


class VehicleInspectionOrderDashboard extends Component {


  componentDidMount() {
  /*
    // const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props;
    // const { getFieldDecorator, setFieldsValue } = this.props.form;
    const { dispatch, location, vehicleInspectionOrder } = this.props;
    
    if(!vehicleInspectionOrder){
    	return;
    }
    const {displayName} = vehicleInspectionOrder;
    if(!displayName){
    	return;
    }
	const link = location.pathname;
	
    dispatch({ type: 'breadcrumb/gotoLink', payload: { displayName, link }})
  	*/
  }
  

  render() {
    // eslint-disable-next-line max-len
    const { id,displayName, vehicleInspectionInsuranceOrderCount, vehicleInspectionOrderChargeCount, vehicleInspectionOrderServiceLogCount, vehicleInspectionOrderPaymentCount, handOverChecklistItemCount, serviceVehicleMovementC2mCount, serviceVehicleMovementM2mCount, serviceVehicleMovementM2cCount, serviceFileMovementC2mCount, serviceFileMovementM2mCount, serviceFileMovementM2cCount, serviceInsuranceForInspectionCount, serviceVehicleInspectionCount, serviceFileInspectionCount, serviceVehicleRepairingCount, orderReviewResultCount, orderRatingResultCount, orderDiscountCouponCount, vehicleInspectionOrderCouponCount } = this.props.vehicleInspectionOrder
    const cardsData = {cardsName:"年检订单",cardsFor: "vehicleInspectionOrder",cardsSource: this.props.vehicleInspectionOrder,
  		subItems: [
{name: 'vehicleInspectionInsuranceOrderList', displayName:'车辆上线检测保险订单',type:'vehicleInspectionInsuranceOrder',count:vehicleInspectionInsuranceOrderCount},
{name: 'vehicleInspectionOrderChargeList', displayName:'车辆检验订单费用',type:'vehicleInspectionOrderCharge',count:vehicleInspectionOrderChargeCount},
{name: 'vehicleInspectionOrderServiceLogList', displayName:'年检订单执行日志',type:'vehicleInspectionOrderServiceLog',count:vehicleInspectionOrderServiceLogCount},
{name: 'vehicleInspectionOrderPaymentList', displayName:'年检订单支付',type:'vehicleInspectionOrderPayment',count:vehicleInspectionOrderPaymentCount},
{name: 'handOverChecklistItemList', displayName:'交接检查项',type:'handOverChecklistItem',count:handOverChecklistItemCount},
{name: 'serviceVehicleMovementC2mList', displayName:'收车服务',type:'serviceVehicleMovementC2m',count:serviceVehicleMovementC2mCount},
{name: 'serviceVehicleMovementM2mList', displayName:'移车服务',type:'serviceVehicleMovementM2m',count:serviceVehicleMovementM2mCount},
{name: 'serviceVehicleMovementM2cList', displayName:'还车服务',type:'serviceVehicleMovementM2c',count:serviceVehicleMovementM2cCount},
{name: 'serviceFileMovementC2mList', displayName:'收件服务',type:'serviceFileMovementC2m',count:serviceFileMovementC2mCount},
{name: 'serviceFileMovementM2mList', displayName:'移件服务',type:'serviceFileMovementM2m',count:serviceFileMovementM2mCount},
{name: 'serviceFileMovementM2cList', displayName:'还件服务',type:'serviceFileMovementM2c',count:serviceFileMovementM2cCount},
{name: 'serviceInsuranceForInspectionList', displayName:'保险服务',type:'serviceInsuranceForInspection',count:serviceInsuranceForInspectionCount},
{name: 'serviceVehicleInspectionList', displayName:'车辆上线检测',type:'serviceVehicleInspection',count:serviceVehicleInspectionCount},
{name: 'serviceFileInspectionList', displayName:'6年免检服务',type:'serviceFileInspection',count:serviceFileInspectionCount},
{name: 'serviceVehicleRepairingList', displayName:'维修服务',type:'serviceVehicleRepairing',count:serviceVehicleRepairingCount},
{name: 'orderReviewResultList', displayName:'订单评论结果',type:'orderReviewResult',count:orderReviewResultCount},
{name: 'orderRatingResultList', displayName:'订单评分结果',type:'orderRatingResult',count:orderRatingResultCount},
{name: 'orderDiscountCouponList', displayName:'优惠券',type:'orderDiscountCoupon',count:orderDiscountCouponCount},
{name: 'vehicleInspectionOrderCouponList', displayName:'优惠券使用记录',type:'vehicleInspectionOrderCoupon',count:vehicleInspectionOrderCouponCount},
    
      	],
  	};
    
    return (

      <PageHeaderLayout
        title={`${cardsData.cardsName}: ${displayName}`}
        content={summaryOf(cardsData.cardsSource)}
        wrapperClassName={styles.advancedForm}
      >
        <div>
        {settingListOf(cardsData.cardsSource)}
        {imageListOf(cardsData.cardsSource)}
        
          <Row gutter={24}>

           {cardsData.subItems.map((item)=>(<Col {...topColResponsiveProps} key={item.name}>   
           <Badge count={item.count} style={{ backgroundColor: '#52c41a' }} overflowCount={9999999999}>        
            <Card title={`${item.displayName}(${numeral(item.count).format('0,0')})`}  style={{ width: 180 }}>             
              <p><Link to={`/${cardsData.cardsFor}/${id}/list/${item.name}/${item.displayName}列表`}><FontAwesome name="gear"  />&nbsp;管理</Link></p>
              <p><Link to={`/${cardsData.cardsFor}/${id}/list/${item.type}CreateForm`}><FontAwesome name="plus"  />&nbsp;新增</Link></p>              
          </Card> </Badge>
            </Col>))}

          </Row>
          
          {largeTextOf(cardsData.cardsSource)}
          
        </div>
      </PageHeaderLayout>
    )
  }
}

export default connect(state => ({
  vehicleInspectionOrder: state._vehicleInspectionOrder,
}))(VehicleInspectionOrderDashboard)

