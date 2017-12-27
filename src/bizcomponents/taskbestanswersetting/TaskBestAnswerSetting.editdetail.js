

import React, { Component } from 'react';
import { connect } from 'dva';
import { Form,Button, Row, Col, Icon, Card, Tabs, Table, Radio, DatePicker, Tooltip, Menu, Dropdown } from 'antd';
import { Link, Route, Redirect, Switch } from 'dva/router';
import numeral from 'numeral';
import {
  ChartCard, yuan, MiniArea, MiniBar, MiniProgress, Field, Bar, Pie, TimelineChart,
} from '../../components/Charts';
import Trend from '../../components/Trend';
import NumberInfo from '../../components/NumberInfo';
import { getTimeDistance } from '../../utils/utils';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import styles from './TaskBestAnswerSetting.editdetail.less';


import TaskReplyEditTable from '../taskreply/TaskReply.edittable';



const { TabPane } = Tabs;
const { RangePicker } = DatePicker;

const topColResponsiveProps = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 6,
  style: { marginBottom: 24 },
};


@connect(state => ({
  taskBestAnswerSetting: state._taskBestAnswerSetting,
}))
export default class TaskBestAnswerSettingEditDetail extends Component {
  render() {
    // eslint-disable-next-line max-len
    const { id, taskReplyCount} = this.props.taskBestAnswerSetting;
    const { taskReplyList} = this.props.taskBestAnswerSetting;
    
    const owner = { type: '_taskBestAnswerSetting', id};
    return (

      <PageHeaderLayout
        title="任务最佳答案设置总览"
        content="任务最佳答案设置总览"
        wrapperClassName={styles.advancedForm}
      >


          
            
            
      <Card title="回复任务列表" className={styles.card} bordered={false}>
        <Form layout="vertical" hideRequiredMark>
        <TaskReplyEditTable data={taskReplyList} owner={owner} />
       </Form>
       </Card>
            
            

 
      </PageHeaderLayout>
    );
  }
}



