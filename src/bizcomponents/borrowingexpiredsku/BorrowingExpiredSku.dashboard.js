

import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome';
import { connect } from 'dva'
import moment from 'moment'
import BooleanOption from 'components/BooleanOption';
import { Row, Col, Icon, Card, Tabs, Table, Radio, DatePicker, Tooltip, Menu, Dropdown,Badge } from 'antd'
import { Link, Route, Redirect, Switch } from 'dva/router'
import numeral from 'numeral'
import {
  ChartCard, yuan, MiniArea, MiniBar, MiniProgress, Field, Bar, Pie, TimelineChart,
} from '../../components/Charts'
import Trend from '../../components/Trend'
import NumberInfo from '../../components/NumberInfo'
import { getTimeDistance } from '../../utils/utils'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import styles from './BorrowingExpiredSku.dashboard.less'
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


const imageListOf = (borrowingExpiredSku) =>{

	     return null
	

}

const settingListOf = (borrowingExpiredSku) =>{

	    return null
	
	//(borrowingExpiredSku)


}

const largeTextOf = (borrowingExpiredSku) =>{

	return null
	

}



const summaryOf = (borrowingExpiredSku) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{borrowingExpiredSku.id}</Description> 
<Description term="书的名字">{borrowingExpiredSku.bookName}</Description> 
<Description term="贷款Datetime">{ moment(borrowingExpiredSku.lendingDatetime).format('YYYY-MM-DD')}</Description> 
<Description term="返回日期时间">{ moment(borrowingExpiredSku.returnDatetime).format('YYYY-MM-DD')}</Description> 
<Description term="天到期">{borrowingExpiredSku.expiredDays}</Description> 
<Description term="过期的费用">{borrowingExpiredSku.expiredFee}</Description> 
	
        
      </DescriptionList>
	)

}


class BorrowingExpiredSkuDashboard extends Component {


  componentDidMount() {
  /*
    // const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props;
    // const { getFieldDecorator, setFieldsValue } = this.props.form;
    const { dispatch, location, borrowingExpiredSku } = this.props;
    
    if(!borrowingExpiredSku){
    	return;
    }
    const {displayName} = borrowingExpiredSku;
    if(!displayName){
    	return;
    }
	const link = location.pathname;
	
    dispatch({ type: 'breadcrumb/gotoLink', payload: { displayName, link }})
  	*/
  }
  

  render() {
    // eslint-disable-next-line max-len
    const { id,displayName,  } = this.props.borrowingExpiredSku
    const cardsData = {cardsName:"借款到期Sku",cardsFor: "borrowingExpiredSku",cardsSource: this.props.borrowingExpiredSku,
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
  borrowingExpiredSku: state._borrowingExpiredSku,
}))(BorrowingExpiredSkuDashboard)

