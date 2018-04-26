

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
import styles from './LevelOneDepartment.editdetail.less'
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
  levelOneDepartment: state._levelOneDepartment,
}))
export default class LevelOneDepartmentEditDetail extends Component {
  render() {
    const {LevelTwoDepartmentEditTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    const { id, levelTwoDepartmentCount } = this.props.levelOneDepartment
    const { levelTwoDepartmentList } = this.props.levelOneDepartment
    
    const owner = { type: '_levelOneDepartment', id }
    return (

      <PageHeaderLayout
        title="一级部门总览"
        content="一级部门总览"
        wrapperClassName={styles.advancedForm}
      >


		<Card title="二级部门列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <LevelTwoDepartmentEditTable data={levelTwoDepartmentList} owner={owner} {...this.props} />
          </Form>
        </Card>

 
      </PageHeaderLayout>
    )
  }
}



