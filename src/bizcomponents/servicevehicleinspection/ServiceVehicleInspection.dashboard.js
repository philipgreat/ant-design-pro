

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
import styles from './ServiceVehicleInspection.dashboard.less'
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
const summaryOf = (serviceVehicleInspection) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{serviceVehicleInspection.id}</Description> 
<Description term="服务状态">{serviceVehicleInspection.serviceStatus}</Description> 
<Description term="服务概述">{serviceVehicleInspection.serviceSummary}</Description> 
<Description term="开始时间">{ moment(serviceVehicleInspection.startTime).format('YYYY-MM-DD')}</Description> 
<Description term="经度">{serviceVehicleInspection.longitude}</Description> 
<Description term="纬度">{serviceVehicleInspection.latitude}</Description> 
<Description term="最后更新时间">{ moment(serviceVehicleInspection.lastUpdateTime).format('YYYY-MM-DD')}</Description> 
<Description term="检测日期">{ moment(serviceVehicleInspection.inspectionDatetime).format('YYYY-MM-DD')}</Description> 
<Description term="年检报告1"><ImagePreview imageTitle="年检报告1" imageLocation={serviceVehicleInspection.inspectionReportImage1}/></Description> 
<Description term="年检报告2"><ImagePreview imageTitle="年检报告2" imageLocation={serviceVehicleInspection.inspectionReportImage2}/></Description> 
<Description term="年检报告3"><ImagePreview imageTitle="年检报告3" imageLocation={serviceVehicleInspection.inspectionReportImage3}/></Description> 
<Description term="年检报告4"><ImagePreview imageTitle="年检报告4" imageLocation={serviceVehicleInspection.inspectionReportImage4}/></Description> 
<Description term="年检报告5"><ImagePreview imageTitle="年检报告5" imageLocation={serviceVehicleInspection.inspectionReportImage5}/></Description> 
<Description term="年检报告5"><ImagePreview imageTitle="年检报告5" imageLocation={serviceVehicleInspection.inspectionReportImage6}/></Description> 
<Description term="年检报告6"><ImagePreview imageTitle="年检报告6" imageLocation={serviceVehicleInspection.inspectionReportImage7}/></Description> 
<Description term="年检报告7"><ImagePreview imageTitle="年检报告7" imageLocation={serviceVehicleInspection.inspectionReportImage8}/></Description> 
<Description term="检测结果">{serviceVehicleInspection.inspectionResult}</Description> 
<Description term="是否要修理">{serviceVehicleInspection.inspectionNeedRepair}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  serviceVehicleInspection: state._serviceVehicleInspection,
}))
export default class ServiceVehicleInspectionDashboard extends Component {


  componentDidMount() {
  /*
    // const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props;
    // const { getFieldDecorator, setFieldsValue } = this.props.form;
    const { dispatch, location, serviceVehicleInspection } = this.props;
    
    if(!serviceVehicleInspection){
    	return;
    }
    const {displayName} = serviceVehicleInspection;
    if(!displayName){
    	return;
    }
	const link = location.pathname;
	
    dispatch({ type: 'breadcrumb/gotoLink', payload: { displayName, link }})
  	*/
  }
  

  render() {
    // eslint-disable-next-line max-len
    const { id,displayName, serviceVehicleRepairingCount } = this.props.serviceVehicleInspection
    const cardsData = {cardsName:"车辆上线检测",cardsFor: "serviceVehicleInspection",cardsSource: this.props.serviceVehicleInspection,
  		subItems: [
{name: 'serviceVehicleRepairingList', displayName:'维修服务',type:'serviceVehicleRepairing',count:serviceVehicleRepairingCount},
    
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



