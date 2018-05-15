

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
import styles from './BookReview.editdetail.less'
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



class BookReviewEditDetail extends Component {
  render() {
    const {BookReviewLikeEditTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    const { id, bookReviewLikeCount } = this.props.bookReview
    const { bookReviewLikeList } = this.props.bookReview
    
    const owner = { type: '_bookReview', id }
    return (

      <PageHeaderLayout
        title="书评总览"
        content="书评总览"
        wrapperClassName={styles.advancedForm}
      >


		<Card title="这样的书评列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <BookReviewLikeEditTable data={bookReviewLikeList} owner={owner} {...this.props} />
          </Form>
        </Card>

 
      </PageHeaderLayout>
    )
  }
}
export default connect(state => ({
  bookReview: state._bookReview,
}))(BookReviewEditDetail)


