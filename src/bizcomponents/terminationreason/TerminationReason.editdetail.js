

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
import styles from './TerminationReason.editdetail.less'
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
  terminationReason: state._terminationReason,
}))
export default class TerminationReasonEditDetail extends Component {
  render() {
    const {TerminationEditTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    const { id, terminationCount } = this.props.terminationReason
    const { terminationList } = this.props.terminationReason
    
    const owner = { type: '_terminationReason', id }
    return (

      <PageHeaderLayout
        title="雇佣终止的原因总览"
        content="雇佣终止的原因总览"
        wrapperClassName={styles.advancedForm}
      >


		<Card title="雇佣终止列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <TerminationEditTable data={terminationList} owner={owner} {...this.props} />
          </Form>
        </Card>

 
      </PageHeaderLayout>
    )
  }
}



