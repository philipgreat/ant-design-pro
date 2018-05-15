

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
import styles from './MainOrderPayment.viewdetail.less'
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

const summaryOf = (mainOrderPayment) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{mainOrderPayment.id}</Description> 
<Description term="支付方式">{mainOrderPayment.paymentMethod}</Description> 
<Description term="原始金额">{mainOrderPayment.originalAmount}</Description> 
<Description term="实际的数量">{mainOrderPayment.actualAmount}</Description> 
<Description term="付款状态">{mainOrderPayment.paymentStatus}</Description> 
<Description term="微信主要订单Id">{mainOrderPayment.wechatMainOrderId}</Description> 
<Description term="Wechat提前支付Id">{mainOrderPayment.wechatPrepayId}</Description> 
<Description term="创建时间">{ moment(mainOrderPayment.createTime).format('YYYY-MM-DD')}</Description> 
<Description term="最后更新时间">{ moment(mainOrderPayment.lastUpdateTime).format('YYYY-MM-DD')}</Description> 
	
        
      </DescriptionList>
	)

}

class MainOrderPaymentViewDetail extends Component {

 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
  
    // eslint-disable-next-line max-len
    
    const mainOrderPayment = this.props.mainOrderPayment
    const { id,  } = mainOrderPayment
    const {  } = mainOrderPayment
    
    const owner = { type: '_mainOrderPayment', id }
    
    const tabList = [

   

   ];
   
   
    const contentList = {
     
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="主要订单付款总览"
        content={summaryOf(this.props.mainOrderPayment)}
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
  mainOrderPayment: state._mainOrderPayment,
}))(MainOrderPaymentViewDetail)

