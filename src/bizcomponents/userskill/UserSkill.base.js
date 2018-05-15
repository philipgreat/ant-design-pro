
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"用户技能", menuFor: "userSkill",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '技能名称', debugtype: 'string', dataIndex: 'skillName', width: '17' },
  { title: '用户', dataIndex: 'user', render: (text, record) => (record.user ? record.user.displayName : '暂无') },

]

const fieldLabels = {
  id: '序号',
  skillName: '技能名称',
  user: '用户',

}


const UserSkillBase={menuData,displayColumns,fieldLabels}
export default UserSkillBase



