

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
import styles from './VehicleInspectionOrderPayment.dashboard.less'
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
const summaryOf = (vehicleInspectionOrderPayment) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{vehicleInspectionOrderPayment.id}</Description> 
<Description term="支付方式">{vehicleInspectionOrderPayment.paymentMethod}</Description> 
<Description term="订单合计">{vehicleInspectionOrderPayment.originalAmount}</Description> 
<Description term="应付金额">{vehicleInspectionOrderPayment.actualAmount}</Description> 
<Description term="状态">{vehicleInspectionOrderPayment.status}</Description> 
<Description term="微信订单ID">{vehicleInspectionOrderPayment.wechatOrderId}</Description> 
<Description term="微信预付订单ID">{vehicleInspectionOrderPayment.wechatPrepayId}</Description> 
<Description term="创建时间">{ moment(vehicleInspectionOrderPayment.createTime).format('YYYY-MM-DD')}</Description> 
<Description term="最后更新时间">{ moment(vehicleInspectionOrderPayment.lastUpdateTime).format('YYYY-MM-DD')}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  vehicleInspectionOrderPayment: state._vehicleInspectionOrderPayment,
}))
export default class VehicleInspectionOrderPaymentDashboard extends Component {


  componentDidMount() {
  /*
    // const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props;
    // const { getFieldDecorator, setFieldsValue } = this.props.form;
    const { dispatch, location, vehicleInspectionOrderPayment } = this.props;
    
    if(!vehicleInspectionOrderPayment){
    	return;
    }
    const {displayName} = vehicleInspectionOrderPayment;
    if(!displayName){
    	return;
    }
	const link = location.pathname;
	
    dispatch({ type: 'breadcrumb/gotoLink', payload: { displayName, link }})
  	*/
  }
  

  render() {
    // eslint-disable-next-line max-len
    const { id,displayName,  } = this.props.vehicleInspectionOrderPayment
    const cardsData = {cardsName:"年检订单支付",cardsFor: "vehicleInspectionOrderPayment",cardsSource: this.props.vehicleInspectionOrderPayment,
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



