
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"线下门店订单", menuFor: "offlineStoreOrder",
  		subItems: [
  {name: 'couponList', displayName:'优惠券'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/offlineStoreOrder/${text}/dashboard`}>{text}</Link>) },
  { title: '游戏名称', debugtype: 'string', dataIndex: 'gameName', width: '13' },
  { title: '创建时间', dataIndex: 'createTime', render: (text, record) => moment(record.createTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '游戏场次日期', dataIndex: 'gameSessionDatetime', render: (text, record) => moment(record.gameSessionDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '游戏场次名称', debugtype: 'string', dataIndex: 'gameSessionName', width: '9' },
  { title: '玩家数', debugtype: 'int', dataIndex: 'playerCount', width: '5' },
  { title: '应付金额', dataIndex: 'originalAmount', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '实际金额', dataIndex: 'actualAmount', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '调整应付金额', debugtype: 'string', dataIndex: 'adjustPayableAmount', width: '10' },
  { title: '手机号码', debugtype: 'string_china_mobile_phone', dataIndex: 'mobile', width: '15' },
  { title: '折扣', dataIndex: 'discount', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '订单状态', debugtype: 'string', dataIndex: 'orderStatus', width: '7' },
  { title: '员工', dataIndex: 'employee', render: (text, record) => (record.employee ? record.employee.displayName : '暂无') },
  { title: '门店', dataIndex: 'store', render: (text, record) => (record.store ? record.store.displayName : '暂无') },
  { title: '游戏', dataIndex: 'game', render: (text, record) => (record.game ? record.game.displayName : '暂无') },
  { title: '游戏场次', dataIndex: 'gameSession', render: (text, record) => (record.gameSession ? record.gameSession.displayName : '暂无') },
  { title: '游戏门票', dataIndex: 'gameTicket', render: (text, record) => (record.gameTicket ? record.gameTicket.displayName : '暂无') },
  { title: '支付方式', debugtype: 'string', dataIndex: 'paymentMethod', width: '7' },
  { title: '付款凭证', debugtype: 'string', dataIndex: 'paymentEvidence', width: '13' },
  { title: '付款凭证图片', dataIndex: 'paymentEvidenceImage', render: (text, record) => <ImagePreview imageTitle="付款凭证图片" imageLocation={record.paymentEvidenceImage} /> },
  { title: '门票打印', dataIndex: 'ticketPrinted', render: (text, record) => (record.ticketPrinted ? '是' : '否') },
  { title: '兑换手机', debugtype: 'string_china_mobile_phone', dataIndex: 'redeemPhone', width: '15' },
  { title: '兑换验证码', debugtype: 'string', dataIndex: 'redeemCode', width: '13' },

]

const fieldLabels = {
  id: 'ID',
  gameName: '游戏名称',
  createTime: '创建时间',
  gameSessionDatetime: '游戏场次日期',
  gameSessionName: '游戏场次名称',
  playerCount: '玩家数',
  originalAmount: '应付金额',
  actualAmount: '实际金额',
  adjustPayableAmount: '调整应付金额',
  mobile: '手机号码',
  discount: '折扣',
  orderStatus: '订单状态',
  employee: '员工',
  store: '门店',
  game: '游戏',
  gameSession: '游戏场次',
  gameTicket: '游戏门票',
  paymentMethod: '支付方式',
  paymentEvidence: '付款凭证',
  paymentEvidenceImage: '付款凭证图片',
  ticketPrinted: '门票打印',
  redeemPhone: '兑换手机',
  redeemCode: '兑换验证码',

}


const OfflineStoreOrderBase={menuData,displayColumns,fieldLabels}
export default OfflineStoreOrderBase



