

import React, { Component } from 'react'
import { connect } from 'dva'
import moment from 'moment'
import { Row, Col, Icon, Card, Tabs, Table, Radio, DatePicker, Tooltip, Menu, Dropdown } from 'antd'
import { Link, Route, Redirect, Switch } from 'dva/router'
import numeral from 'numeral'
import {
  ChartCard, yuan, MiniArea, MiniBar, MiniProgress, Field, Bar, Pie, TimelineChart,
} from '../../components/Charts'
import Trend from '../../components/Trend'
import NumberInfo from '../../components/NumberInfo'
import { getTimeDistance } from '../../utils/utils'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import styles from './ReportVehicleInspectionReport.dashboard.less'
import DescriptionList from '../../components/DescriptionList';
const { Description } = DescriptionList;
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
const summaryOf = (reportVehicleInspectionReport) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{reportVehicleInspectionReport.id}</Description> 
<Description term="描述">{reportVehicleInspectionReport.description}</Description> 
<Description term="检验报告图1">{reportVehicleInspectionReport.inspectionReportImage1}</Description> 
<Description term="检验报告图2">{reportVehicleInspectionReport.inspectionReportImage2}</Description> 
<Description term="检验报告图片3">{reportVehicleInspectionReport.inspectionReportImage3}</Description> 
<Description term="检验报告图片4">{reportVehicleInspectionReport.inspectionReportImage4}</Description> 
<Description term="检验报告图片5">{reportVehicleInspectionReport.inspectionReportImage5}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  reportVehicleInspectionReport: state._reportVehicleInspectionReport,
}))
export default class ReportVehicleInspectionReportDashboard extends Component {
  render() {
    // eslint-disable-next-line max-len
    const { id,  } = this.props.reportVehicleInspectionReport
    
    
    
    return (

      <PageHeaderLayout
        title="车辆检验报告总览"
        content={summaryOf(this.props.reportVehicleInspectionReport)}
        wrapperClassName={styles.advancedForm}
      >
        <div>
          <Row gutter={24}>

          </Row>
        </div>
      </PageHeaderLayout>
    )
  }
}



