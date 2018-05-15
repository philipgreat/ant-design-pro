

import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome';
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
import ImagePreview from '../../components/ImagePreview';
const { Description } = DescriptionList;
const { TabPane } = Tabs
const { RangePicker } = DatePicker

const topColResponsiveProps = {
  xs: 8,
  sm: 6,
  md: 6,
  lg: 4,
  xl: 4,
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
<Description term="封面图像路径1"><ImagePreview imageTitle="封面图像路径1" imageLocation={task.coverImagePath1}/></Description> 
<Description term="封面图像路径2"><ImagePreview imageTitle="封面图像路径2" imageLocation={task.coverImagePath2}/></Description> 
<Description term="封面图像路径3"><ImagePreview imageTitle="封面图像路径3" imageLocation={task.coverImagePath3}/></Description> 
<Description term="图1"><ImagePreview imageTitle="图1" imageLocation={task.imagePath1}/></Description> 
<Description term="图2"><ImagePreview imageTitle="图2" imageLocation={task.imagePath2}/></Description> 
<Description term="图3"><ImagePreview imageTitle="图3" imageLocation={task.imagePath3}/></Description> 
<Description term="图4"><ImagePreview imageTitle="图4" imageLocation={task.imagePath4}/></Description> 
<Description term="图5"><ImagePreview imageTitle="图5" imageLocation={task.imagePath5}/></Description> 
<Description term="发布人的奖金">{task.creatorBonus}</Description> 
<Description term="额外的奖金">{task.additionalBonus}</Description> 
<Description term="当前用户已点赞">{task.likeByCurrentUser?'是':'否'}</Description> 
<Description term="当前用户已回复">{task.repliedByCurrentUser?'是':'否'}</Description> 
<Description term="当前状态">{task.currentStatus}</Description> 
	
        
      </DescriptionList>
	)

}


class TaskDashboard extends Component {


  componentDidMount() {
  /*
    // const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props;
    // const { getFieldDecorator, setFieldsValue } = this.props.form;
    const { dispatch, location, task } = this.props;
    
    if(!task){
    	return;
    }
    const {displayName} = task;
    if(!displayName){
    	return;
    }
	const link = location.pathname;
	
    dispatch({ type: 'breadcrumb/gotoLink', payload: { displayName, link }})
  	*/
  }
  

  render() {
    // eslint-disable-next-line max-len
    const { id,displayName, taskAssigmentCount, taskLikeCount, taskReplyCount } = this.props.task
    const cardsData = {cardsName:"任务",cardsFor: "task",cardsSource: this.props.task,
  		subItems: [
{name: 'taskAssigmentList', displayName:'任务分配',type:'taskAssigment',count:taskAssigmentCount},
{name: 'taskLikeList', displayName:'任务点赞',type:'taskLike',count:taskLikeCount},
{name: 'taskReplyList', displayName:'回复任务',type:'taskReply',count:taskReplyCount},
    
      	],
  	};
    
    return (

      <PageHeaderLayout
        title={`${cardsData.cardsName}: ${displayName}`}
        content={summaryOf(cardsData.cardsSource)}
        wrapperClassName={styles.advancedForm}
      >
        <div>
          <Row gutter={24}>

           {cardsData.subItems.map((item)=>(<Col {...topColResponsiveProps} key={item.name}>           
            <Card title={`${item.displayName}(${numeral(item.count).format('0,0')})`}  style={{ width: 180 }}>             
              <p><Link to={`/${cardsData.cardsFor}/${id}/list/${item.name}/${item.displayName}列表`}><FontAwesome name="gear"  />&nbsp;管理</Link></p>
              <p><Link to={`/${cardsData.cardsFor}/${id}/list/${item.type}CreateForm`}><FontAwesome name="plus"  />&nbsp;新增</Link></p>              
          </Card> 
            </Col>))}

          </Row>
        </div>
      </PageHeaderLayout>
    )
  }
}

export default connect(state => ({
  task: state._task,
}))(TaskDashboard)

