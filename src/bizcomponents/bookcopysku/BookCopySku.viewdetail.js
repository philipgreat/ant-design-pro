

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
import styles from './BookCopySku.viewdetail.less'
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

const summaryOf = (bookCopySku) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{bookCopySku.id}</Description> 
<Description term="书的名字">{bookCopySku.bookName}</Description> 
<Description term="书的封面">{bookCopySku.bookCover}</Description> 
<Description term="书的作者">{bookCopySku.bookAuthor}</Description> 
<Description term="图书出版者">{bookCopySku.bookPublisher}</Description> 
<Description term="书的作用">{ moment(bookCopySku.bookPubdate).format('YYYY-MM-DD')}</Description> 
<Description term="列出的价格">{bookCopySku.listPrice}</Description> 
<Description term="评估价格">{bookCopySku.evaluationPrice}</Description> 
<Description term="书Isbn13">{bookCopySku.bookIsbn13}</Description> 
<Description term="书Isbn10">{bookCopySku.bookIsbn10}</Description> 
<Description term="书的地位">{bookCopySku.bookStatus}</Description> 
	
        
      </DescriptionList>
	)

}

class BookCopySkuViewDetail extends Component {

 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
  
    // eslint-disable-next-line max-len
    
    const bookCopySku = this.props.bookCopySku
    const { id,  } = bookCopySku
    const {  } = bookCopySku
    
    const owner = { type: '_bookCopySku', id }
    
    const tabList = [

   

   ];
   
   
    const contentList = {
     
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="书副本Sku总览"
        content={summaryOf(this.props.bookCopySku)}
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
  bookCopySku: state._bookCopySku,
}))(BookCopySkuViewDetail)

