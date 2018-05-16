
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"任务分配", menuFor: "taskAssigment",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '任务', dataIndex: 'task', render: (text, record) => (record.task ? record.task.displayName : '暂无') },
  { title: '受让人', dataIndex: 'assignee', render: (text, record) => (record.assignee ? record.assignee.displayName : '暂无') },
  { title: '分配时间', dataIndex: 'assignTime', render: (text, record) => moment(record.assignTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '评论', debugtype: 'string', dataIndex: 'comments', width: '17' },

]

const fieldLabels = {
  id: '序号',
  task: '任务',
  assignee: '受让人',
  assignTime: '分配时间',
  comments: '评论',

}


const TaskAssigmentBase={menuData,displayColumns,fieldLabels}
export default TaskAssigmentBase



