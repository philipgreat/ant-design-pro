

import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome';
import { connect } from 'dva'
import moment from 'moment'
import BooleanOption from 'components/BooleanOption';
import { Row, Col, Icon, Card, Tabs, Table, Radio, DatePicker, Tooltip, Menu, Dropdown,Badge } from 'antd'
import { Link, Route, Redirect, Switch } from 'dva/router'
import numeral from 'numeral'
import {
  ChartCard, yuan, MiniArea, MiniBar, MiniProgress, Field, Bar, Pie, TimelineChart,
} from '../../components/Charts'
import Trend from '../../components/Trend'
import NumberInfo from '../../components/NumberInfo'
import { getTimeDistance } from '../../utils/utils'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import styles from './PatientInfo.dashboard.less'
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


const imageListOf = (patientInfo) =>{

	     return null
	

}

const settingListOf = (patientInfo) =>{

	    return null
	
	//(patientInfo)


}

const largeTextOf = (patientInfo) =>{

	return null
	

}



const summaryOf = (patientInfo) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{patientInfo.id}</Description> 
<Description term="名称">{patientInfo.name}</Description> 
<Description term="昵称">{patientInfo.nickName}</Description> 
<Description term="性别">{patientInfo.gender}</Description> 
<Description term="生日">{ moment(patientInfo.birthday).format('YYYY-MM-DD')}</Description> 
<Description term="佩戴设备类型">{patientInfo.wearDeviceType}</Description> 
<Description term="磨损的开始时间">{ moment(patientInfo.wearStartTime).format('YYYY-MM-DD')}</Description> 
<Description term="康复计划">{patientInfo.recoverPlan}</Description> 
	
        
      </DescriptionList>
	)

}


class PatientInfoDashboard extends Component {


  componentDidMount() {
  /*
    // const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props;
    // const { getFieldDecorator, setFieldsValue } = this.props.form;
    const { dispatch, location, patientInfo } = this.props;
    
    if(!patientInfo){
    	return;
    }
    const {displayName} = patientInfo;
    if(!displayName){
    	return;
    }
	const link = location.pathname;
	
    dispatch({ type: 'breadcrumb/gotoLink', payload: { displayName, link }})
  	*/
  }
  

  render() {
    // eslint-disable-next-line max-len
    const { id,displayName,  } = this.props.patientInfo
    const cardsData = {cardsName:"病人信息",cardsFor: "patientInfo",cardsSource: this.props.patientInfo,
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
        {imageListOf(cardsData.cardsSource)}
        {settingListOf(cardsData.cardsSource)}
          <Row gutter={24}>

           {cardsData.subItems.map((item)=>(<Col {...topColResponsiveProps} key={item.name}>   
           <Badge count={item.count} style={{ backgroundColor: '#52c41a' }} overflowCount={9999999999}>        
            <Card title={`${item.displayName}(${numeral(item.count).format('0,0')})`}  style={{ width: 180 }}>             
              <p><Link to={`/${cardsData.cardsFor}/${id}/list/${item.name}/${item.displayName}列表`}><FontAwesome name="gear"  />&nbsp;管理</Link></p>
              <p><Link to={`/${cardsData.cardsFor}/${id}/list/${item.type}CreateForm`}><FontAwesome name="plus"  />&nbsp;新增</Link></p>              
          </Card> </Badge>
            </Col>))}

          </Row>
          
          {largeTextOf(cardsData.cardsSource)}
          
        </div>
      </PageHeaderLayout>
    )
  }
}

export default connect(state => ({
  patientInfo: state._patientInfo,
}))(PatientInfoDashboard)

