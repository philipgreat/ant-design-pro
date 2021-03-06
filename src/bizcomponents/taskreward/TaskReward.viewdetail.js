

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
import styles from './TaskReward.viewdetail.less'
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

const summaryOf = (taskReward) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{taskReward.id}</Description> 
<Description term="谁">{taskReward.who}</Description> 
<Description term="改写点">{taskReward.rewordPoint}</Description> 
<Description term="行动时间">{ moment(taskReward.actionTime).format('YYYY-MM-DD')}</Description> 
<Description term="评论">{taskReward.comment}</Description> 
	
        
      </DescriptionList>
	)

}

class TaskRewardViewDetail extends Component {


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
    
    const taskReward = this.props.taskReward
    const { id, taskCount } = taskReward
    const { taskList } = taskReward
    
    const owner = { type: '_taskReward', id }
    
    const tabList = [

      {key: 'taskList',tab: `任务(${taskCount})`}, 
   

   ];
   
   
    const contentList = {
       taskList:  
        <TaskViewTable data={taskList} owner={owner} {...this.props} />,
 
    
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="任务悬赏总览"
        content={summaryOf(this.props.taskReward)}
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

export default connect(state => ({
  taskReward: state._taskReward,
}))(TaskRewardViewDetail)

