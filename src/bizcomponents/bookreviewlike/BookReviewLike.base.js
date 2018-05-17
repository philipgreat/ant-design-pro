
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"这样的书评", menuFor: "bookReviewLike",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '书评', dataIndex: 'bookReview', render: (text, record) => (record.bookReview ? record.bookReview.displayName : '暂无') },
  { title: '回答者', dataIndex: 'replier', render: (text, record) => (record.replier ? record.replier.displayName : '暂无') },
  { title: '如发布日期时间', dataIndex: 'likePublishDatetime', render: (text, record) => moment(record.likePublishDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '喜欢的类型', debugtype: 'string', dataIndex: 'likeType', width: '6' },
  { title: '当前状态', debugtype: 'string', dataIndex: 'currentStatus', width: '17' },

]

const fieldLabels = {
  id: 'ID',
  bookReview: '书评',
  replier: '回答者',
  likePublishDatetime: '如发布日期时间',
  likeType: '喜欢的类型',
  currentStatus: '当前状态',

}


const BookReviewLikeBase={menuData,displayColumns,fieldLabels}
export default BookReviewLikeBase



