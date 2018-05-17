

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


const imageListOf = (employee) =>{

	 return(<Card title='图片列表' className={styles.card}><Row type="flex" justify="space-between" align="bottom">
<Col span={4}><ImagePreview imageTitle ={'员工形象'} imageLocation={employee.employeeImage} >员工形象</ImagePreview></Col>
</Row></Card> )

	

}

const settingListOf = (employee) =>{

	    return null
	
	//(employee)


}

const largeTextOf = (employee) =>{

	return null
	

}



const summaryOf = (employee) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{employee.id}</Description> 
<Description term="名称">{employee.name}</Description> 
	
        
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
  employee: state._employee,
}))(EmployeeDashboard)

