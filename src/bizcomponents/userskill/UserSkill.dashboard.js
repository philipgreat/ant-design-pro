

import React, { Component } from 'react';
import { connect } from 'dva';
import { Row, Col, Icon, Card, Tabs, Table, Radio, DatePicker, Tooltip, Menu, Dropdown } from 'antd';
import { Link, Route, Redirect, Switch } from 'dva/router';
import numeral from 'numeral';
import {
  ChartCard, yuan, MiniArea, MiniBar, MiniProgress, Field, Bar, Pie, TimelineChart,
} from '../../components/Charts';
import Trend from '../../components/Trend';
import NumberInfo from '../../components/NumberInfo';
import { getTimeDistance } from '../../utils/utils';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import styles from './UserSkill.dashboard.less';

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
  userSkill: state._userSkill,
}))
export default class UserSkillDashboard extends Component {
 
  
  render() {
    
    
    const {id,} = this.props.userSkill;
	
	
    
    return (

     <PageHeaderLayout
        title="用户技能总览"
        content="用户技能总览"
        wrapperClassName={styles.advancedForm}
      >
      <div>
        <Row gutter={24}>
         

        </Row>

        

       
      </div>
      </PageHeaderLayout>
    );
  }
}



