
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"借款到期Sku", menuFor: "borrowingExpiredSku",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '借款人', dataIndex: 'borrower', render: (text, record) => (record.borrower ? record.borrower.displayName : '暂无') },
  { title: '书副本', dataIndex: 'bookCopy', render: (text, record) => (record.bookCopy ? record.bookCopy.displayName : '暂无') },
  { title: '书', dataIndex: 'book', render: (text, record) => (record.book ? record.book.displayName : '暂无') },
  { title: '书的名字', debugtype: 'string', dataIndex: 'bookName', width: '8' },
  { title: '贷款商店', dataIndex: 'lendingStore', render: (text, record) => (record.lendingStore ? record.lendingStore.displayName : '暂无') },
  { title: '贷款Datetime', dataIndex: 'lendingDatetime', render: (text, record) => moment(record.lendingDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '返回商店', dataIndex: 'returnStore', render: (text, record) => (record.returnStore ? record.returnStore.displayName : '暂无') },
  { title: '返回日期时间', dataIndex: 'returnDatetime', render: (text, record) => moment(record.returnDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '天到期', debugtype: 'int', dataIndex: 'expiredDays', width: '5' },
  { title: '过期的费用', dataIndex: 'expiredFee', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '成本付款状态', debugtype: 'string', dataIndex: 'costPaymentStatus', width: '7' },
  { title: '借贷历史', dataIndex: 'borrowingHistory', render: (text, record) => (record.borrowingHistory ? record.borrowingHistory.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  borrower: '借款人',
  bookCopy: '书副本',
  book: '书',
  bookName: '书的名字',
  lendingStore: '贷款商店',
  lendingDatetime: '贷款Datetime',
  returnStore: '返回商店',
  returnDatetime: '返回日期时间',
  expiredDays: '天到期',
  expiredFee: '过期的费用',
  costPaymentStatus: '成本付款状态',
  borrowingHistory: '借贷历史',

}


const BorrowingExpiredSkuBase={menuData,displayColumns,fieldLabels}
export default BorrowingExpiredSkuBase



