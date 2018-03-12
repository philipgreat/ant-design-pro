

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
import styles from './Task.dashboard.less'
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
export default class TaskDashboard extends Component {
  render() {
    // eslint-disable-next-line max-len
    const { id, taskAssigmentCount, taskLikeCount, taskReplyCount } = this.props.task
    
    
    
    return (

      <PageHeaderLayout
        title="任务总览"
        content={summaryOf(this.props.task)}
        wrapperClassName={styles.advancedForm}
      >
        <div>
          <Row gutter={24}>

          
            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="任务分配"
                action={<Tooltip title="任务分配"><Icon type="info-circle-o" /></Tooltip>}
                total={numeral(taskAssigmentCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link to={`/task/${id}/list/taskAssigmentList`}><Icon type="profile" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/task/${id}/list/taskAssigmentCreateForm`}><Icon type="plus-circle-o" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/task/${id}/list/taskAssigmentList`}><Icon type="line-chart" style={{ fontSize: 20, color: '#08c' }} /></Link>
              </ChartCard>
            </Col>

          
            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="任务点赞"
                action={<Tooltip title="任务点赞"><Icon type="info-circle-o" /></Tooltip>}
                total={numeral(taskLikeCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link to={`/task/${id}/list/taskLikeList`}><Icon type="profile" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/task/${id}/list/taskLikeCreateForm`}><Icon type="plus-circle-o" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/task/${id}/list/taskLikeList`}><Icon type="line-chart" style={{ fontSize: 20, color: '#08c' }} /></Link>
              </ChartCard>
            </Col>

          
            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="回复任务"
                action={<Tooltip title="回复任务"><Icon type="info-circle-o" /></Tooltip>}
                total={numeral(taskReplyCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link to={`/task/${id}/list/taskReplyList`}><Icon type="profile" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/task/${id}/list/taskReplyCreateForm`}><Icon type="plus-circle-o" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/task/${id}/list/taskReplyList`}><Icon type="line-chart" style={{ fontSize: 20, color: '#08c' }} /></Link>
              </ChartCard>
            </Col>

          </Row>
        </div>
      </PageHeaderLayout>
    )
  }
}



