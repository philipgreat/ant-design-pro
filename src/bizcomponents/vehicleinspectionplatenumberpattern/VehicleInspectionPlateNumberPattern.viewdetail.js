

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
import styles from './VehicleInspectionPlateNumberPattern.viewdetail.less'
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

const summaryOf = (vehicleInspectionPlateNumberPattern) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{vehicleInspectionPlateNumberPattern.id}</Description> 
<Description term="车牌号模式">{vehicleInspectionPlateNumberPattern.plateNumberPattern}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  vehicleInspectionPlateNumberPattern: state._vehicleInspectionPlateNumberPattern,
}))
export default class VehicleInspectionPlateNumberPatternViewDetail extends Component {

 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
  
    // eslint-disable-next-line max-len
    
    const vehicleInspectionPlateNumberPattern = this.props.vehicleInspectionPlateNumberPattern
    const { id,  } = vehicleInspectionPlateNumberPattern
    const {  } = vehicleInspectionPlateNumberPattern
    
    const owner = { type: '_vehicleInspectionPlateNumberPattern', id }
    
    const tabList = [

   

   ];
   
   
    const contentList = {
     
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="车辆检验牌照号码模式总览"
        content={summaryOf(this.props.vehicleInspectionPlateNumberPattern)}
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



