

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
import styles from './BookManagement.dashboard.less'
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
const summaryOf = (bookManagement) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{bookManagement.id}</Description> 
<Description term="书管理的名字">{bookManagement.bookManagementName}</Description> 
	
        
      </DescriptionList>
	)

}


class BookManagementDashboard extends Component {


  componentDidMount() {
  /*
    // const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props;
    // const { getFieldDecorator, setFieldsValue } = this.props.form;
    const { dispatch, location, bookManagement } = this.props;
    
    if(!bookManagement){
    	return;
    }
    const {displayName} = bookManagement;
    if(!displayName){
    	return;
    }
	const link = location.pathname;
	
    dispatch({ type: 'breadcrumb/gotoLink', payload: { displayName, link }})
  	*/
  }
  

  render() {
    // eslint-disable-next-line max-len
    const { id,displayName, bookTagRecordCount, bookCopySharingBenefitConfigurationCount, bookCopyDonateBenefitConfigurationCount, bookBorrowConfigurationCount, bookCount, bookCopyStatusCount, bookCopySkuCount, bookCopyCheckPlanCount, bookCopyCheckStatusCount, bookReviewTypeCount } = this.props.bookManagement
    const cardsData = {cardsName:"图书管理",cardsFor: "bookManagement",cardsSource: this.props.bookManagement,
  		subItems: [
{name: 'bookTagRecordList', displayName:'书标签记录',type:'bookTagRecord',count:bookTagRecordCount},
{name: 'bookCopySharingBenefitConfigurationList', displayName:'图书拷贝共享利益配置。',type:'bookCopySharingBenefitConfiguration',count:bookCopySharingBenefitConfigurationCount},
{name: 'bookCopyDonateBenefitConfigurationList', displayName:'图书拷贝捐赠利益配置。',type:'bookCopyDonateBenefitConfiguration',count:bookCopyDonateBenefitConfigurationCount},
{name: 'bookBorrowConfigurationList', displayName:'书借配置',type:'bookBorrowConfiguration',count:bookBorrowConfigurationCount},
{name: 'bookList', displayName:'书',type:'book',count:bookCount},
{name: 'bookCopyStatusList', displayName:'书副本地位',type:'bookCopyStatus',count:bookCopyStatusCount},
{name: 'bookCopySkuList', displayName:'书副本Sku',type:'bookCopySku',count:bookCopySkuCount},
{name: 'bookCopyCheckPlanList', displayName:'书副本检查计划',type:'bookCopyCheckPlan',count:bookCopyCheckPlanCount},
{name: 'bookCopyCheckStatusList', displayName:'书副本检查状态',type:'bookCopyCheckStatus',count:bookCopyCheckStatusCount},
{name: 'bookReviewTypeList', displayName:'书评类型',type:'bookReviewType',count:bookReviewTypeCount},
    
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
  bookManagement: state._bookManagement,
}))(BookManagementDashboard)

