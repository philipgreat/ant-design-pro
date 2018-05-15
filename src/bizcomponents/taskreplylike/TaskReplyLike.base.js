
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"任务回复点赞", menuFor: "taskReplyLike",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '点赞时间', dataIndex: 'likeTime', render: (text, record) => moment(record.likeTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '应答者', dataIndex: 'replier', render: (text, record) => (record.replier ? record.replier.displayName : '暂无') },
  { title: '回复任务', dataIndex: 'taskReply', render: (text, record) => (record.taskReply ? record.taskReply.displayName : '暂无') },

]

const fieldLabels = {
  id: '序号',
  likeTime: '点赞时间',
  replier: '应答者',
  taskReply: '回复任务',

}


const TaskReplyLikeBase={menuData,displayColumns,fieldLabels}
export default TaskReplyLikeBase



