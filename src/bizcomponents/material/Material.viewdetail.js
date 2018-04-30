

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
import styles from './Material.viewdetail.less'
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

const summaryOf = (material) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{material.id}</Description> 
<Description term="名称">{material.name}</Description> 
<Description term="图像">{material.image}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  material: state._material,
}))
export default class MaterialViewDetail extends Component {


  state = {
    tabKey: `materialApplicationList`,
    stepDirection: 'horizontal',
  }
 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
    const {MaterialApplicationViewTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    
    const material = this.props.material
    const { id, materialApplicationCount } = material
    const { materialApplicationList } = material
    
    const owner = { type: '_material', id }
    
    const tabList = [

      {key: 'materialApplicationList',tab: `材料的应用(${materialApplicationCount})`}, 
   

   ];
   
   
    const contentList = {
       materialApplicationList:  
        <MaterialApplicationViewTable data={materialApplicationList} owner={owner} {...this.props} />,
 
    
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="材料总览"
        content={summaryOf(this.props.material)}
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



