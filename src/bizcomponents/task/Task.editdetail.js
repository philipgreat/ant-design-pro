

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
import styles from './Task.editdetail.less';


import TaskAssigmentEditTable from '../taskassigment/TaskAssigment.edittable';

import TaskLikeEditTable from '../tasklike/TaskLike.edittable';

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
  task: state._task,
}))
export default class TaskEditDetail extends Component {
  render() {
    // eslint-disable-next-line max-len
    const { id, taskAssigmentCount, taskLikeCount, taskReplyCount} = this.props.task;
    const { taskAssigmentList, taskLikeList, taskReplyList} = this.props.task;
    
    const owner = { type: '_task', id};
    return (

      <PageHeaderLayout
        title="任务总览"
        content="任务总览"
        wrapperClassName={styles.advancedForm}
      >


          
            
            
      <Card title="任务分配列表" className={styles.card} bordered={false}>
        <Form layout="vertical" hideRequiredMark>
        <TaskAssigmentEditTable data={taskAssigmentList} owner={owner} />
       </Form>
       </Card>
            
            

          
            
            
      <Card title="任务点赞列表" className={styles.card} bordered={false}>
        <Form layout="vertical" hideRequiredMark>
        <TaskLikeEditTable data={taskLikeList} owner={owner} />
       </Form>
       </Card>
            
            

          
            
            
      <Card title="回复任务列表" className={styles.card} bordered={false}>
        <Form layout="vertical" hideRequiredMark>
        <TaskReplyEditTable data={taskReplyList} owner={owner} />
       </Form>
       </Card>
            
            

 
      </PageHeaderLayout>
    );
  }
}



