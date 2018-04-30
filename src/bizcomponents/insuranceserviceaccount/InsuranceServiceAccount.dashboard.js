

import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome';
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
import styles from './InsuranceServiceAccount.dashboard.less'
import DescriptionList from '../../components/DescriptionList';
import ImagePreview from '../../components/ImagePreview';
const { Description } = DescriptionList;
const { TabPane } = Tabs
const { RangePicker } = DatePicker

const topColResponsiveProps = {
  xs: 8,
  sm: 6,
  md: 6,
  lg: 4,
  xl: 4,
  style: { marginBottom: 24 },
}
const summaryOf = (insuranceServiceAccount) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{insuranceServiceAccount.id}</Description> 
<Description term="车牌号码">{insuranceServiceAccount.vehicleLicensePlateNumber}</Description> 
<Description term="保险服务单号">{insuranceServiceAccount.insuranceOrderNumber}</Description> 
<Description term="员工姓名">{insuranceServiceAccount.employeeName}</Description> 
<Description term="保险名称">{insuranceServiceAccount.insuranceName}</Description> 
<Description term="承保方">{insuranceServiceAccount.insuranceVendor}</Description> 
<Description term="保费">{insuranceServiceAccount.insurancePrice}</Description> 
<Description term="保单号码">{insuranceServiceAccount.insuranceNumber}</Description> 
<Description term="保险购买日期">{ moment(insuranceServiceAccount.insuranceOrderDatetime).format('YYYY-MM-DD')}</Description> 
<Description term="年检订单ID">{insuranceServiceAccount.mainOrderId}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  insuranceServiceAccount: state._insuranceServiceAccount,
}))
export default class InsuranceServiceAccountDashboard extends Component {


  componentDidMount() {
  /*
    // const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props;
    // const { getFieldDecorator, setFieldsValue } = this.props.form;
    const { dispatch, location, insuranceServiceAccount } = this.props;
    
    if(!insuranceServiceAccount){
    	return;
    }
    const {displayName} = insuranceServiceAccount;
    if(!displayName){
    	return;
    }
	const link = location.pathname;
	
    dispatch({ type: 'breadcrumb/gotoLink', payload: { displayName, link }})
  	*/
  }
  

  render() {
    // eslint-disable-next-line max-len
    const { id,displayName,  } = this.props.insuranceServiceAccount
    const cardsData = {cardsName:"保险服务对账单",cardsFor: "insuranceServiceAccount",cardsSource: this.props.insuranceServiceAccount,
  		subItems: [
    
      	],
  	};
    
    return (

      <PageHeaderLayout
        title={`${cardsData.cardsName}: ${displayName}`}
        content={summaryOf(cardsData.cardsSource)}
        wrapperClassName={styles.advancedForm}
      >
        <div>
          <Row gutter={24}>

           {cardsData.subItems.map((item)=>(<Col {...topColResponsiveProps}>           
            <Card title={`${item.displayName}(${numeral(item.count).format('0,0')})`}  style={{ width: 180 }}>             
              <p><Link to={`/${cardsData.cardsFor}/${id}/list/${item.name}/${item.displayName}列表`}><FontAwesome name="gear"  />&nbsp;管理</Link></p>
              <p><Link to={`/${cardsData.cardsFor}/${id}/list/${item.type}CreateForm`}><FontAwesome name="plus"  />&nbsp;新增</Link></p>              
          </Card> 
            </Col>))}

          </Row>
        </div>
      </PageHeaderLayout>
    )
  }
}



