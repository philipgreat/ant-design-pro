

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
import styles from './CompanyTraining.viewdetail.less'
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

const summaryOf = (companyTraining) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{companyTraining.id}</Description> 
<Description term="头衔">{companyTraining.title}</Description> 
<Description term="时间开始">{ moment(companyTraining.timeStart).format('YYYY-MM-DD')}</Description> 
<Description term="持续时间">{companyTraining.durationHours}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  companyTraining: state._companyTraining,
}))
export default class CompanyTrainingViewDetail extends Component {


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
    
    const companyTraining = this.props.companyTraining
    const { id, employeeCompanyTrainingCount } = companyTraining
    const { employeeCompanyTrainingList } = companyTraining
    
    const owner = { type: '_companyTraining', id }
    
    const tabList = [

      {key: 'employeeCompanyTrainingList',tab: `员工参与的公司培训(${employeeCompanyTrainingCount})`}, 
   

   ];
   
   
    const contentList = {
       employeeCompanyTrainingList:  
        <EmployeeCompanyTrainingViewTable data={employeeCompanyTrainingList} owner={owner} {...this.props} />,
 
    
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="公司培训总览"
        content={summaryOf(this.props.companyTraining)}
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



