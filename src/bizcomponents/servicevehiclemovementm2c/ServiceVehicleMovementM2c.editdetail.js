import React, { Component } from 'react'
import { connect } from 'dva'
import {
  Form,
  Button,
  Row,
  Col,
  Icon,
  Card,
  Tabs,
  Table,
  Radio,
  DatePicker,
  Tooltip,
  Menu,
  Dropdown,
} from 'antd'
import { Link, Route, Redirect, Switch } from 'dva/router'
import numeral from 'numeral'
import {
  ChartCard,
  yuan,
  MiniArea,
  MiniBar,
  MiniProgress,
  Field,
  Bar,
  Pie,
  TimelineChart,
} from '../../components/Charts'
import Trend from '../../components/Trend'
import NumberInfo from '../../components/NumberInfo'
import { getTimeDistance } from '../../utils/utils'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import styles from './ServiceVehicleMovementM2c.editdetail.less'
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
  serviceVehicleMovementM2c: state._serviceVehicleMovementM2c,
}))
export default class ServiceVehicleMovementM2cEditDetail extends Component {
  render() {
    const {
      ServiceVehicleMovementM2cChecklistResultEditTable,
    } = GlobalComponents

    // eslint-disable-next-line max-len
    const {
      id,
      serviceVehicleMovementM2cChecklistResultCount,
    } = this.props.serviceVehicleMovementM2c
    const {
      serviceVehicleMovementM2cChecklistResultList,
    } = this.props.serviceVehicleMovementM2c

    const owner = { type: '_serviceVehicleMovementM2c', id }
    return (
      <PageHeaderLayout
        title="还车服务总览"
        content="还车服务总览"
        wrapperClassName={styles.advancedForm}
      >
        <Card
          title="还车服务检查结果列表"
          className={styles.card}
          bordered={false}
        >
          <Form layout="vertical" hideRequiredMark>
            <ServiceVehicleMovementM2cChecklistResultEditTable
              data={serviceVehicleMovementM2cChecklistResultList}
              owner={owner}
              {...this.props}
            />
          </Form>
        </Card>
      </PageHeaderLayout>
    )
  }
}
