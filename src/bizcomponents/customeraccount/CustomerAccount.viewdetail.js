

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
import styles from './CustomerAccount.viewdetail.less'
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

const summaryOf = (customerAccount) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{customerAccount.id}</Description> 
<Description term="名称">{customerAccount.name}</Description> 
<Description term="账户">{customerAccount.account}</Description> 
	
        
      </DescriptionList>
	)

}

class CustomerAccountViewDetail extends Component {


  state = {
    tabKey: `customerAccountDetailsList`,
    stepDirection: 'horizontal',
  }
 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
    const {CustomerAccountDetailsViewTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    
    const customerAccount = this.props.customerAccount
    const { id, customerAccountDetailsCount } = customerAccount
    const { customerAccountDetailsList } = customerAccount
    
    const owner = { type: '_customerAccount', id }
    
    const tabList = [

      {key: 'customerAccountDetailsList',tab: `客户账户信息(${customerAccountDetailsCount})`}, 
   

   ];
   
   
    const contentList = {
       customerAccountDetailsList:  
        <CustomerAccountDetailsViewTable data={customerAccountDetailsList} owner={owner} {...this.props} />,
 
    
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="客户账户总览"
        content={summaryOf(this.props.customerAccount)}
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
  customerAccount: state._customerAccount,
}))(CustomerAccountViewDetail)

