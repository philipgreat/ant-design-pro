

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
import styles from './FundationAccount.editdetail.less'
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



class FundationAccountEditDetail extends Component {
  render() {
    const {FundationAccountDetailsEditTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    const { id, fundationAccountDetailsCount } = this.props.fundationAccount
    const { fundationAccountDetailsList } = this.props.fundationAccount
    
    const owner = { type: '_fundationAccount', id }
    return (

      <PageHeaderLayout
        title="基金账户总览"
        content="基金账户总览"
        wrapperClassName={styles.advancedForm}
      >


		<Card title="基金账户信息列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <FundationAccountDetailsEditTable data={fundationAccountDetailsList} owner={owner} {...this.props} />
          </Form>
        </Card>

 
      </PageHeaderLayout>
    )
  }
}
export default connect(state => ({
  fundationAccount: state._fundationAccount,
}))(FundationAccountEditDetail)


