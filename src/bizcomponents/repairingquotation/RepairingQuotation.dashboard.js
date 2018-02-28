

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
import styles from './RepairingQuotation.dashboard.less'
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
const summaryOf = (repairingQuotation) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{repairingQuotation.id}</Description> 
<Description term="车辆维修报价单">{repairingQuotation.repairingQuotationDescription}</Description> 
<Description term="车辆维修报价单1">{repairingQuotation.repairingQuotationImage1}</Description> 
<Description term="车辆维修报价单2">{repairingQuotation.repairingQuotationImage2}</Description> 
<Description term="车辆维修报价单3">{repairingQuotation.repairingQuotationImage3}</Description> 
<Description term="车辆维修报价单4">{repairingQuotation.repairingQuotationImage4}</Description> 
<Description term="车辆维修报价单5">{repairingQuotation.repairingQuotationImage5}</Description> 
<Description term="车辆维修报价总金额">{repairingQuotation.repairingQuotationTotalAmount}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  repairingQuotation: state._repairingQuotation,
}))
export default class RepairingQuotationDashboard extends Component {
  render() {
    // eslint-disable-next-line max-len
    const { id,  } = this.props.repairingQuotation
    
    
    
    return (

      <PageHeaderLayout
        title="车辆维修报价总览"
        content={summaryOf(this.props.repairingQuotation)}
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



