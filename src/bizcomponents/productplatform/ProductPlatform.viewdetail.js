

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
import styles from './ProductPlatform.viewdetail.less'
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

const summaryOf = (productPlatform) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{productPlatform.id}</Description> 
<Description term="名称">{productPlatform.name}</Description> 
<Description term="描述">{productPlatform.description}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  productPlatform: state._productPlatform,
}))
export default class ProductPlatformViewDetail extends Component {


  state = {
    tabKey: `productList`,
    stepDirection: 'horizontal',
  }
 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
    const {ProductViewTable} = GlobalComponents;
    const {MaterialViewTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    
    const productPlatform = this.props.productPlatform
    const { id, productCount, materialCount } = productPlatform
    const { productList, materialList } = productPlatform
    
    const owner = { type: '_productPlatform', id }
    
    const tabList = [

      {key: 'productList',tab: `产品(${productCount})`}, 
      {key: 'materialList',tab: `材料(${materialCount})`}, 
   

   ];
   
   
    const contentList = {
       productList:  
        <ProductViewTable data={productList} owner={owner} {...this.props} />,
 
      materialList:  
        <MaterialViewTable data={materialList} owner={owner} {...this.props} />,
 
    
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="产品平台总览"
        content={summaryOf(this.props.productPlatform)}
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



