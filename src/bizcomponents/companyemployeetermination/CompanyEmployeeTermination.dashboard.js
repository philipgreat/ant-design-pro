

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
import styles from './CompanyEmployeeTermination.dashboard.less'
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
const summaryOf = (companyEmployeeTermination) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{companyEmployeeTermination.id}</Description> 
<Description term="审批人">{companyEmployeeTermination.who}</Description> 
<Description term="执行时间">{ moment(companyEmployeeTermination.eventTime).format('YYYY-MM-DD')}</Description> 
<Description term="批注">{companyEmployeeTermination.comment}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  companyEmployeeTermination: state._companyEmployeeTermination,
}))
export default class CompanyEmployeeTerminationDashboard extends Component {


  componentDidMount() {
  /*
    // const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props;
    // const { getFieldDecorator, setFieldsValue } = this.props.form;
    const { dispatch, location, companyEmployeeTermination } = this.props;
    
    if(!companyEmployeeTermination){
    	return;
    }
    const {displayName} = companyEmployeeTermination;
    if(!displayName){
    	return;
    }
	const link = location.pathname;
	
    dispatch({ type: 'breadcrumb/gotoLink', payload: { displayName, link }})
  	*/
  }
  

  render() {
    // eslint-disable-next-line max-len
    const { id,displayName, vehicleServiceCompanyEmployeeCount } = this.props.companyEmployeeTermination
    const cardsData = {cardsName:"商户员工合同结束状态变更",cardsFor: "companyEmployeeTermination",cardsSource: this.props.companyEmployeeTermination,
  		subItems: [
{name: 'vehicleServiceCompanyEmployeeList', displayName:'商户员工',type:'vehicleServiceCompanyEmployee',count:vehicleServiceCompanyEmployeeCount},
    
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



