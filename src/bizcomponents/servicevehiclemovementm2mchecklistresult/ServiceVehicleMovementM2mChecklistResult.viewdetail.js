

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
import styles from './ServiceVehicleMovementM2mChecklistResult.viewdetail.less'
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

const summaryOf = (serviceVehicleMovementM2mChecklistResult) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{serviceVehicleMovementM2mChecklistResult.id}</Description> 
<Description term="检查结果">{serviceVehicleMovementM2mChecklistResult.checkResult}</Description> 
<Description term="检验结果的评论">{serviceVehicleMovementM2mChecklistResult.checkResultComments}</Description> 
<Description term="创建时间">{ moment(serviceVehicleMovementM2mChecklistResult.createTime).format('YYYY-MM-DD')}</Description> 
<Description term="图1">{serviceVehicleMovementM2mChecklistResult.image1}</Description> 
<Description term="图2">{serviceVehicleMovementM2mChecklistResult.image2}</Description> 
<Description term="图3">{serviceVehicleMovementM2mChecklistResult.image3}</Description> 
<Description term="图4">{serviceVehicleMovementM2mChecklistResult.image4}</Description> 
<Description term="图5">{serviceVehicleMovementM2mChecklistResult.image5}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  serviceVehicleMovementM2mChecklistResult: state._serviceVehicleMovementM2mChecklistResult,
}))
export default class ServiceVehicleMovementM2mChecklistResultViewDetail extends Component {

 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
  
    // eslint-disable-next-line max-len
    const { id,  } = this.props.serviceVehicleMovementM2mChecklistResult
    const {  } = this.props.serviceVehicleMovementM2mChecklistResult
    
    const owner = { type: '_serviceVehicleMovementM2mChecklistResult', id }
 
    
    const tabList = [

   

   ];
   
   
    const contentList = {
     
    };
    
    
    return (

      <PageHeaderLayout
        title="送审服务检查结果总览"
        content={summaryOf(this.props.serviceVehicleMovementM2mChecklistResult)}
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



