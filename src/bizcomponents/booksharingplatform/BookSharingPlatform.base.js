
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"书共享平台", menuFor: "bookSharingPlatform",
  		subItems: [
  {name: 'accountManagementList', displayName:'账户管理'},
  {name: 'provinceList', displayName:'省'},
  {name: 'bookManagementList', displayName:'图书管理'},
  {name: 'memberServiceManagementList', displayName:'会员服务管理'},
  {name: 'mainOrderList', displayName:'主订单'},
  {name: 'bookList', displayName:'书'},
  {name: 'platformAccountList', displayName:'平台账户'},
  {name: 'fundationAccountList', displayName:'基金账户'},
  {name: 'storeList', displayName:'商店'},
  {name: 'customerList', displayName:'客户'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/bookSharingPlatform/${text}/dashboard`}>{text}</Link>) },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '8' },
  { title: '显示名称', debugtype: 'string', dataIndex: 'displayName', width: '15' },
  { title: '描述', debugtype: 'string', dataIndex: 'description', width: '12' },
  { title: 'desc', debugtype: 'string', dataIndex: 'desc', width: '10' },

]

const fieldLabels = {
  id: 'ID',
  name: '名称',
  displayName: '显示名称',
  description: '描述',
  desc: 'desc',

}


const BookSharingPlatformBase={menuData,displayColumns,fieldLabels}
export default BookSharingPlatformBase



