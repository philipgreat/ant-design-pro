

import React, { Component } from 'react'
import { connect } from 'dva'
import moment from 'moment'
import { Row, Col, Icon, Card, Tabs, Table, Radio, DatePicker, Tooltip, Menu, Dropdown } from 'antd'
import { Link, Route, Redirect, Switch } from 'dva/router'
import numeral from 'numeral'
import {
  ChartCard, yuan, MiniArea, MiniBar, MiniProgress, Field, Bar, Pie, TimelineChart,
} from '../../components/Charts'
import Trend from '../../components/Trend'
import NumberInfo from '../../components/NumberInfo'
import { getTimeDistance } from '../../utils/utils'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import styles from './Thread.dashboard.less'
import DescriptionList from '../../components/DescriptionList';
const { Description } = DescriptionList;
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
export default class ThreadDashboard extends Component {
  render() {
    // eslint-disable-next-line max-len
    const { id, threadReplyCount, threadRegistrationCount, threadLikeCount } = this.props.thread
    
    
    
    return (

      <PageHeaderLayout
        title="主贴总览"
        content={summaryOf(this.props.thread)}
        wrapperClassName={styles.advancedForm}
      >
        <div>
          <Row gutter={24}>

          
            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="跟帖回复"
                action={<Tooltip title="跟帖回复"><Icon type="info-circle-o" /></Tooltip>}
                total={numeral(threadReplyCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link to={`/thread/${id}/list/threadReplyList`}><Icon type="profile" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/thread/${id}/list/threadReplyCreateForm`}><Icon type="plus-circle-o" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/thread/${id}/list/threadReplyList`}><Icon type="line-chart" style={{ fontSize: 20, color: '#08c' }} /></Link>
              </ChartCard>
            </Col>

          
            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="活动注册"
                action={<Tooltip title="活动注册"><Icon type="info-circle-o" /></Tooltip>}
                total={numeral(threadRegistrationCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link to={`/thread/${id}/list/threadRegistrationList`}><Icon type="profile" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/thread/${id}/list/threadRegistrationCreateForm`}><Icon type="plus-circle-o" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/thread/${id}/list/threadRegistrationList`}><Icon type="line-chart" style={{ fontSize: 20, color: '#08c' }} /></Link>
              </ChartCard>
            </Col>

          
            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="主贴点赞"
                action={<Tooltip title="主贴点赞"><Icon type="info-circle-o" /></Tooltip>}
                total={numeral(threadLikeCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link to={`/thread/${id}/list/threadLikeList`}><Icon type="profile" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/thread/${id}/list/threadLikeCreateForm`}><Icon type="plus-circle-o" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/thread/${id}/list/threadLikeList`}><Icon type="line-chart" style={{ fontSize: 20, color: '#08c' }} /></Link>
              </ChartCard>
            </Col>

          </Row>
        </div>
      </PageHeaderLayout>
    )
  }
}



