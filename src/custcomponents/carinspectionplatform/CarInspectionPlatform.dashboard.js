import React, { Component } from 'react'
import { connect } from 'dva'
import moment from 'moment'
import {
  Row,
  Col,
  Icon,
  Card,
  Tabs,
  Table,
  Radio,
  DatePicker,
  Tooltip,
  Menu,
  Dropdown,
} from 'antd'
import { Link, Route, Redirect, Switch } from 'dva/router'
import numeral from 'numeral'
import {
  ChartCard,
  yuan,
  MiniArea,
  MiniBar,
  MiniProgress,
  Field,
  Bar,
  Pie,
  TimelineChart,
} from '../../components/Charts'
import Trend from '../../components/Trend'
import NumberInfo from '../../components/NumberInfo'
import { getTimeDistance } from '../../utils/utils'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import styles from './CarInspectionPlatform.dashboard.less'
import DescriptionList from '../../components/DescriptionList'

import {Map, Marker, NavigationControl, InfoWindow,MarkerList,PointLabel} from 'react-bmap'




const { Description } = DescriptionList
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
const summaryOf = carInspectionPlatform => {
  return (
    <DescriptionList className={styles.headerList} size="small" col="4">
      <Description term="ID">{carInspectionPlatform.id}</Description>
      <Description term="名称">{carInspectionPlatform.name}</Description>
      <Description term="描述">{carInspectionPlatform.description}</Description>
      <Description term="保险联系人姓名">
        {carInspectionPlatform.insuranceContactName}
      </Description>
      <Description term="保险联系人手机">
        {carInspectionPlatform.insuranceContactMobile}
      </Description>
    </DescriptionList>
  )
}
//////////////////////////////////////////////////////////////////////


const markList = (carInspectionPlatform) =>{

  //console.log("carInspectionPlatform",carInspectionPlatform)
  const {vehicleServiceCompanyList}=carInspectionPlatform
  if(!vehicleServiceCompanyList){
    return [];
  }
//"request" > d:\485.log
  var pointList=vehicleServiceCompanyList.map((item,indexValue)=>{
    
    const lng=item.longitude;
    const lat=item.latitude;
    
    const point = {lng,lat};

    return point;



  })

  //console.log("pointList",pointList)
  return pointList;


}

const mapLabels = (carInspectionPlatform) =>{

  console.log("carInspectionPlatform",carInspectionPlatform)
  const {vehicleServiceCompanyList}=carInspectionPlatform
  if(!vehicleServiceCompanyList){
    return [];
  }

  var pointList=vehicleServiceCompanyList.map((item,indexValue)=>{
    const name = item.companyName;
    const index =indexValue+1;
    const lng=item.longitude;
    const lat=item.latitude;
    
    const point = {lng,lat};
    const isShowNumber = false;
    const color="red"
    return {name, index, color, isShowNumber, point};



  })

  console.log("pointList",pointList)
  return pointList;


}


const getMap=(carInspectionPlatform)=>{


  const {vehicleServiceCompanyList}=carInspectionPlatform
  if(!vehicleServiceCompanyList){
    return [];
  }

  return (
    <Map center = {{ lng: 104.0668, lat: 30.5728 }} zoom='8' >
  
     
    {
      vehicleServiceCompanyList.map((item,indexValue)=>{
    
        const lng=item.longitude;
        const lat=item.latitude;
        const name=item.companyName;
        const point = {lng,lat};
        const icon = "red" + (indexValue + 1);
        return ( <Marker  position={{lng, lat}} offset={new BMap.Size(0, 0)} icon={icon}>
         
        </Marker>);
    
        //<div onClick={function(){alert(1)}} title={name}>{indexValue}</div>
    
      })

    }
  
      <NavigationControl /> 
  
  </Map>)


}

//////////////////////////////////////////////////////////////////////////






