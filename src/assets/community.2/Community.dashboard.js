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
    
    
    const {communityUserCount} = this.props.community;


    
    return (

        <PageHeaderLayout
        title="社区信息总览"
        content="社区信息总览"
        wrapperClassName={styles.advancedForm}
      >
      <div>
        <Row gutter={24}>
          
          
          <Col {...topColResponsiveProps}>
            <ChartCard
              bordered={false}
              title="支付笔数"
              action={<Tooltip title="指标说明"><Icon type="info-circle-o" /></Tooltip>}
              total={numeral(communityUserCount).format('0,0')}
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
