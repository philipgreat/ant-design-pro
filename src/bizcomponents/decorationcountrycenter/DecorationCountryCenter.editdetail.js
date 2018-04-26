

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
import styles from './DecorationCountryCenter.editdetail.less'
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
  decorationCountryCenter: state._decorationCountryCenter,
}))
export default class DecorationCountryCenterEditDetail extends Component {
  render() {
    const {LevelOneDepartmentEditTable} = GlobalComponents;
    const {SkillTypeEditTable} = GlobalComponents;
    const {ResponsibilityTypeEditTable} = GlobalComponents;
    const {TerminationReasonEditTable} = GlobalComponents;
    const {TerminationTypeEditTable} = GlobalComponents;
    const {OccupationTypeEditTable} = GlobalComponents;
    const {LeaveTypeEditTable} = GlobalComponents;
    const {SalaryGradeEditTable} = GlobalComponents;
    const {InterviewTypeEditTable} = GlobalComponents;
    const {TrainingCourseTypeEditTable} = GlobalComponents;
    const {PublicHolidayEditTable} = GlobalComponents;
    const {EmployeeEditTable} = GlobalComponents;
    const {InstructorEditTable} = GlobalComponents;
    const {CompanyTrainingEditTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    const { id, levelOneDepartmentCount, skillTypeCount, responsibilityTypeCount, terminationReasonCount, terminationTypeCount, occupationTypeCount, leaveTypeCount, salaryGradeCount, interviewTypeCount, trainingCourseTypeCount, publicHolidayCount, employeeCount, instructorCount, companyTrainingCount } = this.props.decorationCountryCenter
    const { levelOneDepartmentList, skillTypeList, responsibilityTypeList, terminationReasonList, terminationTypeList, occupationTypeList, leaveTypeList, salaryGradeList, interviewTypeList, trainingCourseTypeList, publicHolidayList, employeeList, instructorList, companyTrainingList } = this.props.decorationCountryCenter
    
    const owner = { type: '_decorationCountryCenter', id }
    return (

      <PageHeaderLayout
        title="全国中心总览"
        content="全国中心总览"
        wrapperClassName={styles.advancedForm}
      >


		<Card title="一级部门列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <LevelOneDepartmentEditTable data={levelOneDepartmentList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="技能类型列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <SkillTypeEditTable data={skillTypeList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="责任类型列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <ResponsibilityTypeEditTable data={responsibilityTypeList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="雇佣终止的原因列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <TerminationReasonEditTable data={terminationReasonList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="雇佣终止类型列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <TerminationTypeEditTable data={terminationTypeList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="职位类型列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <OccupationTypeEditTable data={occupationTypeList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="请假类型列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <LeaveTypeEditTable data={leaveTypeList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="工资等级列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <SalaryGradeEditTable data={salaryGradeList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="面试类型列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <InterviewTypeEditTable data={interviewTypeList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="培训课程类型列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <TrainingCourseTypeEditTable data={trainingCourseTypeList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="公共假日列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <PublicHolidayEditTable data={publicHolidayList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="员工列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <EmployeeEditTable data={employeeList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="讲师列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <InstructorEditTable data={instructorList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="公司培训列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <CompanyTrainingEditTable data={companyTrainingList} owner={owner} {...this.props} />
          </Form>
        </Card>

 
      </PageHeaderLayout>
    )
  }
}



