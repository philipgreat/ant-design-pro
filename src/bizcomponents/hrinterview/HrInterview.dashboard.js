

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
import styles from './HrInterview.dashboard.less'
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
const summaryOf = (hrInterview) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{hrInterview.id}</Description> 
<Description term="谁">{hrInterview.who}</Description> 
<Description term="面试时间">{ moment(hrInterview.interviewTime).format('YYYY-MM-DD')}</Description> 
<Description term="评论">{hrInterview.comments}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  hrInterview: state._hrInterview,
}))
export default class HrInterviewDashboard extends Component {


  componentDidMount() {
  /*
    // const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props;
    // const { getFieldDecorator, setFieldsValue } = this.props.form;
    const { dispatch, location, hrInterview } = this.props;
    
    if(!hrInterview){
    	return;
    }
    const {displayName} = hrInterview;
    if(!displayName){
    	return;
    }
	const link = location.pathname;
	
    dispatch({ type: 'breadcrumb/gotoLink', payload: { displayName, link }})
  	*/
  }
  

  render() {
    // eslint-disable-next-line max-len
    const { id,displayName, employeeCount } = this.props.hrInterview
    
    
    
    return (

      <PageHeaderLayout
        title={`人力资源部面试: ${displayName}`}
        content={summaryOf(this.props.hrInterview)}
        wrapperClassName={styles.advancedForm}
      >
        <div>
          <Row gutter={24}>

          
            <Col {...topColResponsiveProps}>
            
            <Card title={`员工(${numeral(employeeCount).format('员工0,0')})`}  style={{ width: 180 }}>
              
              <p><Link to={`/hrInterview/${id}/list/employeeList/员工列表`}><FontAwesome name="gear"  />&nbsp;管理</Link></p>
              <p><Link to={`/hrInterview/${id}/list/employeeCreateForm`}><FontAwesome name="plus"  />&nbsp;新增</Link></p>
              
              
          </Card>
            
            
             
            </Col>

          </Row>
        </div>
      </PageHeaderLayout>
    )
  }
}



