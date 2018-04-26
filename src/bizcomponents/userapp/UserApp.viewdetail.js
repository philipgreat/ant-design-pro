

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
import styles from './UserApp.viewdetail.less'
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

const summaryOf = (userApp) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{userApp.id}</Description> 
<Description term="头衔">{userApp.title}</Description> 
<Description term="应用程序图标">{userApp.appIcon}</Description> 
<Description term="完全访问">{userApp.fullAccess?'是':'否'}</Description> 
<Description term="许可">{userApp.permission}</Description> 
<Description term="对象类型">{userApp.objectType}</Description> 
<Description term="对象ID">{userApp.objectId}</Description> 
<Description term="位置">{userApp.location}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  userApp: state._userApp,
}))
export default class UserAppViewDetail extends Component {


  state = {
    tabKey: `objectAccessList`,
    stepDirection: 'horizontal',
  }
 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
    const {ObjectAccessViewTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    
    const userApp = this.props.userApp
    const { id, objectAccessCount } = userApp
    const { objectAccessList } = userApp
    
    const owner = { type: '_userApp', id }
    
    const tabList = [

      {key: 'objectAccessList',tab: `对象访问(${objectAccessCount})`}, 
   

   ];
   
   
    const contentList = {
       objectAccessList:  
        <ObjectAccessViewTable data={objectAccessList} owner={owner} {...this.props} />,
 
    
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="用户应用程序总览"
        content={summaryOf(this.props.userApp)}
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



