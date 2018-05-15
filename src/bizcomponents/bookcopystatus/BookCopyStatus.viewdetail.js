

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
import styles from './BookCopyStatus.viewdetail.less'
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

const summaryOf = (bookCopyStatus) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{bookCopyStatus.id}</Description> 
<Description term="地位的名字">{bookCopyStatus.statusName}</Description> 
<Description term="状态码">{bookCopyStatus.statusCode}</Description> 
<Description term="状态描述">{bookCopyStatus.statusDescription}</Description> 
<Description term="可以借">{bookCopyStatus.canBorrow?'是':'否'}</Description> 
<Description term="需要检查股票">{bookCopyStatus.needCheckStock?'是':'否'}</Description> 
	
        
      </DescriptionList>
	)

}

class BookCopyStatusViewDetail extends Component {


  state = {
    tabKey: `bookCopyList`,
    stepDirection: 'horizontal',
  }
 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
    const {BookCopyViewTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    
    const bookCopyStatus = this.props.bookCopyStatus
    const { id, bookCopyCount } = bookCopyStatus
    const { bookCopyList } = bookCopyStatus
    
    const owner = { type: '_bookCopyStatus', id }
    
    const tabList = [

      {key: 'bookCopyList',tab: `书副本(${bookCopyCount})`}, 
   

   ];
   
   
    const contentList = {
       bookCopyList:  
        <BookCopyViewTable data={bookCopyList} owner={owner} {...this.props} />,
 
    
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="书副本地位总览"
        content={summaryOf(this.props.bookCopyStatus)}
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
  bookCopyStatus: state._bookCopyStatus,
}))(BookCopyStatusViewDetail)

