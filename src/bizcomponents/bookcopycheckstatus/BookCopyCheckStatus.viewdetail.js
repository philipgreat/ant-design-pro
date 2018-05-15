

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
import styles from './BookCopyCheckStatus.viewdetail.less'
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

const summaryOf = (bookCopyCheckStatus) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{bookCopyCheckStatus.id}</Description> 
<Description term="名称">{bookCopyCheckStatus.name}</Description> 
	
        
      </DescriptionList>
	)

}

class BookCopyCheckStatusViewDetail extends Component {


  state = {
    tabKey: `bookCopyCheckRecordList`,
    stepDirection: 'horizontal',
  }
 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
    const {BookCopyCheckRecordViewTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    
    const bookCopyCheckStatus = this.props.bookCopyCheckStatus
    const { id, bookCopyCheckRecordCount } = bookCopyCheckStatus
    const { bookCopyCheckRecordList } = bookCopyCheckStatus
    
    const owner = { type: '_bookCopyCheckStatus', id }
    
    const tabList = [

      {key: 'bookCopyCheckRecordList',tab: `书副本检查记录(${bookCopyCheckRecordCount})`}, 
   

   ];
   
   
    const contentList = {
       bookCopyCheckRecordList:  
        <BookCopyCheckRecordViewTable data={bookCopyCheckRecordList} owner={owner} {...this.props} />,
 
    
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="书副本检查状态总览"
        content={summaryOf(this.props.bookCopyCheckStatus)}
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
  bookCopyCheckStatus: state._bookCopyCheckStatus,
}))(BookCopyCheckStatusViewDetail)

