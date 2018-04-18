import React, { Component } from 'react'
import { connect } from 'dva'
import moment from 'moment'
import {
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
import styles from './CompanyQrcodePromotionRecord.dashboard.less'
import DescriptionList from '../../components/DescriptionList'
const { Description } = DescriptionList
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
const summaryOf = companyQrcodePromotionRecord => {
  return (
    <DescriptionList className={styles.headerList} size="small" col="4">
      <Description term="ID">{companyQrcodePromotionRecord.id}</Description>
      <Description term="创建时间">
        {moment(companyQrcodePromotionRecord.createTime).format('YYYY-MM-DD')}
      </Description>
    </DescriptionList>
  )
}

@connect(state => ({
  companyQrcodePromotionRecord: state._companyQrcodePromotionRecord,
}))
export default class CompanyQrcodePromotionRecordDashboard extends Component {
  render() {
    // eslint-disable-next-line max-len
    const { id } = this.props.companyQrcodePromotionRecord

    return (
      <PageHeaderLayout
        title="公司二维码推广记录总览"
        content={summaryOf(this.props.companyQrcodePromotionRecord)}
        wrapperClassName={styles.advancedForm}
      >
        <div>
          <Row gutter={24} />
        </div>
      </PageHeaderLayout>
    )
  }
}
