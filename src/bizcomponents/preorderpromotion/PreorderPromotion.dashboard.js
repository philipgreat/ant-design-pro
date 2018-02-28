

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
import styles from './PreorderPromotion.dashboard.less'
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
const summaryOf = (preorderPromotion) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{preorderPromotion.id}</Description> 
<Description term="优惠信息">{preorderPromotion.promotionMessage}</Description> 
<Description term="提前天数">{preorderPromotion.preorderDays}</Description> 
<Description term="优惠金额">{preorderPromotion.discountAmount}</Description> 
<Description term="开始日期">{ moment(preorderPromotion.startDate).format('YYYY-MM-DD')}</Description> 
<Description term="结束日期">{ moment(preorderPromotion.endDate).format('YYYY-MM-DD')}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  preorderPromotion: state._preorderPromotion,
}))
export default class PreorderPromotionDashboard extends Component {
  render() {
    // eslint-disable-next-line max-len
    const { id,  } = this.props.preorderPromotion
    
    
    
    return (

      <PageHeaderLayout
        title="提前下单优惠总览"
        content={summaryOf(this.props.preorderPromotion)}
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



