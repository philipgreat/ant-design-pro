

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
import styles from './CustomerAccountDetails.viewdetail.less'
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

const summaryOf = (customerAccountDetails) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{customerAccountDetails.id}</Description> 
<Description term="总结">{customerAccountDetails.summary}</Description> 
<Description term="变化量">{customerAccountDetails.changeAmount}</Description> 
<Description term="变化类型">{customerAccountDetails.changeType}</Description> 
<Description term="更改日期时间">{ moment(customerAccountDetails.changeDatetime).format('YYYY-MM-DD')}</Description> 
	
        
      </DescriptionList>
	)

}

class CustomerAccountDetailsViewDetail extends Component {

 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
  
    // eslint-disable-next-line max-len
    
    const customerAccountDetails = this.props.customerAccountDetails
    const { id,  } = customerAccountDetails
    const {  } = customerAccountDetails
    
    const owner = { type: '_customerAccountDetails', id }
    
    const tabList = [

   

   ];
   
   
    const contentList = {
     
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="客户账户信息总览"
        content={summaryOf(this.props.customerAccountDetails)}
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
  customerAccountDetails: state._customerAccountDetails,
}))(CustomerAccountDetailsViewDetail)

