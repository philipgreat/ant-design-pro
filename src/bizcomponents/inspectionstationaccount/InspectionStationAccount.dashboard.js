

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
import styles from './InspectionStationAccount.dashboard.less'
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
const summaryOf = (inspectionStationAccount) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{inspectionStationAccount.id}</Description> 
<Description term="服务单号">{inspectionStationAccount.serviceOrderNumber}</Description> 
<Description term="年检类型">{inspectionStationAccount.inspectionType}</Description> 
<Description term="车辆信息">{inspectionStationAccount.inspectionVehicleInfo}</Description> 
<Description term="检测结果">{inspectionStationAccount.inspectionFinalResult}</Description> 
<Description term="检测日期">{ moment(inspectionStationAccount.inspectionDatetime).format('YYYY-MM-DD')}</Description> 
<Description term="检测站">{inspectionStationAccount.inspectionStationName}</Description> 
<Description term="年检订单ID">{inspectionStationAccount.mainOrderNumber}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  inspectionStationAccount: state._inspectionStationAccount,
}))
export default class InspectionStationAccountDashboard extends Component {
  render() {
    // eslint-disable-next-line max-len
    const { id,  } = this.props.inspectionStationAccount
    
    
    
    return (

      <PageHeaderLayout
        title="检测站对账单总览"
        content={summaryOf(this.props.inspectionStationAccount)}
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



