

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
import styles from './BookReviewType.editdetail.less'
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



class BookReviewTypeEditDetail extends Component {
  render() {
    const {BookReviewEditTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    const { id, bookReviewCount } = this.props.bookReviewType
    const { bookReviewList } = this.props.bookReviewType
    
    const owner = { type: '_bookReviewType', id }
    return (

      <PageHeaderLayout
        title="书评类型总览"
        content="书评类型总览"
        wrapperClassName={styles.advancedForm}
      >


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
  bookReviewType: state._bookReviewType,
}))(BookReviewTypeEditDetail)


