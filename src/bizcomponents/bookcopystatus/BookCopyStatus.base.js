
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"书副本地位", menuFor: "bookCopyStatus",
  		subItems: [
  {name: 'bookCopyList', displayName:'书副本'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/bookCopyStatus/${text}/dashboard`}>{text}</Link>) },
  { title: '地位的名字', debugtype: 'string', dataIndex: 'statusName', width: '6' },
  { title: '状态码', debugtype: 'string', dataIndex: 'statusCode', width: '13' },
  { title: '状态描述', debugtype: 'string', dataIndex: 'statusDescription', width: '15' },
  { title: '图书管理', dataIndex: 'bookManagement', render: (text, record) => (record.bookManagement ? record.bookManagement.displayName : '暂无') },
  { title: '可以借', dataIndex: 'canBorrow', render: (text, record) => (record.canBorrow ? '是' : '否') },
  { title: '需要检查股票', dataIndex: 'needCheckStock', render: (text, record) => (record.needCheckStock ? '是' : '否') },

]

const fieldLabels = {
  id: 'ID',
  statusName: '地位的名字',
  statusCode: '状态码',
  statusDescription: '状态描述',
  bookManagement: '图书管理',
  canBorrow: '可以借',
  needCheckStock: '需要检查股票',

}


const BookCopyStatusBase={menuData,displayColumns,fieldLabels}
export default BookCopyStatusBase



