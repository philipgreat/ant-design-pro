

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
import styles from './BookCopySharingApplication.viewdetail.less'
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

const summaryOf = (bookCopySharingApplication) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{bookCopySharingApplication.id}</Description> 
<Description term="书副本数量">{bookCopySharingApplication.bookCopyQuantity}</Description> 
<Description term="书副本Image1">{bookCopySharingApplication.bookCopyImage1}</Description> 
<Description term="书副本Image2">{bookCopySharingApplication.bookCopyImage2}</Description> 
<Description term="书副本Image3">{bookCopySharingApplication.bookCopyImage3}</Description> 
<Description term="书副本Image4">{bookCopySharingApplication.bookCopyImage4}</Description> 
<Description term="书副本Image5">{bookCopySharingApplication.bookCopyImage5}</Description> 
<Description term="提供的方法">{bookCopySharingApplication.deliverMethod}</Description> 
<Description term="联系地址">{bookCopySharingApplication.contactAddress}</Description> 
<Description term="联系人姓名">{bookCopySharingApplication.contactName}</Description> 
<Description term="联系手机">{bookCopySharingApplication.contactMobile}</Description> 
<Description term="状态">{bookCopySharingApplication.status}</Description> 
	
        
      </DescriptionList>
	)

}

class BookCopySharingApplicationViewDetail extends Component {

 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
  
    // eslint-disable-next-line max-len
    
    const bookCopySharingApplication = this.props.bookCopySharingApplication
    const { id,  } = bookCopySharingApplication
    const {  } = bookCopySharingApplication
    
    const owner = { type: '_bookCopySharingApplication', id }
    
    const tabList = [

   

   ];
   
   
    const contentList = {
     
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="书副本共享应用程序总览"
        content={summaryOf(this.props.bookCopySharingApplication)}
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
  bookCopySharingApplication: state._bookCopySharingApplication,
}))(BookCopySharingApplicationViewDetail)

