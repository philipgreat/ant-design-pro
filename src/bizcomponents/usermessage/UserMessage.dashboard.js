

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
import styles from './UserMessage.dashboard.less'
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
const summaryOf = (userMessage) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{userMessage.id}</Description> 
<Description term="标题">{userMessage.title}</Description> 
<Description term="信息的关键">{userMessage.messageKey}</Description> 
<Description term="内容">{userMessage.content}</Description> 
<Description term="链接网址">{userMessage.linkUrl}</Description> 
<Description term="消息的时间">{ moment(userMessage.messageTime).format('YYYY-MM-DD')}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  userMessage: state._userMessage,
}))
export default class UserMessageDashboard extends Component {
  render() {
    // eslint-disable-next-line max-len
    const { id,  } = this.props.userMessage
    
    
    
    return (

      <PageHeaderLayout
        title="用户消息总览"
        content={summaryOf(this.props.userMessage)}
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



