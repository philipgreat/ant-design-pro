

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
import styles from './EmployeeCompanyTraining.dashboard.less'
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
const summaryOf = (employeeCompanyTraining) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{employeeCompanyTraining.id}</Description> 
<Description term="当前状态">{employeeCompanyTraining.currentStatus}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  employeeCompanyTraining: state._employeeCompanyTraining,
}))
export default class EmployeeCompanyTrainingDashboard extends Component {


  componentDidMount() {
  /*
    // const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props;
    // const { getFieldDecorator, setFieldsValue } = this.props.form;
    const { dispatch, location, employeeCompanyTraining } = this.props;
    
    if(!employeeCompanyTraining){
    	return;
    }
    const {displayName} = employeeCompanyTraining;
    if(!displayName){
    	return;
    }
	const link = location.pathname;
	
    dispatch({ type: 'breadcrumb/gotoLink', payload: { displayName, link }})
  	*/
  }
  

  render() {
    // eslint-disable-next-line max-len
    const { id,displayName,  } = this.props.employeeCompanyTraining
    
    
    
    return (

      <PageHeaderLayout
        title={`员工参与的公司培训: ${displayName}`}
        content={summaryOf(this.props.employeeCompanyTraining)}
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



