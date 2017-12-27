

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
import styles from './SecUser.editdetail.less';


import UserAppEditTable from '../userapp/UserApp.edittable';

import LoginHistoryEditTable from '../loginhistory/LoginHistory.edittable';



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
  secUser: state._secUser,
}))
export default class SecUserEditDetail extends Component {
  render() {
    // eslint-disable-next-line max-len
    const { id, userAppCount, loginHistoryCount} = this.props.secUser;
    const { userAppList, loginHistoryList} = this.props.secUser;
    
    const owner = { type: '_secUser', id};
    return (

      <PageHeaderLayout
        title="SEC的用户总览"
        content="SEC的用户总览"
        wrapperClassName={styles.advancedForm}
      >


          
            
            
      <Card title="用户应用程序列表" className={styles.card} bordered={false}>
        <Form layout="vertical" hideRequiredMark>
        <UserAppEditTable data={userAppList} owner={owner} />
       </Form>
       </Card>
            
            

          
            
            
      <Card title="登录历史列表" className={styles.card} bordered={false}>
        <Form layout="vertical" hideRequiredMark>
        <LoginHistoryEditTable data={loginHistoryList} owner={owner} />
       </Form>
       </Card>
            
            

 
      </PageHeaderLayout>
    );
  }
}


