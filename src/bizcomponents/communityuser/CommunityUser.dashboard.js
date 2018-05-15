

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
import styles from './CommunityUser.dashboard.less'
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
const summaryOf = (communityUser) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{communityUser.id}</Description> 
<Description term="手机">{communityUser.mobile}</Description> 
<Description term="昵称">{communityUser.nickName}</Description> 
<Description term="性别">{communityUser.gender}</Description> 
<Description term="用户类型">{communityUser.userType}</Description> 
<Description term="头像"><ImagePreview imageTitle="头像" imageLocation={communityUser.avatar}/></Description> 
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


class CommunityUserDashboard extends Component {


  componentDidMount() {
  /*
    // const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props;
    // const { getFieldDecorator, setFieldsValue } = this.props.form;
    const { dispatch, location, communityUser } = this.props;
    
    if(!communityUser){
    	return;
    }
    const {displayName} = communityUser;
    if(!displayName){
    	return;
    }
	const link = location.pathname;
	
    dispatch({ type: 'breadcrumb/gotoLink', payload: { displayName, link }})
  	*/
  }
  

  render() {
    // eslint-disable-next-line max-len
    const { id,displayName, patientInfoCount, userSkillCount, messageFilterCount, userMessageCount, taskCount, taskAssigmentCount, taskLikeCount, taskReplyCount, taskReplyLikeCount, threadCount, threadReplyCount, threadRegistrationCount, threadLikeCount, threadReplyLikeCount, fanCount, followCount, bonusPointCount, experiencePointCount } = this.props.communityUser
    const cardsData = {cardsName:"社区用户",cardsFor: "communityUser",cardsSource: this.props.communityUser,
  		subItems: [
{name: 'patientInfoList', displayName:'病人信息',type:'patientInfo',count:patientInfoCount},
{name: 'userSkillList', displayName:'用户技能',type:'userSkill',count:userSkillCount},
{name: 'messageFilterList', displayName:'消息过滤',type:'messageFilter',count:messageFilterCount},
{name: 'userMessageList', displayName:'用户消息',type:'userMessage',count:userMessageCount},
{name: 'taskList', displayName:'任务',type:'task',count:taskCount},
{name: 'taskAssigmentList', displayName:'任务分配',type:'taskAssigment',count:taskAssigmentCount},
{name: 'taskLikeList', displayName:'任务点赞',type:'taskLike',count:taskLikeCount},
{name: 'taskReplyList', displayName:'回复任务',type:'taskReply',count:taskReplyCount},
{name: 'taskReplyLikeList', displayName:'任务回复点赞',type:'taskReplyLike',count:taskReplyLikeCount},
{name: 'threadList', displayName:'主贴',type:'thread',count:threadCount},
{name: 'threadReplyList', displayName:'跟帖回复',type:'threadReply',count:threadReplyCount},
{name: 'threadRegistrationList', displayName:'活动注册',type:'threadRegistration',count:threadRegistrationCount},
{name: 'threadLikeList', displayName:'主贴点赞',type:'threadLike',count:threadLikeCount},
{name: 'threadReplyLikeList', displayName:'跟帖回复点赞',type:'threadReplyLike',count:threadReplyLikeCount},
{name: 'fanList', displayName:'粉丝',type:'fan',count:fanCount},
{name: 'followList', displayName:'关注',type:'follow',count:followCount},
{name: 'bonusPointList', displayName:'积分',type:'bonusPoint',count:bonusPointCount},
{name: 'experiencePointList', displayName:'成长值',type:'experiencePoint',count:experiencePointCount},
    
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
  communityUser: state._communityUser,
}))(CommunityUserDashboard)

