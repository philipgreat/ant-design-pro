

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
import styles from './MainOrder.dashboard.less'
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
const summaryOf = (mainOrder) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{mainOrder.id}</Description> 
<Description term="主要订单状态">{mainOrder.mainOrderStatus}</Description> 
	
        
      </DescriptionList>
	)

}


class MainOrderDashboard extends Component {


  componentDidMount() {
  /*
    // const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props;
    // const { getFieldDecorator, setFieldsValue } = this.props.form;
    const { dispatch, location, mainOrder } = this.props;
    
    if(!mainOrder){
    	return;
    }
    const {displayName} = mainOrder;
    if(!displayName){
    	return;
    }
	const link = location.pathname;
	
    dispatch({ type: 'breadcrumb/gotoLink', payload: { displayName, link }})
  	*/
  }
  

  render() {
    // eslint-disable-next-line max-len
    const { id,displayName, lineItemCount, mainOrderPaymentCount, platformAccountDetailsCount, fundationAccountDetailsCount, storeAccountDetailsCount, customerAccountDetailsCount, memberCustomerCount } = this.props.mainOrder
    const cardsData = {cardsName:"主订单",cardsFor: "mainOrder",cardsSource: this.props.mainOrder,
  		subItems: [
{name: 'lineItemList', displayName:'行项目',type:'lineItem',count:lineItemCount},
{name: 'mainOrderPaymentList', displayName:'主要订单付款',type:'mainOrderPayment',count:mainOrderPaymentCount},
{name: 'platformAccountDetailsList', displayName:'平台账户信息',type:'platformAccountDetails',count:platformAccountDetailsCount},
{name: 'fundationAccountDetailsList', displayName:'基金账户信息',type:'fundationAccountDetails',count:fundationAccountDetailsCount},
{name: 'storeAccountDetailsList', displayName:'存储帐户详细信息',type:'storeAccountDetails',count:storeAccountDetailsCount},
{name: 'customerAccountDetailsList', displayName:'客户账户信息',type:'customerAccountDetails',count:customerAccountDetailsCount},
{name: 'memberCustomerList', displayName:'会员的客户',type:'memberCustomer',count:memberCustomerCount},
    
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
  mainOrder: state._mainOrder,
}))(MainOrderDashboard)

