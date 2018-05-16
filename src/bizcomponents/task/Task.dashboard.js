

import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome';
import { connect } from 'dva'
import moment from 'moment'
import BooleanOption from 'components/BooleanOption';
import { Row, Col, Icon, Card, Tabs, Table, Radio, DatePicker, Tooltip, Menu, Dropdown,Badge } from 'antd'
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


const imageListOf = (task) =>{

	 return(<Card title='图片列表' className={styles.card}><Row type="flex" justify="space-between" align="bottom">
<Col span={4}><ImagePreview imageTitle ={'封面图像路径1'} imageLocation={task.coverImagePath1} >封面图像路径1</ImagePreview></Col>
<Col span={4}><ImagePreview imageTitle ={'封面图像路径2'} imageLocation={task.coverImagePath2} >封面图像路径2</ImagePreview></Col>
<Col span={4}><ImagePreview imageTitle ={'封面图像路径3'} imageLocation={task.coverImagePath3} >封面图像路径3</ImagePreview></Col>
<Col span={4}><ImagePreview imageTitle ={'图1'} imageLocation={task.imagePath1} >图1</ImagePreview></Col>
<Col span={4}><ImagePreview imageTitle ={'图2'} imageLocation={task.imagePath2} >图2</ImagePreview></Col>
<Col span={4}><ImagePreview imageTitle ={'图3'} imageLocation={task.imagePath3} >图3</ImagePreview></Col>
<Col span={4}><ImagePreview imageTitle ={'图4'} imageLocation={task.imagePath4} >图4</ImagePreview></Col>
<Col span={4}><ImagePreview imageTitle ={'图5'} imageLocation={task.imagePath5} >图5</ImagePreview></Col>
</Row></Card> )

	

}

const settingListOf = (task) =>{

	return(<Card title='状态集合' className={styles.card}>
<BooleanOption type={task.likeByCurrentUser?"success":"error"} title="当前用户已点赞"/>
<BooleanOption type={task.repliedByCurrentUser?"success":"error"} title="当前用户已回复"/>
</Card> )

	
	//(task)


}

const largeTextOf = (task) =>{

	return(<div> 
   <Card title={`内容`} ><pre>{task.content}</pre></Card>
</div>)

	

}



const summaryOf = (task) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{task.id}</Description> 
<Description term="标题">{task.title}</Description> 
<Description term="选定的任务">{task.selectedTask}</Description> 
<Description term="视频网址">{task.videoUrl}</Description> 
<Description term="发布人的奖金">{task.creatorBonus}</Description> 
	
        
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
        {imageListOf(cardsData.cardsSource)}
        {settingListOf(cardsData.cardsSource)}
          <Row gutter={24}>

           {cardsData.subItems.map((item)=>(<Col {...topColResponsiveProps} key={item.name}>   
           <Badge count={item.count} style={{ backgroundColor: '#52c41a' }} overflowCount={9999999999}>        
            <Card title={`${item.displayName}(${numeral(item.count).format('0,0')})`}  style={{ width: 180 }}>             
              <p><Link to={`/${cardsData.cardsFor}/${id}/list/${item.name}/${item.displayName}列表`}><FontAwesome name="gear"  />&nbsp;管理</Link></p>
              <p><Link to={`/${cardsData.cardsFor}/${id}/list/${item.type}CreateForm`}><FontAwesome name="plus"  />&nbsp;新增</Link></p>              
          </Card> </Badge>
            </Col>))}

          </Row>
          
          {largeTextOf(cardsData.cardsSource)}
          
        </div>
      </PageHeaderLayout>
    )
  }
}

export default connect(state => ({
  task: state._task,
}))(TaskDashboard)

