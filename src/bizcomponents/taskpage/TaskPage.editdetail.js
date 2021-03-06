

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
import styles from './TaskPage.editdetail.less'
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



class TaskPageEditDetail extends Component {
  render() {
    const {TaskFilterEditTable} = GlobalComponents;
    const {TaskEditTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    const { id, taskFilterCount, taskCount } = this.props.taskPage
    const { taskFilterList, taskList } = this.props.taskPage
    
    const owner = { type: '_taskPage', id }
    return (

      <PageHeaderLayout
        title="任务页面总览"
        content="任务页面总览"
        wrapperClassName={styles.advancedForm}
      >


		<Card title="任务过滤器列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <TaskFilterEditTable data={taskFilterList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="任务列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <TaskEditTable data={taskList} owner={owner} {...this.props} />
          </Form>
        </Card>

 
      </PageHeaderLayout>
    )
  }
}
export default connect(state => ({
  taskPage: state._taskPage,
}))(TaskPageEditDetail)


