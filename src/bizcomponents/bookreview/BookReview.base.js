
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"书评", menuFor: "bookReview",
  		subItems: [
  {name: 'bookReviewLikeList', displayName:'这样的书评'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/bookReview/${text}/dashboard`}>{text}</Link>) },
  { title: '书的信息', dataIndex: 'bookInfo', render: (text, record) => (record.bookInfo ? record.bookInfo.displayName : '暂无') },
  { title: '书副本', dataIndex: 'bookCopy', render: (text, record) => (record.bookCopy ? record.bookCopy.displayName : '暂无') },
  { title: '书评类型', dataIndex: 'bookReviewType', render: (text, record) => (record.bookReviewType ? record.bookReviewType.displayName : '暂无') },
  { title: '评论家', dataIndex: 'reviewer', render: (text, record) => (record.reviewer ? record.reviewer.displayName : '暂无') },
  { title: '评论发布日期时间', dataIndex: 'reviewPublishDatetime', render: (text, record) => moment(record.reviewPublishDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '审查内容', debugtype: 'string', dataIndex: 'reviewContent', width: '13' },
  { title: '回顾Image1', dataIndex: 'reviewImage1', render: (text, record) => <ImagePreview imageTitle="回顾Image1" imageLocation={record.reviewImage1} /> },
  { title: '回顾Image2', dataIndex: 'reviewImage2', render: (text, record) => <ImagePreview imageTitle="回顾Image2" imageLocation={record.reviewImage2} /> },
  { title: '回顾Image3', dataIndex: 'reviewImage3', render: (text, record) => <ImagePreview imageTitle="回顾Image3" imageLocation={record.reviewImage3} /> },
  { title: '回顾Image4', dataIndex: 'reviewImage4', render: (text, record) => <ImagePreview imageTitle="回顾Image4" imageLocation={record.reviewImage4} /> },
  { title: '回顾Image5', dataIndex: 'reviewImage5', render: (text, record) => <ImagePreview imageTitle="回顾Image5" imageLocation={record.reviewImage5} /> },

]

const fieldLabels = {
  id: 'ID',
  bookInfo: '书的信息',
  bookCopy: '书副本',
  bookReviewType: '书评类型',
  reviewer: '评论家',
  reviewPublishDatetime: '评论发布日期时间',
  reviewContent: '审查内容',
  reviewImage1: '回顾Image1',
  reviewImage2: '回顾Image2',
  reviewImage3: '回顾Image3',
  reviewImage4: '回顾Image4',
  reviewImage5: '回顾Image5',

}


const BookReviewBase={menuData,displayColumns,fieldLabels}
export default BookReviewBase



