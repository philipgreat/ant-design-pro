

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
import styles from './UserApp.dashboard.less'
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
const summaryOf = (userApp) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{userApp.id}</Description> 
<Description term="标题">{userApp.title}</Description> 
<Description term="应用程序图标">{userApp.appIcon}</Description> 
<Description term="完全访问">{userApp.fullAccess?'是':'否'}</Description> 
<Description term="许可">{userApp.permission}</Description> 
<Description term="访问对象类型">{userApp.objectType}</Description> 
<Description term="对象ID">{userApp.objectId}</Description> 
<Description term="位置">{userApp.location}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  userApp: state._userApp,
}))
export default class UserAppDashboard extends Component {
  render() {
    // eslint-disable-next-line max-len
    const { id, objectAccessCount } = this.props.userApp
    
    
    
    return (

      <PageHeaderLayout
        title="用户应用程序总览"
        content={summaryOf(this.props.userApp)}
        wrapperClassName={styles.advancedForm}
      >
        <div>
          <Row gutter={24}>

          
            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="对象访问"
                action={<Tooltip title="对象访问"><Icon type="info-circle-o" /></Tooltip>}
                total={numeral(objectAccessCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link to={`/userApp/${id}/list/objectAccessList`}><Icon type="profile" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/userApp/${id}/list/objectAccessCreateForm`}><Icon type="plus-circle-o" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/userApp/${id}/list/objectAccessList`}><Icon type="line-chart" style={{ fontSize: 20, color: '#08c' }} /></Link>
              </ChartCard>
            </Col>

          </Row>
        </div>
      </PageHeaderLayout>
    )
  }
}



