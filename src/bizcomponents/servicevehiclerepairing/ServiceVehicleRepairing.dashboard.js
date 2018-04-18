

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
import styles from './ServiceVehicleRepairing.dashboard.less'
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
const summaryOf = (serviceVehicleRepairing) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{serviceVehicleRepairing.id}</Description> 
<Description term="服务状态">{serviceVehicleRepairing.serviceStatus}</Description> 
<Description term="服务概述">{serviceVehicleRepairing.serviceSummary}</Description> 
<Description term="开始时间">{ moment(serviceVehicleRepairing.startTime).format('YYYY-MM-DD')}</Description> 
<Description term="经度">{serviceVehicleRepairing.longitude}</Description> 
<Description term="纬度">{serviceVehicleRepairing.latitude}</Description> 
<Description term="最后更新时间">{ moment(serviceVehicleRepairing.lastUpdateTime).format('YYYY-MM-DD')}</Description> 
<Description term="年检报告1">{serviceVehicleRepairing.inspectionReportImage1}</Description> 
<Description term="年检报告2">{serviceVehicleRepairing.inspectionReportImage2}</Description> 
<Description term="年检报告3">{serviceVehicleRepairing.inspectionReportImage3}</Description> 
<Description term="年检报告4">{serviceVehicleRepairing.inspectionReportImage4}</Description> 
<Description term="年检报告5">{serviceVehicleRepairing.inspectionReportImage5}</Description> 
<Description term="车辆维修报价单1">{serviceVehicleRepairing.repairingQuotationImage1}</Description> 
<Description term="车辆维修报价单2">{serviceVehicleRepairing.repairingQuotationImage2}</Description> 
<Description term="车辆维修报价单3">{serviceVehicleRepairing.repairingQuotationImage3}</Description> 
<Description term="车辆维修报价单4">{serviceVehicleRepairing.repairingQuotationImage4}</Description> 
<Description term="车辆维修报价单5">{serviceVehicleRepairing.repairingQuotationImage5}</Description> 
<Description term="车辆维修报价总金额">{serviceVehicleRepairing.repairingQuotationTotalAmount}</Description> 
<Description term="车辆维修部分图片1">{serviceVehicleRepairing.repairingPartImg1}</Description> 
<Description term="车辆维修部分图片2">{serviceVehicleRepairing.repairingPartImg2}</Description> 
<Description term="车辆维修部分图片3">{serviceVehicleRepairing.repairingPartImg3}</Description> 
<Description term="车辆维修部分图片4">{serviceVehicleRepairing.repairingPartImg4}</Description> 
<Description term="车辆维修部分图片5">{serviceVehicleRepairing.repairingPartImg5}</Description> 
<Description term="车辆维修备注">{serviceVehicleRepairing.repairingPartListComment}</Description> 
<Description term="维修完成日期时间">{ moment(serviceVehicleRepairing.repairingFinishedDatetime).format('YYYY-MM-DD')}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  serviceVehicleRepairing: state._serviceVehicleRepairing,
}))
export default class ServiceVehicleRepairingDashboard extends Component {
  render() {
    // eslint-disable-next-line max-len
    const { id, repairingAllowanceItemCount, vehicleRepairingPaymentCount } = this.props.serviceVehicleRepairing
    
    
    
    return (

      <PageHeaderLayout
        title="维修服务总览"
        content={summaryOf(this.props.serviceVehicleRepairing)}
        wrapperClassName={styles.advancedForm}
      >
        <div>
          <Row gutter={24}>

          
            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="车辆维修补贴项"
                action={<Tooltip title="车辆维修补贴项"><Icon type="info-circle-o" /></Tooltip>}
                total={numeral(repairingAllowanceItemCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link to={`/serviceVehicleRepairing/${id}/list/repairingAllowanceItemList`}><Icon type="profile" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/serviceVehicleRepairing/${id}/list/repairingAllowanceItemCreateForm`}><Icon type="plus-circle-o" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/serviceVehicleRepairing/${id}/list/repairingAllowanceItemList`}><Icon type="line-chart" style={{ fontSize: 20, color: '#08c' }} /></Link>
              </ChartCard>
            </Col>

          
            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="支付维修订单"
                action={<Tooltip title="支付维修订单"><Icon type="info-circle-o" /></Tooltip>}
                total={numeral(vehicleRepairingPaymentCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link to={`/serviceVehicleRepairing/${id}/list/vehicleRepairingPaymentList`}><Icon type="profile" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/serviceVehicleRepairing/${id}/list/vehicleRepairingPaymentCreateForm`}><Icon type="plus-circle-o" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/serviceVehicleRepairing/${id}/list/vehicleRepairingPaymentList`}><Icon type="line-chart" style={{ fontSize: 20, color: '#08c' }} /></Link>
              </ChartCard>
            </Col>

          </Row>
        </div>
      </PageHeaderLayout>
    )
  }
}



