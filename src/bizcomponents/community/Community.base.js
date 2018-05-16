
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"社区", menuFor: "community",
  		subItems: [
  {name: 'invitationCodeList', displayName:'邀请码'},
  {name: 'homePageList', displayName:'主页'},
  {name: 'encyclopediaItemList', displayName:'百科全书条目'},
  {name: 'taskPageList', displayName:'任务页面'},
  {name: 'communityUserList', displayName:'社区用户'},
  {name: 'taskList', displayName:'任务'},
  {name: 'groupPageList', displayName:'群组页面'},
  {name: 'threadList', displayName:'主贴'},
  
  		],
}



const displayColumns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/community/${text}/dashboard`}>{text}</Link>) },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '10' },
  { title: '描述', debugtype: 'string', dataIndex: 'description', width: '10' },

]

const fieldLabels = {
  id: '序号',
  name: '名称',
  description: '描述',

}


const CommunityBase={menuData,displayColumns,fieldLabels}
export default CommunityBase



