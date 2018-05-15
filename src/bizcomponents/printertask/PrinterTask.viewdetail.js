

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
import styles from './PrinterTask.viewdetail.less'
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

const summaryOf = (printerTask) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{printerTask.id}</Description> 
<Description term="标题">{printerTask.title}</Description> 
<Description term="提交者">{printerTask.submitter}</Description> 
<Description term="内容1">{printerTask.content1}</Description> 
<Description term="内容2">{printerTask.content2}</Description> 
<Description term="内容3">{printerTask.content3}</Description> 
<Description term="内容4">{printerTask.content4}</Description> 
<Description term="内容5">{printerTask.content5}</Description> 
<Description term="打印任务状态">{printerTask.printTaskStatus}</Description> 
<Description term="创建时间">{ moment(printerTask.createTime).format('YYYY-MM-DD')}</Description> 
<Description term="最后更新时间">{ moment(printerTask.lastUpdateTime).format('YYYY-MM-DD')}</Description> 
	
        
      </DescriptionList>
	)

}

class PrinterTaskViewDetail extends Component {

 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
  
    // eslint-disable-next-line max-len
    
    const printerTask = this.props.printerTask
    const { id,  } = printerTask
    const {  } = printerTask
    
    const owner = { type: '_printerTask', id }
    
    const tabList = [

   

   ];
   
   
    const contentList = {
     
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="打印机任务总览"
        content={summaryOf(this.props.printerTask)}
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
  printerTask: state._printerTask,
}))(PrinterTaskViewDetail)

