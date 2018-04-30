

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
import styles from './ServiceInsuranceForInspection.dashboard.less'
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
const summaryOf = (serviceInsuranceForInspection) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{serviceInsuranceForInspection.id}</Description> 
<Description term="服务状态">{serviceInsuranceForInspection.serviceStatus}</Description> 
<Description term="服务概述">{serviceInsuranceForInspection.serviceSummary}</Description> 
<Description term="服务的评论">{serviceInsuranceForInspection.serviceComments}</Description> 
<Description term="开始时间">{ moment(serviceInsuranceForInspection.startTime).format('YYYY-MM-DD')}</Description> 
<Description term="最后更新时间">{ moment(serviceInsuranceForInspection.lastUpdateTime).format('YYYY-MM-DD')}</Description> 
<Description term="保险名称">{serviceInsuranceForInspection.insuranceName}</Description> 
<Description term="承保方">{serviceInsuranceForInspection.insuranceVendor}</Description> 
<Description term="保费">{serviceInsuranceForInspection.insurancePrice}</Description> 
<Description term="摘要">{serviceInsuranceForInspection.summary}</Description> 
<Description term="保单号码">{serviceInsuranceForInspection.insuranceNumber}</Description> 
<Description term="保单凭证1"><ImagePreview imageTitle="保单凭证1" imageLocation={serviceInsuranceForInspection.insuranceImage1}/></Description> 
<Description term="保单凭证2"><ImagePreview imageTitle="保单凭证2" imageLocation={serviceInsuranceForInspection.insuranceImage2}/></Description> 
<Description term="保单凭证3"><ImagePreview imageTitle="保单凭证3" imageLocation={serviceInsuranceForInspection.insuranceImage3}/></Description> 
<Description term="保单凭证4"><ImagePreview imageTitle="保单凭证4" imageLocation={serviceInsuranceForInspection.insuranceImage4}/></Description> 
<Description term="保单凭证5"><ImagePreview imageTitle="保单凭证5" imageLocation={serviceInsuranceForInspection.insuranceImage5}/></Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  serviceInsuranceForInspection: state._serviceInsuranceForInspection,
}))
export default class ServiceInsuranceForInspectionDashboard extends Component {


  componentDidMount() {
  /*
    // const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props;
    // const { getFieldDecorator, setFieldsValue } = this.props.form;
    const { dispatch, location, serviceInsuranceForInspection } = this.props;
    
    if(!serviceInsuranceForInspection){
    	return;
    }
    const {displayName} = serviceInsuranceForInspection;
    if(!displayName){
    	return;
    }
	const link = location.pathname;
	
    dispatch({ type: 'breadcrumb/gotoLink', payload: { displayName, link }})
  	*/
  }
  

  render() {
    // eslint-disable-next-line max-len
    const { id,displayName,  } = this.props.serviceInsuranceForInspection
    const cardsData = {cardsName:"保险服务",cardsFor: "serviceInsuranceForInspection",cardsSource: this.props.serviceInsuranceForInspection,
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



