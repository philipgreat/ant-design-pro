

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
import styles from './VehicleRepairingReport.dashboard.less'
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
const summaryOf = (vehicleRepairingReport) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{vehicleRepairingReport.id}</Description> 
<Description term="修复部分Img 1">{vehicleRepairingReport.repairingPartImg1}</Description> 
<Description term="修复部分Img 2">{vehicleRepairingReport.repairingPartImg2}</Description> 
<Description term="修复部分Img 3">{vehicleRepairingReport.repairingPartImg3}</Description> 
<Description term="修复部分Img 4">{vehicleRepairingReport.repairingPartImg4}</Description> 
<Description term="修复部分Img 5">{vehicleRepairingReport.repairingPartImg5}</Description> 
<Description term="修复部分Img 6">{vehicleRepairingReport.repairingPartImg6}</Description> 
<Description term="修复部分Img 7">{vehicleRepairingReport.repairingPartImg7}</Description> 
<Description term="修复部分Img 8">{vehicleRepairingReport.repairingPartImg8}</Description> 
<Description term="修复部分Img 9">{vehicleRepairingReport.repairingPartImg9}</Description> 
<Description term="修复部分Img 10">{vehicleRepairingReport.repairingPartImg10}</Description> 
<Description term="修复部分评论列表">{vehicleRepairingReport.repairingPartListComment}</Description> 
<Description term="修复完成日期时间">{ moment(vehicleRepairingReport.repairingFinishedDatetime).format('YYYY-MM-DD')}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  vehicleRepairingReport: state._vehicleRepairingReport,
}))
export default class VehicleRepairingReportDashboard extends Component {
  render() {
    // eslint-disable-next-line max-len
    const { id,  } = this.props.vehicleRepairingReport
    
    
    
    return (

      <PageHeaderLayout
        title="车辆维修报告总览"
        content={summaryOf(this.props.vehicleRepairingReport)}
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



