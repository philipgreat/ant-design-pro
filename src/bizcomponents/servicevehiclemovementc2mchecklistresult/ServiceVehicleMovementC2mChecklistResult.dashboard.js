

import React, { Component } from 'react'
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
import styles from './ServiceVehicleMovementC2mChecklistResult.dashboard.less'
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
const summaryOf = (serviceVehicleMovementC2mChecklistResult) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{serviceVehicleMovementC2mChecklistResult.id}</Description> 
<Description term="检查结果">{serviceVehicleMovementC2mChecklistResult.checkResult}</Description> 
<Description term="检验结果的评论">{serviceVehicleMovementC2mChecklistResult.checkResultComments}</Description> 
<Description term="创建时间">{ moment(serviceVehicleMovementC2mChecklistResult.createTime).format('YYYY-MM-DD')}</Description> 
<Description term="图1">{serviceVehicleMovementC2mChecklistResult.image1}</Description> 
<Description term="图2">{serviceVehicleMovementC2mChecklistResult.image2}</Description> 
<Description term="图3">{serviceVehicleMovementC2mChecklistResult.image3}</Description> 
<Description term="图4">{serviceVehicleMovementC2mChecklistResult.image4}</Description> 
<Description term="图5">{serviceVehicleMovementC2mChecklistResult.image5}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  serviceVehicleMovementC2mChecklistResult: state._serviceVehicleMovementC2mChecklistResult,
}))
export default class ServiceVehicleMovementC2mChecklistResultDashboard extends Component {
  render() {
    // eslint-disable-next-line max-len
    const { id,  } = this.props.serviceVehicleMovementC2mChecklistResult
    
    
    
    return (

      <PageHeaderLayout
        title="收车检车结果总览"
        content={summaryOf(this.props.serviceVehicleMovementC2mChecklistResult)}
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



