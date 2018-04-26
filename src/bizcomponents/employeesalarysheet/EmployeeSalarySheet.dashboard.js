

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
import styles from './EmployeeSalarySheet.dashboard.less'
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
const summaryOf = (employeeSalarySheet) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{employeeSalarySheet.id}</Description> 
<Description term="基本工资">{employeeSalarySheet.baseSalary}</Description> 
<Description term="奖金">{employeeSalarySheet.bonus}</Description> 
<Description term="奖励">{employeeSalarySheet.reward}</Description> 
<Description term="个人所得税">{employeeSalarySheet.personalTax}</Description> 
<Description term="社会保险">{employeeSalarySheet.socialSecurity}</Description> 
<Description term="住房公积金">{employeeSalarySheet.housingFound}</Description> 
<Description term="失业保险">{employeeSalarySheet.jobInsurance}</Description> 
<Description term="当前状态">{employeeSalarySheet.currentStatus}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  employeeSalarySheet: state._employeeSalarySheet,
}))
export default class EmployeeSalarySheetDashboard extends Component {


  componentDidMount() {
  /*
    // const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props;
    // const { getFieldDecorator, setFieldsValue } = this.props.form;
    const { dispatch, location, employeeSalarySheet } = this.props;
    
    if(!employeeSalarySheet){
    	return;
    }
    const {displayName} = employeeSalarySheet;
    if(!displayName){
    	return;
    }
	const link = location.pathname;
	
    dispatch({ type: 'breadcrumb/gotoLink', payload: { displayName, link }})
  	*/
  }
  

  render() {
    // eslint-disable-next-line max-len
    const { id,displayName,  } = this.props.employeeSalarySheet
    
    
    
    return (

      <PageHeaderLayout
        title={`工资单: ${displayName}`}
        content={summaryOf(this.props.employeeSalarySheet)}
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



