

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
import styles from './ProductComponent.viewdetail.less'
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

const summaryOf = (productComponent) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{productComponent.id}</Description> 
<Description term="名称">{productComponent.name}</Description> 
<Description term="代码">{productComponent.code}</Description> 
<Description term="蓝图">{productComponent.bluePrint}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  productComponent: state._productComponent,
}))
export default class ProductComponentViewDetail extends Component {


  state = {
    tabKey: `productPartList`,
    stepDirection: 'horizontal',
  }
 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
    const {ProductPartViewTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    
    const productComponent = this.props.productComponent
    const { id, productPartCount } = productComponent
    const { productPartList } = productComponent
    
    const owner = { type: '_productComponent', id }
    
    const tabList = [

      {key: 'productPartList',tab: `产品零件(${productPartCount})`}, 
   

   ];
   
   
    const contentList = {
       productPartList:  
        <ProductPartViewTable data={productPartList} owner={owner} {...this.props} />,
 
    
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="产品组件总览"
        content={summaryOf(this.props.productComponent)}
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



