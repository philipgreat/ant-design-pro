

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
import styles from './CarInspectionPlatform.editdetail.less'
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
  carInspectionPlatform: state._carInspectionPlatform,
}))
export default class CarInspectionPlatformEditDetail extends Component {
  render() {
    const {ProvinceEditTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    const { id, provinceCount } = this.props.carInspectionPlatform
    const { provinceList } = this.props.carInspectionPlatform
    
    const owner = { type: '_carInspectionPlatform', id }
    return (

      <PageHeaderLayout
        title="汽车检测平台总览"
        content="汽车检测平台总览"
        wrapperClassName={styles.advancedForm}
      >


		<Card title="省列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <ProvinceEditTable data={provinceList} owner={owner} {...this.props} />
          </Form>
        </Card>

 
      </PageHeaderLayout>
    )
  }
}



