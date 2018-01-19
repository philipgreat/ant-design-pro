

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
import styles from './CompanyEmployeeTermination.editdetail.less'
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
  companyEmployeeTermination: state._companyEmployeeTermination,
}))
export default class CompanyEmployeeTerminationEditDetail extends Component {
  render() {
    const {VehicleServiceCompanyEmployeeEditTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    const { id, vehicleServiceCompanyEmployeeCount } = this.props.companyEmployeeTermination
    const { vehicleServiceCompanyEmployeeList } = this.props.companyEmployeeTermination
    
    const owner = { type: '_companyEmployeeTermination', id }
    return (

      <PageHeaderLayout
        title="公司员工终止总览"
        content="公司员工终止总览"
        wrapperClassName={styles.advancedForm}
      >


		<Card title="服务提供商员工管理列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <VehicleServiceCompanyEmployeeEditTable data={vehicleServiceCompanyEmployeeList} owner={owner} {...this.props} />
          </Form>
        </Card>

 
      </PageHeaderLayout>
    )
  }
}



