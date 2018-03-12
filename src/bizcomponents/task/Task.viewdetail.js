

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
import styles from './Task.viewdetail.less'
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

const summaryOf = (task) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{task.id}</Description> 
<Description term="标题">{task.title}</Description> 
<Description term="选定的任务">{task.selectedTask}</Description> 
<Description term="创建时间">{ moment(task.createTime).format('YYYY-MM-DD')}</Description> 
<Description term="内容">{task.content}</Description> 
<Description term="视频网址">{task.videoUrl}</Description> 
<Description term="封面图像路径1">{task.coverImagePath1}</Description> 
<Description term="封面图像路径2">{task.coverImagePath2}</Description> 
<Description term="封面图像路径3">{task.coverImagePath3}</Description> 
<Description term="图1">{task.imagePath1}</Description> 
<Description term="图2">{task.imagePath2}</Description> 
<Description term="图3">{task.imagePath3}</Description> 
<Description term="图4">{task.imagePath4}</Description> 
<Description term="图5">{task.imagePath5}</Description> 
<Description term="发布人的奖金">{task.creatorBonus}</Description> 
<Description term="额外的奖金">{task.additionalBonus}</Description> 
<Description term="当前用户已点赞">{task.likeByCurrentUser?'是':'否'}</Description> 
<Description term="当前用户已回复">{task.repliedByCurrentUser?'是':'否'}</Description> 
<Description term="当前状态">{task.currentStatus}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  task: state._task,
}))
export default class TaskViewDetail extends Component {


  state = {
    tabKey: `taskAssigmentList`,
    stepDirection: 'horizontal',
  }
 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
    const {TaskAssigmentViewTable} = GlobalComponents;
    const {TaskLikeViewTable} = GlobalComponents;
    const {TaskReplyViewTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    
    const task = this.props.task
    const { id, taskAssigmentCount, taskLikeCount, taskReplyCount } = task
    const { taskAssigmentList, taskLikeList, taskReplyList } = task
    
    const owner = { type: '_task', id }
    
    const tabList = [

      {key: 'taskAssigmentList',tab: `任务分配(${taskAssigmentCount})`}, 
      {key: 'taskLikeList',tab: `任务点赞(${taskLikeCount})`}, 
      {key: 'taskReplyList',tab: `回复任务(${taskReplyCount})`}, 
   

   ];
   
   
    const contentList = {
       taskAssigmentList:  
        <TaskAssigmentViewTable data={taskAssigmentList} owner={owner} {...this.props} />,
 
      taskLikeList:  
        <TaskLikeViewTable data={taskLikeList} owner={owner} {...this.props} />,
 
      taskReplyList:  
        <TaskReplyViewTable data={taskReplyList} owner={owner} {...this.props} />,
 
    
    };
    


    const actionDescForHiding = (task) =>{
      if(!task){
        return (<div>出错</div>)
      }
      const {hiding} = task;
      if(!hiding){
        return (<div>催一下</div>)
      }
      
      return (

    
      <DescriptionList className={styles.headerList} size="small" col="1">
			<Description term="序号">{hiding.id}</Description> 
			<Description term="谁">{hiding.who}</Description> 
			<Description term="行动时间">{hiding.actionTime}</Description> 
			<Description term="评论">{hiding.comment}</Description> 
			<Description term="版本">{hiding.version}</Description> 

       
		</DescriptionList>
      )
    }

    const actionDescForResolving = (task) =>{
      if(!task){
        return (<div>出错</div>)
      }
      const {resolving} = task;
      if(!resolving){
        return (<div>催一下</div>)
      }
      
      return (

    
      <DescriptionList className={styles.headerList} size="small" col="1">
			<Description term="序号">{resolving.id}</Description> 
			<Description term="谁">{resolving.who}</Description> 
			<Description term="行动时间">{resolving.actionTime}</Description> 
			<Description term="评论">{resolving.comment}</Description> 
			<Description term="版本">{resolving.version}</Description> 

       
		</DescriptionList>
      )
    }

    const actionDescForReward = (task) =>{
      if(!task){
        return (<div>出错</div>)
      }
      const {reward} = task;
      if(!reward){
        return (<div>催一下</div>)
      }
      
      return (

    
      <DescriptionList className={styles.headerList} size="small" col="1">
			<Description term="序号">{reward.id}</Description> 
			<Description term="谁">{reward.who}</Description> 
			<Description term="改写点">{reward.rewordPoint}</Description> 
			<Description term="行动时间">{reward.actionTime}</Description> 
			<Description term="评论">{reward.comment}</Description> 
			<Description term="版本">{reward.version}</Description> 

       
		</DescriptionList>
      )
    }

    
	const steps=(<Steps direction={'horizontal'} current={1}>
			<Step title="躲藏" description={actionDescForHiding(task)} />
			<Step title="解决" description={actionDescForResolving(task)} />
			<Step title="悬赏" description={actionDescForReward(task)} />
		</Steps>)
    
    
    return (

      <PageHeaderLayout
        title="任务总览"
        content={summaryOf(this.props.task)}
        wrapperClassName={styles.advancedForm}
      >
	<Card title="流程进度" style={{ marginBottom: 24 }} bordered={false}>{steps}
		</Card>

      
      
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



