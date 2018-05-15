

import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome';
import { connect } from 'dva'
import moment from 'moment'
import { Row, Col, Icon, Card, Tabs, Table, Radio, DatePicker, Tooltip, Menu, Dropdown } from 'antd'
import { Link, Route, Redirect, Switch } from 'dva/router'
import numeral from 'numeral'
import {
  ChartCard, yuan, MiniArea, MiniBar, MiniProgress, Field, Bar, Pie, TimelineChart,
} from '../../components/Charts'
import Trend from '../../components/Trend'
import NumberInfo from '../../components/NumberInfo'
import { getTimeDistance } from '../../utils/utils'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import styles from './Workshop.dashboard.less'
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
const summaryOf = (workshop) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{workshop.id}</Description> 
<Description term="工厂的名字">{workshop.workshopName}</Description> 
<Description term="研讨会内容">{workshop.workshopContent}</Description> 
<Description term="车间图片"><ImagePreview imageTitle="车间图片" imageLocation={workshop.workshopImage}/></Description> 
<Description term="车间的地位">{workshop.workshopStatus}</Description> 
<Description term="车间活动日期时间">{ moment(workshop.workshopEventDatetime).format('YYYY-MM-DD')}</Description> 
<Description term="可用的寄存器Datetime">{ moment(workshop.availableRegisterDatetime).format('YYYY-MM-DD')}</Description> 
<Description term="可用的寄存器数量">{workshop.availableRegisterQuantity}</Description> 
<Description term="发布日期时间">{ moment(workshop.publishDatetime).format('YYYY-MM-DD')}</Description> 
	
        
      </DescriptionList>
	)

}


class WorkshopDashboard extends Component {


  componentDidMount() {
  /*
    // const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props;
    // const { getFieldDecorator, setFieldsValue } = this.props.form;
    const { dispatch, location, workshop } = this.props;
    
    if(!workshop){
    	return;
    }
    const {displayName} = workshop;
    if(!displayName){
    	return;
    }
	const link = location.pathname;
	
    dispatch({ type: 'breadcrumb/gotoLink', payload: { displayName, link }})
  	*/
  }
  

  render() {
    // eslint-disable-next-line max-len
    const { id,displayName, workshopRegisterHistoryCount, workshopReviewCount, workshopLikeCount } = this.props.workshop
    const cardsData = {cardsName:"车间",cardsFor: "workshop",cardsSource: this.props.workshop,
  		subItems: [
{name: 'workshopRegisterHistoryList', displayName:'车间登记历史',type:'workshopRegisterHistory',count:workshopRegisterHistoryCount},
{name: 'workshopReviewList', displayName:'车间检查',type:'workshopReview',count:workshopReviewCount},
{name: 'workshopLikeList', displayName:'车间等',type:'workshopLike',count:workshopLikeCount},
    
      	],
  	};
    
    return (

      <PageHeaderLayout
        title={`${cardsData.cardsName}: ${displayName}`}
        content={summaryOf(cardsData.cardsSource)}
        wrapperClassName={styles.advancedForm}
      >
        <div>
          <Row gutter={24}>

           {cardsData.subItems.map((item)=>(<Col {...topColResponsiveProps} key={item.name}>           
            <Card title={`${item.displayName}(${numeral(item.count).format('0,0')})`}  style={{ width: 180 }}>             
              <p><Link to={`/${cardsData.cardsFor}/${id}/list/${item.name}/${item.displayName}列表`}><FontAwesome name="gear"  />&nbsp;管理</Link></p>
              <p><Link to={`/${cardsData.cardsFor}/${id}/list/${item.type}CreateForm`}><FontAwesome name="plus"  />&nbsp;新增</Link></p>              
          </Card> 
            </Col>))}

          </Row>
        </div>
      </PageHeaderLayout>
    )
  }
}

export default connect(state => ({
  workshop: state._workshop,
}))(WorkshopDashboard)

