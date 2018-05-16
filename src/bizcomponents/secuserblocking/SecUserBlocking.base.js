
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"SEC用户阻塞", menuFor: "secUserBlocking",
  		subItems: [
  {name: 'secUserList', displayName:'SEC的用户'},
  
  		],
}



const displayColumns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/secUserBlocking/${text}/dashboard`}>{text}</Link>) },
  { title: '谁', debugtype: 'string', dataIndex: 'who', width: '17' },
  { title: '屏蔽时间', dataIndex: 'blockTime', render: (text, record) => moment(record.blockTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '评论', debugtype: 'string', dataIndex: 'comments', width: '28' },

]

const fieldLabels = {
  id: '序号',
  who: '谁',
  blockTime: '屏蔽时间',
  comments: '评论',

}


const SecUserBlockingBase={menuData,displayColumns,fieldLabels}
export default SecUserBlockingBase



