
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"用户应用程序", menuFor: "userApp",
  		subItems: [
  {name: 'objectAccessList', displayName:'对象访问'},
  
  		],
}



const displayColumns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/userApp/${text}/dashboard`}>{text}</Link>) },
  { title: '标题', debugtype: 'string', dataIndex: 'title', width: '8' },
  { title: 'SEC的用户', dataIndex: 'secUser', render: (text, record) => (record.secUser ? record.secUser.displayName : '暂无') },
  { title: '应用程序图标', debugtype: 'string', dataIndex: 'appIcon', width: '13' },
  { title: '完全访问', dataIndex: 'fullAccess', render: (text, record) => (record.fullAccess ? '是' : '否') },
  { title: '许可', debugtype: 'string', dataIndex: 'permission', width: '8' },
  { title: '对象类型', debugtype: 'string', dataIndex: 'objectType', width: '17' },
  { title: '对象ID', debugtype: 'string', dataIndex: 'objectId', width: '12' },
  { title: '位置', debugtype: 'string', dataIndex: 'location', width: '16' },

]

const fieldLabels = {
  id: '序号',
  title: '标题',
  secUser: 'SEC的用户',
  appIcon: '应用程序图标',
  fullAccess: '完全访问',
  permission: '许可',
  objectType: '对象类型',
  objectId: '对象ID',
  location: '位置',

}


const UserAppBase={menuData,displayColumns,fieldLabels}
export default UserAppBase



