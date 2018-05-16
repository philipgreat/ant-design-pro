
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"SEC的用户", menuFor: "secUser",
  		subItems: [
  {name: 'userAppList', displayName:'用户应用程序'},
  {name: 'loginHistoryList', displayName:'登录历史'},
  
  		],
}



const displayColumns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/secUser/${text}/dashboard`}>{text}</Link>) },
  { title: '登录', debugtype: 'string', dataIndex: 'login', width: '9' },
  { title: '手机', debugtype: 'string_china_mobile_phone', dataIndex: 'mobile', width: '15' },
  { title: '电子邮件', debugtype: 'string_email', dataIndex: 'email', width: '23' },
  { title: 'PWD', debugtype: 'string_password', dataIndex: 'pwd', width: '11' },
  { title: '验证码', debugtype: 'int', dataIndex: 'verificationCode', width: '11' },
  { title: '验证码过期', dataIndex: 'verificationCodeExpire', render: (text, record) => moment(record.verificationCodeExpire).format('YYYY-MM-DD HH:mm:ss') },
  { title: '最后登录时间', dataIndex: 'lastLoginTime', render: (text, record) => moment(record.lastLoginTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '域', dataIndex: 'domain', render: (text, record) => (record.domain ? record.domain.displayName : '暂无') },
  { title: '屏蔽', dataIndex: 'blocking', render: (text, record) => (record.blocking ? record.blocking.displayName : '暂无') },
  { title: '当前状态', debugtype: 'string', dataIndex: 'currentStatus', width: '11' },

]

const fieldLabels = {
  id: '序号',
  login: '登录',
  mobile: '手机',
  email: '电子邮件',
  pwd: 'PWD',
  verificationCode: '验证码',
  verificationCodeExpire: '验证码过期',
  lastLoginTime: '最后登录时间',
  domain: '域',
  blocking: '屏蔽',
  currentStatus: '当前状态',

}


const SecUserBase={menuData,displayColumns,fieldLabels}
export default SecUserBase



