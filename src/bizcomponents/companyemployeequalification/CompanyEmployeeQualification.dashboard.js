

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
import styles from './CompanyEmployeeQualification.dashboard.less'
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
const summaryOf = (companyEmployeeQualification) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{companyEmployeeQualification.id}</Description> 
<Description term="执行时间">{ moment(companyEmployeeQualification.eventTime).format('YYYY-MM-DD')}</Description> 
<Description term="谁">{companyEmployeeQualification.who}</Description> 
<Description term="批注">{companyEmployeeQualification.comment}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  companyEmployeeQualification: state._companyEmployeeQualification,
}))
export default class CompanyEmployeeQualificationDashboard extends Component {
  render() {
    // eslint-disable-next-line max-len
    const { id, vehicleServiceCompanyEmployeeCount } = this.props.companyEmployeeQualification
    
    
    
    return (

      <PageHeaderLayout
        title="商户员工资格审查总览"
        content={summaryOf(this.props.companyEmployeeQualification)}
        wrapperClassName={styles.advancedForm}
      >
        <div>
          <Row gutter={24}>

          
            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="商户员工"
                action={<Tooltip title="商户员工"><Icon type="info-circle-o" /></Tooltip>}
                total={numeral(vehicleServiceCompanyEmployeeCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link to={`/companyEmployeeQualification/${id}/list/vehicleServiceCompanyEmployeeList`}><Icon type="profile" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/companyEmployeeQualification/${id}/list/vehicleServiceCompanyEmployeeCreateForm`}><Icon type="plus-circle-o" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/companyEmployeeQualification/${id}/list/vehicleServiceCompanyEmployeeList`}><Icon type="line-chart" style={{ fontSize: 20, color: '#08c' }} /></Link>
              </ChartCard>
            </Col>

          </Row>
        </div>
      </PageHeaderLayout>
    )
  }
}



