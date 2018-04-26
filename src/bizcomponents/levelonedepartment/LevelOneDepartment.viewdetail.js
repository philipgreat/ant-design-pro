

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
import styles from './LevelOneDepartment.viewdetail.less'
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

const summaryOf = (levelOneDepartment) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{levelOneDepartment.id}</Description> 
<Description term="名称">{levelOneDepartment.name}</Description> 
<Description term="描述">{levelOneDepartment.description}</Description> 
<Description term="经理">{levelOneDepartment.manager}</Description> 
<Description term="成立">{ moment(levelOneDepartment.founded).format('YYYY-MM-DD')}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  levelOneDepartment: state._levelOneDepartment,
}))
export default class LevelOneDepartmentViewDetail extends Component {


  state = {
    tabKey: `levelTwoDepartmentList`,
    stepDirection: 'horizontal',
  }
 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
    const {LevelTwoDepartmentViewTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    
    const levelOneDepartment = this.props.levelOneDepartment
    const { id, levelTwoDepartmentCount } = levelOneDepartment
    const { levelTwoDepartmentList } = levelOneDepartment
    
    const owner = { type: '_levelOneDepartment', id }
    
    const tabList = [

      {key: 'levelTwoDepartmentList',tab: `二级部门(${levelTwoDepartmentCount})`}, 
   

   ];
   
   
    const contentList = {
       levelTwoDepartmentList:  
        <LevelTwoDepartmentViewTable data={levelTwoDepartmentList} owner={owner} {...this.props} />,
 
    
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="一级部门总览"
        content={summaryOf(this.props.levelOneDepartment)}
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



