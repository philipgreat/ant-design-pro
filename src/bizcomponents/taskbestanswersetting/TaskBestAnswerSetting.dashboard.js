

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
import styles from './TaskBestAnswerSetting.dashboard.less'
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
const summaryOf = (taskBestAnswerSetting) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{taskBestAnswerSetting.id}</Description> 
<Description term="谁">{taskBestAnswerSetting.who}</Description> 
<Description term="设置时间">{ moment(taskBestAnswerSetting.setTime).format('YYYY-MM-DD')}</Description> 
<Description term="评论">{taskBestAnswerSetting.comment}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  taskBestAnswerSetting: state._taskBestAnswerSetting,
}))
export default class TaskBestAnswerSettingDashboard extends Component {
  render() {
    // eslint-disable-next-line max-len
    const { id, taskReplyCount } = this.props.taskBestAnswerSetting
    
    
    
    return (

      <PageHeaderLayout
        title="任务最佳答案设置总览"
        content={summaryOf(this.props.taskBestAnswerSetting)}
        wrapperClassName={styles.advancedForm}
      >
        <div>
          <Row gutter={24}>

          
            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="回复任务"
                action={<Tooltip title="回复任务"><Icon type="info-circle-o" /></Tooltip>}
                total={numeral(taskReplyCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link to={`/taskBestAnswerSetting/${id}/list/taskReplyList`}><Icon type="profile" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/taskBestAnswerSetting/${id}/list/taskReplyCreateForm`}><Icon type="plus-circle-o" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/taskBestAnswerSetting/${id}/list/taskReplyList`}><Icon type="line-chart" style={{ fontSize: 20, color: '#08c' }} /></Link>
              </ChartCard>
            </Col>

          </Row>
        </div>
      </PageHeaderLayout>
    )
  }
}



