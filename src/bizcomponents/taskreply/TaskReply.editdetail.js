

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
import styles from './TaskReply.editdetail.less';


import TaskReplyLikeEditTable from '../taskreplylike/TaskReplyLike.edittable';



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
  taskReply: state._taskReply,
}))
export default class TaskReplyEditDetail extends Component {
  render() {
    // eslint-disable-next-line max-len
    const { id, taskReplyLikeCount} = this.props.taskReply;
    const { taskReplyLikeList} = this.props.taskReply;
    
    const owner = { type: '_taskReply', id};
    return (

      <PageHeaderLayout
        title="回复任务总览"
        content="回复任务总览"
        wrapperClassName={styles.advancedForm}
      >


          
            
            
      <Card title="任务回复点赞列表" className={styles.card} bordered={false}>
        <Form layout="vertical" hideRequiredMark>
        <TaskReplyLikeEditTable data={taskReplyLikeList} owner={owner} />
       </Form>
       </Card>
            
            

 
      </PageHeaderLayout>
    );
  }
}



