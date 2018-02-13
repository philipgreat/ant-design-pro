

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
import styles from './ServiceCompanyAccount.dashboard.less'
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
const summaryOf = (serviceCompanyAccount) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{serviceCompanyAccount.id}</Description> 
<Description term="服务订单号">{serviceCompanyAccount.serviceOrderNumber}</Description> 
<Description term="服务订单代码">{serviceCompanyAccount.serviceOrderCode}</Description> 
<Description term="服务订单名称">{serviceCompanyAccount.serviceOrderName}</Description> 
<Description term="服务完成日期时间">{ moment(serviceCompanyAccount.serviceFulfilledDatetime).format('YYYY-MM-DD')}</Description> 
<Description term="合同标识">{serviceCompanyAccount.contractId}</Description> 
<Description term="合同价格的价值">{serviceCompanyAccount.contractPriceValue}</Description> 
<Description term="合同价格类型">{serviceCompanyAccount.contractPriceType}</Description> 
<Description term="服务人员的名字">{serviceCompanyAccount.serviceWorkerName}</Description> 
<Description term="服务公司名称">{serviceCompanyAccount.serviceCompanyName}</Description> 
<Description term="主要订单Id">{serviceCompanyAccount.mainOrderId}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  serviceCompanyAccount: state._serviceCompanyAccount,
}))
export default class ServiceCompanyAccountDashboard extends Component {
  render() {
    // eslint-disable-next-line max-len
    const { id,  } = this.props.serviceCompanyAccount
    
    
    
    return (

      <PageHeaderLayout
        title="服务公司对账单总览"
        content={summaryOf(this.props.serviceCompanyAccount)}
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



