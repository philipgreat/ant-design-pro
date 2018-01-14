

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
import styles from './ServiceFileMovementC2m.dashboard.less'
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
const summaryOf = (serviceFileMovementC2m) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{serviceFileMovementC2m.id}</Description> 
<Description term="服务状态">{serviceFileMovementC2m.serviceStatus}</Description> 
<Description term="拒收原因">{serviceFileMovementC2m.rejectComments}</Description> 
<Description term="拒收凭证1">{serviceFileMovementC2m.rejectEvidence1}</Description> 
<Description term="拒收凭证2">{serviceFileMovementC2m.rejectEvidence2}</Description> 
<Description term="拒收凭证3">{serviceFileMovementC2m.rejectEvidence3}</Description> 
<Description term="拒收凭证4">{serviceFileMovementC2m.rejectEvidence4}</Description> 
<Description term="拒收凭证5">{serviceFileMovementC2m.rejectEvidence5}</Description> 
<Description term="开始时间">{ moment(serviceFileMovementC2m.startTime).format('YYYY-MM-DD')}</Description> 
<Description term="最后的位置">{serviceFileMovementC2m.lastLocation}</Description> 
<Description term="最后更新时间">{ moment(serviceFileMovementC2m.lastUpdateTime).format('YYYY-MM-DD')}</Description> 
<Description term="移动目的">{serviceFileMovementC2m.movementPurpose}</Description> 
<Description term="联系人姓名">{serviceFileMovementC2m.contactName}</Description> 
<Description term="联系手机号码">{serviceFileMovementC2m.contactMobileNumber}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  serviceFileMovementC2m: state._serviceFileMovementC2m,
}))
export default class ServiceFileMovementC2mDashboard extends Component {
  render() {
    // eslint-disable-next-line max-len
    const { id, serviceFileMovementC2mChecklistResultCount } = this.props.serviceFileMovementC2m
    
    
    
    return (

      <PageHeaderLayout
        title="收件服务总览"
        content={summaryOf(this.props.serviceFileMovementC2m)}
        wrapperClassName={styles.advancedForm}
      >
        <div>
          <Row gutter={24}>

          
            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="收件服务检查结果"
                action={<Tooltip title="收件服务检查结果"><Icon type="info-circle-o" /></Tooltip>}
                total={numeral(serviceFileMovementC2mChecklistResultCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link to={`/serviceFileMovementC2m/${id}/list/serviceFileMovementC2mChecklistResultList`}><Icon type="profile" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/serviceFileMovementC2m/${id}/list/serviceFileMovementC2mChecklistResultCreateForm`}><Icon type="plus-circle-o" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/serviceFileMovementC2m/${id}/list/serviceFileMovementC2mChecklistResultList`}><Icon type="line-chart" style={{ fontSize: 20, color: '#08c' }} /></Link>
              </ChartCard>
            </Col>

          </Row>
        </div>
      </PageHeaderLayout>
    )
  }
}



