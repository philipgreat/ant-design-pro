

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
import styles from './InspectionStation.dashboard.less'
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
const summaryOf = (inspectionStation) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{inspectionStation.id}</Description> 
<Description term="名称">{inspectionStation.name}</Description> 
<Description term="服务状态">{inspectionStation.operatingStatus}</Description> 
<Description term="所在地址">{inspectionStation.addressDetail}</Description> 
<Description term="位置">{inspectionStation.location}</Description> 
<Description term="联系人姓名">{inspectionStation.contactName}</Description> 
<Description term="联系手机">{inspectionStation.contactMobile}</Description> 
<Description term="计量资格认证">{inspectionStation.metrologyAccreditationImage}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  inspectionStation: state._inspectionStation,
}))
export default class InspectionStationDashboard extends Component {
  render() {
    // eslint-disable-next-line max-len
    const { id, serviceVehicleInspectionCount, serviceFileInspectionCount } = this.props.inspectionStation
    
    
    
    return (

      <PageHeaderLayout
        title="检测站总览"
        content={summaryOf(this.props.inspectionStation)}
        wrapperClassName={styles.advancedForm}
      >
        <div>
          <Row gutter={24}>

          
            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="车辆上线检测"
                action={<Tooltip title="车辆上线检测"><Icon type="info-circle-o" /></Tooltip>}
                total={numeral(serviceVehicleInspectionCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link to={`/inspectionStation/${id}/list/serviceVehicleInspectionList`}><Icon type="profile" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/inspectionStation/${id}/list/serviceVehicleInspectionCreateForm`}><Icon type="plus-circle-o" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/inspectionStation/${id}/list/serviceVehicleInspectionList`}><Icon type="line-chart" style={{ fontSize: 20, color: '#08c' }} /></Link>
              </ChartCard>
            </Col>

          
            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="6年免检服务"
                action={<Tooltip title="6年免检服务"><Icon type="info-circle-o" /></Tooltip>}
                total={numeral(serviceFileInspectionCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link to={`/inspectionStation/${id}/list/serviceFileInspectionList`}><Icon type="profile" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/inspectionStation/${id}/list/serviceFileInspectionCreateForm`}><Icon type="plus-circle-o" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/inspectionStation/${id}/list/serviceFileInspectionList`}><Icon type="line-chart" style={{ fontSize: 20, color: '#08c' }} /></Link>
              </ChartCard>
            </Col>

          </Row>
        </div>
      </PageHeaderLayout>
    )
  }
}



