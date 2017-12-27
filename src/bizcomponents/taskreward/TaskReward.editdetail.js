

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
import styles from './TaskReward.editdetail.less';


import TaskEditTable from '../task/Task.edittable';



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
  taskReward: state._taskReward,
}))
export default class TaskRewardEditDetail extends Component {
  render() {
    // eslint-disable-next-line max-len
    const { id, taskCount} = this.props.taskReward;
    const { taskList} = this.props.taskReward;
    
    const owner = { type: '_taskReward', id};
    return (

      <PageHeaderLayout
        title="任务悬赏总览"
        content="任务悬赏总览"
        wrapperClassName={styles.advancedForm}
      >


          
            
            
      <Card title="任务列表" className={styles.card} bordered={false}>
        <Form layout="vertical" hideRequiredMark>
        <TaskEditTable data={taskList} owner={owner} />
       </Form>
       </Card>
            
            

 
      </PageHeaderLayout>
    );
  }
}



