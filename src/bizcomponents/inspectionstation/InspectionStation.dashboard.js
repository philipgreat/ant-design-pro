

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
import styles from './InspectionStation.dashboard.less'
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
const summaryOf = (inspectionStation) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{inspectionStation.id}</Description> 
<Description term="名称">{inspectionStation.name}</Description> 
<Description term="服务状态">{inspectionStation.operatingStatus}</Description> 
<Description term="所在地址">{inspectionStation.addressDetail}</Description> 
<Description term="经度">{inspectionStation.longitude}</Description> 
<Description term="纬度">{inspectionStation.latitude}</Description> 
<Description term="联系人姓名">{inspectionStation.contactName}</Description> 
<Description term="联系人手机">{inspectionStation.contactMobile}</Description> 
<Description term="计量资格认证"><ImagePreview imageTitle="计量资格认证" imageLocation={inspectionStation.metrologyAccreditationImage}/></Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  inspectionStation: state._inspectionStation,
}))
export default class InspectionStationDashboard extends Component {


  componentDidMount() {
  /*
    // const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props;
    // const { getFieldDecorator, setFieldsValue } = this.props.form;
    const { dispatch, location, inspectionStation } = this.props;
    
    if(!inspectionStation){
    	return;
    }
    const {displayName} = inspectionStation;
    if(!displayName){
    	return;
    }
	const link = location.pathname;
	
    dispatch({ type: 'breadcrumb/gotoLink', payload: { displayName, link }})
  	*/
  }
  

  render() {
    // eslint-disable-next-line max-len
    const { id,displayName, vehicleServiceCompanyEmployeeCount, serviceVehicleInspectionCount, serviceFileInspectionCount, inspectionStationAccountCount } = this.props.inspectionStation
    const cardsData = {cardsName:"检测站",cardsFor: "inspectionStation",cardsSource: this.props.inspectionStation,
  		subItems: [
{name: 'vehicleServiceCompanyEmployeeList', displayName:'商户员工',type:'vehicleServiceCompanyEmployee',count:vehicleServiceCompanyEmployeeCount},
{name: 'serviceVehicleInspectionList', displayName:'车辆上线检测',type:'serviceVehicleInspection',count:serviceVehicleInspectionCount},
{name: 'serviceFileInspectionList', displayName:'6年免检服务',type:'serviceFileInspection',count:serviceFileInspectionCount},
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



