
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"回复任务", menuFor: "taskReply",
  		subItems: [
  {name: 'taskReplyLikeList', displayName:'任务回复点赞'},
  
  		],
}



const displayColumns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/taskReply/${text}/dashboard`}>{text}</Link>) },
  { title: '回复时间', dataIndex: 'replyTime', render: (text, record) => moment(record.replyTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '内容', debugtype: 'string', dataIndex: 'content', width: '22' },
  { title: '应答者', dataIndex: 'replier', render: (text, record) => (record.replier ? record.replier.displayName : '暂无') },
  { title: '任务', dataIndex: 'task', render: (text, record) => (record.task ? record.task.displayName : '暂无') },
  { title: '最佳答案设置', dataIndex: 'bestAnswerSetting', render: (text, record) => (record.bestAnswerSetting ? record.bestAnswerSetting.displayName : '暂无') },
  { title: '当前用户已点赞', dataIndex: 'likeByCurrentUser', render: (text, record) => (record.likeByCurrentUser ? '是' : '否') },
  { title: '当前状态', debugtype: 'string', dataIndex: 'currentStatus', width: '19' },

]

const fieldLabels = {
  id: '序号',
  replyTime: '回复时间',
  content: '内容',
  replier: '应答者',
  task: '任务',
  bestAnswerSetting: '最佳答案设置',
  likeByCurrentUser: '当前用户已点赞',
  currentStatus: '当前状态',

}


const TaskReplyBase={menuData,displayColumns,fieldLabels}
export default TaskReplyBase



