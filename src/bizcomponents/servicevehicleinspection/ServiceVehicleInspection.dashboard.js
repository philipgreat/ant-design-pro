

import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome';
import { connect } from 'dva'
import moment from 'moment'
import BooleanOption from 'components/BooleanOption';
import { Row, Col, Icon, Card, Tabs, Table, Radio, DatePicker, Tooltip, Menu, Dropdown,Badge, Switch  } from 'antd'
import { Link, Route, Redirect} from 'dva/router'
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


const imageListOf = (serviceVehicleInspection) =>{

  const imageList = [
	   {"title":'年检报告1',"imageLocation":serviceVehicleInspection.inspectionReportImage1},
  {"title":'年检报告2',"imageLocation":serviceVehicleInspection.inspectionReportImage2},
  {"title":'年检报告3',"imageLocation":serviceVehicleInspection.inspectionReportImage3},
  {"title":'年检报告4',"imageLocation":serviceVehicleInspection.inspectionReportImage4},
  {"title":'年检报告5',"imageLocation":serviceVehicleInspection.inspectionReportImage5},
  {"title":'年检报告5',"imageLocation":serviceVehicleInspection.inspectionReportImage6},
  {"title":'年检报告6',"imageLocation":serviceVehicleInspection.inspectionReportImage7},
  {"title":'年检报告7',"imageLocation":serviceVehicleInspection.inspectionReportImage8},
]
  const filteredList = imageList.filter((item)=>item.imageLocation!=null)
  if(filteredList.length===0){
    return null
  }

  return(<Card title='图片列表' className={styles.card}><Row type="flex" justify="start" align="bottom">
  {
      filteredList.map((item)=>(<Col span={4}><ImagePreview imageTitle ={item.title} showTitleUnderImage={true} imageLocation={item.imageLocation} >{item.title}</ImagePreview></Col>))
  }</Row></Card> )

}

const settingListOf = (serviceVehicleInspection) =>{

	const optionList = [ 
	]
	
  if(optionList.length===0){
    return null
  }
  return(<Card title='状态集合' className={styles.card}>
  	
  	{
  	  optionList.map((item)=><Col span={6} style={{"height":"60px"}}>
       <Switch title={item.title} checked={item.value} type={item.value?"success":"error"} checkedChildren="是" unCheckedChildren="否" />
       <span style={{"margin":"10px"}}>{item.title}</span>
       </Col>)
  	}


</Card> )
	


}

const largeTextOf = (serviceVehicleInspection) =>{

	return null
	

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
<Description term="检测日期">{ moment(serviceVehicleInspection.inspectionDatetime).format('YYYY-MM-DD')}</Description> 
<Description term="检测结果">{serviceVehicleInspection.inspectionResult}</Description> 
	
        
      </DescriptionList>
	)

}


class ServiceVehicleInspectionDashboard extends Component {


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
        {settingListOf(cardsData.cardsSource)}
        {imageListOf(cardsData.cardsSource)}
        
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
  serviceVehicleInspection: state._serviceVehicleInspection,
}))(ServiceVehicleInspectionDashboard)

