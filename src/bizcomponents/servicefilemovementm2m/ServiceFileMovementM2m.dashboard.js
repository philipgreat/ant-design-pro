

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
import styles from './ServiceFileMovementM2m.dashboard.less'
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
const summaryOf = (serviceFileMovementM2m) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{serviceFileMovementM2m.id}</Description> 
<Description term="服务状态">{serviceFileMovementM2m.serviceStatus}</Description> 
<Description term="服务概述">{serviceFileMovementM2m.serviceSummary}</Description> 
<Description term="开始时间">{ moment(serviceFileMovementM2m.startTime).format('YYYY-MM-DD')}</Description> 
<Description term="经度">{serviceFileMovementM2m.longitude}</Description> 
<Description term="纬度">{serviceFileMovementM2m.latitude}</Description> 
<Description term="最后更新时间">{ moment(serviceFileMovementM2m.lastUpdateTime).format('YYYY-MM-DD')}</Description> 
<Description term="交接检查码">{serviceFileMovementM2m.transferVerifyCode}</Description> 
<Description term="服务类型">{serviceFileMovementM2m.movementPurpose}</Description> 
<Description term="通知日期时间">{ moment(serviceFileMovementM2m.notifyDatetime).format('YYYY-MM-DD')}</Description> 
<Description term="通知地址">{serviceFileMovementM2m.notifyAddress}</Description> 
<Description term="通知的评论">{serviceFileMovementM2m.notifyComment}</Description> 
<Description term="交接检查结果">{serviceFileMovementM2m.handoverResult}</Description> 
<Description term="交接检查备注">{serviceFileMovementM2m.handoverResultComment}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  serviceFileMovementM2m: state._serviceFileMovementM2m,
}))
export default class ServiceFileMovementM2mDashboard extends Component {
  render() {
    // eslint-disable-next-line max-len
    const { id, handOverChecklistResultCount } = this.props.serviceFileMovementM2m
    
    
    
    return (

      <PageHeaderLayout
        title="移件服务总览"
        content={summaryOf(this.props.serviceFileMovementM2m)}
        wrapperClassName={styles.advancedForm}
      >
        <div>
          <Row gutter={24}>

          
            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="交接检查结果"
                action={<Tooltip title="交接检查结果"><Icon type="info-circle-o" /></Tooltip>}
                total={numeral(handOverChecklistResultCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link to={`/serviceFileMovementM2m/${id}/list/handOverChecklistResultList`}><Icon type="profile" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/serviceFileMovementM2m/${id}/list/handOverChecklistResultCreateForm`}><Icon type="plus-circle-o" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/serviceFileMovementM2m/${id}/list/handOverChecklistResultList`}><Icon type="line-chart" style={{ fontSize: 20, color: '#08c' }} /></Link>
              </ChartCard>
            </Col>

          </Row>
        </div>
      </PageHeaderLayout>
    )
  }
}



