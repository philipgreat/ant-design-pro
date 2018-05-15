

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
import styles from './MemberServiceProduct.viewdetail.less'
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

const summaryOf = (memberServiceProduct) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{memberServiceProduct.id}</Description> 
<Description term="产品名称">{memberServiceProduct.productName}</Description> 
<Description term="产品描述">{memberServiceProduct.productDescription}</Description> 
<Description term="参加研讨会">{memberServiceProduct.joinWorkshop?'是':'否'}</Description> 
<Description term="制造车间">{memberServiceProduct.createWorkshop?'是':'否'}</Description> 
<Description term="借的书">{memberServiceProduct.borrowBook?'是':'否'}</Description> 
<Description term="超级贵宾">{memberServiceProduct.superVIP?'是':'否'}</Description> 
	
        
      </DescriptionList>
	)

}

class MemberServiceProductViewDetail extends Component {


  state = {
    tabKey: `memberServiceSkuList`,
    stepDirection: 'horizontal',
  }
 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
    const {MemberServiceSkuViewTable} = GlobalComponents;
    const {MemberCustomerViewTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    
    const memberServiceProduct = this.props.memberServiceProduct
    const { id, memberServiceSkuCount, memberCustomerCount } = memberServiceProduct
    const { memberServiceSkuList, memberCustomerList } = memberServiceProduct
    
    const owner = { type: '_memberServiceProduct', id }
    
    const tabList = [

      {key: 'memberServiceSkuList',tab: `会员服务Sku(${memberServiceSkuCount})`}, 
      {key: 'memberCustomerList',tab: `会员的客户(${memberCustomerCount})`}, 
   

   ];
   
   
    const contentList = {
       memberServiceSkuList:  
        <MemberServiceSkuViewTable data={memberServiceSkuList} owner={owner} {...this.props} />,
 
      memberCustomerList:  
        <MemberCustomerViewTable data={memberCustomerList} owner={owner} {...this.props} />,
 
    
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="会员服务产品总览"
        content={summaryOf(this.props.memberServiceProduct)}
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
  memberServiceProduct: state._memberServiceProduct,
}))(MemberServiceProductViewDetail)

