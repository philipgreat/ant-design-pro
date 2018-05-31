
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"门票打印记录", menuFor: "ticketPrintingHistory",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '游戏名称', debugtype: 'string', dataIndex: 'gameName', width: '14' },
  { title: '游戏场次日期', dataIndex: 'gameSessionDatetime', render: (text, record) => moment(record.gameSessionDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '游戏场次名称', debugtype: 'string', dataIndex: 'gameSessionName', width: '9' },
  { title: '门票打印记录', dataIndex: 'ticketPrinting', render: (text, record) => (record.ticketPrinting ? record.ticketPrinting.displayName : '暂无') },
  { title: '打印日期', dataIndex: 'printDatetime', render: (text, record) => moment(record.printDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '操作员', dataIndex: 'operator', render: (text, record) => (record.operator ? record.operator.displayName : '暂无') },
  { title: '门店', dataIndex: 'store', render: (text, record) => (record.store ? record.store.displayName : '暂无') },
  { title: '游戏', dataIndex: 'game', render: (text, record) => (record.game ? record.game.displayName : '暂无') },
  { title: '游戏场次', dataIndex: 'gameSession', render: (text, record) => (record.gameSession ? record.gameSession.displayName : '暂无') },
  { title: '当前状态', debugtype: 'string', dataIndex: 'currentStatus', width: '18' },

]

const fieldLabels = {
  id: 'ID',
  gameName: '游戏名称',
  gameSessionDatetime: '游戏场次日期',
  gameSessionName: '游戏场次名称',
  ticketPrinting: '门票打印记录',
  printDatetime: '打印日期',
  operator: '操作员',
  store: '门店',
  game: '游戏',
  gameSession: '游戏场次',
  currentStatus: '当前状态',

}


const TicketPrintingHistoryBase={menuData,displayColumns,fieldLabels}
export default TicketPrintingHistoryBase



