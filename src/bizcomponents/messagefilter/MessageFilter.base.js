
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"消息过滤", menuFor: "messageFilter",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '8' },
  { title: '消息计数', debugtype: 'int', dataIndex: 'messageCount', width: '9' },
  { title: '过滤器健值', debugtype: 'string', dataIndex: 'filterKey', width: '18' },
  { title: '链接网址', debugtype: 'string', dataIndex: 'linkUrl', width: '40' },
  { title: '用户', dataIndex: 'user', render: (text, record) => (record.user ? record.user.displayName : '暂无') },

]

const fieldLabels = {
  id: '序号',
  name: '名称',
  messageCount: '消息计数',
  filterKey: '过滤器健值',
  linkUrl: '链接网址',
  user: '用户',

}


const MessageFilterBase={menuData,displayColumns,fieldLabels}
export default MessageFilterBase



