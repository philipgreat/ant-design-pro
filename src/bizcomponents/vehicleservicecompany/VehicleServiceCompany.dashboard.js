

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
import styles from './VehicleServiceCompany.dashboard.less'
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
const summaryOf = (vehicleServiceCompany) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{vehicleServiceCompany.id}</Description> 
<Description term="商户名称">{vehicleServiceCompany.companyName}</Description> 
<Description term="服务状态">{vehicleServiceCompany.operatingStatus}</Description> 
<Description term="所在地址">{vehicleServiceCompany.addressDetail}</Description> 
<Description term="是否提供门店收车(件)服务">{vehicleServiceCompany.availableStoreService?'是':'否'}</Description> 
<Description term="是否提供上门取车(件)服务">{vehicleServiceCompany.availableHomeService?'是':'否'}</Description> 
<Description term="营业时间">{vehicleServiceCompany.openingTime}</Description> 
<Description term="经度">{vehicleServiceCompany.longitude}</Description> 
<Description term="纬度">{vehicleServiceCompany.latitude}</Description> 
<Description term="可以免除代理费用">{vehicleServiceCompany.canExemptProxyFee?'是':'否'}</Description> 
<Description term="联系电话">{vehicleServiceCompany.contactPhone}</Description> 
<Description term="公司照片1"><ImagePreview imageTitle="公司照片1" imageLocation={vehicleServiceCompany.companyImage1}/></Description> 
<Description term="公司照片2"><ImagePreview imageTitle="公司照片2" imageLocation={vehicleServiceCompany.companyImage2}/></Description> 
<Description term="公司照片3"><ImagePreview imageTitle="公司照片3" imageLocation={vehicleServiceCompany.companyImage3}/></Description> 
<Description term="公司照片4"><ImagePreview imageTitle="公司照片4" imageLocation={vehicleServiceCompany.companyImage4}/></Description> 
<Description term="公司照片5"><ImagePreview imageTitle="公司照片5" imageLocation={vehicleServiceCompany.companyImage5}/></Description> 
<Description term="推广二维码"><ImagePreview imageTitle="推广二维码" imageLocation={vehicleServiceCompany.promoteQrcodeImage}/></Description> 
<Description term="订单默认联系人">{vehicleServiceCompany.orderContact}</Description> 
<Description term="订单默认联系人电话">{vehicleServiceCompany.orderContactPhone}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  vehicleServiceCompany: state._vehicleServiceCompany,
}))
export default class VehicleServiceCompanyDashboard extends Component {


  componentDidMount() {
  /*
    // const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props;
    // const { getFieldDecorator, setFieldsValue } = this.props.form;
    const { dispatch, location, vehicleServiceCompany } = this.props;
    
    if(!vehicleServiceCompany){
    	return;
    }
    const {displayName} = vehicleServiceCompany;
    if(!displayName){
    	return;
    }
	const link = location.pathname;
	
    dispatch({ type: 'breadcrumb/gotoLink', payload: { displayName, link }})
  	*/
  }
  

