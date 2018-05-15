

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
import styles from './Store.viewdetail.less'
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

const summaryOf = (store) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{store.id}</Description> 
<Description term="商店的名字">{store.storeName}</Description> 
<Description term="存储地址">{store.storeAddress}</Description> 
<Description term="经度">{store.longitude}</Description> 
<Description term="纬度">{store.latitude}</Description> 
<Description term="商店形象">{store.storeImage}</Description> 
<Description term="存储类型">{store.storeType}</Description> 
	
        
      </DescriptionList>
	)

}

class StoreViewDetail extends Component {


  state = {
    tabKey: `bookCopyList`,
    stepDirection: 'horizontal',
  }
 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
    const {BookCopyViewTable} = GlobalComponents;
    const {BookCopyCheckPlanViewTable} = GlobalComponents;
    const {BookCopyOperationRecordViewTable} = GlobalComponents;
    const {BorrowingHistoryViewTable} = GlobalComponents;
    const {BorrowingExpiredSkuViewTable} = GlobalComponents;
    const {BookCopySharingApplicationViewTable} = GlobalComponents;
    const {StoreAccountViewTable} = GlobalComponents;
    const {WorkshopViewTable} = GlobalComponents;
    const {EmployeeWorkingStoreViewTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    
    const store = this.props.store
    const { id, bookCopyCount, bookCopyCheckPlanCount, bookCopyOperationRecordCount, borrowingHistoryAsLendingStoreCount, borrowingHistoryAsReturnStoreCount, borrowingExpiredSkuAsLendingStoreCount, borrowingExpiredSkuAsReturnStoreCount, bookCopySharingApplicationCount, storeAccountCount, workshopCount, employeeWorkingStoreCount } = store
    const { bookCopyList, bookCopyCheckPlanList, bookCopyOperationRecordList, borrowingHistoryListAsLendingStore, borrowingHistoryListAsReturnStore, borrowingExpiredSkuListAsLendingStore, borrowingExpiredSkuListAsReturnStore, bookCopySharingApplicationList, storeAccountList, workshopList, employeeWorkingStoreList } = store
    
    const owner = { type: '_store', id }
    
    const tabList = [

      {key: 'bookCopyList',tab: `书副本(${bookCopyCount})`}, 
      {key: 'bookCopyCheckPlanList',tab: `书副本检查计划(${bookCopyCheckPlanCount})`}, 
      {key: 'bookCopyOperationRecordList',tab: `书复制操作记录(${bookCopyOperationRecordCount})`}, 
      {key: 'borrowingHistoryListAsLendingStore',tab: `借贷历史(${borrowingHistoryAsLendingStoreCount})`}, 
      {key: 'borrowingHistoryListAsReturnStore',tab: `借贷历史(${borrowingHistoryAsReturnStoreCount})`}, 
      {key: 'borrowingExpiredSkuListAsLendingStore',tab: `借款到期Sku(${borrowingExpiredSkuAsLendingStoreCount})`}, 
      {key: 'borrowingExpiredSkuListAsReturnStore',tab: `借款到期Sku(${borrowingExpiredSkuAsReturnStoreCount})`}, 
      {key: 'bookCopySharingApplicationList',tab: `书副本共享应用程序(${bookCopySharingApplicationCount})`}, 
      {key: 'storeAccountList',tab: `存储账户(${storeAccountCount})`}, 
      {key: 'workshopList',tab: `车间(${workshopCount})`}, 
      {key: 'employeeWorkingStoreList',tab: `员工工作的商店(${employeeWorkingStoreCount})`}, 
   

   ];
   
   
    const contentList = {
       bookCopyList:  
        <BookCopyViewTable data={bookCopyList} owner={owner} {...this.props} />,
 
      bookCopyCheckPlanList:  
        <BookCopyCheckPlanViewTable data={bookCopyCheckPlanList} owner={owner} {...this.props} />,
 
      bookCopyOperationRecordList:  
        <BookCopyOperationRecordViewTable data={bookCopyOperationRecordList} owner={owner} {...this.props} />,
 
      borrowingHistoryListAsLendingStore:  
        <BorrowingHistoryViewTable data={borrowingHistoryListAsLendingStore} owner={owner} {...this.props} />,
 
      borrowingHistoryListAsReturnStore:  
        <BorrowingHistoryViewTable data={borrowingHistoryListAsReturnStore} owner={owner} {...this.props} />,
 
      borrowingExpiredSkuListAsLendingStore:  
        <BorrowingExpiredSkuViewTable data={borrowingExpiredSkuListAsLendingStore} owner={owner} {...this.props} />,
 
      borrowingExpiredSkuListAsReturnStore:  
        <BorrowingExpiredSkuViewTable data={borrowingExpiredSkuListAsReturnStore} owner={owner} {...this.props} />,
 
      bookCopySharingApplicationList:  
        <BookCopySharingApplicationViewTable data={bookCopySharingApplicationList} owner={owner} {...this.props} />,
 
      storeAccountList:  
        <StoreAccountViewTable data={storeAccountList} owner={owner} {...this.props} />,
 
      workshopList:  
        <WorkshopViewTable data={workshopList} owner={owner} {...this.props} />,
 
      employeeWorkingStoreList:  
        <EmployeeWorkingStoreViewTable data={employeeWorkingStoreList} owner={owner} {...this.props} />,
 
    
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="商店总览"
        content={summaryOf(this.props.store)}
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
  store: state._store,
}))(StoreViewDetail)

