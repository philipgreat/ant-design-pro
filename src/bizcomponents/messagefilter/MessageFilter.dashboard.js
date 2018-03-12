

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
import styles from './MessageFilter.dashboard.less'
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
const summaryOf = (messageFilter) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{messageFilter.id}</Description> 
<Description term="名称">{messageFilter.name}</Description> 
<Description term="消息计数">{messageFilter.messageCount}</Description> 
<Description term="过滤器健值">{messageFilter.filterKey}</Description> 
<Description term="链接网址">{messageFilter.linkUrl}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  messageFilter: state._messageFilter,
}))
export default class MessageFilterDashboard extends Component {
  render() {
    // eslint-disable-next-line max-len
    const { id,  } = this.props.messageFilter
    
    
    
    return (

      <PageHeaderLayout
        title="消息过滤总览"
        content={summaryOf(this.props.messageFilter)}
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



