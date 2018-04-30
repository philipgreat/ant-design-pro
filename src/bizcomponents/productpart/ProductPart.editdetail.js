

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
import styles from './ProductPart.editdetail.less'
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
  productPart: state._productPart,
}))
export default class ProductPartEditDetail extends Component {
  render() {
    const {MaterialApplicationEditTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    const { id, materialApplicationCount } = this.props.productPart
    const { materialApplicationList } = this.props.productPart
    
    const owner = { type: '_productPart', id }
    return (

      <PageHeaderLayout
        title="产品零件总览"
        content="产品零件总览"
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



