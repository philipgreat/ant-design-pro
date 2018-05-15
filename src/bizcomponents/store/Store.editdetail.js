

import React, { Component } from 'react'
import { connect } from 'dva'
import { Form,Button, Row, Col, Icon, Card, Tabs, Table, Radio, DatePicker, Tooltip, Menu, Dropdown } from 'antd'
import { Link, Route, Redirect, Switch } from 'dva/router'
import numeral from 'numeral'
import {
  ChartCard, yuan, MiniArea, MiniBar, MiniProgress, Field, Bar, Pie, TimelineChart,

} from '../../components/Charts'
import Trend from '../../components/Trend'
import NumberInfo from '../../components/NumberInfo'
import { getTimeDistance } from '../../utils/utils'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import styles from './Store.editdetail.less'
import GlobalComponents from '../../custcomponents'



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



class StoreEditDetail extends Component {
  render() {
    const {BookCopyEditTable} = GlobalComponents;
    const {BookCopyCheckPlanEditTable} = GlobalComponents;
    const {BookCopyOperationRecordEditTable} = GlobalComponents;
    const {BorrowingHistoryEditTable} = GlobalComponents;
    const {BorrowingExpiredSkuEditTable} = GlobalComponents;
    const {BookCopySharingApplicationEditTable} = GlobalComponents;
    const {StoreAccountEditTable} = GlobalComponents;
    const {WorkshopEditTable} = GlobalComponents;
    const {EmployeeWorkingStoreEditTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    const { id, bookCopyCount, bookCopyCheckPlanCount, bookCopyOperationRecordCount, borrowingHistoryAsLendingStoreCount, borrowingHistoryAsReturnStoreCount, borrowingExpiredSkuAsLendingStoreCount, borrowingExpiredSkuAsReturnStoreCount, bookCopySharingApplicationCount, storeAccountCount, workshopCount, employeeWorkingStoreCount } = this.props.store
    const { bookCopyList, bookCopyCheckPlanList, bookCopyOperationRecordList, borrowingHistoryListAsLendingStore, borrowingHistoryListAsReturnStore, borrowingExpiredSkuListAsLendingStore, borrowingExpiredSkuListAsReturnStore, bookCopySharingApplicationList, storeAccountList, workshopList, employeeWorkingStoreList } = this.props.store
    
    const owner = { type: '_store', id }
    return (

      <PageHeaderLayout
        title="商店总览"
        content="商店总览"
        wrapperClassName={styles.advancedForm}
      >


		<Card title="书副本列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <BookCopyEditTable data={bookCopyList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="书副本检查计划列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <BookCopyCheckPlanEditTable data={bookCopyCheckPlanList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="书复制操作记录列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <BookCopyOperationRecordEditTable data={bookCopyOperationRecordList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="借贷历史列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <BorrowingHistoryEditTable data={borrowingHistoryListAsLendingStore} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="借款到期Sku列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <BorrowingExpiredSkuEditTable data={borrowingExpiredSkuListAsLendingStore} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="书副本共享应用程序列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <BookCopySharingApplicationEditTable data={bookCopySharingApplicationList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="存储账户列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <StoreAccountEditTable data={storeAccountList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="车间列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <WorkshopEditTable data={workshopList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="员工工作的商店列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <EmployeeWorkingStoreEditTable data={employeeWorkingStoreList} owner={owner} {...this.props} />
          </Form>
        </Card>

 
      </PageHeaderLayout>
    )
  }
}
export default connect(state => ({
  store: state._store,
}))(StoreEditDetail)


