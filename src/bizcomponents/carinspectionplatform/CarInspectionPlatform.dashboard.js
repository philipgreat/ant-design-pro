

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
import styles from './CarInspectionPlatform.dashboard.less'
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
const summaryOf = (carInspectionPlatform) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{carInspectionPlatform.id}</Description> 
<Description term="名称">{carInspectionPlatform.name}</Description> 
<Description term="描述">{carInspectionPlatform.description}</Description> 
<Description term="保险联系人姓名">{carInspectionPlatform.insuranceContactName}</Description> 
<Description term="保险联系人手机">{carInspectionPlatform.insuranceContactMobile}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  carInspectionPlatform: state._carInspectionPlatform,
}))
export default class CarInspectionPlatformDashboard extends Component {


  componentDidMount() {
  /*
    // const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props;
    // const { getFieldDecorator, setFieldsValue } = this.props.form;
    const { dispatch, location, carInspectionPlatform } = this.props;
    
    if(!carInspectionPlatform){
    	return;
    }
    const {displayName} = carInspectionPlatform;
    if(!displayName){
    	return;
    }
	const link = location.pathname;
	
    dispatch({ type: 'breadcrumb/gotoLink', payload: { displayName, link }})
  	*/
  }
  

  render() {
    // eslint-disable-next-line max-len
    const { id,displayName, provinceCount, availableProductCount, availableVehicleTypeCount, availableVehicleUseCharacterCount, contractCount, customerCount, vehicleServiceCompanyCount, vehicleInfoCount, vehicleInspectionOrderCount, availableReviewItemCount, availableRatingItemCount, preorderPromotionCount, orderDiscountCouponCount, accountCount } = this.props.carInspectionPlatform
    const cardsData = {cardsName:"驾乐乐车辆代审服务平台",cardsFor: "carInspectionPlatform",cardsSource: this.props.carInspectionPlatform,
  		subItems: [
{name: 'provinceList', displayName:'省',type:'province',count:provinceCount},
{name: 'availableProductList', displayName:'产品类型',type:'availableProduct',count:availableProductCount},
{name: 'availableVehicleTypeList', displayName:'车辆类型',type:'availableVehicleType',count:availableVehicleTypeCount},
{name: 'availableVehicleUseCharacterList', displayName:'车辆使用性质',type:'availableVehicleUseCharacter',count:availableVehicleUseCharacterCount},
{name: 'contractList', displayName:'合同',type:'contract',count:contractCount},
{name: 'customerList', displayName:'客户',type:'customer',count:customerCount},
{name: 'vehicleServiceCompanyList', displayName:'商户',type:'vehicleServiceCompany',count:vehicleServiceCompanyCount},
{name: 'vehicleInfoList', displayName:'车辆信息',type:'vehicleInfo',count:vehicleInfoCount},
{name: 'vehicleInspectionOrderList', displayName:'年检订单',type:'vehicleInspectionOrder',count:vehicleInspectionOrderCount},
{name: 'availableReviewItemList', displayName:'评论',type:'availableReviewItem',count:availableReviewItemCount},
{name: 'availableRatingItemList', displayName:'服务评分',type:'availableRatingItem',count:availableRatingItemCount},
{name: 'preorderPromotionList', displayName:'提前下单优惠',type:'preorderPromotion',count:preorderPromotionCount},
{name: 'orderDiscountCouponList', displayName:'优惠券',type:'orderDiscountCoupon',count:orderDiscountCouponCount},
{name: 'accountList', displayName:'对账单',type:'account',count:accountCount},
    
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



