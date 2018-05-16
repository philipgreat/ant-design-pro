
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"用户消息", menuFor: "userMessage",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '标题', debugtype: 'string', dataIndex: 'title', width: '10' },
  { title: '信息的关键', debugtype: 'string', dataIndex: 'messageKey', width: '18' },
  { title: '接收者', dataIndex: 'receiver', render: (text, record) => (record.receiver ? record.receiver.displayName : '暂无') },
  { title: '内容', debugtype: 'string', dataIndex: 'content', width: '14' },
  { title: '链接网址', debugtype: 'string', dataIndex: 'linkUrl', width: '31' },
  { title: '消息的时间', dataIndex: 'messageTime', render: (text, record) => moment(record.messageTime).format('YYYY-MM-DD HH:mm:ss') },

]

const fieldLabels = {
  id: '序号',
  title: '标题',
  messageKey: '信息的关键',
  receiver: '接收者',
  content: '内容',
  linkUrl: '链接网址',
  messageTime: '消息的时间',

}


const UserMessageBase={menuData,displayColumns,fieldLabels}
export default UserMessageBase



