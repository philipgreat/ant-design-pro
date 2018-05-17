

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
import styles from './BookCopy.dashboard.less'
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


const imageListOf = (bookCopy) =>{

	     return null
	

}

const settingListOf = (bookCopy) =>{

	    return null
	
	//(bookCopy)


}

const largeTextOf = (bookCopy) =>{

	return null
	

}



const summaryOf = (bookCopy) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{bookCopy.id}</Description> 
<Description term="Wxa Id">{bookCopy.wxaId}</Description> 
<Description term="书副本共享类型">{bookCopy.bookCopySharingType}</Description> 
	
        
      </DescriptionList>
	)

}


class BookCopyDashboard extends Component {


  componentDidMount() {
  /*
    // const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props;
    // const { getFieldDecorator, setFieldsValue } = this.props.form;
    const { dispatch, location, bookCopy } = this.props;
    
    if(!bookCopy){
    	return;
    }
    const {displayName} = bookCopy;
    if(!displayName){
    	return;
    }
	const link = location.pathname;
	
    dispatch({ type: 'breadcrumb/gotoLink', payload: { displayName, link }})
  	*/
  }
  

  render() {
    // eslint-disable-next-line max-len
    const { id,displayName, bookTagRecordCount, bookCopySkuCount, bookCopyCheckRecordCount, bookCopyOperationRecordCount, borrowingHistoryCount, borrowingExpiredSkuCount, bookReviewCount } = this.props.bookCopy
    const cardsData = {cardsName:"书副本",cardsFor: "bookCopy",cardsSource: this.props.bookCopy,
  		subItems: [
{name: 'bookTagRecordList', displayName:'书标签记录',type:'bookTagRecord',count:bookTagRecordCount},
{name: 'bookCopySkuList', displayName:'书副本Sku',type:'bookCopySku',count:bookCopySkuCount},
{name: 'bookCopyCheckRecordList', displayName:'书副本检查记录',type:'bookCopyCheckRecord',count:bookCopyCheckRecordCount},
{name: 'bookCopyOperationRecordList', displayName:'书复制操作记录',type:'bookCopyOperationRecord',count:bookCopyOperationRecordCount},
{name: 'borrowingHistoryList', displayName:'借贷历史',type:'borrowingHistory',count:borrowingHistoryCount},
{name: 'borrowingExpiredSkuList', displayName:'借款到期Sku',type:'borrowingExpiredSku',count:borrowingExpiredSkuCount},
{name: 'bookReviewList', displayName:'书评',type:'bookReview',count:bookReviewCount},
    
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
  bookCopy: state._bookCopy,
}))(BookCopyDashboard)

