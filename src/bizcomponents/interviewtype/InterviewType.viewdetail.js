

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
import styles from './InterviewType.viewdetail.less'
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

const summaryOf = (interviewType) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{interviewType.id}</Description> 
<Description term="代码">{interviewType.code}</Description> 
<Description term="描述">{interviewType.description}</Description> 
<Description term="详细描述">{interviewType.detailDescription}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  interviewType: state._interviewType,
}))
export default class InterviewTypeViewDetail extends Component {


  state = {
    tabKey: `employeeInterviewList`,
    stepDirection: 'horizontal',
  }
 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
    const {EmployeeInterviewViewTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    
    const interviewType = this.props.interviewType
    const { id, employeeInterviewCount } = interviewType
    const { employeeInterviewList } = interviewType
    
    const owner = { type: '_interviewType', id }
    
    const tabList = [

      {key: 'employeeInterviewList',tab: `员工面试(${employeeInterviewCount})`}, 
   

   ];
   
   
    const contentList = {
       employeeInterviewList:  
        <EmployeeInterviewViewTable data={employeeInterviewList} owner={owner} {...this.props} />,
 
    
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="面试类型总览"
        content={summaryOf(this.props.interviewType)}
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



