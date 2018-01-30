

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
import styles from './ServiceVehicleMovementC2m.viewdetail.less'
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

const summaryOf = (serviceVehicleMovementC2m) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{serviceVehicleMovementC2m.id}</Description> 
<Description term="服务状态">{serviceVehicleMovementC2m.serviceStatus}</Description> 
<Description term="开始时间">{ moment(serviceVehicleMovementC2m.startTime).format('YYYY-MM-DD')}</Description> 
<Description term="最后的位置">{serviceVehicleMovementC2m.lastLocation}</Description> 
<Description term="最后更新时间">{ moment(serviceVehicleMovementC2m.lastUpdateTime).format('YYYY-MM-DD')}</Description> 
<Description term="移动目的">{serviceVehicleMovementC2m.movementPurpose}</Description> 
<Description term="联系人姓名">{serviceVehicleMovementC2m.contactName}</Description> 
<Description term="联系手机号码">{serviceVehicleMovementC2m.contactMobileNumber}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  serviceVehicleMovementC2m: state._serviceVehicleMovementC2m,
}))
export default class ServiceVehicleMovementC2mViewDetail extends Component {


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
    
    const serviceVehicleMovementC2m = this.props.serviceVehicleMovementC2m
    const { id, reportHandoverCount } = serviceVehicleMovementC2m
    const { reportHandoverList } = serviceVehicleMovementC2m
    
    const owner = { type: '_serviceVehicleMovementC2m', id }
    
    const tabList = [

      {key: 'reportHandoverList',tab: `交接报告(${reportHandoverCount})`}, 
   

   ];
   
   
    const contentList = {
       reportHandoverList:  
        <ReportHandoverViewTable data={reportHandoverList} owner={owner} {...this.props} />,
 
    
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="收车服务总览"
        content={summaryOf(this.props.serviceVehicleMovementC2m)}
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



