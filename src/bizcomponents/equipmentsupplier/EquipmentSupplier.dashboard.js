

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
import styles from './EquipmentSupplier.dashboard.less'
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
const summaryOf = (equipmentSupplier) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{equipmentSupplier.id}</Description> 
<Description term="名称">{equipmentSupplier.name}</Description> 
<Description term="描述">{equipmentSupplier.description}</Description> 
<Description term="传热性能的手机">{equipmentSupplier.contectPhone}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  equipmentSupplier: state._equipmentSupplier,
}))
export default class EquipmentSupplierDashboard extends Component {
  render() {
    // eslint-disable-next-line max-len
    const { id, equipmentApplicationCount, equipmentCount } = this.props.equipmentSupplier
    
    
    
    return (

      <PageHeaderLayout
        title="设备供应商总览"
        content={summaryOf(this.props.equipmentSupplier)}
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
                <Link to={`/equipmentSupplier/${id}/list/equipmentApplicationList`}><Icon type="profile" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/equipmentSupplier/${id}/list/equipmentApplicationCreateForm`}><Icon type="plus-circle-o" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/equipmentSupplier/${id}/list/equipmentApplicationList`}><Icon type="line-chart" style={{ fontSize: 20, color: '#08c' }} /></Link>
              </ChartCard>
            </Col>

          
            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="设备"
                action={<Tooltip title="设备"><Icon type="info-circle-o" /></Tooltip>}
                total={numeral(equipmentCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link to={`/equipmentSupplier/${id}/list/equipmentList`}><Icon type="profile" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/equipmentSupplier/${id}/list/equipmentCreateForm`}><Icon type="plus-circle-o" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/equipmentSupplier/${id}/list/equipmentList`}><Icon type="line-chart" style={{ fontSize: 20, color: '#08c' }} /></Link>
              </ChartCard>
            </Col>

          </Row>
        </div>
      </PageHeaderLayout>
    )
  }
}



