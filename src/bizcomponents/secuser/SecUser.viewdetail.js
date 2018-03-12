

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
import styles from './SecUser.viewdetail.less'
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

const summaryOf = (secUser) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{secUser.id}</Description> 
<Description term="登录">{secUser.login}</Description> 
<Description term="手机">{secUser.mobile}</Description> 
<Description term="电子邮件">{secUser.email}</Description> 
<Description term="PWD">{secUser.pwd}</Description> 
<Description term="验证码">{secUser.verificationCode}</Description> 
<Description term="验证码过期">{ moment(secUser.verificationCodeExpire).format('YYYY-MM-DD')}</Description> 
<Description term="最后登录时间">{ moment(secUser.lastLoginTime).format('YYYY-MM-DD')}</Description> 
<Description term="当前状态">{secUser.currentStatus}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  secUser: state._secUser,
}))
export default class SecUserViewDetail extends Component {


  state = {
    tabKey: `userAppList`,
    stepDirection: 'horizontal',
  }
 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
    const {UserAppViewTable} = GlobalComponents;
    const {LoginHistoryViewTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    
    const secUser = this.props.secUser
    const { id, userAppCount, loginHistoryCount } = secUser
    const { userAppList, loginHistoryList } = secUser
    
    const owner = { type: '_secUser', id }
    
    const tabList = [

      {key: 'userAppList',tab: `用户应用程序(${userAppCount})`}, 
      {key: 'loginHistoryList',tab: `登录历史(${loginHistoryCount})`}, 
   

   ];
   
   
    const contentList = {
       userAppList:  
        <UserAppViewTable data={userAppList} owner={owner} {...this.props} />,
 
      loginHistoryList:  
        <LoginHistoryViewTable data={loginHistoryList} owner={owner} {...this.props} />,
 
    
    };
    


    const actionDescForBlocking = (secUser) =>{
      if(!secUser){
        return (<div>出错</div>)
      }
      const {blocking} = secUser;
      if(!blocking){
        return (<div>催一下</div>)
      }
      
      return (

    
      <DescriptionList className={styles.headerList} size="small" col="1">
			<Description term="序号">{blocking.id}</Description> 
			<Description term="谁">{blocking.who}</Description> 
			<Description term="屏蔽时间">{blocking.blockTime}</Description> 
			<Description term="评论">{blocking.comments}</Description> 
			<Description term="版本">{blocking.version}</Description> 

       
		</DescriptionList>
      )
    }

    
	const steps=(<Steps direction={'horizontal'} current={1}>
			<Step title="屏蔽" description={actionDescForBlocking(secUser)} />
		</Steps>)
    
    
    return (

      <PageHeaderLayout
        title="SEC的用户总览"
        content={summaryOf(this.props.secUser)}
        wrapperClassName={styles.advancedForm}
      >
	<Card title="流程进度" style={{ marginBottom: 24 }} bordered={false}>{steps}
		</Card>

      
      
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



