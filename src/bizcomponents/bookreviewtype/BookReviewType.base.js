
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"书评类型", menuFor: "bookReviewType",
  		subItems: [
  {name: 'bookReviewList', displayName:'书评'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/bookReviewType/${text}/dashboard`}>{text}</Link>) },
  { title: '书评类型名称', debugtype: 'string', dataIndex: 'bookReviewTypeTitle', width: '8' },
  { title: '书评类型描述', debugtype: 'string', dataIndex: 'bookReviewTypeDescription', width: '13' },
  { title: '图书管理', dataIndex: 'bookManagement', render: (text, record) => (record.bookManagement ? record.bookManagement.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  bookReviewTypeTitle: '书评类型名称',
  bookReviewTypeDescription: '书评类型描述',
  bookManagement: '图书管理',

}


const BookReviewTypeBase={menuData,displayColumns,fieldLabels}
export default BookReviewTypeBase



