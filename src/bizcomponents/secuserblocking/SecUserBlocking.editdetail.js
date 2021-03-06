

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
import styles from './SecUserBlocking.editdetail.less'
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



class SecUserBlockingEditDetail extends Component {
  render() {
    const {SecUserEditTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    const { id, secUserCount } = this.props.secUserBlocking
    const { secUserList } = this.props.secUserBlocking
    
    const owner = { type: '_secUserBlocking', id }
    return (

      <PageHeaderLayout
        title="SEC用户阻塞总览"
        content="SEC用户阻塞总览"
        wrapperClassName={styles.advancedForm}
      >


		<Card title="SEC的用户列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <SecUserEditTable data={secUserList} owner={owner} {...this.props} />
          </Form>
        </Card>

 
      </PageHeaderLayout>
    )
  }
}
export default connect(state => ({
  secUserBlocking: state._secUserBlocking,
}))(SecUserBlockingEditDetail)


