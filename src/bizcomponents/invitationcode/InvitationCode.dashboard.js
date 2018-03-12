

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
import styles from './InvitationCode.dashboard.less'
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
const summaryOf = (invitationCode) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{invitationCode.id}</Description> 
<Description term="名称">{invitationCode.name}</Description> 
<Description term="代码">{invitationCode.code}</Description> 
<Description term="创建时间">{ moment(invitationCode.createTime).format('YYYY-MM-DD')}</Description> 
<Description term="用">{invitationCode.used?'是':'否'}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  invitationCode: state._invitationCode,
}))
export default class InvitationCodeDashboard extends Component {
  render() {
    // eslint-disable-next-line max-len
    const { id,  } = this.props.invitationCode
    
    
    
    return (

      <PageHeaderLayout
        title="邀请码总览"
        content={summaryOf(this.props.invitationCode)}
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



