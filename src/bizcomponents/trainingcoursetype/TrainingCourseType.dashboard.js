

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
import styles from './TrainingCourseType.dashboard.less'
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
const summaryOf = (trainingCourseType) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{trainingCourseType.id}</Description> 
<Description term="代码">{trainingCourseType.code}</Description> 
<Description term="名称">{trainingCourseType.name}</Description> 
<Description term="描述">{trainingCourseType.description}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  trainingCourseType: state._trainingCourseType,
}))
export default class TrainingCourseTypeDashboard extends Component {


  componentDidMount() {
  /*
    // const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props;
    // const { getFieldDecorator, setFieldsValue } = this.props.form;
    const { dispatch, location, trainingCourseType } = this.props;
    
    if(!trainingCourseType){
    	return;
    }
    const {displayName} = trainingCourseType;
    if(!displayName){
    	return;
    }
	const link = location.pathname;
	
    dispatch({ type: 'breadcrumb/gotoLink', payload: { displayName, link }})
  	*/
  }
  

  render() {
    // eslint-disable-next-line max-len
    const { id,displayName, companyTrainingCount } = this.props.trainingCourseType
    
    
    
    return (

      <PageHeaderLayout
        title={`培训课程类型: ${displayName}`}
        content={summaryOf(this.props.trainingCourseType)}
        wrapperClassName={styles.advancedForm}
      >
        <div>
          <Row gutter={24}>

          
            <Col {...topColResponsiveProps}>
            
            <Card title={`公司培训(${numeral(companyTrainingCount).format('公司培训0,0')})`}  style={{ width: 180 }}>
              
              <p><Link to={`/trainingCourseType/${id}/list/companyTrainingList/公司培训列表`}><FontAwesome name="gear"  />&nbsp;管理</Link></p>
              <p><Link to={`/trainingCourseType/${id}/list/companyTrainingCreateForm`}><FontAwesome name="plus"  />&nbsp;新增</Link></p>
              
              
          </Card>
            
            
             
            </Col>

          </Row>
        </div>
      </PageHeaderLayout>
    )
  }
}



