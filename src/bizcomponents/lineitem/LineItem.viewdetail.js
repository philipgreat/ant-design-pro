

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
import styles from './LineItem.viewdetail.less'
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

const summaryOf = (lineItem) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{lineItem.id}</Description> 
<Description term="名称">{lineItem.name}</Description> 
<Description term="总结">{lineItem.summary}</Description> 
<Description term="列出的价格">{lineItem.listPrice}</Description> 
<Description term="销售价格">{lineItem.salePrice}</Description> 
<Description term="Sku类型">{lineItem.skuType}</Description> 
<Description term="Sku Id">{lineItem.skuId}</Description> 
<Description term="Sku链接">{lineItem.skuLink}</Description> 
<Description term="商品折扣">{lineItem.itemDiscount}</Description> 
<Description term="项目调整">{lineItem.itemAdjustment}</Description> 
	
        
      </DescriptionList>
	)

}

class LineItemViewDetail extends Component {

 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
  
    // eslint-disable-next-line max-len
    
    const lineItem = this.props.lineItem
    const { id,  } = lineItem
    const {  } = lineItem
    
    const owner = { type: '_lineItem', id }
    
    const tabList = [

   

   ];
   
   
    const contentList = {
     
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="行项目总览"
        content={summaryOf(this.props.lineItem)}
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
  lineItem: state._lineItem,
}))(LineItemViewDetail)

