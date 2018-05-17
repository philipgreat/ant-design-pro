
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"车间检查", menuFor: "workshopReview",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '审查内容', debugtype: 'string', dataIndex: 'reviewContent', width: '16' },
  { title: '车间', dataIndex: 'workshop', render: (text, record) => (record.workshop ? record.workshop.displayName : '暂无') },
  { title: '评论家', dataIndex: 'reviewer', render: (text, record) => (record.reviewer ? record.reviewer.displayName : '暂无') },
  { title: '评论发布日期时间', dataIndex: 'reviewPublishDatetime', render: (text, record) => moment(record.reviewPublishDatetime).format('YYYY-MM-DD HH:mm:ss') },

]

const fieldLabels = {
  id: 'ID',
  reviewContent: '审查内容',
  workshop: '车间',
  reviewer: '评论家',
  reviewPublishDatetime: '评论发布日期时间',

}


const WorkshopReviewBase={menuData,displayColumns,fieldLabels}
export default WorkshopReviewBase



