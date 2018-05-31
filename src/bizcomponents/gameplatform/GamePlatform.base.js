
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"游戏平台", menuFor: "gamePlatform",
  		subItems: [
  {name: 'cityList', displayName:'城市'},
  {name: 'onlineOrderList', displayName:'线上订单号'},
  {name: 'customerList', displayName:'客户'},
  {name: 'couponList', displayName:'优惠券'},
  {name: 'adList', displayName:'广告'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/gamePlatform/${text}/dashboard`}>{text}</Link>) },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '8' },
  { title: '描述', debugtype: 'string', dataIndex: 'description', width: '8' },

]

const fieldLabels = {
  id: 'ID',
  name: '名称',
  description: '描述',

}


const GamePlatformBase={menuData,displayColumns,fieldLabels}
export default GamePlatformBase



