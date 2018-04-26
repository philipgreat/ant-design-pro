

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
import styles from './SkillType.viewdetail.less'
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

const summaryOf = (skillType) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{skillType.id}</Description> 
<Description term="代码">{skillType.code}</Description> 
<Description term="描述">{skillType.description}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  skillType: state._skillType,
}))
export default class SkillTypeViewDetail extends Component {


  state = {
    tabKey: `employeeSkillList`,
    stepDirection: 'horizontal',
  }
 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
    const {EmployeeSkillViewTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    
    const skillType = this.props.skillType
    const { id, employeeSkillCount } = skillType
    const { employeeSkillList } = skillType
    
    const owner = { type: '_skillType', id }
    
    const tabList = [

      {key: 'employeeSkillList',tab: `员工技能(${employeeSkillCount})`}, 
   

   ];
   
   
    const contentList = {
       employeeSkillList:  
        <EmployeeSkillViewTable data={employeeSkillList} owner={owner} {...this.props} />,
 
    
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="技能类型总览"
        content={summaryOf(this.props.skillType)}
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



