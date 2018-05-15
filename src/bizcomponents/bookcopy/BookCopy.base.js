
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"书副本", menuFor: "bookCopy",
  		subItems: [
  {name: 'bookTagRecordList', displayName:'书标签记录'},
  {name: 'bookCopySkuList', displayName:'书副本Sku'},
  {name: 'bookCopyCheckRecordList', displayName:'书副本检查记录'},
  {name: 'bookCopyOperationRecordList', displayName:'书复制操作记录'},
  {name: 'borrowingHistoryList', displayName:'借贷历史'},
  {name: 'borrowingExpiredSkuList', displayName:'借款到期Sku'},
  {name: 'bookReviewList', displayName:'书评'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/bookCopy/${text}/dashboard`}>{text}</Link>) },
  { title: 'Wxa Id', debugtype: 'string', dataIndex: 'wxaId', width: '44' },
  { title: '书副本供应商', dataIndex: 'bookCopyVendor', render: (text, record) => (record.bookCopyVendor ? record.bookCopyVendor.displayName : '暂无') },
  { title: '书副本共享类型', debugtype: 'string', dataIndex: 'bookCopySharingType', width: '6' },
  { title: '存储位置', dataIndex: 'locationStore', render: (text, record) => (record.locationStore ? record.locationStore.displayName : '暂无') },
  { title: '评估价格', dataIndex: 'evaluationPrice', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '书副本地位', dataIndex: 'bookCopyStatus', render: (text, record) => (record.bookCopyStatus ? record.bookCopyStatus.displayName : '暂无') },
  { title: '书的信息', dataIndex: 'bookInfo', render: (text, record) => (record.bookInfo ? record.bookInfo.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  wxaId: 'Wxa Id',
  bookCopyVendor: '书副本供应商',
  bookCopySharingType: '书副本共享类型',
  locationStore: '存储位置',
  evaluationPrice: '评估价格',
  bookCopyStatus: '书副本地位',
  bookInfo: '书的信息',

}


const BookCopyBase={menuData,displayColumns,fieldLabels}
export default BookCopyBase



