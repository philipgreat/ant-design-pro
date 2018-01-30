

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
import styles from './Equipment.editdetail.less'
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
  equipment: state._equipment,
}))
export default class EquipmentEditDetail extends Component {
  render() {
    const {EquipmentApplicationEditTable} = GlobalComponents;
    const {InputInterfaceEditTable} = GlobalComponents;
    const {OutputInterfaceEditTable} = GlobalComponents;
    const {EquipmentParameterEditTable} = GlobalComponents;
    const {EquipmentSupplyLeadTimeEditTable} = GlobalComponents;
    const {EquipmentFileEditTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    const { id, equipmentApplicationCount, inputInterfaceCount, outputInterfaceCount, equipmentParameterCount, equipmentSupplyLeadTimeCount, equipmentFileCount } = this.props.equipment
    const { equipmentApplicationList, inputInterfaceList, outputInterfaceList, equipmentParameterList, equipmentSupplyLeadTimeList, equipmentFileList } = this.props.equipment
    
    const owner = { type: '_equipment', id }
    return (

      <PageHeaderLayout
        title="设备总览"
        content="设备总览"
        wrapperClassName={styles.advancedForm}
      >


		<Card title="设备应用程序列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <EquipmentApplicationEditTable data={equipmentApplicationList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="输入接口列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <InputInterfaceEditTable data={inputInterfaceList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="输出接口列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <OutputInterfaceEditTable data={outputInterfaceList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="设备参数列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <EquipmentParameterEditTable data={equipmentParameterList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="设备供应提前期列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <EquipmentSupplyLeadTimeEditTable data={equipmentSupplyLeadTimeList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="设备文件列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <EquipmentFileEditTable data={equipmentFileList} owner={owner} {...this.props} />
          </Form>
        </Card>

 
      </PageHeaderLayout>
    )
  }
}



