

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
import styles from './ServiceVehicleInspection.viewdetail.less'
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

const summaryOf = (serviceVehicleInspection) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{serviceVehicleInspection.id}</Description> 
<Description term="服务状态">{serviceVehicleInspection.serviceStatus}</Description> 
<Description term="服务概述">{serviceVehicleInspection.serviceSummary}</Description> 
<Description term="开始时间">{ moment(serviceVehicleInspection.startTime).format('YYYY-MM-DD')}</Description> 
<Description term="经度">{serviceVehicleInspection.longitude}</Description> 
<Description term="纬度">{serviceVehicleInspection.latitude}</Description> 
<Description term="最后更新时间">{ moment(serviceVehicleInspection.lastUpdateTime).format('YYYY-MM-DD')}</Description> 
<Description term="检测日期">{ moment(serviceVehicleInspection.inspectionDatetime).format('YYYY-MM-DD')}</Description> 
<Description term="年检报告1">{serviceVehicleInspection.inspectionReportImage1}</Description> 
<Description term="年检报告2">{serviceVehicleInspection.inspectionReportImage2}</Description> 
<Description term="年检报告3">{serviceVehicleInspection.inspectionReportImage3}</Description> 
<Description term="年检报告4">{serviceVehicleInspection.inspectionReportImage4}</Description> 
<Description term="年检报告5">{serviceVehicleInspection.inspectionReportImage5}</Description> 
<Description term="检测结果">{serviceVehicleInspection.inspectionResult}</Description> 
<Description term="是否要修理">{serviceVehicleInspection.inspectionNeedRepair}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  serviceVehicleInspection: state._serviceVehicleInspection,
}))
export default class ServiceVehicleInspectionViewDetail extends Component {

 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
  
    // eslint-disable-next-line max-len
    
    const serviceVehicleInspection = this.props.serviceVehicleInspection
    const { id,  } = serviceVehicleInspection
    const {  } = serviceVehicleInspection
    
    const owner = { type: '_serviceVehicleInspection', id }
    
    const tabList = [

   

   ];
   
   
    const contentList = {
     
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="车辆上线检测总览"
        content={summaryOf(this.props.serviceVehicleInspection)}
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



