

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
import styles from './UserApp.editdetail.less';


import ObjectAccessEditTable from '../objectaccess/ObjectAccess.edittable';



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
  userApp: state._userApp,
}))
export default class UserAppEditDetail extends Component {
  render() {
    // eslint-disable-next-line max-len
    const { id, objectAccessCount} = this.props.userApp;
    const { objectAccessList} = this.props.userApp;
    
    const owner = { type: '_userApp', id};
    return (

      <PageHeaderLayout
        title="用户应用程序总览"
        content="用户应用程序总览"
        wrapperClassName={styles.advancedForm}
      >


          
            
            
      <Card title="对象访问列表" className={styles.card} bordered={false}>
        <Form layout="vertical" hideRequiredMark>
        <ObjectAccessEditTable data={objectAccessList} owner={owner} />
       </Form>
       </Card>
            
            

 
      </PageHeaderLayout>
    );
  }
}



