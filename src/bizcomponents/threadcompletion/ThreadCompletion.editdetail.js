

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
import styles from './ThreadCompletion.editdetail.less';


import {ThreadEditTable} from '../../custcomponents';



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
  threadCompletion: state._threadCompletion,
}))
export default class ThreadCompletionEditDetail extends Component {
  render() {
    // eslint-disable-next-line max-len
    const { id, threadCount} = this.props.threadCompletion;
    const { threadList} = this.props.threadCompletion;
    
    const owner = { type: '_threadCompletion', id};
    return (

      <PageHeaderLayout
        title="线程完成总览"
        content="线程完成总览"
        wrapperClassName={styles.advancedForm}
      >


          
            
            
      <Card title="主贴列表" className={styles.card} bordered={false}>
        <Form layout="vertical" hideRequiredMark>
        <ThreadEditTable data={threadList} owner={owner} />
       </Form>
       </Card>
            
            

 
      </PageHeaderLayout>
    );
  }
}



