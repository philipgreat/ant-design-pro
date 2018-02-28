

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
import styles from './AvailableService.viewdetail.less'
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

const summaryOf = (availableService) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{availableService.id}</Description> 
<Description term="服务名称">{availableService.serviceName}</Description> 
<Description term="服务代码">{availableService.serviceKey}</Description> 
<Description term="服务描述">{availableService.serviceDescription}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  availableService: state._availableService,
}))
export default class AvailableServiceViewDetail extends Component {


  state = {
    tabKey: `servicePriceList`,
    stepDirection: 'horizontal',
  }
 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
    const {ServicePriceViewTable} = GlobalComponents;
    const {VehicleRepairingAllowanceViewTable} = GlobalComponents;
    const {VehicleServiceCompanyBusinessScopeViewTable} = GlobalComponents;
    const {VehicleInspectionOrderServiceLogViewTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    
    const availableService = this.props.availableService
    const { id, servicePriceCount, vehicleRepairingAllowanceCount, vehicleServiceCompanyBusinessScopeCount, vehicleInspectionOrderServiceLogCount } = availableService
    const { servicePriceList, vehicleRepairingAllowanceList, vehicleServiceCompanyBusinessScopeList, vehicleInspectionOrderServiceLogList } = availableService
    
    const owner = { type: '_availableService', id }
    
    const tabList = [

      {key: 'servicePriceList',tab: `服务价格(${servicePriceCount})`}, 
      {key: 'vehicleRepairingAllowanceList',tab: `汽车修理平台补贴(${vehicleRepairingAllowanceCount})`}, 
      {key: 'vehicleServiceCompanyBusinessScopeList',tab: `商户服务范围(${vehicleServiceCompanyBusinessScopeCount})`}, 
      {key: 'vehicleInspectionOrderServiceLogList',tab: `年检订单执行日志(${vehicleInspectionOrderServiceLogCount})`}, 
   

   ];
   
   
    const contentList = {
       servicePriceList:  
        <ServicePriceViewTable data={servicePriceList} owner={owner} {...this.props} />,
 
      vehicleRepairingAllowanceList:  
        <VehicleRepairingAllowanceViewTable data={vehicleRepairingAllowanceList} owner={owner} {...this.props} />,
 
      vehicleServiceCompanyBusinessScopeList:  
        <VehicleServiceCompanyBusinessScopeViewTable data={vehicleServiceCompanyBusinessScopeList} owner={owner} {...this.props} />,
 
      vehicleInspectionOrderServiceLogList:  
        <VehicleInspectionOrderServiceLogViewTable data={vehicleInspectionOrderServiceLogList} owner={owner} {...this.props} />,
 
    
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="服务范围总览"
        content={summaryOf(this.props.availableService)}
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



