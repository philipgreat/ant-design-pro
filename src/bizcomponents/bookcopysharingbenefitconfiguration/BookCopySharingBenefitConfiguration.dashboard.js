

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
import styles from './BookCopySharingBenefitConfiguration.dashboard.less'
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


const imageListOf = (bookCopySharingBenefitConfiguration) =>{

	     return null
	

}

const settingListOf = (bookCopySharingBenefitConfiguration) =>{

	    return null
	
	//(bookCopySharingBenefitConfiguration)


}

const largeTextOf = (bookCopySharingBenefitConfiguration) =>{

	return null
	

}



const summaryOf = (bookCopySharingBenefitConfiguration) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{bookCopySharingBenefitConfiguration.id}</Description> 
<Description term="供应商的利益">{bookCopySharingBenefitConfiguration.vendorBenefit}</Description> 
<Description term="贷款商店受益">{bookCopySharingBenefitConfiguration.lendingStoreBenefit}</Description> 
	
        
      </DescriptionList>
	)

}


class BookCopySharingBenefitConfigurationDashboard extends Component {


  componentDidMount() {
  /*
    // const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props;
    // const { getFieldDecorator, setFieldsValue } = this.props.form;
    const { dispatch, location, bookCopySharingBenefitConfiguration } = this.props;
    
    if(!bookCopySharingBenefitConfiguration){
    	return;
    }
    const {displayName} = bookCopySharingBenefitConfiguration;
    if(!displayName){
    	return;
    }
	const link = location.pathname;
	
    dispatch({ type: 'breadcrumb/gotoLink', payload: { displayName, link }})
  	*/
  }
  

  render() {
    // eslint-disable-next-line max-len
    const { id,displayName,  } = this.props.bookCopySharingBenefitConfiguration
    const cardsData = {cardsName:"图书拷贝共享利益配置。",cardsFor: "bookCopySharingBenefitConfiguration",cardsSource: this.props.bookCopySharingBenefitConfiguration,
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
  bookCopySharingBenefitConfiguration: state._bookCopySharingBenefitConfiguration,
}))(BookCopySharingBenefitConfigurationDashboard)

