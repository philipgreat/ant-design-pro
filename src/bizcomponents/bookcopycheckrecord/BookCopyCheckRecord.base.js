
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"书副本检查记录", menuFor: "bookCopyCheckRecord",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '书副本', dataIndex: 'bookCopy', render: (text, record) => (record.bookCopy ? record.bookCopy.displayName : '暂无') },
  { title: '书副本检查状态', dataIndex: 'bookCopyCheckStatus', render: (text, record) => (record.bookCopyCheckStatus ? record.bookCopyCheckStatus.displayName : '暂无') },
  { title: '书副本检查Datetime', dataIndex: 'bookCopyCheckDatetime', render: (text, record) => moment(record.bookCopyCheckDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '检查过程的员工', dataIndex: 'checkProcessEmployee', render: (text, record) => (record.checkProcessEmployee ? record.checkProcessEmployee.displayName : '暂无') },
  { title: '检查过程的结果', debugtype: 'string', dataIndex: 'checkProcessResults', width: '6' },
  { title: '检查过程Datetime', dataIndex: 'checkProcessDatetime', render: (text, record) => moment(record.checkProcessDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '书副本检查计划', dataIndex: 'bookCopyCheckPlan', render: (text, record) => (record.bookCopyCheckPlan ? record.bookCopyCheckPlan.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  bookCopy: '书副本',
  bookCopyCheckStatus: '书副本检查状态',
  bookCopyCheckDatetime: '书副本检查Datetime',
  checkProcessEmployee: '检查过程的员工',
  checkProcessResults: '检查过程的结果',
  checkProcessDatetime: '检查过程Datetime',
  bookCopyCheckPlan: '书副本检查计划',

}


const BookCopyCheckRecordBase={menuData,displayColumns,fieldLabels}
export default BookCopyCheckRecordBase



