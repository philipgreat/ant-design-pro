

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
import styles from './MemberServicePeriod.editdetail.less'
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



class MemberServicePeriodEditDetail extends Component {
  render() {
    const {MemberServiceSkuEditTable} = GlobalComponents;
    const {MemberCustomerEditTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    const { id, memberServiceSkuCount, memberCustomerCount } = this.props.memberServicePeriod
    const { memberServiceSkuList, memberCustomerList } = this.props.memberServicePeriod
    
    const owner = { type: '_memberServicePeriod', id }
    return (

      <PageHeaderLayout
        title="会员服务时间总览"
        content="会员服务时间总览"
        wrapperClassName={styles.advancedForm}
      >


		<Card title="会员服务Sku列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <MemberServiceSkuEditTable data={memberServiceSkuList} owner={owner} {...this.props} />
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
  memberServicePeriod: state._memberServicePeriod,
}))(MemberServicePeriodEditDetail)


