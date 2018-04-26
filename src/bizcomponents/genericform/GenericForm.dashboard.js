

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
import styles from './GenericForm.dashboard.less'
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
const summaryOf = (genericForm) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{genericForm.id}</Description> 
<Description term="头衔">{genericForm.title}</Description> 
<Description term="描述">{genericForm.description}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  genericForm: state._genericForm,
}))
export default class GenericFormDashboard extends Component {


  componentDidMount() {
  /*
    // const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props;
    // const { getFieldDecorator, setFieldsValue } = this.props.form;
    const { dispatch, location, genericForm } = this.props;
    
    if(!genericForm){
    	return;
    }
    const {displayName} = genericForm;
    if(!displayName){
    	return;
    }
	const link = location.pathname;
	
    dispatch({ type: 'breadcrumb/gotoLink', payload: { displayName, link }})
  	*/
  }
  

  render() {
    // eslint-disable-next-line max-len
    const { id,displayName, formMessageCount, formFieldMessageCount, formFieldCount, formActionCount } = this.props.genericForm
    
    
    
    return (

      <PageHeaderLayout
        title={`通用的形式: ${displayName}`}
        content={summaryOf(this.props.genericForm)}
        wrapperClassName={styles.advancedForm}
      >
        <div>
          <Row gutter={24}>

          
            <Col {...topColResponsiveProps}>
            
            <Card title={`表单信息(${numeral(formMessageCount).format('表单信息0,0')})`}  style={{ width: 180 }}>
              
              <p><Link to={`/genericForm/${id}/list/formMessageList/表单信息列表`}><FontAwesome name="gear"  />&nbsp;管理</Link></p>
              <p><Link to={`/genericForm/${id}/list/formMessageCreateForm`}><FontAwesome name="plus"  />&nbsp;新增</Link></p>
              
              
          </Card>
            
            
             
            </Col>

          
            <Col {...topColResponsiveProps}>
            
            <Card title={`表单字段的信息(${numeral(formFieldMessageCount).format('表单字段的信息0,0')})`}  style={{ width: 180 }}>
              
              <p><Link to={`/genericForm/${id}/list/formFieldMessageList/表单字段的信息列表`}><FontAwesome name="gear"  />&nbsp;管理</Link></p>
              <p><Link to={`/genericForm/${id}/list/formFieldMessageCreateForm`}><FontAwesome name="plus"  />&nbsp;新增</Link></p>
              
              
          </Card>
            
            
             
            </Col>

          
            <Col {...topColResponsiveProps}>
            
            <Card title={`表单字段(${numeral(formFieldCount).format('表单字段0,0')})`}  style={{ width: 180 }}>
              
              <p><Link to={`/genericForm/${id}/list/formFieldList/表单字段列表`}><FontAwesome name="gear"  />&nbsp;管理</Link></p>
              <p><Link to={`/genericForm/${id}/list/formFieldCreateForm`}><FontAwesome name="plus"  />&nbsp;新增</Link></p>
              
              
          </Card>
            
            
             
            </Col>

          
            <Col {...topColResponsiveProps}>
            
            <Card title={`表单动作(${numeral(formActionCount).format('表单动作0,0')})`}  style={{ width: 180 }}>
              
              <p><Link to={`/genericForm/${id}/list/formActionList/表单动作列表`}><FontAwesome name="gear"  />&nbsp;管理</Link></p>
              <p><Link to={`/genericForm/${id}/list/formActionCreateForm`}><FontAwesome name="plus"  />&nbsp;新增</Link></p>
              
              
          </Card>
            
            
             
            </Col>

          </Row>
        </div>
      </PageHeaderLayout>
    )
  }
}



