

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
import styles from './Scoring.dashboard.less'
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
const summaryOf = (scoring) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{scoring.id}</Description> 
<Description term="由谁打分">{scoring.scoredBy}</Description> 
<Description term="分数">{scoring.score}</Description> 
<Description term="评论">{scoring.comment}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  scoring: state._scoring,
}))
export default class ScoringDashboard extends Component {


  componentDidMount() {
  /*
    // const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props;
    // const { getFieldDecorator, setFieldsValue } = this.props.form;
    const { dispatch, location, scoring } = this.props;
    
    if(!scoring){
    	return;
    }
    const {displayName} = scoring;
    if(!displayName){
    	return;
    }
	const link = location.pathname;
	
    dispatch({ type: 'breadcrumb/gotoLink', payload: { displayName, link }})
  	*/
  }
  

  render() {
    // eslint-disable-next-line max-len
    const { id,displayName, employeeCompanyTrainingCount } = this.props.scoring
    
    
    
    return (

      <PageHeaderLayout
        title={`评分: ${displayName}`}
        content={summaryOf(this.props.scoring)}
        wrapperClassName={styles.advancedForm}
      >
        <div>
          <Row gutter={24}>

          
            <Col {...topColResponsiveProps}>
            
            <Card title={`员工参与的公司培训(${numeral(employeeCompanyTrainingCount).format('员工参与的公司培训0,0')})`}  style={{ width: 180 }}>
              
              <p><Link to={`/scoring/${id}/list/employeeCompanyTrainingList/员工参与的公司培训列表`}><FontAwesome name="gear"  />&nbsp;管理</Link></p>
              <p><Link to={`/scoring/${id}/list/employeeCompanyTrainingCreateForm`}><FontAwesome name="plus"  />&nbsp;新增</Link></p>
              
              
          </Card>
            
            
             
            </Col>

          </Row>
        </div>
      </PageHeaderLayout>
    )
  }
}



