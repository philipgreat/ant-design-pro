

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
import styles from './VehicleServiceCompanyEmployee.viewdetail.less'
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

const summaryOf = (vehicleServiceCompanyEmployee) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{vehicleServiceCompanyEmployee.id}</Description> 
<Description term="员工姓名">{vehicleServiceCompanyEmployee.employeeName}</Description> 
<Description term="证件照片">{vehicleServiceCompanyEmployee.profileImage}</Description> 
<Description term="商户名称">{vehicleServiceCompanyEmployee.companyName}</Description> 
<Description term="手机号码">{vehicleServiceCompanyEmployee.mobileNumber}</Description> 
<Description term="性别">{vehicleServiceCompanyEmployee.gender}</Description> 
<Description term="工作状态">{vehicleServiceCompanyEmployee.availableState}</Description> 
<Description term="无犯罪记录证明">{vehicleServiceCompanyEmployee.innocentEvidenceImage}</Description> 
<Description term="身份证号码">{vehicleServiceCompanyEmployee.identityCardNumber}</Description> 
<Description term="是否可以移车">{vehicleServiceCompanyEmployee.availableMoveCar?'是':'否'}</Description> 
<Description term="是否可以检车">{vehicleServiceCompanyEmployee.availableInspectionCar?'是':'否'}</Description> 
<Description term="是否可以修车">{vehicleServiceCompanyEmployee.availableRepairCar?'是':'否'}</Description> 
<Description term="当前状态">{vehicleServiceCompanyEmployee.currentStatus}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  vehicleServiceCompanyEmployee: state._vehicleServiceCompanyEmployee,
}))
export default class VehicleServiceCompanyEmployeeViewDetail extends Component {


  state = {
    tabKey: `serviceOrderFilterList`,
    stepDirection: 'horizontal',
  }
 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
    const {ServiceOrderFilterViewTable} = GlobalComponents;
    const {EmployeeDrivingLicenseViewTable} = GlobalComponents;
    const {VehicleInspectionOrderServiceLogViewTable} = GlobalComponents;
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
    
    const vehicleServiceCompanyEmployee = this.props.vehicleServiceCompanyEmployee
    const { id, serviceOrderFilterCount, employeeDrivingLicenseCount, vehicleInspectionOrderServiceLogCount, serviceVehicleMovementC2mCount, serviceVehicleMovementM2mAsResponsibleWorkerCount, serviceVehicleMovementM2mAsDriverCount, serviceVehicleMovementM2mAsReceiverCount, serviceVehicleMovementM2cCount, serviceFileMovementC2mCount, serviceFileMovementM2mAsResponsibleWorkerCount, serviceFileMovementM2mAsSenderCount, serviceFileMovementM2mAsReceiverCount, serviceFileMovementM2cCount, serviceInsuranceForInspectionCount, serviceVehicleInspectionCount, serviceFileInspectionCount, serviceVehicleRepairingCount, serviceCompanyAccountCount, repairingCompanyAccountCount, insuranceServiceAccountCount, inspectionStationAccountCount } = vehicleServiceCompanyEmployee
    const { serviceOrderFilterList, employeeDrivingLicenseList, vehicleInspectionOrderServiceLogList, serviceVehicleMovementC2mList, serviceVehicleMovementM2mListAsResponsibleWorker, serviceVehicleMovementM2mListAsDriver, serviceVehicleMovementM2mListAsReceiver, serviceVehicleMovementM2cList, serviceFileMovementC2mList, serviceFileMovementM2mListAsResponsibleWorker, serviceFileMovementM2mListAsSender, serviceFileMovementM2mListAsReceiver, serviceFileMovementM2cList, serviceInsuranceForInspectionList, serviceVehicleInspectionList, serviceFileInspectionList, serviceVehicleRepairingList, serviceCompanyAccountList, repairingCompanyAccountList, insuranceServiceAccountList, inspectionStationAccountList } = vehicleServiceCompanyEmployee
    
    const owner = { type: '_vehicleServiceCompanyEmployee', id }
    
