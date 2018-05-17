
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"书", menuFor: "book",
  		subItems: [
  {name: 'bookTagRecordList', displayName:'书标签记录'},
  {name: 'bookCopyList', displayName:'书副本'},
  {name: 'bookCopySkuList', displayName:'书副本Sku'},
  {name: 'borrowingHistoryList', displayName:'借贷历史'},
  {name: 'borrowingExpiredSkuList', displayName:'借款到期Sku'},
  {name: 'bookReviewList', displayName:'书评'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/book/${text}/dashboard`}>{text}</Link>) },
  { title: '书的名字', debugtype: 'string', dataIndex: 'bookName', width: '62' },
  { title: '书的封面', dataIndex: 'bookCover', render: (text, record) => <ImagePreview imageTitle="书的封面" imageLocation={record.bookCover} /> },
  { title: '书的作者', debugtype: 'string', dataIndex: 'bookAuthor', width: '67' },
  { title: '图书出版者', debugtype: 'string', dataIndex: 'bookPublisher', width: '9' },
  { title: '书的作用', dataIndex: 'bookPubdate', render: (text, record) => moment(record.bookPubdate).format('YYYY-MM-DD') },
  { title: '列出的价格', dataIndex: 'listPrice', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '书Isbn13', debugtype: 'string', dataIndex: 'bookIsbn13', width: '21' },
  { title: '书Isbn10', debugtype: 'string', dataIndex: 'bookIsbn10', width: '16' },
  { title: '图书管理', dataIndex: 'bookManagement', render: (text, record) => (record.bookManagement ? record.bookManagement.displayName : '暂无') },
  { title: '平台', dataIndex: 'platform', render: (text, record) => (record.platform ? record.platform.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  bookName: '书的名字',
  bookCover: '书的封面',
  bookAuthor: '书的作者',
  bookPublisher: '图书出版者',
  bookPubdate: '书的作用',
  listPrice: '列出的价格',
  bookIsbn13: '书Isbn13',
  bookIsbn10: '书Isbn10',
  bookManagement: '图书管理',
  platform: '平台',

}


const BookBase={menuData,displayColumns,fieldLabels}
export default BookBase



