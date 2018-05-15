

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
import styles from './BookCopySku.dashboard.less'
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
const summaryOf = (bookCopySku) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{bookCopySku.id}</Description> 
<Description term="书的名字">{bookCopySku.bookName}</Description> 
<Description term="书的封面"><ImagePreview imageTitle="书的封面" imageLocation={bookCopySku.bookCover}/></Description> 
<Description term="书的作者">{bookCopySku.bookAuthor}</Description> 
<Description term="图书出版者">{bookCopySku.bookPublisher}</Description> 
<Description term="书的作用">{ moment(bookCopySku.bookPubdate).format('YYYY-MM-DD')}</Description> 
<Description term="列出的价格">{bookCopySku.listPrice}</Description> 
<Description term="评估价格">{bookCopySku.evaluationPrice}</Description> 
<Description term="书Isbn13">{bookCopySku.bookIsbn13}</Description> 
<Description term="书Isbn10">{bookCopySku.bookIsbn10}</Description> 
<Description term="书的地位">{bookCopySku.bookStatus}</Description> 
	
        
      </DescriptionList>
	)

}


class BookCopySkuDashboard extends Component {


  componentDidMount() {
  /*
    // const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props;
    // const { getFieldDecorator, setFieldsValue } = this.props.form;
    const { dispatch, location, bookCopySku } = this.props;
    
    if(!bookCopySku){
    	return;
    }
    const {displayName} = bookCopySku;
    if(!displayName){
    	return;
    }
	const link = location.pathname;
	
    dispatch({ type: 'breadcrumb/gotoLink', payload: { displayName, link }})
  	*/
  }
  

  render() {
    // eslint-disable-next-line max-len
    const { id,displayName,  } = this.props.bookCopySku
    const cardsData = {cardsName:"书副本Sku",cardsFor: "bookCopySku",cardsSource: this.props.bookCopySku,
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
  bookCopySku: state._bookCopySku,
}))(BookCopySkuDashboard)

