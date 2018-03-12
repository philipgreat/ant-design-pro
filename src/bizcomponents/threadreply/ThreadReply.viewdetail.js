

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
import styles from './ThreadReply.viewdetail.less'
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

const summaryOf = (threadReply) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{threadReply.id}</Description> 
<Description term="回复时间">{ moment(threadReply.replyTime).format('YYYY-MM-DD')}</Description> 
<Description term="内容">{threadReply.content}</Description> 
<Description term="当前用户已点赞">{threadReply.likeByCurrentUser?'是':'否'}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  threadReply: state._threadReply,
}))
export default class ThreadReplyViewDetail extends Component {


  state = {
    tabKey: `threadReplyLikeList`,
    stepDirection: 'horizontal',
  }
 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
    const {ThreadReplyLikeViewTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    
    const threadReply = this.props.threadReply
    const { id, threadReplyLikeCount } = threadReply
    const { threadReplyLikeList } = threadReply
    
    const owner = { type: '_threadReply', id }
    
    const tabList = [

      {key: 'threadReplyLikeList',tab: `跟帖回复点赞(${threadReplyLikeCount})`}, 
   

   ];
   
   
    const contentList = {
       threadReplyLikeList:  
        <ThreadReplyLikeViewTable data={threadReplyLikeList} owner={owner} {...this.props} />,
 
    
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="跟帖回复总览"
        content={summaryOf(this.props.threadReply)}
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



