

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
import styles from './PayingOff.editdetail.less'
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
  payingOff: state._payingOff,
}))
export default class PayingOffEditDetail extends Component {
  render() {
    const {EmployeeSalarySheetEditTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    const { id, employeeSalarySheetCount } = this.props.payingOff
    const { employeeSalarySheetList } = this.props.payingOff
    
    const owner = { type: '_payingOff', id }
    return (

      <PageHeaderLayout
        title="工资支付总览"
        content="工资支付总览"
        wrapperClassName={styles.advancedForm}
      >


		<Card title="工资单列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <EmployeeSalarySheetEditTable data={employeeSalarySheetList} owner={owner} {...this.props} />
          </Form>
        </Card>

 
      </PageHeaderLayout>
    )
  }
}



