

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
import styles from './DecorationCountryCenter.dashboard.less'
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
const summaryOf = (decorationCountryCenter) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{decorationCountryCenter.id}</Description> 
<Description term="名称">{decorationCountryCenter.name}</Description> 
<Description term="联系电话">{decorationCountryCenter.contactNumber}</Description> 
<Description term="成立">{ moment(decorationCountryCenter.founded).format('YYYY-MM-DD')}</Description> 
<Description term="网站">{decorationCountryCenter.webSite}</Description> 
<Description term="地址">{decorationCountryCenter.address}</Description> 
<Description term="描述">{decorationCountryCenter.description}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  decorationCountryCenter: state._decorationCountryCenter,
}))
export default class DecorationCountryCenterDashboard extends Component {


  componentDidMount() {
  /*
    // const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props;
    // const { getFieldDecorator, setFieldsValue } = this.props.form;
    const { dispatch, location, decorationCountryCenter } = this.props;
    
    if(!decorationCountryCenter){
    	return;
    }
    const {displayName} = decorationCountryCenter;
    if(!displayName){
    	return;
    }
	const link = location.pathname;
	
    dispatch({ type: 'breadcrumb/gotoLink', payload: { displayName, link }})
  	*/
  }
  

  render() {
    // eslint-disable-next-line max-len
    const { id,displayName, levelOneDepartmentCount, skillTypeCount, responsibilityTypeCount, terminationReasonCount, terminationTypeCount, occupationTypeCount, leaveTypeCount, salaryGradeCount, interviewTypeCount, trainingCourseTypeCount, publicHolidayCount, employeeCount, instructorCount, companyTrainingCount } = this.props.decorationCountryCenter
    
    
    
    return (

      <PageHeaderLayout
        title={`全国中心: ${displayName}`}
        content={summaryOf(this.props.decorationCountryCenter)}
        wrapperClassName={styles.advancedForm}
      >
        <div>
          <Row gutter={24}>

          
            <Col {...topColResponsiveProps}>
            
            <Card title={`一级部门(${numeral(levelOneDepartmentCount).format('一级部门0,0')})`}  style={{ width: 180 }}>
              
              <p><Link to={`/decorationCountryCenter/${id}/list/levelOneDepartmentList/一级部门列表`}><FontAwesome name="gear"  />&nbsp;管理</Link></p>
              <p><Link to={`/decorationCountryCenter/${id}/list/levelOneDepartmentCreateForm`}><FontAwesome name="plus"  />&nbsp;新增</Link></p>
              
              
          </Card>
            
            
             
            </Col>

          
            <Col {...topColResponsiveProps}>
            
            <Card title={`技能类型(${numeral(skillTypeCount).format('技能类型0,0')})`}  style={{ width: 180 }}>
              
              <p><Link to={`/decorationCountryCenter/${id}/list/skillTypeList/技能类型列表`}><FontAwesome name="gear"  />&nbsp;管理</Link></p>
              <p><Link to={`/decorationCountryCenter/${id}/list/skillTypeCreateForm`}><FontAwesome name="plus"  />&nbsp;新增</Link></p>
              
              
          </Card>
            
            
             
            </Col>

          
            <Col {...topColResponsiveProps}>
            
            <Card title={`责任类型(${numeral(responsibilityTypeCount).format('责任类型0,0')})`}  style={{ width: 180 }}>
              
              <p><Link to={`/decorationCountryCenter/${id}/list/responsibilityTypeList/责任类型列表`}><FontAwesome name="gear"  />&nbsp;管理</Link></p>
              <p><Link to={`/decorationCountryCenter/${id}/list/responsibilityTypeCreateForm`}><FontAwesome name="plus"  />&nbsp;新增</Link></p>
              
              
          </Card>
            
            
             
            </Col>

          
            <Col {...topColResponsiveProps}>
            
            <Card title={`雇佣终止的原因(${numeral(terminationReasonCount).format('雇佣终止的原因0,0')})`}  style={{ width: 180 }}>
              
              <p><Link to={`/decorationCountryCenter/${id}/list/terminationReasonList/雇佣终止的原因列表`}><FontAwesome name="gear"  />&nbsp;管理</Link></p>
              <p><Link to={`/decorationCountryCenter/${id}/list/terminationReasonCreateForm`}><FontAwesome name="plus"  />&nbsp;新增</Link></p>
              
              
          </Card>
            
            
             
            </Col>

          
            <Col {...topColResponsiveProps}>
            
            <Card title={`雇佣终止类型(${numeral(terminationTypeCount).format('雇佣终止类型0,0')})`}  style={{ width: 180 }}>
              
              <p><Link to={`/decorationCountryCenter/${id}/list/terminationTypeList/雇佣终止类型列表`}><FontAwesome name="gear"  />&nbsp;管理</Link></p>
              <p><Link to={`/decorationCountryCenter/${id}/list/terminationTypeCreateForm`}><FontAwesome name="plus"  />&nbsp;新增</Link></p>
              
              
          </Card>
            
            
             
            </Col>

          
            <Col {...topColResponsiveProps}>
            
            <Card title={`职位类型(${numeral(occupationTypeCount).format('职位类型0,0')})`}  style={{ width: 180 }}>
              
              <p><Link to={`/decorationCountryCenter/${id}/list/occupationTypeList/职位类型列表`}><FontAwesome name="gear"  />&nbsp;管理</Link></p>
              <p><Link to={`/decorationCountryCenter/${id}/list/occupationTypeCreateForm`}><FontAwesome name="plus"  />&nbsp;新增</Link></p>
              
              
          </Card>
            
            
             
            </Col>

          
            <Col {...topColResponsiveProps}>
            
            <Card title={`请假类型(${numeral(leaveTypeCount).format('请假类型0,0')})`}  style={{ width: 180 }}>
              
              <p><Link to={`/decorationCountryCenter/${id}/list/leaveTypeList/请假类型列表`}><FontAwesome name="gear"  />&nbsp;管理</Link></p>
              <p><Link to={`/decorationCountryCenter/${id}/list/leaveTypeCreateForm`}><FontAwesome name="plus"  />&nbsp;新增</Link></p>
              
              
          </Card>
            
            
             
            </Col>

          
            <Col {...topColResponsiveProps}>
            
            <Card title={`工资等级(${numeral(salaryGradeCount).format('工资等级0,0')})`}  style={{ width: 180 }}>
              
              <p><Link to={`/decorationCountryCenter/${id}/list/salaryGradeList/工资等级列表`}><FontAwesome name="gear"  />&nbsp;管理</Link></p>
              <p><Link to={`/decorationCountryCenter/${id}/list/salaryGradeCreateForm`}><FontAwesome name="plus"  />&nbsp;新增</Link></p>
              
              
          </Card>
            
            
             
            </Col>

          
            <Col {...topColResponsiveProps}>
            
            <Card title={`面试类型(${numeral(interviewTypeCount).format('面试类型0,0')})`}  style={{ width: 180 }}>
              
              <p><Link to={`/decorationCountryCenter/${id}/list/interviewTypeList/面试类型列表`}><FontAwesome name="gear"  />&nbsp;管理</Link></p>
              <p><Link to={`/decorationCountryCenter/${id}/list/interviewTypeCreateForm`}><FontAwesome name="plus"  />&nbsp;新增</Link></p>
              
              
          </Card>
            
            
             
            </Col>

          
            <Col {...topColResponsiveProps}>
            
            <Card title={`培训课程类型(${numeral(trainingCourseTypeCount).format('培训课程类型0,0')})`}  style={{ width: 180 }}>
              
              <p><Link to={`/decorationCountryCenter/${id}/list/trainingCourseTypeList/培训课程类型列表`}><FontAwesome name="gear"  />&nbsp;管理</Link></p>
              <p><Link to={`/decorationCountryCenter/${id}/list/trainingCourseTypeCreateForm`}><FontAwesome name="plus"  />&nbsp;新增</Link></p>
              
              
          </Card>
            
            
             
            </Col>

          
            <Col {...topColResponsiveProps}>
            
            <Card title={`公共假日(${numeral(publicHolidayCount).format('公共假日0,0')})`}  style={{ width: 180 }}>
              
              <p><Link to={`/decorationCountryCenter/${id}/list/publicHolidayList/公共假日列表`}><FontAwesome name="gear"  />&nbsp;管理</Link></p>
              <p><Link to={`/decorationCountryCenter/${id}/list/publicHolidayCreateForm`}><FontAwesome name="plus"  />&nbsp;新增</Link></p>
              
              
          </Card>
            
            
             
            </Col>

          
            <Col {...topColResponsiveProps}>
            
            <Card title={`员工(${numeral(employeeCount).format('员工0,0')})`}  style={{ width: 180 }}>
              
              <p><Link to={`/decorationCountryCenter/${id}/list/employeeList/员工列表`}><FontAwesome name="gear"  />&nbsp;管理</Link></p>
              <p><Link to={`/decorationCountryCenter/${id}/list/employeeCreateForm`}><FontAwesome name="plus"  />&nbsp;新增</Link></p>
              
              
          </Card>
            
            
             
            </Col>

          
            <Col {...topColResponsiveProps}>
            
            <Card title={`讲师(${numeral(instructorCount).format('讲师0,0')})`}  style={{ width: 180 }}>
              
              <p><Link to={`/decorationCountryCenter/${id}/list/instructorList/讲师列表`}><FontAwesome name="gear"  />&nbsp;管理</Link></p>
              <p><Link to={`/decorationCountryCenter/${id}/list/instructorCreateForm`}><FontAwesome name="plus"  />&nbsp;新增</Link></p>
              
              
          </Card>
            
            
             
            </Col>

          
            <Col {...topColResponsiveProps}>
            
            <Card title={`公司培训(${numeral(companyTrainingCount).format('公司培训0,0')})`}  style={{ width: 180 }}>
              
              <p><Link to={`/decorationCountryCenter/${id}/list/companyTrainingList/公司培训列表`}><FontAwesome name="gear"  />&nbsp;管理</Link></p>
              <p><Link to={`/decorationCountryCenter/${id}/list/companyTrainingCreateForm`}><FontAwesome name="plus"  />&nbsp;新增</Link></p>
              
              
          </Card>
            
            
             
            </Col>

          </Row>
        </div>
      </PageHeaderLayout>
    )
  }
}



