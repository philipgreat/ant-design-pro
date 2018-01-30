

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
import styles from './AvailableInsurance.dashboard.less'
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
const summaryOf = (availableInsurance) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{availableInsurance.id}</Description> 
<Description term="保险产品名称">{availableInsurance.insuranceName}</Description> 
<Description term="保险承保方">{availableInsurance.insuranceVendor}</Description> 
<Description term="保险价格">{availableInsurance.insurancePrice}</Description> 
<Description term="概览">{availableInsurance.summary}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  availableInsurance: state._availableInsurance,
}))
export default class AvailableInsuranceDashboard extends Component {
  render() {
    // eslint-disable-next-line max-len
    const { id, vehicleInspectionInsuranceOrderCount, serviceInsuranceForInspectionCount } = this.props.availableInsurance
    
    
    
    return (

      <PageHeaderLayout
        title="保险增值服务总览"
        content={summaryOf(this.props.availableInsurance)}
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
                <Link to={`/availableInsurance/${id}/list/vehicleInspectionInsuranceOrderList`}><Icon type="profile" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/availableInsurance/${id}/list/vehicleInspectionInsuranceOrderCreateForm`}><Icon type="plus-circle-o" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/availableInsurance/${id}/list/vehicleInspectionInsuranceOrderList`}><Icon type="line-chart" style={{ fontSize: 20, color: '#08c' }} /></Link>
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
                <Link to={`/availableInsurance/${id}/list/serviceInsuranceForInspectionList`}><Icon type="profile" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/availableInsurance/${id}/list/serviceInsuranceForInspectionCreateForm`}><Icon type="plus-circle-o" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/availableInsurance/${id}/list/serviceInsuranceForInspectionList`}><Icon type="line-chart" style={{ fontSize: 20, color: '#08c' }} /></Link>
              </ChartCard>
            </Col>

          </Row>
        </div>
      </PageHeaderLayout>
    )
  }
}



