

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
<Description term="序号">{vehicleInspectionOrderCoupon.id}</Description> 
<Description term="标题">{vehicleInspectionOrderCoupon.title}</Description> 
<Description term="生效日期">{ moment(vehicleInspectionOrderCoupon.startDate).format('YYYY-MM-DD')}</Description> 
<Description term="失效日期">{ moment(vehicleInspectionOrderCoupon.expirationDate).format('YYYY-MM-DD')}</Description> 
<Description term="金额">{vehicleInspectionOrderCoupon.amount}</Description> 
<Description term="优惠码">{vehicleInspectionOrderCoupon.code}</Description> 
<Description term="使用日期">{ moment(vehicleInspectionOrderCoupon.usedDate).format('YYYY-MM-DD')}</Description> 
	
        
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



