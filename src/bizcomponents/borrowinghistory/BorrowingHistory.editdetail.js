

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
import styles from './BorrowingHistory.editdetail.less'
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



class BorrowingHistoryEditDetail extends Component {
  render() {
    const {BorrowingExpiredSkuEditTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    const { id, borrowingExpiredSkuCount } = this.props.borrowingHistory
    const { borrowingExpiredSkuList } = this.props.borrowingHistory
    
    const owner = { type: '_borrowingHistory', id }
    return (

      <PageHeaderLayout
        title="借贷历史总览"
        content="借贷历史总览"
        wrapperClassName={styles.advancedForm}
      >


		<Card title="借款到期Sku列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <BorrowingExpiredSkuEditTable data={borrowingExpiredSkuList} owner={owner} {...this.props} />
          </Form>
        </Card>

 
      </PageHeaderLayout>
    )
  }
}
export default connect(state => ({
  borrowingHistory: state._borrowingHistory,
}))(BorrowingHistoryEditDetail)


