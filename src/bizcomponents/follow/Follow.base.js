
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"关注", menuFor: "follow",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '用户', dataIndex: 'user', render: (text, record) => (record.user ? record.user.displayName : '暂无') },
  { title: '关注的社区用户', debugtype: 'string', dataIndex: 'followId', width: '12' },
  { title: '添加时间', dataIndex: 'addingTime', render: (text, record) => moment(record.addingTime).format('YYYY-MM-DD HH:mm:ss') },

]

const fieldLabels = {
  id: '序号',
  user: '用户',
  followId: '关注的社区用户',
  addingTime: '添加时间',

}


const FollowBase={menuData,displayColumns,fieldLabels}
export default FollowBase



