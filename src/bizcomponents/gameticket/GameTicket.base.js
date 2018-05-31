
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"游戏门票", menuFor: "gameTicket",
  		subItems: [
  {name: 'onlineOrderList', displayName:'线上订单号'},
  {name: 'offlineStoreOrderList', displayName:'线下门店订单'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/gameTicket/${text}/dashboard`}>{text}</Link>) },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '12' },
  { title: '人数', debugtype: 'int', dataIndex: 'count', width: '5' },
  { title: '是否是场次票', dataIndex: 'sessionTicket', render: (text, record) => (record.sessionTicket ? '是' : '否') },
  { title: '是否是多人票', dataIndex: 'multiplePlayerTicket', render: (text, record) => (record.multiplePlayerTicket ? '是' : '否') },
  { title: '是否是假期票', dataIndex: 'vacationTicket', render: (text, record) => (record.vacationTicket ? '是' : '否') },
  { title: '是否是学生票', dataIndex: 'studentTicket', render: (text, record) => (record.studentTicket ? '是' : '否') },
  { title: '是否是快速票', dataIndex: 'fastTicket', render: (text, record) => (record.fastTicket ? '是' : '否') },
  { title: '原价', dataIndex: 'listPrice', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '售价', dataIndex: 'salePrice', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '游戏场次', dataIndex: 'gameSession', render: (text, record) => (record.gameSession ? record.gameSession.displayName : '暂无') },
  { title: '游戏', dataIndex: 'game', render: (text, record) => (record.game ? record.game.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  name: '名称',
  count: '人数',
  sessionTicket: '是否是场次票',
  multiplePlayerTicket: '是否是多人票',
  vacationTicket: '是否是假期票',
  studentTicket: '是否是学生票',
  fastTicket: '是否是快速票',
  listPrice: '原价',
  salePrice: '售价',
  gameSession: '游戏场次',
  game: '游戏',

}


const GameTicketBase={menuData,displayColumns,fieldLabels}
export default GameTicketBase



