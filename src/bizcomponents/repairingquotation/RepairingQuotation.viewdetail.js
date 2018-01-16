

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
import styles from './RepairingQuotation.viewdetail.less'
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

const summaryOf = (repairingQuotation) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{repairingQuotation.id}</Description> 
<Description term="维修报价描述">{repairingQuotation.repairingQuotationDescription}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  repairingQuotation: state._repairingQuotation,
}))
export default class RepairingQuotationViewDetail extends Component {


  state = {
    tabKey: `repairingQuotationItemList`,
    stepDirection: 'horizontal',
  }
 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
    const {RepairingQuotationItemViewTable} = GlobalComponents;
    const {VehicleRepairingPaymentViewTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    const { id, repairingQuotationItemCount, vehicleRepairingPaymentCount } = this.props.repairingQuotation
    const { repairingQuotationItemList, vehicleRepairingPaymentList } = this.props.repairingQuotation
    
    const owner = { type: '_repairingQuotation', id }
 
    
    const tabList = [

      {key: 'repairingQuotationItemList',tab: `维修报价项目(${repairingQuotationItemCount})`}, 
      {key: 'vehicleRepairingPaymentList',tab: `修理付款(${vehicleRepairingPaymentCount})`}, 
   

   ];
   
   
    const contentList = {
       repairingQuotationItemList:  
        <RepairingQuotationItemViewTable data={repairingQuotationItemList} owner={owner} {...this.props} />,
 
      vehicleRepairingPaymentList:  
        <VehicleRepairingPaymentViewTable data={vehicleRepairingPaymentList} owner={owner} {...this.props} />,
 
    
    };
    
    
    return (

      <PageHeaderLayout
        title="维修报价总览"
        content={summaryOf(this.props.repairingQuotation)}
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



