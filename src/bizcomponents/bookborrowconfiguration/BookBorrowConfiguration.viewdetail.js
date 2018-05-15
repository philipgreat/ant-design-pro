

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
import styles from './BookBorrowConfiguration.viewdetail.less'
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

const summaryOf = (bookBorrowConfiguration) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{bookBorrowConfiguration.id}</Description> 
<Description term="马克斯借数量">{bookBorrowConfiguration.maxBorrowQuantity}</Description> 
<Description term="自由借贷天">{bookBorrowConfiguration.freeLendingDays}</Description> 
<Description term="贷款支付率">{bookBorrowConfiguration.lendingPayRate}</Description> 
	
        
      </DescriptionList>
	)

}

class BookBorrowConfigurationViewDetail extends Component {

 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
  
    // eslint-disable-next-line max-len
    
    const bookBorrowConfiguration = this.props.bookBorrowConfiguration
    const { id,  } = bookBorrowConfiguration
    const {  } = bookBorrowConfiguration
    
    const owner = { type: '_bookBorrowConfiguration', id }
    
    const tabList = [

   

   ];
   
   
    const contentList = {
     
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="书借配置总览"
        content={summaryOf(this.props.bookBorrowConfiguration)}
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
  bookBorrowConfiguration: state._bookBorrowConfiguration,
}))(BookBorrowConfigurationViewDetail)

