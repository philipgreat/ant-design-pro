

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
import styles from './ServiceVehicleMovementC2m.dashboard.less'
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
const summaryOf = (serviceVehicleMovementC2m) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{serviceVehicleMovementC2m.id}</Description> 
<Description term="服务状态">{serviceVehicleMovementC2m.serviceStatus}</Description> 
<Description term="拒收原因">{serviceVehicleMovementC2m.rejectComments}</Description> 
<Description term="拒收凭证1">{serviceVehicleMovementC2m.rejectEvidence1}</Description> 
<Description term="拒收凭证2">{serviceVehicleMovementC2m.rejectEvidence2}</Description> 
<Description term="拒收凭证3">{serviceVehicleMovementC2m.rejectEvidence3}</Description> 
<Description term="拒收凭证4">{serviceVehicleMovementC2m.rejectEvidence4}</Description> 
<Description term="拒收凭证5">{serviceVehicleMovementC2m.rejectEvidence5}</Description> 
<Description term="开始时间">{ moment(serviceVehicleMovementC2m.startTime).format('YYYY-MM-DD')}</Description> 
<Description term="最后的位置">{serviceVehicleMovementC2m.lastLocation}</Description> 
<Description term="最后更新时间">{ moment(serviceVehicleMovementC2m.lastUpdateTime).format('YYYY-MM-DD')}</Description> 
<Description term="移动目的">{serviceVehicleMovementC2m.movementPurpose}</Description> 
<Description term="联系人姓名">{serviceVehicleMovementC2m.contactName}</Description> 
<Description term="联系手机号码">{serviceVehicleMovementC2m.contactMobileNumber}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  serviceVehicleMovementC2m: state._serviceVehicleMovementC2m,
}))
export default class ServiceVehicleMovementC2mDashboard extends Component {
  render() {
    // eslint-disable-next-line max-len
    const { id, serviceVehicleMovementC2mChecklistResultCount } = this.props.serviceVehicleMovementC2m
    
    
    
    return (

      <PageHeaderLayout
        title="收车服务总览"
        content={summaryOf(this.props.serviceVehicleMovementC2m)}
        wrapperClassName={styles.advancedForm}
      >
        <div>
          <Row gutter={24}>

          
            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="收车检车结果"
                action={<Tooltip title="收车检车结果"><Icon type="info-circle-o" /></Tooltip>}
                total={numeral(serviceVehicleMovementC2mChecklistResultCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link to={`/serviceVehicleMovementC2m/${id}/list/serviceVehicleMovementC2mChecklistResultList`}><Icon type="profile" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/serviceVehicleMovementC2m/${id}/list/serviceVehicleMovementC2mChecklistResultCreateForm`}><Icon type="plus-circle-o" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/serviceVehicleMovementC2m/${id}/list/serviceVehicleMovementC2mChecklistResultList`}><Icon type="line-chart" style={{ fontSize: 20, color: '#08c' }} /></Link>
              </ChartCard>
            </Col>

          </Row>
        </div>
      </PageHeaderLayout>
    )
  }
}


