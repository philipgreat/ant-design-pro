

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
import styles from './ServicePrice.editdetail.less'
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
  servicePrice: state._servicePrice,
}))
export default class ServicePriceEditDetail extends Component {
  render() {
  
    // eslint-disable-next-line max-len
    const { id,  } = this.props.servicePrice
    const {  } = this.props.servicePrice
    
    const owner = { type: '_servicePrice', id }
    return (

      <PageHeaderLayout
        title="服务价格总览"
        content="服务价格总览"
        wrapperClassName={styles.advancedForm}
      >


 
      </PageHeaderLayout>
    )
  }
}



