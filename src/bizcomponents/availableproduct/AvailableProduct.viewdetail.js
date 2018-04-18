

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
import styles from './AvailableProduct.viewdetail.less'
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

const summaryOf = (availableProduct) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{availableProduct.id}</Description> 
<Description term="产品名称">{availableProduct.productName}</Description> 
<Description term="服务代码">{availableProduct.serviceKey}</Description> 
<Description term="服务描述">{availableProduct.serviceDescription}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  availableProduct: state._availableProduct,
}))
export default class AvailableProductViewDetail extends Component {


  state = {
    tabKey: `servicePriceList`,
    stepDirection: 'horizontal',
  }
 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
    const {ServicePriceViewTable} = GlobalComponents;
    const {AvailableServiceViewTable} = GlobalComponents;
    const {ProductPriceViewTable} = GlobalComponents;
    const {AvailableInsuranceViewTable} = GlobalComponents;
    const {AvailableHandOverItemViewTable} = GlobalComponents;
    const {PreorderPromotionViewTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    
    const availableProduct = this.props.availableProduct
    const { id, servicePriceCount, availableServiceCount, productPriceCount, availableInsuranceCount, availableHandOverItemCount, preorderPromotionCount } = availableProduct
    const { servicePriceList, availableServiceList, productPriceList, availableInsuranceList, availableHandOverItemList, preorderPromotionList } = availableProduct
    
    const owner = { type: '_availableProduct', id }
    
    const tabList = [

      {key: 'servicePriceList',tab: `服务价格(${servicePriceCount})`}, 
      {key: 'availableServiceList',tab: `服务范围(${availableServiceCount})`}, 
      {key: 'productPriceList',tab: `产品价格(${productPriceCount})`}, 
      {key: 'availableInsuranceList',tab: `车辆代办保险(${availableInsuranceCount})`}, 
      {key: 'availableHandOverItemList',tab: `交接检查项(${availableHandOverItemCount})`}, 
      {key: 'preorderPromotionList',tab: `提前下单优惠(${preorderPromotionCount})`}, 
   

   ];
   
   
    const contentList = {
       servicePriceList:  
        <ServicePriceViewTable data={servicePriceList} owner={owner} {...this.props} />,
 
      availableServiceList:  
        <AvailableServiceViewTable data={availableServiceList} owner={owner} {...this.props} />,
 
      productPriceList:  
        <ProductPriceViewTable data={productPriceList} owner={owner} {...this.props} />,
 
      availableInsuranceList:  
        <AvailableInsuranceViewTable data={availableInsuranceList} owner={owner} {...this.props} />,
 
      availableHandOverItemList:  
        <AvailableHandOverItemViewTable data={availableHandOverItemList} owner={owner} {...this.props} />,
 
      preorderPromotionList:  
        <PreorderPromotionViewTable data={preorderPromotionList} owner={owner} {...this.props} />,
 
    
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="产品类型总览"
        content={summaryOf(this.props.availableProduct)}
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



