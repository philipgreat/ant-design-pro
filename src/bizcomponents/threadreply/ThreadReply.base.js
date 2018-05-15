
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"跟帖回复", menuFor: "threadReply",
  		subItems: [
  {name: 'threadReplyLikeList', displayName:'跟帖回复点赞'},
  
  		],
}



const displayColumns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/threadReply/${text}/dashboard`}>{text}</Link>) },
  { title: '回复时间', dataIndex: 'replyTime', render: (text, record) => moment(record.replyTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '内容', debugtype: 'string', dataIndex: 'content', width: '22' },
  { title: '应答者', dataIndex: 'replier', render: (text, record) => (record.replier ? record.replier.displayName : '暂无') },
  { title: '主贴', dataIndex: 'thread', render: (text, record) => (record.thread ? record.thread.displayName : '暂无') },
  { title: '当前用户已点赞', dataIndex: 'likeByCurrentUser', render: (text, record) => (record.likeByCurrentUser ? '是' : '否') },

]

const fieldLabels = {
  id: '序号',
  replyTime: '回复时间',
  content: '内容',
  replier: '应答者',
  thread: '主贴',
  likeByCurrentUser: '当前用户已点赞',

}


const ThreadReplyBase={menuData,displayColumns,fieldLabels}
export default ThreadReplyBase



