

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
import styles from './PatientInfo.viewdetail.less'
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

const summaryOf = (patientInfo) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{patientInfo.id}</Description> 
<Description term="名称">{patientInfo.name}</Description> 
<Description term="昵称">{patientInfo.nickName}</Description> 
<Description term="性别">{patientInfo.gender}</Description> 
<Description term="生日">{ moment(patientInfo.birthday).format('YYYY-MM-DD')}</Description> 
<Description term="佩戴设备类型">{patientInfo.wearDeviceType}</Description> 
<Description term="磨损的开始时间">{ moment(patientInfo.wearStartTime).format('YYYY-MM-DD')}</Description> 
<Description term="康复计划">{patientInfo.recoverPlan}</Description> 
<Description term="复苏开始时间">{ moment(patientInfo.recoverStartTime).format('YYYY-MM-DD')}</Description> 
	
        
      </DescriptionList>
	)

}

class PatientInfoViewDetail extends Component {

 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
  
    // eslint-disable-next-line max-len
    
    const patientInfo = this.props.patientInfo
    const { id,  } = patientInfo
    const {  } = patientInfo
    
    const owner = { type: '_patientInfo', id }
    
    const tabList = [

   

   ];
   
   
    const contentList = {
     
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="病人信息总览"
        content={summaryOf(this.props.patientInfo)}
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
  patientInfo: state._patientInfo,
}))(PatientInfoViewDetail)

