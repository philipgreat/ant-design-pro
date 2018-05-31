
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"门票打印记录", menuFor: "ticketPrinting",
  		subItems: [
  {name: 'ticketPrintingHistoryList', displayName:'门票打印记录'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/ticketPrinting/${text}/dashboard`}>{text}</Link>) },
  { title: '游戏名称', debugtype: 'string', dataIndex: 'gameName', width: '14' },
  { title: '游戏场次日期', dataIndex: 'gameSessionDatetime', render: (text, record) => moment(record.gameSessionDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '游戏场次名称', debugtype: 'string', dataIndex: 'gameSessionName', width: '9' },
  { title: '门店名字', debugtype: 'string', dataIndex: 'storeName', width: '15' },
  { title: '是否是场次票', dataIndex: 'sessionTicket', render: (text, record) => (record.sessionTicket ? '是' : '否') },
  { title: '是否是假期票', dataIndex: 'vacationTicket', render: (text, record) => (record.vacationTicket ? '是' : '否') },
  { title: '是否是学生票', dataIndex: 'studentTicket', render: (text, record) => (record.studentTicket ? '是' : '否') },
  { title: '是否是快速票', dataIndex: 'fastTicket', render: (text, record) => (record.fastTicket ? '是' : '否') },
  { title: '门店', dataIndex: 'store', render: (text, record) => (record.store ? record.store.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  gameName: '游戏名称',
  gameSessionDatetime: '游戏场次日期',
  gameSessionName: '游戏场次名称',
  storeName: '门店名字',
  sessionTicket: '是否是场次票',
  vacationTicket: '是否是假期票',
  studentTicket: '是否是学生票',
  fastTicket: '是否是快速票',
  store: '门店',

}


const TicketPrintingBase={menuData,displayColumns,fieldLabels}
export default TicketPrintingBase



