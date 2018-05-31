
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"员工", menuFor: "employee",
  		subItems: [
  {name: 'onlineOrderRedeemHistoryList', displayName:'线上订单兑换记录'},
  {name: 'ticketPrintingHistoryList', displayName:'门票打印记录'},
  {name: 'offlineStoreOrderList', displayName:'线下门店订单'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/employee/${text}/dashboard`}>{text}</Link>) },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '6' },
  { title: '密码', debugtype: 'int', dataIndex: 'password', width: '10' },
  { title: '门店', dataIndex: 'store', render: (text, record) => (record.store ? record.store.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  name: '名称',
  password: '密码',
  store: '门店',

}


const EmployeeBase={menuData,displayColumns,fieldLabels}
export default EmployeeBase



