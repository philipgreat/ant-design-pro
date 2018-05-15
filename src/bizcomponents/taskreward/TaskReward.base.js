
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"任务悬赏", menuFor: "taskReward",
  		subItems: [
  {name: 'taskList', displayName:'任务'},
  
  		],
}



const displayColumns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/taskReward/${text}/dashboard`}>{text}</Link>) },
  { title: '谁', debugtype: 'string_current_user_name', dataIndex: 'who', width: '21' },
  { title: '改写点', debugtype: 'int', dataIndex: 'rewordPoint', width: '7' },
  { title: '行动时间', dataIndex: 'actionTime', render: (text, record) => moment(record.actionTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '评论', debugtype: 'string', dataIndex: 'comment', width: '8' },

]

const fieldLabels = {
  id: '序号',
  who: '谁',
  rewordPoint: '改写点',
  actionTime: '行动时间',
  comment: '评论',

}


const TaskRewardBase={menuData,displayColumns,fieldLabels}
export default TaskRewardBase



