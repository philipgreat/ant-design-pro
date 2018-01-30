

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
import styles from './ReportHandover.viewdetail.less'
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

const summaryOf = (reportHandover) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{reportHandover.id}</Description> 
<Description term="回归结果">{reportHandover.handoverResult}</Description> 
<Description term="拒收原因">{reportHandover.rejectComments}</Description> 
<Description term="拒收凭证1">{reportHandover.rejectEvidence1}</Description> 
<Description term="拒收凭证2">{reportHandover.rejectEvidence2}</Description> 
<Description term="拒收凭证3">{reportHandover.rejectEvidence3}</Description> 
<Description term="拒收凭证4">{reportHandover.rejectEvidence4}</Description> 
<Description term="拒收凭证5">{reportHandover.rejectEvidence5}</Description> 
<Description term="创建时间">{ moment(reportHandover.createTime).format('YYYY-MM-DD')}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  reportHandover: state._reportHandover,
}))
export default class ReportHandoverViewDetail extends Component {


  state = {
    tabKey: `handoverChecklistResultList`,
    stepDirection: 'horizontal',
  }
 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
    const {HandoverChecklistResultViewTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    
    const reportHandover = this.props.reportHandover
    const { id, handoverChecklistResultCount } = reportHandover
    const { handoverChecklistResultList } = reportHandover
    
    const owner = { type: '_reportHandover', id }
    
    const tabList = [

      {key: 'handoverChecklistResultList',tab: `交接清单结果(${handoverChecklistResultCount})`}, 
   

   ];
   
   
    const contentList = {
       handoverChecklistResultList:  
        <HandoverChecklistResultViewTable data={handoverChecklistResultList} owner={owner} {...this.props} />,
 
    
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="交接报告总览"
        content={summaryOf(this.props.reportHandover)}
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



