
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"任务最佳答案设置", menuFor: "taskBestAnswerSetting",
  		subItems: [
  {name: 'taskReplyList', displayName:'回复任务'},
  
  		],
}



const displayColumns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/taskBestAnswerSetting/${text}/dashboard`}>{text}</Link>) },
  { title: '谁', debugtype: 'string_current_user_name', dataIndex: 'who', width: '21' },
  { title: '设置时间', dataIndex: 'setTime', render: (text, record) => moment(record.setTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '评论', debugtype: 'string', dataIndex: 'comment', width: '8' },

]

const fieldLabels = {
  id: '序号',
  who: '谁',
  setTime: '设置时间',
  comment: '评论',

}


const TaskBestAnswerSettingBase={menuData,displayColumns,fieldLabels}
export default TaskBestAnswerSettingBase



