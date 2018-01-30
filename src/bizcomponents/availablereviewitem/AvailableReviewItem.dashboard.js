

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
import styles from './AvailableReviewItem.dashboard.less'
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
const summaryOf = (availableReviewItem) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{availableReviewItem.id}</Description> 
<Description term="评论内容">{availableReviewItem.reviewName}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  availableReviewItem: state._availableReviewItem,
}))
export default class AvailableReviewItemDashboard extends Component {
  render() {
    // eslint-disable-next-line max-len
    const { id, orderReviewResultCount } = this.props.availableReviewItem
    
    
    
    return (

      <PageHeaderLayout
        title="评论条目总览"
        content={summaryOf(this.props.availableReviewItem)}
        wrapperClassName={styles.advancedForm}
      >
        <div>
          <Row gutter={24}>

          
            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="订单评论结果"
                action={<Tooltip title="订单评论结果"><Icon type="info-circle-o" /></Tooltip>}
                total={numeral(orderReviewResultCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link to={`/availableReviewItem/${id}/list/orderReviewResultList`}><Icon type="profile" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/availableReviewItem/${id}/list/orderReviewResultCreateForm`}><Icon type="plus-circle-o" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/availableReviewItem/${id}/list/orderReviewResultList`}><Icon type="line-chart" style={{ fontSize: 20, color: '#08c' }} /></Link>
              </ChartCard>
            </Col>

          </Row>
        </div>
      </PageHeaderLayout>
    )
  }
}



