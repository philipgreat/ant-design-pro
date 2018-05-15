
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"群组页面", menuFor: "groupPage",
  		subItems: [
  {name: 'groupFilterList', displayName:'群组过滤器'},
  {name: 'threadList', displayName:'主贴'},
  
  		],
}



const displayColumns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/groupPage/${text}/dashboard`}>{text}</Link>) },
  { title: '标题', debugtype: 'string', dataIndex: 'title', width: '7' },
  { title: '目前的组名', debugtype: 'string', dataIndex: 'currentGroupName', width: '9' },
  { title: '社区', dataIndex: 'community', render: (text, record) => (record.community ? record.community.displayName : '暂无') },

]

const fieldLabels = {
  id: '序号',
  title: '标题',
  currentGroupName: '目前的组名',
  community: '社区',

}


const GroupPageBase={menuData,displayColumns,fieldLabels}
export default GroupPageBase



