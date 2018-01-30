

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
import styles from './AvailableRatingItem.editdetail.less'
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
  availableRatingItem: state._availableRatingItem,
}))
export default class AvailableRatingItemEditDetail extends Component {
  render() {
    const {OrderRatingResultEditTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    const { id, orderRatingResultCount } = this.props.availableRatingItem
    const { orderRatingResultList } = this.props.availableRatingItem
    
    const owner = { type: '_availableRatingItem', id }
    return (

      <PageHeaderLayout
        title="评分条目总览"
        content="评分条目总览"
        wrapperClassName={styles.advancedForm}
      >


		<Card title="订单评级结果列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <OrderRatingResultEditTable data={orderRatingResultList} owner={owner} {...this.props} />
          </Form>
        </Card>

 
      </PageHeaderLayout>
    )
  }
}



