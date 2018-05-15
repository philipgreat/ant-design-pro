
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"车间等", menuFor: "workshopLike",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '车间', dataIndex: 'workshop', render: (text, record) => (record.workshop ? record.workshop.displayName : '暂无') },
  { title: '回答者', dataIndex: 'replier', render: (text, record) => (record.replier ? record.replier.displayName : '暂无') },
  { title: '如发布日期时间', dataIndex: 'likePublishDatetime', render: (text, record) => moment(record.likePublishDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '喜欢的类型', debugtype: 'string', dataIndex: 'likeType', width: '6' },

]

const fieldLabels = {
  id: 'ID',
  workshop: '车间',
  replier: '回答者',
  likePublishDatetime: '如发布日期时间',
  likeType: '喜欢的类型',

}


const WorkshopLikeBase={menuData,displayColumns,fieldLabels}
export default WorkshopLikeBase



