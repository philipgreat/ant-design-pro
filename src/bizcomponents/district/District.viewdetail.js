

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
import styles from './District.viewdetail.less'
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

const summaryOf = (district) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{district.id}</Description> 
<Description term="名称">{district.name}</Description> 
	
        
      </DescriptionList>
	)

}

class DistrictViewDetail extends Component {


  state = {
    tabKey: `storeList`,
    stepDirection: 'horizontal',
  }
 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
    const {StoreViewTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    
    const district = this.props.district
    const { id, storeCount } = district
    const { storeList } = district
    
    const owner = { type: '_district', id }
    
    const tabList = [

      {key: 'storeList',tab: `商店(${storeCount})`}, 
   

   ];
   
   
    const contentList = {
       storeList:  
        <StoreViewTable data={storeList} owner={owner} {...this.props} />,
 
    
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="区总览"
        content={summaryOf(this.props.district)}
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
  district: state._district,
}))(DistrictViewDetail)

