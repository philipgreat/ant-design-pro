
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"游戏玩家记录", menuFor: "gamePlayerRecord",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '昵称', debugtype: 'string', dataIndex: 'playerNickName', width: '8' },
  { title: '游戏名称', debugtype: 'string', dataIndex: 'gameName', width: '9' },
  { title: '游戏场次日期', dataIndex: 'gameSessionDatetime', render: (text, record) => moment(record.gameSessionDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '游戏场次名称', debugtype: 'string', dataIndex: 'gameSessionName', width: '9' },
  { title: '积分', debugtype: 'int', dataIndex: 'gameScore', width: '7' },
  { title: '玩家', dataIndex: 'player', render: (text, record) => (record.player ? record.player.displayName : '暂无') },
  { title: '游戏', dataIndex: 'game', render: (text, record) => (record.game ? record.game.displayName : '暂无') },
  { title: '游戏场次', dataIndex: 'gameSession', render: (text, record) => (record.gameSession ? record.gameSession.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  playerNickName: '昵称',
  gameName: '游戏名称',
  gameSessionDatetime: '游戏场次日期',
  gameSessionName: '游戏场次名称',
  gameScore: '积分',
  player: '玩家',
  game: '游戏',
  gameSession: '游戏场次',

}


const GamePlayerRecordBase={menuData,displayColumns,fieldLabels}
export default GamePlayerRecordBase



