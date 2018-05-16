

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
import styles from './GroupPage.viewdetail.less'
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

const summaryOf = (groupPage) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{groupPage.id}</Description> 
<Description term="标题">{groupPage.title}</Description> 
<Description term="目前的组名">{groupPage.currentGroupName}</Description> 
	
        
      </DescriptionList>
	)

}

class GroupPageViewDetail extends Component {


  state = {
    tabKey: `groupFilterList`,
    stepDirection: 'horizontal',
  }
 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
    const {GroupFilterViewTable} = GlobalComponents;
    const {ThreadViewTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    
    const groupPage = this.props.groupPage
    const { id, groupFilterCount, threadCount } = groupPage
    const { groupFilterList, threadList } = groupPage
    
    const owner = { type: '_groupPage', id }
    
    const tabList = [

      {key: 'groupFilterList',tab: `群组过滤器(${groupFilterCount})`}, 
      {key: 'threadList',tab: `主贴(${threadCount})`}, 
   

   ];
   
   
    const contentList = {
       groupFilterList:  
        <GroupFilterViewTable data={groupFilterList} owner={owner} {...this.props} />,
 
      threadList:  
        <ThreadViewTable data={threadList} owner={owner} {...this.props} />,
 
    
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="群组页面总览"
        content={summaryOf(this.props.groupPage)}
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

export default connect(state => ({
  groupPage: state._groupPage,
}))(GroupPageViewDetail)

