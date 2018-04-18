

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
import styles from './ServiceFileMovementM2m.viewdetail.less'
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

const summaryOf = (serviceFileMovementM2m) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{serviceFileMovementM2m.id}</Description> 
<Description term="服务状态">{serviceFileMovementM2m.serviceStatus}</Description> 
<Description term="服务概述">{serviceFileMovementM2m.serviceSummary}</Description> 
<Description term="开始时间">{ moment(serviceFileMovementM2m.startTime).format('YYYY-MM-DD')}</Description> 
<Description term="经度">{serviceFileMovementM2m.longitude}</Description> 
<Description term="纬度">{serviceFileMovementM2m.latitude}</Description> 
<Description term="最后更新时间">{ moment(serviceFileMovementM2m.lastUpdateTime).format('YYYY-MM-DD')}</Description> 
<Description term="交接检查码">{serviceFileMovementM2m.transferVerifyCode}</Description> 
<Description term="服务类型">{serviceFileMovementM2m.movementPurpose}</Description> 
<Description term="通知日期时间">{ moment(serviceFileMovementM2m.notifyDatetime).format('YYYY-MM-DD')}</Description> 
<Description term="通知地址">{serviceFileMovementM2m.notifyAddress}</Description> 
<Description term="备注">{serviceFileMovementM2m.notifyComment}</Description> 
<Description term="交接检查结果">{serviceFileMovementM2m.handoverResult}</Description> 
<Description term="交接检查备注">{serviceFileMovementM2m.handoverResultComment}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  serviceFileMovementM2m: state._serviceFileMovementM2m,
}))
export default class ServiceFileMovementM2mViewDetail extends Component {


  state = {
    tabKey: `handOverChecklistResultList`,
    stepDirection: 'horizontal',
  }
 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
    const {HandOverChecklistResultViewTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    
    const serviceFileMovementM2m = this.props.serviceFileMovementM2m
    const { id, handOverChecklistResultCount } = serviceFileMovementM2m
    const { handOverChecklistResultList } = serviceFileMovementM2m
    
    const owner = { type: '_serviceFileMovementM2m', id }
    
    const tabList = [

      {key: 'handOverChecklistResultList',tab: `交接检查结果(${handOverChecklistResultCount})`}, 
   

   ];
   
   
    const contentList = {
       handOverChecklistResultList:  
        <HandOverChecklistResultViewTable data={handOverChecklistResultList} owner={owner} {...this.props} />,
 
    
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="移件服务总览"
        content={summaryOf(this.props.serviceFileMovementM2m)}
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



