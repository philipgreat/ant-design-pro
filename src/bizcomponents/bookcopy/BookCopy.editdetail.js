

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
import styles from './BookCopy.editdetail.less'
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



class BookCopyEditDetail extends Component {
  render() {
    const {BookTagRecordEditTable} = GlobalComponents;
    const {BookCopySkuEditTable} = GlobalComponents;
    const {BookCopyCheckRecordEditTable} = GlobalComponents;
    const {BookCopyOperationRecordEditTable} = GlobalComponents;
    const {BorrowingHistoryEditTable} = GlobalComponents;
    const {BorrowingExpiredSkuEditTable} = GlobalComponents;
    const {BookReviewEditTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    const { id, bookTagRecordCount, bookCopySkuCount, bookCopyCheckRecordCount, bookCopyOperationRecordCount, borrowingHistoryCount, borrowingExpiredSkuCount, bookReviewCount } = this.props.bookCopy
    const { bookTagRecordList, bookCopySkuList, bookCopyCheckRecordList, bookCopyOperationRecordList, borrowingHistoryList, borrowingExpiredSkuList, bookReviewList } = this.props.bookCopy
    
    const owner = { type: '_bookCopy', id }
    return (

      <PageHeaderLayout
        title="书副本总览"
        content="书副本总览"
        wrapperClassName={styles.advancedForm}
      >


		<Card title="书标签记录列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <BookTagRecordEditTable data={bookTagRecordList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="书副本Sku列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <BookCopySkuEditTable data={bookCopySkuList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="书副本检查记录列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <BookCopyCheckRecordEditTable data={bookCopyCheckRecordList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="书复制操作记录列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <BookCopyOperationRecordEditTable data={bookCopyOperationRecordList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="借贷历史列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <BorrowingHistoryEditTable data={borrowingHistoryList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="借款到期Sku列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <BorrowingExpiredSkuEditTable data={borrowingExpiredSkuList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="书评列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <BookReviewEditTable data={bookReviewList} owner={owner} {...this.props} />
          </Form>
        </Card>

 
      </PageHeaderLayout>
    )
  }
}
export default connect(state => ({
  bookCopy: state._bookCopy,
}))(BookCopyEditDetail)


