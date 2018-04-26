

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
import styles from './EmployeeAttendance.dashboard.less'
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
const summaryOf = (employeeAttendance) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{employeeAttendance.id}</Description> 
<Description term="进入时间">{ moment(employeeAttendance.enterTime).format('YYYY-MM-DD')}</Description> 
<Description term="离开的时候">{ moment(employeeAttendance.leaveTime).format('YYYY-MM-DD')}</Description> 
<Description term="持续时间">{employeeAttendance.durationHours}</Description> 
<Description term="备注">{employeeAttendance.remark}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  employeeAttendance: state._employeeAttendance,
}))
export default class EmployeeAttendanceDashboard extends Component {


  componentDidMount() {
  /*
    // const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props;
    // const { getFieldDecorator, setFieldsValue } = this.props.form;
    const { dispatch, location, employeeAttendance } = this.props;
    
    if(!employeeAttendance){
    	return;
    }
    const {displayName} = employeeAttendance;
    if(!displayName){
    	return;
    }
	const link = location.pathname;
	
    dispatch({ type: 'breadcrumb/gotoLink', payload: { displayName, link }})
  	*/
  }
  

  render() {
    // eslint-disable-next-line max-len
    const { id,displayName,  } = this.props.employeeAttendance
    
    
    
    return (

      <PageHeaderLayout
        title={`员工考勤: ${displayName}`}
        content={summaryOf(this.props.employeeAttendance)}
        wrapperClassName={styles.advancedForm}
      >
        <div>
          <Row gutter={24}>

          </Row>
        </div>
      </PageHeaderLayout>
    )
  }
}



