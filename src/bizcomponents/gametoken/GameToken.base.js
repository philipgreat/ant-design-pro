
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"游戏Token", menuFor: "gameToken",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: 'Token的内容', debugtype: 'string_url', dataIndex: 'tokenContent', width: '60' },
  { title: 'NFC ID', debugtype: 'string', dataIndex: 'nFCID', width: '14' },
  { title: '游戏场次', dataIndex: 'gameSession', render: (text, record) => (record.gameSession ? record.gameSession.displayName : '暂无') },
  { title: '玩家', dataIndex: 'player', render: (text, record) => (record.player ? record.player.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  tokenContent: 'Token的内容',
  nFCID: 'NFC ID',
  gameSession: '游戏场次',
  player: '玩家',

}


const GameTokenBase={menuData,displayColumns,fieldLabels}
export default GameTokenBase



