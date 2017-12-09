

import React, { Component } from 'react';
import { connect } from 'dva';
import { Row, Col, Icon, Card, Tabs, Table, Radio, DatePicker, Tooltip, Menu, Dropdown } from 'antd';
import numeral from 'numeral';
import {
  ChartCard, yuan, MiniArea, MiniBar, MiniProgress, Field, Bar, Pie, TimelineChart,
} from '../../components/Charts';
import Trend from '../../components/Trend';
import NumberInfo from '../../components/NumberInfo';
import { getTimeDistance } from '../../utils/utils';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import styles from './Community.dashboard.less';

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
  community: state.community,
}))
export default class CommunityDashboard extends Component {
 
  
  render() {
    
    
    const {invitationCodeCount,homePageCount,encyclopediaItemCount,taskPageCount,communityUserCount,taskCount,groupPageCount,threadCount} = this.props.community;
	
	
    
    return (

     <PageHeaderLayout
        title="社区总览"
        content="社区总览"
        wrapperClassName={styles.advancedForm}
      >
      <div>
        <Row gutter={24}>
              
          
          <Col {...topColResponsiveProps}>
            <ChartCard
              bordered={false}
              title="邀请码"
              action={<Tooltip title="邀请码"><Icon type="info-circle-o" /></Tooltip>}
              total={numeral(invitationCodeCount).format('0,0')}
              footer={<Field label="状态" value="良好" />}
              contentHeight={46}
            >
            
            </ChartCard>
          </Col>
               
          
          <Col {...topColResponsiveProps}>
            <ChartCard
              bordered={false}
              title="主页"
              action={<Tooltip title="主页"><Icon type="info-circle-o" /></Tooltip>}
              total={numeral(homePageCount).format('0,0')}
              footer={<Field label="状态" value="良好" />}
              contentHeight={46}
            >
            
            </ChartCard>
          </Col>
               
          
          <Col {...topColResponsiveProps}>
            <ChartCard
              bordered={false}
              title="百科全书条目"
              action={<Tooltip title="百科全书条目"><Icon type="info-circle-o" /></Tooltip>}
              total={numeral(encyclopediaItemCount).format('0,0')}
              footer={<Field label="状态" value="良好" />}
              contentHeight={46}
            >
            
            </ChartCard>
          </Col>
               
          
          <Col {...topColResponsiveProps}>
            <ChartCard
              bordered={false}
              title="任务页面"
              action={<Tooltip title="任务页面"><Icon type="info-circle-o" /></Tooltip>}
              total={numeral(taskPageCount).format('0,0')}
              footer={<Field label="状态" value="良好" />}
              contentHeight={46}
            >
            
            </ChartCard>
          </Col>
               
          
          <Col {...topColResponsiveProps}>
            <ChartCard
              bordered={false}
              title="社区用户"
              action={<Tooltip title="社区用户"><Icon type="info-circle-o" /></Tooltip>}
              total={numeral(communityUserCount).format('0,0')}
              footer={<Field label="状态" value="良好" />}
              contentHeight={46}
            >
            
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
            
            </ChartCard>
          </Col>
               
          
          <Col {...topColResponsiveProps}>
            <ChartCard
              bordered={false}
              title="群组页面"
              action={<Tooltip title="群组页面"><Icon type="info-circle-o" /></Tooltip>}
              total={numeral(groupPageCount).format('0,0')}
              footer={<Field label="状态" value="良好" />}
              contentHeight={46}
            >
            
            </ChartCard>
          </Col>
               
          
          <Col {...topColResponsiveProps}>
            <ChartCard
              bordered={false}
              title="主贴"
              action={<Tooltip title="主贴"><Icon type="info-circle-o" /></Tooltip>}
              total={numeral(threadCount).format('0,0')}
              footer={<Field label="状态" value="良好" />}
              contentHeight={46}
            >
            
            </ChartCard>
          </Col>
          

        </Row>

        

       
      </div>
      </PageHeaderLayout>
    );
  }
}



