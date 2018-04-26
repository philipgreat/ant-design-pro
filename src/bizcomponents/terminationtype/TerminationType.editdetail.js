

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
import styles from './TerminationType.editdetail.less'
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
  terminationType: state._terminationType,
}))
export default class TerminationTypeEditDetail extends Component {
  render() {
    const {TerminationEditTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    const { id, terminationCount } = this.props.terminationType
    const { terminationList } = this.props.terminationType
    
    const owner = { type: '_terminationType', id }
    return (

      <PageHeaderLayout
        title="雇佣终止类型总览"
        content="雇佣终止类型总览"
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



