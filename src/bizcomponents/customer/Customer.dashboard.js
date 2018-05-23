

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
import styles from './Customer.dashboard.less'
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


const imageListOf = (customer) =>{

  const imageList = [
	   {"title":'头像',"imageLocation":customer.logoImage},
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

const settingListOf = (customer) =>{

	const optionList = [ 
	]
	
  if(optionList.length===0){
    return null
  }
  return(<Card title='状态集合' className={styles.card}>
  	
  	{
  	   optionList.map((item)=><BooleanOption title={item.title} type={item.value?"success":"error"} />)
  	}


</Card> )
	


}

const largeTextOf = (customer) =>{

	return(<div> 
   <Card title={`头像`} ><pre>{customer.logoImage}</pre></Card>
</div>)

	

}



const summaryOf = (customer) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{customer.id}</Description> 
<Description term="客户昵称">{customer.nickName}</Description> 
<Description term="微信ID">{customer.weixinOpenid}</Description> 
<Description term="微信APP">{customer.weixinAppid}</Description> 
<Description term="经度">{customer.longitude}</Description> 
	
        
      </DescriptionList>
	)

}


class CustomerDashboard extends Component {


  componentDidMount() {
  /*
    // const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props;
    // const { getFieldDecorator, setFieldsValue } = this.props.form;
    const { dispatch, location, customer } = this.props;
    
    if(!customer){
    	return;
    }
    const {displayName} = customer;
    if(!displayName){
    	return;
    }
	const link = location.pathname;
	
    dispatch({ type: 'breadcrumb/gotoLink', payload: { displayName, link }})
  	*/
  }
  

  render() {
    // eslint-disable-next-line max-len
    const { id,displayName, companyQrcodePromotionRecordCount, vehicleInfoCount, vehicleInspectionOrderCount, orderDiscountCouponCount, vehicleInspectionOrderCouponCount } = this.props.customer
    const cardsData = {cardsName:"客户",cardsFor: "customer",cardsSource: this.props.customer,
  		subItems: [
{name: 'companyQrcodePromotionRecordList', displayName:'公司二维码推广记录',type:'companyQrcodePromotionRecord',count:companyQrcodePromotionRecordCount},
{name: 'vehicleInfoList', displayName:'车辆信息',type:'vehicleInfo',count:vehicleInfoCount},
{name: 'vehicleInspectionOrderList', displayName:'年检订单',type:'vehicleInspectionOrder',count:vehicleInspectionOrderCount},
{name: 'orderDiscountCouponList', displayName:'优惠券',type:'orderDiscountCoupon',count:orderDiscountCouponCount},
{name: 'vehicleInspectionOrderCouponList', displayName:'优惠券使用记录',type:'vehicleInspectionOrderCoupon',count:vehicleInspectionOrderCouponCount},
    
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
  customer: state._customer,
}))(CustomerDashboard)

