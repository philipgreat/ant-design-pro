

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
import styles from './MemberServiceManagement.viewdetail.less'
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

const summaryOf = (memberServiceManagement) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{memberServiceManagement.id}</Description> 
<Description term="名称">{memberServiceManagement.name}</Description> 
	
        
      </DescriptionList>
	)

}

class MemberServiceManagementViewDetail extends Component {


  state = {
    tabKey: `memberServiceProductList`,
    stepDirection: 'horizontal',
  }
 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
    const {MemberServiceProductViewTable} = GlobalComponents;
    const {MemberServicePeriodViewTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    
    const memberServiceManagement = this.props.memberServiceManagement
    const { id, memberServiceProductCount, memberServicePeriodCount } = memberServiceManagement
    const { memberServiceProductList, memberServicePeriodList } = memberServiceManagement
    
    const owner = { type: '_memberServiceManagement', id }
    
    const tabList = [

      {key: 'memberServiceProductList',tab: `会员服务产品(${memberServiceProductCount})`}, 
      {key: 'memberServicePeriodList',tab: `会员服务时间(${memberServicePeriodCount})`}, 
   

   ];
   
   
    const contentList = {
       memberServiceProductList:  
        <MemberServiceProductViewTable data={memberServiceProductList} owner={owner} {...this.props} />,
 
      memberServicePeriodList:  
        <MemberServicePeriodViewTable data={memberServicePeriodList} owner={owner} {...this.props} />,
 
    
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="会员服务管理总览"
        content={summaryOf(this.props.memberServiceManagement)}
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
  memberServiceManagement: state._memberServiceManagement,
}))(MemberServiceManagementViewDetail)

