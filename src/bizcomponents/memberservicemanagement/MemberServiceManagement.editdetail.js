

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
import styles from './MemberServiceManagement.editdetail.less'
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



class MemberServiceManagementEditDetail extends Component {
  render() {
    const {MemberServiceProductEditTable} = GlobalComponents;
    const {MemberServicePeriodEditTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    const { id, memberServiceProductCount, memberServicePeriodCount } = this.props.memberServiceManagement
    const { memberServiceProductList, memberServicePeriodList } = this.props.memberServiceManagement
    
    const owner = { type: '_memberServiceManagement', id }
    return (

      <PageHeaderLayout
        title="会员服务管理总览"
        content="会员服务管理总览"
        wrapperClassName={styles.advancedForm}
      >


		<Card title="会员服务产品列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <MemberServiceProductEditTable data={memberServiceProductList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="会员服务时间列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <MemberServicePeriodEditTable data={memberServicePeriodList} owner={owner} {...this.props} />
          </Form>
        </Card>

 
      </PageHeaderLayout>
    )
  }
}
export default connect(state => ({
  memberServiceManagement: state._memberServiceManagement,
}))(MemberServiceManagementEditDetail)


