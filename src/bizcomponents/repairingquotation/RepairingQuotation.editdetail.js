

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
import styles from './RepairingQuotation.editdetail.less'
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
  repairingQuotation: state._repairingQuotation,
}))
export default class RepairingQuotationEditDetail extends Component {
  render() {
    const {RepairingQuotationItemEditTable} = GlobalComponents;
    const {VehicleRepairingPaymentEditTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    const { id, repairingQuotationItemCount, vehicleRepairingPaymentCount } = this.props.repairingQuotation
    const { repairingQuotationItemList, vehicleRepairingPaymentList } = this.props.repairingQuotation
    
    const owner = { type: '_repairingQuotation', id }
    return (

      <PageHeaderLayout
        title="维修报价总览"
        content="维修报价总览"
        wrapperClassName={styles.advancedForm}
      >


		<Card title="维修报价项目列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <RepairingQuotationItemEditTable data={repairingQuotationItemList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="修理付款列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <VehicleRepairingPaymentEditTable data={vehicleRepairingPaymentList} owner={owner} {...this.props} />
          </Form>
        </Card>

 
      </PageHeaderLayout>
    )
  }
}


