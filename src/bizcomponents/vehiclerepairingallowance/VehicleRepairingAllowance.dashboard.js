

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
import styles from './VehicleRepairingAllowance.dashboard.less'
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
const summaryOf = (vehicleRepairingAllowance) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{vehicleRepairingAllowance.id}</Description> 
<Description term="津贴标题">{vehicleRepairingAllowance.allowanceTitle}</Description> 
<Description term="补贴代码">{vehicleRepairingAllowance.allowanceCode}</Description> 
<Description term="补贴费用">{vehicleRepairingAllowance.allowanceAmount}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  vehicleRepairingAllowance: state._vehicleRepairingAllowance,
}))
export default class VehicleRepairingAllowanceDashboard extends Component {
  render() {
    // eslint-disable-next-line max-len
    const { id, repairingQuotationItemCount } = this.props.vehicleRepairingAllowance
    
    
    
    return (

      <PageHeaderLayout
        title="汽车修理平台补贴总览"
        content={summaryOf(this.props.vehicleRepairingAllowance)}
        wrapperClassName={styles.advancedForm}
      >
        <div>
          <Row gutter={24}>

          
            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="维修报价项目"
                action={<Tooltip title="维修报价项目"><Icon type="info-circle-o" /></Tooltip>}
                total={numeral(repairingQuotationItemCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link to={`/vehicleRepairingAllowance/${id}/list/repairingQuotationItemList`}><Icon type="profile" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/vehicleRepairingAllowance/${id}/list/repairingQuotationItemCreateForm`}><Icon type="plus-circle-o" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/vehicleRepairingAllowance/${id}/list/repairingQuotationItemList`}><Icon type="line-chart" style={{ fontSize: 20, color: '#08c' }} /></Link>
              </ChartCard>
            </Col>

          </Row>
        </div>
      </PageHeaderLayout>
    )
  }
}



