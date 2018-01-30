

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
import styles from './VehicleInspectionOrderServiceLog.viewdetail.less'
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

const summaryOf = (vehicleInspectionOrderServiceLog) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{vehicleInspectionOrderServiceLog.id}</Description> 
<Description term="概览">{vehicleInspectionOrderServiceLog.summary}</Description> 
<Description term="创建时间">{ moment(vehicleInspectionOrderServiceLog.createTime).format('YYYY-MM-DD')}</Description> 
<Description term="位置">{vehicleInspectionOrderServiceLog.location}</Description> 
<Description term="服务单号">{vehicleInspectionOrderServiceLog.serviceTicket}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  vehicleInspectionOrderServiceLog: state._vehicleInspectionOrderServiceLog,
}))
export default class VehicleInspectionOrderServiceLogViewDetail extends Component {

 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
  
    // eslint-disable-next-line max-len
    
    const vehicleInspectionOrderServiceLog = this.props.vehicleInspectionOrderServiceLog
    const { id,  } = vehicleInspectionOrderServiceLog
    const {  } = vehicleInspectionOrderServiceLog
    
    const owner = { type: '_vehicleInspectionOrderServiceLog', id }
    
    const tabList = [

   

   ];
   
   
    const contentList = {
     
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="车辆检测服务订单日志总览"
        content={summaryOf(this.props.vehicleInspectionOrderServiceLog)}
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



