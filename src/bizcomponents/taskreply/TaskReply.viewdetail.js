

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
import styles from './TaskReply.viewdetail.less'
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

const summaryOf = (taskReply) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{taskReply.id}</Description> 
<Description term="回复时间">{ moment(taskReply.replyTime).format('YYYY-MM-DD')}</Description> 
<Description term="内容">{taskReply.content}</Description> 
<Description term="当前用户已点赞">{taskReply.likeByCurrentUser?'是':'否'}</Description> 
<Description term="当前状态">{taskReply.currentStatus}</Description> 
	
        
      </DescriptionList>
	)

}

class TaskReplyViewDetail extends Component {


  state = {
    tabKey: `taskReplyLikeList`,
    stepDirection: 'horizontal',
  }
 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
    const {TaskReplyLikeViewTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    
    const taskReply = this.props.taskReply
    const { id, taskReplyLikeCount } = taskReply
    const { taskReplyLikeList } = taskReply
    
    const owner = { type: '_taskReply', id }
    
    const tabList = [

      {key: 'taskReplyLikeList',tab: `任务回复点赞(${taskReplyLikeCount})`}, 
   

   ];
   
   
    const contentList = {
       taskReplyLikeList:  
        <TaskReplyLikeViewTable data={taskReplyLikeList} owner={owner} {...this.props} />,
 
    
    };
    


    const actionDescForBestAnswerSetting = (taskReply) =>{
      if(!taskReply){
        return (<div>出错</div>)
      }
      const {bestAnswerSetting} = taskReply;
      if(!bestAnswerSetting){
        return (<div>催一下</div>)
      }
      
      return (

    
      <DescriptionList className={styles.headerList} size="small" col="1">
			<Description term="序号">{bestAnswerSetting.id}</Description> 
			<Description term="谁">{bestAnswerSetting.who}</Description> 
			<Description term="设置时间">{bestAnswerSetting.setTime}</Description> 
			<Description term="评论">{bestAnswerSetting.comment}</Description> 
			<Description term="版本">{bestAnswerSetting.version}</Description> 

       
		</DescriptionList>
      )
    }

    
	const steps=(<Steps direction={'horizontal'} current={1}>
			<Step title="最佳答案设置" description={actionDescForBestAnswerSetting(taskReply)} />
		</Steps>)
    
    
    return (

      <PageHeaderLayout
        title="回复任务总览"
        content={summaryOf(this.props.taskReply)}
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

export default connect(state => ({
  taskReply: state._taskReply,
}))(TaskReplyViewDetail)

