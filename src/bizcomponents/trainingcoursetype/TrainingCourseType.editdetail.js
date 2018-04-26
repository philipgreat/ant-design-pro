

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
import styles from './TrainingCourseType.editdetail.less'
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
  trainingCourseType: state._trainingCourseType,
}))
export default class TrainingCourseTypeEditDetail extends Component {
  render() {
    const {CompanyTrainingEditTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    const { id, companyTrainingCount } = this.props.trainingCourseType
    const { companyTrainingList } = this.props.trainingCourseType
    
    const owner = { type: '_trainingCourseType', id }
    return (

      <PageHeaderLayout
        title="培训课程类型总览"
        content="培训课程类型总览"
        wrapperClassName={styles.advancedForm}
      >


		<Card title="公司培训列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <CompanyTrainingEditTable data={companyTrainingList} owner={owner} {...this.props} />
          </Form>
        </Card>

 
      </PageHeaderLayout>
    )
  }
}



