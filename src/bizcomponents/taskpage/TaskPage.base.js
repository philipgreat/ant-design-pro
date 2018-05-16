
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"任务页面", menuFor: "taskPage",
  		subItems: [
  {name: 'taskFilterList', displayName:'任务过滤器'},
  {name: 'taskList', displayName:'任务'},
  
  		],
}



const displayColumns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/taskPage/${text}/dashboard`}>{text}</Link>) },
  { title: '标题', debugtype: 'string', dataIndex: 'title', width: '6' },
  { title: '当前健值', debugtype: 'string', dataIndex: 'currentKey', width: '25' },
  { title: '社区', dataIndex: 'community', render: (text, record) => (record.community ? record.community.displayName : '暂无') },

]

const fieldLabels = {
  id: '序号',
  title: '标题',
  currentKey: '当前健值',
  community: '社区',

}


const TaskPageBase={menuData,displayColumns,fieldLabels}
export default TaskPageBase



