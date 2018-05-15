

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
import styles from './BorrowingExpiredSku.viewdetail.less'
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

const summaryOf = (borrowingExpiredSku) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{borrowingExpiredSku.id}</Description> 
<Description term="书的名字">{borrowingExpiredSku.bookName}</Description> 
<Description term="贷款Datetime">{ moment(borrowingExpiredSku.lendingDatetime).format('YYYY-MM-DD')}</Description> 
<Description term="返回日期时间">{ moment(borrowingExpiredSku.returnDatetime).format('YYYY-MM-DD')}</Description> 
<Description term="天到期">{borrowingExpiredSku.expiredDays}</Description> 
<Description term="过期的费用">{borrowingExpiredSku.expiredFee}</Description> 
<Description term="成本付款状态">{borrowingExpiredSku.costPaymentStatus}</Description> 
	
        
      </DescriptionList>
	)

}

class BorrowingExpiredSkuViewDetail extends Component {

 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
  
    // eslint-disable-next-line max-len
    
    const borrowingExpiredSku = this.props.borrowingExpiredSku
    const { id,  } = borrowingExpiredSku
    const {  } = borrowingExpiredSku
    
    const owner = { type: '_borrowingExpiredSku', id }
    
    const tabList = [

   

   ];
   
   
    const contentList = {
     
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="借款到期Sku总览"
        content={summaryOf(this.props.borrowingExpiredSku)}
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
  borrowingExpiredSku: state._borrowingExpiredSku,
}))(BorrowingExpiredSkuViewDetail)

