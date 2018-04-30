

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
import styles from './VehicleInfo.dashboard.less'
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
const summaryOf = (vehicleInfo) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{vehicleInfo.id}</Description> 
<Description term="车牌号码">{vehicleInfo.licensePlateNumber}</Description> 
<Description term="车辆类型">{vehicleInfo.vehicleType}</Description> 
<Description term="使用性质">{vehicleInfo.useCharacter}</Description> 
<Description term="核准座位数">{vehicleInfo.seatsQuantity}</Description> 
<Description term="注册日期">{ moment(vehicleInfo.registrationDate).format('YYYY-MM-DD')}</Description> 
<Description term="检测有效期">{ moment(vehicleInfo.inspectionValidationDate).format('YYYY-MM-DD')}</Description> 
<Description term="保险有效期">{ moment(vehicleInfo.insuranceValidationDate).format('YYYY-MM-DD')}</Description> 
<Description term="发动机号">{vehicleInfo.engineNumber}</Description> 
<Description term="车架号">{vehicleInfo.vehicleIdentificationNumber}</Description> 
<Description term="发证日期">{ moment(vehicleInfo.vehiclePermitIssueDate).format('YYYY-MM-DD')}</Description> 
<Description term="所有人">{vehicleInfo.vehiclePermitHolderName}</Description> 
<Description term="行驶证图1"><ImagePreview imageTitle="行驶证图1" imageLocation={vehicleInfo.vehiclePermitImage1}/></Description> 
<Description term="行驶证图2"><ImagePreview imageTitle="行驶证图2" imageLocation={vehicleInfo.vehiclePermitImage2}/></Description> 
<Description term="行驶证图3"><ImagePreview imageTitle="行驶证图3" imageLocation={vehicleInfo.vehiclePermitImage3}/></Description> 
<Description term="行驶证图4"><ImagePreview imageTitle="行驶证图4" imageLocation={vehicleInfo.vehiclePermitImage4}/></Description> 
<Description term="行驶证图5"><ImagePreview imageTitle="行驶证图5" imageLocation={vehicleInfo.vehiclePermitImage5}/></Description> 
<Description term="最后更新时间">{ moment(vehicleInfo.lastUpdateTime).format('YYYY-MM-DD')}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  vehicleInfo: state._vehicleInfo,
}))
export default class VehicleInfoDashboard extends Component {


  componentDidMount() {
  /*
    // const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props;
    // const { getFieldDecorator, setFieldsValue } = this.props.form;
    const { dispatch, location, vehicleInfo } = this.props;
    
    if(!vehicleInfo){
    	return;
    }
    const {displayName} = vehicleInfo;
    if(!displayName){
    	return;
    }
	const link = location.pathname;
	
    dispatch({ type: 'breadcrumb/gotoLink', payload: { displayName, link }})
  	*/
  }
  

  render() {
    // eslint-disable-next-line max-len
    const { id,displayName,  } = this.props.vehicleInfo
    const cardsData = {cardsName:"车辆信息",cardsFor: "vehicleInfo",cardsSource: this.props.vehicleInfo,
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



