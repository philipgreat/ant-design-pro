

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
import styles from './Customer.dashboard.less'
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


const imageListOf = (customer) =>{

	 return(<Card title='图片列表' className={styles.card}><Row type="flex" justify="space-between" align="bottom">
<Col span={4}><ImagePreview imageTitle ={'标志形象'} imageLocation={customer.logoImage} >标志形象</ImagePreview></Col>
</Row></Card> )

	

}

const settingListOf = (customer) =>{

	    return null
	
	//(customer)


}

const largeTextOf = (customer) =>{

	return null
	

}



const summaryOf = (customer) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{customer.id}</Description> 
<Description term="尼克的名字">{customer.nickName}</Description> 
<Description term="迷你程序Openid">{customer.miniProgramOpenid}</Description> 
<Description term="服务计算Openid">{customer.serviceAcountOpenid}</Description> 
<Description term="Wechat联盟Id">{customer.wechatUnionId}</Description> 
<Description term="经度">{customer.longitude}</Description> 
<Description term="纬度">{customer.latitude}</Description> 
<Description term="手机号码">{customer.mobileNumber}</Description> 
<Description term="会员级别标题">{customer.memberLevelTitle}</Description> 
<Description term="会员级别代码">{customer.memberLevelCode}</Description> 
	
        
      </DescriptionList>
	)

}


class CustomerDashboard extends Component {


  componentDidMount() {
  /*
    // const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props;
    // const { getFieldDecorator, setFieldsValue } = this.props.form;
    const { dispatch, location, customer } = this.props;
    
    if(!customer){
    	return;
    }
    const {displayName} = customer;
    if(!displayName){
    	return;
    }
	const link = location.pathname;
	
    dispatch({ type: 'breadcrumb/gotoLink', payload: { displayName, link }})
  	*/
  }
  

  render() {
    // eslint-disable-next-line max-len
    const { id,displayName, bookCopyCount, borrowingHistoryCount, borrowingExpiredSkuCount, bookReviewCount, bookReviewLikeCount, bookCopySharingApplicationCount, customerAccountCount, workshopRegisterHistoryCount, workshopReviewCount, workshopLikeCount } = this.props.customer
    const cardsData = {cardsName:"客户",cardsFor: "customer",cardsSource: this.props.customer,
  		subItems: [
{name: 'bookCopyList', displayName:'书副本',type:'bookCopy',count:bookCopyCount},
{name: 'borrowingHistoryList', displayName:'借贷历史',type:'borrowingHistory',count:borrowingHistoryCount},
{name: 'borrowingExpiredSkuList', displayName:'借款到期Sku',type:'borrowingExpiredSku',count:borrowingExpiredSkuCount},
{name: 'bookReviewList', displayName:'书评',type:'bookReview',count:bookReviewCount},
{name: 'bookReviewLikeList', displayName:'这样的书评',type:'bookReviewLike',count:bookReviewLikeCount},
{name: 'bookCopySharingApplicationList', displayName:'书副本共享应用程序',type:'bookCopySharingApplication',count:bookCopySharingApplicationCount},
{name: 'customerAccountList', displayName:'客户账户',type:'customerAccount',count:customerAccountCount},
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
  customer: state._customer,
}))(CustomerDashboard)

