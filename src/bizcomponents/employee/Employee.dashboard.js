

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
import styles from './Employee.dashboard.less'
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
const summaryOf = (employee) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{employee.id}</Description> 
<Description term="头衔">{employee.title}</Description> 
<Description term="姓">{employee.familyName}</Description> 
<Description term="名">{employee.givenName}</Description> 
<Description term="电子邮件">{employee.email}</Description> 
<Description term="城市">{employee.city}</Description> 
<Description term="地址">{employee.address}</Description> 
<Description term="手机">{employee.cellPhone}</Description> 
<Description term="工资账户">{employee.salaryAccount}</Description> 
<Description term="当前状态">{employee.currentStatus}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  employee: state._employee,
}))
export default class EmployeeDashboard extends Component {


  componentDidMount() {
  /*
    // const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props;
    // const { getFieldDecorator, setFieldsValue } = this.props.form;
    const { dispatch, location, employee } = this.props;
    
    if(!employee){
    	return;
    }
    const {displayName} = employee;
    if(!displayName){
    	return;
    }
	const link = location.pathname;
	
    dispatch({ type: 'breadcrumb/gotoLink', payload: { displayName, link }})
  	*/
  }
  

  render() {
    // eslint-disable-next-line max-len
    const { id,displayName, employeeCompanyTrainingCount, employeeSkillCount, employeePerformanceCount, employeeWorkExperienceCount, employeeLeaveCount, employeeInterviewCount, employeeAttendanceCount, employeeQualifierCount, employeeEducationCount, employeeAwardCount, employeeSalarySheetCount, payingOffCount } = this.props.employee
    
    
    
    return (

      <PageHeaderLayout
        title={`员工: ${displayName}`}
        content={summaryOf(this.props.employee)}
        wrapperClassName={styles.advancedForm}
      >
        <div>
          <Row gutter={24}>

          
            <Col {...topColResponsiveProps}>
            
            <Card title={`员工参与的公司培训(${numeral(employeeCompanyTrainingCount).format('员工参与的公司培训0,0')})`}  style={{ width: 180 }}>
              
              <p><Link to={`/employee/${id}/list/employeeCompanyTrainingList/员工参与的公司培训列表`}><FontAwesome name="gear"  />&nbsp;管理</Link></p>
              <p><Link to={`/employee/${id}/list/employeeCompanyTrainingCreateForm`}><FontAwesome name="plus"  />&nbsp;新增</Link></p>
              
              
          </Card>
            
            
             
            </Col>

          
            <Col {...topColResponsiveProps}>
            
            <Card title={`员工技能(${numeral(employeeSkillCount).format('员工技能0,0')})`}  style={{ width: 180 }}>
              
              <p><Link to={`/employee/${id}/list/employeeSkillList/员工技能列表`}><FontAwesome name="gear"  />&nbsp;管理</Link></p>
              <p><Link to={`/employee/${id}/list/employeeSkillCreateForm`}><FontAwesome name="plus"  />&nbsp;新增</Link></p>
              
              
          </Card>
            
            
             
            </Col>

          
            <Col {...topColResponsiveProps}>
            
            <Card title={`员工绩效(${numeral(employeePerformanceCount).format('员工绩效0,0')})`}  style={{ width: 180 }}>
              
              <p><Link to={`/employee/${id}/list/employeePerformanceList/员工绩效列表`}><FontAwesome name="gear"  />&nbsp;管理</Link></p>
              <p><Link to={`/employee/${id}/list/employeePerformanceCreateForm`}><FontAwesome name="plus"  />&nbsp;新增</Link></p>
              
              
          </Card>
            
            
             
            </Col>

          
            <Col {...topColResponsiveProps}>
            
            <Card title={`员工工作经验(${numeral(employeeWorkExperienceCount).format('员工工作经验0,0')})`}  style={{ width: 180 }}>
              
              <p><Link to={`/employee/${id}/list/employeeWorkExperienceList/员工工作经验列表`}><FontAwesome name="gear"  />&nbsp;管理</Link></p>
              <p><Link to={`/employee/${id}/list/employeeWorkExperienceCreateForm`}><FontAwesome name="plus"  />&nbsp;新增</Link></p>
              
              
          </Card>
            
            
             
            </Col>

          
            <Col {...topColResponsiveProps}>
            
            <Card title={`请假记录(${numeral(employeeLeaveCount).format('请假记录0,0')})`}  style={{ width: 180 }}>
              
              <p><Link to={`/employee/${id}/list/employeeLeaveList/请假记录列表`}><FontAwesome name="gear"  />&nbsp;管理</Link></p>
              <p><Link to={`/employee/${id}/list/employeeLeaveCreateForm`}><FontAwesome name="plus"  />&nbsp;新增</Link></p>
              
              
          </Card>
            
            
             
            </Col>

          
            <Col {...topColResponsiveProps}>
            
            <Card title={`员工面试(${numeral(employeeInterviewCount).format('员工面试0,0')})`}  style={{ width: 180 }}>
              
              <p><Link to={`/employee/${id}/list/employeeInterviewList/员工面试列表`}><FontAwesome name="gear"  />&nbsp;管理</Link></p>
              <p><Link to={`/employee/${id}/list/employeeInterviewCreateForm`}><FontAwesome name="plus"  />&nbsp;新增</Link></p>
              
              
          </Card>
            
            
             
            </Col>

          
            <Col {...topColResponsiveProps}>
            
            <Card title={`员工考勤(${numeral(employeeAttendanceCount).format('员工考勤0,0')})`}  style={{ width: 180 }}>
              
              <p><Link to={`/employee/${id}/list/employeeAttendanceList/员工考勤列表`}><FontAwesome name="gear"  />&nbsp;管理</Link></p>
              <p><Link to={`/employee/${id}/list/employeeAttendanceCreateForm`}><FontAwesome name="plus"  />&nbsp;新增</Link></p>
              
              
          </Card>
            
            
             
            </Col>

          
            <Col {...topColResponsiveProps}>
            
            <Card title={`员工资质(${numeral(employeeQualifierCount).format('员工资质0,0')})`}  style={{ width: 180 }}>
              
              <p><Link to={`/employee/${id}/list/employeeQualifierList/员工资质列表`}><FontAwesome name="gear"  />&nbsp;管理</Link></p>
              <p><Link to={`/employee/${id}/list/employeeQualifierCreateForm`}><FontAwesome name="plus"  />&nbsp;新增</Link></p>
              
              
          </Card>
            
            
             
            </Col>

          
            <Col {...topColResponsiveProps}>
            
            <Card title={`员工教育(${numeral(employeeEducationCount).format('员工教育0,0')})`}  style={{ width: 180 }}>
              
              <p><Link to={`/employee/${id}/list/employeeEducationList/员工教育列表`}><FontAwesome name="gear"  />&nbsp;管理</Link></p>
              <p><Link to={`/employee/${id}/list/employeeEducationCreateForm`}><FontAwesome name="plus"  />&nbsp;新增</Link></p>
              
              
          </Card>
            
            
             
            </Col>

          
            <Col {...topColResponsiveProps}>
            
            <Card title={`员工嘉奖(${numeral(employeeAwardCount).format('员工嘉奖0,0')})`}  style={{ width: 180 }}>
              
              <p><Link to={`/employee/${id}/list/employeeAwardList/员工嘉奖列表`}><FontAwesome name="gear"  />&nbsp;管理</Link></p>
              <p><Link to={`/employee/${id}/list/employeeAwardCreateForm`}><FontAwesome name="plus"  />&nbsp;新增</Link></p>
              
              
          </Card>
            
            
             
            </Col>

          
            <Col {...topColResponsiveProps}>
            
            <Card title={`工资单(${numeral(employeeSalarySheetCount).format('工资单0,0')})`}  style={{ width: 180 }}>
              
              <p><Link to={`/employee/${id}/list/employeeSalarySheetList/工资单列表`}><FontAwesome name="gear"  />&nbsp;管理</Link></p>
              <p><Link to={`/employee/${id}/list/employeeSalarySheetCreateForm`}><FontAwesome name="plus"  />&nbsp;新增</Link></p>
              
              
          </Card>
            
            
             
            </Col>

          
            <Col {...topColResponsiveProps}>
            
            <Card title={`工资支付(${numeral(payingOffCount).format('工资支付0,0')})`}  style={{ width: 180 }}>
              
              <p><Link to={`/employee/${id}/list/payingOffList/工资支付列表`}><FontAwesome name="gear"  />&nbsp;管理</Link></p>
              <p><Link to={`/employee/${id}/list/payingOffCreateForm`}><FontAwesome name="plus"  />&nbsp;新增</Link></p>
              
              
          </Card>
            
            
             
            </Col>

          </Row>
        </div>
      </PageHeaderLayout>
    )
  }
}



