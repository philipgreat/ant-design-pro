
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"借贷历史", menuFor: "borrowingHistory",
  		subItems: [
  {name: 'borrowingExpiredSkuList', displayName:'借款到期Sku'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/borrowingHistory/${text}/dashboard`}>{text}</Link>) },
  { title: '借款人', dataIndex: 'borrower', render: (text, record) => (record.borrower ? record.borrower.displayName : '暂无') },
  { title: '借款人会员级别', debugtype: 'string', dataIndex: 'borrowerMemberLevel', width: '8' },
  { title: '借方成员服务过期日期。', dataIndex: 'borrowerMemberServiceExpiredDatetime', render: (text, record) => moment(record.borrowerMemberServiceExpiredDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '书', dataIndex: 'book', render: (text, record) => (record.book ? record.book.displayName : '暂无') },
  { title: '书副本', dataIndex: 'bookCopy', render: (text, record) => (record.bookCopy ? record.bookCopy.displayName : '暂无') },
  { title: '书副本共享类型', debugtype: 'string', dataIndex: 'bookCopySharingType', width: '6' },
  { title: '书的名字', debugtype: 'string', dataIndex: 'bookName', width: '8' },
  { title: '贷款商店', dataIndex: 'lendingStore', render: (text, record) => (record.lendingStore ? record.lendingStore.displayName : '暂无') },
  { title: '贷款存储类型', debugtype: 'string', dataIndex: 'lendingStoreType', width: '6' },
  { title: '贷款Datetime', dataIndex: 'lendingDatetime', render: (text, record) => moment(record.lendingDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '自由借贷天', debugtype: 'int', dataIndex: 'freeLendingDays', width: '5' },
  { title: '免费贷款到期日期时间', dataIndex: 'freeLendingExpiredDatetime', render: (text, record) => moment(record.freeLendingExpiredDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '到期贷款利率', dataIndex: 'expiredLendingRate', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '到期贷款计算频率', debugtype: 'int', dataIndex: 'expiredLendingComputeFrequency', width: '5' },
  { title: '返回日期时间', dataIndex: 'returnDatetime', render: (text, record) => moment(record.returnDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '返回商店', dataIndex: 'returnStore', render: (text, record) => (record.returnStore ? record.returnStore.displayName : '暂无') },
  { title: '贷款的日子', debugtype: 'int', dataIndex: 'lendingDays', width: '6' },
  { title: '免费贷款到期', dataIndex: 'freeLendingExpired', render: (text, record) => (record.freeLendingExpired ? '是' : '否') },

]

const fieldLabels = {
  id: 'ID',
  borrower: '借款人',
  borrowerMemberLevel: '借款人会员级别',
  borrowerMemberServiceExpiredDatetime: '借方成员服务过期日期。',
  book: '书',
  bookCopy: '书副本',
  bookCopySharingType: '书副本共享类型',
  bookName: '书的名字',
  lendingStore: '贷款商店',
  lendingStoreType: '贷款存储类型',
  lendingDatetime: '贷款Datetime',
  freeLendingDays: '自由借贷天',
  freeLendingExpiredDatetime: '免费贷款到期日期时间',
  expiredLendingRate: '到期贷款利率',
  expiredLendingComputeFrequency: '到期贷款计算频率',
  returnDatetime: '返回日期时间',
  returnStore: '返回商店',
  lendingDays: '贷款的日子',
  freeLendingExpired: '免费贷款到期',

}


const BorrowingHistoryBase={menuData,displayColumns,fieldLabels}
export default BorrowingHistoryBase



