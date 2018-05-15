
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"书副本Sku", menuFor: "bookCopySku",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '书', dataIndex: 'book', render: (text, record) => (record.book ? record.book.displayName : '暂无') },
  { title: '书副本', dataIndex: 'bookCopy', render: (text, record) => (record.bookCopy ? record.bookCopy.displayName : '暂无') },
  { title: '书的名字', debugtype: 'string', dataIndex: 'bookName', width: '24' },
  { title: '书的封面', dataIndex: 'bookCover', render: (text, record) => <ImagePreview imageTitle="书的封面" imageLocation={record.bookCover} /> },
  { title: '书的作者', debugtype: 'string', dataIndex: 'bookAuthor', width: '7' },
  { title: '图书出版者', debugtype: 'string', dataIndex: 'bookPublisher', width: '9' },
  { title: '书的作用', dataIndex: 'bookPubdate', render: (text, record) => moment(record.bookPubdate).format('YYYY-MM-DD') },
  { title: '列出的价格', dataIndex: 'listPrice', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '评估价格', dataIndex: 'evaluationPrice', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '书Isbn13', debugtype: 'string', dataIndex: 'bookIsbn13', width: '17' },
  { title: '书Isbn10', debugtype: 'int', dataIndex: 'bookIsbn10', width: '14' },
  { title: '书的地位', debugtype: 'string', dataIndex: 'bookStatus', width: '47' },
  { title: '图书管理', dataIndex: 'bookManagement', render: (text, record) => (record.bookManagement ? record.bookManagement.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  book: '书',
  bookCopy: '书副本',
  bookName: '书的名字',
  bookCover: '书的封面',
  bookAuthor: '书的作者',
  bookPublisher: '图书出版者',
  bookPubdate: '书的作用',
  listPrice: '列出的价格',
  evaluationPrice: '评估价格',
  bookIsbn13: '书Isbn13',
  bookIsbn10: '书Isbn10',
  bookStatus: '书的地位',
  bookManagement: '图书管理',

}


const BookCopySkuBase={menuData,displayColumns,fieldLabels}
export default BookCopySkuBase



