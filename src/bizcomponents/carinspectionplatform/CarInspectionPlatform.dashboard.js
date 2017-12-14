

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
import styles from './CarInspectionPlatform.dashboard.less';

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
  carInspectionPlatform: state._carInspectionPlatform,
}))
export default class CarInspectionPlatformDashboard extends Component {
 
  
  render() {
    
    
    const {id,customerInfoCount,carReceivingServiceCompanyCount,carInspectionServiceCompanyCount,carRepairingServiceCompanyCount,carInfoCount,carInspectionOrderCount} = this.props.carInspectionPlatform;
	
	
    
    return (

     <PageHeaderLayout
        title="审车平台总览"
        content="审车平台总览"
        wrapperClassName={styles.advancedForm}
      >
      <div>
        <Row gutter={24}>
              
          
          <Col {...topColResponsiveProps}>
            <ChartCard
              bordered={false}
              title="客户信息"
              action={<Tooltip title="客户信息"><Icon type="info-circle-o" /></Tooltip>}
              total={numeral(customerInfoCount).format('0,0')}
              footer={<Field label="状态" value="良好" />}
              contentHeight={46}
            >
            <Link to={"/carInspectionPlatform/"+id+"/list/customerInfoList"}><Icon type="profile" style={{ fontSize: 20, color: '#08c' }}/></Link>
            &nbsp;
            <Link to={"/carInspectionPlatform/"+id+"/list/customerInfoCreateForm"}><Icon type="plus-circle-o" style={{ fontSize: 20, color: '#08c' }}/></Link>
            &nbsp;
            <Link to={"/carInspectionPlatform/"+id+"/list/customerInfoList"}><Icon type="line-chart" style={{ fontSize: 20, color: '#08c' }}/></Link>
            
            </ChartCard>
          </Col>
               
          
          <Col {...topColResponsiveProps}>
            <ChartCard
              bordered={false}
              title="汽车接收服务公司"
              action={<Tooltip title="汽车接收服务公司"><Icon type="info-circle-o" /></Tooltip>}
              total={numeral(carReceivingServiceCompanyCount).format('0,0')}
              footer={<Field label="状态" value="良好" />}
              contentHeight={46}
            >
            <Link to={"/carInspectionPlatform/"+id+"/list/carReceivingServiceCompanyList"}><Icon type="profile" style={{ fontSize: 20, color: '#08c' }}/></Link>
            &nbsp;
            <Link to={"/carInspectionPlatform/"+id+"/list/carReceivingServiceCompanyCreateForm"}><Icon type="plus-circle-o" style={{ fontSize: 20, color: '#08c' }}/></Link>
            &nbsp;
            <Link to={"/carInspectionPlatform/"+id+"/list/carReceivingServiceCompanyList"}><Icon type="line-chart" style={{ fontSize: 20, color: '#08c' }}/></Link>
            
            </ChartCard>
          </Col>
               
          
          <Col {...topColResponsiveProps}>
            <ChartCard
              bordered={false}
              title="汽车代检服务公司"
              action={<Tooltip title="汽车代检服务公司"><Icon type="info-circle-o" /></Tooltip>}
              total={numeral(carInspectionServiceCompanyCount).format('0,0')}
              footer={<Field label="状态" value="良好" />}
              contentHeight={46}
            >
            <Link to={"/carInspectionPlatform/"+id+"/list/carInspectionServiceCompanyList"}><Icon type="profile" style={{ fontSize: 20, color: '#08c' }}/></Link>
            &nbsp;
            <Link to={"/carInspectionPlatform/"+id+"/list/carInspectionServiceCompanyCreateForm"}><Icon type="plus-circle-o" style={{ fontSize: 20, color: '#08c' }}/></Link>
            &nbsp;
            <Link to={"/carInspectionPlatform/"+id+"/list/carInspectionServiceCompanyList"}><Icon type="line-chart" style={{ fontSize: 20, color: '#08c' }}/></Link>
            
            </ChartCard>
          </Col>
               
          
          <Col {...topColResponsiveProps}>
            <ChartCard
              bordered={false}
              title="汽车维修服务公司"
              action={<Tooltip title="汽车维修服务公司"><Icon type="info-circle-o" /></Tooltip>}
              total={numeral(carRepairingServiceCompanyCount).format('0,0')}
              footer={<Field label="状态" value="良好" />}
              contentHeight={46}
            >
            <Link to={"/carInspectionPlatform/"+id+"/list/carRepairingServiceCompanyList"}><Icon type="profile" style={{ fontSize: 20, color: '#08c' }}/></Link>
            &nbsp;
            <Link to={"/carInspectionPlatform/"+id+"/list/carRepairingServiceCompanyCreateForm"}><Icon type="plus-circle-o" style={{ fontSize: 20, color: '#08c' }}/></Link>
            &nbsp;
            <Link to={"/carInspectionPlatform/"+id+"/list/carRepairingServiceCompanyList"}><Icon type="line-chart" style={{ fontSize: 20, color: '#08c' }}/></Link>
            
            </ChartCard>
          </Col>
               
          
          <Col {...topColResponsiveProps}>
            <ChartCard
              bordered={false}
              title="汽车信息"
              action={<Tooltip title="汽车信息"><Icon type="info-circle-o" /></Tooltip>}
              total={numeral(carInfoCount).format('0,0')}
              footer={<Field label="状态" value="良好" />}
              contentHeight={46}
            >
            <Link to={"/carInspectionPlatform/"+id+"/list/carInfoList"}><Icon type="profile" style={{ fontSize: 20, color: '#08c' }}/></Link>
            &nbsp;
            <Link to={"/carInspectionPlatform/"+id+"/list/carInfoCreateForm"}><Icon type="plus-circle-o" style={{ fontSize: 20, color: '#08c' }}/></Link>
            &nbsp;
            <Link to={"/carInspectionPlatform/"+id+"/list/carInfoList"}><Icon type="line-chart" style={{ fontSize: 20, color: '#08c' }}/></Link>
            
            </ChartCard>
          </Col>
               
          
          <Col {...topColResponsiveProps}>
            <ChartCard
              bordered={false}
              title="审车订单"
              action={<Tooltip title="审车订单"><Icon type="info-circle-o" /></Tooltip>}
              total={numeral(carInspectionOrderCount).format('0,0')}
              footer={<Field label="状态" value="良好" />}
              contentHeight={46}
            >
            <Link to={"/carInspectionPlatform/"+id+"/list/carInspectionOrderList"}><Icon type="profile" style={{ fontSize: 20, color: '#08c' }}/></Link>
            &nbsp;
            <Link to={"/carInspectionPlatform/"+id+"/list/carInspectionOrderCreateForm"}><Icon type="plus-circle-o" style={{ fontSize: 20, color: '#08c' }}/></Link>
            &nbsp;
            <Link to={"/carInspectionPlatform/"+id+"/list/carInspectionOrderList"}><Icon type="line-chart" style={{ fontSize: 20, color: '#08c' }}/></Link>
            
            </ChartCard>
          </Col>
          

        </Row>

        

       
      </div>
      </PageHeaderLayout>
    );
  }
}



