

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
import styles from './MemberServicePeriod.viewdetail.less'
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

const summaryOf = (memberServicePeriod) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{memberServicePeriod.id}</Description> 
<Description term="服务期间名称">{memberServicePeriod.servicePeriodName}</Description> 
<Description term="服务时间天">{memberServicePeriod.servicePeriodDays}</Description> 
	
        
      </DescriptionList>
	)

}

class MemberServicePeriodViewDetail extends Component {


  state = {
    tabKey: `memberServiceSkuList`,
    stepDirection: 'horizontal',
  }
 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
    const {MemberServiceSkuViewTable} = GlobalComponents;
    const {MemberCustomerViewTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    
    const memberServicePeriod = this.props.memberServicePeriod
    const { id, memberServiceSkuCount, memberCustomerCount } = memberServicePeriod
    const { memberServiceSkuList, memberCustomerList } = memberServicePeriod
    
    const owner = { type: '_memberServicePeriod', id }
    
    const tabList = [

      {key: 'memberServiceSkuList',tab: `会员服务Sku(${memberServiceSkuCount})`}, 
      {key: 'memberCustomerList',tab: `会员的客户(${memberCustomerCount})`}, 
   

   ];
   
   
    const contentList = {
       memberServiceSkuList:  
        <MemberServiceSkuViewTable data={memberServiceSkuList} owner={owner} {...this.props} />,
 
      memberCustomerList:  
        <MemberCustomerViewTable data={memberCustomerList} owner={owner} {...this.props} />,
 
    
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="会员服务时间总览"
        content={summaryOf(this.props.memberServicePeriod)}
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

export default connect(state => ({
  memberServicePeriod: state._memberServicePeriod,
}))(MemberServicePeriodViewDetail)

