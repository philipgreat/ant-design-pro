

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
import styles from './EquipmentSupplier.editdetail.less'
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
  equipmentSupplier: state._equipmentSupplier,
}))
export default class EquipmentSupplierEditDetail extends Component {
  render() {
    const {EquipmentApplicationEditTable} = GlobalComponents;
    const {EquipmentEditTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    const { id, equipmentApplicationCount, equipmentCount } = this.props.equipmentSupplier
    const { equipmentApplicationList, equipmentList } = this.props.equipmentSupplier
    
    const owner = { type: '_equipmentSupplier', id }
    return (

      <PageHeaderLayout
        title="设备供应商总览"
        content="设备供应商总览"
        wrapperClassName={styles.advancedForm}
      >


		<Card title="设备应用程序列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <EquipmentApplicationEditTable data={equipmentApplicationList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="设备列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <EquipmentEditTable data={equipmentList} owner={owner} {...this.props} />
          </Form>
        </Card>

 
      </PageHeaderLayout>
    )
  }
}



