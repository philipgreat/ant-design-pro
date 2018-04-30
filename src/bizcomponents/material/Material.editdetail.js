

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
import styles from './Material.editdetail.less'
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
  material: state._material,
}))
export default class MaterialEditDetail extends Component {
  render() {
    const {MaterialApplicationEditTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    const { id, materialApplicationCount } = this.props.material
    const { materialApplicationList } = this.props.material
    
    const owner = { type: '_material', id }
    return (

      <PageHeaderLayout
        title="材料总览"
        content="材料总览"
        wrapperClassName={styles.advancedForm}
      >


		<Card title="材料的应用列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <MaterialApplicationEditTable data={materialApplicationList} owner={owner} {...this.props} />
          </Form>
        </Card>

 
      </PageHeaderLayout>
    )
  }
}



