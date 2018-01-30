

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
import styles from './Equipment.viewdetail.less'
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

const summaryOf = (equipment) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{equipment.id}</Description> 
<Description term="名称">{equipment.name}</Description> 
<Description term="价格">{equipment.price}</Description> 
<Description term="模型">{equipment.model}</Description> 
<Description term="英雄的形象">{equipment.heroImage}</Description> 
<Description term="分数">{equipment.score}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  equipment: state._equipment,
}))
export default class EquipmentViewDetail extends Component {


  state = {
    tabKey: `equipmentApplicationList`,
    stepDirection: 'horizontal',
  }
 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
    const {EquipmentApplicationViewTable} = GlobalComponents;
    const {InputInterfaceViewTable} = GlobalComponents;
    const {OutputInterfaceViewTable} = GlobalComponents;
    const {EquipmentParameterViewTable} = GlobalComponents;
    const {EquipmentSupplyLeadTimeViewTable} = GlobalComponents;
    const {EquipmentFileViewTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    
    const equipment = this.props.equipment
    const { id, equipmentApplicationCount, inputInterfaceCount, outputInterfaceCount, equipmentParameterCount, equipmentSupplyLeadTimeCount, equipmentFileCount } = equipment
    const { equipmentApplicationList, inputInterfaceList, outputInterfaceList, equipmentParameterList, equipmentSupplyLeadTimeList, equipmentFileList } = equipment
    
    const owner = { type: '_equipment', id }
    
    const tabList = [

      {key: 'equipmentApplicationList',tab: `设备应用程序(${equipmentApplicationCount})`}, 
      {key: 'inputInterfaceList',tab: `输入接口(${inputInterfaceCount})`}, 
      {key: 'outputInterfaceList',tab: `输出接口(${outputInterfaceCount})`}, 
      {key: 'equipmentParameterList',tab: `设备参数(${equipmentParameterCount})`}, 
      {key: 'equipmentSupplyLeadTimeList',tab: `设备供应提前期(${equipmentSupplyLeadTimeCount})`}, 
      {key: 'equipmentFileList',tab: `设备文件(${equipmentFileCount})`}, 
   

   ];
   
   
    const contentList = {
       equipmentApplicationList:  
        <EquipmentApplicationViewTable data={equipmentApplicationList} owner={owner} {...this.props} />,
 
      inputInterfaceList:  
        <InputInterfaceViewTable data={inputInterfaceList} owner={owner} {...this.props} />,
 
      outputInterfaceList:  
        <OutputInterfaceViewTable data={outputInterfaceList} owner={owner} {...this.props} />,
 
      equipmentParameterList:  
        <EquipmentParameterViewTable data={equipmentParameterList} owner={owner} {...this.props} />,
 
      equipmentSupplyLeadTimeList:  
        <EquipmentSupplyLeadTimeViewTable data={equipmentSupplyLeadTimeList} owner={owner} {...this.props} />,
 
      equipmentFileList:  
        <EquipmentFileViewTable data={equipmentFileList} owner={owner} {...this.props} />,
 
    
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="设备总览"
        content={summaryOf(this.props.equipment)}
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



