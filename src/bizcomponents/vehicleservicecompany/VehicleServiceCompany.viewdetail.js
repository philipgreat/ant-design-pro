

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
<Description term="ID">{vehicleServiceCompany.id}</Description> 
<Description term="公司名称">{vehicleServiceCompany.companyName}</Description> 
<Description term="服务状态">{vehicleServiceCompany.operatingStatus}</Description> 
<Description term="所在地址">{vehicleServiceCompany.addressDetail}</Description> 
<Description term="到店服务">{vehicleServiceCompany.availableStoreService?'是':'否'}</Description> 
<Description term="上门服务">{vehicleServiceCompany.availableHomeService?'是':'否'}</Description> 
<Description term="营业时间">{vehicleServiceCompany.openingTime}</Description> 
<Description term="经度">{vehicleServiceCompany.longitude}</Description> 
<Description term="纬度">{vehicleServiceCompany.latitude}</Description> 
<Description term="联系电话">{vehicleServiceCompany.contactPhone}</Description> 
<Description term="公司形象1">{vehicleServiceCompany.companyImage1}</Description> 
<Description term="公司形象2">{vehicleServiceCompany.companyImage2}</Description> 
<Description term="公司形象3">{vehicleServiceCompany.companyImage3}</Description> 
<Description term="公司形象4">{vehicleServiceCompany.companyImage4}</Description> 
<Description term="公司形象5">{vehicleServiceCompany.companyImage5}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  vehicleServiceCompany: state._vehicleServiceCompany,
}))
export default class VehicleServiceCompanyViewDetail extends Component {


