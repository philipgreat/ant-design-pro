
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"任务过滤器", menuFor: "taskFilter",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '8' },
  { title: '过滤器健值', debugtype: 'string', dataIndex: 'filterKey', width: '25' },
  { title: '链接网址', debugtype: 'string', dataIndex: 'linkUrl', width: '40' },
  { title: '任务页面', dataIndex: 'taskPage', render: (text, record) => (record.taskPage ? record.taskPage.displayName : '暂无') },
  { title: '主页', dataIndex: 'homePage', render: (text, record) => (record.homePage ? record.homePage.displayName : '暂无') },

]

const fieldLabels = {
  id: '序号',
  name: '名称',
  filterKey: '过滤器健值',
  linkUrl: '链接网址',
  taskPage: '任务页面',
  homePage: '主页',

}


const TaskFilterBase={menuData,displayColumns,fieldLabels}
export default TaskFilterBase



