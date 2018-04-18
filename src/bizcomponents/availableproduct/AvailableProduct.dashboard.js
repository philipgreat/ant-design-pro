

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
import styles from './AvailableProduct.dashboard.less'
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
const summaryOf = (availableProduct) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{availableProduct.id}</Description> 
<Description term="产品名称">{availableProduct.productName}</Description> 
<Description term="服务代码">{availableProduct.serviceKey}</Description> 
<Description term="服务描述">{availableProduct.serviceDescription}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  availableProduct: state._availableProduct,
}))
export default class AvailableProductDashboard extends Component {
  render() {
    // eslint-disable-next-line max-len
    const { id, servicePriceCount, availableServiceCount, productPriceCount, availableInsuranceCount, availableHandOverItemCount, preorderPromotionCount } = this.props.availableProduct
    
    
    
    return (

      <PageHeaderLayout
        title="产品类型总览"
        content={summaryOf(this.props.availableProduct)}
        wrapperClassName={styles.advancedForm}
      >
        <div>
          <Row gutter={24}>

          
            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="服务价格"
                action={<Tooltip title="服务价格"><Icon type="info-circle-o" /></Tooltip>}
                total={numeral(servicePriceCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link to={`/availableProduct/${id}/list/servicePriceList`}><Icon type="profile" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/availableProduct/${id}/list/servicePriceCreateForm`}><Icon type="plus-circle-o" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/availableProduct/${id}/list/servicePriceList`}><Icon type="line-chart" style={{ fontSize: 20, color: '#08c' }} /></Link>
              </ChartCard>
            </Col>

          
            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="服务范围"
                action={<Tooltip title="服务范围"><Icon type="info-circle-o" /></Tooltip>}
                total={numeral(availableServiceCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link to={`/availableProduct/${id}/list/availableServiceList`}><Icon type="profile" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/availableProduct/${id}/list/availableServiceCreateForm`}><Icon type="plus-circle-o" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/availableProduct/${id}/list/availableServiceList`}><Icon type="line-chart" style={{ fontSize: 20, color: '#08c' }} /></Link>
              </ChartCard>
            </Col>

          
            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="产品价格"
                action={<Tooltip title="产品价格"><Icon type="info-circle-o" /></Tooltip>}
                total={numeral(productPriceCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link to={`/availableProduct/${id}/list/productPriceList`}><Icon type="profile" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/availableProduct/${id}/list/productPriceCreateForm`}><Icon type="plus-circle-o" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/availableProduct/${id}/list/productPriceList`}><Icon type="line-chart" style={{ fontSize: 20, color: '#08c' }} /></Link>
              </ChartCard>
            </Col>

          
            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="车辆代办保险"
                action={<Tooltip title="车辆代办保险"><Icon type="info-circle-o" /></Tooltip>}
                total={numeral(availableInsuranceCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link to={`/availableProduct/${id}/list/availableInsuranceList`}><Icon type="profile" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/availableProduct/${id}/list/availableInsuranceCreateForm`}><Icon type="plus-circle-o" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/availableProduct/${id}/list/availableInsuranceList`}><Icon type="line-chart" style={{ fontSize: 20, color: '#08c' }} /></Link>
              </ChartCard>
            </Col>

          
            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="交接检查项"
                action={<Tooltip title="交接检查项"><Icon type="info-circle-o" /></Tooltip>}
                total={numeral(availableHandOverItemCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link to={`/availableProduct/${id}/list/availableHandOverItemList`}><Icon type="profile" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/availableProduct/${id}/list/availableHandOverItemCreateForm`}><Icon type="plus-circle-o" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/availableProduct/${id}/list/availableHandOverItemList`}><Icon type="line-chart" style={{ fontSize: 20, color: '#08c' }} /></Link>
              </ChartCard>
            </Col>

          
            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="提前下单优惠"
                action={<Tooltip title="提前下单优惠"><Icon type="info-circle-o" /></Tooltip>}
                total={numeral(preorderPromotionCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link to={`/availableProduct/${id}/list/preorderPromotionList`}><Icon type="profile" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/availableProduct/${id}/list/preorderPromotionCreateForm`}><Icon type="plus-circle-o" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/availableProduct/${id}/list/preorderPromotionList`}><Icon type="line-chart" style={{ fontSize: 20, color: '#08c' }} /></Link>
              </ChartCard>
            </Col>

          </Row>
        </div>
      </PageHeaderLayout>
    )
  }
}



