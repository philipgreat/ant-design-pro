

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
import styles from './ServiceVehicleMovementC2m.editdetail.less'
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
  serviceVehicleMovementC2m: state._serviceVehicleMovementC2m,
}))
export default class ServiceVehicleMovementC2mEditDetail extends Component {
  render() {
    const {ServiceVehicleMovementC2mChecklistResultEditTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    const { id, serviceVehicleMovementC2mChecklistResultCount } = this.props.serviceVehicleMovementC2m
    const { serviceVehicleMovementC2mChecklistResultList } = this.props.serviceVehicleMovementC2m
    
    const owner = { type: '_serviceVehicleMovementC2m', id }
    return (

      <PageHeaderLayout
        title="收车服务总览"
        content="收车服务总览"
        wrapperClassName={styles.advancedForm}
      >


		<Card title="收车检车结果列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <ServiceVehicleMovementC2mChecklistResultEditTable data={serviceVehicleMovementC2mChecklistResultList} owner={owner} {...this.props} />
          </Form>
        </Card>

 
      </PageHeaderLayout>
    )
  }
}



