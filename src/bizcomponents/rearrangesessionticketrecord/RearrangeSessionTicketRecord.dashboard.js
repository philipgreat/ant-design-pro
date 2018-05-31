

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
import styles from './RearrangeSessionTicketRecord.dashboard.less'
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


const imageListOf = (rearrangeSessionTicketRecord) =>{

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

const settingListOf = (rearrangeSessionTicketRecord) =>{

	const optionList = [ 
	  {"title":'原门票是否已打印',"value":rearrangeSessionTicketRecord.sourceTicketPrinted},
  {"title":'换场门票是否已打印',"value":rearrangeSessionTicketRecord.targetTicketPrinted},
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

const largeTextOf = (rearrangeSessionTicketRecord) =>{

	return null
	

}



const summaryOf = (rearrangeSessionTicketRecord) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{rearrangeSessionTicketRecord.id}</Description> 
<Description term="原游戏名称">{rearrangeSessionTicketRecord.sourceGameName}</Description> 
<Description term="原游戏场次日期">{ moment(rearrangeSessionTicketRecord.sourceGameSessionDatetime).format('YYYY-MM-DD')}</Description> 
<Description term="原游戏场次名称">{rearrangeSessionTicketRecord.sourceGameSessionName}</Description> 
<Description term="原门票数">{rearrangeSessionTicketRecord.sourceTicketQuantity}</Description> 
<Description term="原换票手机号">{rearrangeSessionTicketRecord.sourceRedeemPhone}</Description> 
<Description term="原换票验证码">{rearrangeSessionTicketRecord.sourceRedeemCode}</Description> 
<Description term="原门店名称">{rearrangeSessionTicketRecord.sourceStoreName}</Description> 
<Description term="换场游戏名称">{rearrangeSessionTicketRecord.targetGameName}</Description> 
<Description term="换场游戏场次日期">{ moment(rearrangeSessionTicketRecord.targetGameSessionDatetime).format('YYYY-MM-DD')}</Description> 
<Description term="换场游戏场次名称">{rearrangeSessionTicketRecord.targetGameSessionName}</Description> 
<Description term="换场门票数">{rearrangeSessionTicketRecord.targetTicketQuantity}</Description> 
<Description term="换场换票手机">{rearrangeSessionTicketRecord.targetRedeemPhone}</Description> 
<Description term="换场换票验证码">{rearrangeSessionTicketRecord.targetRedeemCode}</Description> 
<Description term="换场门店名称">{rearrangeSessionTicketRecord.targetStoreName}</Description> 
	
        
      </DescriptionList>
	)

}


class RearrangeSessionTicketRecordDashboard extends Component {


  componentDidMount() {
  /*
    // const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props;
    // const { getFieldDecorator, setFieldsValue } = this.props.form;
    const { dispatch, location, rearrangeSessionTicketRecord } = this.props;
    
    if(!rearrangeSessionTicketRecord){
    	return;
    }
    const {displayName} = rearrangeSessionTicketRecord;
    if(!displayName){
    	return;
    }
	const link = location.pathname;
	
    dispatch({ type: 'breadcrumb/gotoLink', payload: { displayName, link }})
  	*/
  }
  

  render() {
    // eslint-disable-next-line max-len
    const { id,displayName,  } = this.props.rearrangeSessionTicketRecord
    const cardsData = {cardsName:"换场记录",cardsFor: "rearrangeSessionTicketRecord",cardsSource: this.props.rearrangeSessionTicketRecord,
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
  rearrangeSessionTicketRecord: state._rearrangeSessionTicketRecord,
}))(RearrangeSessionTicketRecordDashboard)

