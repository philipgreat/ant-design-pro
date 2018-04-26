

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
import styles from './EmployeeAward.dashboard.less'
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
const summaryOf = (employeeAward) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{employeeAward.id}</Description> 
<Description term="完成时间">{ moment(employeeAward.completeTime).format('YYYY-MM-DD')}</Description> 
<Description term="类型">{employeeAward.type}</Description> 
<Description term="备注">{employeeAward.remark}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  employeeAward: state._employeeAward,
}))
export default class EmployeeAwardDashboard extends Component {


  componentDidMount() {
  /*
    // const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props;
    // const { getFieldDecorator, setFieldsValue } = this.props.form;
    const { dispatch, location, employeeAward } = this.props;
    
    if(!employeeAward){
    	return;
    }
    const {displayName} = employeeAward;
    if(!displayName){
    	return;
    }
	const link = location.pathname;
	
    dispatch({ type: 'breadcrumb/gotoLink', payload: { displayName, link }})
  	*/
  }
  

  render() {
    // eslint-disable-next-line max-len
    const { id,displayName,  } = this.props.employeeAward
    
    
    
    return (

      <PageHeaderLayout
        title={`员工嘉奖: ${displayName}`}
        content={summaryOf(this.props.employeeAward)}
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



