

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
import styles from './Store.dashboard.less'
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


const imageListOf = (store) =>{

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

const settingListOf = (store) =>{

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

const largeTextOf = (store) =>{

	return null
	

}



const summaryOf = (store) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{store.id}</Description> 
<Description term="门店名字">{store.storeName}</Description> 
<Description term="地址">{store.address}</Description> 
<Description term="纬度">{store.latitude}</Description> 
<Description term="经度">{store.longitude}</Description> 
<Description term="开放时间">{store.openningHours}</Description> 
	
        
      </DescriptionList>
	)

}


class StoreDashboard extends Component {


  componentDidMount() {
  /*
    // const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props;
    // const { getFieldDecorator, setFieldsValue } = this.props.form;
    const { dispatch, location, store } = this.props;
    
    if(!store){
    	return;
    }
    const {displayName} = store;
    if(!displayName){
    	return;
    }
	const link = location.pathname;
	
    dispatch({ type: 'breadcrumb/gotoLink', payload: { displayName, link }})
  	*/
  }
  

  render() {
    // eslint-disable-next-line max-len
    const { id,displayName, gameCategoryCount, gameCount, gameSessionRecordCount, rearrangeSessionTicketRecordAsSourceStoreCount, rearrangeSessionTicketRecordAsTargetStoreCount, onlineOrderCount, onlineOrderRedeemHistoryCount, ticketPrintingCount, ticketPrintingHistoryCount, offlineStoreOrderCount, employeeCount, adCount, bannerCount, newsCount, campaignCount } = this.props.store
    const cardsData = {cardsName:"门店",cardsFor: "store",cardsSource: this.props.store,
  		subItems: [
{name: 'gameCategoryList', displayName:'游戏类别',type:'gameCategory',count:gameCategoryCount},
{name: 'gameList', displayName:'游戏',type:'game',count:gameCount},
{name: 'gameSessionRecordList', displayName:'游戏场次记录',type:'gameSessionRecord',count:gameSessionRecordCount},
{name: 'rearrangeSessionTicketRecordListAsSourceStore', displayName:'换场记录',type:'rearrangeSessionTicketRecord',count:rearrangeSessionTicketRecordAsSourceStoreCount},
{name: 'rearrangeSessionTicketRecordListAsTargetStore', displayName:'换场记录',type:'rearrangeSessionTicketRecord',count:rearrangeSessionTicketRecordAsTargetStoreCount},
{name: 'onlineOrderList', displayName:'线上订单号',type:'onlineOrder',count:onlineOrderCount},
{name: 'onlineOrderRedeemHistoryList', displayName:'线上订单兑换记录',type:'onlineOrderRedeemHistory',count:onlineOrderRedeemHistoryCount},
{name: 'ticketPrintingList', displayName:'门票打印记录',type:'ticketPrinting',count:ticketPrintingCount},
{name: 'ticketPrintingHistoryList', displayName:'门票打印记录',type:'ticketPrintingHistory',count:ticketPrintingHistoryCount},
{name: 'offlineStoreOrderList', displayName:'线下门店订单',type:'offlineStoreOrder',count:offlineStoreOrderCount},
{name: 'employeeList', displayName:'员工',type:'employee',count:employeeCount},
{name: 'adList', displayName:'广告',type:'ad',count:adCount},
{name: 'bannerList', displayName:'横幅',type:'banner',count:bannerCount},
{name: 'newsList', displayName:'新闻',type:'news',count:newsCount},
{name: 'campaignList', displayName:'运动',type:'campaign',count:campaignCount},
    
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
  store: state._store,
}))(StoreDashboard)

