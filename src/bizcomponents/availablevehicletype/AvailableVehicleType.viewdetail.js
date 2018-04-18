

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
import styles from './AvailableVehicleType.viewdetail.less'
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

const summaryOf = (availableVehicleType) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{availableVehicleType.id}</Description> 
<Description term="车辆类型">{availableVehicleType.vehicleType}</Description> 
<Description term="车辆类型别名">{availableVehicleType.vehicleTypeAlias}</Description> 
<Description term="可下单">{availableVehicleType.canPlaceOrder?'是':'否'}</Description> 
<Description term="可6年免检">{availableVehicleType.canDoExempt?'是':'否'}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  availableVehicleType: state._availableVehicleType,
}))
export default class AvailableVehicleTypeViewDetail extends Component {

 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
  
    // eslint-disable-next-line max-len
    
    const availableVehicleType = this.props.availableVehicleType
    const { id,  } = availableVehicleType
    const {  } = availableVehicleType
    
    const owner = { type: '_availableVehicleType', id }
    
    const tabList = [

   

   ];
   
   
    const contentList = {
     
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="车辆类型总览"
        content={summaryOf(this.props.availableVehicleType)}
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



