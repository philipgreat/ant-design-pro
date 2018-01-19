

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
import styles from './VehicleServiceCompany.viewdetail.less'
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

const summaryOf = (vehicleServiceCompany) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{vehicleServiceCompany.id}</Description> 
<Description term="公司名称">{vehicleServiceCompany.companyName}</Description> 
<Description term="服务状态">{vehicleServiceCompany.operatingStatus}</Description> 
<Description term="所在地址">{vehicleServiceCompany.addressDetail}</Description> 
<Description term="到店服务">{vehicleServiceCompany.availableStoreService?'是':'否'}</Description> 
<Description term="上门服务">{vehicleServiceCompany.availableHomeService?'是':'否'}</Description> 
<Description term="营业时间">{vehicleServiceCompany.openingTime}</Description> 
<Description term="经度">{vehicleServiceCompany.longitude}</Description> 
<Description term="纬度">{vehicleServiceCompany.latitude}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  vehicleServiceCompany: state._vehicleServiceCompany,
}))
export default class VehicleServiceCompanyViewDetail extends Component {


  state = {
    tabKey: `vehicleServiceCompanyBusinessScopeList`,
    stepDirection: 'horizontal',
  }
 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
    const {VehicleServiceCompanyBusinessScopeViewTable} = GlobalComponents;
    const {VehicleServiceCompanyDispatcherViewTable} = GlobalComponents;
    const {VehicleServiceCompanyEmployeeViewTable} = GlobalComponents;
    const {ServiceVehicleMovementC2mViewTable} = GlobalComponents;
    const {ServiceVehicleMovementM2cViewTable} = GlobalComponents;
    const {ServiceFileMovementC2mViewTable} = GlobalComponents;
    const {ServiceFileMovementM2cViewTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    
    const vehicleServiceCompany = this.props.vehicleServiceCompany
    const { id, vehicleServiceCompanyBusinessScopeCount, vehicleServiceCompanyDispatcherCount, vehicleServiceCompanyEmployeeCount, serviceVehicleMovementC2mCount, serviceVehicleMovementM2cCount, serviceFileMovementC2mCount, serviceFileMovementM2cCount } = vehicleServiceCompany
    const { vehicleServiceCompanyBusinessScopeList, vehicleServiceCompanyDispatcherList, vehicleServiceCompanyEmployeeList, serviceVehicleMovementC2mList, serviceVehicleMovementM2cList, serviceFileMovementC2mList, serviceFileMovementM2cList } = vehicleServiceCompany
    
    const owner = { type: '_vehicleServiceCompany', id }
    
    const tabList = [

      {key: 'vehicleServiceCompanyBusinessScopeList',tab: `服务提供商服务范围管理(${vehicleServiceCompanyBusinessScopeCount})`}, 
      {key: 'vehicleServiceCompanyDispatcherList',tab: `派单管理(${vehicleServiceCompanyDispatcherCount})`}, 
      {key: 'vehicleServiceCompanyEmployeeList',tab: `服务提供商员工管理(${vehicleServiceCompanyEmployeeCount})`}, 
      {key: 'serviceVehicleMovementC2mList',tab: `收车服务(${serviceVehicleMovementC2mCount})`}, 
      {key: 'serviceVehicleMovementM2cList',tab: `还车服务(${serviceVehicleMovementM2cCount})`}, 
      {key: 'serviceFileMovementC2mList',tab: `收件服务(${serviceFileMovementC2mCount})`}, 
      {key: 'serviceFileMovementM2cList',tab: `还件服务(${serviceFileMovementM2cCount})`}, 
   

   ];
   
   
    const contentList = {
       vehicleServiceCompanyBusinessScopeList:  
        <VehicleServiceCompanyBusinessScopeViewTable data={vehicleServiceCompanyBusinessScopeList} owner={owner} {...this.props} />,
 
      vehicleServiceCompanyDispatcherList:  
        <VehicleServiceCompanyDispatcherViewTable data={vehicleServiceCompanyDispatcherList} owner={owner} {...this.props} />,
 
      vehicleServiceCompanyEmployeeList:  
        <VehicleServiceCompanyEmployeeViewTable data={vehicleServiceCompanyEmployeeList} owner={owner} {...this.props} />,
 
      serviceVehicleMovementC2mList:  
        <ServiceVehicleMovementC2mViewTable data={serviceVehicleMovementC2mList} owner={owner} {...this.props} />,
 
      serviceVehicleMovementM2cList:  
        <ServiceVehicleMovementM2cViewTable data={serviceVehicleMovementM2cList} owner={owner} {...this.props} />,
 
      serviceFileMovementC2mList:  
        <ServiceFileMovementC2mViewTable data={serviceFileMovementC2mList} owner={owner} {...this.props} />,
 
      serviceFileMovementM2cList:  
        <ServiceFileMovementM2cViewTable data={serviceFileMovementM2cList} owner={owner} {...this.props} />,
 
    
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="商户管理总览"
        content={summaryOf(this.props.vehicleServiceCompany)}
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



