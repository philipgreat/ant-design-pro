

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
import styles from './TaskHiding.editdetail.less';
import GlobalComponents from '../../custcomponents';



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
  taskHiding: state._taskHiding,
}))
export default class TaskHidingEditDetail extends Component {
  render() {
    const {TaskEditTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    const { id, taskCount} = this.props.taskHiding;
    const { taskList} = this.props.taskHiding;
    
    const owner = { type: '_taskHiding', id};
    return (

      <PageHeaderLayout
        title="任务屏蔽总览"
        content="任务屏蔽总览"
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



