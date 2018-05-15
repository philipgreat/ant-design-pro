

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
import styles from './Printer.viewdetail.less'
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

const summaryOf = (printer) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{printer.id}</Description> 
<Description term="名称">{printer.name}</Description> 
<Description term="位置">{printer.location}</Description> 
	
        
      </DescriptionList>
	)

}

class PrinterViewDetail extends Component {


  state = {
    tabKey: `printerTaskList`,
    stepDirection: 'horizontal',
  }
 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
    const {PrinterTaskViewTable} = GlobalComponents;
    const {StoreViewTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    
    const printer = this.props.printer
    const { id, printerTaskCount, storeCount } = printer
    const { printerTaskList, storeList } = printer
    
    const owner = { type: '_printer', id }
    
    const tabList = [

      {key: 'printerTaskList',tab: `打印机任务(${printerTaskCount})`}, 
      {key: 'storeList',tab: `商店(${storeCount})`}, 
   

   ];
   
   
    const contentList = {
       printerTaskList:  
        <PrinterTaskViewTable data={printerTaskList} owner={owner} {...this.props} />,
 
      storeList:  
        <StoreViewTable data={storeList} owner={owner} {...this.props} />,
 
    
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="打印机总览"
        content={summaryOf(this.props.printer)}
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
  printer: state._printer,
}))(PrinterViewDetail)

