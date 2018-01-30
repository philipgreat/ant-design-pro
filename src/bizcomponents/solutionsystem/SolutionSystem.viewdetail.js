

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
import styles from './SolutionSystem.viewdetail.less'
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

const summaryOf = (solutionSystem) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{solutionSystem.id}</Description> 
<Description term="名称">{solutionSystem.name}</Description> 
<Description term="描述">{solutionSystem.description}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  solutionSystem: state._solutionSystem,
}))
export default class SolutionSystemViewDetail extends Component {


  state = {
    tabKey: `designerList`,
    stepDirection: 'horizontal',
  }
 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
    const {DesignerViewTable} = GlobalComponents;
    const {SeniorDesignerViewTable} = GlobalComponents;
    const {EquipmentSupplierViewTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    
    const solutionSystem = this.props.solutionSystem
    const { id, designerCount, seniorDesignerCount, equipmentSupplierCount } = solutionSystem
    const { designerList, seniorDesignerList, equipmentSupplierList } = solutionSystem
    
    const owner = { type: '_solutionSystem', id }
    
    const tabList = [

      {key: 'designerList',tab: `设计师(${designerCount})`}, 
      {key: 'seniorDesignerList',tab: `高级设计师(${seniorDesignerCount})`}, 
      {key: 'equipmentSupplierList',tab: `设备供应商(${equipmentSupplierCount})`}, 
   

   ];
   
   
    const contentList = {
       designerList:  
        <DesignerViewTable data={designerList} owner={owner} {...this.props} />,
 
      seniorDesignerList:  
        <SeniorDesignerViewTable data={seniorDesignerList} owner={owner} {...this.props} />,
 
      equipmentSupplierList:  
        <EquipmentSupplierViewTable data={equipmentSupplierList} owner={owner} {...this.props} />,
 
    
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="解决方案系统总览"
        content={summaryOf(this.props.solutionSystem)}
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