@connect(state => ({
  carInspectionPlatform: state._carInspectionPlatform,
}))
export default class CarInspectionPlatformDashboard extends Component {
  render() {
    // eslint-disable-next-line max-len
    const { id, provinceCount, availableProductCount, availableVehicleTypeCount, availableVehicleUseCharacterCount, contractCount, customerCount, vehicleServiceCompanyCount, vehicleInfoCount, vehicleInspectionOrderCount, availableReviewItemCount, availableRatingItemCount, preorderPromotionCount, orderDiscountCouponCount, accountCount } = this.props.carInspectionPlatform
   

    return (
      <PageHeaderLayout
        title="驾乐乐车辆代审服务平台总览"
        content={summaryOf(this.props.carInspectionPlatform)}
        wrapperClassName={styles.advancedForm}
      >

        <Card title="商户地图" className={styles.card} bordered={false}>{getMap(this.props.carInspectionPlatform)} </Card>



        <div>
          <Row gutter={24}>

          
            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="省"
                action={<Tooltip title="省"><Icon type="info-circle-o" /></Tooltip>}
                total={numeral(provinceCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link to={`/carInspectionPlatform/${id}/list/provinceList`}><Icon type="profile" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/carInspectionPlatform/${id}/list/provinceCreateForm`}><Icon type="plus-circle-o" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/carInspectionPlatform/${id}/list/provinceList`}><Icon type="line-chart" style={{ fontSize: 20, color: '#08c' }} /></Link>
              </ChartCard>
            </Col>

          
            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="产品类型"
                action={<Tooltip title="产品类型"><Icon type="info-circle-o" /></Tooltip>}
                total={numeral(availableProductCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link to={`/carInspectionPlatform/${id}/list/availableProductList`}><Icon type="profile" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/carInspectionPlatform/${id}/list/availableProductCreateForm`}><Icon type="plus-circle-o" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/carInspectionPlatform/${id}/list/availableProductList`}><Icon type="line-chart" style={{ fontSize: 20, color: '#08c' }} /></Link>
              </ChartCard>
            </Col>

          
            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="车辆类型"
                action={<Tooltip title="车辆类型"><Icon type="info-circle-o" /></Tooltip>}
                total={numeral(availableVehicleTypeCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link to={`/carInspectionPlatform/${id}/list/availableVehicleTypeList`}><Icon type="profile" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/carInspectionPlatform/${id}/list/availableVehicleTypeCreateForm`}><Icon type="plus-circle-o" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/carInspectionPlatform/${id}/list/availableVehicleTypeList`}><Icon type="line-chart" style={{ fontSize: 20, color: '#08c' }} /></Link>
              </ChartCard>
            </Col>

          
            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="车辆使用字符"
                action={<Tooltip title="车辆使用字符"><Icon type="info-circle-o" /></Tooltip>}
                total={numeral(availableVehicleUseCharacterCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link to={`/carInspectionPlatform/${id}/list/availableVehicleUseCharacterList`}><Icon type="profile" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/carInspectionPlatform/${id}/list/availableVehicleUseCharacterCreateForm`}><Icon type="plus-circle-o" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/carInspectionPlatform/${id}/list/availableVehicleUseCharacterList`}><Icon type="line-chart" style={{ fontSize: 20, color: '#08c' }} /></Link>
              </ChartCard>
            </Col>

          
            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="合同"
                action={<Tooltip title="合同"><Icon type="info-circle-o" /></Tooltip>}
                total={numeral(contractCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link to={`/carInspectionPlatform/${id}/list/contractList`}><Icon type="profile" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/carInspectionPlatform/${id}/list/contractCreateForm`}><Icon type="plus-circle-o" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/carInspectionPlatform/${id}/list/contractList`}><Icon type="line-chart" style={{ fontSize: 20, color: '#08c' }} /></Link>
              </ChartCard>
            </Col>

          
            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="客户"
                action={<Tooltip title="客户"><Icon type="info-circle-o" /></Tooltip>}
                total={numeral(customerCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link to={`/carInspectionPlatform/${id}/list/customerList`}><Icon type="profile" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/carInspectionPlatform/${id}/list/customerCreateForm`}><Icon type="plus-circle-o" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/carInspectionPlatform/${id}/list/customerList`}><Icon type="line-chart" style={{ fontSize: 20, color: '#08c' }} /></Link>
              </ChartCard>
            </Col>

          
            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="商户"
                action={<Tooltip title="商户"><Icon type="info-circle-o" /></Tooltip>}
                total={numeral(vehicleServiceCompanyCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link to={`/carInspectionPlatform/${id}/list/vehicleServiceCompanyList`}><Icon type="profile" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/carInspectionPlatform/${id}/list/vehicleServiceCompanyCreateForm`}><Icon type="plus-circle-o" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/carInspectionPlatform/${id}/list/vehicleServiceCompanyList`}><Icon type="line-chart" style={{ fontSize: 20, color: '#08c' }} /></Link>
              </ChartCard>
            </Col>

          
            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="车辆信息"
                action={<Tooltip title="车辆信息"><Icon type="info-circle-o" /></Tooltip>}
                total={numeral(vehicleInfoCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link to={`/carInspectionPlatform/${id}/list/vehicleInfoList`}><Icon type="profile" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/carInspectionPlatform/${id}/list/vehicleInfoCreateForm`}><Icon type="plus-circle-o" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/carInspectionPlatform/${id}/list/vehicleInfoList`}><Icon type="line-chart" style={{ fontSize: 20, color: '#08c' }} /></Link>
              </ChartCard>
            </Col>

          
            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="年检订单"
                action={<Tooltip title="年检订单"><Icon type="info-circle-o" /></Tooltip>}
                total={numeral(vehicleInspectionOrderCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link to={`/carInspectionPlatform/${id}/list/vehicleInspectionOrderList`}><Icon type="profile" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/carInspectionPlatform/${id}/list/vehicleInspectionOrderCreateForm`}><Icon type="plus-circle-o" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/carInspectionPlatform/${id}/list/vehicleInspectionOrderList`}><Icon type="line-chart" style={{ fontSize: 20, color: '#08c' }} /></Link>
              </ChartCard>
            </Col>

          
            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="评论"
                action={<Tooltip title="评论"><Icon type="info-circle-o" /></Tooltip>}
                total={numeral(availableReviewItemCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link to={`/carInspectionPlatform/${id}/list/availableReviewItemList`}><Icon type="profile" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/carInspectionPlatform/${id}/list/availableReviewItemCreateForm`}><Icon type="plus-circle-o" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/carInspectionPlatform/${id}/list/availableReviewItemList`}><Icon type="line-chart" style={{ fontSize: 20, color: '#08c' }} /></Link>
              </ChartCard>
            </Col>

          
            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="服务评分"
                action={<Tooltip title="服务评分"><Icon type="info-circle-o" /></Tooltip>}
                total={numeral(availableRatingItemCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link to={`/carInspectionPlatform/${id}/list/availableRatingItemList`}><Icon type="profile" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/carInspectionPlatform/${id}/list/availableRatingItemCreateForm`}><Icon type="plus-circle-o" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/carInspectionPlatform/${id}/list/availableRatingItemList`}><Icon type="line-chart" style={{ fontSize: 20, color: '#08c' }} /></Link>
              </ChartCard>
            </Col>

          
            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="提前下单优惠"
                action={<Tooltip title="提前下单优惠"><Icon type="info-circle-o" /></Tooltip>}
                total={numeral(preorderPromotionCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link to={`/carInspectionPlatform/${id}/list/preorderPromotionList`}><Icon type="profile" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/carInspectionPlatform/${id}/list/preorderPromotionCreateForm`}><Icon type="plus-circle-o" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/carInspectionPlatform/${id}/list/preorderPromotionList`}><Icon type="line-chart" style={{ fontSize: 20, color: '#08c' }} /></Link>
              </ChartCard>
            </Col>

          
            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="优惠券"
                action={<Tooltip title="优惠券"><Icon type="info-circle-o" /></Tooltip>}
                total={numeral(orderDiscountCouponCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link to={`/carInspectionPlatform/${id}/list/orderDiscountCouponList`}><Icon type="profile" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/carInspectionPlatform/${id}/list/orderDiscountCouponCreateForm`}><Icon type="plus-circle-o" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/carInspectionPlatform/${id}/list/orderDiscountCouponList`}><Icon type="line-chart" style={{ fontSize: 20, color: '#08c' }} /></Link>
              </ChartCard>
            </Col>

          
            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="对账单"
                action={<Tooltip title="对账单"><Icon type="info-circle-o" /></Tooltip>}
                total={numeral(accountCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link to={`/carInspectionPlatform/${id}/list/accountList`}><Icon type="profile" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/carInspectionPlatform/${id}/list/accountCreateForm`}><Icon type="plus-circle-o" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/carInspectionPlatform/${id}/list/accountList`}><Icon type="line-chart" style={{ fontSize: 20, color: '#08c' }} /></Link>
              </ChartCard>
            </Col>

          </Row>
        </div>
      </PageHeaderLayout>
    )
  }
}
