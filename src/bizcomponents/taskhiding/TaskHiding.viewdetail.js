

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
import styles from './TaskHiding.viewdetail.less'
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

const summaryOf = (taskHiding) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{taskHiding.id}</Description> 
<Description term="谁">{taskHiding.who}</Description> 
<Description term="行动时间">{ moment(taskHiding.actionTime).format('YYYY-MM-DD')}</Description> 
<Description term="评论">{taskHiding.comment}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  taskHiding: state._taskHiding,
}))
export default class TaskHidingViewDetail extends Component {


  state = {
    tabKey: `taskList`,
    stepDirection: 'horizontal',
  }
 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
    const {TaskViewTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    
    const taskHiding = this.props.taskHiding
    const { id, taskCount } = taskHiding
    const { taskList } = taskHiding
    
    const owner = { type: '_taskHiding', id }
    
    const tabList = [

      {key: 'taskList',tab: `任务(${taskCount})`}, 
   

   ];
   
   
    const contentList = {
       taskList:  
        <TaskViewTable data={taskList} owner={owner} {...this.props} />,
 
    
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="任务屏蔽总览"
        content={summaryOf(this.props.taskHiding)}
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



