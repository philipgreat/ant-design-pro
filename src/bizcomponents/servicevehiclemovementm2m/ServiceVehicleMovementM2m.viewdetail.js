

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
import styles from './ServiceVehicleMovementM2m.viewdetail.less'
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

const summaryOf = (serviceVehicleMovementM2m) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{serviceVehicleMovementM2m.id}</Description> 
<Description term="服务状态">{serviceVehicleMovementM2m.serviceStatus}</Description> 
<Description term="开始时间">{ moment(serviceVehicleMovementM2m.startTime).format('YYYY-MM-DD')}</Description> 
<Description term="最后的位置">{serviceVehicleMovementM2m.lastLocation}</Description> 
<Description term="最后更新时间">{ moment(serviceVehicleMovementM2m.lastUpdateTime).format('YYYY-MM-DD')}</Description> 
<Description term="移动目的">{serviceVehicleMovementM2m.movementPurpose}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  serviceVehicleMovementM2m: state._serviceVehicleMovementM2m,
}))
export default class ServiceVehicleMovementM2mViewDetail extends Component {


  state = {
    tabKey: `reportHandoverList`,
    stepDirection: 'horizontal',
  }
 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
    const {ReportHandoverViewTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    
    const serviceVehicleMovementM2m = this.props.serviceVehicleMovementM2m
    const { id, reportHandoverCount } = serviceVehicleMovementM2m
    const { reportHandoverList } = serviceVehicleMovementM2m
    
    const owner = { type: '_serviceVehicleMovementM2m', id }
    
    const tabList = [

      {key: 'reportHandoverList',tab: `交接报告(${reportHandoverCount})`}, 
   

   ];
   
   
    const contentList = {
       reportHandoverList:  
        <ReportHandoverViewTable data={reportHandoverList} owner={owner} {...this.props} />,
 
    
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="移车服务总览"
        content={summaryOf(this.props.serviceVehicleMovementM2m)}
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



