

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
import styles from './AccountManagement.editdetail.less'
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



class AccountManagementEditDetail extends Component {
  render() {
    const {MemberAccountRechargeProductEditTable} = GlobalComponents;
    const {PlatformAccountEditTable} = GlobalComponents;
    const {FundationAccountEditTable} = GlobalComponents;
    const {StoreAccountEditTable} = GlobalComponents;
    const {CustomerAccountEditTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    const { id, memberAccountRechargeProductCount, platformAccountCount, fundationAccountCount, storeAccountCount, customerAccountCount } = this.props.accountManagement
    const { memberAccountRechargeProductList, platformAccountList, fundationAccountList, storeAccountList, customerAccountList } = this.props.accountManagement
    
    const owner = { type: '_accountManagement', id }
    return (

      <PageHeaderLayout
        title="账户管理总览"
        content="账户管理总览"
        wrapperClassName={styles.advancedForm}
      >


		<Card title="会员帐户充电产品列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <MemberAccountRechargeProductEditTable data={memberAccountRechargeProductList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="平台账户列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <PlatformAccountEditTable data={platformAccountList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="基金账户列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <FundationAccountEditTable data={fundationAccountList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="存储账户列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <StoreAccountEditTable data={storeAccountList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="客户账户列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <CustomerAccountEditTable data={customerAccountList} owner={owner} {...this.props} />
          </Form>
        </Card>

 
      </PageHeaderLayout>
    )
  }
}
export default connect(state => ({
  accountManagement: state._accountManagement,
}))(AccountManagementEditDetail)


