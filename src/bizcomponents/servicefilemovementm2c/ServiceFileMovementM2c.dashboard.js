

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
import styles from './ServiceFileMovementM2c.dashboard.less'
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
const summaryOf = (serviceFileMovementM2c) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{serviceFileMovementM2c.id}</Description> 
<Description term="服务状态">{serviceFileMovementM2c.serviceStatus}</Description> 
<Description term="服务概述">{serviceFileMovementM2c.serviceSummary}</Description> 
<Description term="开始时间">{ moment(serviceFileMovementM2c.startTime).format('YYYY-MM-DD')}</Description> 
<Description term="经度">{serviceFileMovementM2c.longitude}</Description> 
<Description term="纬度">{serviceFileMovementM2c.latitude}</Description> 
<Description term="最后更新时间">{ moment(serviceFileMovementM2c.lastUpdateTime).format('YYYY-MM-DD')}</Description> 
<Description term="交接检查码">{serviceFileMovementM2c.transferVerifyCode}</Description> 
<Description term="服务类型">{serviceFileMovementM2c.movementPurpose}</Description> 
<Description term="联系人姓名">{serviceFileMovementM2c.contactName}</Description> 
<Description term="联系人手机">{serviceFileMovementM2c.contactMobileNumber}</Description> 
<Description term="通知日期时间">{ moment(serviceFileMovementM2c.notifyDatetime).format('YYYY-MM-DD')}</Description> 
<Description term="通知地址">{serviceFileMovementM2c.notifyAddress}</Description> 
<Description term="备注">{serviceFileMovementM2c.notifyComment}</Description> 
<Description term="交接检查结果">{serviceFileMovementM2c.handoverResult}</Description> 
<Description term="交接检查备注">{serviceFileMovementM2c.handoverResultComment}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  serviceFileMovementM2c: state._serviceFileMovementM2c,
}))
export default class ServiceFileMovementM2cDashboard extends Component {


  componentDidMount() {
  /*
    // const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props;
    // const { getFieldDecorator, setFieldsValue } = this.props.form;
    const { dispatch, location, serviceFileMovementM2c } = this.props;
    
    if(!serviceFileMovementM2c){
    	return;
    }
    const {displayName} = serviceFileMovementM2c;
    if(!displayName){
    	return;
    }
	const link = location.pathname;
	
    dispatch({ type: 'breadcrumb/gotoLink', payload: { displayName, link }})
  	*/
  }
  

  render() {
    // eslint-disable-next-line max-len
    const { id,displayName, handOverChecklistResultCount } = this.props.serviceFileMovementM2c
    const cardsData = {cardsName:"还件服务",cardsFor: "serviceFileMovementM2c",cardsSource: this.props.serviceFileMovementM2c,
  		subItems: [
{name: 'handOverChecklistResultList', displayName:'交接检查结果',type:'handOverChecklistResult',count:handOverChecklistResultCount},
    
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



