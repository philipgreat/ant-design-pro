
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"账户管理", menuFor: "accountManagement",
  		subItems: [
  {name: 'memberAccountRechargeProductList', displayName:'会员帐户充电产品'},
  {name: 'platformAccountList', displayName:'平台账户'},
  {name: 'fundationAccountList', displayName:'基金账户'},
  {name: 'storeAccountList', displayName:'存储账户'},
  {name: 'customerAccountList', displayName:'客户账户'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/accountManagement/${text}/dashboard`}>{text}</Link>) },
  { title: '总结', debugtype: 'string', dataIndex: 'summary', width: '10' },
  { title: '书共享平台', dataIndex: 'bookSharingPlatform', render: (text, record) => (record.bookSharingPlatform ? record.bookSharingPlatform.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  summary: '总结',
  bookSharingPlatform: '书共享平台',

}


const AccountManagementBase={menuData,displayColumns,fieldLabels}
export default AccountManagementBase



