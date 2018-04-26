

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
import styles from './HrInterview.editdetail.less'
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
  hrInterview: state._hrInterview,
}))
export default class HrInterviewEditDetail extends Component {
  render() {
    const {EmployeeEditTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    const { id, employeeCount } = this.props.hrInterview
    const { employeeList } = this.props.hrInterview
    
    const owner = { type: '_hrInterview', id }
    return (

      <PageHeaderLayout
        title="人力资源部面试总览"
        content="人力资源部面试总览"
        wrapperClassName={styles.advancedForm}
      >


		<Card title="员工列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <EmployeeEditTable data={employeeList} owner={owner} {...this.props} />
          </Form>
        </Card>

 
      </PageHeaderLayout>
    )
  }
}



