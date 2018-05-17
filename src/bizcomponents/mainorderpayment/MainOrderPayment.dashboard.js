

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
import styles from './MainOrderPayment.dashboard.less'
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


const imageListOf = (mainOrderPayment) =>{

	     return null
	

}

const settingListOf = (mainOrderPayment) =>{

	    return null
	
	//(mainOrderPayment)


}

const largeTextOf = (mainOrderPayment) =>{

	return null
	

}



const summaryOf = (mainOrderPayment) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{mainOrderPayment.id}</Description> 
<Description term="支付方式">{mainOrderPayment.paymentMethod}</Description> 
<Description term="原始金额">{mainOrderPayment.originalAmount}</Description> 
<Description term="实际的数量">{mainOrderPayment.actualAmount}</Description> 
<Description term="付款状态">{mainOrderPayment.paymentStatus}</Description> 
<Description term="微信主要订单Id">{mainOrderPayment.wechatMainOrderId}</Description> 
<Description term="Wechat提前支付Id">{mainOrderPayment.wechatPrepayId}</Description> 
	
        
      </DescriptionList>
	)

}


class MainOrderPaymentDashboard extends Component {


  componentDidMount() {
  /*
    // const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props;
    // const { getFieldDecorator, setFieldsValue } = this.props.form;
    const { dispatch, location, mainOrderPayment } = this.props;
    
    if(!mainOrderPayment){
    	return;
    }
    const {displayName} = mainOrderPayment;
    if(!displayName){
    	return;
    }
	const link = location.pathname;
	
    dispatch({ type: 'breadcrumb/gotoLink', payload: { displayName, link }})
  	*/
  }
  

  render() {
    // eslint-disable-next-line max-len
    const { id,displayName,  } = this.props.mainOrderPayment
    const cardsData = {cardsName:"主要订单付款",cardsFor: "mainOrderPayment",cardsSource: this.props.mainOrderPayment,
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
  mainOrderPayment: state._mainOrderPayment,
}))(MainOrderPaymentDashboard)

