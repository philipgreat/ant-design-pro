

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
import styles from './TaskPage.dashboard.less';

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
  taskPage: state.taskPage,
}))
export default class TaskPageDashboard extends Component {
 
  
  render() {
    
    
    const {id,taskFilterCount,taskCount} = this.props.taskPage;
	
	
    
    return (

     <PageHeaderLayout
        title="任务页面总览"
        content="任务页面总览"
        wrapperClassName={styles.advancedForm}
      >
      <div>
        <Row gutter={24}>
              
          
          <Col {...topColResponsiveProps}>
            <ChartCard
              bordered={false}
              title="任务过滤器"
              action={<Tooltip title="任务过滤器"><Icon type="info-circle-o" /></Tooltip>}
              total={numeral(taskFilterCount).format('0,0')}
              footer={<Field label="状态" value="良好" />}
              contentHeight={46}
            >
            <Link to={"/taskPage/"+id+"/list/taskFilterList"}><Icon type="profile" style={{ fontSize: 20, color: '#08c' }}/></Link>
            &nbsp;
            <Link to={"/taskPage/"+id+"/list/taskFilterCreateForm"}><Icon type="plus-circle-o" style={{ fontSize: 20, color: '#08c' }}/></Link>
            &nbsp;
            <Link to={"/taskPage/"+id+"/list/taskFilterList"}><Icon type="line-chart" style={{ fontSize: 20, color: '#08c' }}/></Link>
            
            </ChartCard>
          </Col>
               
          
          <Col {...topColResponsiveProps}>
            <ChartCard
              bordered={false}
              title="任务"
              action={<Tooltip title="任务"><Icon type="info-circle-o" /></Tooltip>}
              total={numeral(taskCount).format('0,0')}
              footer={<Field label="状态" value="良好" />}
              contentHeight={46}
            >
            <Link to={"/taskPage/"+id+"/list/taskList"}><Icon type="profile" style={{ fontSize: 20, color: '#08c' }}/></Link>
            &nbsp;
            <Link to={"/taskPage/"+id+"/list/taskCreateForm"}><Icon type="plus-circle-o" style={{ fontSize: 20, color: '#08c' }}/></Link>
            &nbsp;
            <Link to={"/taskPage/"+id+"/list/taskList"}><Icon type="line-chart" style={{ fontSize: 20, color: '#08c' }}/></Link>
            
            </ChartCard>
          </Col>
          

        </Row>

        

       
      </div>
      </PageHeaderLayout>
    );
  }
}



