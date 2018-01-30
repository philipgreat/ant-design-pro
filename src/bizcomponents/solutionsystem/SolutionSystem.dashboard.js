

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
import styles from './SolutionSystem.dashboard.less'
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
const summaryOf = (solutionSystem) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{solutionSystem.id}</Description> 
<Description term="名称">{solutionSystem.name}</Description> 
<Description term="描述">{solutionSystem.description}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  solutionSystem: state._solutionSystem,
}))
export default class SolutionSystemDashboard extends Component {
  render() {
    // eslint-disable-next-line max-len
    const { id, designerCount, seniorDesignerCount, equipmentSupplierCount } = this.props.solutionSystem
    
    
    
    return (

      <PageHeaderLayout
        title="解决方案系统总览"
        content={summaryOf(this.props.solutionSystem)}
        wrapperClassName={styles.advancedForm}
      >
        <div>
          <Row gutter={24}>

          
            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="设计师"
                action={<Tooltip title="设计师"><Icon type="info-circle-o" /></Tooltip>}
                total={numeral(designerCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link to={`/solutionSystem/${id}/list/designerList`}><Icon type="profile" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/solutionSystem/${id}/list/designerCreateForm`}><Icon type="plus-circle-o" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/solutionSystem/${id}/list/designerList`}><Icon type="line-chart" style={{ fontSize: 20, color: '#08c' }} /></Link>
              </ChartCard>
            </Col>

          
            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="高级设计师"
                action={<Tooltip title="高级设计师"><Icon type="info-circle-o" /></Tooltip>}
                total={numeral(seniorDesignerCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link to={`/solutionSystem/${id}/list/seniorDesignerList`}><Icon type="profile" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/solutionSystem/${id}/list/seniorDesignerCreateForm`}><Icon type="plus-circle-o" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/solutionSystem/${id}/list/seniorDesignerList`}><Icon type="line-chart" style={{ fontSize: 20, color: '#08c' }} /></Link>
              </ChartCard>
            </Col>

          
            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="设备供应商"
                action={<Tooltip title="设备供应商"><Icon type="info-circle-o" /></Tooltip>}
                total={numeral(equipmentSupplierCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link to={`/solutionSystem/${id}/list/equipmentSupplierList`}><Icon type="profile" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/solutionSystem/${id}/list/equipmentSupplierCreateForm`}><Icon type="plus-circle-o" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/solutionSystem/${id}/list/equipmentSupplierList`}><Icon type="line-chart" style={{ fontSize: 20, color: '#08c' }} /></Link>
              </ChartCard>
            </Col>

          </Row>
        </div>
      </PageHeaderLayout>
    )
  }
}



