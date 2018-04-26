

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
import styles from './EmployeeQualifier.dashboard.less'
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
const summaryOf = (employeeQualifier) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{employeeQualifier.id}</Description> 
<Description term="合格的时间">{ moment(employeeQualifier.qualifiedTime).format('YYYY-MM-DD')}</Description> 
<Description term="类型">{employeeQualifier.type}</Description> 
<Description term="水平">{employeeQualifier.level}</Description> 
<Description term="备注">{employeeQualifier.remark}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  employeeQualifier: state._employeeQualifier,
}))
export default class EmployeeQualifierDashboard extends Component {


  componentDidMount() {
  /*
    // const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props;
    // const { getFieldDecorator, setFieldsValue } = this.props.form;
    const { dispatch, location, employeeQualifier } = this.props;
    
    if(!employeeQualifier){
    	return;
    }
    const {displayName} = employeeQualifier;
    if(!displayName){
    	return;
    }
	const link = location.pathname;
	
    dispatch({ type: 'breadcrumb/gotoLink', payload: { displayName, link }})
  	*/
  }
  

  render() {
    // eslint-disable-next-line max-len
    const { id,displayName,  } = this.props.employeeQualifier
    
    
    
    return (

      <PageHeaderLayout
        title={`员工资质: ${displayName}`}
        content={summaryOf(this.props.employeeQualifier)}
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



