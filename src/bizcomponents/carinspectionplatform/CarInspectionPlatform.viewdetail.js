

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
import styles from './CarInspectionPlatform.viewdetail.less'
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
export default class CarInspectionPlatformViewDetail extends Component {


  state = {
    tabKey: `provinceList`,
    stepDirection: 'horizontal',
  }
 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
    const {ProvinceViewTable} = GlobalComponents;
    const {AvailableProductViewTable} = GlobalComponents;
    const {CustomerViewTable} = GlobalComponents;
    const {VehicleServiceCompanyViewTable} = GlobalComponents;
    const {VehicleInfoViewTable} = GlobalComponents;
    const {VehicleInspectionOrderViewTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    
    const carInspectionPlatform = this.props.carInspectionPlatform
    const { id, provinceCount, availableProductCount, customerCount, vehicleServiceCompanyCount, vehicleInfoCount, vehicleInspectionOrderCount } = carInspectionPlatform
    const { provinceList, availableProductList, customerList, vehicleServiceCompanyList, vehicleInfoList, vehicleInspectionOrderList } = carInspectionPlatform
    
    const owner = { type: '_carInspectionPlatform', id }
    
    const tabList = [

      {key: 'provinceList',tab: `省(${provinceCount})`}, 
      {key: 'availableProductList',tab: `产品类型(${availableProductCount})`}, 
      {key: 'customerList',tab: `客户(${customerCount})`}, 
      {key: 'vehicleServiceCompanyList',tab: `商户管理(${vehicleServiceCompanyCount})`}, 
      {key: 'vehicleInfoList',tab: `车辆信息(${vehicleInfoCount})`}, 
      {key: 'vehicleInspectionOrderList',tab: `上线检测订单(${vehicleInspectionOrderCount})`}, 
   

   ];
   
   
    const contentList = {
       provinceList:  
        <ProvinceViewTable data={provinceList} owner={owner} {...this.props} />,
 
      availableProductList:  
        <AvailableProductViewTable data={availableProductList} owner={owner} {...this.props} />,
 
      customerList:  
        <CustomerViewTable data={customerList} owner={owner} {...this.props} />,
 
      vehicleServiceCompanyList:  
        <VehicleServiceCompanyViewTable data={vehicleServiceCompanyList} owner={owner} {...this.props} />,
 
      vehicleInfoList:  
        <VehicleInfoViewTable data={vehicleInfoList} owner={owner} {...this.props} />,
 
      vehicleInspectionOrderList:  
        <VehicleInspectionOrderViewTable data={vehicleInspectionOrderList} owner={owner} {...this.props} />,
 
    
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="驾乐乐车辆代审服务平台总览"
        content={summaryOf(this.props.carInspectionPlatform)}
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