    const tabList = [

      {key: 'serviceOrderFilterList',tab: `服务单状态类型(${serviceOrderFilterCount})`}, 
      {key: 'employeeDrivingLicenseList',tab: `员工驾驶证(${employeeDrivingLicenseCount})`}, 
      {key: 'vehicleInspectionOrderServiceLogList',tab: `年检订单执行日志(${vehicleInspectionOrderServiceLogCount})`}, 
      {key: 'serviceVehicleMovementC2mList',tab: `收车服务(${serviceVehicleMovementC2mCount})`}, 
      {key: 'serviceVehicleMovementM2mListAsResponsibleWorker',tab: `移车服务(${serviceVehicleMovementM2mAsResponsibleWorkerCount})`}, 
      {key: 'serviceVehicleMovementM2mListAsDriver',tab: `移车服务(${serviceVehicleMovementM2mAsDriverCount})`}, 
      {key: 'serviceVehicleMovementM2mListAsReceiver',tab: `移车服务(${serviceVehicleMovementM2mAsReceiverCount})`}, 
      {key: 'serviceVehicleMovementM2cList',tab: `还车服务(${serviceVehicleMovementM2cCount})`}, 
      {key: 'serviceFileMovementC2mList',tab: `收件服务(${serviceFileMovementC2mCount})`}, 
      {key: 'serviceFileMovementM2mListAsResponsibleWorker',tab: `移件服务(${serviceFileMovementM2mAsResponsibleWorkerCount})`}, 
      {key: 'serviceFileMovementM2mListAsSender',tab: `移件服务(${serviceFileMovementM2mAsSenderCount})`}, 
      {key: 'serviceFileMovementM2mListAsReceiver',tab: `移件服务(${serviceFileMovementM2mAsReceiverCount})`}, 
      {key: 'serviceFileMovementM2cList',tab: `还件服务(${serviceFileMovementM2cCount})`}, 
      {key: 'serviceInsuranceForInspectionList',tab: `保险服务(${serviceInsuranceForInspectionCount})`}, 
      {key: 'serviceVehicleInspectionList',tab: `车辆上线检测(${serviceVehicleInspectionCount})`}, 
      {key: 'serviceFileInspectionList',tab: `6年免检服务(${serviceFileInspectionCount})`}, 
      {key: 'serviceVehicleRepairingList',tab: `维修服务(${serviceVehicleRepairingCount})`}, 
      {key: 'serviceCompanyAccountList',tab: `服务商户对账单(${serviceCompanyAccountCount})`}, 
      {key: 'repairingCompanyAccountList',tab: `修理厂对账单(${repairingCompanyAccountCount})`}, 
      {key: 'insuranceServiceAccountList',tab: `保险服务对账单(${insuranceServiceAccountCount})`}, 
      {key: 'inspectionStationAccountList',tab: `检测站对账单(${inspectionStationAccountCount})`}, 
   

   ];
   
   
    const contentList = {
       serviceOrderFilterList:  
        <ServiceOrderFilterViewTable data={serviceOrderFilterList} owner={owner} {...this.props} />,
 
      employeeDrivingLicenseList:  
        <EmployeeDrivingLicenseViewTable data={employeeDrivingLicenseList} owner={owner} {...this.props} />,
 
      vehicleInspectionOrderServiceLogList:  
        <VehicleInspectionOrderServiceLogViewTable data={vehicleInspectionOrderServiceLogList} owner={owner} {...this.props} />,
 
      serviceVehicleMovementC2mList:  
        <ServiceVehicleMovementC2mViewTable data={serviceVehicleMovementC2mList} owner={owner} {...this.props} />,
 
      serviceVehicleMovementM2mListAsResponsibleWorker:  
        <ServiceVehicleMovementM2mViewTable data={serviceVehicleMovementM2mListAsResponsibleWorker} owner={owner} {...this.props} />,
 
      serviceVehicleMovementM2mListAsDriver:  
        <ServiceVehicleMovementM2mViewTable data={serviceVehicleMovementM2mListAsDriver} owner={owner} {...this.props} />,
 
      serviceVehicleMovementM2mListAsReceiver:  
        <ServiceVehicleMovementM2mViewTable data={serviceVehicleMovementM2mListAsReceiver} owner={owner} {...this.props} />,
 
      serviceVehicleMovementM2cList:  
        <ServiceVehicleMovementM2cViewTable data={serviceVehicleMovementM2cList} owner={owner} {...this.props} />,
 
      serviceFileMovementC2mList:  
        <ServiceFileMovementC2mViewTable data={serviceFileMovementC2mList} owner={owner} {...this.props} />,
 
      serviceFileMovementM2mListAsResponsibleWorker:  
        <ServiceFileMovementM2mViewTable data={serviceFileMovementM2mListAsResponsibleWorker} owner={owner} {...this.props} />,
 
      serviceFileMovementM2mListAsSender:  
        <ServiceFileMovementM2mViewTable data={serviceFileMovementM2mListAsSender} owner={owner} {...this.props} />,
 
      serviceFileMovementM2mListAsReceiver:  
        <ServiceFileMovementM2mViewTable data={serviceFileMovementM2mListAsReceiver} owner={owner} {...this.props} />,
 
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
    


    const actionDescForQualification = (vehicleServiceCompanyEmployee) =>{
      if(!vehicleServiceCompanyEmployee){
        return (<div>出错</div>)
      }
      const {qualification} = vehicleServiceCompanyEmployee;
      if(!qualification){
        return (<div>催一下</div>)
      }
      
      return (

    
      <DescriptionList className={styles.headerList} size="small" col="1">
			<Description term="ID">{qualification.id}</Description> 
			<Description term="执行时间">{qualification.eventTime}</Description> 
			<Description term="谁">{qualification.who}</Description> 
			<Description term="批注">{qualification.comment}</Description> 
			<Description term="版本">{qualification.version}</Description> 

       
		</DescriptionList>
      )
    }

    const actionDescForServing = (vehicleServiceCompanyEmployee) =>{
      if(!vehicleServiceCompanyEmployee){
        return (<div>出错</div>)
      }
      const {serving} = vehicleServiceCompanyEmployee;
      if(!serving){
        return (<div>催一下</div>)
      }
      
      return (

    
      <DescriptionList className={styles.headerList} size="small" col="1">
			<Description term="ID">{serving.id}</Description> 
			<Description term="执行时间">{serving.eventTime}</Description> 
			<Description term="谁">{serving.who}</Description> 
			<Description term="批注">{serving.comment}</Description> 
			<Description term="版本">{serving.version}</Description> 

       
		</DescriptionList>
      )
    }

    const actionDescForTermination = (vehicleServiceCompanyEmployee) =>{
      if(!vehicleServiceCompanyEmployee){
        return (<div>出错</div>)
      }
      const {termination} = vehicleServiceCompanyEmployee;
      if(!termination){
        return (<div>催一下</div>)
      }
      
      return (

    
      <DescriptionList className={styles.headerList} size="small" col="1">
			<Description term="ID">{termination.id}</Description> 
			<Description term="谁">{termination.who}</Description> 
			<Description term="执行时间">{termination.eventTime}</Description> 
			<Description term="批注">{termination.comment}</Description> 
			<Description term="版本">{termination.version}</Description> 

       
		</DescriptionList>
      )
    }

    
	const steps=(<Steps direction={'horizontal'} current={1}>
			<Step title="资格认定" description={actionDescForQualification(vehicleServiceCompanyEmployee)} />
			<Step title="服务状态" description={actionDescForServing(vehicleServiceCompanyEmployee)} />
			<Step title="服务终止" description={actionDescForTermination(vehicleServiceCompanyEmployee)} />
		</Steps>)
    
    
    return (

      <PageHeaderLayout
        title="商户员工总览"
        content={summaryOf(this.props.vehicleServiceCompanyEmployee)}
        wrapperClassName={styles.advancedForm}
      >
	<Card title="流程进度" style={{ marginBottom: 24 }} bordered={false}>{steps}
		</Card>

      
      
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



