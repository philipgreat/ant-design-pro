

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
import styles from './ServiceVehicleMovementM2c.viewdetail.less'
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

const summaryOf = (serviceVehicleMovementM2c) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{serviceVehicleMovementM2c.id}</Description> 
<Description term="服务状态">{serviceVehicleMovementM2c.serviceStatus}</Description> 
<Description term="拒收原因">{serviceVehicleMovementM2c.rejectComments}</Description> 
<Description term="拒收凭证1">{serviceVehicleMovementM2c.rejectEvidence1}</Description> 
<Description term="拒收凭证2">{serviceVehicleMovementM2c.rejectEvidence2}</Description> 
<Description term="拒收凭证3">{serviceVehicleMovementM2c.rejectEvidence3}</Description> 
<Description term="拒收凭证4">{serviceVehicleMovementM2c.rejectEvidence4}</Description> 
<Description term="拒收凭证5">{serviceVehicleMovementM2c.rejectEvidence5}</Description> 
<Description term="开始时间">{ moment(serviceVehicleMovementM2c.startTime).format('YYYY-MM-DD')}</Description> 
<Description term="最后的位置">{serviceVehicleMovementM2c.lastLocation}</Description> 
<Description term="最后更新时间">{ moment(serviceVehicleMovementM2c.lastUpdateTime).format('YYYY-MM-DD')}</Description> 
<Description term="移动目的">{serviceVehicleMovementM2c.movementPurpose}</Description> 
<Description term="联系人姓名">{serviceVehicleMovementM2c.contactName}</Description> 
<Description term="联系手机号码">{serviceVehicleMovementM2c.contactMobileNumber}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  serviceVehicleMovementM2c: state._serviceVehicleMovementM2c,
}))
export default class ServiceVehicleMovementM2cViewDetail extends Component {


  state = {
    tabKey: `serviceVehicleMovementM2cChecklistResultList`,
    stepDirection: 'horizontal',
  }
 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
    const {ServiceVehicleMovementM2cChecklistResultViewTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    
    const serviceVehicleMovementM2c = this.props.serviceVehicleMovementM2c
    const { id, serviceVehicleMovementM2cChecklistResultCount } = serviceVehicleMovementM2c
    const { serviceVehicleMovementM2cChecklistResultList } = serviceVehicleMovementM2c
    
    const owner = { type: '_serviceVehicleMovementM2c', id }
    
    const tabList = [

      {key: 'serviceVehicleMovementM2cChecklistResultList',tab: `还车服务检查结果(${serviceVehicleMovementM2cChecklistResultCount})`}, 
   

   ];
   
   
    const contentList = {
       serviceVehicleMovementM2cChecklistResultList:  
        <ServiceVehicleMovementM2cChecklistResultViewTable data={serviceVehicleMovementM2cChecklistResultList} owner={owner} {...this.props} />,
 
    
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="还车服务总览"
        content={summaryOf(this.props.serviceVehicleMovementM2c)}
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



