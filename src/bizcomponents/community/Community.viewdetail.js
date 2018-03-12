

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
import styles from './Community.viewdetail.less'
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

const summaryOf = (community) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{community.id}</Description> 
<Description term="名称">{community.name}</Description> 
<Description term="描述">{community.description}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  community: state._community,
}))
export default class CommunityViewDetail extends Component {


  state = {
    tabKey: `invitationCodeList`,
    stepDirection: 'horizontal',
  }
 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
    const {InvitationCodeViewTable} = GlobalComponents;
    const {HomePageViewTable} = GlobalComponents;
    const {EncyclopediaItemViewTable} = GlobalComponents;
    const {TaskPageViewTable} = GlobalComponents;
    const {CommunityUserViewTable} = GlobalComponents;
    const {TaskViewTable} = GlobalComponents;
    const {GroupPageViewTable} = GlobalComponents;
    const {ThreadViewTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    
    const community = this.props.community
    const { id, invitationCodeCount, homePageCount, encyclopediaItemCount, taskPageCount, communityUserCount, taskCount, groupPageCount, threadCount } = community
    const { invitationCodeList, homePageList, encyclopediaItemList, taskPageList, communityUserList, taskList, groupPageList, threadList } = community
    
    const owner = { type: '_community', id }
    
    const tabList = [

      {key: 'invitationCodeList',tab: `邀请码(${invitationCodeCount})`}, 
      {key: 'homePageList',tab: `主页(${homePageCount})`}, 
      {key: 'encyclopediaItemList',tab: `百科全书条目(${encyclopediaItemCount})`}, 
      {key: 'taskPageList',tab: `任务页面(${taskPageCount})`}, 
      {key: 'communityUserList',tab: `社区用户(${communityUserCount})`}, 
      {key: 'taskList',tab: `任务(${taskCount})`}, 
      {key: 'groupPageList',tab: `群组页面(${groupPageCount})`}, 
      {key: 'threadList',tab: `主贴(${threadCount})`}, 
   

   ];
   
   
    const contentList = {
       invitationCodeList:  
        <InvitationCodeViewTable data={invitationCodeList} owner={owner} {...this.props} />,
 
      homePageList:  
        <HomePageViewTable data={homePageList} owner={owner} {...this.props} />,
 
      encyclopediaItemList:  
        <EncyclopediaItemViewTable data={encyclopediaItemList} owner={owner} {...this.props} />,
 
      taskPageList:  
        <TaskPageViewTable data={taskPageList} owner={owner} {...this.props} />,
 
      communityUserList:  
        <CommunityUserViewTable data={communityUserList} owner={owner} {...this.props} />,
 
      taskList:  
        <TaskViewTable data={taskList} owner={owner} {...this.props} />,
 
      groupPageList:  
        <GroupPageViewTable data={groupPageList} owner={owner} {...this.props} />,
 
      threadList:  
        <ThreadViewTable data={threadList} owner={owner} {...this.props} />,
 
    
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="社区总览"
        content={summaryOf(this.props.community)}
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



