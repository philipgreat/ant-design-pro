

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
import styles from './InspectionStationAccount.dashboard.less'
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
const summaryOf = (inspectionStationAccount) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{inspectionStationAccount.id}</Description> 
<Description term="服务单号">{inspectionStationAccount.serviceOrderNumber}</Description> 
<Description term="年检类型">{inspectionStationAccount.inspectionType}</Description> 
<Description term="车辆信息">{inspectionStationAccount.inspectionVehicleInfo}</Description> 
<Description term="检测结果">{inspectionStationAccount.inspectionFinalResult}</Description> 
<Description term="检测日期">{ moment(inspectionStationAccount.inspectionDatetime).format('YYYY-MM-DD')}</Description> 
<Description term="检测站">{inspectionStationAccount.inspectionStationName}</Description> 
<Description term="年检订单ID">{inspectionStationAccount.mainOrderNumber}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  inspectionStationAccount: state._inspectionStationAccount,
}))
export default class InspectionStationAccountDashboard extends Component {


  componentDidMount() {
  /*
    // const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props;
    // const { getFieldDecorator, setFieldsValue } = this.props.form;
    const { dispatch, location, inspectionStationAccount } = this.props;
    
    if(!inspectionStationAccount){
    	return;
    }
    const {displayName} = inspectionStationAccount;
    if(!displayName){
    	return;
    }
	const link = location.pathname;
	
    dispatch({ type: 'breadcrumb/gotoLink', payload: { displayName, link }})
  	*/
  }
  

  render() {
    // eslint-disable-next-line max-len
    const { id,displayName,  } = this.props.inspectionStationAccount
    const cardsData = {cardsName:"检测站对账单",cardsFor: "inspectionStationAccount",cardsSource: this.props.inspectionStationAccount,
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



