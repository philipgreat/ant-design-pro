

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
import styles from './StoreAccount.viewdetail.less'
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

const summaryOf = (storeAccount) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{storeAccount.id}</Description> 
<Description term="名称">{storeAccount.name}</Description> 
<Description term="量">{storeAccount.amount}</Description> 
	
        
      </DescriptionList>
	)

}

class StoreAccountViewDetail extends Component {


  state = {
    tabKey: `storeAccountDetailsList`,
    stepDirection: 'horizontal',
  }
 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
    const {StoreAccountDetailsViewTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    
    const storeAccount = this.props.storeAccount
    const { id, storeAccountDetailsCount } = storeAccount
    const { storeAccountDetailsList } = storeAccount
    
    const owner = { type: '_storeAccount', id }
    
    const tabList = [

      {key: 'storeAccountDetailsList',tab: `存储帐户详细信息(${storeAccountDetailsCount})`}, 
   

   ];
   
   
    const contentList = {
       storeAccountDetailsList:  
        <StoreAccountDetailsViewTable data={storeAccountDetailsList} owner={owner} {...this.props} />,
 
    
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="存储账户总览"
        content={summaryOf(this.props.storeAccount)}
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

export default connect(state => ({
  storeAccount: state._storeAccount,
}))(StoreAccountViewDetail)

