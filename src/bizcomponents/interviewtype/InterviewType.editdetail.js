

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
import styles from './InterviewType.editdetail.less'
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
  interviewType: state._interviewType,
}))
export default class InterviewTypeEditDetail extends Component {
  render() {
    const {EmployeeInterviewEditTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    const { id, employeeInterviewCount } = this.props.interviewType
    const { employeeInterviewList } = this.props.interviewType
    
    const owner = { type: '_interviewType', id }
    return (

      <PageHeaderLayout
        title="面试类型总览"
        content="面试类型总览"
        wrapperClassName={styles.advancedForm}
      >


		<Card title="员工面试列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <EmployeeInterviewEditTable data={employeeInterviewList} owner={owner} {...this.props} />
          </Form>
        </Card>

 
      </PageHeaderLayout>
    )
  }
}



