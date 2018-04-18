

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
import styles from './ServiceOrderFilter.dashboard.less'
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
const summaryOf = (serviceOrderFilter) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{serviceOrderFilter.id}</Description> 
<Description term="服务单状态名称">{serviceOrderFilter.filterName}</Description> 
<Description term="服务单数量">{serviceOrderFilter.orderCount}</Description> 
<Description term="选中">{serviceOrderFilter.selected?'是':'否'}</Description> 
<Description term="服务单状态接口">{serviceOrderFilter.linkUrl}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  serviceOrderFilter: state._serviceOrderFilter,
}))
export default class ServiceOrderFilterDashboard extends Component {
  render() {
    // eslint-disable-next-line max-len
    const { id,  } = this.props.serviceOrderFilter
    
    
    
    return (

      <PageHeaderLayout
        title="服务单状态类型总览"
        content={summaryOf(this.props.serviceOrderFilter)}
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



