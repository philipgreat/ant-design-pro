

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
import styles from './BookCopyDonateBenefitConfiguration.viewdetail.less'
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

const summaryOf = (bookCopyDonateBenefitConfiguration) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{bookCopyDonateBenefitConfiguration.id}</Description> 
<Description term="供应商的利益">{bookCopyDonateBenefitConfiguration.vendorBenefit}</Description> 
<Description term="贷款商店受益">{bookCopyDonateBenefitConfiguration.lendingStoreBenefit}</Description> 
<Description term="平台的好处">{bookCopyDonateBenefitConfiguration.platformBenefit}</Description> 
<Description term="公共服务基金受益">{bookCopyDonateBenefitConfiguration.publicServiceFundBenefit}</Description> 
	
        
      </DescriptionList>
	)

}

class BookCopyDonateBenefitConfigurationViewDetail extends Component {

 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
  
    // eslint-disable-next-line max-len
    
    const bookCopyDonateBenefitConfiguration = this.props.bookCopyDonateBenefitConfiguration
    const { id,  } = bookCopyDonateBenefitConfiguration
    const {  } = bookCopyDonateBenefitConfiguration
    
    const owner = { type: '_bookCopyDonateBenefitConfiguration', id }
    
    const tabList = [

   

   ];
   
   
    const contentList = {
     
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="图书拷贝捐赠利益配置。总览"
        content={summaryOf(this.props.bookCopyDonateBenefitConfiguration)}
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
  bookCopyDonateBenefitConfiguration: state._bookCopyDonateBenefitConfiguration,
}))(BookCopyDonateBenefitConfigurationViewDetail)

