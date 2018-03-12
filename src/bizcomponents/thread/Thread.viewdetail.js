

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
import styles from './Thread.viewdetail.less'
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

const summaryOf = (thread) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{thread.id}</Description> 
<Description term="标题">{thread.title}</Description> 
<Description term="显示顺序">{thread.displayOrder}</Description> 
<Description term="创建时间">{ moment(thread.createTime).format('YYYY-MM-DD')}</Description> 
<Description term="事件时间">{ moment(thread.eventTime).format('YYYY-MM-DD')}</Description> 
<Description term="注册时间停止">{ moment(thread.registrationStopTime).format('YYYY-MM-DD')}</Description> 
<Description term="事件的位置">{thread.eventLocation}</Description> 
<Description term="城市">{thread.city}</Description> 
<Description term="社区组">{thread.communityGroup}</Description> 
<Description term="帖子类型">{thread.threadType}</Description> 
<Description term="视频网址">{thread.videoUrl}</Description> 
<Description term="封面图像路径1">{thread.coverImagePath1}</Description> 
<Description term="封面图像路径2">{thread.coverImagePath2}</Description> 
<Description term="封面图像路径3">{thread.coverImagePath3}</Description> 
<Description term="图1">{thread.imagePath1}</Description> 
<Description term="图2">{thread.imagePath2}</Description> 
<Description term="图3">{thread.imagePath3}</Description> 
<Description term="图4">{thread.imagePath4}</Description> 
<Description term="图5">{thread.imagePath5}</Description> 
<Description term="内容">{thread.content}</Description> 
<Description term="当前用户已点赞">{thread.likeByCurrentUser?'是':'否'}</Description> 
<Description term="当前用户已回复">{thread.repliedByCurrentUser?'是':'否'}</Description> 
<Description term="由当前用户注册">{thread.registeredByCurrentUser?'是':'否'}</Description> 
<Description term="当前状态">{thread.currentStatus}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  thread: state._thread,
}))
export default class ThreadViewDetail extends Component {


  state = {
    tabKey: `threadReplyList`,
    stepDirection: 'horizontal',
  }
 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
    const {ThreadReplyViewTable} = GlobalComponents;
    const {ThreadRegistrationViewTable} = GlobalComponents;
    const {ThreadLikeViewTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    
    const thread = this.props.thread
    const { id, threadReplyCount, threadRegistrationCount, threadLikeCount } = thread
    const { threadReplyList, threadRegistrationList, threadLikeList } = thread
    
    const owner = { type: '_thread', id }
    
    const tabList = [

      {key: 'threadReplyList',tab: `跟帖回复(${threadReplyCount})`}, 
      {key: 'threadRegistrationList',tab: `活动注册(${threadRegistrationCount})`}, 
      {key: 'threadLikeList',tab: `主贴点赞(${threadLikeCount})`}, 
   

   ];
   
   
    const contentList = {
       threadReplyList:  
        <ThreadReplyViewTable data={threadReplyList} owner={owner} {...this.props} />,
 
      threadRegistrationList:  
        <ThreadRegistrationViewTable data={threadRegistrationList} owner={owner} {...this.props} />,
 
      threadLikeList:  
        <ThreadLikeViewTable data={threadLikeList} owner={owner} {...this.props} />,
 
    
    };
    


    const actionDescForApproval = (thread) =>{
      if(!thread){
        return (<div>出错</div>)
      }
      const {approval} = thread;
      if(!approval){
        return (<div>催一下</div>)
      }
      
      return (

    
      <DescriptionList className={styles.headerList} size="small" col="1">
			<Description term="序号">{approval.id}</Description> 
			<Description term="谁">{approval.who}</Description> 
			<Description term="行动时间">{approval.actionTime}</Description> 
			<Description term="评论">{approval.comment}</Description> 
			<Description term="版本">{approval.version}</Description> 

       
		</DescriptionList>
      )
    }

    const actionDescForCanceling = (thread) =>{
      if(!thread){
        return (<div>出错</div>)
      }
      const {canceling} = thread;
      if(!canceling){
        return (<div>催一下</div>)
      }
      
      return (

    
      <DescriptionList className={styles.headerList} size="small" col="1">
			<Description term="序号">{canceling.id}</Description> 
			<Description term="谁">{canceling.who}</Description> 
			<Description term="行动时间">{canceling.actionTime}</Description> 
			<Description term="评论">{canceling.comment}</Description> 
			<Description term="版本">{canceling.version}</Description> 

       
		</DescriptionList>
      )
    }

    const actionDescForCompletion = (thread) =>{
      if(!thread){
        return (<div>出错</div>)
      }
      const {completion} = thread;
      if(!completion){
        return (<div>催一下</div>)
      }
      
      return (

    
      <DescriptionList className={styles.headerList} size="small" col="1">
			<Description term="序号">{completion.id}</Description> 
			<Description term="谁">{completion.who}</Description> 
			<Description term="行动时间">{completion.actionTime}</Description> 
			<Description term="评论">{completion.comment}</Description> 
			<Description term="版本">{completion.version}</Description> 

       
		</DescriptionList>
      )
    }

    const actionDescForHiding = (thread) =>{
      if(!thread){
        return (<div>出错</div>)
      }
      const {hiding} = thread;
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

    
	const steps=(<Steps direction={'horizontal'} current={1}>
			<Step title="验收" description={actionDescForApproval(thread)} />
			<Step title="取消" description={actionDescForCanceling(thread)} />
			<Step title="完成" description={actionDescForCompletion(thread)} />
			<Step title="躲藏" description={actionDescForHiding(thread)} />
		</Steps>)
    
    
    return (

      <PageHeaderLayout
        title="主贴总览"
        content={summaryOf(this.props.thread)}
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



