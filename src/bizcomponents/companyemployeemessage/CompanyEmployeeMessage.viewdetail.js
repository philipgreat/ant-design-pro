

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
import styles from './CompanyEmployeeMessage.viewdetail.less'
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

const summaryOf = (companyEmployeeMessage) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{companyEmployeeMessage.id}</Description> 
<Description term="标题">{companyEmployeeMessage.title}</Description> 
<Description term="消息内容">{companyEmployeeMessage.messageContent}</Description> 
<Description term="服务单号">{companyEmployeeMessage.serviceTicket}</Description> 
<Description term="发送时间">{ moment(companyEmployeeMessage.sendTime).format('YYYY-MM-DD')}</Description> 
<Description term="阅读时间">{ moment(companyEmployeeMessage.readTime).format('YYYY-MM-DD')}</Description> 
<Description term="状态">{companyEmployeeMessage.status}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  companyEmployeeMessage: state._companyEmployeeMessage,
}))
export default class CompanyEmployeeMessageViewDetail extends Component {

 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
  
    // eslint-disable-next-line max-len
    
    const companyEmployeeMessage = this.props.companyEmployeeMessage
    const { id,  } = companyEmployeeMessage
    const {  } = companyEmployeeMessage
    
    const owner = { type: '_companyEmployeeMessage', id }
    
    const tabList = [

   

   ];
   
   
    const contentList = {
     
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="消息管理总览"
        content={summaryOf(this.props.companyEmployeeMessage)}
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



