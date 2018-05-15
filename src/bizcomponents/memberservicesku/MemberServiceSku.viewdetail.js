

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
import styles from './MemberServiceSku.viewdetail.less'
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

const summaryOf = (memberServiceSku) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{memberServiceSku.id}</Description> 
<Description term="名称">{memberServiceSku.name}</Description> 
<Description term="描述">{memberServiceSku.description}</Description> 
<Description term="列出的价格">{memberServiceSku.listPrice}</Description> 
<Description term="销售价格">{memberServiceSku.salePrice}</Description> 
	
        
      </DescriptionList>
	)

}

class MemberServiceSkuViewDetail extends Component {


  state = {
    tabKey: `memberCustomerList`,
    stepDirection: 'horizontal',
  }
 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
    const {MemberCustomerViewTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    
    const memberServiceSku = this.props.memberServiceSku
    const { id, memberCustomerCount } = memberServiceSku
    const { memberCustomerList } = memberServiceSku
    
    const owner = { type: '_memberServiceSku', id }
    
    const tabList = [

      {key: 'memberCustomerList',tab: `会员的客户(${memberCustomerCount})`}, 
   

   ];
   
   
    const contentList = {
       memberCustomerList:  
        <MemberCustomerViewTable data={memberCustomerList} owner={owner} {...this.props} />,
 
    
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="会员服务Sku总览"
        content={summaryOf(this.props.memberServiceSku)}
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
  memberServiceSku: state._memberServiceSku,
}))(MemberServiceSkuViewDetail)

