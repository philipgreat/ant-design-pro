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
import styles from './Contract.editdetail.less'
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
  contract: state._contract,
}))
export default class ContractEditDetail extends Component {
  render() {
    const { ServicePriceEditTable } = GlobalComponents

    // eslint-disable-next-line max-len
    const { id, servicePriceCount } = this.props.contract
    const { servicePriceList } = this.props.contract

    const owner = { type: '_contract', id }
    return (
      <PageHeaderLayout
        title="合同总览"
        content="合同总览"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="合同价格列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <ServicePriceEditTable
              data={servicePriceList}
              owner={owner}
              {...this.props}
            />
          </Form>
        </Card>
      </PageHeaderLayout>
    )
  }
}
