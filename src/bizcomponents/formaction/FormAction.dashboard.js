

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
import styles from './FormAction.dashboard.less'
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
const summaryOf = (formAction) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{formAction.id}</Description> 
<Description term="标签">{formAction.label}</Description> 
<Description term="语言环境的关键">{formAction.localeKey}</Description> 
<Description term="行动的关键">{formAction.actionKey}</Description> 
<Description term="水平">{formAction.level}</Description> 
<Description term="url">{formAction.url}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  formAction: state._formAction,
}))
export default class FormActionDashboard extends Component {


  componentDidMount() {
  /*
    // const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props;
    // const { getFieldDecorator, setFieldsValue } = this.props.form;
    const { dispatch, location, formAction } = this.props;
    
    if(!formAction){
    	return;
    }
    const {displayName} = formAction;
    if(!displayName){
    	return;
    }
	const link = location.pathname;
	
    dispatch({ type: 'breadcrumb/gotoLink', payload: { displayName, link }})
  	*/
  }
  

  render() {
    // eslint-disable-next-line max-len
    const { id,displayName,  } = this.props.formAction
    
    
    
    return (

      <PageHeaderLayout
        title={`表单动作: ${displayName}`}
        content={summaryOf(this.props.formAction)}
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



