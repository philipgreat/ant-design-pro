

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
import styles from './CarInspectionPlatform.dashboard.less'
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
const summaryOf = (carInspectionPlatform) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{carInspectionPlatform.id}</Description> 
<Description term="名称">{carInspectionPlatform.name}</Description> 
<Description term="描述">{carInspectionPlatform.description}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  carInspectionPlatform: state._carInspectionPlatform,
}))
export default class CarInspectionPlatformDashboard extends Component {
  render() {
    // eslint-disable-next-line max-len
    const { id, provinceCount, availableProductCount, customerCount, vehicleServiceCompanyCount, vehicleInfoCount, vehicleInspectionOrderCount } = this.props.carInspectionPlatform
    
    
    
    return (

      <PageHeaderLayout
        title="驾乐乐车辆代审服务平台总览"
        content={summaryOf(this.props.carInspectionPlatform)}
        wrapperClassName={styles.advancedForm}
      >
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
                title="商户管理"
                action={<Tooltip title="商户管理"><Icon type="info-circle-o" /></Tooltip>}
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
                title="上线检测订单"
                action={<Tooltip title="上线检测订单"><Icon type="info-circle-o" /></Tooltip>}
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

          </Row>
        </div>
      </PageHeaderLayout>
    )
  }
}


