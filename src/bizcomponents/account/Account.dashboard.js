

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
import styles from './Account.dashboard.less'
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
const summaryOf = (account) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{account.id}</Description> 
<Description term="描述">{account.description}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  account: state._account,
}))
export default class AccountDashboard extends Component {


  componentDidMount() {
  /*
    // const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props;
    // const { getFieldDecorator, setFieldsValue } = this.props.form;
    const { dispatch, location, account } = this.props;
    
    if(!account){
    	return;
    }
    const {displayName} = account;
    if(!displayName){
    	return;
    }
	const link = location.pathname;
	
    dispatch({ type: 'breadcrumb/gotoLink', payload: { displayName, link }})
  	*/
  }
  

  render() {
    // eslint-disable-next-line max-len
    const { id,displayName, serviceCompanyAccountCount, repairingCompanyAccountCount, insuranceServiceAccountCount, mainOrderAccountCount, inspectionStationAccountCount } = this.props.account
    const cardsData = {cardsName:"对账单",cardsFor: "account",cardsSource: this.props.account,
  		subItems: [
{name: 'serviceCompanyAccountList', displayName:'服务商户对账单',type:'serviceCompanyAccount',count:serviceCompanyAccountCount},
{name: 'repairingCompanyAccountList', displayName:'修理厂对账单',type:'repairingCompanyAccount',count:repairingCompanyAccountCount},
{name: 'insuranceServiceAccountList', displayName:'保险服务对账单',type:'insuranceServiceAccount',count:insuranceServiceAccountCount},
{name: 'mainOrderAccountList', displayName:'年检订单对账单',type:'mainOrderAccount',count:mainOrderAccountCount},
{name: 'inspectionStationAccountList', displayName:'检测站对账单',type:'inspectionStationAccount',count:inspectionStationAccountCount},
    
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



