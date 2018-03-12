

import React, { Component } from 'react'
import { connect } from 'dva'
import moment from 'moment'
import { Row, Col, Icon, Card, Tabs, Table, Radio, DatePicker, Tooltip, Menu, Dropdown } from 'antd'
import { Link, Route, Redirect, Switch } from 'dva/router'
import numeral from 'numeral'
import {
  ChartCard, yuan, MiniArea, MiniBar, MiniProgress, Field, Bar, Pie, TimelineChart,
} from '../../components/Charts'
import Trend from '../../components/Trend'
import NumberInfo from '../../components/NumberInfo'
import { getTimeDistance } from '../../utils/utils'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import styles from './TaskResolving.dashboard.less'
import DescriptionList from '../../components/DescriptionList';
const { Description } = DescriptionList;
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
const summaryOf = (taskResolving) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{taskResolving.id}</Description> 
<Description term="谁">{taskResolving.who}</Description> 
<Description term="行动时间">{ moment(taskResolving.actionTime).format('YYYY-MM-DD')}</Description> 
<Description term="评论">{taskResolving.comment}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  taskResolving: state._taskResolving,
}))
export default class TaskResolvingDashboard extends Component {
  render() {
    // eslint-disable-next-line max-len
    const { id, taskCount } = this.props.taskResolving
    
    
    
    return (

      <PageHeaderLayout
        title="任务分解总览"
        content={summaryOf(this.props.taskResolving)}
        wrapperClassName={styles.advancedForm}
      >
        <div>
          <Row gutter={24}>

          
            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="任务"
                action={<Tooltip title="任务"><Icon type="info-circle-o" /></Tooltip>}
                total={numeral(taskCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link to={`/taskResolving/${id}/list/taskList`}><Icon type="profile" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/taskResolving/${id}/list/taskCreateForm`}><Icon type="plus-circle-o" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/taskResolving/${id}/list/taskList`}><Icon type="line-chart" style={{ fontSize: 20, color: '#08c' }} /></Link>
              </ChartCard>
            </Col>

          </Row>
        </div>
      </PageHeaderLayout>
    )
  }
}



