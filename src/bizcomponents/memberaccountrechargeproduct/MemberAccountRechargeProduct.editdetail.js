

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
import styles from './MemberAccountRechargeProduct.editdetail.less'
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



class MemberAccountRechargeProductEditDetail extends Component {
  render() {
    const {MemberAccountRechargeSkuEditTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    const { id, memberAccountRechargeSkuCount } = this.props.memberAccountRechargeProduct
    const { memberAccountRechargeSkuList } = this.props.memberAccountRechargeProduct
    
    const owner = { type: '_memberAccountRechargeProduct', id }
    return (

      <PageHeaderLayout
        title="会员帐户充电产品总览"
        content="会员帐户充电产品总览"
        wrapperClassName={styles.advancedForm}
      >


		<Card title="会员帐户Sku充电列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <MemberAccountRechargeSkuEditTable data={memberAccountRechargeSkuList} owner={owner} {...this.props} />
          </Form>
        </Card>

 
      </PageHeaderLayout>
    )
  }
}
export default connect(state => ({
  memberAccountRechargeProduct: state._memberAccountRechargeProduct,
}))(MemberAccountRechargeProductEditDetail)


