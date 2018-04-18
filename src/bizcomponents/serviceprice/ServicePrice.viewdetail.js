

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
import styles from './ServicePrice.viewdetail.less'
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

const summaryOf = (servicePrice) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{servicePrice.id}</Description> 
<Description term="服务代码">{servicePrice.serviceKey}</Description> 
<Description term="服务描述">{servicePrice.serviceDescription}</Description> 
<Description term="服务价格类型">{servicePrice.servicePriceType}</Description> 
<Description term="服务价格">{servicePrice.basePriceValue}</Description> 
<Description term="后续服务价格">{servicePrice.otherPriceValue}</Description> 
<Description term="是否提供服务">{servicePrice.serviceEnabled?'是':'否'}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  servicePrice: state._servicePrice,
}))
export default class ServicePriceViewDetail extends Component {

 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
  
    // eslint-disable-next-line max-len
    
    const servicePrice = this.props.servicePrice
    const { id,  } = servicePrice
    const {  } = servicePrice
    
    const owner = { type: '_servicePrice', id }
    
    const tabList = [

   

   ];
   
   
    const contentList = {
     
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="服务价格总览"
        content={summaryOf(this.props.servicePrice)}
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



