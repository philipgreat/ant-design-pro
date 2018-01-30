

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
import styles from './EquipmentSupplyLeadTime.viewdetail.less'
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

const summaryOf = (equipmentSupplyLeadTime) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{equipmentSupplyLeadTime.id}</Description> 
<Description term="质量">{equipmentSupplyLeadTime.quanlity}</Description> 
<Description term="交货时间">{equipmentSupplyLeadTime.leadTime}</Description> 
<Description term="供应价格">{equipmentSupplyLeadTime.supplyPrice}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  equipmentSupplyLeadTime: state._equipmentSupplyLeadTime,
}))
export default class EquipmentSupplyLeadTimeViewDetail extends Component {

 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
  
    // eslint-disable-next-line max-len
    
    const equipmentSupplyLeadTime = this.props.equipmentSupplyLeadTime
    const { id,  } = equipmentSupplyLeadTime
    const {  } = equipmentSupplyLeadTime
    
    const owner = { type: '_equipmentSupplyLeadTime', id }
    
    const tabList = [

   

   ];
   
   
    const contentList = {
     
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="设备供应提前期总览"
        content={summaryOf(this.props.equipmentSupplyLeadTime)}
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



