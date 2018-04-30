

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
import styles from './Product.viewdetail.less'
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

const summaryOf = (product) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{product.id}</Description> 
<Description term="名称">{product.name}</Description> 
<Description term="代码">{product.code}</Description> 
<Description term="描述">{product.description}</Description> 
<Description term="蓝图">{product.bluePrint}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  product: state._product,
}))
export default class ProductViewDetail extends Component {


  state = {
    tabKey: `productComponentList`,
    stepDirection: 'horizontal',
  }
 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
    const {ProductComponentViewTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    
    const product = this.props.product
    const { id, productComponentCount } = product
    const { productComponentList } = product
    
    const owner = { type: '_product', id }
    
    const tabList = [

      {key: 'productComponentList',tab: `产品组件(${productComponentCount})`}, 
   

   ];
   
   
    const contentList = {
       productComponentList:  
        <ProductComponentViewTable data={productComponentList} owner={owner} {...this.props} />,
 
    
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="产品总览"
        content={summaryOf(this.props.product)}
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



