

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
import styles from './ServiceOrderFilter.viewdetail.less'
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

const summaryOf = (serviceOrderFilter) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{serviceOrderFilter.id}</Description> 
<Description term="服务单状态名称">{serviceOrderFilter.filterName}</Description> 
<Description term="服务单数量">{serviceOrderFilter.orderCount}</Description> 
<Description term="选中">{serviceOrderFilter.selected?'是':'否'}</Description> 
<Description term="服务单状态接口">{serviceOrderFilter.linkUrl}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  serviceOrderFilter: state._serviceOrderFilter,
}))
export default class ServiceOrderFilterViewDetail extends Component {

 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
  
    // eslint-disable-next-line max-len
    
    const serviceOrderFilter = this.props.serviceOrderFilter
    const { id,  } = serviceOrderFilter
    const {  } = serviceOrderFilter
    
    const owner = { type: '_serviceOrderFilter', id }
    
    const tabList = [

   

   ];
   
   
    const contentList = {
     
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="服务单状态类型总览"
        content={summaryOf(this.props.serviceOrderFilter)}
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



