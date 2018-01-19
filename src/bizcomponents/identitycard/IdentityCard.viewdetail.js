

import React, { Component } from 'react'
import { connect } from 'dva'
import { Form,Button, Row, Col, Icon, Card, Tabs, Table, Radio, DatePicker, Tooltip, Menu, Dropdown,Steps,Badge } from 'antd'
import { Link, Route, Redirect, Switch } from 'dva/router'
import numeral from 'numeral'
import moment from 'moment'
import {
  ChartCard, yuan, MiniArea, MiniBar, MiniProgress, Field, Bar, Pie, TimelineChart,

} from '../../components/Charts'
import Trend from '../../components/Trend'
import NumberInfo from '../../components/NumberInfo'
import { getTimeDistance } from '../../utils/utils'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import styles from './IdentityCard.viewdetail.less'
import GlobalComponents from '../../custcomponents'
import DescriptionList from '../../components/DescriptionList';
const { Description } = DescriptionList;
const { Step } = Steps

const { TabPane } = Tabs
const { RangePicker } = DatePicker

const topColResponsiveProps = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 6,
  style: { marginBottom: 24 },
}

const summaryOf = (identityCard) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{identityCard.id}</Description> 
<Description term="姓名">{identityCard.holderName}</Description> 
<Description term="身份证号码">{identityCard.cardNumber}</Description> 
<Description term="身份证正面照片">{identityCard.frontImage}</Description> 
<Description term="身份证背面照片">{identityCard.backImage}</Description> 
<Description term="失效日期">{ moment(identityCard.expirationDate).format('YYYY-MM-DD')}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  identityCard: state._identityCard,
}))
export default class IdentityCardViewDetail extends Component {

 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
  
    // eslint-disable-next-line max-len
    
    const identityCard = this.props.identityCard
    const { id,  } = identityCard
    const {  } = identityCard
    
    const owner = { type: '_identityCard', id }
    
    const tabList = [

   

   ];
   
   
    const contentList = {
     
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="身份证总览"
        content={summaryOf(this.props.identityCard)}
        wrapperClassName={styles.advancedForm}
      >

      
      
	<Card 
  		className={styles.card} 
  		bordered={false}
  		tabList={tabList}
  		onTabChange={this.onTabChange}>
            {contentList[this.state.tabKey]}
        </Card>

 
      </PageHeaderLayout>
    )
  }
}



