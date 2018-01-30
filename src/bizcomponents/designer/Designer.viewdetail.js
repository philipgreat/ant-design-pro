

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
import styles from './Designer.viewdetail.less'
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

const summaryOf = (designer) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{designer.id}</Description> 
<Description term="名称">{designer.name}</Description> 
<Description term="描述">{designer.description}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  designer: state._designer,
}))
export default class DesignerViewDetail extends Component {


  state = {
    tabKey: `designerMessageList`,
    stepDirection: 'horizontal',
  }
 
  onTabChange = (key) => {
    this.setState({ tabKey: key });
  }  
  render() {
    const {DesignerMessageViewTable} = GlobalComponents;
    const {ProjectViewTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    
    const designer = this.props.designer
    const { id, designerMessageCount, projectCount } = designer
    const { designerMessageList, projectList } = designer
    
    const owner = { type: '_designer', id }
    
    const tabList = [

      {key: 'designerMessageList',tab: `设计师信息(${designerMessageCount})`}, 
      {key: 'projectList',tab: `项目(${projectCount})`}, 
   

   ];
   
   
    const contentList = {
       designerMessageList:  
        <DesignerMessageViewTable data={designerMessageList} owner={owner} {...this.props} />,
 
      projectList:  
        <ProjectViewTable data={projectList} owner={owner} {...this.props} />,
 
    
    };
    


    
    
    
    return (

      <PageHeaderLayout
        title="设计师总览"
        content={summaryOf(this.props.designer)}
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



