

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
import styles from './ReportHandover.editdetail.less'
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
  reportHandover: state._reportHandover,
}))
export default class ReportHandoverEditDetail extends Component {
  render() {
    const {HandoverChecklistResultEditTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    const { id, handoverChecklistResultCount } = this.props.reportHandover
    const { handoverChecklistResultList } = this.props.reportHandover
    
    const owner = { type: '_reportHandover', id }
    return (

      <PageHeaderLayout
        title="交接报告总览"
        content="交接报告总览"
        wrapperClassName={styles.advancedForm}
      >


		<Card title="交接清单结果列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <HandoverChecklistResultEditTable data={handoverChecklistResultList} owner={owner} {...this.props} />
          </Form>
        </Card>

 
      </PageHeaderLayout>
    )
  }
}



