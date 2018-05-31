
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"线上订单号", menuFor: "onlineOrder",
  		subItems: [
  {name: 'onlineOrderPaymentList', displayName:'线上订单支付'},
  {name: 'onlineOrderRedeemHistoryList', displayName:'线上订单兑换记录'},
  {name: 'couponList', displayName:'优惠券'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/onlineOrder/${text}/dashboard`}>{text}</Link>) },
  { title: '游戏名称', debugtype: 'string', dataIndex: 'gameName', width: '13' },
  { title: '创建时间', dataIndex: 'createTime', render: (text, record) => moment(record.createTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '游戏场次日期', dataIndex: 'gameSessionDatetime', render: (text, record) => moment(record.gameSessionDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '游戏场次名称', debugtype: 'string', dataIndex: 'gameSessionName', width: '9' },
  { title: '玩家数', debugtype: 'int', dataIndex: 'playerCount', width: '5' },
  { title: '应付金额', dataIndex: 'originalAmount', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '应付金额', dataIndex: 'payableAmount', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '兑换手机', debugtype: 'string_china_mobile_phone', dataIndex: 'redeemPhone', width: '15' },
  { title: '兑换验证码', debugtype: 'string', dataIndex: 'redeemCode', width: '13' },
  { title: '订单状态', debugtype: 'string', dataIndex: 'orderStatus', width: '7' },
  { title: '折扣', dataIndex: 'discount', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '门店', dataIndex: 'store', render: (text, record) => (record.store ? record.store.displayName : '暂无') },
  { title: '游戏', dataIndex: 'game', render: (text, record) => (record.game ? record.game.displayName : '暂无') },
  { title: '场次', dataIndex: 'session', render: (text, record) => (record.session ? record.session.displayName : '暂无') },
  { title: '游戏门票', dataIndex: 'gameTicket', render: (text, record) => (record.gameTicket ? record.gameTicket.displayName : '暂无') },
  { title: '客户', dataIndex: 'customer', render: (text, record) => (record.customer ? record.customer.displayName : '暂无') },
  { title: '游戏平台', dataIndex: 'gamePlatform', render: (text, record) => (record.gamePlatform ? record.gamePlatform.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  gameName: '游戏名称',
  createTime: '创建时间',
  gameSessionDatetime: '游戏场次日期',
  gameSessionName: '游戏场次名称',
  playerCount: '玩家数',
  originalAmount: '应付金额',
  payableAmount: '应付金额',
  redeemPhone: '兑换手机',
  redeemCode: '兑换验证码',
  orderStatus: '订单状态',
  discount: '折扣',
  store: '门店',
  game: '游戏',
  session: '场次',
  gameTicket: '游戏门票',
  customer: '客户',
  gamePlatform: '游戏平台',

}


const OnlineOrderBase={menuData,displayColumns,fieldLabels}
export default OnlineOrderBase



