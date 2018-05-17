
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"平台账户", menuFor: "platformAccount",
  		subItems: [
  {name: 'platformAccountDetailsList', displayName:'平台账户信息'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/platformAccount/${text}/dashboard`}>{text}</Link>) },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '10' },
  { title: '量', dataIndex: 'amount', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '平台', dataIndex: 'platform', render: (text, record) => (record.platform ? record.platform.displayName : '暂无') },
  { title: '账户管理', dataIndex: 'accountManagement', render: (text, record) => (record.accountManagement ? record.accountManagement.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  name: '名称',
  amount: '量',
  platform: '平台',
  accountManagement: '账户管理',

}


const PlatformAccountBase={menuData,displayColumns,fieldLabels}
export default PlatformAccountBase



