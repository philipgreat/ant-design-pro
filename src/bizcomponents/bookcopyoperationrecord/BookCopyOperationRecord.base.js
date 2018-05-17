
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"书复制操作记录", menuFor: "bookCopyOperationRecord",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '书副本', dataIndex: 'bookCopy', render: (text, record) => (record.bookCopy ? record.bookCopy.displayName : '暂无') },
  { title: '书副本操作类型', debugtype: 'string', dataIndex: 'bookCopyOperateType', width: '6' },
  { title: '经营商店', dataIndex: 'operateStore', render: (text, record) => (record.operateStore ? record.operateStore.displayName : '暂无') },
  { title: '操作日期时间', dataIndex: 'operationDatetime', render: (text, record) => moment(record.operationDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '操作员工', dataIndex: 'operationEmployee', render: (text, record) => (record.operationEmployee ? record.operationEmployee.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  bookCopy: '书副本',
  bookCopyOperateType: '书副本操作类型',
  operateStore: '经营商店',
  operationDatetime: '操作日期时间',
  operationEmployee: '操作员工',

}


const BookCopyOperationRecordBase={menuData,displayColumns,fieldLabels}
export default BookCopyOperationRecordBase



