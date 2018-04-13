

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
import styles from './AvailableInsurance.viewdetail.less'
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

const summaryOf = (availableInsurance) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{availableInsurance.id}</Description> 
<Description term="保险名称">{availableInsurance.insuranceName}</Description> 
<Description term="承保方">{availableInsurance.insuranceVendor}</Description> 
<Description term="保费">{availableInsurance.insurancePrice}</Description> 
<Description term="摘要">{availableInsurance.summary}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  availableInsurance: state._availableInsurance,
}))
export default class AvailableInsuranceViewDetail extends Component {


  state = {
    tabKey: `vehicleInspectionInsuranceOrderList`,
    stepDirection: 'horizontal',
  }
 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
    const {VehicleInspectionInsuranceOrderViewTable} = GlobalComponents;
    const {ServiceInsuranceForInspectionViewTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    
    const availableInsurance = this.props.availableInsurance
    const { id, vehicleInspectionInsuranceOrderCount, serviceInsuranceForInspectionCount } = availableInsurance
    const { vehicleInspectionInsuranceOrderList, serviceInsuranceForInspectionList } = availableInsurance
    
    const owner = { type: '_availableInsurance', id }
    
    const tabList = [

      {key: 'vehicleInspectionInsuranceOrderList',tab: `车辆上线检测保险订单(${vehicleInspectionInsuranceOrderCount})`}, 
      {key: 'serviceInsuranceForInspectionList',tab: `保险服务(${serviceInsuranceForInspectionCount})`}, 
   

   ];
   
   
    const contentList = {
       vehicleInspectionInsuranceOrderList:  
        <VehicleInspectionInsuranceOrderViewTable data={vehicleInspectionInsuranceOrderList} owner={owner} {...this.props} />,
 
      serviceInsuranceForInspectionList:  
        <ServiceInsuranceForInspectionViewTable data={serviceInsuranceForInspectionList} owner={owner} {...this.props} />,
 
    
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="车辆代办保险总览"
        content={summaryOf(this.props.availableInsurance)}
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



