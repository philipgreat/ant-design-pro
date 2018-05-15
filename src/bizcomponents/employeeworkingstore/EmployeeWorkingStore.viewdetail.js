

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
import styles from './EmployeeWorkingStore.viewdetail.less'
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

const summaryOf = (employeeWorkingStore) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{employeeWorkingStore.id}</Description> 
<Description term="描述">{employeeWorkingStore.description}</Description> 
<Description term="开始日期">{ moment(employeeWorkingStore.startDate).format('YYYY-MM-DD')}</Description> 
<Description term="最后更新时间">{ moment(employeeWorkingStore.lastUpdateTime).format('YYYY-MM-DD')}</Description> 
<Description term="终止日期">{ moment(employeeWorkingStore.terminatedDate).format('YYYY-MM-DD')}</Description> 
	
        
      </DescriptionList>
	)

}

class EmployeeWorkingStoreViewDetail extends Component {

 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
  
    // eslint-disable-next-line max-len
    
    const employeeWorkingStore = this.props.employeeWorkingStore
    const { id,  } = employeeWorkingStore
    const {  } = employeeWorkingStore
    
    const owner = { type: '_employeeWorkingStore', id }
    
    const tabList = [

   

   ];
   
   
    const contentList = {
     
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="员工工作的商店总览"
        content={summaryOf(this.props.employeeWorkingStore)}
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
  employeeWorkingStore: state._employeeWorkingStore,
}))(EmployeeWorkingStoreViewDetail)