  render() {
    // eslint-disable-next-line max-len
    const { id,displayName, contractCount, serviceCompanyAuthenticationInfoCount, vehicleInspectionPlateNumberPatternCount, fileInspectionPlateNumberPatternCount, vehicleServiceCompanyBusinessScopeCount, companyQrcodePromotionRecordCount, vehicleServiceCompanyDispatcherCount, companyDiscountCount, vehicleServiceCompanyEmployeeCount, vehicleInspectionOrderCount, serviceVehicleMovementC2mCount, serviceVehicleMovementM2mCount, serviceVehicleMovementM2cCount, serviceFileMovementC2mCount, serviceFileMovementM2mCount, serviceFileMovementM2cCount, serviceInsuranceForInspectionCount, serviceVehicleInspectionCount, serviceFileInspectionCount, serviceVehicleRepairingCount, serviceCompanyAccountCount, repairingCompanyAccountCount, insuranceServiceAccountCount, inspectionStationAccountCount } = this.props.vehicleServiceCompany
    const cardsData = {cardsName:"商户",cardsFor: "vehicleServiceCompany",cardsSource: this.props.vehicleServiceCompany,
  		subItems: [
{name: 'contractList', displayName:'合同',type:'contract',count:contractCount},
{name: 'serviceCompanyAuthenticationInfoList', displayName:'商户认证信息',type:'serviceCompanyAuthenticationInfo',count:serviceCompanyAuthenticationInfoCount},
{name: 'vehicleInspectionPlateNumberPatternList', displayName:'上线检测支持的车牌号码类别',type:'vehicleInspectionPlateNumberPattern',count:vehicleInspectionPlateNumberPatternCount},
{name: 'fileInspectionPlateNumberPatternList', displayName:'6年免检检测支持的车牌号码类别',type:'fileInspectionPlateNumberPattern',count:fileInspectionPlateNumberPatternCount},
{name: 'vehicleServiceCompanyBusinessScopeList', displayName:'商户服务范围',type:'vehicleServiceCompanyBusinessScope',count:vehicleServiceCompanyBusinessScopeCount},
{name: 'companyQrcodePromotionRecordList', displayName:'公司二维码推广记录',type:'companyQrcodePromotionRecord',count:companyQrcodePromotionRecordCount},
{name: 'vehicleServiceCompanyDispatcherList', displayName:'商户派单',type:'vehicleServiceCompanyDispatcher',count:vehicleServiceCompanyDispatcherCount},
{name: 'companyDiscountList', displayName:'公司折扣',type:'companyDiscount',count:companyDiscountCount},
{name: 'vehicleServiceCompanyEmployeeList', displayName:'商户员工',type:'vehicleServiceCompanyEmployee',count:vehicleServiceCompanyEmployeeCount},
{name: 'vehicleInspectionOrderList', displayName:'年检订单',type:'vehicleInspectionOrder',count:vehicleInspectionOrderCount},
{name: 'serviceVehicleMovementC2mList', displayName:'收车服务',type:'serviceVehicleMovementC2m',count:serviceVehicleMovementC2mCount},
{name: 'serviceVehicleMovementM2mList', displayName:'移车服务',type:'serviceVehicleMovementM2m',count:serviceVehicleMovementM2mCount},
{name: 'serviceVehicleMovementM2cList', displayName:'还车服务',type:'serviceVehicleMovementM2c',count:serviceVehicleMovementM2cCount},
{name: 'serviceFileMovementC2mList', displayName:'收件服务',type:'serviceFileMovementC2m',count:serviceFileMovementC2mCount},
{name: 'serviceFileMovementM2mList', displayName:'移件服务',type:'serviceFileMovementM2m',count:serviceFileMovementM2mCount},
{name: 'serviceFileMovementM2cList', displayName:'还件服务',type:'serviceFileMovementM2c',count:serviceFileMovementM2cCount},
{name: 'serviceInsuranceForInspectionList', displayName:'保险服务',type:'serviceInsuranceForInspection',count:serviceInsuranceForInspectionCount},
{name: 'serviceVehicleInspectionList', displayName:'车辆上线检测',type:'serviceVehicleInspection',count:serviceVehicleInspectionCount},
{name: 'serviceFileInspectionList', displayName:'6年免检服务',type:'serviceFileInspection',count:serviceFileInspectionCount},
{name: 'serviceVehicleRepairingList', displayName:'维修服务',type:'serviceVehicleRepairing',count:serviceVehicleRepairingCount},
{name: 'serviceCompanyAccountList', displayName:'服务商户对账单',type:'serviceCompanyAccount',count:serviceCompanyAccountCount},
{name: 'repairingCompanyAccountList', displayName:'修理厂对账单',type:'repairingCompanyAccount',count:repairingCompanyAccountCount},
{name: 'insuranceServiceAccountList', displayName:'保险服务对账单',type:'insuranceServiceAccount',count:insuranceServiceAccountCount},
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



