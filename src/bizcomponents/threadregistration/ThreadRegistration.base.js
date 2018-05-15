
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"活动注册", menuFor: "threadRegistration",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '主贴', dataIndex: 'thread', render: (text, record) => (record.thread ? record.thread.displayName : '暂无') },
  { title: '参与者', dataIndex: 'participant', render: (text, record) => (record.participant ? record.participant.displayName : '暂无') },
  { title: '登记时间', dataIndex: 'registerTime', render: (text, record) => moment(record.registerTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '评论', debugtype: 'string', dataIndex: 'comments', width: '14' },

]

const fieldLabels = {
  id: '序号',
  thread: '主贴',
  participant: '参与者',
  registerTime: '登记时间',
  comments: '评论',

}


const ThreadRegistrationBase={menuData,displayColumns,fieldLabels}
export default ThreadRegistrationBase



