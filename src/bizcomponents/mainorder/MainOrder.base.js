
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"主订单", menuFor: "mainOrder",
  		subItems: [
  {name: 'lineItemList', displayName:'行项目'},
  {name: 'mainOrderPaymentList', displayName:'主要订单付款'},
  {name: 'platformAccountDetailsList', displayName:'平台账户信息'},
  {name: 'fundationAccountDetailsList', displayName:'基金账户信息'},
  {name: 'storeAccountDetailsList', displayName:'存储帐户详细信息'},
  {name: 'customerAccountDetailsList', displayName:'客户账户信息'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/mainOrder/${text}/dashboard`}>{text}</Link>) },
  { title: '主要订单状态', debugtype: 'string', dataIndex: 'mainOrderStatus', width: '7' },
  { title: '书共享平台', dataIndex: 'bookSharingPlatform', render: (text, record) => (record.bookSharingPlatform ? record.bookSharingPlatform.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  mainOrderStatus: '主要订单状态',
  bookSharingPlatform: '书共享平台',

}


const MainOrderBase={menuData,displayColumns,fieldLabels}
export default MainOrderBase



