

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
import styles from './Scoring.viewdetail.less'
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

const summaryOf = (scoring) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{scoring.id}</Description> 
<Description term="由谁打分">{scoring.scoredBy}</Description> 
<Description term="分数">{scoring.score}</Description> 
<Description term="评论">{scoring.comment}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  scoring: state._scoring,
}))
export default class ScoringViewDetail extends Component {


  state = {
    tabKey: `employeeCompanyTrainingList`,
    stepDirection: 'horizontal',
  }
 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
    const {EmployeeCompanyTrainingViewTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    
    const scoring = this.props.scoring
    const { id, employeeCompanyTrainingCount } = scoring
    const { employeeCompanyTrainingList } = scoring
    
    const owner = { type: '_scoring', id }
    
    const tabList = [

      {key: 'employeeCompanyTrainingList',tab: `员工参与的公司培训(${employeeCompanyTrainingCount})`}, 
   

   ];
   
   
    const contentList = {
       employeeCompanyTrainingList:  
        <EmployeeCompanyTrainingViewTable data={employeeCompanyTrainingList} owner={owner} {...this.props} />,
 
    
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="评分总览"
        content={summaryOf(this.props.scoring)}
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



