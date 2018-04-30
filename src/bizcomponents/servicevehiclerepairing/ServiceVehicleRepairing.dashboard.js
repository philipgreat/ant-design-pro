

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
import styles from './ServiceVehicleRepairing.dashboard.less'
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
const summaryOf = (serviceVehicleRepairing) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{serviceVehicleRepairing.id}</Description> 
<Description term="服务状态">{serviceVehicleRepairing.serviceStatus}</Description> 
<Description term="服务概述">{serviceVehicleRepairing.serviceSummary}</Description> 
<Description term="开始时间">{ moment(serviceVehicleRepairing.startTime).format('YYYY-MM-DD')}</Description> 
<Description term="经度">{serviceVehicleRepairing.longitude}</Description> 
<Description term="纬度">{serviceVehicleRepairing.latitude}</Description> 
<Description term="最后更新时间">{ moment(serviceVehicleRepairing.lastUpdateTime).format('YYYY-MM-DD')}</Description> 
<Description term="年检报告1"><ImagePreview imageTitle="年检报告1" imageLocation={serviceVehicleRepairing.inspectionReportImage1}/></Description> 
<Description term="年检报告2"><ImagePreview imageTitle="年检报告2" imageLocation={serviceVehicleRepairing.inspectionReportImage2}/></Description> 
<Description term="年检报告3"><ImagePreview imageTitle="年检报告3" imageLocation={serviceVehicleRepairing.inspectionReportImage3}/></Description> 
<Description term="年检报告4"><ImagePreview imageTitle="年检报告4" imageLocation={serviceVehicleRepairing.inspectionReportImage4}/></Description> 
<Description term="年检报告5"><ImagePreview imageTitle="年检报告5" imageLocation={serviceVehicleRepairing.inspectionReportImage5}/></Description> 
<Description term="车辆维修报价单1"><ImagePreview imageTitle="车辆维修报价单1" imageLocation={serviceVehicleRepairing.repairingQuotationImage1}/></Description> 
<Description term="车辆维修报价单2"><ImagePreview imageTitle="车辆维修报价单2" imageLocation={serviceVehicleRepairing.repairingQuotationImage2}/></Description> 
<Description term="车辆维修报价单3"><ImagePreview imageTitle="车辆维修报价单3" imageLocation={serviceVehicleRepairing.repairingQuotationImage3}/></Description> 
<Description term="车辆维修报价单4"><ImagePreview imageTitle="车辆维修报价单4" imageLocation={serviceVehicleRepairing.repairingQuotationImage4}/></Description> 
<Description term="车辆维修报价单5"><ImagePreview imageTitle="车辆维修报价单5" imageLocation={serviceVehicleRepairing.repairingQuotationImage5}/></Description> 
<Description term="车辆维修报价总金额">{serviceVehicleRepairing.repairingQuotationTotalAmount}</Description> 
<Description term="车辆维修部分图片1"><ImagePreview imageTitle="车辆维修部分图片1" imageLocation={serviceVehicleRepairing.repairingPartImg1}/></Description> 
<Description term="车辆维修部分图片2"><ImagePreview imageTitle="车辆维修部分图片2" imageLocation={serviceVehicleRepairing.repairingPartImg2}/></Description> 
<Description term="车辆维修部分图片3"><ImagePreview imageTitle="车辆维修部分图片3" imageLocation={serviceVehicleRepairing.repairingPartImg3}/></Description> 
<Description term="车辆维修部分图片4"><ImagePreview imageTitle="车辆维修部分图片4" imageLocation={serviceVehicleRepairing.repairingPartImg4}/></Description> 
<Description term="车辆维修部分图片5"><ImagePreview imageTitle="车辆维修部分图片5" imageLocation={serviceVehicleRepairing.repairingPartImg5}/></Description> 
<Description term="车辆维修备注">{serviceVehicleRepairing.repairingPartListComment}</Description> 
<Description term="维修完成日期时间">{ moment(serviceVehicleRepairing.repairingFinishedDatetime).format('YYYY-MM-DD')}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  serviceVehicleRepairing: state._serviceVehicleRepairing,
}))
export default class ServiceVehicleRepairingDashboard extends Component {


  componentDidMount() {
  /*
    // const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props;
    // const { getFieldDecorator, setFieldsValue } = this.props.form;
    const { dispatch, location, serviceVehicleRepairing } = this.props;
    
    if(!serviceVehicleRepairing){
    	return;
    }
    const {displayName} = serviceVehicleRepairing;
    if(!displayName){
    	return;
    }
	const link = location.pathname;
	
    dispatch({ type: 'breadcrumb/gotoLink', payload: { displayName, link }})
  	*/
  }
  

  render() {
    // eslint-disable-next-line max-len
    const { id,displayName, repairingAllowanceItemCount, vehicleRepairingPaymentCount } = this.props.serviceVehicleRepairing
    const cardsData = {cardsName:"维修服务",cardsFor: "serviceVehicleRepairing",cardsSource: this.props.serviceVehicleRepairing,
  		subItems: [
{name: 'repairingAllowanceItemList', displayName:'车辆维修补贴项',type:'repairingAllowanceItem',count:repairingAllowanceItemCount},
{name: 'vehicleRepairingPaymentList', displayName:'支付维修订单',type:'vehicleRepairingPayment',count:vehicleRepairingPaymentCount},
    
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



