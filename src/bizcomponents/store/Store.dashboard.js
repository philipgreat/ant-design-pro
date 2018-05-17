

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
import styles from './Store.dashboard.less'
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


const imageListOf = (store) =>{

	 return(<Card title='图片列表' className={styles.card}><Row type="flex" justify="space-between" align="bottom">
<Col span={4}><ImagePreview imageTitle ={'商店形象'} imageLocation={store.storeImage} >商店形象</ImagePreview></Col>
</Row></Card> )

	

}

const settingListOf = (store) =>{

	    return null
	
	//(store)


}

const largeTextOf = (store) =>{

	return null
	

}



const summaryOf = (store) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{store.id}</Description> 
<Description term="商店的名字">{store.storeName}</Description> 
<Description term="存储地址">{store.storeAddress}</Description> 
<Description term="经度">{store.longitude}</Description> 
<Description term="纬度">{store.latitude}</Description> 
	
        
      </DescriptionList>
	)

}


class StoreDashboard extends Component {


  componentDidMount() {
  /*
    // const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props;
    // const { getFieldDecorator, setFieldsValue } = this.props.form;
    const { dispatch, location, store } = this.props;
    
    if(!store){
    	return;
    }
    const {displayName} = store;
    if(!displayName){
    	return;
    }
	const link = location.pathname;
	
    dispatch({ type: 'breadcrumb/gotoLink', payload: { displayName, link }})
  	*/
  }
  

  render() {
    // eslint-disable-next-line max-len
    const { id,displayName, bookCopyCount, bookCopyCheckPlanCount, bookCopyOperationRecordCount, borrowingHistoryAsLendingStoreCount, borrowingHistoryAsReturnStoreCount, borrowingExpiredSkuAsLendingStoreCount, borrowingExpiredSkuAsReturnStoreCount, bookCopySharingApplicationCount, storeAccountCount, workshopCount, employeeWorkingStoreCount } = this.props.store
    const cardsData = {cardsName:"商店",cardsFor: "store",cardsSource: this.props.store,
  		subItems: [
{name: 'bookCopyList', displayName:'书副本',type:'bookCopy',count:bookCopyCount},
{name: 'bookCopyCheckPlanList', displayName:'书副本检查计划',type:'bookCopyCheckPlan',count:bookCopyCheckPlanCount},
{name: 'bookCopyOperationRecordList', displayName:'书复制操作记录',type:'bookCopyOperationRecord',count:bookCopyOperationRecordCount},
{name: 'borrowingHistoryListAsLendingStore', displayName:'借贷历史',type:'borrowingHistory',count:borrowingHistoryAsLendingStoreCount},
{name: 'borrowingHistoryListAsReturnStore', displayName:'借贷历史',type:'borrowingHistory',count:borrowingHistoryAsReturnStoreCount},
{name: 'borrowingExpiredSkuListAsLendingStore', displayName:'借款到期Sku',type:'borrowingExpiredSku',count:borrowingExpiredSkuAsLendingStoreCount},
{name: 'borrowingExpiredSkuListAsReturnStore', displayName:'借款到期Sku',type:'borrowingExpiredSku',count:borrowingExpiredSkuAsReturnStoreCount},
{name: 'bookCopySharingApplicationList', displayName:'书副本共享应用程序',type:'bookCopySharingApplication',count:bookCopySharingApplicationCount},
{name: 'storeAccountList', displayName:'存储账户',type:'storeAccount',count:storeAccountCount},
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
  store: state._store,
}))(StoreDashboard)

