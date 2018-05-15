
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"书副本检查状态", menuFor: "bookCopyCheckStatus",
  		subItems: [
  {name: 'bookCopyCheckRecordList', displayName:'书副本检查记录'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/bookCopyCheckStatus/${text}/dashboard`}>{text}</Link>) },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '7' },
  { title: '图书管理', dataIndex: 'bookManagement', render: (text, record) => (record.bookManagement ? record.bookManagement.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  name: '名称',
  bookManagement: '图书管理',

}


const BookCopyCheckStatusBase={menuData,displayColumns,fieldLabels}
export default BookCopyCheckStatusBase



