

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
import styles from './TrainingCourseType.viewdetail.less'
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

const summaryOf = (trainingCourseType) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{trainingCourseType.id}</Description> 
<Description term="代码">{trainingCourseType.code}</Description> 
<Description term="名称">{trainingCourseType.name}</Description> 
<Description term="描述">{trainingCourseType.description}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  trainingCourseType: state._trainingCourseType,
}))
export default class TrainingCourseTypeViewDetail extends Component {


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
    
    const trainingCourseType = this.props.trainingCourseType
    const { id, companyTrainingCount } = trainingCourseType
    const { companyTrainingList } = trainingCourseType
    
    const owner = { type: '_trainingCourseType', id }
    
    const tabList = [

      {key: 'companyTrainingList',tab: `公司培训(${companyTrainingCount})`}, 
   

   ];
   
   
    const contentList = {
       companyTrainingList:  
        <CompanyTrainingViewTable data={companyTrainingList} owner={owner} {...this.props} />,
 
    
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="培训课程类型总览"
        content={summaryOf(this.props.trainingCourseType)}
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



