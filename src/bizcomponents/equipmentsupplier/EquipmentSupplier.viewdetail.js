

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
import styles from './EquipmentSupplier.viewdetail.less'
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

const summaryOf = (equipmentSupplier) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{equipmentSupplier.id}</Description> 
<Description term="名称">{equipmentSupplier.name}</Description> 
<Description term="描述">{equipmentSupplier.description}</Description> 
<Description term="传热性能的手机">{equipmentSupplier.contectPhone}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  equipmentSupplier: state._equipmentSupplier,
}))
export default class EquipmentSupplierViewDetail extends Component {


  state = {
    tabKey: `equipmentApplicationList`,
    stepDirection: 'horizontal',
  }
 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
    const {EquipmentApplicationViewTable} = GlobalComponents;
    const {EquipmentViewTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    
    const equipmentSupplier = this.props.equipmentSupplier
    const { id, equipmentApplicationCount, equipmentCount } = equipmentSupplier
    const { equipmentApplicationList, equipmentList } = equipmentSupplier
    
    const owner = { type: '_equipmentSupplier', id }
    
    const tabList = [

      {key: 'equipmentApplicationList',tab: `设备应用程序(${equipmentApplicationCount})`}, 
      {key: 'equipmentList',tab: `设备(${equipmentCount})`}, 
   

   ];
   
   
    const contentList = {
       equipmentApplicationList:  
        <EquipmentApplicationViewTable data={equipmentApplicationList} owner={owner} {...this.props} />,
 
      equipmentList:  
        <EquipmentViewTable data={equipmentList} owner={owner} {...this.props} />,
 
    
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="设备供应商总览"
        content={summaryOf(this.props.equipmentSupplier)}
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



