

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
import styles from './BookCopyCheckStatus.editdetail.less'
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



class BookCopyCheckStatusEditDetail extends Component {
  render() {
    const {BookCopyCheckRecordEditTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    const { id, bookCopyCheckRecordCount } = this.props.bookCopyCheckStatus
    const { bookCopyCheckRecordList } = this.props.bookCopyCheckStatus
    
    const owner = { type: '_bookCopyCheckStatus', id }
    return (

      <PageHeaderLayout
        title="书副本检查状态总览"
        content="书副本检查状态总览"
        wrapperClassName={styles.advancedForm}
      >


		<Card title="书副本检查记录列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <BookCopyCheckRecordEditTable data={bookCopyCheckRecordList} owner={owner} {...this.props} />
          </Form>
        </Card>

 
      </PageHeaderLayout>
    )
  }
}
export default connect(state => ({
  bookCopyCheckStatus: state._bookCopyCheckStatus,
}))(BookCopyCheckStatusEditDetail)


