

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
import styles from './TerminationType.viewdetail.less'
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

const summaryOf = (terminationType) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{terminationType.id}</Description> 
<Description term="代码">{terminationType.code}</Description> 
<Description term="基本描述">{terminationType.baseDescription}</Description> 
<Description term="详细描述">{terminationType.detailDescription}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  terminationType: state._terminationType,
}))
export default class TerminationTypeViewDetail extends Component {


  state = {
    tabKey: `terminationList`,
    stepDirection: 'horizontal',
  }
 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
    const {TerminationViewTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    
    const terminationType = this.props.terminationType
    const { id, terminationCount } = terminationType
    const { terminationList } = terminationType
    
    const owner = { type: '_terminationType', id }
    
    const tabList = [

      {key: 'terminationList',tab: `雇佣终止(${terminationCount})`}, 
   

   ];
   
   
    const contentList = {
       terminationList:  
        <TerminationViewTable data={terminationList} owner={owner} {...this.props} />,
 
    
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="雇佣终止类型总览"
        content={summaryOf(this.props.terminationType)}
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



