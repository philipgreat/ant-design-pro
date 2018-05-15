
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"主贴点赞", menuFor: "threadLike",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '点赞时间', dataIndex: 'likeTime', render: (text, record) => moment(record.likeTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '应答者', dataIndex: 'replier', render: (text, record) => (record.replier ? record.replier.displayName : '暂无') },
  { title: '主贴', dataIndex: 'thread', render: (text, record) => (record.thread ? record.thread.displayName : '暂无') },

]

const fieldLabels = {
  id: '序号',
  likeTime: '点赞时间',
  replier: '应答者',
  thread: '主贴',

}


const ThreadLikeBase={menuData,displayColumns,fieldLabels}
export default ThreadLikeBase



