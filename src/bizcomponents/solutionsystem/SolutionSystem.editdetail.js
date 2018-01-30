

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
import styles from './SolutionSystem.editdetail.less'
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
  solutionSystem: state._solutionSystem,
}))
export default class SolutionSystemEditDetail extends Component {
  render() {
    const {DesignerEditTable} = GlobalComponents;
    const {SeniorDesignerEditTable} = GlobalComponents;
    const {EquipmentSupplierEditTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    const { id, designerCount, seniorDesignerCount, equipmentSupplierCount } = this.props.solutionSystem
    const { designerList, seniorDesignerList, equipmentSupplierList } = this.props.solutionSystem
    
    const owner = { type: '_solutionSystem', id }
    return (

      <PageHeaderLayout
        title="解决方案系统总览"
        content="解决方案系统总览"
        wrapperClassName={styles.advancedForm}
      >


		<Card title="设计师列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <DesignerEditTable data={designerList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="高级设计师列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <SeniorDesignerEditTable data={seniorDesignerList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="设备供应商列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <EquipmentSupplierEditTable data={equipmentSupplierList} owner={owner} {...this.props} />
          </Form>
        </Card>

 
      </PageHeaderLayout>
    )
  }
}



