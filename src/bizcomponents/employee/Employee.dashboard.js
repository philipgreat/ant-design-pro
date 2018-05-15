

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
import styles from './Employee.dashboard.less'
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
const summaryOf = (employee) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{employee.id}</Description> 
<Description term="名称">{employee.name}</Description> 
<Description term="员工形象"><ImagePreview imageTitle="员工形象" imageLocation={employee.employeeImage}/></Description> 
<Description term="手机号码">{employee.mobileNumber}</Description> 
	
        
      </DescriptionList>
	)

}


class EmployeeDashboard extends Component {


  componentDidMount() {
  /*
    // const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props;
    // const { getFieldDecorator, setFieldsValue } = this.props.form;
    const { dispatch, location, employee } = this.props;
    
    if(!employee){
    	return;
    }
    const {displayName} = employee;
    if(!displayName){
    	return;
    }
	const link = location.pathname;
	
    dispatch({ type: 'breadcrumb/gotoLink', payload: { displayName, link }})
  	*/
  }
  

  render() {
    // eslint-disable-next-line max-len
    const { id,displayName, bookCopyCheckPlanCount, bookCopyCheckRecordCount, bookCopyOperationRecordCount, bookCopySharingApplicationCount, workshopCount, employeeWorkingStoreCount } = this.props.employee
    const cardsData = {cardsName:"员工",cardsFor: "employee",cardsSource: this.props.employee,
  		subItems: [
{name: 'bookCopyCheckPlanList', displayName:'书副本检查计划',type:'bookCopyCheckPlan',count:bookCopyCheckPlanCount},
{name: 'bookCopyCheckRecordList', displayName:'书副本检查记录',type:'bookCopyCheckRecord',count:bookCopyCheckRecordCount},
{name: 'bookCopyOperationRecordList', displayName:'书复制操作记录',type:'bookCopyOperationRecord',count:bookCopyOperationRecordCount},
{name: 'bookCopySharingApplicationList', displayName:'书副本共享应用程序',type:'bookCopySharingApplication',count:bookCopySharingApplicationCount},
{name: 'workshopList', displayName:'车间',type:'workshop',count:workshopCount},
{name: 'employeeWorkingStoreList', displayName:'员工工作的商店',type:'employeeWorkingStore',count:employeeWorkingStoreCount},
    
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
  employee: state._employee,
}))(EmployeeDashboard)

