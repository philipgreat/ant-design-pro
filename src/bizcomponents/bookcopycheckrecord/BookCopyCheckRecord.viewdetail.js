

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
import styles from './BookCopyCheckRecord.viewdetail.less'
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

const summaryOf = (bookCopyCheckRecord) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{bookCopyCheckRecord.id}</Description> 
<Description term="书副本检查Datetime">{ moment(bookCopyCheckRecord.bookCopyCheckDatetime).format('YYYY-MM-DD')}</Description> 
<Description term="检查过程的结果">{bookCopyCheckRecord.checkProcessResults}</Description> 
<Description term="检查过程Datetime">{ moment(bookCopyCheckRecord.checkProcessDatetime).format('YYYY-MM-DD')}</Description> 
	
        
      </DescriptionList>
	)

}

class BookCopyCheckRecordViewDetail extends Component {

 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
  
    // eslint-disable-next-line max-len
    
    const bookCopyCheckRecord = this.props.bookCopyCheckRecord
    const { id,  } = bookCopyCheckRecord
    const {  } = bookCopyCheckRecord
    
    const owner = { type: '_bookCopyCheckRecord', id }
    
    const tabList = [

   

   ];
   
   
    const contentList = {
     
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="书副本检查记录总览"
        content={summaryOf(this.props.bookCopyCheckRecord)}
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
  bookCopyCheckRecord: state._bookCopyCheckRecord,
}))(BookCopyCheckRecordViewDetail)

