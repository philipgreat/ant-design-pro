
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"存储账户", menuFor: "storeAccount",
  		subItems: [
  {name: 'storeAccountDetailsList', displayName:'存储帐户详细信息'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/storeAccount/${text}/dashboard`}>{text}</Link>) },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '12' },
  { title: '量', dataIndex: 'amount', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '商店', dataIndex: 'store', render: (text, record) => (record.store ? record.store.displayName : '暂无') },
  { title: '账户管理', dataIndex: 'accountManagement', render: (text, record) => (record.accountManagement ? record.accountManagement.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  name: '名称',
  amount: '量',
  store: '商店',
  accountManagement: '账户管理',

}


const StoreAccountBase={menuData,displayColumns,fieldLabels}
export default StoreAccountBase



