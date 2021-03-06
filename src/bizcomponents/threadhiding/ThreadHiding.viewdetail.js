

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
import styles from './ThreadHiding.viewdetail.less'
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

const summaryOf = (threadHiding) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{threadHiding.id}</Description> 
<Description term="谁">{threadHiding.who}</Description> 
<Description term="行动时间">{ moment(threadHiding.actionTime).format('YYYY-MM-DD')}</Description> 
<Description term="评论">{threadHiding.comment}</Description> 
	
        
      </DescriptionList>
	)

}

class ThreadHidingViewDetail extends Component {


  state = {
    tabKey: `threadList`,
    stepDirection: 'horizontal',
  }
 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
    const {ThreadViewTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    
    const threadHiding = this.props.threadHiding
    const { id, threadCount } = threadHiding
    const { threadList } = threadHiding
    
    const owner = { type: '_threadHiding', id }
    
    const tabList = [

      {key: 'threadList',tab: `主贴(${threadCount})`}, 
   

   ];
   
   
    const contentList = {
       threadList:  
        <ThreadViewTable data={threadList} owner={owner} {...this.props} />,
 
    
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="线程隐藏总览"
        content={summaryOf(this.props.threadHiding)}
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
  threadHiding: state._threadHiding,
}))(ThreadHidingViewDetail)

