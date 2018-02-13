

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
import styles from './ServiceFileMovementM2c.editdetail.less'
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
  serviceFileMovementM2c: state._serviceFileMovementM2c,
}))
export default class ServiceFileMovementM2cEditDetail extends Component {
  render() {
    const {HandOverChecklistResultEditTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    const { id, handOverChecklistResultCount } = this.props.serviceFileMovementM2c
    const { handOverChecklistResultList } = this.props.serviceFileMovementM2c
    
    const owner = { type: '_serviceFileMovementM2c', id }
    return (

      <PageHeaderLayout
        title="还件服务总览"
        content="还件服务总览"
        wrapperClassName={styles.advancedForm}
      >


		<Card title="移交清单结果列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <HandOverChecklistResultEditTable data={handOverChecklistResultList} owner={owner} {...this.props} />
          </Form>
        </Card>

 
      </PageHeaderLayout>
    )
  }
}



