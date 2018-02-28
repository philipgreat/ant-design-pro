

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
import styles from './VehicleInfo.viewdetail.less'
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

const summaryOf = (vehicleInfo) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{vehicleInfo.id}</Description> 
<Description term="车牌号码">{vehicleInfo.licensePlateNumber}</Description> 
<Description term="车辆类型">{vehicleInfo.vehicleType}</Description> 
<Description term="使用性质">{vehicleInfo.useCharacter}</Description> 
<Description term="核准座位数">{vehicleInfo.seatsQuantity}</Description> 
<Description term="注册日期">{ moment(vehicleInfo.registrationDate).format('YYYY-MM-DD')}</Description> 
<Description term="检测有效期">{ moment(vehicleInfo.inspectionValidationDate).format('YYYY-MM-DD')}</Description> 
<Description term="保险有效期">{ moment(vehicleInfo.insuranceValidationDate).format('YYYY-MM-DD')}</Description> 
<Description term="发动机号">{vehicleInfo.engineNumber}</Description> 
<Description term="车架号">{vehicleInfo.vehicleIdentificationNumber}</Description> 
<Description term="发证日期">{ moment(vehicleInfo.vehiclePermitIssueDate).format('YYYY-MM-DD')}</Description> 
<Description term="所有人">{vehicleInfo.vehiclePermitHolderName}</Description> 
<Description term="行驶证图1">{vehicleInfo.vehiclePermitImage1}</Description> 
<Description term="行驶证图2">{vehicleInfo.vehiclePermitImage2}</Description> 
<Description term="行驶证图3">{vehicleInfo.vehiclePermitImage3}</Description> 
<Description term="行驶证图4">{vehicleInfo.vehiclePermitImage4}</Description> 
<Description term="行驶证图5">{vehicleInfo.vehiclePermitImage5}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  vehicleInfo: state._vehicleInfo,
}))
export default class VehicleInfoViewDetail extends Component {

 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
  
    // eslint-disable-next-line max-len
    
    const vehicleInfo = this.props.vehicleInfo
    const { id,  } = vehicleInfo
    const {  } = vehicleInfo
    
    const owner = { type: '_vehicleInfo', id }
    
    const tabList = [

   

   ];
   
   
    const contentList = {
     
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="车辆信息总览"
        content={summaryOf(this.props.vehicleInfo)}
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



