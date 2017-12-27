

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
import styles from './UserMessage.editdetail.less';




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
  userMessage: state._userMessage,
}))
export default class UserMessageEditDetail extends Component {
  render() {
    // eslint-disable-next-line max-len
    const { id, } = this.props.userMessage;
    const { } = this.props.userMessage;
    
    const owner = { type: '_userMessage', id};
    return (

      <PageHeaderLayout
        title="用户消息总览"
        content="用户消息总览"
        wrapperClassName={styles.advancedForm}
      >


 
      </PageHeaderLayout>
    );
  }
}



