

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
import styles from './EmployeeWorkExperience.dashboard.less'
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
const summaryOf = (employeeWorkExperience) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{employeeWorkExperience.id}</Description> 
<Description term="开始">{ moment(employeeWorkExperience.start).format('YYYY-MM-DD')}</Description> 
<Description term="结束">{ moment(employeeWorkExperience.end).format('YYYY-MM-DD')}</Description> 
<Description term="公司">{employeeWorkExperience.company}</Description> 
<Description term="描述">{employeeWorkExperience.description}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  employeeWorkExperience: state._employeeWorkExperience,
}))
export default class EmployeeWorkExperienceDashboard extends Component {


  componentDidMount() {
  /*
    // const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props;
    // const { getFieldDecorator, setFieldsValue } = this.props.form;
    const { dispatch, location, employeeWorkExperience } = this.props;
    
    if(!employeeWorkExperience){
    	return;
    }
    const {displayName} = employeeWorkExperience;
    if(!displayName){
    	return;
    }
	const link = location.pathname;
	
    dispatch({ type: 'breadcrumb/gotoLink', payload: { displayName, link }})
  	*/
  }
  

  render() {
    // eslint-disable-next-line max-len
    const { id,displayName,  } = this.props.employeeWorkExperience
    
    
    
    return (

      <PageHeaderLayout
        title={`员工工作经验: ${displayName}`}
        content={summaryOf(this.props.employeeWorkExperience)}
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



