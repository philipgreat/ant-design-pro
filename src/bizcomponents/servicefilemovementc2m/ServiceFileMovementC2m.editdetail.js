

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
import styles from './ServiceFileMovementC2m.editdetail.less'
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
  serviceFileMovementC2m: state._serviceFileMovementC2m,
}))
export default class ServiceFileMovementC2mEditDetail extends Component {
  render() {
    const {ReportHandoverEditTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    const { id, reportHandoverCount } = this.props.serviceFileMovementC2m
    const { reportHandoverList } = this.props.serviceFileMovementC2m
    
    const owner = { type: '_serviceFileMovementC2m', id }
    return (

      <PageHeaderLayout
        title="收件服务总览"
        content="收件服务总览"
        wrapperClassName={styles.advancedForm}
      >


		<Card title="交接报告列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <ReportHandoverEditTable data={reportHandoverList} owner={owner} {...this.props} />
          </Form>
        </Card>

 
      </PageHeaderLayout>
    )
  }
}



