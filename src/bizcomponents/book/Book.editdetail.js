

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
import styles from './Book.editdetail.less'
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



class BookEditDetail extends Component {
  render() {
    const {BookTagRecordEditTable} = GlobalComponents;
    const {BookCopyEditTable} = GlobalComponents;
    const {BookCopySkuEditTable} = GlobalComponents;
    const {BorrowingHistoryEditTable} = GlobalComponents;
    const {BorrowingExpiredSkuEditTable} = GlobalComponents;
    const {BookReviewEditTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    const { id, bookTagRecordCount, bookCopyCount, bookCopySkuCount, borrowingHistoryCount, borrowingExpiredSkuCount, bookReviewCount } = this.props.book
    const { bookTagRecordList, bookCopyList, bookCopySkuList, borrowingHistoryList, borrowingExpiredSkuList, bookReviewList } = this.props.book
    
    const owner = { type: '_book', id }
    return (

      <PageHeaderLayout
        title="书总览"
        content="书总览"
        wrapperClassName={styles.advancedForm}
      >


		<Card title="书标签记录列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <BookTagRecordEditTable data={bookTagRecordList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="书副本列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <BookCopyEditTable data={bookCopyList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="书副本Sku列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <BookCopySkuEditTable data={bookCopySkuList} owner={owner} {...this.props} />
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
  book: state._book,
}))(BookEditDetail)


