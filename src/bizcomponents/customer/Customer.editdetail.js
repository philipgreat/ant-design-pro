

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
import styles from './Customer.editdetail.less'
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



class CustomerEditDetail extends Component {
  render() {
    const {BookCopyEditTable} = GlobalComponents;
    const {BorrowingHistoryEditTable} = GlobalComponents;
    const {BorrowingExpiredSkuEditTable} = GlobalComponents;
    const {BookReviewEditTable} = GlobalComponents;
    const {BookReviewLikeEditTable} = GlobalComponents;
    const {BookCopySharingApplicationEditTable} = GlobalComponents;
    const {CustomerAccountEditTable} = GlobalComponents;
    const {WorkshopRegisterHistoryEditTable} = GlobalComponents;
    const {WorkshopReviewEditTable} = GlobalComponents;
    const {WorkshopLikeEditTable} = GlobalComponents;
    const {MemberCustomerEditTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    const { id, bookCopyCount, borrowingHistoryCount, borrowingExpiredSkuCount, bookReviewCount, bookReviewLikeCount, bookCopySharingApplicationCount, customerAccountCount, workshopRegisterHistoryCount, workshopReviewCount, workshopLikeCount, memberCustomerCount } = this.props.customer
    const { bookCopyList, borrowingHistoryList, borrowingExpiredSkuList, bookReviewList, bookReviewLikeList, bookCopySharingApplicationList, customerAccountList, workshopRegisterHistoryList, workshopReviewList, workshopLikeList, memberCustomerList } = this.props.customer
    
    const owner = { type: '_customer', id }
    return (

      <PageHeaderLayout
        title="客户总览"
        content="客户总览"
        wrapperClassName={styles.advancedForm}
      >


		<Card title="书副本列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <BookCopyEditTable data={bookCopyList} owner={owner} {...this.props} />
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

		<Card title="这样的书评列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <BookReviewLikeEditTable data={bookReviewLikeList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="书副本共享应用程序列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <BookCopySharingApplicationEditTable data={bookCopySharingApplicationList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="客户账户列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <CustomerAccountEditTable data={customerAccountList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="车间登记历史列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <WorkshopRegisterHistoryEditTable data={workshopRegisterHistoryList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="车间检查列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <WorkshopReviewEditTable data={workshopReviewList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="车间等列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <WorkshopLikeEditTable data={workshopLikeList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="会员的客户列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <MemberCustomerEditTable data={memberCustomerList} owner={owner} {...this.props} />
          </Form>
        </Card>

 
      </PageHeaderLayout>
    )
  }
}
export default connect(state => ({
  customer: state._customer,
}))(CustomerEditDetail)


