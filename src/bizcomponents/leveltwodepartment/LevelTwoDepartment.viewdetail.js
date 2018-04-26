

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
import styles from './LevelTwoDepartment.viewdetail.less'
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

const summaryOf = (levelTwoDepartment) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{levelTwoDepartment.id}</Description> 
<Description term="名称">{levelTwoDepartment.name}</Description> 
<Description term="描述">{levelTwoDepartment.description}</Description> 
<Description term="成立">{ moment(levelTwoDepartment.founded).format('YYYY-MM-DD')}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  levelTwoDepartment: state._levelTwoDepartment,
}))
export default class LevelTwoDepartmentViewDetail extends Component {


  state = {
    tabKey: `levelThreeDepartmentList`,
    stepDirection: 'horizontal',
  }
 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
    const {LevelThreeDepartmentViewTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    
    const levelTwoDepartment = this.props.levelTwoDepartment
    const { id, levelThreeDepartmentCount } = levelTwoDepartment
    const { levelThreeDepartmentList } = levelTwoDepartment
    
    const owner = { type: '_levelTwoDepartment', id }
    
    const tabList = [

      {key: 'levelThreeDepartmentList',tab: `三级部门(${levelThreeDepartmentCount})`}, 
   

   ];
   
   
    const contentList = {
       levelThreeDepartmentList:  
        <LevelThreeDepartmentViewTable data={levelThreeDepartmentList} owner={owner} {...this.props} />,
 
    
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="二级部门总览"
        content={summaryOf(this.props.levelTwoDepartment)}
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



