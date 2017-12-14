

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
import styles from './CarRepairWorking.dashboard.less';

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
  carRepairWorking: state._carRepairWorking,
}))
export default class CarRepairWorkingDashboard extends Component {
 
  
  render() {
    
    
    const {id,carRepairingServiceOrderCount} = this.props.carRepairWorking;
	
	
    
    return (

     <PageHeaderLayout
        title="汽车修理工作总览"
        content="汽车修理工作总览"
        wrapperClassName={styles.advancedForm}
      >
      <div>
        <Row gutter={24}>
              
          
          <Col {...topColResponsiveProps}>
            <ChartCard
              bordered={false}
              title="汽车修理服务单"
              action={<Tooltip title="汽车修理服务单"><Icon type="info-circle-o" /></Tooltip>}
              total={numeral(carRepairingServiceOrderCount).format('0,0')}
              footer={<Field label="状态" value="良好" />}
              contentHeight={46}
            >
            <Link to={"/carRepairWorking/"+id+"/list/carRepairingServiceOrderList"}><Icon type="profile" style={{ fontSize: 20, color: '#08c' }}/></Link>
            &nbsp;
            <Link to={"/carRepairWorking/"+id+"/list/carRepairingServiceOrderCreateForm"}><Icon type="plus-circle-o" style={{ fontSize: 20, color: '#08c' }}/></Link>
            &nbsp;
            <Link to={"/carRepairWorking/"+id+"/list/carRepairingServiceOrderList"}><Icon type="line-chart" style={{ fontSize: 20, color: '#08c' }}/></Link>
            
            </ChartCard>
          </Col>
          

        </Row>

        

       
      </div>
      </PageHeaderLayout>
    );
  }
}


