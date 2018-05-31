
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"游戏场次", menuFor: "gameSession",
  		subItems: [
  {name: 'gameSessionRecordList', displayName:'游戏场次记录'},
  {name: 'gamePlayerRecordList', displayName:'游戏玩家记录'},
  {name: 'rearrangeSessionTicketRecordListAsSourceGameSession', displayName:'换场记录'},
  {name: 'rearrangeSessionTicketRecordListAsTargetGameSession', displayName:'换场记录'},
  {name: 'gameTokenList', displayName:'游戏Token'},
  {name: 'gameTicketList', displayName:'游戏门票'},
  {name: 'onlineOrderList', displayName:'线上订单号'},
  {name: 'ticketPrintingHistoryList', displayName:'门票打印记录'},
  {name: 'offlineStoreOrderList', displayName:'线下门店订单'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/gameSession/${text}/dashboard`}>{text}</Link>) },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '9' },
  { title: '开始时间', dataIndex: 'startTime', render: (text, record) => moment(record.startTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '结束时间', dataIndex: 'endTime', render: (text, record) => moment(record.endTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '场次开始后可售票时长', debugtype: 'int', dataIndex: 'sessionReservation', width: '6' },
  { title: '余票', debugtype: 'int', dataIndex: 'inventory', width: '5' },
  { title: '状态', debugtype: 'string', dataIndex: 'status', width: '6' },
  { title: '游戏', dataIndex: 'game', render: (text, record) => (record.game ? record.game.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  name: '名称',
  startTime: '开始时间',
  endTime: '结束时间',
  sessionReservation: '场次开始后可售票时长',
  inventory: '余票',
  status: '状态',
  game: '游戏',

}


const GameSessionBase={menuData,displayColumns,fieldLabels}
export default GameSessionBase



