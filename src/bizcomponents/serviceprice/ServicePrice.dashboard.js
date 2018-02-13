

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
import styles from './ServicePrice.dashboard.less'
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
const summaryOf = (servicePrice) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{servicePrice.id}</Description> 
<Description term="服务代码">{servicePrice.serviceKey}</Description> 
<Description term="服务价格类型">{servicePrice.servicePriceType}</Description> 
<Description term="首次服务价格">{servicePrice.basePriceValue}</Description> 
<Description term="后续服务价格">{servicePrice.otherPriceValue}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  servicePrice: state._servicePrice,
}))
export default class ServicePriceDashboard extends Component {
  render() {
    // eslint-disable-next-line max-len
    const { id,  } = this.props.servicePrice
    
    
    
    return (

      <PageHeaderLayout
        title="服务价格总览"
        content={summaryOf(this.props.servicePrice)}
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



