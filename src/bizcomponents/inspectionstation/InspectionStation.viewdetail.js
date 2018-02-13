

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
import styles from './InspectionStation.viewdetail.less'
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

const summaryOf = (inspectionStation) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{inspectionStation.id}</Description> 
<Description term="名称">{inspectionStation.name}</Description> 
<Description term="服务状态">{inspectionStation.operatingStatus}</Description> 
<Description term="所在地址">{inspectionStation.addressDetail}</Description> 
<Description term="经度">{inspectionStation.longitude}</Description> 
<Description term="纬度">{inspectionStation.latitude}</Description> 
<Description term="联系人姓名">{inspectionStation.contactName}</Description> 
<Description term="联系手机">{inspectionStation.contactMobile}</Description> 
<Description term="计量资格认证">{inspectionStation.metrologyAccreditationImage}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  inspectionStation: state._inspectionStation,
}))
export default class InspectionStationViewDetail extends Component {


  state = {
    tabKey: `serviceVehicleInspectionList`,
    stepDirection: 'horizontal',
  }
 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
    const {ServiceVehicleInspectionViewTable} = GlobalComponents;
    const {ServiceFileInspectionViewTable} = GlobalComponents;
    const {InspectionStationAccountViewTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    
    const inspectionStation = this.props.inspectionStation
    const { id, serviceVehicleInspectionCount, serviceFileInspectionCount, inspectionStationAccountCount } = inspectionStation
    const { serviceVehicleInspectionList, serviceFileInspectionList, inspectionStationAccountList } = inspectionStation
    
    const owner = { type: '_inspectionStation', id }
    
    const tabList = [

      {key: 'serviceVehicleInspectionList',tab: `车辆上线检测(${serviceVehicleInspectionCount})`}, 
      {key: 'serviceFileInspectionList',tab: `6年免检服务(${serviceFileInspectionCount})`}, 
      {key: 'inspectionStationAccountList',tab: `检查站对账单(${inspectionStationAccountCount})`}, 
   

   ];
   
   
    const contentList = {
       serviceVehicleInspectionList:  
        <ServiceVehicleInspectionViewTable data={serviceVehicleInspectionList} owner={owner} {...this.props} />,
 
      serviceFileInspectionList:  
        <ServiceFileInspectionViewTable data={serviceFileInspectionList} owner={owner} {...this.props} />,
 
      inspectionStationAccountList:  
        <InspectionStationAccountViewTable data={inspectionStationAccountList} owner={owner} {...this.props} />,
 
    
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="检测站总览"
        content={summaryOf(this.props.inspectionStation)}
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



