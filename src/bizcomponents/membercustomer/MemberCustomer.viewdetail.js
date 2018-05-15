

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
import styles from './MemberCustomer.viewdetail.less'
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

const summaryOf = (memberCustomer) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{memberCustomer.id}</Description> 
<Description term="产品名称">{memberCustomer.productName}</Description> 
<Description term="产品描述">{memberCustomer.productDescription}</Description> 
<Description term="参加研讨会">{memberCustomer.joinWorkshop?'是':'否'}</Description> 
<Description term="制造车间">{memberCustomer.createWorkshop?'是':'否'}</Description> 
<Description term="借的书">{memberCustomer.borrowBook?'是':'否'}</Description> 
<Description term="是超级贵宾">{memberCustomer.isSuperVIP?'是':'否'}</Description> 
<Description term="名称">{memberCustomer.name}</Description> 
<Description term="描述">{memberCustomer.description}</Description> 
<Description term="列出的价格">{memberCustomer.listPrice}</Description> 
<Description term="销售价格">{memberCustomer.salePrice}</Description> 
<Description term="服务期间名称">{memberCustomer.servicePeriodName}</Description> 
<Description term="服务时间天">{memberCustomer.servicePeriodDays}</Description> 
<Description term="开始日期Datetime">{ moment(memberCustomer.startDateDatetime).format('YYYY-MM-DD')}</Description> 
<Description term="过期日期Datetime">{ moment(memberCustomer.expiredDateDatetime).format('YYYY-MM-DD')}</Description> 
	
        
      </DescriptionList>
	)

}

class MemberCustomerViewDetail extends Component {

 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
  
    // eslint-disable-next-line max-len
    
    const memberCustomer = this.props.memberCustomer
    const { id,  } = memberCustomer
    const {  } = memberCustomer
    
    const owner = { type: '_memberCustomer', id }
    
    const tabList = [

   

   ];
   
   
    const contentList = {
     
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="会员的客户总览"
        content={summaryOf(this.props.memberCustomer)}
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
  memberCustomer: state._memberCustomer,
}))(MemberCustomerViewDetail)

