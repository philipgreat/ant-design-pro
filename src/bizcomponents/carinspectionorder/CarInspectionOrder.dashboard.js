

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
import styles from './CarInspectionOrder.dashboard.less';

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
  carInspectionOrder: state._carInspectionOrder,
}))
export default class CarInspectionOrderDashboard extends Component {
 
  
  render() {
    
    
    const {id,carReceivingServiceOrderCount,carInspectionServiceOrderCount,carRepairingServiceOrderCount} = this.props.carInspectionOrder;
	
	
    
    return (

     <PageHeaderLayout
        title="审车订单总览"
        content="审车订单总览"
        wrapperClassName={styles.advancedForm}
      >
      <div>
        <Row gutter={24}>
              
          
          <Col {...topColResponsiveProps}>
            <ChartCard
              bordered={false}
              title="车辆接收服务令"
              action={<Tooltip title="车辆接收服务令"><Icon type="info-circle-o" /></Tooltip>}
              total={numeral(carReceivingServiceOrderCount).format('0,0')}
              footer={<Field label="状态" value="良好" />}
              contentHeight={46}
            >
            <Link to={"/carInspectionOrder/"+id+"/list/carReceivingServiceOrderList"}><Icon type="profile" style={{ fontSize: 20, color: '#08c' }}/></Link>
            &nbsp;
            <Link to={"/carInspectionOrder/"+id+"/list/carReceivingServiceOrderCreateForm"}><Icon type="plus-circle-o" style={{ fontSize: 20, color: '#08c' }}/></Link>
            &nbsp;
            <Link to={"/carInspectionOrder/"+id+"/list/carReceivingServiceOrderList"}><Icon type="line-chart" style={{ fontSize: 20, color: '#08c' }}/></Link>
            
            </ChartCard>
          </Col>
               
          
          <Col {...topColResponsiveProps}>
            <ChartCard
              bordered={false}
              title="汽车检查服务单"
              action={<Tooltip title="汽车检查服务单"><Icon type="info-circle-o" /></Tooltip>}
              total={numeral(carInspectionServiceOrderCount).format('0,0')}
              footer={<Field label="状态" value="良好" />}
              contentHeight={46}
            >
            <Link to={"/carInspectionOrder/"+id+"/list/carInspectionServiceOrderList"}><Icon type="profile" style={{ fontSize: 20, color: '#08c' }}/></Link>
            &nbsp;
            <Link to={"/carInspectionOrder/"+id+"/list/carInspectionServiceOrderCreateForm"}><Icon type="plus-circle-o" style={{ fontSize: 20, color: '#08c' }}/></Link>
            &nbsp;
            <Link to={"/carInspectionOrder/"+id+"/list/carInspectionServiceOrderList"}><Icon type="line-chart" style={{ fontSize: 20, color: '#08c' }}/></Link>
            
            </ChartCard>
          </Col>
               
          
          <Col {...topColResponsiveProps}>
            <ChartCard
              bordered={false}
              title="汽车修理服务单"
              action={<Tooltip title="汽车修理服务单"><Icon type="info-circle-o" /></Tooltip>}
              total={numeral(carRepairingServiceOrderCount).format('0,0')}
              footer={<Field label="状态" value="良好" />}
              contentHeight={46}
            >
            <Link to={"/carInspectionOrder/"+id+"/list/carRepairingServiceOrderList"}><Icon type="profile" style={{ fontSize: 20, color: '#08c' }}/></Link>
            &nbsp;
            <Link to={"/carInspectionOrder/"+id+"/list/carRepairingServiceOrderCreateForm"}><Icon type="plus-circle-o" style={{ fontSize: 20, color: '#08c' }}/></Link>
            &nbsp;
            <Link to={"/carInspectionOrder/"+id+"/list/carRepairingServiceOrderList"}><Icon type="line-chart" style={{ fontSize: 20, color: '#08c' }}/></Link>
            
            </ChartCard>
          </Col>
          

        </Row>

        

       
      </div>
      </PageHeaderLayout>
    );
  }
}



