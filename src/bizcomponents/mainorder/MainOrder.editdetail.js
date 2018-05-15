

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
import styles from './MainOrder.editdetail.less'
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



class MainOrderEditDetail extends Component {
  render() {
    const {LineItemEditTable} = GlobalComponents;
    const {MainOrderPaymentEditTable} = GlobalComponents;
    const {PlatformAccountDetailsEditTable} = GlobalComponents;
    const {FundationAccountDetailsEditTable} = GlobalComponents;
    const {StoreAccountDetailsEditTable} = GlobalComponents;
    const {CustomerAccountDetailsEditTable} = GlobalComponents;
    const {MemberCustomerEditTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    const { id, lineItemCount, mainOrderPaymentCount, platformAccountDetailsCount, fundationAccountDetailsCount, storeAccountDetailsCount, customerAccountDetailsCount, memberCustomerCount } = this.props.mainOrder
    const { lineItemList, mainOrderPaymentList, platformAccountDetailsList, fundationAccountDetailsList, storeAccountDetailsList, customerAccountDetailsList, memberCustomerList } = this.props.mainOrder
    
    const owner = { type: '_mainOrder', id }
    return (

      <PageHeaderLayout
        title="主订单总览"
        content="主订单总览"
        wrapperClassName={styles.advancedForm}
      >


		<Card title="行项目列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <LineItemEditTable data={lineItemList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="主要订单付款列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <MainOrderPaymentEditTable data={mainOrderPaymentList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="平台账户信息列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <PlatformAccountDetailsEditTable data={platformAccountDetailsList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="基金账户信息列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <FundationAccountDetailsEditTable data={fundationAccountDetailsList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="存储帐户详细信息列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <StoreAccountDetailsEditTable data={storeAccountDetailsList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="客户账户信息列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <CustomerAccountDetailsEditTable data={customerAccountDetailsList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="会员的客户列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <MemberCustomerEditTable data={memberCustomerList} owner={owner} {...this.props} />
          </Form>
        </Card>

 
      </PageHeaderLayout>
    )
  }
}
export default connect(state => ({
  mainOrder: state._mainOrder,
}))(MainOrderEditDetail)


