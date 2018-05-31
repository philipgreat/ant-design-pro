
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"门店", menuFor: "store",
  		subItems: [
  {name: 'gameCategoryList', displayName:'游戏类别'},
  {name: 'gameList', displayName:'游戏'},
  {name: 'gameSessionRecordList', displayName:'游戏场次记录'},
  {name: 'rearrangeSessionTicketRecordListAsSourceStore', displayName:'换场记录'},
  {name: 'rearrangeSessionTicketRecordListAsTargetStore', displayName:'换场记录'},
  {name: 'onlineOrderList', displayName:'线上订单号'},
  {name: 'onlineOrderRedeemHistoryList', displayName:'线上订单兑换记录'},
  {name: 'ticketPrintingList', displayName:'门票打印记录'},
  {name: 'ticketPrintingHistoryList', displayName:'门票打印记录'},
  {name: 'offlineStoreOrderList', displayName:'线下门店订单'},
  {name: 'employeeList', displayName:'员工'},
  {name: 'adList', displayName:'广告'},
  {name: 'bannerList', displayName:'横幅'},
  {name: 'newsList', displayName:'新闻'},
  {name: 'campaignList', displayName:'运动'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/store/${text}/dashboard`}>{text}</Link>) },
  { title: '门店名字', debugtype: 'string', dataIndex: 'storeName', width: '15' },
  { title: '地址', debugtype: 'string', dataIndex: 'address', width: '28' },
  { title: '纬度', debugtype: 'double', dataIndex: 'latitude', width: '13' },
  { title: '经度', debugtype: 'double', dataIndex: 'longitude', width: '14' },
  { title: '开放时间', debugtype: 'string', dataIndex: 'openningHours', width: '15' },
  { title: '状态', debugtype: 'string', dataIndex: 'status', width: '7' },
  { title: '城市', dataIndex: 'city', render: (text, record) => (record.city ? record.city.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  storeName: '门店名字',
  address: '地址',
  latitude: '纬度',
  longitude: '经度',
  openningHours: '开放时间',
  status: '状态',
  city: '城市',

}


const StoreBase={menuData,displayColumns,fieldLabels}
export default StoreBase



