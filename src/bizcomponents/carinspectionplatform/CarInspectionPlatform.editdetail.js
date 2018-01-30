

import React, { Component } from 'react'
import { connect } from 'dva'
import { Form,Button, Row, Col, Icon, Card, Tabs, Table, Radio, DatePicker, Tooltip, Menu, Dropdown } from 'antd'
import { Link, Route, Redirect, Switch } from 'dva/router'
import numeral from 'numeral'
import {
  ChartCard, yuan, MiniArea, MiniBar, MiniProgress, Field, Bar, Pie, TimelineChart,

} from '../../components/Charts'
import Trend from '../../components/Trend'
import NumberInfo from '../../components/NumberInfo'
import { getTimeDistance } from '../../utils/utils'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import styles from './CarInspectionPlatform.editdetail.less'
import GlobalComponents from '../../custcomponents'



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


@connect(state => ({
  carInspectionPlatform: state._carInspectionPlatform,
}))
export default class CarInspectionPlatformEditDetail extends Component {
  render() {
    const {ProvinceEditTable} = GlobalComponents;
    const {AvailableProductEditTable} = GlobalComponents;
    const {CustomerEditTable} = GlobalComponents;
    const {VehicleServiceCompanyEditTable} = GlobalComponents;
    const {VehicleInfoEditTable} = GlobalComponents;
    const {VehicleInspectionOrderEditTable} = GlobalComponents;
    const {AvailableReviewItemEditTable} = GlobalComponents;
    const {AvailableRatingItemEditTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    const { id, provinceCount, availableProductCount, customerCount, vehicleServiceCompanyCount, vehicleInfoCount, vehicleInspectionOrderCount, availableReviewItemCount, availableRatingItemCount } = this.props.carInspectionPlatform
    const { provinceList, availableProductList, customerList, vehicleServiceCompanyList, vehicleInfoList, vehicleInspectionOrderList, availableReviewItemList, availableRatingItemList } = this.props.carInspectionPlatform
    
    const owner = { type: '_carInspectionPlatform', id }
    return (

      <PageHeaderLayout
        title="驾乐乐车辆代审服务平台总览"
        content="驾乐乐车辆代审服务平台总览"
        wrapperClassName={styles.advancedForm}
      >


		<Card title="省列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <ProvinceEditTable data={provinceList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="产品类型列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <AvailableProductEditTable data={availableProductList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="客户列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <CustomerEditTable data={customerList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="商户管理列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <VehicleServiceCompanyEditTable data={vehicleServiceCompanyList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="车辆信息列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <VehicleInfoEditTable data={vehicleInfoList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="上线检测订单列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <VehicleInspectionOrderEditTable data={vehicleInspectionOrderList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="评论条目列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <AvailableReviewItemEditTable data={availableReviewItemList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="评分条目列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <AvailableRatingItemEditTable data={availableRatingItemList} owner={owner} {...this.props} />
          </Form>
        </Card>

 
      </PageHeaderLayout>
    )
  }
}



