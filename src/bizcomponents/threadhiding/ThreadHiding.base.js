
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"线程隐藏", menuFor: "threadHiding",
  		subItems: [
  {name: 'threadList', displayName:'主贴'},
  
  		],
}



const displayColumns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/threadHiding/${text}/dashboard`}>{text}</Link>) },
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


const ThreadHidingBase={menuData,displayColumns,fieldLabels}
export default ThreadHidingBase



