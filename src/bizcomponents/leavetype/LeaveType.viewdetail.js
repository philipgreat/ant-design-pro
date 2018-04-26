

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
import styles from './LeaveType.viewdetail.less'
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

const summaryOf = (leaveType) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{leaveType.id}</Description> 
<Description term="代码">{leaveType.code}</Description> 
<Description term="描述">{leaveType.description}</Description> 
<Description term="详细描述">{leaveType.detailDescription}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  leaveType: state._leaveType,
}))
export default class LeaveTypeViewDetail extends Component {


  state = {
    tabKey: `employeeLeaveList`,
    stepDirection: 'horizontal',
  }
 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
    const {EmployeeLeaveViewTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    
    const leaveType = this.props.leaveType
    const { id, employeeLeaveCount } = leaveType
    const { employeeLeaveList } = leaveType
    
    const owner = { type: '_leaveType', id }
    
    const tabList = [

      {key: 'employeeLeaveList',tab: `请假记录(${employeeLeaveCount})`}, 
   

   ];
   
   
    const contentList = {
       employeeLeaveList:  
        <EmployeeLeaveViewTable data={employeeLeaveList} owner={owner} {...this.props} />,
 
    
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="请假类型总览"
        content={summaryOf(this.props.leaveType)}
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



