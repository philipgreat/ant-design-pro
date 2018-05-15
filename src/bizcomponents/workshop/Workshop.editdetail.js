

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
import styles from './Workshop.editdetail.less'
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



class WorkshopEditDetail extends Component {
  render() {
    const {WorkshopRegisterHistoryEditTable} = GlobalComponents;
    const {WorkshopReviewEditTable} = GlobalComponents;
    const {WorkshopLikeEditTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    const { id, workshopRegisterHistoryCount, workshopReviewCount, workshopLikeCount } = this.props.workshop
    const { workshopRegisterHistoryList, workshopReviewList, workshopLikeList } = this.props.workshop
    
    const owner = { type: '_workshop', id }
    return (

      <PageHeaderLayout
        title="车间总览"
        content="车间总览"
        wrapperClassName={styles.advancedForm}
      >


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

 
      </PageHeaderLayout>
    )
  }
}
export default connect(state => ({
  workshop: state._workshop,
}))(WorkshopEditDetail)


