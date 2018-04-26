

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
import styles from './InterviewType.dashboard.less'
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
const summaryOf = (interviewType) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{interviewType.id}</Description> 
<Description term="代码">{interviewType.code}</Description> 
<Description term="描述">{interviewType.description}</Description> 
<Description term="详细描述">{interviewType.detailDescription}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  interviewType: state._interviewType,
}))
export default class InterviewTypeDashboard extends Component {


  componentDidMount() {
  /*
    // const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props;
    // const { getFieldDecorator, setFieldsValue } = this.props.form;
    const { dispatch, location, interviewType } = this.props;
    
    if(!interviewType){
    	return;
    }
    const {displayName} = interviewType;
    if(!displayName){
    	return;
    }
	const link = location.pathname;
	
    dispatch({ type: 'breadcrumb/gotoLink', payload: { displayName, link }})
  	*/
  }
  

  render() {
    // eslint-disable-next-line max-len
    const { id,displayName, employeeInterviewCount } = this.props.interviewType
    
    
    
    return (

      <PageHeaderLayout
        title={`面试类型: ${displayName}`}
        content={summaryOf(this.props.interviewType)}
        wrapperClassName={styles.advancedForm}
      >
        <div>
          <Row gutter={24}>

          
            <Col {...topColResponsiveProps}>
            
            <Card title={`员工面试(${numeral(employeeInterviewCount).format('员工面试0,0')})`}  style={{ width: 180 }}>
              
              <p><Link to={`/interviewType/${id}/list/employeeInterviewList/员工面试列表`}><FontAwesome name="gear"  />&nbsp;管理</Link></p>
              <p><Link to={`/interviewType/${id}/list/employeeInterviewCreateForm`}><FontAwesome name="plus"  />&nbsp;新增</Link></p>
              
              
          </Card>
            
            
             
            </Col>

          </Row>
        </div>
      </PageHeaderLayout>
    )
  }
}



