

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
import styles from './ServiceFileMovementM2c.viewdetail.less'
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

const summaryOf = (serviceFileMovementM2c) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{serviceFileMovementM2c.id}</Description> 
<Description term="服务状态">{serviceFileMovementM2c.serviceStatus}</Description> 
<Description term="拒收原因">{serviceFileMovementM2c.rejectComments}</Description> 
<Description term="拒收凭证1">{serviceFileMovementM2c.rejectEvidence1}</Description> 
<Description term="拒收凭证2">{serviceFileMovementM2c.rejectEvidence2}</Description> 
<Description term="拒收凭证3">{serviceFileMovementM2c.rejectEvidence3}</Description> 
<Description term="拒收凭证4">{serviceFileMovementM2c.rejectEvidence4}</Description> 
<Description term="拒收凭证5">{serviceFileMovementM2c.rejectEvidence5}</Description> 
<Description term="开始时间">{ moment(serviceFileMovementM2c.startTime).format('YYYY-MM-DD')}</Description> 
<Description term="最后的位置">{serviceFileMovementM2c.lastLocation}</Description> 
<Description term="最后更新时间">{ moment(serviceFileMovementM2c.lastUpdateTime).format('YYYY-MM-DD')}</Description> 
<Description term="移动目的">{serviceFileMovementM2c.movementPurpose}</Description> 
<Description term="联系人姓名">{serviceFileMovementM2c.contactName}</Description> 
<Description term="联系手机号码">{serviceFileMovementM2c.contactMobileNumber}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  serviceFileMovementM2c: state._serviceFileMovementM2c,
}))
export default class ServiceFileMovementM2cViewDetail extends Component {


  state = {
    tabKey: `serviceFileMovementM2cChecklistResultList`,
    stepDirection: 'horizontal',
  }
 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
    const {ServiceFileMovementM2cChecklistResultViewTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    const { id, serviceFileMovementM2cChecklistResultCount } = this.props.serviceFileMovementM2c
    const { serviceFileMovementM2cChecklistResultList } = this.props.serviceFileMovementM2c
    
    const owner = { type: '_serviceFileMovementM2c', id }
 
    
    const tabList = [

      {key: 'serviceFileMovementM2cChecklistResultList',tab: `还件服务检查结果(${serviceFileMovementM2cChecklistResultCount})`}, 
   

   ];
   
   
    const contentList = {
       serviceFileMovementM2cChecklistResultList:  
        <ServiceFileMovementM2cChecklistResultViewTable data={serviceFileMovementM2cChecklistResultList} owner={owner} {...this.props} />,
 
    
    };
    
    
    return (

      <PageHeaderLayout
        title="还件服务总览"
        content={summaryOf(this.props.serviceFileMovementM2c)}
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



