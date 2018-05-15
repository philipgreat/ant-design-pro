

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
import styles from './MemberAccountRechargeSku.viewdetail.less'
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

const summaryOf = (memberAccountRechargeSku) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{memberAccountRechargeSku.id}</Description> 
<Description term="名称">{memberAccountRechargeSku.name}</Description> 
<Description term="描述">{memberAccountRechargeSku.description}</Description> 
<Description term="列出的价格">{memberAccountRechargeSku.listPrice}</Description> 
<Description term="销售价格">{memberAccountRechargeSku.salePrice}</Description> 
	
        
      </DescriptionList>
	)

}

class MemberAccountRechargeSkuViewDetail extends Component {

 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
  
    // eslint-disable-next-line max-len
    
    const memberAccountRechargeSku = this.props.memberAccountRechargeSku
    const { id,  } = memberAccountRechargeSku
    const {  } = memberAccountRechargeSku
    
    const owner = { type: '_memberAccountRechargeSku', id }
    
    const tabList = [

   

   ];
   
   
    const contentList = {
     
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="会员帐户Sku充电总览"
        content={summaryOf(this.props.memberAccountRechargeSku)}
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
  memberAccountRechargeSku: state._memberAccountRechargeSku,
}))(MemberAccountRechargeSkuViewDetail)

