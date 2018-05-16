

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
import styles from './Community.dashboard.less'
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


const imageListOf = (community) =>{

	     return null
	

}

const settingListOf = (community) =>{

	    return null
	
	//(community)


}

const largeTextOf = (community) =>{

	return null
	

}



const summaryOf = (community) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{community.id}</Description> 
<Description term="名称">{community.name}</Description> 
	
        
      </DescriptionList>
	)

}


class CommunityDashboard extends Component {


  componentDidMount() {
  /*
    // const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props;
    // const { getFieldDecorator, setFieldsValue } = this.props.form;
    const { dispatch, location, community } = this.props;
    
    if(!community){
    	return;
    }
    const {displayName} = community;
    if(!displayName){
    	return;
    }
	const link = location.pathname;
	
    dispatch({ type: 'breadcrumb/gotoLink', payload: { displayName, link }})
  	*/
  }
  

  render() {
    // eslint-disable-next-line max-len
    const { id,displayName, invitationCodeCount, homePageCount, encyclopediaItemCount, taskPageCount, communityUserCount, taskCount, groupPageCount, threadCount } = this.props.community
    const cardsData = {cardsName:"社区",cardsFor: "community",cardsSource: this.props.community,
  		subItems: [
{name: 'invitationCodeList', displayName:'邀请码',type:'invitationCode',count:invitationCodeCount},
{name: 'homePageList', displayName:'主页',type:'homePage',count:homePageCount},
{name: 'encyclopediaItemList', displayName:'百科全书条目',type:'encyclopediaItem',count:encyclopediaItemCount},
{name: 'taskPageList', displayName:'任务页面',type:'taskPage',count:taskPageCount},
{name: 'communityUserList', displayName:'社区用户',type:'communityUser',count:communityUserCount},
{name: 'taskList', displayName:'任务',type:'task',count:taskCount},
{name: 'groupPageList', displayName:'群组页面',type:'groupPage',count:groupPageCount},
{name: 'threadList', displayName:'主贴',type:'thread',count:threadCount},
    
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
  community: state._community,
}))(CommunityDashboard)

