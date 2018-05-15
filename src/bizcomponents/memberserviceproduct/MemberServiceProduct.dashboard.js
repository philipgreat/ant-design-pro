

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
import styles from './MemberServiceProduct.dashboard.less'
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
const summaryOf = (memberServiceProduct) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{memberServiceProduct.id}</Description> 
<Description term="产品名称">{memberServiceProduct.productName}</Description> 
<Description term="产品描述">{memberServiceProduct.productDescription}</Description> 
<Description term="参加研讨会">{memberServiceProduct.joinWorkshop?'是':'否'}</Description> 
<Description term="制造车间">{memberServiceProduct.createWorkshop?'是':'否'}</Description> 
<Description term="借的书">{memberServiceProduct.borrowBook?'是':'否'}</Description> 
<Description term="超级贵宾">{memberServiceProduct.superVIP?'是':'否'}</Description> 
	
        
      </DescriptionList>
	)

}


class MemberServiceProductDashboard extends Component {


  componentDidMount() {
  /*
    // const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props;
    // const { getFieldDecorator, setFieldsValue } = this.props.form;
    const { dispatch, location, memberServiceProduct } = this.props;
    
    if(!memberServiceProduct){
    	return;
    }
    const {displayName} = memberServiceProduct;
    if(!displayName){
    	return;
    }
	const link = location.pathname;
	
    dispatch({ type: 'breadcrumb/gotoLink', payload: { displayName, link }})
  	*/
  }
  

  render() {
    // eslint-disable-next-line max-len
    const { id,displayName, memberServiceSkuCount, memberCustomerCount } = this.props.memberServiceProduct
    const cardsData = {cardsName:"会员服务产品",cardsFor: "memberServiceProduct",cardsSource: this.props.memberServiceProduct,
  		subItems: [
{name: 'memberServiceSkuList', displayName:'会员服务Sku',type:'memberServiceSku',count:memberServiceSkuCount},
{name: 'memberCustomerList', displayName:'会员的客户',type:'memberCustomer',count:memberCustomerCount},
    
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
  memberServiceProduct: state._memberServiceProduct,
}))(MemberServiceProductDashboard)

