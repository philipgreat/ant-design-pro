

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
import styles from './AvailableProduct.viewdetail.less'
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

const summaryOf = (availableProduct) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{availableProduct.id}</Description> 
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
    tabKey: `availableServiceList`,
    stepDirection: 'horizontal',
  }
 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
    const {AvailableServiceViewTable} = GlobalComponents;
    const {ProductPriceViewTable} = GlobalComponents;
    const {AvailableInsuranceViewTable} = GlobalComponents;
    const {AvailableHandOverItemViewTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    const { id, availableServiceCount, productPriceCount, availableInsuranceCount, availableHandOverItemCount } = this.props.availableProduct
    const { availableServiceList, productPriceList, availableInsuranceList, availableHandOverItemList } = this.props.availableProduct
    
    const owner = { type: '_availableProduct', id }
 
    
    const tabList = [

      {key: 'availableServiceList',tab: `服务范围(${availableServiceCount})`}, 
      {key: 'productPriceList',tab: `产品价格(${productPriceCount})`}, 
      {key: 'availableInsuranceList',tab: `保险增值服务(${availableInsuranceCount})`}, 
      {key: 'availableHandOverItemList',tab: `交接检查清单(${availableHandOverItemCount})`}, 
   

   ];
   
   
    const contentList = {
       availableServiceList:  
        <AvailableServiceViewTable data={availableServiceList} owner={owner} {...this.props} />,
 
      productPriceList:  
        <ProductPriceViewTable data={productPriceList} owner={owner} {...this.props} />,
 
      availableInsuranceList:  
        <AvailableInsuranceViewTable data={availableInsuranceList} owner={owner} {...this.props} />,
 
      availableHandOverItemList:  
        <AvailableHandOverItemViewTable data={availableHandOverItemList} owner={owner} {...this.props} />,
 
    
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