  state = {
    tabKey: `contractList`,
    stepDirection: 'horizontal',
  }
 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
    const {ContractViewTable} = GlobalComponents;
    const {ServiceCompanyAuthenticationInfoViewTable} = GlobalComponents;
    const {VehicleInspectionPlateNumberPatternViewTable} = GlobalComponents;
    const {FileInspectionPlateNumberPatternViewTable} = GlobalComponents;
    const {VehicleServiceCompanyBusinessScopeViewTable} = GlobalComponents;
    const {VehicleServiceCompanyDispatcherViewTable} = GlobalComponents;
    const {VehicleServiceCompanyEmployeeViewTable} = GlobalComponents;
    const {VehicleInspectionOrderViewTable} = GlobalComponents;
    const {ServiceVehicleMovementC2mViewTable} = GlobalComponents;
    const {ServiceVehicleMovementM2mViewTable} = GlobalComponents;
    const {ServiceVehicleMovementM2cViewTable} = GlobalComponents;
    const {ServiceFileMovementC2mViewTable} = GlobalComponents;
    const {ServiceFileMovementM2mViewTable} = GlobalComponents;
    const {ServiceFileMovementM2cViewTable} = GlobalComponents;
    const {ServiceInsuranceForInspectionViewTable} = GlobalComponents;
    const {ServiceVehicleInspectionViewTable} = GlobalComponents;
    const {ServiceFileInspectionViewTable} = GlobalComponents;
    const {ServiceVehicleRepairingViewTable} = GlobalComponents;
    const {ServiceCompanyAccountViewTable} = GlobalComponents;
    const {RepairingCompanyAccountViewTable} = GlobalComponents;
    const {InsuranceServiceAccountViewTable} = GlobalComponents;
    const {InspectionStationAccountViewTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    
    const vehicleServiceCompany = this.props.vehicleServiceCompany
    const { id, contractCount, serviceCompanyAuthenticationInfoCount, vehicleInspectionPlateNumberPatternCount, fileInspectionPlateNumberPatternCount, vehicleServiceCompanyBusinessScopeCount, vehicleServiceCompanyDispatcherCount, vehicleServiceCompanyEmployeeCount, vehicleInspectionOrderCount, serviceVehicleMovementC2mCount, serviceVehicleMovementM2mCount, serviceVehicleMovementM2cCount, serviceFileMovementC2mCount, serviceFileMovementM2mCount, serviceFileMovementM2cCount, serviceInsuranceForInspectionCount, serviceVehicleInspectionCount, serviceFileInspectionCount, serviceVehicleRepairingCount, serviceCompanyAccountCount, repairingCompanyAccountCount, insuranceServiceAccountCount, inspectionStationAccountCount } = vehicleServiceCompany
    const { contractList, serviceCompanyAuthenticationInfoList, vehicleInspectionPlateNumberPatternList, fileInspectionPlateNumberPatternList, vehicleServiceCompanyBusinessScopeList, vehicleServiceCompanyDispatcherList, vehicleServiceCompanyEmployeeList, vehicleInspectionOrderList, serviceVehicleMovementC2mList, serviceVehicleMovementM2mList, serviceVehicleMovementM2cList, serviceFileMovementC2mList, serviceFileMovementM2mList, serviceFileMovementM2cList, serviceInsuranceForInspectionList, serviceVehicleInspectionList, serviceFileInspectionList, serviceVehicleRepairingList, serviceCompanyAccountList, repairingCompanyAccountList, insuranceServiceAccountList, inspectionStationAccountList } = vehicleServiceCompany
    
    const owner = { type: '_vehicleServiceCompany', id }
    
    const tabList = [

      {key: 'contractList',tab: `合同(${contractCount})`}, 
      {key: 'serviceCompanyAuthenticationInfoList',tab: `服务公司认证信息(${serviceCompanyAuthenticationInfoCount})`}, 
      {key: 'vehicleInspectionPlateNumberPatternList',tab: `车辆检验牌照号码模式(${vehicleInspectionPlateNumberPatternCount})`}, 
      {key: 'fileInspectionPlateNumberPatternList',tab: `6年免检牌照号码模式(${fileInspectionPlateNumberPatternCount})`}, 
      {key: 'vehicleServiceCompanyBusinessScopeList',tab: `服务提供商服务范围管理(${vehicleServiceCompanyBusinessScopeCount})`}, 
      {key: 'vehicleServiceCompanyDispatcherList',tab: `派单管理(${vehicleServiceCompanyDispatcherCount})`}, 
      {key: 'vehicleServiceCompanyEmployeeList',tab: `服务提供商员工管理(${vehicleServiceCompanyEmployeeCount})`}, 
      {key: 'vehicleInspectionOrderList',tab: `上线检测订单(${vehicleInspectionOrderCount})`}, 
      {key: 'serviceVehicleMovementC2mList',tab: `收车服务(${serviceVehicleMovementC2mCount})`}, 
      {key: 'serviceVehicleMovementM2mList',tab: `移车服务(${serviceVehicleMovementM2mCount})`}, 
      {key: 'serviceVehicleMovementM2cList',tab: `还车服务(${serviceVehicleMovementM2cCount})`}, 
      {key: 'serviceFileMovementC2mList',tab: `收件服务(${serviceFileMovementC2mCount})`}, 
      {key: 'serviceFileMovementM2mList',tab: `移件服务(${serviceFileMovementM2mCount})`}, 
      {key: 'serviceFileMovementM2cList',tab: `还件服务(${serviceFileMovementM2cCount})`}, 
      {key: 'serviceInsuranceForInspectionList',tab: `保险增值服务(${serviceInsuranceForInspectionCount})`}, 
      {key: 'serviceVehicleInspectionList',tab: `车辆上线检测(${serviceVehicleInspectionCount})`}, 
      {key: 'serviceFileInspectionList',tab: `6年免检服务(${serviceFileInspectionCount})`}, 
      {key: 'serviceVehicleRepairingList',tab: `修车服务(${serviceVehicleRepairingCount})`}, 
      {key: 'serviceCompanyAccountList',tab: `服务公司对账单(${serviceCompanyAccountCount})`}, 
      {key: 'repairingCompanyAccountList',tab: `修理公司对账单(${repairingCompanyAccountCount})`}, 
      {key: 'insuranceServiceAccountList',tab: `保险服务帐户(${insuranceServiceAccountCount})`}, 
      {key: 'inspectionStationAccountList',tab: `检查站对账单(${inspectionStationAccountCount})`}, 
   

   ];
   
   
    const contentList = {
       contractList:  
        <ContractViewTable data={contractList} owner={owner} {...this.props} />,
 
      serviceCompanyAuthenticationInfoList:  
        <ServiceCompanyAuthenticationInfoViewTable data={serviceCompanyAuthenticationInfoList} owner={owner} {...this.props} />,
 
      vehicleInspectionPlateNumberPatternList:  
        <VehicleInspectionPlateNumberPatternViewTable data={vehicleInspectionPlateNumberPatternList} owner={owner} {...this.props} />,
 
      fileInspectionPlateNumberPatternList:  
        <FileInspectionPlateNumberPatternViewTable data={fileInspectionPlateNumberPatternList} owner={owner} {...this.props} />,
 
      vehicleServiceCompanyBusinessScopeList:  
        <VehicleServiceCompanyBusinessScopeViewTable data={vehicleServiceCompanyBusinessScopeList} owner={owner} {...this.props} />,
 
      vehicleServiceCompanyDispatcherList:  
        <VehicleServiceCompanyDispatcherViewTable data={vehicleServiceCompanyDispatcherList} owner={owner} {...this.props} />,
 
      vehicleServiceCompanyEmployeeList:  
        <VehicleServiceCompanyEmployeeViewTable data={vehicleServiceCompanyEmployeeList} owner={owner} {...this.props} />,
 
      vehicleInspectionOrderList:  
        <VehicleInspectionOrderViewTable data={vehicleInspectionOrderList} owner={owner} {...this.props} />,
 
      serviceVehicleMovementC2mList:  
        <ServiceVehicleMovementC2mViewTable data={serviceVehicleMovementC2mList} owner={owner} {...this.props} />,
 
      serviceVehicleMovementM2mList:  
        <ServiceVehicleMovementM2mViewTable data={serviceVehicleMovementM2mList} owner={owner} {...this.props} />,
 
      serviceVehicleMovementM2cList:  
        <ServiceVehicleMovementM2cViewTable data={serviceVehicleMovementM2cList} owner={owner} {...this.props} />,
 
      serviceFileMovementC2mList:  
        <ServiceFileMovementC2mViewTable data={serviceFileMovementC2mList} owner={owner} {...this.props} />,
 
      serviceFileMovementM2mList:  
        <ServiceFileMovementM2mViewTable data={serviceFileMovementM2mList} owner={owner} {...this.props} />,
 
      serviceFileMovementM2cList:  
        <ServiceFileMovementM2cViewTable data={serviceFileMovementM2cList} owner={owner} {...this.props} />,
 
      serviceInsuranceForInspectionList:  
        <ServiceInsuranceForInspectionViewTable data={serviceInsuranceForInspectionList} owner={owner} {...this.props} />,
 
      serviceVehicleInspectionList:  
        <ServiceVehicleInspectionViewTable data={serviceVehicleInspectionList} owner={owner} {...this.props} />,
 
      serviceFileInspectionList:  
        <ServiceFileInspectionViewTable data={serviceFileInspectionList} owner={owner} {...this.props} />,
 
      serviceVehicleRepairingList:  
        <ServiceVehicleRepairingViewTable data={serviceVehicleRepairingList} owner={owner} {...this.props} />,
 
      serviceCompanyAccountList:  
        <ServiceCompanyAccountViewTable data={serviceCompanyAccountList} owner={owner} {...this.props} />,
 
      repairingCompanyAccountList:  
        <RepairingCompanyAccountViewTable data={repairingCompanyAccountList} owner={owner} {...this.props} />,
 
      insuranceServiceAccountList:  
        <InsuranceServiceAccountViewTable data={insuranceServiceAccountList} owner={owner} {...this.props} />,
 
      inspectionStationAccountList:  
        <InspectionStationAccountViewTable data={inspectionStationAccountList} owner={owner} {...this.props} />,
 
    
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="商户总览"
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



