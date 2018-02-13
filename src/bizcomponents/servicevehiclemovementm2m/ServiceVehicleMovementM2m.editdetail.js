

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
import styles from './ServiceVehicleMovementM2m.editdetail.less'
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
  serviceVehicleMovementM2m: state._serviceVehicleMovementM2m,
}))
export default class ServiceVehicleMovementM2mEditDetail extends Component {
  render() {
    const {HandOverChecklistResultEditTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    const { id, handOverChecklistResultCount } = this.props.serviceVehicleMovementM2m
    const { handOverChecklistResultList } = this.props.serviceVehicleMovementM2m
    
    const owner = { type: '_serviceVehicleMovementM2m', id }
    return (

      <PageHeaderLayout
        title="移车服务总览"
        content="移车服务总览"
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



