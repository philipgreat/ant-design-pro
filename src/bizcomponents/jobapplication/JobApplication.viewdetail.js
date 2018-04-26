

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
import styles from './JobApplication.viewdetail.less'
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

const summaryOf = (jobApplication) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{jobApplication.id}</Description> 
<Description term="申请时间">{ moment(jobApplication.applicationTime).format('YYYY-MM-DD')}</Description> 
<Description term="谁">{jobApplication.who}</Description> 
<Description term="评论">{jobApplication.comments}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  jobApplication: state._jobApplication,
}))
export default class JobApplicationViewDetail extends Component {


  state = {
    tabKey: `employeeList`,
    stepDirection: 'horizontal',
  }
 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
    const {EmployeeViewTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    
    const jobApplication = this.props.jobApplication
    const { id, employeeCount } = jobApplication
    const { employeeList } = jobApplication
    
    const owner = { type: '_jobApplication', id }
    
    const tabList = [

      {key: 'employeeList',tab: `员工(${employeeCount})`}, 
   

   ];
   
   
    const contentList = {
       employeeList:  
        <EmployeeViewTable data={employeeList} owner={owner} {...this.props} />,
 
    
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="工作申请总览"
        content={summaryOf(this.props.jobApplication)}
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



