

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
import styles from './AvailableReviewItem.editdetail.less'
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


@connect(state => ({
  availableReviewItem: state._availableReviewItem,
}))
export default class AvailableReviewItemEditDetail extends Component {
  render() {
    const {OrderReviewResultEditTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    const { id, orderReviewResultCount } = this.props.availableReviewItem
    const { orderReviewResultList } = this.props.availableReviewItem
    
    const owner = { type: '_availableReviewItem', id }
    return (

      <PageHeaderLayout
        title="评论条目总览"
        content="评论条目总览"
        wrapperClassName={styles.advancedForm}
      >


		<Card title="订单评论结果列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <OrderReviewResultEditTable data={orderReviewResultList} owner={owner} {...this.props} />
          </Form>
        </Card>

 
      </PageHeaderLayout>
    )
  }
}



