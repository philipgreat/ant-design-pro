

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
import styles from './FormField.dashboard.less'
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


const imageListOf = (formField) =>{

	     return null
	

}

const settingListOf = (formField) =>{

	return(<Card title='状态集合' className={styles.card}>
<BooleanOption type={formField.required?"success":"error"} title="要求"/>
<BooleanOption type={formField.disabled?"success":"error"} title="禁用"/>
<BooleanOption type={formField.customRendering?"success":"error"} title="自定义渲染"/>
</Card> )

	
	//(formField)


}

const largeTextOf = (formField) =>{

	return null
	

}



const summaryOf = (formField) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{formField.id}</Description> 
<Description term="标签">{formField.label}</Description> 
<Description term="语言环境的关键">{formField.localeKey}</Description> 
<Description term="参数名称">{formField.parameterName}</Description> 
<Description term="类型">{formField.type}</Description> 
<Description term="占位符">{formField.placeholder}</Description> 
<Description term="默认值">{formField.defaultValue}</Description> 
<Description term="描述">{formField.description}</Description> 
<Description term="字段组">{formField.fieldGroup}</Description> 
<Description term="最小值">{formField.minValue}</Description> 
<Description term="最大的价值">{formField.maxValue}</Description> 
<Description term="候选人的价值观">{formField.candidateValues}</Description> 
	
        
      </DescriptionList>
	)

}


class FormFieldDashboard extends Component {


  componentDidMount() {
  /*
    // const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props;
    // const { getFieldDecorator, setFieldsValue } = this.props.form;
    const { dispatch, location, formField } = this.props;
    
    if(!formField){
    	return;
    }
    const {displayName} = formField;
    if(!displayName){
    	return;
    }
	const link = location.pathname;
	
    dispatch({ type: 'breadcrumb/gotoLink', payload: { displayName, link }})
  	*/
  }
  

  render() {
    // eslint-disable-next-line max-len
    const { id,displayName,  } = this.props.formField
    const cardsData = {cardsName:"表单字段",cardsFor: "formField",cardsSource: this.props.formField,
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
        {imageListOf(cardsData.cardsSource)}
        {settingListOf(cardsData.cardsSource)}
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
  formField: state._formField,
}))(FormFieldDashboard)

