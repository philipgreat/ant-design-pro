

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
import styles from './MemberServiceSku.editdetail.less'
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



class MemberServiceSkuEditDetail extends Component {
  render() {
    const {MemberCustomerEditTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    const { id, memberCustomerCount } = this.props.memberServiceSku
    const { memberCustomerList } = this.props.memberServiceSku
    
    const owner = { type: '_memberServiceSku', id }
    return (

      <PageHeaderLayout
        title="会员服务Sku总览"
        content="会员服务Sku总览"
        wrapperClassName={styles.advancedForm}
      >


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
  memberServiceSku: state._memberServiceSku,
}))(MemberServiceSkuEditDetail)


