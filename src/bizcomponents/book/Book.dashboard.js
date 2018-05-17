

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
import styles from './Book.dashboard.less'
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


const imageListOf = (book) =>{

	 return(<Card title='图片列表' className={styles.card}><Row type="flex" justify="space-between" align="bottom">
<Col span={4}><ImagePreview imageTitle ={'书的封面'} imageLocation={book.bookCover} >书的封面</ImagePreview></Col>
</Row></Card> )

	

}

const settingListOf = (book) =>{

	    return null
	
	//(book)


}

const largeTextOf = (book) =>{

	return null
	

}



const summaryOf = (book) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{book.id}</Description> 
<Description term="书的名字">{book.bookName}</Description> 
<Description term="书的作者">{book.bookAuthor}</Description> 
<Description term="图书出版者">{book.bookPublisher}</Description> 
<Description term="书的作用">{ moment(book.bookPubdate).format('YYYY-MM-DD')}</Description> 
<Description term="列出的价格">{book.listPrice}</Description> 
<Description term="书Isbn13">{book.bookIsbn13}</Description> 
	
        
      </DescriptionList>
	)

}


class BookDashboard extends Component {


  componentDidMount() {
  /*
    // const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props;
    // const { getFieldDecorator, setFieldsValue } = this.props.form;
    const { dispatch, location, book } = this.props;
    
    if(!book){
    	return;
    }
    const {displayName} = book;
    if(!displayName){
    	return;
    }
	const link = location.pathname;
	
    dispatch({ type: 'breadcrumb/gotoLink', payload: { displayName, link }})
  	*/
  }
  

  render() {
    // eslint-disable-next-line max-len
    const { id,displayName, bookTagRecordCount, bookCopyCount, bookCopySkuCount, borrowingHistoryCount, borrowingExpiredSkuCount, bookReviewCount } = this.props.book
    const cardsData = {cardsName:"书",cardsFor: "book",cardsSource: this.props.book,
  		subItems: [
{name: 'bookTagRecordList', displayName:'书标签记录',type:'bookTagRecord',count:bookTagRecordCount},
{name: 'bookCopyList', displayName:'书副本',type:'bookCopy',count:bookCopyCount},
{name: 'bookCopySkuList', displayName:'书副本Sku',type:'bookCopySku',count:bookCopySkuCount},
{name: 'borrowingHistoryList', displayName:'借贷历史',type:'borrowingHistory',count:borrowingHistoryCount},
{name: 'borrowingExpiredSkuList', displayName:'借款到期Sku',type:'borrowingExpiredSku',count:borrowingExpiredSkuCount},
{name: 'bookReviewList', displayName:'书评',type:'bookReview',count:bookReviewCount},
    
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
  book: state._book,
}))(BookDashboard)

