

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
import styles from './AvailableInsurance.dashboard.less'
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
const summaryOf = (availableInsurance) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{availableInsurance.id}</Description> 
<Description term="保险名称">{availableInsurance.insuranceName}</Description> 
<Description term="承保方">{availableInsurance.insuranceVendor}</Description> 
<Description term="保费">{availableInsurance.insurancePrice}</Description> 
<Description term="摘要">{availableInsurance.summary}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  availableInsurance: state._availableInsurance,
}))
export default class AvailableInsuranceDashboard extends Component {


  componentDidMount() {
  /*
    // const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props;
    // const { getFieldDecorator, setFieldsValue } = this.props.form;
    const { dispatch, location, availableInsurance } = this.props;
    
    if(!availableInsurance){
    	return;
    }
    const {displayName} = availableInsurance;
    if(!displayName){
    	return;
    }
	const link = location.pathname;
	
    dispatch({ type: 'breadcrumb/gotoLink', payload: { displayName, link }})
  	*/
  }
  

  render() {
    // eslint-disable-next-line max-len
    const { id,displayName, vehicleInspectionInsuranceOrderCount, serviceInsuranceForInspectionCount } = this.props.availableInsurance
    const cardsData = {cardsName:"车辆代办保险",cardsFor: "availableInsurance",cardsSource: this.props.availableInsurance,
  		subItems: [
{name: 'vehicleInspectionInsuranceOrderList', displayName:'车辆上线检测保险订单',type:'vehicleInspectionInsuranceOrder',count:vehicleInspectionInsuranceOrderCount},
{name: 'serviceInsuranceForInspectionList', displayName:'保险服务',type:'serviceInsuranceForInspection',count:serviceInsuranceForInspectionCount},
    
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



