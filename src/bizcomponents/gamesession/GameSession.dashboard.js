

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
import styles from './GameSession.dashboard.less'
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


const imageListOf = (gameSession) =>{

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

const settingListOf = (gameSession) =>{

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

const largeTextOf = (gameSession) =>{

	return null
	

}



const summaryOf = (gameSession) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{gameSession.id}</Description> 
<Description term="名称">{gameSession.name}</Description> 
<Description term="开始时间">{ moment(gameSession.startTime).format('YYYY-MM-DD')}</Description> 
<Description term="结束时间">{ moment(gameSession.endTime).format('YYYY-MM-DD')}</Description> 
<Description term="场次开始后可售票时长">{gameSession.sessionReservation}</Description> 
<Description term="余票">{gameSession.inventory}</Description> 
	
        
      </DescriptionList>
	)

}


class GameSessionDashboard extends Component {


  componentDidMount() {
  /*
    // const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props;
    // const { getFieldDecorator, setFieldsValue } = this.props.form;
    const { dispatch, location, gameSession } = this.props;
    
    if(!gameSession){
    	return;
    }
    const {displayName} = gameSession;
    if(!displayName){
    	return;
    }
	const link = location.pathname;
	
    dispatch({ type: 'breadcrumb/gotoLink', payload: { displayName, link }})
  	*/
  }
  

  render() {
    // eslint-disable-next-line max-len
    const { id,displayName, gameSessionRecordCount, gamePlayerRecordCount, rearrangeSessionTicketRecordAsSourceGameSessionCount, rearrangeSessionTicketRecordAsTargetGameSessionCount, gameTokenCount, gameTicketCount, onlineOrderCount, ticketPrintingHistoryCount, offlineStoreOrderCount } = this.props.gameSession
    const cardsData = {cardsName:"游戏场次",cardsFor: "gameSession",cardsSource: this.props.gameSession,
  		subItems: [
{name: 'gameSessionRecordList', displayName:'游戏场次记录',type:'gameSessionRecord',count:gameSessionRecordCount},
{name: 'gamePlayerRecordList', displayName:'游戏玩家记录',type:'gamePlayerRecord',count:gamePlayerRecordCount},
{name: 'rearrangeSessionTicketRecordListAsSourceGameSession', displayName:'换场记录',type:'rearrangeSessionTicketRecord',count:rearrangeSessionTicketRecordAsSourceGameSessionCount},
{name: 'rearrangeSessionTicketRecordListAsTargetGameSession', displayName:'换场记录',type:'rearrangeSessionTicketRecord',count:rearrangeSessionTicketRecordAsTargetGameSessionCount},
{name: 'gameTokenList', displayName:'游戏Token',type:'gameToken',count:gameTokenCount},
{name: 'gameTicketList', displayName:'游戏门票',type:'gameTicket',count:gameTicketCount},
{name: 'onlineOrderList', displayName:'线上订单号',type:'onlineOrder',count:onlineOrderCount},
{name: 'ticketPrintingHistoryList', displayName:'门票打印记录',type:'ticketPrintingHistory',count:ticketPrintingHistoryCount},
{name: 'offlineStoreOrderList', displayName:'线下门店订单',type:'offlineStoreOrder',count:offlineStoreOrderCount},
    
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
  gameSession: state._gameSession,
}))(GameSessionDashboard)

