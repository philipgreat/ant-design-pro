

import React, { Component } from 'react'
import { connect } from 'dva'
import { Form,Button, Row, Col, Icon, Card, Tabs, Table, Radio, DatePicker, Tooltip, Menu, Dropdown } from 'antd'
import { Link, Route, Redirect, Switch } from 'dva/router'
import numeral from 'numeral'
import {
  ChartCard, yuan, MiniArea, MiniBar, MiniProgress, Field, Bar, Pie, TimelineChart,

} from '../../components/Charts'
import Trend from '../../components/Trend'
import NumberInfo from '../../components/NumberInfo'
import { getTimeDistance } from '../../utils/utils'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import styles from './ServiceVehicleMovementM2m.viewdetail.less'
import GlobalComponents from '../../custcomponents'
import DescriptionList from '../../components/DescriptionList';
const { Description } = DescriptionList;


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

const summaryOf = (serviceVehicleMovementM2m) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{serviceVehicleMovementM2m.id}</Description> 
<Description term="服务状态">{serviceVehicleMovementM2m.serviceStatus}</Description> 
<Description term="拒收原因">{serviceVehicleMovementM2m.rejectComments}</Description> 
<Description term="拒收凭证1">{serviceVehicleMovementM2m.rejectEvidence1}</Description> 
<Description term="拒收凭证2">{serviceVehicleMovementM2m.rejectEvidence2}</Description> 
<Description term="拒收凭证3">{serviceVehicleMovementM2m.rejectEvidence3}</Description> 
<Description term="拒收凭证4">{serviceVehicleMovementM2m.rejectEvidence4}</Description> 
<Description term="拒收凭证5">{serviceVehicleMovementM2m.rejectEvidence5}</Description> 
<Description term="开始时间">{ moment(serviceVehicleMovementM2m.startTime).format('YYYY-MM-DD')}</Description> 
<Description term="最后的位置">{serviceVehicleMovementM2m.lastLocation}</Description> 
<Description term="最后更新时间">{ moment(serviceVehicleMovementM2m.lastUpdateTime).format('YYYY-MM-DD')}</Description> 
<Description term="移动目的">{serviceVehicleMovementM2m.movementPurpose}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  serviceVehicleMovementM2m: state._serviceVehicleMovementM2m,
}))
export default class ServiceVehicleMovementM2mViewDetail extends Component {


  state = {
    tabKey: `serviceVehicleMovementM2mChecklistResultList`,
    stepDirection: 'horizontal',
  }
 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
    const {ServiceVehicleMovementM2mChecklistResultViewTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    const { id, serviceVehicleMovementM2mChecklistResultCount } = this.props.serviceVehicleMovementM2m
    const { serviceVehicleMovementM2mChecklistResultList } = this.props.serviceVehicleMovementM2m
    
    const owner = { type: '_serviceVehicleMovementM2m', id }
 
    
    const tabList = [

      {key: 'serviceVehicleMovementM2mChecklistResultList',tab: `送审服务检查结果(${serviceVehicleMovementM2mChecklistResultCount})`}, 
   

   ];
   
   
    const contentList = {
       serviceVehicleMovementM2mChecklistResultList:  
        <ServiceVehicleMovementM2mChecklistResultViewTable data={serviceVehicleMovementM2mChecklistResultList} owner={owner} {...this.props} />,
 
    
    };
    
    
    return (

      <PageHeaderLayout
        title="送审服务总览"
        content={summaryOf(this.props.serviceVehicleMovementM2m)}
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



