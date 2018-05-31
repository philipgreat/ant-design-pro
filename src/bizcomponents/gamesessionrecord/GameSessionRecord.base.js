
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"游戏场次记录", menuFor: "gameSessionRecord",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '门店名字', debugtype: 'string', dataIndex: 'storeName', width: '7' },
  { title: '游戏名称', debugtype: 'string', dataIndex: 'gameName', width: '9' },
  { title: '游戏场次日期', dataIndex: 'gameSessionDatetime', render: (text, record) => moment(record.gameSessionDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '游戏场次名称', debugtype: 'string', dataIndex: 'gameSessionName', width: '9' },
  { title: '结果', debugtype: 'string', dataIndex: 'result', width: '6' },
  { title: '玩家数', debugtype: 'int', dataIndex: 'playerCount', width: '6' },
  { title: '计划开始时间', dataIndex: 'planStartTime', render: (text, record) => moment(record.planStartTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '计划结束时间', dataIndex: 'planEndTime', render: (text, record) => moment(record.planEndTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '实际开始时间', dataIndex: 'actualStartTime', render: (text, record) => moment(record.actualStartTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '实际结束时间', dataIndex: 'actualEndTime', render: (text, record) => moment(record.actualEndTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '是否有Bug', dataIndex: 'bugFound', render: (text, record) => (record.bugFound ? '是' : '否') },
  { title: '游戏场次运行记录', debugtype: 'string', dataIndex: 'gameSessionComment', width: '6' },
  { title: '门店', dataIndex: 'store', render: (text, record) => (record.store ? record.store.displayName : '暂无') },
  { title: '游戏', dataIndex: 'game', render: (text, record) => (record.game ? record.game.displayName : '暂无') },
  { title: '游戏场次', dataIndex: 'gameSession', render: (text, record) => (record.gameSession ? record.gameSession.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  storeName: '门店名字',
  gameName: '游戏名称',
  gameSessionDatetime: '游戏场次日期',
  gameSessionName: '游戏场次名称',
  result: '结果',
  playerCount: '玩家数',
  planStartTime: '计划开始时间',
  planEndTime: '计划结束时间',
  actualStartTime: '实际开始时间',
  actualEndTime: '实际结束时间',
  bugFound: '是否有Bug',
  gameSessionComment: '游戏场次运行记录',
  store: '门店',
  game: '游戏',
  gameSession: '游戏场次',

}


const GameSessionRecordBase={menuData,displayColumns,fieldLabels}
export default GameSessionRecordBase



