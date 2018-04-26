

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
import styles from './Scoring.editdetail.less'
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
  scoring: state._scoring,
}))
export default class ScoringEditDetail extends Component {
  render() {
    const {EmployeeCompanyTrainingEditTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    const { id, employeeCompanyTrainingCount } = this.props.scoring
    const { employeeCompanyTrainingList } = this.props.scoring
    
    const owner = { type: '_scoring', id }
    return (

      <PageHeaderLayout
        title="评分总览"
        content="评分总览"
        wrapperClassName={styles.advancedForm}
      >


		<Card title="员工参与的公司培训列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <EmployeeCompanyTrainingEditTable data={employeeCompanyTrainingList} owner={owner} {...this.props} />
          </Form>
        </Card>

 
      </PageHeaderLayout>
    )
  }
}



