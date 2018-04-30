

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
import styles from './ProductPrice.dashboard.less'
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
const summaryOf = (productPrice) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{productPrice.id}</Description> 
<Description term="车辆类型">{productPrice.vehicleType}</Description> 
<Description term="新能源车">{productPrice.greenVehicle?'是':'否'}</Description> 
<Description term="年检费用">{productPrice.inspectionPrice}</Description> 
<Description term="二级维护价格">{productPrice.secondLevelMaintenancePrice}</Description> 
<Description term="等级评定价格">{productPrice.gradeEstimationPrice}</Description> 
<Description term="代办服务费用">{productPrice.agentServicePrice}</Description> 
<Description term="折扣价格代理服务">{productPrice.discountAgentServicePrice}</Description> 
<Description term="描述">{productPrice.description}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  productPrice: state._productPrice,
}))
export default class ProductPriceDashboard extends Component {


  componentDidMount() {
  /*
    // const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props;
    // const { getFieldDecorator, setFieldsValue } = this.props.form;
    const { dispatch, location, productPrice } = this.props;
    
    if(!productPrice){
    	return;
    }
    const {displayName} = productPrice;
    if(!displayName){
    	return;
    }
	const link = location.pathname;
	
    dispatch({ type: 'breadcrumb/gotoLink', payload: { displayName, link }})
  	*/
  }
  

  render() {
    // eslint-disable-next-line max-len
    const { id,displayName,  } = this.props.productPrice
    const cardsData = {cardsName:"产品价格",cardsFor: "productPrice",cardsSource: this.props.productPrice,
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
          <Row gutter={24}>

           {cardsData.subItems.map((item)=>(<Col {...topColResponsiveProps}>           
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



