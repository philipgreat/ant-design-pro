

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
import styles from './Printer.editdetail.less'
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



class PrinterEditDetail extends Component {
  render() {
    const {PrinterTaskEditTable} = GlobalComponents;
    const {StoreEditTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    const { id, printerTaskCount, storeCount } = this.props.printer
    const { printerTaskList, storeList } = this.props.printer
    
    const owner = { type: '_printer', id }
    return (

      <PageHeaderLayout
        title="打印机总览"
        content="打印机总览"
        wrapperClassName={styles.advancedForm}
      >


		<Card title="打印机任务列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <PrinterTaskEditTable data={printerTaskList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="商店列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <StoreEditTable data={storeList} owner={owner} {...this.props} />
          </Form>
        </Card>

 
      </PageHeaderLayout>
    )
  }
}
export default connect(state => ({
  printer: state._printer,
}))(PrinterEditDetail)


