

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
import styles from './MemberCustomer.dashboard.less'
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
const summaryOf = (memberCustomer) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{memberCustomer.id}</Description> 
<Description term="产品名称">{memberCustomer.productName}</Description> 
<Description term="产品描述">{memberCustomer.productDescription}</Description> 
<Description term="参加研讨会">{memberCustomer.joinWorkshop?'是':'否'}</Description> 
<Description term="制造车间">{memberCustomer.createWorkshop?'是':'否'}</Description> 
<Description term="借的书">{memberCustomer.borrowBook?'是':'否'}</Description> 
<Description term="是超级贵宾">{memberCustomer.isSuperVIP?'是':'否'}</Description> 
<Description term="名称">{memberCustomer.name}</Description> 
<Description term="描述">{memberCustomer.description}</Description> 
<Description term="列出的价格">{memberCustomer.listPrice}</Description> 
<Description term="销售价格">{memberCustomer.salePrice}</Description> 
<Description term="服务期间名称">{memberCustomer.servicePeriodName}</Description> 
<Description term="服务时间天">{memberCustomer.servicePeriodDays}</Description> 
<Description term="开始日期Datetime">{ moment(memberCustomer.startDateDatetime).format('YYYY-MM-DD')}</Description> 
<Description term="过期日期Datetime">{ moment(memberCustomer.expiredDateDatetime).format('YYYY-MM-DD')}</Description> 
	
        
      </DescriptionList>
	)

}


class MemberCustomerDashboard extends Component {


  componentDidMount() {
  /*
    // const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props;
    // const { getFieldDecorator, setFieldsValue } = this.props.form;
    const { dispatch, location, memberCustomer } = this.props;
    
    if(!memberCustomer){
    	return;
    }
    const {displayName} = memberCustomer;
    if(!displayName){
    	return;
    }
	const link = location.pathname;
	
    dispatch({ type: 'breadcrumb/gotoLink', payload: { displayName, link }})
  	*/
  }
  

  render() {
    // eslint-disable-next-line max-len
    const { id,displayName,  } = this.props.memberCustomer
    const cardsData = {cardsName:"会员的客户",cardsFor: "memberCustomer",cardsSource: this.props.memberCustomer,
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
  memberCustomer: state._memberCustomer,
}))(MemberCustomerDashboard)

