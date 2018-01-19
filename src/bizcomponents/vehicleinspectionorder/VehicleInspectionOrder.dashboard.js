

import React, { Component } from 'react'
import { connect } from 'dva'
import moment from 'moment'
import { Row, Col, Icon, Card, Tabs, Table, Radio, DatePicker, Tooltip, Menu, Dropdown } from 'antd'
import { Link, Route, Redirect, Switch } from 'dva/router'
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
const { Description } = DescriptionList;
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
export default class VehicleInspectionOrderDashboard extends Component {
  render() {
    // eslint-disable-next-line max-len
    const { id, vehicleInspectionInsuranceOrderCount, vehicleInspectionOrderServiceLogCount, vehicleInspectionOrderCouponCount, vehicleInspectionOrderPaymentCount, handOverChecklistItemCount, serviceVehicleMovementC2mCount, serviceVehicleMovementM2mCount, serviceVehicleMovementM2cCount, serviceFileMovementC2mCount, serviceFileMovementM2mCount, serviceFileMovementM2cCount, serviceInsuranceForInspectionCount, serviceVehicleInspectionCount, serviceFileInspectionCount, serviceVehicleRepairingCount } = this.props.vehicleInspectionOrder
    
    
    
    return (

      <PageHeaderLayout
        title="上线检测订单总览"
        content={summaryOf(this.props.vehicleInspectionOrder)}
        wrapperClassName={styles.advancedForm}
      >
        <div>
          <Row gutter={24}>

          
            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="车辆检测保险服务订单"
                action={<Tooltip title="车辆检测保险服务订单"><Icon type="info-circle-o" /></Tooltip>}
                total={numeral(vehicleInspectionInsuranceOrderCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link to={`/vehicleInspectionOrder/${id}/list/vehicleInspectionInsuranceOrderList`}><Icon type="profile" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/vehicleInspectionOrder/${id}/list/vehicleInspectionInsuranceOrderCreateForm`}><Icon type="plus-circle-o" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/vehicleInspectionOrder/${id}/list/vehicleInspectionInsuranceOrderList`}><Icon type="line-chart" style={{ fontSize: 20, color: '#08c' }} /></Link>
              </ChartCard>
            </Col>

          
            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="车辆检测服务订单日志"
                action={<Tooltip title="车辆检测服务订单日志"><Icon type="info-circle-o" /></Tooltip>}
                total={numeral(vehicleInspectionOrderServiceLogCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link to={`/vehicleInspectionOrder/${id}/list/vehicleInspectionOrderServiceLogList`}><Icon type="profile" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/vehicleInspectionOrder/${id}/list/vehicleInspectionOrderServiceLogCreateForm`}><Icon type="plus-circle-o" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/vehicleInspectionOrder/${id}/list/vehicleInspectionOrderServiceLogList`}><Icon type="line-chart" style={{ fontSize: 20, color: '#08c' }} /></Link>
              </ChartCard>
            </Col>

          
            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="优惠券"
                action={<Tooltip title="优惠券"><Icon type="info-circle-o" /></Tooltip>}
                total={numeral(vehicleInspectionOrderCouponCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link to={`/vehicleInspectionOrder/${id}/list/vehicleInspectionOrderCouponList`}><Icon type="profile" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/vehicleInspectionOrder/${id}/list/vehicleInspectionOrderCouponCreateForm`}><Icon type="plus-circle-o" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/vehicleInspectionOrder/${id}/list/vehicleInspectionOrderCouponList`}><Icon type="line-chart" style={{ fontSize: 20, color: '#08c' }} /></Link>
              </ChartCard>
            </Col>

          
            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="订单支付管理"
                action={<Tooltip title="订单支付管理"><Icon type="info-circle-o" /></Tooltip>}
                total={numeral(vehicleInspectionOrderPaymentCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link to={`/vehicleInspectionOrder/${id}/list/vehicleInspectionOrderPaymentList`}><Icon type="profile" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/vehicleInspectionOrder/${id}/list/vehicleInspectionOrderPaymentCreateForm`}><Icon type="plus-circle-o" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/vehicleInspectionOrder/${id}/list/vehicleInspectionOrderPaymentList`}><Icon type="line-chart" style={{ fontSize: 20, color: '#08c' }} /></Link>
              </ChartCard>
            </Col>

          
            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="移交清单项目"
                action={<Tooltip title="移交清单项目"><Icon type="info-circle-o" /></Tooltip>}
                total={numeral(handOverChecklistItemCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link to={`/vehicleInspectionOrder/${id}/list/handOverChecklistItemList`}><Icon type="profile" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/vehicleInspectionOrder/${id}/list/handOverChecklistItemCreateForm`}><Icon type="plus-circle-o" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/vehicleInspectionOrder/${id}/list/handOverChecklistItemList`}><Icon type="line-chart" style={{ fontSize: 20, color: '#08c' }} /></Link>
              </ChartCard>
            </Col>

          
            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="收车服务"
                action={<Tooltip title="收车服务"><Icon type="info-circle-o" /></Tooltip>}
                total={numeral(serviceVehicleMovementC2mCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link to={`/vehicleInspectionOrder/${id}/list/serviceVehicleMovementC2mList`}><Icon type="profile" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/vehicleInspectionOrder/${id}/list/serviceVehicleMovementC2mCreateForm`}><Icon type="plus-circle-o" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/vehicleInspectionOrder/${id}/list/serviceVehicleMovementC2mList`}><Icon type="line-chart" style={{ fontSize: 20, color: '#08c' }} /></Link>
              </ChartCard>
            </Col>

          
            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="送审服务"
                action={<Tooltip title="送审服务"><Icon type="info-circle-o" /></Tooltip>}
                total={numeral(serviceVehicleMovementM2mCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link to={`/vehicleInspectionOrder/${id}/list/serviceVehicleMovementM2mList`}><Icon type="profile" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/vehicleInspectionOrder/${id}/list/serviceVehicleMovementM2mCreateForm`}><Icon type="plus-circle-o" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/vehicleInspectionOrder/${id}/list/serviceVehicleMovementM2mList`}><Icon type="line-chart" style={{ fontSize: 20, color: '#08c' }} /></Link>
              </ChartCard>
            </Col>

          
            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="还车服务"
                action={<Tooltip title="还车服务"><Icon type="info-circle-o" /></Tooltip>}
                total={numeral(serviceVehicleMovementM2cCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link to={`/vehicleInspectionOrder/${id}/list/serviceVehicleMovementM2cList`}><Icon type="profile" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/vehicleInspectionOrder/${id}/list/serviceVehicleMovementM2cCreateForm`}><Icon type="plus-circle-o" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/vehicleInspectionOrder/${id}/list/serviceVehicleMovementM2cList`}><Icon type="line-chart" style={{ fontSize: 20, color: '#08c' }} /></Link>
              </ChartCard>
            </Col>

          
            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="收件服务"
                action={<Tooltip title="收件服务"><Icon type="info-circle-o" /></Tooltip>}
                total={numeral(serviceFileMovementC2mCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link to={`/vehicleInspectionOrder/${id}/list/serviceFileMovementC2mList`}><Icon type="profile" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/vehicleInspectionOrder/${id}/list/serviceFileMovementC2mCreateForm`}><Icon type="plus-circle-o" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/vehicleInspectionOrder/${id}/list/serviceFileMovementC2mList`}><Icon type="line-chart" style={{ fontSize: 20, color: '#08c' }} /></Link>
              </ChartCard>
            </Col>

          
            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="移件服务"
                action={<Tooltip title="移件服务"><Icon type="info-circle-o" /></Tooltip>}
                total={numeral(serviceFileMovementM2mCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link to={`/vehicleInspectionOrder/${id}/list/serviceFileMovementM2mList`}><Icon type="profile" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/vehicleInspectionOrder/${id}/list/serviceFileMovementM2mCreateForm`}><Icon type="plus-circle-o" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/vehicleInspectionOrder/${id}/list/serviceFileMovementM2mList`}><Icon type="line-chart" style={{ fontSize: 20, color: '#08c' }} /></Link>
              </ChartCard>
            </Col>

          
            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="还件服务"
                action={<Tooltip title="还件服务"><Icon type="info-circle-o" /></Tooltip>}
                total={numeral(serviceFileMovementM2cCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link to={`/vehicleInspectionOrder/${id}/list/serviceFileMovementM2cList`}><Icon type="profile" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/vehicleInspectionOrder/${id}/list/serviceFileMovementM2cCreateForm`}><Icon type="plus-circle-o" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/vehicleInspectionOrder/${id}/list/serviceFileMovementM2cList`}><Icon type="line-chart" style={{ fontSize: 20, color: '#08c' }} /></Link>
              </ChartCard>
            </Col>

          
            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="保险增值服务"
                action={<Tooltip title="保险增值服务"><Icon type="info-circle-o" /></Tooltip>}
                total={numeral(serviceInsuranceForInspectionCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link to={`/vehicleInspectionOrder/${id}/list/serviceInsuranceForInspectionList`}><Icon type="profile" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/vehicleInspectionOrder/${id}/list/serviceInsuranceForInspectionCreateForm`}><Icon type="plus-circle-o" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/vehicleInspectionOrder/${id}/list/serviceInsuranceForInspectionList`}><Icon type="line-chart" style={{ fontSize: 20, color: '#08c' }} /></Link>
              </ChartCard>
            </Col>

          
            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="车辆上线检测结果"
                action={<Tooltip title="车辆上线检测结果"><Icon type="info-circle-o" /></Tooltip>}
                total={numeral(serviceVehicleInspectionCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link to={`/vehicleInspectionOrder/${id}/list/serviceVehicleInspectionList`}><Icon type="profile" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/vehicleInspectionOrder/${id}/list/serviceVehicleInspectionCreateForm`}><Icon type="plus-circle-o" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/vehicleInspectionOrder/${id}/list/serviceVehicleInspectionList`}><Icon type="line-chart" style={{ fontSize: 20, color: '#08c' }} /></Link>
              </ChartCard>
            </Col>

          
            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="6年免检服务结果"
                action={<Tooltip title="6年免检服务结果"><Icon type="info-circle-o" /></Tooltip>}
                total={numeral(serviceFileInspectionCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link to={`/vehicleInspectionOrder/${id}/list/serviceFileInspectionList`}><Icon type="profile" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/vehicleInspectionOrder/${id}/list/serviceFileInspectionCreateForm`}><Icon type="plus-circle-o" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/vehicleInspectionOrder/${id}/list/serviceFileInspectionList`}><Icon type="line-chart" style={{ fontSize: 20, color: '#08c' }} /></Link>
              </ChartCard>
            </Col>

          
            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="修车服务"
                action={<Tooltip title="修车服务"><Icon type="info-circle-o" /></Tooltip>}
                total={numeral(serviceVehicleRepairingCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link to={`/vehicleInspectionOrder/${id}/list/serviceVehicleRepairingList`}><Icon type="profile" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/vehicleInspectionOrder/${id}/list/serviceVehicleRepairingCreateForm`}><Icon type="plus-circle-o" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/vehicleInspectionOrder/${id}/list/serviceVehicleRepairingList`}><Icon type="line-chart" style={{ fontSize: 20, color: '#08c' }} /></Link>
              </ChartCard>
            </Col>

          </Row>
        </div>
      </PageHeaderLayout>
    )
  }
}


