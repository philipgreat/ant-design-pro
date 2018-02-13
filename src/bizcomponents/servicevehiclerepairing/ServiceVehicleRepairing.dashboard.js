

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
<Description term="开始时间">{ moment(serviceVehicleRepairing.startTime).format('YYYY-MM-DD')}</Description> 
<Description term="经度">{serviceVehicleRepairing.longitude}</Description> 
<Description term="纬度">{serviceVehicleRepairing.latitude}</Description> 
<Description term="最后更新时间">{ moment(serviceVehicleRepairing.lastUpdateTime).format('YYYY-MM-DD')}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  serviceVehicleRepairing: state._serviceVehicleRepairing,
}))
export default class ServiceVehicleRepairingDashboard extends Component {
  render() {
    // eslint-disable-next-line max-len
    const { id, reportVehicleInspectionReportCount, repairingQuotationCount, repairingAllowanceItemCount, vehicleRepairingPaymentCount, vehicleRepairingReportCount } = this.props.serviceVehicleRepairing
    
    
    
    return (

      <PageHeaderLayout
        title="修车服务总览"
        content={summaryOf(this.props.serviceVehicleRepairing)}
        wrapperClassName={styles.advancedForm}
      >
        <div>
          <Row gutter={24}>

          
            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="车辆检验报告"
                action={<Tooltip title="车辆检验报告"><Icon type="info-circle-o" /></Tooltip>}
                total={numeral(reportVehicleInspectionReportCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link to={`/serviceVehicleRepairing/${id}/list/reportVehicleInspectionReportList`}><Icon type="profile" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/serviceVehicleRepairing/${id}/list/reportVehicleInspectionReportCreateForm`}><Icon type="plus-circle-o" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/serviceVehicleRepairing/${id}/list/reportVehicleInspectionReportList`}><Icon type="line-chart" style={{ fontSize: 20, color: '#08c' }} /></Link>
              </ChartCard>
            </Col>

          
            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="维修报价"
                action={<Tooltip title="维修报价"><Icon type="info-circle-o" /></Tooltip>}
                total={numeral(repairingQuotationCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link to={`/serviceVehicleRepairing/${id}/list/repairingQuotationList`}><Icon type="profile" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/serviceVehicleRepairing/${id}/list/repairingQuotationCreateForm`}><Icon type="plus-circle-o" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/serviceVehicleRepairing/${id}/list/repairingQuotationList`}><Icon type="line-chart" style={{ fontSize: 20, color: '#08c' }} /></Link>
              </ChartCard>
            </Col>

          
            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="修补贴项目"
                action={<Tooltip title="修补贴项目"><Icon type="info-circle-o" /></Tooltip>}
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
                title="修理付款"
                action={<Tooltip title="修理付款"><Icon type="info-circle-o" /></Tooltip>}
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

          
            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="车辆维修报告"
                action={<Tooltip title="车辆维修报告"><Icon type="info-circle-o" /></Tooltip>}
                total={numeral(vehicleRepairingReportCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link to={`/serviceVehicleRepairing/${id}/list/vehicleRepairingReportList`}><Icon type="profile" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/serviceVehicleRepairing/${id}/list/vehicleRepairingReportCreateForm`}><Icon type="plus-circle-o" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/serviceVehicleRepairing/${id}/list/vehicleRepairingReportList`}><Icon type="line-chart" style={{ fontSize: 20, color: '#08c' }} /></Link>
              </ChartCard>
            </Col>

          </Row>
        </div>
      </PageHeaderLayout>
    )
  }
}



