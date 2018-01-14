

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
import styles from './VehiclePermit.dashboard.less'
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
const summaryOf = (vehiclePermit) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{vehiclePermit.id}</Description> 
<Description term="姓名">{vehiclePermit.holderName}</Description> 
<Description term="驾驶证号码">{vehiclePermit.licenseNumber}</Description> 
<Description term="失效日期">{ moment(vehiclePermit.expirationDate).format('YYYY-MM-DD')}</Description> 
<Description term="图1">{vehiclePermit.image1}</Description> 
<Description term="图2">{vehiclePermit.image2}</Description> 
<Description term="图3">{vehiclePermit.image3}</Description> 
<Description term="图4">{vehiclePermit.image4}</Description> 
<Description term="图5">{vehiclePermit.image5}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  vehiclePermit: state._vehiclePermit,
}))
export default class VehiclePermitDashboard extends Component {
  render() {
    // eslint-disable-next-line max-len
    const { id,  } = this.props.vehiclePermit
    
    
    
    return (

      <PageHeaderLayout
        title="行驶证总览"
        content={summaryOf(this.props.vehiclePermit)}
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



