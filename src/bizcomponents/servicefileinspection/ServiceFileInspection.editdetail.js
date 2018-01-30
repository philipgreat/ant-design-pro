

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
import styles from './ServiceFileInspection.editdetail.less'
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
  serviceFileInspection: state._serviceFileInspection,
}))
export default class ServiceFileInspectionEditDetail extends Component {
  render() {
    const {ReportFileInspectionReportEditTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    const { id, reportFileInspectionReportCount } = this.props.serviceFileInspection
    const { reportFileInspectionReportList } = this.props.serviceFileInspection
    
    const owner = { type: '_serviceFileInspection', id }
    return (

      <PageHeaderLayout
        title="6年免检服务总览"
        content="6年免检服务总览"
        wrapperClassName={styles.advancedForm}
      >


		<Card title="报告文件检验报告列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <ReportFileInspectionReportEditTable data={reportFileInspectionReportList} owner={owner} {...this.props} />
          </Form>
        </Card>

 
      </PageHeaderLayout>
    )
  }
}



