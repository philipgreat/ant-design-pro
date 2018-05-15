

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
import styles from './BorrowingHistory.dashboard.less'
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
const summaryOf = (borrowingHistory) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{borrowingHistory.id}</Description> 
<Description term="借款人会员级别">{borrowingHistory.borrowerMemberLevel}</Description> 
<Description term="借方成员服务过期日期。">{ moment(borrowingHistory.borrowerMemberServiceExpiredDatetime).format('YYYY-MM-DD')}</Description> 
<Description term="书副本共享类型">{borrowingHistory.bookCopySharingType}</Description> 
<Description term="书的名字">{borrowingHistory.bookName}</Description> 
<Description term="贷款存储类型">{borrowingHistory.lendingStoreType}</Description> 
<Description term="贷款Datetime">{ moment(borrowingHistory.lendingDatetime).format('YYYY-MM-DD')}</Description> 
<Description term="自由借贷天">{borrowingHistory.freeLendingDays}</Description> 
<Description term="免费贷款到期日期时间">{ moment(borrowingHistory.freeLendingExpiredDatetime).format('YYYY-MM-DD')}</Description> 
<Description term="到期贷款利率">{borrowingHistory.expiredLendingRate}</Description> 
<Description term="到期贷款计算频率">{borrowingHistory.expiredLendingComputeFrequency}</Description> 
<Description term="返回日期时间">{ moment(borrowingHistory.returnDatetime).format('YYYY-MM-DD')}</Description> 
<Description term="贷款的日子">{borrowingHistory.lendingDays}</Description> 
<Description term="免费贷款到期">{borrowingHistory.freeLendingExpired?'是':'否'}</Description> 
	
        
      </DescriptionList>
	)

}


class BorrowingHistoryDashboard extends Component {


  componentDidMount() {
  /*
    // const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props;
    // const { getFieldDecorator, setFieldsValue } = this.props.form;
    const { dispatch, location, borrowingHistory } = this.props;
    
    if(!borrowingHistory){
    	return;
    }
    const {displayName} = borrowingHistory;
    if(!displayName){
    	return;
    }
	const link = location.pathname;
	
    dispatch({ type: 'breadcrumb/gotoLink', payload: { displayName, link }})
  	*/
  }
  

  render() {
    // eslint-disable-next-line max-len
    const { id,displayName, borrowingExpiredSkuCount } = this.props.borrowingHistory
    const cardsData = {cardsName:"借贷历史",cardsFor: "borrowingHistory",cardsSource: this.props.borrowingHistory,
  		subItems: [
{name: 'borrowingExpiredSkuList', displayName:'借款到期Sku',type:'borrowingExpiredSku',count:borrowingExpiredSkuCount},
    
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
  borrowingHistory: state._borrowingHistory,
}))(BorrowingHistoryDashboard)

