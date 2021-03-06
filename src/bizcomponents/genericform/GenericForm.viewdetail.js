

import React, { Component } from 'react'
import { connect } from 'dva'
import { Form,Button, Row, Col, Icon, Card, Tabs, Table, Radio, DatePicker, Tooltip, Menu, Dropdown,Steps,Badge } from 'antd'
import { Link, Route, Redirect, Switch } from 'dva/router'
import numeral from 'numeral'
import moment from 'moment'
import {
  ChartCard, yuan, MiniArea, MiniBar, MiniProgress, Field, Bar, Pie, TimelineChart,

} from '../../components/Charts'
import Trend from '../../components/Trend'
import NumberInfo from '../../components/NumberInfo'
import { getTimeDistance } from '../../utils/utils'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import styles from './GenericForm.viewdetail.less'
import GlobalComponents from '../../custcomponents'
import DescriptionList from '../../components/DescriptionList';
const { Description } = DescriptionList;
const { Step } = Steps

const { TabPane } = Tabs
const { RangePicker } = DatePicker

const topColResponsiveProps = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 6,
  style: { marginBottom: 24 },
}

const summaryOf = (genericForm) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{genericForm.id}</Description> 
<Description term="标题">{genericForm.title}</Description> 
<Description term="描述">{genericForm.description}</Description> 
	
        
      </DescriptionList>
	)

}

class GenericFormViewDetail extends Component {


  state = {
    tabKey: `formMessageList`,
    stepDirection: 'horizontal',
  }
 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
    const {FormMessageViewTable} = GlobalComponents;
    const {FormFieldMessageViewTable} = GlobalComponents;
    const {FormFieldViewTable} = GlobalComponents;
    const {FormActionViewTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    
    const genericForm = this.props.genericForm
    const { id, formMessageCount, formFieldMessageCount, formFieldCount, formActionCount } = genericForm
    const { formMessageList, formFieldMessageList, formFieldList, formActionList } = genericForm
    
    const owner = { type: '_genericForm', id }
    
    const tabList = [

      {key: 'formMessageList',tab: `表单信息(${formMessageCount})`}, 
      {key: 'formFieldMessageList',tab: `表单字段的信息(${formFieldMessageCount})`}, 
      {key: 'formFieldList',tab: `表单字段(${formFieldCount})`}, 
      {key: 'formActionList',tab: `表单动作(${formActionCount})`}, 
   

   ];
   
   
    const contentList = {
       formMessageList:  
        <FormMessageViewTable data={formMessageList} owner={owner} {...this.props} />,
 
      formFieldMessageList:  
        <FormFieldMessageViewTable data={formFieldMessageList} owner={owner} {...this.props} />,
 
      formFieldList:  
        <FormFieldViewTable data={formFieldList} owner={owner} {...this.props} />,
 
      formActionList:  
        <FormActionViewTable data={formActionList} owner={owner} {...this.props} />,
 
    
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="通用的形式总览"
        content={summaryOf(this.props.genericForm)}
        wrapperClassName={styles.advancedForm}
      >

      
      
	<Card 
  		className={styles.card} 
  		bordered={false}
  		tabList={tabList}
  		onTabChange={this.onTabChange}>
            {contentList[this.state.tabKey]}
        </Card>

 
      </PageHeaderLayout>
    )
  }
}

export default connect(state => ({
  genericForm: state._genericForm,
}))(GenericFormViewDetail)

