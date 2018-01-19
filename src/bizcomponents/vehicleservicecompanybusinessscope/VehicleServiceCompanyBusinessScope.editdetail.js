

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
import styles from './VehicleServiceCompanyBusinessScope.editdetail.less'
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
  vehicleServiceCompanyBusinessScope: state._vehicleServiceCompanyBusinessScope,
}))
export default class VehicleServiceCompanyBusinessScopeEditDetail extends Component {
  render() {
  
    // eslint-disable-next-line max-len
    const { id,  } = this.props.vehicleServiceCompanyBusinessScope
    const {  } = this.props.vehicleServiceCompanyBusinessScope
    
    const owner = { type: '_vehicleServiceCompanyBusinessScope', id }
    return (

      <PageHeaderLayout
        title="服务提供商服务范围管理总览"
        content="服务提供商服务范围管理总览"
        wrapperClassName={styles.advancedForm}
      >


 
      </PageHeaderLayout>
    )
  }
}


