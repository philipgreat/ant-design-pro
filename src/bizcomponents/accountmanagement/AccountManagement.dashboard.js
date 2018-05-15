

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
import styles from './AccountManagement.dashboard.less'
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
const summaryOf = (accountManagement) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{accountManagement.id}</Description> 
<Description term="总结">{accountManagement.summary}</Description> 
	
        
      </DescriptionList>
	)

}


class AccountManagementDashboard extends Component {


  componentDidMount() {
  /*
    // const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props;
    // const { getFieldDecorator, setFieldsValue } = this.props.form;
    const { dispatch, location, accountManagement } = this.props;
    
    if(!accountManagement){
    	return;
    }
    const {displayName} = accountManagement;
    if(!displayName){
    	return;
    }
	const link = location.pathname;
	
    dispatch({ type: 'breadcrumb/gotoLink', payload: { displayName, link }})
  	*/
  }
  

  render() {
    // eslint-disable-next-line max-len
    const { id,displayName, memberAccountRechargeProductCount, platformAccountCount, fundationAccountCount, storeAccountCount, customerAccountCount } = this.props.accountManagement
    const cardsData = {cardsName:"账户管理",cardsFor: "accountManagement",cardsSource: this.props.accountManagement,
  		subItems: [
{name: 'memberAccountRechargeProductList', displayName:'会员帐户充电产品',type:'memberAccountRechargeProduct',count:memberAccountRechargeProductCount},
{name: 'platformAccountList', displayName:'平台账户',type:'platformAccount',count:platformAccountCount},
{name: 'fundationAccountList', displayName:'基金账户',type:'fundationAccount',count:fundationAccountCount},
{name: 'storeAccountList', displayName:'存储账户',type:'storeAccount',count:storeAccountCount},
{name: 'customerAccountList', displayName:'客户账户',type:'customerAccount',count:customerAccountCount},
    
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

           {cardsData.subItems.map((item)=>(<Col {...topColResponsiveProps} key={item.name}>           
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

export default connect(state => ({
  accountManagement: state._accountManagement,
}))(AccountManagementDashboard)

