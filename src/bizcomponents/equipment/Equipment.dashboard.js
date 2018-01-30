

import React, { Component } from 'react'
import { connect } from 'dva'
import moment from 'moment'
import { Row, Col, Icon, Card, Tabs, Table, Radio, DatePicker, Tooltip, Menu, Dropdown } from 'antd'
import { Link, Route, Redirect, Switch } from 'dva/router'
import numeral from 'numeral'
import {
  ChartCard, yuan, MiniArea, MiniBar, MiniProgress, Field, Bar, Pie, TimelineChart,
} from '../../components/Charts'
import Trend from '../../components/Trend'
import NumberInfo from '../../components/NumberInfo'
import { getTimeDistance } from '../../utils/utils'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import styles from './Equipment.dashboard.less'
import DescriptionList from '../../components/DescriptionList';
const { Description } = DescriptionList;
const { TabPane } = Tabs
const { RangePicker } = DatePicker

const topColResponsiveProps = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 6,
  style: { marginBottom: 24 },
}
const summaryOf = (equipment) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{equipment.id}</Description> 
<Description term="名称">{equipment.name}</Description> 
<Description term="价格">{equipment.price}</Description> 
<Description term="模型">{equipment.model}</Description> 
<Description term="英雄的形象">{equipment.heroImage}</Description> 
<Description term="分数">{equipment.score}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  equipment: state._equipment,
}))
export default class EquipmentDashboard extends Component {
  render() {
    // eslint-disable-next-line max-len
    const { id, equipmentApplicationCount, inputInterfaceCount, outputInterfaceCount, equipmentParameterCount, equipmentSupplyLeadTimeCount, equipmentFileCount } = this.props.equipment
    
    
    
    return (

      <PageHeaderLayout
        title="设备总览"
        content={summaryOf(this.props.equipment)}
        wrapperClassName={styles.advancedForm}
      >
        <div>
          <Row gutter={24}>

          
            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="设备应用程序"
                action={<Tooltip title="设备应用程序"><Icon type="info-circle-o" /></Tooltip>}
                total={numeral(equipmentApplicationCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link to={`/equipment/${id}/list/equipmentApplicationList`}><Icon type="profile" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/equipment/${id}/list/equipmentApplicationCreateForm`}><Icon type="plus-circle-o" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/equipment/${id}/list/equipmentApplicationList`}><Icon type="line-chart" style={{ fontSize: 20, color: '#08c' }} /></Link>
              </ChartCard>
            </Col>

          
            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="输入接口"
                action={<Tooltip title="输入接口"><Icon type="info-circle-o" /></Tooltip>}
                total={numeral(inputInterfaceCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link to={`/equipment/${id}/list/inputInterfaceList`}><Icon type="profile" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/equipment/${id}/list/inputInterfaceCreateForm`}><Icon type="plus-circle-o" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/equipment/${id}/list/inputInterfaceList`}><Icon type="line-chart" style={{ fontSize: 20, color: '#08c' }} /></Link>
              </ChartCard>
            </Col>

          
            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="输出接口"
                action={<Tooltip title="输出接口"><Icon type="info-circle-o" /></Tooltip>}
                total={numeral(outputInterfaceCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link to={`/equipment/${id}/list/outputInterfaceList`}><Icon type="profile" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/equipment/${id}/list/outputInterfaceCreateForm`}><Icon type="plus-circle-o" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/equipment/${id}/list/outputInterfaceList`}><Icon type="line-chart" style={{ fontSize: 20, color: '#08c' }} /></Link>
              </ChartCard>
            </Col>

          
            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="设备参数"
                action={<Tooltip title="设备参数"><Icon type="info-circle-o" /></Tooltip>}
                total={numeral(equipmentParameterCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link to={`/equipment/${id}/list/equipmentParameterList`}><Icon type="profile" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/equipment/${id}/list/equipmentParameterCreateForm`}><Icon type="plus-circle-o" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/equipment/${id}/list/equipmentParameterList`}><Icon type="line-chart" style={{ fontSize: 20, color: '#08c' }} /></Link>
              </ChartCard>
            </Col>

          
            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="设备供应提前期"
                action={<Tooltip title="设备供应提前期"><Icon type="info-circle-o" /></Tooltip>}
                total={numeral(equipmentSupplyLeadTimeCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link to={`/equipment/${id}/list/equipmentSupplyLeadTimeList`}><Icon type="profile" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/equipment/${id}/list/equipmentSupplyLeadTimeCreateForm`}><Icon type="plus-circle-o" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/equipment/${id}/list/equipmentSupplyLeadTimeList`}><Icon type="line-chart" style={{ fontSize: 20, color: '#08c' }} /></Link>
              </ChartCard>
            </Col>

          
            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="设备文件"
                action={<Tooltip title="设备文件"><Icon type="info-circle-o" /></Tooltip>}
                total={numeral(equipmentFileCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link to={`/equipment/${id}/list/equipmentFileList`}><Icon type="profile" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/equipment/${id}/list/equipmentFileCreateForm`}><Icon type="plus-circle-o" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/equipment/${id}/list/equipmentFileList`}><Icon type="line-chart" style={{ fontSize: 20, color: '#08c' }} /></Link>
              </ChartCard>
            </Col>

          </Row>
        </div>
      </PageHeaderLayout>
    )
  }
}



