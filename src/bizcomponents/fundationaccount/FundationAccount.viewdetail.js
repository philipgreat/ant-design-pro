

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
import styles from './FundationAccount.viewdetail.less'
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

const summaryOf = (fundationAccount) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{fundationAccount.id}</Description> 
<Description term="名称">{fundationAccount.name}</Description> 
<Description term="量">{fundationAccount.amount}</Description> 
	
        
      </DescriptionList>
	)

}

class FundationAccountViewDetail extends Component {


  state = {
    tabKey: `fundationAccountDetailsList`,
    stepDirection: 'horizontal',
  }
 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
    const {FundationAccountDetailsViewTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    
    const fundationAccount = this.props.fundationAccount
    const { id, fundationAccountDetailsCount } = fundationAccount
    const { fundationAccountDetailsList } = fundationAccount
    
    const owner = { type: '_fundationAccount', id }
    
    const tabList = [

      {key: 'fundationAccountDetailsList',tab: `基金账户信息(${fundationAccountDetailsCount})`}, 
   

   ];
   
   
    const contentList = {
       fundationAccountDetailsList:  
        <FundationAccountDetailsViewTable data={fundationAccountDetailsList} owner={owner} {...this.props} />,
 
    
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="基金账户总览"
        content={summaryOf(this.props.fundationAccount)}
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
  fundationAccount: state._fundationAccount,
}))(FundationAccountViewDetail)

