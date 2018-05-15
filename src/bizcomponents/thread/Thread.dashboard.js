

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
import styles from './Thread.dashboard.less'
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
<Description term="封面图像路径1"><ImagePreview imageTitle="封面图像路径1" imageLocation={thread.coverImagePath1}/></Description> 
<Description term="封面图像路径2"><ImagePreview imageTitle="封面图像路径2" imageLocation={thread.coverImagePath2}/></Description> 
<Description term="封面图像路径3"><ImagePreview imageTitle="封面图像路径3" imageLocation={thread.coverImagePath3}/></Description> 
<Description term="图1"><ImagePreview imageTitle="图1" imageLocation={thread.imagePath1}/></Description> 
<Description term="图2"><ImagePreview imageTitle="图2" imageLocation={thread.imagePath2}/></Description> 
<Description term="图3"><ImagePreview imageTitle="图3" imageLocation={thread.imagePath3}/></Description> 
<Description term="图4"><ImagePreview imageTitle="图4" imageLocation={thread.imagePath4}/></Description> 
<Description term="图5"><ImagePreview imageTitle="图5" imageLocation={thread.imagePath5}/></Description> 
<Description term="内容">{thread.content}</Description> 
<Description term="当前用户已点赞">{thread.likeByCurrentUser?'是':'否'}</Description> 
<Description term="当前用户已回复">{thread.repliedByCurrentUser?'是':'否'}</Description> 
<Description term="由当前用户注册">{thread.registeredByCurrentUser?'是':'否'}</Description> 
<Description term="当前状态">{thread.currentStatus}</Description> 
	
        
      </DescriptionList>
	)

}


class ThreadDashboard extends Component {


  componentDidMount() {
  /*
    // const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props;
    // const { getFieldDecorator, setFieldsValue } = this.props.form;
    const { dispatch, location, thread } = this.props;
    
    if(!thread){
    	return;
    }
    const {displayName} = thread;
    if(!displayName){
    	return;
    }
	const link = location.pathname;
	
    dispatch({ type: 'breadcrumb/gotoLink', payload: { displayName, link }})
  	*/
  }
  

  render() {
    // eslint-disable-next-line max-len
    const { id,displayName, threadReplyCount, threadRegistrationCount, threadLikeCount } = this.props.thread
    const cardsData = {cardsName:"主贴",cardsFor: "thread",cardsSource: this.props.thread,
  		subItems: [
{name: 'threadReplyList', displayName:'跟帖回复',type:'threadReply',count:threadReplyCount},
{name: 'threadRegistrationList', displayName:'活动注册',type:'threadRegistration',count:threadRegistrationCount},
{name: 'threadLikeList', displayName:'主贴点赞',type:'threadLike',count:threadLikeCount},
    
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
  thread: state._thread,
}))(ThreadDashboard)

