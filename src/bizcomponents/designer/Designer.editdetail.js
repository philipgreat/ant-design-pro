

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
import styles from './Designer.editdetail.less'
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
  designer: state._designer,
}))
export default class DesignerEditDetail extends Component {
  render() {
    const {DesignerMessageEditTable} = GlobalComponents;
    const {ProjectEditTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    const { id, designerMessageCount, projectCount } = this.props.designer
    const { designerMessageList, projectList } = this.props.designer
    
    const owner = { type: '_designer', id }
    return (

      <PageHeaderLayout
        title="设计师总览"
        content="设计师总览"
        wrapperClassName={styles.advancedForm}
      >


		<Card title="设计师信息列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <DesignerMessageEditTable data={designerMessageList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="项目列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <ProjectEditTable data={projectList} owner={owner} {...this.props} />
          </Form>
        </Card>

 
      </PageHeaderLayout>
    )
  }
}



