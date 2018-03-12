

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
import styles from './CommunityUser.viewdetail.less'
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

const summaryOf = (communityUser) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{communityUser.id}</Description> 
<Description term="手机">{communityUser.mobile}</Description> 
<Description term="昵称">{communityUser.nickName}</Description> 
<Description term="性别">{communityUser.gender}</Description> 
<Description term="用户类型">{communityUser.userType}</Description> 
<Description term="头像">{communityUser.avatar}</Description> 
<Description term="生日">{ moment(communityUser.birthday).format('YYYY-MM-DD')}</Description> 
<Description term="成长值">{communityUser.experiencePoint}</Description> 
<Description term="积分">{communityUser.bonusPoint}</Description> 
<Description term="城市">{communityUser.city}</Description> 
<Description term="状态">{communityUser.status}</Description> 
<Description term="隐藏的信息">{communityUser.hideInfo?'是':'否'}</Description> 
<Description term="管理员">{communityUser.administrator?'是':'否'}</Description> 
<Description term="点经验限制">{communityUser.experiencePointLimit}</Description> 
<Description term="经验点仍">{communityUser.experiencePointRemain}</Description> 
<Description term="经验点过去的日子">{ moment(communityUser.experiencePointLastDate).format('YYYY-MM-DD')}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  communityUser: state._communityUser,
}))
export default class CommunityUserViewDetail extends Component {


  state = {
    tabKey: `patientInfoList`,
    stepDirection: 'horizontal',
  }
 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
    const {PatientInfoViewTable} = GlobalComponents;
    const {UserSkillViewTable} = GlobalComponents;
    const {MessageFilterViewTable} = GlobalComponents;
    const {UserMessageViewTable} = GlobalComponents;
    const {TaskViewTable} = GlobalComponents;
    const {TaskAssigmentViewTable} = GlobalComponents;
    const {TaskLikeViewTable} = GlobalComponents;
    const {TaskReplyViewTable} = GlobalComponents;
    const {TaskReplyLikeViewTable} = GlobalComponents;
    const {ThreadViewTable} = GlobalComponents;
    const {ThreadReplyViewTable} = GlobalComponents;
    const {ThreadRegistrationViewTable} = GlobalComponents;
    const {ThreadLikeViewTable} = GlobalComponents;
    const {ThreadReplyLikeViewTable} = GlobalComponents;
    const {FanViewTable} = GlobalComponents;
    const {FollowViewTable} = GlobalComponents;
    const {BonusPointViewTable} = GlobalComponents;
    const {ExperiencePointViewTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    
    const communityUser = this.props.communityUser
    const { id, patientInfoCount, userSkillCount, messageFilterCount, userMessageCount, taskCount, taskAssigmentCount, taskLikeCount, taskReplyCount, taskReplyLikeCount, threadCount, threadReplyCount, threadRegistrationCount, threadLikeCount, threadReplyLikeCount, fanCount, followCount, bonusPointCount, experiencePointCount } = communityUser
    const { patientInfoList, userSkillList, messageFilterList, userMessageList, taskList, taskAssigmentList, taskLikeList, taskReplyList, taskReplyLikeList, threadList, threadReplyList, threadRegistrationList, threadLikeList, threadReplyLikeList, fanList, followList, bonusPointList, experiencePointList } = communityUser
    
    const owner = { type: '_communityUser', id }
    
    const tabList = [

      {key: 'patientInfoList',tab: `病人信息(${patientInfoCount})`}, 
      {key: 'userSkillList',tab: `用户技能(${userSkillCount})`}, 
      {key: 'messageFilterList',tab: `消息过滤(${messageFilterCount})`}, 
      {key: 'userMessageList',tab: `用户消息(${userMessageCount})`}, 
      {key: 'taskList',tab: `任务(${taskCount})`}, 
      {key: 'taskAssigmentList',tab: `任务分配(${taskAssigmentCount})`}, 
      {key: 'taskLikeList',tab: `任务点赞(${taskLikeCount})`}, 
      {key: 'taskReplyList',tab: `回复任务(${taskReplyCount})`}, 
      {key: 'taskReplyLikeList',tab: `任务回复点赞(${taskReplyLikeCount})`}, 
      {key: 'threadList',tab: `主贴(${threadCount})`}, 
      {key: 'threadReplyList',tab: `跟帖回复(${threadReplyCount})`}, 
      {key: 'threadRegistrationList',tab: `活动注册(${threadRegistrationCount})`}, 
      {key: 'threadLikeList',tab: `主贴点赞(${threadLikeCount})`}, 
      {key: 'threadReplyLikeList',tab: `跟帖回复点赞(${threadReplyLikeCount})`}, 
      {key: 'fanList',tab: `粉丝(${fanCount})`}, 
      {key: 'followList',tab: `关注(${followCount})`}, 
      {key: 'bonusPointList',tab: `积分(${bonusPointCount})`}, 
      {key: 'experiencePointList',tab: `成长值(${experiencePointCount})`}, 
   

   ];
   
   
    const contentList = {
       patientInfoList:  
        <PatientInfoViewTable data={patientInfoList} owner={owner} {...this.props} />,
 
      userSkillList:  
        <UserSkillViewTable data={userSkillList} owner={owner} {...this.props} />,
 
      messageFilterList:  
        <MessageFilterViewTable data={messageFilterList} owner={owner} {...this.props} />,
 
      userMessageList:  
        <UserMessageViewTable data={userMessageList} owner={owner} {...this.props} />,
 
      taskList:  
        <TaskViewTable data={taskList} owner={owner} {...this.props} />,
 
      taskAssigmentList:  
        <TaskAssigmentViewTable data={taskAssigmentList} owner={owner} {...this.props} />,
 
      taskLikeList:  
        <TaskLikeViewTable data={taskLikeList} owner={owner} {...this.props} />,
 
      taskReplyList:  
        <TaskReplyViewTable data={taskReplyList} owner={owner} {...this.props} />,
 
      taskReplyLikeList:  
        <TaskReplyLikeViewTable data={taskReplyLikeList} owner={owner} {...this.props} />,
 
      threadList:  
        <ThreadViewTable data={threadList} owner={owner} {...this.props} />,
 
      threadReplyList:  
        <ThreadReplyViewTable data={threadReplyList} owner={owner} {...this.props} />,
 
      threadRegistrationList:  
        <ThreadRegistrationViewTable data={threadRegistrationList} owner={owner} {...this.props} />,
 
      threadLikeList:  
        <ThreadLikeViewTable data={threadLikeList} owner={owner} {...this.props} />,
 
      threadReplyLikeList:  
        <ThreadReplyLikeViewTable data={threadReplyLikeList} owner={owner} {...this.props} />,
 
      fanList:  
        <FanViewTable data={fanList} owner={owner} {...this.props} />,
 
      followList:  
        <FollowViewTable data={followList} owner={owner} {...this.props} />,
 
      bonusPointList:  
        <BonusPointViewTable data={bonusPointList} owner={owner} {...this.props} />,
 
      experiencePointList:  
        <ExperiencePointViewTable data={experiencePointList} owner={owner} {...this.props} />,
 
    
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="社区用户总览"
        content={summaryOf(this.props.communityUser)}
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



