

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
import styles from './VehicleInspectionOrderServiceLog.dashboard.less'
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
const summaryOf = (vehicleInspectionOrderServiceLog) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{vehicleInspectionOrderServiceLog.id}</Description> 
<Description term="摘要">{vehicleInspectionOrderServiceLog.summary}</Description> 
<Description term="创建时间">{ moment(vehicleInspectionOrderServiceLog.createTime).format('YYYY-MM-DD')}</Description> 
<Description term="经度">{vehicleInspectionOrderServiceLog.longitude}</Description> 
<Description term="纬度">{vehicleInspectionOrderServiceLog.latitude}</Description> 
<Description term="服务类型">{vehicleInspectionOrderServiceLog.serviceType}</Description> 
<Description term="服务单号">{vehicleInspectionOrderServiceLog.serviceTicket}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  vehicleInspectionOrderServiceLog: state._vehicleInspectionOrderServiceLog,
}))
export default class VehicleInspectionOrderServiceLogDashboard extends Component {
  render() {
    // eslint-disable-next-line max-len
    const { id,  } = this.props.vehicleInspectionOrderServiceLog
    
    
    
    return (

      <PageHeaderLayout
        title="年检订单执行日志总览"
        content={summaryOf(this.props.vehicleInspectionOrderServiceLog)}
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



