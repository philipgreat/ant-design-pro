
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"客户账户", menuFor: "customerAccount",
  		subItems: [
  {name: 'customerAccountDetailsList', displayName:'客户账户信息'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/customerAccount/${text}/dashboard`}>{text}</Link>) },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '10' },
  { title: '账户', dataIndex: 'account', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '客户', dataIndex: 'customer', render: (text, record) => (record.customer ? record.customer.displayName : '暂无') },
  { title: '账户管理', dataIndex: 'accountManagement', render: (text, record) => (record.accountManagement ? record.accountManagement.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  name: '名称',
  account: '账户',
  customer: '客户',
  accountManagement: '账户管理',

}


const CustomerAccountBase={menuData,displayColumns,fieldLabels}
export default CustomerAccountBase



