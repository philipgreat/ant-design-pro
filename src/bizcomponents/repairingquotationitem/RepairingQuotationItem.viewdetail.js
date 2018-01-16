

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
import styles from './RepairingQuotationItem.viewdetail.less'
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

const summaryOf = (repairingQuotationItem) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{repairingQuotationItem.id}</Description> 
<Description term="修理物品的名称">{repairingQuotationItem.repairingItemName}</Description> 
<Description term="修理项目描述">{repairingQuotationItem.repairingItemDescription}</Description> 
<Description term="修理物品的价格">{repairingQuotationItem.repairingItemPrice}</Description> 
<Description term="修理物品图片1">{repairingQuotationItem.repairingItemImage1}</Description> 
<Description term="修理物品图片2">{repairingQuotationItem.repairingItemImage2}</Description> 
<Description term="修理物品图片3">{repairingQuotationItem.repairingItemImage3}</Description> 
<Description term="修理物品图片4">{repairingQuotationItem.repairingItemImage4}</Description> 
<Description term="修理物品图片5">{repairingQuotationItem.repairingItemImage5}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  repairingQuotationItem: state._repairingQuotationItem,
}))
export default class RepairingQuotationItemViewDetail extends Component {

 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
  
    // eslint-disable-next-line max-len
    const { id,  } = this.props.repairingQuotationItem
    const {  } = this.props.repairingQuotationItem
    
    const owner = { type: '_repairingQuotationItem', id }
 
    
    const tabList = [

   

   ];
   
   
    const contentList = {
     
    };
    
    
    return (

      <PageHeaderLayout
        title="维修报价项目总览"
        content={summaryOf(this.props.repairingQuotationItem)}
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



