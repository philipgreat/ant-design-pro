

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
import styles from './OnlineOrder.dashboard.less'
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


const imageListOf = (onlineOrder) =>{

  const imageList = [
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

const settingListOf = (onlineOrder) =>{

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

const largeTextOf = (onlineOrder) =>{

	return null
	

}



const summaryOf = (onlineOrder) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{onlineOrder.id}</Description> 
<Description term="游戏名称">{onlineOrder.gameName}</Description> 
<Description term="游戏场次日期">{ moment(onlineOrder.gameSessionDatetime).format('YYYY-MM-DD')}</Description> 
<Description term="游戏场次名称">{onlineOrder.gameSessionName}</Description> 
<Description term="玩家数">{onlineOrder.playerCount}</Description> 
<Description term="应付金额">{onlineOrder.originalAmount}</Description> 
<Description term="应付金额">{onlineOrder.payableAmount}</Description> 
<Description term="兑换手机">{onlineOrder.redeemPhone}</Description> 
<Description term="兑换验证码">{onlineOrder.redeemCode}</Description> 
<Description term="订单状态">{onlineOrder.orderStatus}</Description> 
	
        
      </DescriptionList>
	)

}


class OnlineOrderDashboard extends Component {


  componentDidMount() {
  /*
    // const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props;
    // const { getFieldDecorator, setFieldsValue } = this.props.form;
    const { dispatch, location, onlineOrder } = this.props;
    
    if(!onlineOrder){
    	return;
    }
    const {displayName} = onlineOrder;
    if(!displayName){
    	return;
    }
	const link = location.pathname;
	
    dispatch({ type: 'breadcrumb/gotoLink', payload: { displayName, link }})
  	*/
  }
  

  render() {
    // eslint-disable-next-line max-len
    const { id,displayName, onlineOrderPaymentCount, onlineOrderRedeemHistoryCount, couponCount } = this.props.onlineOrder
    const cardsData = {cardsName:"线上订单号",cardsFor: "onlineOrder",cardsSource: this.props.onlineOrder,
  		subItems: [
{name: 'onlineOrderPaymentList', displayName:'线上订单支付',type:'onlineOrderPayment',count:onlineOrderPaymentCount},
{name: 'onlineOrderRedeemHistoryList', displayName:'线上订单兑换记录',type:'onlineOrderRedeemHistory',count:onlineOrderRedeemHistoryCount},
{name: 'couponList', displayName:'优惠券',type:'coupon',count:couponCount},
    
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
  onlineOrder: state._onlineOrder,
}))(OnlineOrderDashboard)

