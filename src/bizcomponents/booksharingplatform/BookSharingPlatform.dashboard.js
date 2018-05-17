

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
import styles from './BookSharingPlatform.dashboard.less'
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


const imageListOf = (bookSharingPlatform) =>{

	     return null
	

}

const settingListOf = (bookSharingPlatform) =>{

	    return null
	
	//(bookSharingPlatform)


}

const largeTextOf = (bookSharingPlatform) =>{

	return null
	

}



const summaryOf = (bookSharingPlatform) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{bookSharingPlatform.id}</Description> 
<Description term="名称">{bookSharingPlatform.name}</Description> 
	
        
      </DescriptionList>
	)

}


class BookSharingPlatformDashboard extends Component {


  componentDidMount() {
  /*
    // const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props;
    // const { getFieldDecorator, setFieldsValue } = this.props.form;
    const { dispatch, location, bookSharingPlatform } = this.props;
    
    if(!bookSharingPlatform){
    	return;
    }
    const {displayName} = bookSharingPlatform;
    if(!displayName){
    	return;
    }
	const link = location.pathname;
	
    dispatch({ type: 'breadcrumb/gotoLink', payload: { displayName, link }})
  	*/
  }
  

  render() {
    // eslint-disable-next-line max-len
    const { id,displayName, availableTokenCount, accountManagementCount, provinceCount, bookManagementCount, memberServiceManagementCount, mainOrderCount, bookCount, printerCount, platformAccountCount, fundationAccountCount, storeCount, customerCount } = this.props.bookSharingPlatform
    const cardsData = {cardsName:"书共享平台",cardsFor: "bookSharingPlatform",cardsSource: this.props.bookSharingPlatform,
  		subItems: [
{name: 'availableTokenList', displayName:'使用令牌',type:'availableToken',count:availableTokenCount},
{name: 'accountManagementList', displayName:'账户管理',type:'accountManagement',count:accountManagementCount},
{name: 'provinceList', displayName:'省',type:'province',count:provinceCount},
{name: 'bookManagementList', displayName:'图书管理',type:'bookManagement',count:bookManagementCount},
{name: 'memberServiceManagementList', displayName:'会员服务管理',type:'memberServiceManagement',count:memberServiceManagementCount},
{name: 'mainOrderList', displayName:'主订单',type:'mainOrder',count:mainOrderCount},
{name: 'bookList', displayName:'书',type:'book',count:bookCount},
{name: 'printerList', displayName:'打印机',type:'printer',count:printerCount},
{name: 'platformAccountList', displayName:'平台账户',type:'platformAccount',count:platformAccountCount},
{name: 'fundationAccountList', displayName:'基金账户',type:'fundationAccount',count:fundationAccountCount},
{name: 'storeList', displayName:'商店',type:'store',count:storeCount},
{name: 'customerList', displayName:'客户',type:'customer',count:customerCount},
    
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
  bookSharingPlatform: state._bookSharingPlatform,
}))(BookSharingPlatformDashboard)

