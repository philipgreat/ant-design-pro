

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
import styles from './VehicleInspectionOrderCoupon.dashboard.less'
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
const summaryOf = (vehicleInspectionOrderCoupon) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{vehicleInspectionOrderCoupon.id}</Description> 
<Description term="优惠券名称">{vehicleInspectionOrderCoupon.couponTitle}</Description> 
<Description term="折扣金额">{vehicleInspectionOrderCoupon.discountAmount}</Description> 
<Description term="结束日期">{ moment(vehicleInspectionOrderCoupon.endDate).format('YYYY-MM-DD')}</Description> 
<Description term="最后更新时间">{ moment(vehicleInspectionOrderCoupon.lastUpdateTime).format('YYYY-MM-DD')}</Description> 
<Description term="申请日期">{ moment(vehicleInspectionOrderCoupon.appliedDate).format('YYYY-MM-DD')}</Description> 
<Description term="息状态">{vehicleInspectionOrderCoupon.couponStatus}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  vehicleInspectionOrderCoupon: state._vehicleInspectionOrderCoupon,
}))
export default class VehicleInspectionOrderCouponDashboard extends Component {
  render() {
    // eslint-disable-next-line max-len
    const { id,  } = this.props.vehicleInspectionOrderCoupon
    
    
    
    return (

      <PageHeaderLayout
        title="优惠券总览"
        content={summaryOf(this.props.vehicleInspectionOrderCoupon)}
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



