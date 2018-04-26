

import React, { Component } from 'react'
import { connect } from 'dva'
import { Form,Button, Row, Col, Icon, Card, Tabs, Table, Radio, DatePicker, Tooltip, Menu, Dropdown } from 'antd'
import { Link, Route, Redirect, Switch } from 'dva/router'
import numeral from 'numeral'
import {
  ChartCard, yuan, MiniArea, MiniBar, MiniProgress, Field, Bar, Pie, TimelineChart,

} from '../../components/Charts'
import Trend from '../../components/Trend'
import NumberInfo from '../../components/NumberInfo'
import { getTimeDistance } from '../../utils/utils'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import styles from './Employee.editdetail.less'
import GlobalComponents from '../../custcomponents'



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


@connect(state => ({
  employee: state._employee,
}))
export default class EmployeeEditDetail extends Component {
  render() {
    const {EmployeeCompanyTrainingEditTable} = GlobalComponents;
    const {EmployeeSkillEditTable} = GlobalComponents;
    const {EmployeePerformanceEditTable} = GlobalComponents;
    const {EmployeeWorkExperienceEditTable} = GlobalComponents;
    const {EmployeeLeaveEditTable} = GlobalComponents;
    const {EmployeeInterviewEditTable} = GlobalComponents;
    const {EmployeeAttendanceEditTable} = GlobalComponents;
    const {EmployeeQualifierEditTable} = GlobalComponents;
    const {EmployeeEducationEditTable} = GlobalComponents;
    const {EmployeeAwardEditTable} = GlobalComponents;
    const {EmployeeSalarySheetEditTable} = GlobalComponents;
    const {PayingOffEditTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    const { id, employeeCompanyTrainingCount, employeeSkillCount, employeePerformanceCount, employeeWorkExperienceCount, employeeLeaveCount, employeeInterviewCount, employeeAttendanceCount, employeeQualifierCount, employeeEducationCount, employeeAwardCount, employeeSalarySheetCount, payingOffCount } = this.props.employee
    const { employeeCompanyTrainingList, employeeSkillList, employeePerformanceList, employeeWorkExperienceList, employeeLeaveList, employeeInterviewList, employeeAttendanceList, employeeQualifierList, employeeEducationList, employeeAwardList, employeeSalarySheetList, payingOffList } = this.props.employee
    
    const owner = { type: '_employee', id }
    return (

      <PageHeaderLayout
        title="员工总览"
        content="员工总览"
        wrapperClassName={styles.advancedForm}
      >


		<Card title="员工参与的公司培训列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <EmployeeCompanyTrainingEditTable data={employeeCompanyTrainingList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="员工技能列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <EmployeeSkillEditTable data={employeeSkillList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="员工绩效列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <EmployeePerformanceEditTable data={employeePerformanceList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="员工工作经验列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <EmployeeWorkExperienceEditTable data={employeeWorkExperienceList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="请假记录列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <EmployeeLeaveEditTable data={employeeLeaveList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="员工面试列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <EmployeeInterviewEditTable data={employeeInterviewList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="员工考勤列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <EmployeeAttendanceEditTable data={employeeAttendanceList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="员工资质列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <EmployeeQualifierEditTable data={employeeQualifierList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="员工教育列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <EmployeeEducationEditTable data={employeeEducationList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="员工嘉奖列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <EmployeeAwardEditTable data={employeeAwardList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="工资单列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <EmployeeSalarySheetEditTable data={employeeSalarySheetList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="工资支付列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <PayingOffEditTable data={payingOffList} owner={owner} {...this.props} />
          </Form>
        </Card>

 
      </PageHeaderLayout>
    )
  }
}



