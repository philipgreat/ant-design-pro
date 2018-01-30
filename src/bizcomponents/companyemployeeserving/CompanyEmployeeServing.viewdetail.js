

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
import styles from './CompanyEmployeeServing.viewdetail.less'
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

const summaryOf = (companyEmployeeServing) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{companyEmployeeServing.id}</Description> 
<Description term="事件时间">{ moment(companyEmployeeServing.eventTime).format('YYYY-MM-DD')}</Description> 
<Description term="谁">{companyEmployeeServing.who}</Description> 
<Description term="评论">{companyEmployeeServing.comment}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  companyEmployeeServing: state._companyEmployeeServing,
}))
export default class CompanyEmployeeServingViewDetail extends Component {


  state = {
    tabKey: `vehicleServiceCompanyEmployeeList`,
    stepDirection: 'horizontal',
  }
 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
    const {VehicleServiceCompanyEmployeeViewTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    
    const companyEmployeeServing = this.props.companyEmployeeServing
    const { id, vehicleServiceCompanyEmployeeCount } = companyEmployeeServing
    const { vehicleServiceCompanyEmployeeList } = companyEmployeeServing
    
    const owner = { type: '_companyEmployeeServing', id }
    
    const tabList = [

      {key: 'vehicleServiceCompanyEmployeeList',tab: `服务提供商员工管理(${vehicleServiceCompanyEmployeeCount})`}, 
   

   ];
   
   
    const contentList = {
       vehicleServiceCompanyEmployeeList:  
        <VehicleServiceCompanyEmployeeViewTable data={vehicleServiceCompanyEmployeeList} owner={owner} {...this.props} />,
 
    
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="公司员工服务总览"
        content={summaryOf(this.props.companyEmployeeServing)}
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



