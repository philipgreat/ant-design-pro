

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
import styles from './OrderDiscountCoupon.dashboard.less'
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
const summaryOf = (orderDiscountCoupon) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{orderDiscountCoupon.id}</Description> 
<Description term="优惠券名称">{orderDiscountCoupon.couponTitle}</Description> 
<Description term="优惠金额">{orderDiscountCoupon.discountAmount}</Description> 
<Description term="结束日期">{ moment(orderDiscountCoupon.endDate).format('YYYY-MM-DD')}</Description> 
<Description term="最后更新时间">{ moment(orderDiscountCoupon.lastUpdateTime).format('YYYY-MM-DD')}</Description> 
<Description term="优惠券状态">{orderDiscountCoupon.couponStatus}</Description> 
<Description term="优惠券分享随机码">{orderDiscountCoupon.shareCode}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  orderDiscountCoupon: state._orderDiscountCoupon,
}))
export default class OrderDiscountCouponDashboard extends Component {


  componentDidMount() {
  /*
    // const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props;
    // const { getFieldDecorator, setFieldsValue } = this.props.form;
    const { dispatch, location, orderDiscountCoupon } = this.props;
    
    if(!orderDiscountCoupon){
    	return;
    }
    const {displayName} = orderDiscountCoupon;
    if(!displayName){
    	return;
    }
	const link = location.pathname;
	
    dispatch({ type: 'breadcrumb/gotoLink', payload: { displayName, link }})
  	*/
  }
  

  render() {
    // eslint-disable-next-line max-len
    const { id,displayName,  } = this.props.orderDiscountCoupon
    const cardsData = {cardsName:"优惠券",cardsFor: "orderDiscountCoupon",cardsSource: this.props.orderDiscountCoupon,
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



