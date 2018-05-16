
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"任务屏蔽", menuFor: "taskHiding",
  		subItems: [
  {name: 'taskList', displayName:'任务'},
  
  		],
}



const displayColumns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/taskHiding/${text}/dashboard`}>{text}</Link>) },
  { title: '谁', debugtype: 'string_current_user_name', dataIndex: 'who', width: '21' },
  { title: '行动时间', dataIndex: 'actionTime', render: (text, record) => moment(record.actionTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '评论', debugtype: 'string', dataIndex: 'comment', width: '8' },

]

const fieldLabels = {
  id: '序号',
  who: '谁',
  actionTime: '行动时间',
  comment: '评论',

}


const TaskHidingBase={menuData,displayColumns,fieldLabels}
export default TaskHidingBase



