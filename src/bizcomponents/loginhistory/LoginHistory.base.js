
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"登录历史", menuFor: "loginHistory",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '登录时间', dataIndex: 'loginTime', render: (text, record) => moment(record.loginTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '从IP', debugtype: 'string', dataIndex: 'fromIp', width: '15' },
  { title: '描述', debugtype: 'string', dataIndex: 'description', width: '8' },
  { title: 'SEC的用户', dataIndex: 'secUser', render: (text, record) => (record.secUser ? record.secUser.displayName : '暂无') },

]

const fieldLabels = {
  id: '序号',
  loginTime: '登录时间',
  fromIp: '从IP',
  description: '描述',
  secUser: 'SEC的用户',

}


const LoginHistoryBase={menuData,displayColumns,fieldLabels}
export default LoginHistoryBase



