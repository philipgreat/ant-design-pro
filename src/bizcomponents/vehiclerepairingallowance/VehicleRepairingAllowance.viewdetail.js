

import React, { Component } from 'react'
import { connect } from 'dva'
import { Form,Button, Row, Col, Icon, Card, Tabs, Table, Radio, DatePicker, Tooltip, Menu, Dropdown } from 'antd'
import { Link, Route, Redirect, Switch } from 'dva/router'
import numeral from 'numeral'
import {
  ChartCard, yuan, MiniArea, MiniBar, MiniProgress, Field, Bar, Pie, TimelineChart,

} from '../../components/Charts'
import Trend from '../../components/Trend'
import NumberInfo from '../../components/NumberInfo'
import { getTimeDistance } from '../../utils/utils'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import styles from './VehicleRepairingAllowance.viewdetail.less'
import GlobalComponents from '../../custcomponents'
import DescriptionList from '../../components/DescriptionList';
const { Description } = DescriptionList;


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

const summaryOf = (vehicleRepairingAllowance) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{vehicleRepairingAllowance.id}</Description> 
<Description term="津贴标题">{vehicleRepairingAllowance.allowanceTitle}</Description> 
<Description term="补贴代码">{vehicleRepairingAllowance.allowanceCode}</Description> 
<Description term="补贴费用">{vehicleRepairingAllowance.allowanceAmount}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  vehicleRepairingAllowance: state._vehicleRepairingAllowance,
}))
export default class VehicleRepairingAllowanceViewDetail extends Component {


  state = {
    tabKey: `repairingQuotationItemList`,
    stepDirection: 'horizontal',
  }
 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
    const {RepairingQuotationItemViewTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    const { id, repairingQuotationItemCount } = this.props.vehicleRepairingAllowance
    const { repairingQuotationItemList } = this.props.vehicleRepairingAllowance
    
    const owner = { type: '_vehicleRepairingAllowance', id }
 
    
    const tabList = [

      {key: 'repairingQuotationItemList',tab: `维修报价项目(${repairingQuotationItemCount})`}, 
   

   ];
   
   
    const contentList = {
       repairingQuotationItemList:  
        <RepairingQuotationItemViewTable data={repairingQuotationItemList} owner={owner} {...this.props} />,
 
    
    };
    
    
    return (

      <PageHeaderLayout
        title="汽车修理平台补贴总览"
        content={summaryOf(this.props.vehicleRepairingAllowance)}
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



