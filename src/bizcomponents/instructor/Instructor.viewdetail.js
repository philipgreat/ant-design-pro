

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
import styles from './Instructor.viewdetail.less'
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

const summaryOf = (instructor) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{instructor.id}</Description> 
<Description term="头衔">{instructor.title}</Description> 
<Description term="姓">{instructor.familyName}</Description> 
<Description term="名">{instructor.givenName}</Description> 
<Description term="手机">{instructor.cellPhone}</Description> 
<Description term="电子邮件">{instructor.email}</Description> 
<Description term="介绍">{instructor.introduction}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  instructor: state._instructor,
}))
export default class InstructorViewDetail extends Component {


  state = {
    tabKey: `companyTrainingList`,
    stepDirection: 'horizontal',
  }
 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
    const {CompanyTrainingViewTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    
    const instructor = this.props.instructor
    const { id, companyTrainingCount } = instructor
    const { companyTrainingList } = instructor
    
    const owner = { type: '_instructor', id }
    
    const tabList = [

      {key: 'companyTrainingList',tab: `公司培训(${companyTrainingCount})`}, 
   

   ];
   
   
    const contentList = {
       companyTrainingList:  
        <CompanyTrainingViewTable data={companyTrainingList} owner={owner} {...this.props} />,
 
    
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="讲师总览"
        content={summaryOf(this.props.instructor)}
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



