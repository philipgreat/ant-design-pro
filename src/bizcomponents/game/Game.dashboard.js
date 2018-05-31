

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
import styles from './Game.dashboard.less'
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


const imageListOf = (game) =>{

  const imageList = [
	   {"title":'游戏图标',"imageLocation":game.gameIcon},
  {"title":'背景图像',"imageLocation":game.backgroundImage},
  {"title":'封面图片',"imageLocation":game.coverImage},
  {"title":'游戏Image1',"imageLocation":game.gameImage1},
  {"title":'游戏Image2',"imageLocation":game.gameImage2},
  {"title":'游戏Image3',"imageLocation":game.gameImage3},
  {"title":'游戏Image4',"imageLocation":game.gameImage4},
  {"title":'游戏Image5',"imageLocation":game.gameImage5},
  {"title":'游戏Image6',"imageLocation":game.gameImage6},
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

const settingListOf = (game) =>{

	const optionList = [ 
	  {"title":'游戏状态',"value":game.gameStatus},
  {"title":'游戏场次',"value":game.sessionGame},
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

const largeTextOf = (game) =>{

	return(<div> 
   <Card title={`游戏详情`} ><pre>{game.longDescription}</pre></Card>
   <Card title={`游戏视频`} ><pre>{game.gameVideo}</pre></Card>
</div>)

	

}



const summaryOf = (game) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{game.id}</Description> 
<Description term="名称">{game.name}</Description> 
<Description term="文字简介">{game.shortDescription}</Description> 
<Description term="最多玩家数">{game.maximumPlayerCount}</Description> 
<Description term="最少玩家数">{game.minimumPlayerCount}</Description> 
<Description term="推荐玩家数">{game.recommendPlayerCount}</Description> 
<Description term="基础价格">{game.baseListPrice}</Description> 
<Description term="时长">{game.gameDuration}</Description> 
	
        
      </DescriptionList>
	)

}


class GameDashboard extends Component {


  componentDidMount() {
  /*
    // const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props;
    // const { getFieldDecorator, setFieldsValue } = this.props.form;
    const { dispatch, location, game } = this.props;
    
    if(!game){
    	return;
    }
    const {displayName} = game;
    if(!displayName){
    	return;
    }
	const link = location.pathname;
	
    dispatch({ type: 'breadcrumb/gotoLink', payload: { displayName, link }})
  	*/
  }
  

  render() {
    // eslint-disable-next-line max-len
    const { id,displayName, gameSessionCount, gameSessionRecordCount, gamePlayerRecordCount, rearrangeSessionTicketRecordAsSourceGameCount, rearrangeSessionTicketRecordAsTargetGameCount, gameTicketCount, onlineOrderCount, ticketPrintingHistoryCount, offlineStoreOrderCount } = this.props.game
    const cardsData = {cardsName:"游戏",cardsFor: "game",cardsSource: this.props.game,
  		subItems: [
{name: 'gameSessionList', displayName:'游戏场次',type:'gameSession',count:gameSessionCount},
{name: 'gameSessionRecordList', displayName:'游戏场次记录',type:'gameSessionRecord',count:gameSessionRecordCount},
{name: 'gamePlayerRecordList', displayName:'游戏玩家记录',type:'gamePlayerRecord',count:gamePlayerRecordCount},
{name: 'rearrangeSessionTicketRecordListAsSourceGame', displayName:'换场记录',type:'rearrangeSessionTicketRecord',count:rearrangeSessionTicketRecordAsSourceGameCount},
{name: 'rearrangeSessionTicketRecordListAsTargetGame', displayName:'换场记录',type:'rearrangeSessionTicketRecord',count:rearrangeSessionTicketRecordAsTargetGameCount},
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
  game: state._game,
}))(GameDashboard)

