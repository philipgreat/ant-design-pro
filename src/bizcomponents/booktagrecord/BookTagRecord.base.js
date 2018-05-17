
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"书标签记录", menuFor: "bookTagRecord",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '标签名', debugtype: 'string', dataIndex: 'tagName', width: '7' },
  { title: '书', dataIndex: 'book', render: (text, record) => (record.book ? record.book.displayName : '暂无') },
  { title: '书副本', dataIndex: 'bookCopy', render: (text, record) => (record.bookCopy ? record.bookCopy.displayName : '暂无') },
  { title: '标签Datetime', dataIndex: 'tagDatetime', render: (text, record) => moment(record.tagDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '标签的客户', debugtype: 'string', dataIndex: 'tagCustomer', width: '17' },
  { title: '图书管理', dataIndex: 'bookManagement', render: (text, record) => (record.bookManagement ? record.bookManagement.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  tagName: '标签名',
  book: '书',
  bookCopy: '书副本',
  tagDatetime: '标签Datetime',
  tagCustomer: '标签的客户',
  bookManagement: '图书管理',

}


const BookTagRecordBase={menuData,displayColumns,fieldLabels}
export default BookTagRecordBase



