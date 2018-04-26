

import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome';
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
import styles from './SalaryGrade.dashboard.less'
import DescriptionList from '../../components/DescriptionList';
const { Description } = DescriptionList;
const { TabPane } = Tabs
const { RangePicker } = DatePicker

const topColResponsiveProps = {
  xs: 8,
  sm: 6,
  md: 6,
  lg: 4,
  xl: 4,
  style: { marginBottom: 24 },
}
const summaryOf = (salaryGrade) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{salaryGrade.id}</Description> 
<Description term="代码">{salaryGrade.code}</Description> 
<Description term="名称">{salaryGrade.name}</Description> 
<Description term="详细描述">{salaryGrade.detailDescription}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  salaryGrade: state._salaryGrade,
}))
export default class SalaryGradeDashboard extends Component {


  componentDidMount() {
  /*
    // const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props;
    // const { getFieldDecorator, setFieldsValue } = this.props.form;
    const { dispatch, location, salaryGrade } = this.props;
    
    if(!salaryGrade){
    	return;
    }
    const {displayName} = salaryGrade;
    if(!displayName){
    	return;
    }
	const link = location.pathname;
	
    dispatch({ type: 'breadcrumb/gotoLink', payload: { displayName, link }})
  	*/
  }
  

  render() {
    // eslint-disable-next-line max-len
    const { id,displayName, employeeCount, employeeSalarySheetCount } = this.props.salaryGrade
    
    
    
    return (

      <PageHeaderLayout
        title={`工资等级: ${displayName}`}
        content={summaryOf(this.props.salaryGrade)}
        wrapperClassName={styles.advancedForm}
      >
        <div>
          <Row gutter={24}>

          
            <Col {...topColResponsiveProps}>
            
            <Card title={`员工(${numeral(employeeCount).format('员工0,0')})`}  style={{ width: 180 }}>
              
              <p><Link to={`/salaryGrade/${id}/list/employeeList/员工列表`}><FontAwesome name="gear"  />&nbsp;管理</Link></p>
              <p><Link to={`/salaryGrade/${id}/list/employeeCreateForm`}><FontAwesome name="plus"  />&nbsp;新增</Link></p>
              
              
          </Card>
            
            
             
            </Col>

          
            <Col {...topColResponsiveProps}>
            
            <Card title={`工资单(${numeral(employeeSalarySheetCount).format('工资单0,0')})`}  style={{ width: 180 }}>
              
              <p><Link to={`/salaryGrade/${id}/list/employeeSalarySheetList/工资单列表`}><FontAwesome name="gear"  />&nbsp;管理</Link></p>
              <p><Link to={`/salaryGrade/${id}/list/employeeSalarySheetCreateForm`}><FontAwesome name="plus"  />&nbsp;新增</Link></p>
              
              
          </Card>
            
            
             
            </Col>

          </Row>
        </div>
      </PageHeaderLayout>
    )
  }
}



