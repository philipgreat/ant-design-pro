

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
import styles from './MemberAccountRechargeProduct.viewdetail.less'
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

const summaryOf = (memberAccountRechargeProduct) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{memberAccountRechargeProduct.id}</Description> 
<Description term="名称">{memberAccountRechargeProduct.name}</Description> 
	
        
      </DescriptionList>
	)

}

class MemberAccountRechargeProductViewDetail extends Component {


  state = {
    tabKey: `memberAccountRechargeSkuList`,
    stepDirection: 'horizontal',
  }
 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
    const {MemberAccountRechargeSkuViewTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    
    const memberAccountRechargeProduct = this.props.memberAccountRechargeProduct
    const { id, memberAccountRechargeSkuCount } = memberAccountRechargeProduct
    const { memberAccountRechargeSkuList } = memberAccountRechargeProduct
    
    const owner = { type: '_memberAccountRechargeProduct', id }
    
    const tabList = [

      {key: 'memberAccountRechargeSkuList',tab: `会员帐户Sku充电(${memberAccountRechargeSkuCount})`}, 
   

   ];
   
   
    const contentList = {
       memberAccountRechargeSkuList:  
        <MemberAccountRechargeSkuViewTable data={memberAccountRechargeSkuList} owner={owner} {...this.props} />,
 
    
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="会员帐户充电产品总览"
        content={summaryOf(this.props.memberAccountRechargeProduct)}
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
  memberAccountRechargeProduct: state._memberAccountRechargeProduct,
}))(MemberAccountRechargeProductViewDetail)

