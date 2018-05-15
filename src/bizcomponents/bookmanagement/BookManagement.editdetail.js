

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
import styles from './BookManagement.editdetail.less'
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



class BookManagementEditDetail extends Component {
  render() {
    const {BookTagRecordEditTable} = GlobalComponents;
    const {BookCopySharingBenefitConfigurationEditTable} = GlobalComponents;
    const {BookCopyDonateBenefitConfigurationEditTable} = GlobalComponents;
    const {BookBorrowConfigurationEditTable} = GlobalComponents;
    const {BookEditTable} = GlobalComponents;
    const {BookCopyStatusEditTable} = GlobalComponents;
    const {BookCopySkuEditTable} = GlobalComponents;
    const {BookCopyCheckPlanEditTable} = GlobalComponents;
    const {BookCopyCheckStatusEditTable} = GlobalComponents;
    const {BookReviewTypeEditTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    const { id, bookTagRecordCount, bookCopySharingBenefitConfigurationCount, bookCopyDonateBenefitConfigurationCount, bookBorrowConfigurationCount, bookCount, bookCopyStatusCount, bookCopySkuCount, bookCopyCheckPlanCount, bookCopyCheckStatusCount, bookReviewTypeCount } = this.props.bookManagement
    const { bookTagRecordList, bookCopySharingBenefitConfigurationList, bookCopyDonateBenefitConfigurationList, bookBorrowConfigurationList, bookList, bookCopyStatusList, bookCopySkuList, bookCopyCheckPlanList, bookCopyCheckStatusList, bookReviewTypeList } = this.props.bookManagement
    
    const owner = { type: '_bookManagement', id }
    return (

      <PageHeaderLayout
        title="图书管理总览"
        content="图书管理总览"
        wrapperClassName={styles.advancedForm}
      >


		<Card title="书标签记录列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <BookTagRecordEditTable data={bookTagRecordList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="图书拷贝共享利益配置。列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <BookCopySharingBenefitConfigurationEditTable data={bookCopySharingBenefitConfigurationList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="图书拷贝捐赠利益配置。列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <BookCopyDonateBenefitConfigurationEditTable data={bookCopyDonateBenefitConfigurationList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="书借配置列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <BookBorrowConfigurationEditTable data={bookBorrowConfigurationList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="书列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <BookEditTable data={bookList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="书副本地位列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <BookCopyStatusEditTable data={bookCopyStatusList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="书副本Sku列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <BookCopySkuEditTable data={bookCopySkuList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="书副本检查计划列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <BookCopyCheckPlanEditTable data={bookCopyCheckPlanList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="书副本检查状态列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <BookCopyCheckStatusEditTable data={bookCopyCheckStatusList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="书评类型列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <BookReviewTypeEditTable data={bookReviewTypeList} owner={owner} {...this.props} />
          </Form>
        </Card>

 
      </PageHeaderLayout>
    )
  }
}
export default connect(state => ({
  bookManagement: state._bookManagement,
}))(BookManagementEditDetail)


